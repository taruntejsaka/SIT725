function isAdult(age) {
    if (typeof age !== 'number' || age < 0) {
        throw new Error("Invalid age");
    }
    return age >= 18;
}

// Export for testing
if (typeof module !== "undefined") {
    module.exports = { isAdult };
}
