import { useState, useRef, ReactNode } from 'react';

import './MouseMoveBox.scss';

interface MouseMoveBoxInt {
    children: ReactNode,
    speed?: number,  // скорость перетаскивания мышью
    scroll?: boolean, // полоса скролла
    // horisont?: boolean, // для добавления класса с курсором "захват" для горизонтального скролла 
}

function MouseMoveBox({ children, speed = 2, scroll = false }: MouseMoveBoxInt) {
    const ref = useRef<any>();
    const [isDown, setIsDown] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [startX, setSrartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    function handlerMouseDown(e: any) {
        setIsDown(true)
        setIsActive(true)
        setSrartX(e.pageX - ref.current.offsetLeft)
        setScrollLeft(ref.current.scrollLeft)
    }

    function handlerMouseleave() {
        setIsDown(false)
        setIsActive(false)
    }

    function handlerMouseUp() {
        setIsDown(false)
        setIsActive(false)
    }

    function handlerMouseMove(e: any) {
        if (!isDown) {
            return
        };
         e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * speed; //scroll-fast, менняя цифру можно ускорить передвижение
        ref.current.scrollLeft = scrollLeft - walk// передвигает сам элемент внутри бокса со скролом
    }

    return (
        <div className={`
        scroll
        container-scroll        
        ${isActive ? 'container-scroll_active' : ''}
        ${scroll ? 'container-scroll_scroll' : 'container-scroll_non-scroll'}
        `}
            ref={ref}
            onMouseDown={(e) => handlerMouseDown(e)}
            onMouseLeave={handlerMouseleave}
            onMouseUp={handlerMouseUp}
            onMouseMove={(e) => handlerMouseMove(e)}
        >
            {children}
        </div>
    )
}

export default MouseMoveBox;