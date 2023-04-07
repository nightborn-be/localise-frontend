export function getInitialeName(name: string): string {
    const arraySplit = name.split(' ');
    let inital = '';
    arraySplit?.map((obj) => {
        inital += obj.charAt(0);
    });
    return inital;
}
