// : 类型 []
// 可以定义任意类型的数组
const count: number[] = [1, 2, 3, 4]
const codeName: string[] = ['JavaScript', 'Java', 'Python']
const undefinedArr: undefined[] = [undefined, undefined]

// 数组中包含多个类型时, (xxx | yyy) 分隔
const arr: (number | string)[] = ['python', 123, 'java'];

// 数组中对象类型定义
// 先定义数组为对象数组,再对对象内属性做进一步类型注解
const arr2: { name: string, year: number }[] = [
  { name: 'python', year: 2 },
  { name: 'java-script', year: 1 },
]
// 也可以定义 "类型别名" 简化代码
// 类型别名: 通过 type 关键字
type Code = { name: string, year: number }
const arr3: Code[] = [
  { name: 'python', year: 2 },
  { name: 'java-script', year: 1 },
]

// 类类型定义数组
class Code2 {
  name: string;
  year: number;
}
const arr4: Code2[] = [
  { name: 'python', year: 2 },
  { name: 'java-script', year: 1 },
]