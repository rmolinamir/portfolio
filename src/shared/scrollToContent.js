export const scrollToContent = (element, isMobile) => {
    window.scrollTo({
        top: element - 56,
        behavior: 'smooth'
    });
};