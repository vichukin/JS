class PrintMachine{
    constructor(fontSize,color,fontFamily)
    {
        this.fontSize = fontSize;
        this.color=color;
        this.fontFamily = fontFamily;
    }
    print(text,element) {
        element.innerHTML =`<p style='font-size:${this.fontSize}px; color: ${this.color}; font-family:${this.fontFamily}'>${text}</p>`;
    }
}