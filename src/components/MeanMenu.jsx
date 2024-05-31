// import React, { useEffect, useRef } from 'react';
// import $ from 'jquery';
// import './meanmenu.css'; // Import necessary CSS for meanmenu

// const MeanMenu = (props) => {
//   const menuRef = useRef(null);

//   useEffect(() => {
//     // Default options
//     const defaultOptions = {
//       meanMenuTarget: $(menuRef.current),
//       meanMenuContainer: "body",
//       meanMenuClose: "X",
//       meanMenuCloseSize: "18px",
//       meanMenuOpen: "<span /><span /><span />",
//       meanRevealPosition: "right",
//       meanRevealPositionDistance: "0",
//       meanRevealColour: "",
//       meanScreenWidth: "480",
//       meanNavPush: "",
//       meanShowChildren: true,
//       meanExpandableChildren: true,
//       meanExpand: "+",
//       meanContract: "-",
//       meanRemoveAttrs: false,
//       onePage: false,
//       meanDisplay: "block",
//       removeElements: ""
//     };

//     const options = { ...defaultOptions, ...props.options };

//     const initializeMeanMenu = () => {
//       let a = window.innerWidth || document.documentElement.clientWidth;

//       const { 
//         meanMenuTarget, meanMenuContainer, meanMenuClose, meanMenuCloseSize, meanMenuOpen,
//         meanRevealPosition, meanRevealPositionDistance, meanRevealColour, meanScreenWidth,
//         meanNavPush, meanShowChildren, meanExpandableChildren, meanExpand, meanContract,
//         meanRemoveAttrs, onePage, meanDisplay, removeElements
//       } = options;

//       let C = false;

//       if (navigator.userAgent.match(/iPhone|iPod|iPad|Android|Blackberry|Windows Phone/i)) {
//         C = true;
//       }

//       if (navigator.userAgent.match(/MSIE 8|MSIE 7/i)) {
//         $('html').css('overflow-y', 'scroll');
//       }

//       let w = '';

//       const x = () => {
//         if (meanRevealPosition === 'center') {
//           const e = window.innerWidth || document.documentElement.clientWidth;
//           const n = e / 2 - 22 + 'px';
//           w = `left:${n};right:auto;`;
//           if (C) {
//             $('.meanmenu-reveal').animate({ left: n });
//           } else {
//             $('.meanmenu-reveal').css('left', n);
//           }
//         }
//       };

//       let A = false;
//       let E = false;

//       if (meanRevealPosition === 'right') {
//         w = `right:${meanRevealPositionDistance};left:auto;`;
//       }

//       if (meanRevealPosition === 'left') {
//         w = `left:${meanRevealPositionDistance};right:auto;`;
//       }

//       x();

//       let M = '';

//       const P = () => {
//         M.html($(M).is('.meanmenu-reveal.meanclose') ? meanMenuClose : meanMenuOpen);
//       };

//       const W = () => {
//         $('.mean-bar,.mean-push').remove();
//         $(meanMenuContainer).removeClass('mean-container');
//         $(meanMenuTarget).css('display', meanDisplay);
//         A = false;
//         E = false;
//         $(removeElements).removeClass('mean-remove');
//       };

//       const b = () => {
//         const e = `background:${meanRevealColour};color:${meanRevealColour};${w}`;
//         if (meanScreenWidth >= a) {
//           $(removeElements).addClass('mean-remove');
//           E = true;
//           $(meanMenuContainer).addClass('mean-container');
//           $('.mean-container').prepend(`
//             <div class="mean-bar">
//               <a href="#nav" class="meanmenu-reveal" style="${e}">Show Navigation</a>
//               <nav class="mean-nav"></nav>
//             </div>
//           `);

//           const r = $(meanMenuTarget).html();
//           $('.mean-nav').html(r);

//           if (meanRemoveAttrs) {
//             $('nav.mean-nav ul, nav.mean-nav ul *').each(function () {
//               if ($(this).is('.mean-remove')) {
//                 $(this).attr('class', 'mean-remove');
//               } else {
//                 $(this).removeAttr('class');
//               }
//               $(this).removeAttr('id');
//             });
//           }

//           $(meanMenuTarget).before('<div class="mean-push" />');
//           $('.mean-push').css('margin-top', meanNavPush);
//           $(meanMenuTarget).hide();
//           $('.meanmenu-reveal').show();
//           $('.meanmenu-reveal').html(meanMenuOpen);
//           M = $('.meanmenu-reveal');
//           $('.mean-nav ul').hide();

//           if (meanShowChildren) {
//             if (meanExpandableChildren) {
//               $('.mean-nav ul ul').each(function () {
//                 if ($(this).children().length) {
//                   $(this).parent().append(`<a class="mean-expand" href="#" style="font-size: ${meanMenuCloseSize}">${meanExpand}</a>`);
//                 }
//               });

//               $('.mean-expand').on('click', function (e) {
//                 e.preventDefault();
//                 if ($(this).hasClass('mean-clicked')) {
//                   $(this).text(meanExpand);
//                   $(this).prev('ul').slideUp(300, function () {});
//                 } else {
//                   $(this).text(meanContract);
//                   $(this).prev('ul').slideDown(300, function () {});
//                 }
//                 $(this).toggleClass('mean-clicked');
//               });
//             } else {
//               $('.mean-nav ul ul').show();
//             }
//           } else {
//             $('.mean-nav ul ul').hide();
//           }

//           $('.mean-nav ul li').last().addClass('mean-last');
//           M.removeClass('meanclose');

//           $(M).click(function (e) {
//             e.preventDefault();
//             if (A === false) {
//               M.css('text-align', 'center');
//               M.css('text-indent', '0');
//               M.css('font-size', meanMenuCloseSize);
//               $('.mean-nav ul:first').slideDown();
//               A = true;
//             } else {
//               $('.mean-nav ul:first').slideUp();
//               A = false;
//             }
//             M.toggleClass('meanclose');
//             P();
//             $(removeElements).addClass('mean-remove');
//           });

//           if (onePage) {
//             $('.mean-nav ul > li > a:first-child').on('click', function () {
//               $('.mean-nav ul:first').slideUp();
//               A = false;
//               $(M).toggleClass('meanclose').html(meanMenuOpen);
//             });
//           }
//         } else {
//           W();
//         }
//       };

//       if (!C) {
//         $(window).resize(function () {
//           a = window.innerWidth || document.documentElement.clientWidth;
//           if (a > meanScreenWidth) {
//             W();
//           }
//           if (meanScreenWidth >= a) {
//             b();
//             x();
//           } else {
//             W();
//           }
//         });

//         $(window).resize(function () {
//           a = window.innerWidth || document.documentElement.clientWidth;
//           if (C) {
//             x();
//             if (meanScreenWidth >= a && E === false) {
//               b();
//             } else {
//               W();
//             }
//           } else {
//             W();
//             if (meanScreenWidth >= a) {
//               b();
//               x();
//             }
//           }
//         });
//       }

//       b();
//     };

//     initializeMeanMenu();

//     return () => {
//       // Cleanup function to remove mean menu elements on unmount
//       $('.mean-bar,.mean-push').remove();
//       $(options.meanMenuContainer).removeClass('mean-container');
//       $(menuRef.current).css('display', options.meanDisplay);
//       $(options.removeElements).removeClass('mean-remove');
//     };
//   }, [props.options]);

//   return (
//     <div ref={menuRef}>
//       {props.children}
//     </div>
//   );
// };

// export default MeanMenu;
