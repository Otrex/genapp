class Tag {
    constructor (id, name, atr, cnt){
        this.id = id
        this.name = name
        this.atr = atr
        this.cnt = cnt
    }

    atrify() {
        let atrs = ""
        for (const key in this.atr) {
                const element = this.atr[key];
                atrs += `${key}='${element}' `
        }
        return atrs
    }
    liquify() {
        return `<${this.name} ${this.atrify()} >\n ${this.cnt.map(function (e) {
            let v
            v += e.liquify()
            return v
        })}\n </${this.name}>`;
    }
}

class TextNode {
    constructor (cnt)
    {
        this.cnt = cnt
    }
    liquify() {
        return `${this.cnt}`
    }
}
class Section extends Tag {
    constructor(id, atr, cnt){
        var name = "section";
        super(id, name, atr, cnt)
    }  
}
class Div extends Tag {
    constructor(id, atr, cnt){
        var name = "div";
        super(id, name, atr, cnt)
    }  
}

class Input extends Tag {
    constructor(id, atr){
        var name = "input";
        super(id, name, atr, "")
    } 

    liquify(){
        return `<${this.name} ${this.atrify()} />`
    }
}

export {
    Input,
    Section, 
    TextNode, 
    Div
}

