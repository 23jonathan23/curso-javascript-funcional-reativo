Number.prototype.log = function () { console.log(+this) }
Function.prototype.log = function () { console.log(this.toString()) }

let r

const I = a => a

I(13).log()

I(I).log()

const SELF = f => f(f)

SELF(I).log()

const PRI = a => _ => a
PRI(10)(30).log()

const ULT = _ => b => b
ULT(10)(30).log()

const TRO = f => a => b => f(b)(a)

TRO(ULT)(7)(11).log()

TRO(PRI)(11)(30).log()

const ULT2 = a => b => TRO(PRI)(a)(b)

ULT2(13)(30).log()

//boolean TRUE and FALSE
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI
const F = ULT

T.toString = () => 'Verdadeiro (PRI)'
F.toString = () => 'Falso (ULT)'

T.log()
F.log()

//NOT
const NOT = a => a(F)(T)

NOT(F).log()

//AND
const AND = a => b => a(b)(a)

AND(T)(T).log()

//OR
const OR = a => b => a(a)(b)

OR(F)(T).log()

//EQ - igual
const EQ = a => b => a(b)(NOT(b))

EQ(T)(T).log()

//XOR - diferente
const XOR = a => b => NOT(EQ(a)(b))

XOR(F)(T).log()