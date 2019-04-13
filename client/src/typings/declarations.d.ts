declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}

declare module "*.svg" {
    const value: any;
    export default value;
}