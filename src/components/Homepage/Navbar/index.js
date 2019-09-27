/* eslint-disable jsx-a11y/anchor-is-valid */
// Libraries
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const links = [
  { id: 'introduction', text: 'Introduction' },
  { id: 'tldr', text: 'TL;DR' },
  { id: 'work', text: 'Work' },
  { id: 'technologies', text: 'Technologies' },
  { id: 'open-source', text: 'Open Source' },
  { id: 'education', text: 'Education' },
  { id: 'interests', text: 'Interests' },
  { id: 'resume', text: 'Resume' },
];

const observerConfig = { root: null, threshold: [0, 0.25, 0.75, 1] };
const scrollConfig = { capture: true, passive: true };

let lastScrollTop = window.pageYOffset;

export default function Navbar() {
  const navbarRef = useRef();
  const elementsInView = useRef({});
  const [activeNavLink, setActiveNavLink] = useState({});

  const scrollToElementOnClick = id => {
    const element = document.getElementById(id);
    if (element && navbarRef.current) {
      const { top } = element.getBoundingClientRect();
      const yCoordinate = top + window.pageYOffset;
      // If top is less than the navbar's height it means the user
      // is already at that section. This avoid scrolling to the top.
      window.scrollTo({
        top: yCoordinate - navbarRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  const onIntersection = useCallback((entries = []) => {
    const inView = { ...elementsInView.current };
    entries.forEach(entry => {
      switch (true) {
        // If intersecting, add to the elements in view.
        case entry.isIntersecting:
          inView[entry.target.id] = entry;
          break;
        // If not intersecting, remove the entry from the elements in view.
        case !entry.isIntersecting:
          inView[entry.target.id] = undefined;
          break;
        default: // Do nothing
      }
    });
    elementsInView.current = inView;
  }, []);

  const setActiveElementOnScroll = () => {
    // scrollDirection will access the RECT object properties based on the direction
    // that the user is scrolling to determine the active element in the Navbar,
    const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDirection = newScrollTop >= lastScrollTop ? 'bottom' : 'top';
    // Horizontal scroll of the Navbar when it overflows.
    if (navbarRef.current && newScrollTop !== lastScrollTop) {
      const topAnchorEl = document.getElementById(links[0].id);
      const { offsetTop } = topAnchorEl;
      const totalEffectiveHeight = document.body.clientHeight - window.innerHeight - offsetTop;
      const currentHeight = window.pageYOffset - offsetTop;
      const percent = (currentHeight) / (totalEffectiveHeight);
      const newNavbarScrollLeft = (navbarRef.current.scrollWidth - navbarRef.current.clientWidth) * percent;
      switch (scrollDirection) {
        case 'bottom':
          if (newNavbarScrollLeft > navbarRef.current.scrollLeft) {
            navbarRef.current.scrollLeft = newNavbarScrollLeft;
          }
          break;
        case 'top':
          if (newNavbarScrollLeft < navbarRef.current.scrollLeft) {
            navbarRef.current.scrollLeft = newNavbarScrollLeft;
          }
          break;
        default: // Do nothing.
      }
    }
    let inViewElements = Object.values(elementsInView.current);
    const maxValueOfintersectionRatio = (
      Math.max(...inViewElements.map(entry => (entry ? entry.intersectionRatio : 0)), 0)
    );
    inViewElements = inViewElements.filter(entry => entry && (
      entry.intersectionRatio === maxValueOfintersectionRatio
    ));
    // Choosing the active navbar element:
    // If the array of inView elements is 1, set the only visible element.
    if (inViewElements.length === 1) {
      setActiveNavLink(inViewElements[0].target);
    } else if (scrollDirection) {
      const activeElement = inViewElements.reduce((prev, current) => {
        if (!prev) return current;
        const prevTargetRect = prev.target.getBoundingClientRect()[scrollDirection];
        const currentTargetRect = current.target.getBoundingClientRect()[scrollDirection];
        // If scrolling to the top, select the element closest to the top.
        if (scrollDirection === 'top') {
          return (
            (prevTargetRect <= currentTargetRect) ?
              prev :
              current
          );
        }
        // Otherwise, select the element closest to the bottom.
        return (
          (prevTargetRect >= currentTargetRect) ?
            prev :
            current
        );
      }, null);
      if (activeElement) setActiveNavLink(activeElement.target);
    }
    lastScrollTop = newScrollTop;
  };

  useEffect(() => {
    const observedElements = links.map(({ id }) => document.getElementById(id));
    const observer = new IntersectionObserver(onIntersection, observerConfig);
    observedElements.forEach(element => element && observer.observe(element));
    // Unobserve when unmouting.
    return () => {
      observedElements.forEach(element => element && observer.unobserve(element));
    };
  }, [onIntersection]);

  useEffect(() => {
    window.addEventListener('scroll', setActiveElementOnScroll, scrollConfig);
    return () => {
      window.removeEventListener('scroll', setActiveElementOnScroll, scrollConfig);
    };
  }, []);

  return (
    <StyledNav
      ref={navbarRef}
    >
      <ul>
        {links.map(({ id, text }) => (
          <li
            key={id}
          >
            <a
              role="button"
              className={activeNavLink.id === id ? 'active' : undefined}
              onClick={() => scrollToElementOnClick(id)}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  &&& {
    position: sticky;
    top: 0;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
    background: #FEFEFE;
    background: rgba(254, 254, 254, 0.925);
    padding: 0 18px;
    z-index: 5;
    ul {
      min-height: 70px;
      display: flex;
      flex-flow: row;
      align-items: center;
      li {
        display: inline-flex;
        cursor: pointer;
        list-style: none;
        white-space: nowrap;
        a {
          position: relative;
          padding: 26px 18px;
          text-decoration: none;
          letter-spacing: 0.025rem;
          font-size: 0.8rem;
        }
        a, a:hover, a:visited, a:active {
          color: ${({ theme }) => theme.brandBlack};
        }
        a::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          opacity: 0;
          display: block;
        }
        a, a::before {
          transition: all 300ms;
        }
        a:hover::before, a.active::before {
          width: 100%;
          height: 3px;
          opacity: 1;
        }
        /* Active/Hover effects are primary color */
        a.active::before {
          background: ${({ theme }) => theme.primary};
        }
        a.active {
          color: ${({ theme }) => theme.primary};
        }
        /* Active/Hover effects are secondary color */
        a:hover::before {
          background: ${({ theme }) => theme.secondary};
        }
        a:hover {
          color: ${({ theme }) => theme.secondary};
        }
      }
      @media (max-width: ${({ theme }) => theme.screenMd}) {
        min-height: 50px;
        li {
          a {
            padding: 24px 18px;
          }
        }
      }
    }
    /* overflow-x scroll, but hide scrollbar */
    &::-webkit-scrollbar {
      width: 0px !important;
      height: 0px !important;
    };
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;
