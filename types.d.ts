declare module 'falafel' {
	function falafel(arg1:any,arg2:any,arg3:any):any;
	module falafel {
	}
	export = falafel;
}

declare module 'loader-utils' {
    export function getOptions(loaderContext:{query:any|string}):any;
}
