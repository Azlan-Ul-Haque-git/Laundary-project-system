const express = require("express");
const router = express.Router();

const { orders } = require("../data/store");
const { createOrder } = require("../models/order");

// CREATE ORDER
router.post("/", (req, res) => {
    const order = createOrder(req.body);
    orders.push(order);
    res.json(order);
});

// GET ORDERS
router.get("/", (req, res) => {
    const { status, search } = req.query;

    let result = orders;

    if (status) {
        result = result.filter(o => o.status === status);
    }

    if (search) {
        result = result.filter(
            o =>
                o.customerName.toLowerCase().includes(search.toLowerCase()) ||
                o.phone.includes(search)
        );
    }

    res.json(result);
});

// UPDATE STATUS
router.put("/:id", (req, res) => {
    const order = orders.find(o => o.id == req.params.id);

    if (!order) return res.status(404).send("Order not found");

    order.status = req.body.status;
    res.json(order);
});

// DASHBOARD
router.get("/stats", (req, res) => {
    const totalOrders = orders.length;

    const totalRevenue = orders.reduce(
        (sum, o) => sum + o.totalAmount,
        0
    );

    const statusCount = {};

    orders.forEach(o => {
        statusCount[o.status] = (statusCount[o.status] || 0) + 1;
    });

    res.json({ totalOrders, totalRevenue, statusCount });
});

module.exports = router;