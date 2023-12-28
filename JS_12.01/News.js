class News
{
    constructor(title,text,tags,date)
    {
        this.title = title
        this.text =text;
        this.tags = tags
        let now = new Date();
        let buf = new Date(date);
        let dif = (now-buf)/(24 * 60 * 60 * 1000);
        this.date = new Date(date);
        if(dif<1)
            this.printDate = "Today";
        else if(dif<8)
            this.printDate=`${dif.toString()[0]} days ago`
        else
            this.printDate = buf.toLocaleDateString('eu', {  year:"numeric", month:"numeric", day:"numeric"})
    }
    print(el)
    {
        let p = document.createElement("p");
        p.classList.add("fw-bold");
        for(let tag of this.tags)
        {
            p.innerHTML+=`#${tag} `;
        }
        let div = document.createElement("div");
        div.innerHTML=`<h4>${this.title}</h4>
        <p class="sm">${this.printDate}</p>
        <p>${this.text}</p>`
        div.appendChild(p);
        el.appendChild(div);

    }
    
}