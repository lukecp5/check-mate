var colors = ['#00A1CB','#01A4A4','#113F8C','#61AE24','#D0D102','#32742C','#E54028','#F18D05','#D70060'];
const randomColor = (colors) => {
    return colors[Math.floor(Math.random()* colors.length)];
};

export default randomColor; 