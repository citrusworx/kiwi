class MediaEQ {
    static audioContext = new (window.audioContext || window.webKitAudioContext);
    static mediaElement;
    static low;
    static mid;
    static high;

    constructor(){
        this.low = this.createFilter('lowshelf', 300);
        this.mid = this.createFilter('peaking', 1000);
        this.high = this.createFilter('highshelf', 3000);
    }
    
    createFilter(type, freq){
        const filter = this.audioContext.createBiquadFilter();
        filter.type = type;
        filter.frequency.value = freq;
        filter.gain.value = 0;
        return filter;     
    }

    setMediaType(type, src){
        mediaElement = document.createElement(type);
        mediaElement.id = type;
        mediaElement.src = `${src}`;
    }

    setLow(value){
        this.low.gain.setValueAtTime(value, this.audioContext.currentTime);
    }

    setMid(value){

    }

    setHigh(value){

    }
}