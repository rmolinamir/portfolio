export const isInViewport = (state, isInViewportElements, offset = 50 ) => {
    let updatedState = {...state.isInViewport}
    console.log("Inside isInViewport: isInViewportElements",isInViewportElements)
    Object.keys(isInViewportElements).forEach( key => {
        console.log('init',[key], isInViewportElements[key].current)
        if (!isInViewportElements[key].current) {return};
        console.log('key', isInViewportElements[key])
        console.log('boolean', window.scrollY > isInViewportElements[key].current.offsetTop + offset)
        if (window.scrollY > isInViewportElements[key].current.offsetTop + offset ) {
            updatedState = {
                ...updatedState,
                [key]: true
            }
        }
    });
    console.log("inside IsInViewport: updatedState", updatedState);
    return updatedState;
}

// // Original isInViewPort function:
// isInViewport = (offset = 50 ) => {
//     Object.keys(this.isInViewportElements).forEach( key => {
//         if (!this.isInViewportElements[key].current) {return};
//         if (window.scrollY > this.isInViewportElements[key].current.offsetTop + offset && !this.state.isInViewport[key]) {
//             const setStateObject = {
//                 ...this.state.isInViewport,
//                 [key]: true
//             }
//             this.setState({ 
//                 isInViewport:setStateObject 
//             });
//         }
//     });
// }

// // If using the imported version WITH NESTED REFERENCES, this needs to be added,
// // otherwise the addEventListener will be enough:
// componentDidMount () {
//     this.setState( prevState => {
//         return {isInViewport: isInViewport(prevState, this.isInViewportElements, 100) }
//     })
//     window.addEventListener('scroll', () => this.setState( prevState => {
//         return {isInViewport: isInViewport(prevState, this.isInViewportElements, 100) }
//     }));    
// }