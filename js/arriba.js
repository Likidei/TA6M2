// Mostrar/ocultar botón y scroll al top
        (function(){
            const btn = document.getElementById('btn-top');
            if(!btn) return;
            const showOffset = 200; // px del scroll para mostrar
            window.addEventListener('scroll', () => {
                if(window.scrollY > showOffset){
                    btn.classList.add('show');
                } else {
                    btn.classList.remove('show');
                }
            }, { passive: true });

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            })();