const generateId = () => Math.floor(Math.random() * 1000000);

const createOrder = (data) => {
    const total = data.items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );

    return {
        id: generateId(),
        customerName: data.customerName,
        phone: data.phone,
        items: data.items,
        status: "RECEIVED",
        totalAmount: total,
        deliveryDate: new Date(Date.now() + 2 * 86400000),
        createdAt: new Date(),
    };
};

module.exports = { createOrder };