import React, { useEffect } from 'react'
import {gsap} from 'gsap';
import SpiderLogo2 from './spiderlogo2.png'
import './Animation.css'
import svgFile from './svg.svg';
export default function Animation() {
    useEffect(() => {
        const tl = gsap.timeline();
        // style="enable-background:new 0 0 1186.4 662.8;"
        let svgAnimation = document.querySelector('#svg');
        let bgd = document.querySelector('#background rect');
        let table = document.querySelector('#table_legs, #table');
        let lampLeg = document.querySelector('#lamp > .lamp-leg');
        let lampbt = document.querySelector('#lamp-bottom');
        let lampLight = document.querySelector('#lamp > .light');
        let lampLine = document.querySelector('#lamp-line');
        let lampLineB = document.querySelector('#lamp-line-b');
        let lampLineT = document.querySelector('#lamp-line-t');
        let lampCircle = document.querySelector('#lamp-circle');
        let lampHead = document.querySelector('#lamp-head');
        let lampHeader = document.querySelector('#lamp-header');
        let lampBody = document.querySelector('#lamp-body');
        let computer = document.querySelectorAll('#computer > *');
        let keyboard = document.querySelectorAll('#keyboard > *');
        let logo = document.querySelector('#svg_83');
        let sunIcon = document.querySelector("#sun_icon");
        let asset = document.querySelectorAll('#computer_mouse > * , #coffee_mug > *');
        tl.from(bgd, 0.2, { opacity: 0, scale: 0, transformOrigin: 'center center' })
            .staggerFrom(table, 0.2, { y: "-=200", opacity: 0, ease: "elastic.out(1,1)" }, 0.1)
            .from(lampLeg, 0.2, { opacity: 0, x: "-200", ease: "elastic.out(1,1)" })
            .from(lampbt, 0.2, { opacity: 0, scale: 0, transformOrigin: 'center center' })
            .from(lampLineB, 0.3, { opacity: 0, transformOrigin: '100% 100%', rotation: '-180deg' })
            .from(lampCircle, 0.1, { opacity: 0, x: '-=100', y: '-=100' })
            .from(lampLineT, 0.3, { opacity: 0, transformOrigin: '0% 100%', rotation: '-180deg' })
            .from(lampHead, 0.2, { opacity: 0, scale: 0, ease: "elastic.out(1,1)" })
            .from(lampHeader, 0.5, { transformOrigin: '60% 60%', rotation: '60deg' })
            .from(lampBody, 0.5, { transformOrigin: '70% 70%', rotation: '-25deg' })
            .staggerFrom(computer, 1, { opacity: 0, scale: 0, transformOrigin: 'center center', ease: "back.out(1,1)" }, 0.2)
            .staggerFrom(logo, 1, { opacity: 0, scale: 0, transformOrigin: 'center center', ease: "back.out(1,1)" }, 0.2)
            .staggerFrom(keyboard, 0.5, { opacity: 0, y: '-=100', ease: "linear.inOut(1,1)" }, 0.05)
            .staggerFrom(asset, 0.5, { opacity: 0 }, 0.05)
            .to(lampLight, 0.2, { opacity: 0.8, ease: "elastic.out(1,1)", delay: 0.5 }, "a")
            .to(lampLight, 0.1, { opacity: 0 }, "b")
            .to(lampLight, 0.1, { opacity: 0.2 }, "c")
            .to(bgd, 0.2, { opacity: 0.1, delay: 0.5 }, "a-=0.05")
            .to(bgd, 0.1, { opacity: 1 }, "b-=0.05")
            .to(bgd, 0.1, { opacity: 0.1 }, "c-=0.05")
            .to(bgd, 0.2, { opacity: 0, ease: "elastic.out(1,1)",fill: '#010213' })
            .fromTo(lampLine, 0.2, { opacity: 0 }, { opacity: 0.2, delay: 0.5 }, "a-=0.05")
            .to(lampLine, 0.1, { opacity: 1 }, "b-=0.05")
            .to(lampLine, 0.1, { opacity: 0.5 }, "c-=0.05");
    });

    return (
        <>
            <div id="svg-container">
                <svg viewBox="0 0 1500 662.8" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" version="1.1">
                    <g>
                        <g stroke="null" id="background">
                            <rect stroke="null" id="svg_1" height="675.45826" width="1508.30255" fill="#192e45" y="-8.65826" x="-2.7" />
                        </g>
                        <g id="table_legs">
                            <g id="svg_2">
                                <defs transform="translate(44.5312 0) translate(127.06 0) translate(20.2532 -10.1266)">
                                    <rect height="662.8" width="1197.1" y="0" x="-9.7" id="SVGID_1_" />
                                    <pattern height="100" width="100" id="logo-pattern">
                                        <image id="svg_3" height="100" width="100" y="186.1" x="423.2" xlinkHref={SpiderLogo2} />
                                    </pattern>
                                </defs>
                                <clipPath transform="translate(44.5312 0) translate(127.06 0) translate(20.2532 -10.1266)" id="SVGID_2_">
                                    <use x="191.84456" y="-10.12658" id="svg_4" xlinkHref="#SVGID_1_" />
                                </clipPath>
                                <rect id="svg_5" strokeMiterlimit="10" stroke="#0B0B0B" fill="#EDCF94" clipPath="url(#SVGID_2_)" height="56.4" width="34" y="615.97342" x="239.04456" />
                                <rect id="svg_6" strokeMiterlimit="10" stroke="#0B0B0B" fill="#EDCF94" clipPath="url(#SVGID_2_)" height="49.9" width="281.4" y="616.47342" x="1042.34456" />
                                <path id="svg_7" fill="#FFCF0A" clipPath="url(#SVGID_2_)" d="m465.64456,576.17342" />
                            </g>
                        </g>
                        <g stroke="null" id="table">
                            <path stroke="#0B0B0B" id="svg_8" strokeMiterlimit="10" fill="#EDCF94" d="m1365.04337,629.20634l-1153.6,0c-2.7,0 -5,-1.34919 -5,-3.06634l0,-17.53948c0,-1.71715 2.2,-3.06634 5,-3.06634l1153.6,0c2.7,0 5,1.34919 5,3.06634l0,17.53948c0,1.71715 -2.2,3.06634 -5,3.06634z" />
                            <rect stroke="null" id="svg_9" fill="#D7B476" height="12.87864" width="280.4" y="630.55553" x="1044.04337" />
                            <rect stroke="null" id="svg_10" fill="#D7B476" height="8.09514" width="33" y="629.94227" x="240.74337" />
                        </g>
                        <g id="computer">
                            <polygon id="svg_11" strokeMiterlimit="10" stroke="#050606" fill="#888889" points="765.6912078857422,547.0341796875 761.3912200927734,573.8341674804688 860.0911712646484,573.8341674804688 854.7911834716797,547.0341796875 " />
                            <polyline id="svg_12" fill="#767677" points="765.3912200927734,554.4342041015625 764.5911712646484,560.4342041015625 856.4911956787109,560.4342041015625 855.3912200927734,553.4342041015625 765.8912200927734,553.4342041015625 " />
                            <path id="svg_13" strokeMiterlimit="10" stroke="#050606" fill="#E5E9ED" d="m985.09121,555.13418l-348.6,0c-6.8,0 -12.3,-5.3 -12.3,-11.8l0,-259.5c0,-6.5 5.5,-11.8 12.3,-11.8l348.5,0c6.8,0 12.3,5.3 12.3,11.8l0,259.4c0.1,6.6 -5.4,11.9 -12.2,11.9z" />
                            <path id="svg_14" strokeMiterlimit="10" stroke="#050606" fill="#202021" d="m987.79121,509.03418l-357.8,0c-3.2,0 -5.8,-2.6 -5.8,-5.8l0,-220.3c0,-6.1 4.9,-11 11,-11l350.6,0c6.4,0 11.7,5.2 11.7,11.7l0,215.8c-0.1,5.3 -4.4,9.6 -9.7,9.6z" />
                            <rect id="svg_15" strokeMiterlimit="10" fill="#010213" stroke="#070808" height="211.3" width="341" y="284.83418" x="640.29121" />
                            <path id="svg_16" strokeMiterlimit="10" stroke-width="2" stroke="#070808" fill="#C7C6C6" d="m735.89121,595.03418l1,5.6c0.2,1.3 1.3,2.2 2.6,2.2l138.2,0c2.9,0 5.4,-2.1 5.9,-4.9l0,-0.1c0.2,-1 -0.6,-1.8 -1.5,-1.8l-146.2,-1z" />
                            <path id="svg_17" strokeMiterlimit="10" stroke="#070808" fill="#A3A3A2" d="m761.09121,573.83418l-25.4,20.3c-1.3,1.1 -0.6,3.3 1.2,3.3l145.5,-0.4c1.1,0 1.6,-1.3 0.8,-2l-23.8,-21.2l-98.3,0z" />
                            <path id="svg_18" fill="#A3A3A2" d="m762.49121,572.73418l-0.6,1.3c-1,1 -1.4,1.3 -2,1.9l-4.7,3.7l109.2,0.4l-3,-3.1c-0.4,-0.4 -0.9,-0.8 -1.2,-1.2c-0.7,-0.8 -0.7,-0.6 -1.1,-1.7l0,-1.3l-96.6,0z" />
                            <path id="svg_19" fill="#A3A3A2" d="m738.79121,600.53418c0.3,0.6 1.2,1.8 2,1.8l135.7,0c0.5,0 1.1,-0.1 1.6,-0.2c0.5,-0.2 1.2,-1.2 1.8,-1.6l-141.1,0z" />
                            <circle id="svg_20" fill="#5FBB46" r="1.3" cy="279.33418" cx="810.79121" />
                            <path id="svg_21" fill="#2D2D2D" d="m806.69121,274.23418l-166.1,2.5c0,0 -9.7,0.9 -10.9,10.3c-1.2,9.4 -1.9,118.4 -3.4,138.9s0,-138.9 0,-138.9s-1.9,-13.4 14.2,-13.1l166.2,0.3z" />
                            <path id="svg_22" fill="#2D2D2D" d="m814.19121,274.23418l166.1,2.5c0,0 9.7,0.9 10.9,10.3c1.2,9.4 1.9,118.4 3.4,138.9c1.5,20.5 0,-138.9 0,-138.9s1.9,-13.4 -14.2,-13.1l-166.2,0.3z" />
                            <path id="svg_23" fill="#CED1D3" d="m980.89121,554.13418l-341.3,0c-10.5,1 -14.1,-5.4 -14.2,-8.6l0,0c1.4,0.4 2.9,0.6 4.4,0.6l358.8,1.6c2.5,0 4.9,-0.4 7.2,-1.3l0,0c-1.1,3.4 -3.6,8.7 -14.9,7.7z" />
                            <path id="svg_24" fill="#000033" clip-rule="evenodd" fill-rule="evenodd" d="m810.29121,524.53418c0.6,0 1.4,0.1 2.2,0.4c0.9,0.3 1.5,0.4 1.7,0.4c0.4,0 1,-0.1 1.8,-0.4c0.8,-0.3 1.6,-0.4 2.2,-0.4c1,0 1.9,0.3 2.7,0.8c0.4,0.3 0.9,0.7 1.3,1.3c-0.7,0.6 -1.1,1.1 -1.4,1.5c-0.5,0.8 -0.8,1.7 -0.8,2.6c0,1 0.3,2 0.9,2.8c0.6,0.8 1.2,1.4 2,1.6c-0.3,1 -0.8,2.1 -1.5,3.2c-1.1,1.6 -2.2,2.5 -3.2,2.5c-0.4,0 -1,-0.1 -1.8,-0.4c-0.7,-0.3 -1.4,-0.4 -1.9,-0.4c-0.5,0 -1.1,0.1 -1.8,0.4c-0.7,0.3 -1.2,0.4 -1.7,0.4c-1.3,0 -2.5,-1.1 -3.8,-3.3c-1.2,-2.2 -1.9,-4.3 -1.9,-6.3c0,-1.9 0.5,-3.5 1.4,-4.7c0.9,-1.4 2.1,-2 3.6,-2l0,0z" />
                            <path id="svg_25" fill="#000033" clip-rule="evenodd" fill-rule="evenodd" d="m817.99121,519.73418c0,0.1 0.1,0.2 0.1,0.3c0,0.1 0,0.2 0,0.2c0,0.5 -0.1,1.1 -0.4,1.7c-0.2,0.6 -0.6,1.2 -1.2,1.7c-0.5,0.5 -0.9,0.8 -1.4,0.9c-0.3,0.1 -0.7,0.2 -1.3,0.2c0,-1.2 0.3,-2.3 1,-3.2c0.7,-0.9 1.8,-1.5 3.2,-1.8l0,0z" />
                        </g>
                        <g id="lamp">
                            <g id="lamp-body">
                                <g id="lamp-header">
                                    <g id="lamp-line-t">
                                        <polyline id="svg_48" strokeMiterlimit="10" stroke="#0B0B0B" fill="#228370" points="501.4627456665039,336.5546875 508.3627700805664,340.3547058105469 384.46277618408203,419.75469970703125 378.7627639770508,414.25469970703125 501.4627456665039,336.5546875 " />
                                        <polyline id="svg_49" strokeMiterlimit="10" stroke="#0B0B0B" fill="#228370" points="512.1627578735352,344.75469970703125 519.0627822875977,349.5546875 397.66275787353516,427.8547058105469 392.56278228759766,422.3547058105469 512.1627578735352,344.75469970703125 " />
                                    </g>
                                    <g id="lamp-head">
                                        <ellipse id="svg_50" strokeMiterlimit="10" stroke="#0B0B0B" fill="#228370" ry="19.3" rx="18.5" cy="350.15471" cx="507.36278" />
                                        <path id="svg_51" strokeMiterlimit="10" stroke="#0B0B0B" fill="#E8DF9A" d="m539.46278,395.85471c0,0 13,10.9 26.6,2.5c2.4,-1.5 4.4,-3.9 5.7,-6.6c3.3,-6.8 7.6,-20.6 -5,-31.8l-27.3,35.9z" />
                                        <path id="svg_52" strokeMiterlimit="10" stroke="#0B0B0B" fill="#3FBDA4" d="m584.06278,321.75471c-20.6,-7.9 -47.5,-7.3 -64.6,4.4c-11.4,7.8 -20,19 -24.3,33.7c-8.6,29.1 1.8,61 22.5,79.4c1.3,1.2 3.3,1 4.3,-0.5l77.3,-106.1c0.7,-0.9 0.5,-2.3 -0.4,-2.9c-4.5,-3.3 -9.4,-6 -14.8,-8z" />
                                    </g>
                                </g>
                                <g id="lamp-line-b">
                                    <polyline id="svg_53" strokeMiterlimit="10" stroke="#0B0B0B" fill="#228370" points="383.2627639770508,435.25469970703125 388.16275787353516,428.9546813964844 439.3627700805664,570.4547119140625 433.06278228759766,575.2546997070312 383.2627639770508,435.25469970703125 " />
                                    <polyline id="svg_54" strokeMiterlimit="10" stroke="#0B0B0B" fill="#228370" points="395.16275787353516,431.75469970703125 401.06278228759766,425.5546875 451.7627639770508,564.4547119140625 445.56278228759766,568.6547241210938 395.16275787353516,431.75469970703125 " />
                                </g>
                                <ellipse strokeMiterlimit="10" stroke="#0B0B0B" fill="#3FBDA4" ry="20.5" rx="19.7" cy="425.55471" cx="393.76278" id="lamp-circle" />
                            </g>
                            <path id="svg_55" strokeMiterlimit="10" stroke="#0B0B0B" fill="#228370" d="m507.36278,608.85471l-127.6,0l0,-11.6c0,-1.6 2.1,-2.9 4.7,-2.9l121.2,0c1,0 1.7,0.5 1.7,1.1l0,13.4z" class="lamp-leg" />
                            <g id="lamp-bottom">
                                <path id="svg_56" strokeMiterlimit="10" stroke="#0B0B0B" fill="#3FBDA4" d="m395.16278,594.25471c0,0 10.6,-32.8 48.4,-31.4c0,0 39,2.3 48.7,31.4l-97.1,0z" />
                                <path id="svg_57" strokeMiterlimit="10" stroke="#0B0B0B" fill="#70BAAF" d="m461.46278,566.65471c0,0 8.8,4.6 17,-0.4c0.5,-0.3 1,0.1 1,0.8l0,9.2c0,0 -13.8,-8.3 -18,-9.6z" />
                            </g>
                            <polyline id="svg_58" fill="#FCF1C4" opacity="0" points="589.9627456665039,345.6546936035156 1095.3628311157227,607.9547119140625 626.3627090454102,609.4547119140625 536.5627822875977,421.5546875 " class="light" />
                            <g id="lamp-line">
                                <path id="svg_59" fill="#2FAF97" d="m495.86278,360.45471c-8.4,28.4 1.9,61.2 23.2,78.5c1.2,-0.5 -1.2,0.5 0,0l-3.4,-108.7c-9.2,7.5 -16.1,17.6 -19.8,30.2z" />
                                <path id="svg_60" fill="#2FAF97" d="m374.86278,425.55471c0,10.7 8.4,19.6 18.2,19.6c0.2,0 0.4,0 0.6,0l-6.1,-38.2c-7.2,2.5 -12.7,9.9 -12.7,18.6z" />
                                <path id="svg_61" fill="#2FAF97" d="m396.56278,593.35471l39,0l-8.3,-27.8c-23.3,6.9 -30.7,27.8 -30.7,27.8z" />
                                <path id="svg_62" strokeMiterlimit="10" strokeLinecap="round" stroke="#BFE4E2" fill="none" d="m534.46278,324.25471c-0.4,-0.1 26.1,-7 46,3.5" />
                                <line id="svg_63" strokeMiterlimit="10" strokeLinecap="round" stroke="#BFE4E2" fill="none" y2="332.65471" x2="588.36278" y1="330.95471" x1="585.26278" />
                                <path id="svg_64" strokeMiterlimit="10" strokeLinecap="round" stroke="#BFE4E2" fill="none" d="m402.06278,412.05471c0,0 9.3,7.1 6.2,16.8" />
                                <path id="svg_65" strokeMiterlimit="10" strokeLinecap="round" stroke="#BFE4E2" fill="none" d="m439.36278,567.05471c0,0 17,1 28.6,9.2" />
                                <line id="svg_66" strokeMiterlimit="10" strokeLinecap="round" stroke="#BFE4E2" fill="none" y2="582.15471" x2="476.86278" y1="579.75471" x1="473.76278" />
                            </g>
                        </g>
                        <g id="keyboard">
                            <path id="svg_26" strokeMiterlimit="10" stroke="#0D0D0D" fill="#E5E9ED" d="m969.45991,606.8l-329.4,0l0,-4.8c0,-4 3.2,-7.2 7.2,-7.2l315,0c4,0 7.3,3.3 7.3,7.3l0,4.7l-0.1,0z" />
                            <polygon id="svg_27" fill="#D2D6D8" points="968.5599901676178,605.9000244140625 640.8599169254303,605.9000244140625 640.9598925113678,602.5999755859375 968.6599657535553,602.5999755859375 " />
                            <rect id="svg_28" height="1.9" width="21.4" y="593" x="653.25991" />
                            <rect id="svg_29" height="1.9" width="21.4" y="593" x="746.35991" />
                            <rect id="svg_30" height="1.9" width="95.4" y="592.9" x="769.35991" />
                            <rect id="svg_31" height="1.9" width="21.4" y="593" x="676.15991" />
                            <rect id="svg_32" height="1.9" width="21.4" y="593" x="699.35991" />
                            <rect id="svg_33" height="1.9" width="21.4" y="593" x="722.45991" />
                            <rect id="svg_34" height="1.9" width="21.4" y="592.9" x="866.85991" />
                            <rect id="svg_35" height="1.9" width="21.4" y="592.9" x="889.75991" />
                            <rect id="svg_36" height="1.9" width="21.4" y="592.9" x="912.85991" />
                            <rect id="svg_37" height="1.9" width="21.4" y="592.9" x="936.05991" />
                            <path id="svg_38" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m673.65991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_39" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m696.45991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_40" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m719.65991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_41" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m742.85991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_42" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m887.25991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_43" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m910.05991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_44" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m933.25991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_45" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m956.45991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_46" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m766.65991,593.9l-19.3,0l0,-2.1c0,-0.6 1,-1.2 2.3,-1.2l14.6,0c1.3,0 2.4,0.5 2.4,1.2l0,2.1z" />
                            <path id="svg_47" strokeMiterlimit="10" stroke="#0D0D0D" fill="#FFFFFF" d="m863.65991,594l-93.6,0l0,-2.1c0,-0.7 5,-1.2 11.2,-1.2l70.9,0c6.3,0 11.5,0.5 11.5,1.2l0,2.1z" />
                        </g>
                        <g id="computer_mouse">
                            <path id="svg_67" strokeMiterlimit="10" stroke="#0B0B0B" fill="#E5E9ED" d="m992.33398,606.7c0,0 0,-8.6 12.9,-14.3c8.7,-3.9 18.7,-4 27.5,-0.6c6.8,2.6 13.7,7.2 13.7,15l-54.1,-0.1z" />
                            <path id="svg_68" fill="#D1D4D6" d="m1032.73398,592.5c-3.9,-1.4 -9,-2.6 -13.3,-2.4l0,15.7l26.1,0.1c-0.1,-4.3 -4.3,-10.3 -12.8,-13.4z" />
                        </g>
                        <g id="coffee_mug">
                            <polyline id="svg_69" strokeMiterlimit="10" stroke="#0D0D0D" fill="#F9EFE5" points="1058.3211002349854,515.2341918945312 1073.6210269927979,605.5341796875 1116.5210514068604,605.5341796875 1130.9210758209229,515.2341918945312 1062.2211246490479,515.2341918945312 " />
                            <polygon id="svg_70" fill="#F3E5D4" points="1129.7211246490479,518.2341918945312 1094.6210269927979,515.2341918945312 1094.2211246490479,604.6342163085938 1115.9210758209229,604.6342163085938 " />
                            <polygon id="svg_71" strokeMiterlimit="10" stroke="#0D0D0D" fill="#BE5532" points="1061.8211002349854,545.4342041015625 1068.2211246490479,580.4342041015625 1121.3211002349854,580.4342041015625 1127.4210758209229,545.4342041015625 " />
                            <polygon id="svg_72" fill="#AD4025" points="1126.3211002349854,546.4342041015625 1094.7211246490479,546.4342041015625 1094.6210269927979,579.6342163085938 1120.7211246490479,579.6342163085938 " />
                            <line id="svg_73" strokeMiterlimit="10" strokeLinecap="round" stroke="#9B3021" fill="none" y2="549.93418" x2="1123.2211" y1="549.93418" x1="1066.8211" />
                            <line id="svg_74" strokeMiterlimit="10" strokeLinecap="round" stroke="#9B3021" fill="none" y2="556.63418" x2="1122.2211" y1="556.63418" x1="1068.6211" />
                            <line id="svg_75" strokeMiterlimit="10" strokeLinecap="round" stroke="#9B3021" fill="none" y2="564.53418" x2="1120.1211" y1="564.53418" x1="1069.6211" />
                            <line id="svg_76" strokeMiterlimit="10" strokeLinecap="round" stroke="#9B3021" fill="none" y2="571.83418" x2="1119.0211" y1="571.83418" x1="1070.6211" />
                            <line id="svg_77" strokeMiterlimit="10" strokeLinecap="round" stroke="#9B3021" fill="none" y2="577.43418" x2="1118.0211" y1="577.43418" x1="1070.5211" />
                            <polygon id="svg_78" strokeMiterlimit="10" stroke="#0B0B0B" fill="#BE5532" points="1053.8211002349854,523.2341918945312 1134.7211246490479,523.2341918945312 1134.7211246490479,515.2341918945312 1058.3211002349854,515.2341918945312 1053.8211002349854,515.2341918945312 " />
                            <polygon id="svg_79" strokeMiterlimit="10" stroke="#070808" fill="#BE5532" points="1060.3211002349854,504.6341857910156 1058.3211002349854,515.2341918945312 1129.7211246490479,515.2341918945312 1127.4210758209229,504.6341857910156 " />
                            <polygon id="svg_80" fill="#AD4025" points="1133.7211246490479,516.2341918945312 1128.5210514068604,516.2341918945312 1095.2211246490479,516.2341918945312 1095.2211246490479,522.3341674804688 1133.7211246490479,522.5341796875 " />
                            <polygon id="svg_81" fill="#AD4025" points="1128.5210514068604,514.4342041015625 1126.7211246490479,505.4342041015625 1095.3211002349854,505.5341796875 1095.3211002349854,514.4342041015625 " />
                            <polygon id="svg_82" fill="#9B3021" points="1059.4211978912354,514.4342041015625 1059.7211246490479,512.4342041015625 1128.1210269927979,512.4342041015625 1128.5210514068604,514.4342041015625 " />
                        </g>
                        <image stroke="null" xlinkHref={SpiderLogo2} id="svg_83" height="159.99968" width="159.99968" y="315.55537" x="729.83012" />
                        <g id="sun_icon" stroke="null">
                        </g>
                    </g>
                </svg>
            </div>
        </>
    )
}
