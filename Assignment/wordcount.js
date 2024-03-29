function wordcount(text) {
    const words = text.split(/\s+/);
    const count = {};

    for(const el of words) {
        if(el in count) {
            count[el]++;
        }
        else
        {
            count[el]=1;
        }
    }

    return count
}

const text = "pw skill is a amazing platform. pw skill also gives nice edu."
console.log(wordcount(text));
