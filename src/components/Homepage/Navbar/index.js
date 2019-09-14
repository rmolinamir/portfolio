// Libraries
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const links = [
  { id: 'introduction', text: 'Introduction' },
  { id: 'tldr', text: 'TL;DR' },
  { id: 'technologies', text: 'Technologies' },
  { id: 'work', text: 'Work' },
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
    const newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let inViewElements = Object.values(elementsInView.current);
    const maxValueOfintersectionRatio = (
      Math.max(...inViewElements.map(entry => (entry ? entry.intersectionRatio : 0)), 0)
    );
    inViewElements = inViewElements.filter(entry => entry && (
      entry.intersectionRatio === maxValueOfintersectionRatio
    ));
    if (inViewElements.length === 1) {
      setActiveNavLink(inViewElements[0].target);
      return;
    }
    switch (newScrollTop > lastScrollTop) {
      // Scrolling to the bottom.
      case true: {
        const activeElement = inViewElements.reduce((prev, current) => (
          (prev.bottom > current.bottom) ? prev : current
        ));
        setActiveNavLink(activeElement.target);
      }
        break;
     // Scrolling to the top.
      default: {
        const activeElement = inViewElements.reduce((prev, current) => (
          (prev.top > current.top) ? prev : current
        ));
        setActiveNavLink(activeElement.target);
      }
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

  console.log('activeNavLink', activeNavLink);

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
              className={activeNavLink.id === id ? 'active' : undefined}
              role="button"
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
          left: 0;
          width: 100%;
          height: 0;
          opacity: 0;
          display: block;
          transition: all 0.3s;
        }
        a:hover::before, a.active::before {
          width: 100%;
          height: 3px;
          opacity: 1;
          background: ${({ theme }) => theme.primary};
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
  }
`;
