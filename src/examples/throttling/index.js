export function Throttling() {
    let Throttle = (callback, limit) => { 
        let flag = false;
        return () => { 
            if(flag) {
                return false;
            }
            setTimeout(() => {
                console.log(' called setTimout ', flag);
                flag = false;
                callback();
            }, limit);
            flag = true;
        }
    }
    const funTest = () => {
        console.log(' Function test callback called ');
    }
    function handlerScroll(){ 
        console.log(' onScroll ');
        throttledCb();
    };
    const throttledCb = Throttle(funTest, 500);
    document.addEventListener('scroll', handlerScroll);
    return handlerScroll;
    // setInterval(() => {
    //     console.log('===>>> intervala ');
    //     throttledCb();
    // }, 1000);

// Added text for scrollbar for demo purpose
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Vivamus rhoncus quam id velit dignissim ultrices.
// Donec aliquam turpis non consectetur imperdiet.
// Nam congue nulla sit amet sem vehicula eleifend.
// Nulla ut est a turpis ultricies sollicitudin.
// Sed vel magna sollicitudin, ultricies ante viverra, mattis eros.
// Praesent ullamcorper urna ut nibh rhoncus pretium.
// Vestibulum quis massa dapibus, faucibus metus sed, vestibulum risus.
// Etiam accumsan lorem at risus sagittis faucibus.
// Proin ac leo euismod, pharetra purus quis, cursus quam.
// Nullam rutrum urna eget vestibulum vestibulum.
// Donec cursus arcu a urna tincidunt, quis sodales est pretium.
// Etiam ultrices dolor et tortor pulvinar egestas.
// Proin nec elit id diam iaculis rhoncus at nec orci.
// Sed id dolor nec risus tempus sagittis.
// Curabitur venenatis ante vulputate neque dictum, tempor auctor justo tincidunt.
// Pellentesque auctor magna eu sodales venenatis.
// Praesent ac nunc mollis, elementum est non, lobortis leo.
// Morbi vel nisi et metus semper ultricies ac quis lorem.
// Vestibulum dignissim augue quis maximus volutpat.
// Cras sed nisl a lacus vehicula placerat.
// Nunc molestie dolor sit amet leo consectetur euismod.
// Pellentesque malesuada purus ut erat vehicula dignissim.
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Vivamus rhoncus quam id velit dignissim ultrices.
// Donec aliquam turpis non consectetur imperdiet.
// Nam congue nulla sit amet sem vehicula eleifend.
// Nulla ut est a turpis ultricies sollicitudin.
// Sed vel magna sollicitudin, ultricies ante viverra, mattis eros.
// Praesent ullamcorper urna ut nibh rhoncus pretium.
// Vestibulum quis massa dapibus, faucibus metus sed, vestibulum risus.
// Etiam accumsan lorem at risus sagittis faucibus.
// Proin ac leo euismod, pharetra purus quis, cursus quam.
// Nullam rutrum urna eget vestibulum vestibulum.
// Donec cursus arcu a urna tincidunt, quis sodales est pretium.
// Etiam ultrices dolor et tortor pulvinar egestas.
// Proin nec elit id diam iaculis rhoncus at nec orci.
// Sed id dolor nec risus tempus sagittis.
// Curabitur venenatis ante vulputate neque dictum, tempor auctor justo tincidunt.
// Pellentesque auctor magna eu sodales venenatis.
// Praesent ac nunc mollis, elementum est non, lobortis leo.
// Morbi vel nisi et metus semper ultricies ac quis lorem.
// Vestibulum dignissim augue quis maximus volutpat.
// Cras sed nisl a lacus vehicula placerat.
// Nunc molestie dolor sit amet leo consectetur euismod.
// Pellentesque malesuada purus ut erat vehicula dignissim.
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Vivamus rhoncus quam id velit dignissim ultrices.
// Donec aliquam turpis non consectetur imperdiet.
// Nam congue nulla sit amet sem vehicula eleifend.
// Nulla ut est a turpis ultricies sollicitudin.
// Sed vel magna sollicitudin, ultricies ante viverra, mattis eros.
// Praesent ullamcorper urna ut nibh rhoncus pretium.
// Vestibulum quis massa dapibus, faucibus metus sed, vestibulum risus.
// Etiam accumsan lorem at risus sagittis faucibus.
// Proin ac leo euismod, pharetra purus quis, cursus quam.
// Nullam rutrum urna eget vestibulum vestibulum.
// Donec cursus arcu a urna tincidunt, quis sodales est pretium.
// Etiam ultrices dolor et tortor pulvinar egestas.
// Proin nec elit id diam iaculis rhoncus at nec orci.
// Sed id dolor nec risus tempus sagittis.
// Curabitur venenatis ante vulputate neque dictum, tempor auctor justo tincidunt.
// Pellentesque auctor magna eu sodales venenatis.
// Praesent ac nunc mollis, elementum est non, lobortis leo.
// Morbi vel nisi et metus semper ultricies ac quis lorem.
// Vestibulum dignissim augue quis maximus volutpat.
// Cras sed nisl a lacus vehicula placerat.
// Nunc molestie dolor sit amet leo consectetur euismod.
// Pellentesque malesuada purus ut erat vehicula dignissim.
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Vivamus rhoncus quam id velit dignissim ultrices.
// Donec aliquam turpis non consectetur imperdiet.
// Nam congue nulla sit amet sem vehicula eleifend.
// Nulla ut est a turpis ultricies sollicitudin.
// Sed vel magna sollicitudin, ultricies ante viverra, mattis eros.
// Praesent ullamcorper urna ut nibh rhoncus pretium.
// Vestibulum quis massa dapibus, faucibus metus sed, vestibulum risus.
// Etiam accumsan lorem at risus sagittis faucibus.
// Proin ac leo euismod, pharetra purus quis, cursus quam.
// Nullam rutrum urna eget vestibulum vestibulum.
// Donec cursus arcu a urna tincidunt, quis sodales est pretium.
// Etiam ultrices dolor et tortor pulvinar egestas.
// Proin nec elit id diam iaculis rhoncus at nec orci.
// Sed id dolor nec risus tempus sagittis.
// Curabitur venenatis ante vulputate neque dictum, tempor auctor justo tincidunt.
// Pellentesque auctor magna eu sodales venenatis.
// Praesent ac nunc mollis, elementum est non, lobortis leo.
// Morbi vel nisi et metus semper ultricies ac quis lorem.
// Vestibulum dignissim augue quis maximus volutpat.
// Cras sed nisl a lacus vehicula placerat.
// Nunc molestie dolor sit amet leo consectetur euismod.
// Pellentesque malesuada purus ut erat vehicula dignissim.
// Curabitur venenatis ante vulputate neque dictum, tempor auctor justo tincidunt.
// Pellentesque auctor magna eu sodales venenatis.
// Praesent ac nunc mollis, elementum est non, lobortis leo.
// Morbi vel nisi et metus semper ultricies ac quis lorem.
// Vestibulum dignissim augue quis maximus volutpat.
// Cras sed nisl a lacus vehicula placerat.
// Nunc molestie dolor sit amet leo consectetur euismod.
// Pellentesque malesuada purus ut erat vehicula dignissim.
// Lorem ipsum dolor sit amet, consectetur adipiscing elit.
// Vivamus rhoncus quam id velit dignissim ultrices.
// Donec aliquam turpis non consectetur imperdiet.
// Nam congue nulla sit amet sem vehicula eleifend.
// Nulla ut est a turpis ultricies sollicitudin.
// Sed vel magna sollicitudin, ultricies ante viverra, mattis eros.
// Praesent ullamcorper urna ut nibh rhoncus pretium.
// Vestibulum quis massa dapibus, faucibus metus sed, vestibulum risus.
// Etiam accumsan lorem at risus sagittis faucibus.
// Proin ac leo euismod, pharetra purus quis, cursus quam.
// Nullam rutrum urna eget vestibulum vestibulum.
// Donec cursus arcu a urna tincidunt, quis sodales est pretium.
// Etiam ultrices dolor et tortor pulvinar egestas.
// Proin nec elit id diam iaculis rhoncus at nec orci.
// Sed id dolor nec risus tempus sagittis.
// Curabitur venenatis ante vulputate neque dictum, tempor auctor justo tincidunt.
// Pellentesque auctor magna eu sodales venenatis.
// Praesent ac nunc mollis, elementum est non, lobortis leo.
// Morbi vel nisi et metus semper ultricies ac quis lorem.
// Vestibulum dignissim augue quis maximus volutpat.
// Cras sed nisl a lacus vehicula placerat.
// Nunc molestie dolor sit amet leo consectetur euismod.
// Pellentesque malesuada purus ut erat vehicula dignissim.

}
