const dateConvertor = (timestamp) => {
    const fullDate = new Date(timestamp);
    const year = fullDate.getFullYear();
    const month = ("0" + (fullDate.getMonth() + 1)).slice(-2);
    const day = ("0" + fullDate.getDate()).slice(-2);

    return `${day}/${month}/${year}`;
};

export default dateConvertor;