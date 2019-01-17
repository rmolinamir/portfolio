export const scrollToContent = (element, isMobile) => {
    window.scrollTo({
        top: element,
        behavior: 'smooth'
    });
};