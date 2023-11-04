function assignRGBColor(event) {
    let totalWidth = window.innerWidth;
    let totalHeight = window.innerHeight;
    let redValue = Math.round(event.pageY * 256 / totalHeight - 1);
    let blueValue = Math.round(event.pageX * 256 / totalWidth - 1);
    return `rgb(${redValue},0,${blueValue})`;
}

document.addEventListener('mousemove', function(e) {
    document.body.style.backgroundColor = assignRGBColor(e);
});
