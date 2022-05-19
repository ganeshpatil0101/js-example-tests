export function DebounceTest() {
    const Debounce = (callback, limit) => { 
        let timer;
        return (param) => { 
            if(timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(()=>{ 
                callback(param)
            }, limit);
        }
    };
    let keystroke = '';
    const debounceCallback = (allStr) => { 
        console.log(allStr);
    }
    const wrapper = Debounce(debounceCallback, 500);
    function onKeyPressHandler(e) {
        console.log(e.key);
        keystroke+=e.key;
        wrapper(keystroke);
    };
    
    document.addEventListener('keyup', onKeyPressHandler);
    return onKeyPressHandler;
    //
    // NOTE: START TYPING ON DOCUMENT FOR DEMO
};
