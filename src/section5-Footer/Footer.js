import imgs from '../img/imgs';

function Footer() {
    return (
        <footer>
            <span id="copyrightLine">
                <span>&copy; <span id="copyrightYear"></span> Axel Straube</span>
                <span> | </span>
                <span>All rights reserved</span>
                <span> | </span>
                <span>No pineapples were harmed in the making of this website</span>
            </span>
            <div id="creditContainer">
                <p>
                    <button type="button" data-bs-toggle="collapse" data-bs-target="#creditsCollapse" aria-expanded="false" aria-controls="creditsCollapse">Image Credits </button>
                </p>
                <div class="collapse" id="creditsCollapse">
                    <div id="creditsCardBody">
                        <ul id="credits">
                            <li>
                                <img src={imgs.cloud} alt="png image from pngtree.com" />
                                <span><a href='https://pngtree.com/freepng/watercolor-clouds-blue-cloud-sky_6409065.html' target="_blank">png image from pngtree.com/</a></span>
                            </li>
                            {/* <li>
                                <img src="img/Pngtree-8910691-lamp.png" alt="Hand Drawn Cartoon Illustration PNG Designed by 58pic" />
                                <span>Hand Drawn Cartoon Illustration PNG Designed by 58pic from https://pngtree.com/freepng/hand-drawn-cartoon-illustration-desk-lamp-cute-element-stationery_8910691.html</span>
                            </li> */}
                            {/* <li>
                                <img src="img/pexels-anna-shvets-11124886-cartoon-top.png" alt="Photo by Anna Shvets from Pexels" />
                                <span>Photo by Anna Shvets from Pexels: https://www.pexels.com/photo/person-holding-a-sliced-pineapple-on-yellow-background-11124886/</span>
                            </li> */}
                            <li>
                                {/* <img src="img/pexels-shvets-production-7194810-cartoon-right.png" alt="Photo by SHVETS production from Pexels" /> */}
                                <span>Photo by SHVETS production from Pexels: https://www.pexels.com/photo/unrecognizable-person-with-halved-pineapple-7194810/</span>
                            </li>
                            <li>
                                {/* <img src="img/pexels-cottonbro-studio-4631073-cartoon-left.png" alt="Photo by cottonbro studio from Pexels" /> */}
                                <span>Photo by cottonbro studio from Pexels: https://www.pexels.com/photo/photo-of-person-holding-sliced-coconut-4631073/</span>
                            </li>
                            <li>
                                {/* <img src="img/Pngtree-houseplant-pot-6015944-1.png" alt="green plants PNG Designed By chen" /> */}
                                <span>green plants PNG Designed By chen from https://pngtree.com/freepng/houseplant-pot_6015944.html?sol=downref&id=bef</span>
                            </li>
                            <li>
                                {/* <img src="img/ocean-wave-paint-brush-stroke-1.png" alt="Painted ocean wave" /> */}
                                <span>https://www.onlygfx.com/10-ocean-wave-paint-brush-stroke-png-transparent/</span>
                            </li>
                            <li>
                                {/* <img src="img/Pngtree-yellow-wooden-boat_4724839.png" alt="Boat" /> */}
                                <span><a href='https://pngtree.com/freepng/yellow-wooden-boat_4724839.html'>png image from pngtree.com/</a></span>
                            </li>
                            <li>
                                {/* <img src="img/pexels-pixabay-46160.jpeg" alt="Brown field and blue sky photo by Pixabay" /> */}
                                <span>Photo by Pixabay: https://www.pexels.com/photo/brown-field-and-blue-sky-46160/</span>
                            </li>
                            <li>
                                {/* <img src="img/Pngtree-book-open-clipart-7903102.png" alt="book PNG Designed By esenefte" /> */}
                                <span>book PNG Designed By esenefte from https://pngtree.com/freepng/book-open-clipart_7903102.html?sol=downref&id=bef</span>
                            </li>
                            <li>
                                {/* <img src="img/Pngtree-half-open-window-shadow-6888330.png" alt="half open PNG Designed By lifasm" /> */}
                                <span>half open PNG Designed By lifasm from https://pngtree.com/freepng/half-open-window-shadow_6888330.html?sol=downref&id=bef</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer