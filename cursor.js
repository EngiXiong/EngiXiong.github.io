
    // Inverted cursor
    const cursor = document.getElementById("invertedCursor");
    cursorProperties = cursor.getBoundingClientRect();
    const body = document.getElementsByTagName("body")[0];

    body.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    });

    // Enlarge cursor when it hovers over anchor elements
    const anchorElements = document.querySelectorAll("a");

    anchorElements.forEach((element) => {
        element.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(1.5)";
        });

        element.addEventListener("mouseout", () => {
            cursor.style.transform = "scale(1)";
        });
    });

    window.onload = function () {
        document.body.style.cursor = "none";
    };
