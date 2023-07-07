type DeepReadonly<T> = {
	// readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]>: T[K]
    readonly [K in keyof T]: T[K] extends {} ? DeepReadonly<T[K]> : T[K]
}

// Example usage:
type ExampleType = {
   name: string;
   details: {
       age: number;
       address: string;
   };
}

const example: DeepReadonly<ExampleType> = {
   name: "John Doe",
   details: {
       age: 30,
       address: "123 Main St",
   },
};
