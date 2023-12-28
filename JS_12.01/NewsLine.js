class NewsLine
{
    constructor(news, element)
    {
        this.news = news;
        this.element = element;
    }
    get newsCount()
    {
        return this.news.length;
    }
    printNews()
    {
        this.element.innerHTML = "";
        for(let myNew of this.news)
        {
            let div = document.createElement("div");
            div.classList.add("border")
            div.classList.add("border-black")
            div.classList.add("mb-2")
            div.classList.add("p-2")
            myNew.print(div);
            div.innerHTML+=`<form onsubmit="deleteNew(event)"><input type="hidden" name="id" value=${this.news.indexOf(myNew)}><button class="btn btn-outline-danger">delete</button></form>`
            this.element.appendChild(div);
        }
    }
    deleteNew(index)
    {
        this.news.splice(index,1);
        this.printNews()
    }
    sortByDate() {
        console.log(this.news);
        this.news.sort((a, b) => b.date - a.date);
        console.log(this.news);
        this.printNews();
    }
    addNew(news)
    {
        this.news.push(news)
        this.printNews();
    }
    findByTag(tag) {
        let filteredNews = this.news.filter(news => news.tags.includes(tag));
        let filterText = document.getElementById("filterText");
        if (filteredNews.length > 0) {
            filterText.innerText = `News with Tag ${tag}:`;
            let filteredNewsLine = new NewsLine(filteredNews, this.element);
            filteredNewsLine.printNews();
        } else {
            filterText.innerText = `No news found with Tag ${tag}`;
        }
    }
    clearFilter()
    {
        let filterText = document.getElementById("filterText");
        filterText.innerHTML="";
        this.printNews();
    }

}