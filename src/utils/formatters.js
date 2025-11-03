 export const formatCompact = (num) => {
    return new Intl.NumberFormat('en-US', {
        notation:'compact',
        compactDisplay:'short',
    }).format(num);
};