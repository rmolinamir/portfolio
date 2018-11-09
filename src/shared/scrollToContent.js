export const scrollToContent = (element) => {
    window.scrollTo({
        top: element - 56,
        left: 0,
        behavior: 'smooth'
    });
};