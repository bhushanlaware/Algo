class A {
    add(a: number, b: number): number {
        return a + b
    }
}
class B extends A {}
class C extends B {
    add(a: number, b: number): number {
        return super.add(a, b)
    }
}
const c = new C()
c.add(1, 2)
