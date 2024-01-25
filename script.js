let cursorTimer;
document.body.onmousemove = () => {
    document.body.style.cursor = null;
    clearTimeout(cursorTimer);
    cursorTimer = setTimeout(() => document.body.style.cursor = 'none', 3000);
}