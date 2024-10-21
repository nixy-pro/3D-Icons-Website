document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mousedown', mouseDownHandler);
});

function mouseDownHandler(e) {
    const icon = e.currentTarget;
    let prevX = e.clientX;
    let prevY = e.clientY;

    function mouseMoveHandler(e) {
        const newX = prevX - e.clientX;
        const newY = prevY - e.clientY;
        
        const rect = icon.getBoundingClientRect();
        icon.style.left = `${rect.left - newX}px`;
        icon.style.top = `${rect.top - newY}px`;
        
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}
