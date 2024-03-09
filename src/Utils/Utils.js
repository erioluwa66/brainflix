const dateConvertor = (timestamp) => {
    const fullDate = new Date(timestamp);
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth() + 1; // Month is zero-based, so add 1
    const day = fullDate.getDate();

    return `${day}/${month}/${year}`;
};


export const api_url = "http://localhost:8080"
export const api_key = "?api_key=bc6382eb-06d8-4d5e-8db7-70b405ec056d"

export default dateConvertor;
