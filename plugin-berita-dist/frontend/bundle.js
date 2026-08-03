//#region \0rolldown/runtime.js
var e = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports);
//#endregion
//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
//#endregion
//#region node_modules/svelte/src/constants.js
var t = {}, n = Symbol("uninitialized"), r = "http://www.w3.org/1999/xhtml", i = "http://www.w3.org/2000/svg", a = "http://www.w3.org/1998/Math/MathML", o = Array.isArray, s = Array.prototype.indexOf, c = Array.prototype.includes, l = Array.from, u = Object.defineProperty, d = Object.getOwnPropertyDescriptor, f = Object.getOwnPropertyDescriptors, p = Object.prototype, m = Array.prototype, h = Object.getPrototypeOf, g = Object.isExtensible;
function _(e) {
	return typeof e == "function";
}
var v = () => {};
function y(e) {
	return typeof e?.then == "function";
}
function b(e) {
	return e();
}
function x(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function S() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			e = n, t = r;
		}),
		resolve: e,
		reject: t
	};
}
function C(e, t) {
	if (Array.isArray(e)) return e;
	if (t === void 0 || !(Symbol.iterator in e)) return Array.from(e);
	let n = [];
	for (let r of e) if (n.push(r), n.length === t) break;
	return n;
}
var ee = 1024, te = 2048, ne = 4096, re = 8192, ie = 16384, ae = 32768, oe = 1 << 25, se = 65536, ce = 1 << 18, le = 1 << 19, ue = 1 << 20, de = 1 << 25, fe = 65536, pe = 1 << 21, me = 1 << 22, he = 1 << 23, ge = Symbol("$state"), _e = Symbol("legacy props"), ve = Symbol(""), ye = Symbol("attributes"), be = Symbol("class"), xe = Symbol("style"), Se = Symbol("text"), Ce = Symbol("form reset"), we = new class extends Error {
	name = "StaleReactionError";
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Te = !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml");
function Ee(e) {
	throw Error("https://svelte.dev/e/lifecycle_outside_component");
}
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function De() {
	throw Error("https://svelte.dev/e/async_derived_orphan");
}
function Oe(e, t, n) {
	throw Error("https://svelte.dev/e/each_key_duplicate");
}
function ke(e) {
	throw Error("https://svelte.dev/e/effect_in_teardown");
}
function Ae() {
	throw Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function je(e) {
	throw Error("https://svelte.dev/e/effect_orphan");
}
function Me() {
	throw Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ne(e) {
	throw Error("https://svelte.dev/e/props_invalid_value");
}
function Pe() {
	throw Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Fe() {
	throw Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ie() {
	throw Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Le() {
	throw Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Re() {
	console.warn("https://svelte.dev/e/derived_inert");
}
function ze(e) {
	console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Be() {
	console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Ve() {
	console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var w = !1;
function He(e) {
	w = e;
}
var Ue;
function We(e) {
	if (e === null) throw ze(), t;
	return Ue = e;
}
function Ge() {
	return We(/* @__PURE__ */ Ln(Ue));
}
function T(e) {
	if (w) {
		if (/* @__PURE__ */ Ln(Ue) !== null) throw ze(), t;
		Ue = e;
	}
}
function Ke(e = 1) {
	if (w) {
		for (var t = e, n = Ue; t--;) n = /* @__PURE__ */ Ln(n);
		Ue = n;
	}
}
function qe(e = !0) {
	for (var t = 0, n = Ue;;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === "]") {
				if (t === 0) return n;
				--t;
			} else (r === "[" || r === "[!" || r[0] === "[" && !isNaN(Number(r.slice(1)))) && (t += 1);
		}
		var i = /* @__PURE__ */ Ln(n);
		e && n.remove(), n = i;
	}
}
function Je(e) {
	if (!e || e.nodeType !== 8) throw ze(), t;
	return e.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ye(e) {
	return e === this.v;
}
function Xe(e, t) {
	return e == e ? e !== t || typeof e == "object" && !!e || typeof e == "function" : t == t;
}
function Ze(e) {
	return !Xe(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var Qe = !1;
function $e() {
	Qe = !0;
}
//#endregion
//#region node_modules/svelte/src/internal/client/context.js
var et = null;
function tt(e) {
	et = e;
}
function nt(e) {
	return ot("getContext").get(e);
}
function rt(e, t) {
	return ot("setContext").set(e, t), t;
}
function it() {
	return ot("getAllContexts");
}
function E(e, t = !1, n) {
	et = {
		p: et,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: xr,
		l: Qe && !t ? {
			s: null,
			u: null,
			$: []
		} : null
	};
}
function D(e) {
	var t = et, n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Yn(r);
	}
	return e !== void 0 && (t.x = e), t.i = !0, et = t.p, e ?? {};
}
function at() {
	return !Qe || et !== null && et.l === null;
}
function ot(e) {
	return et === null && Ee(e), et.c ??= new Map(st(et) || void 0);
}
function st(e) {
	let t = e.p;
	for (; t !== null;) {
		let e = t.c;
		if (e !== null) return e;
		t = t.p;
	}
	return null;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var ct = [];
function lt() {
	var e = ct;
	ct = [], x(e);
}
function ut(e) {
	if (ct.length === 0 && !nn) {
		var t = ct;
		queueMicrotask(() => {
			t === ct && lt();
		});
	}
	ct.push(e);
}
function dt() {
	for (; ct.length > 0;) lt();
}
function ft(e) {
	var t = xr;
	if (t === null) return vr.f |= he, e;
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	pt(e, t);
}
function pt(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
			if (t.f & 128) {
				if (!(t.f & 32768)) throw e;
				try {
					t.b.error(e);
					return;
				} catch (t) {
					e = t;
				}
			}
			t = t.parent;
		}
		throw e;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var mt = ~(te | ne | ee);
function ht(e, t) {
	e.f = e.f & mt | t;
}
function gt(e) {
	e.f & 512 || e.deps === null ? ht(e, ee) : ht(e, ne);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function _t(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || (t.f ^= fe, _t(t.deps));
}
function vt(e, t, n) {
	e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), _t(e.deps), ht(e, ee);
}
//#endregion
//#region node_modules/svelte/src/store/utils.js
function yt(e, t, n) {
	if (e == null) return t(void 0), n && n(void 0), v;
	let r = Ur(() => e.subscribe(t, n));
	return r.unsubscribe ? () => r.unsubscribe() : r;
}
//#endregion
//#region node_modules/svelte/src/store/shared/index.js
var bt = [];
function xt(e, t = v) {
	let n = null, r = /* @__PURE__ */ new Set();
	function i(t) {
		if (Xe(e, t) && (e = t, n)) {
			let t = !bt.length;
			for (let t of r) t[1](), bt.push(t, e);
			if (t) {
				for (let e = 0; e < bt.length; e += 2) bt[e][0](bt[e + 1]);
				bt.length = 0;
			}
		}
	}
	function a(t) {
		i(t(e));
	}
	function o(o, s = v) {
		let c = [o, s];
		return r.add(c), r.size === 1 && (n = t(i, a) || v), o(e), () => {
			r.delete(c), r.size === 0 && n && (n(), n = null);
		};
	}
	return {
		set: i,
		update: a,
		subscribe: o
	};
}
function St(e) {
	let t;
	return yt(e, (e) => t = e)(), t;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ct = !1, wt = !1, Tt = Symbol("unmounted");
function O(e, t, n) {
	let r = n[t] ??= {
		store: null,
		source: /* @__PURE__ */ xn(void 0),
		unsubscribe: v
	};
	if (r.store !== e && !(Tt in n)) if (r.unsubscribe(), r.store = e ?? null, e == null) r.source.v = void 0, r.unsubscribe = v;
	else {
		var i = !0;
		r.unsubscribe = yt(e, (e) => {
			i ? r.source.v = e : M(r.source, e);
		}), i = !1;
	}
	return e && Tt in n ? St(e) : I(r.source);
}
function k(e, t) {
	return Dt(e, t), t;
}
function Et() {
	let e = {};
	function t() {
		qn(() => {
			for (var t in e) e[t].unsubscribe();
			u(e, Tt, {
				enumerable: !1,
				value: !0
			});
		});
	}
	return [e, t];
}
function Dt(e, t) {
	Ct = !0;
	try {
		e.set(t);
	} finally {
		Ct = !1;
	}
}
function Ot(e) {
	var t = wt;
	try {
		return wt = !1, [e(), wt];
	} finally {
		wt = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/misc.js
function kt(e) {
	w && /* @__PURE__ */ In(e) !== null && zn(e);
}
var At = !1;
function jt() {
	At || (At = !0, document.addEventListener("reset", (e) => {
		Promise.resolve().then(() => {
			if (!e.defaultPrevented) for (let t of e.target.elements) t[Ce]?.();
		});
	}, { capture: !0 }));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function Mt(e) {
	var t = vr, n = xr;
	br(null), Sr(null);
	try {
		return e();
	} finally {
		br(t), Sr(n);
	}
}
function Nt(e, t, n, r = n) {
	e.addEventListener(t, () => Mt(n));
	let i = e[Ce];
	e[Ce] = i ? () => {
		i(), r(!0);
	} : () => r(!0), jt();
}
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Pt(e) {
	let t = 0, n = bn(0), r;
	return () => {
		Kn() && (I(n), er(() => (t === 0 && (r = Ur(() => e(() => wn(n)))), t += 1, () => {
			ut(() => {
				--t, t === 0 && (r?.(), r = void 0, wn(n));
			});
		})));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Ft = se | le;
function It(e, t, n, r) {
	new Lt(e, t, n, r);
}
var Lt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = w ? Ue : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = /* @__PURE__ */ new Set();
	#p = /* @__PURE__ */ new Set();
	#m = null;
	#h = Pt(() => (this.#m = bn(this.#l), () => {
		this.#m = null;
	}));
	constructor(e, t, n, r) {
		this.#e = e, this.#n = t, this.#r = (e) => {
			var t = xr;
			t.b = this, t.f |= 128, n(e);
		}, this.parent = xr.b, this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e), this.#i = tr(() => {
			if (w) {
				let e = this.#t;
				Ge();
				let t = e.data === "[!";
				if (e.data.startsWith("[?")) {
					let t = JSON.parse(e.data.slice(2));
					this.#_(t);
				} else t ? this.#y() : this.#g();
			} else this.#b();
		}, Ft), w && (this.#e = Ue);
	}
	#g() {
		try {
			this.#a = nr(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed, { reset: n, invoke_onerror: r } = this.#v(e);
		ut(r), t && (this.#s = nr(() => {
			t(this.#e, () => e, () => n);
		}));
	}
	#v(e) {
		var t = !1, n = !1;
		let r = () => {
			if (t) {
				Ve();
				return;
			}
			t = !0, n && Le(), this.#s !== null && lr(this.#s, () => {
				this.#s = null;
			}), this.#S(() => {
				this.#b();
			});
		};
		return {
			reset: r,
			invoke_onerror: () => {
				try {
					n = !0, this.#n.onerror?.(e, r), n = !1;
				} catch (e) {
					pt(e, this.#i && this.#i.parent);
				}
			}
		};
	}
	#y() {
		let e = this.#n.pending;
		e && (this.is_pending = !0, this.#o = nr(() => e(this.#e)), ut(() => {
			var e = this.#c = document.createDocumentFragment(), t = Fn();
			e.append(t), this.#a = this.#S(() => nr(() => this.#r(t))), this.#u === 0 && (this.#e.before(e), this.#c = null, lr(this.#o, () => {
				this.#o = null;
			}), this.#x(A));
		}));
	}
	#b() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#u = 0, this.#l = 0, this.#a = nr(() => {
				this.#r(this.#e);
			}), this.#u > 0) {
				var e = this.#c = document.createDocumentFragment();
				pr(this.#a, e);
				let t = this.#n.pending;
				this.#o = nr(() => t(this.#e));
			} else this.#x(A);
		} catch (e) {
			this.error(e);
		}
	}
	#x(e) {
		this.is_pending = !1, e.transfer_effects(this.#f, this.#p);
	}
	defer_effect(e) {
		vt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#S(e) {
		var t = xr, n = vr, r = et;
		Sr(this.#i), br(this.#i), tt(this.#i.ctx);
		try {
			return ln.ensure(), e();
		} catch (e) {
			return ft(e), null;
		} finally {
			Sr(t), br(n), tt(r);
		}
	}
	#C(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#C(e, t);
			return;
		}
		this.#u += e, this.#u === 0 && (this.#x(t), this.#o && lr(this.#o, () => {
			this.#o = null;
		}), this.#c &&= (this.#e.before(this.#c), null));
	}
	update_pending_count(e, t) {
		this.#C(e, t), this.#l += e, !(!this.#m || this.#d) && (this.#d = !0, ut(() => {
			this.#d = !1, this.#m && Sn(this.#m, this.#l);
		}));
	}
	get_effect_pending() {
		return this.#h(), I(this.#m);
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		A?.is_fork ? (this.#a && A.skip_effect(this.#a), this.#o && A.skip_effect(this.#o), this.#s && A.skip_effect(this.#s), A.oncommit(() => {
			this.#w(e);
		})) : this.#w(e);
	}
	#w(e) {
		this.#a &&= (or(this.#a), null), this.#o &&= (or(this.#o), null), this.#s &&= (or(this.#s), null), w && (We(this.#t), Ke(), We(qe()));
		let t = this.#n.failed, n = (e) => {
			let { reset: n, invoke_onerror: r } = this.#v(e);
			r(), t && (this.#s = this.#S(() => {
				try {
					return nr(() => {
						var r = xr;
						r.b = this, r.f |= 128, t(this.#e, () => e, () => n);
					});
				} catch (e) {
					return pt(e, this.#i.parent), null;
				}
			}));
		};
		ut(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				pt(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == "object" && t && typeof t.then == "function" ? t.then(n, (e) => pt(e, this.#i && this.#i.parent)) : n(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function Rt(e, t, n, r) {
	let i = at() ? Ht : Kt;
	var a = e.filter((e) => !e.settled), o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = xr, c = zt(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				pt(e, s);
			}
			Bt();
		}
	}
	var d = Vt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ Wt(e))).then(u).catch((e) => pt(e, s)).finally(d);
	}
	l ? l.then(() => {
		c(), f(), Bt();
	}) : f();
}
function zt() {
	var e = xr, t = vr, n = et, r = A;
	return function(i = !0) {
		Sr(e), br(t), tt(n), i && !(e.f & 16384) && (r?.activate(), r?.apply());
	};
}
function Bt(e = !0) {
	Sr(null), br(null), tt(null), e && A?.deactivate();
}
function Vt() {
	var e = xr, t = e.b, n = A, r = !!t?.is_rendered();
	return t?.update_pending_count(1, n), n.increment(r, e), () => {
		t?.update_pending_count(-1, n), n.decrement(r, e);
	};
}
/*#__NO_SIDE_EFFECTS__*/
function Ht(e) {
	var t = 2 | te;
	return xr !== null && (xr.f |= le), {
		ctx: et,
		deps: null,
		effects: null,
		equals: Ye,
		f: t,
		fn: e,
		reactions: null,
		rv: 0,
		v: n,
		wv: 0,
		parent: xr,
		ac: null
	};
}
var Ut = Symbol("obsolete");
/*#__NO_SIDE_EFFECTS__*/
function Wt(e, t, r) {
	let i = xr;
	i === null && De();
	var a = void 0, o = bn(n), s = !vr, c = /* @__PURE__ */ new Set();
	return $n(() => {
		var t = xr, n = S();
		a = n.promise;
		try {
			Promise.resolve(e()).then(n.resolve, (e) => {
				e !== we && n.reject(e);
			}).finally(Bt);
		} catch (e) {
			n.reject(e), Bt();
		}
		var r = A;
		if (s) {
			if (t.f & 32768) var l = Vt();
			if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(Ut);
			else for (let e of c.values()) e.reject(Ut);
			c.add(n), r.async_deriveds.set(t, n);
		}
		let u = (e, t = void 0) => {
			l?.(), c.delete(n), t !== Ut && (r.activate(), t ? (o.f |= he, Sn(o, t)) : (o.f & 8388608 && (o.f ^= he), Sn(o, e)), r.deactivate());
		};
		n.promise.then(u, (e) => u(null, e || "unknown"));
	}), qn(() => {
		for (let e of c) e.reject(Ut);
	}), new Promise((e) => {
		function t(n) {
			function r() {
				n === a ? e(o) : t(a);
			}
			n.then(r, r);
		}
		t(a);
	});
}
/*#__NO_SIDE_EFFECTS__*/
function Gt(e) {
	let t = /* @__PURE__ */ Ht(e);
	return wr(t), t;
}
/*#__NO_SIDE_EFFECTS__*/
function Kt(e) {
	let t = /* @__PURE__ */ Ht(e);
	return t.equals = Ze, t;
}
function qt(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) or(t[n]);
	}
}
function Jt(e) {
	var t, r = xr, i = e.parent;
	if (!gr && i !== null && e.v !== n && i.f & 24576) return Re(), e.v;
	Sr(i);
	try {
		e.f &= ~fe, qt(e), t = Ir(e);
	} finally {
		Sr(r);
	}
	return t;
}
function Yt(e) {
	var t = Jt(e);
	if (!e.equals(t) && (e.wv = Nr(), (!A?.is_fork || e.deps === null) && (A === null ? e.v = t : (A.capture(e, t, !0), $t?.capture(e, t, !0)), e.deps === null))) {
		ht(e, ee);
		return;
	}
	gr || (en === null ? gt(e) : (Kn() || A?.is_fork) && en.set(e, t));
}
function Xt(e) {
	if (e.effects !== null) for (let t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac !== null && Mt(() => {
		t.ac.abort(we), t.ac = null;
	}), t.fn !== null && (t.teardown = v), Rr(t, 0), ir(t));
}
function Zt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && zr(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var Qt = null, A = null, $t = null, en = null, tn = null, nn = !1, rn = !1, an = null, on = null, sn = 0, cn = 1, ln = class e {
	id = cn++;
	#e = !1;
	linked = !0;
	#t = null;
	#n = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = /* @__PURE__ */ new Set();
	#a = 0;
	#o = /* @__PURE__ */ new Map();
	#s = null;
	#c = [];
	#l = [];
	#u = /* @__PURE__ */ new Set();
	#d = /* @__PURE__ */ new Set();
	#f = /* @__PURE__ */ new Map();
	#p = /* @__PURE__ */ new Set();
	is_fork = !1;
	#m = !1;
	constructor() {
		Qt === null ? Qt = this : (Qt.#n = this, this.#t = Qt), Qt = this;
	}
	#h() {
		if (this.is_fork) return !0;
		for (let n of this.#o.keys()) {
			for (var e = n, t = !1; e.parent !== null;) {
				if (this.#f.has(e)) {
					t = !0;
					break;
				}
				e = e.parent;
			}
			if (!t) return !0;
		}
		return !1;
	}
	skip_effect(e) {
		this.#f.has(e) || this.#f.set(e, {
			d: [],
			m: []
		}), this.#p.delete(e);
	}
	unskip_effect(e, t = (e) => this.schedule(e)) {
		var n = this.#f.get(e);
		if (n) {
			this.#f.delete(e);
			for (var r of n.d) ht(r, te), t(r);
			for (r of n.m) ht(r, ne), t(r);
		}
		this.#p.add(e);
	}
	#g() {
		this.#e = !0, sn++ > 1e3 && (this.#x(), dn());
		for (let e of this.#u) this.#d.delete(e), ht(e, te), this.schedule(e);
		for (let e of this.#d) ht(e, ne), this.schedule(e);
		let t = this.#c;
		this.#c = [], this.apply();
		var n = an = [], r = [], i = on = [];
		for (let e of t) try {
			this.#_(e, n, r);
		} catch (t) {
			throw gn(e), this.#h() || this.discard(), t;
		}
		if (A = null, i.length > 0) {
			var a = e.ensure();
			for (let e of i) a.schedule(e);
		}
		if (an = null, on = null, this.#h()) {
			this.#b(r), this.#b(n);
			for (let [e, t] of this.#f) hn(e, t);
			i.length > 0 && A.#g();
			return;
		}
		let o = this.#v();
		if (o) {
			this.#b(r), this.#b(n), o.#y(this);
			return;
		}
		this.#u.clear(), this.#d.clear();
		for (let e of this.#r) e(this);
		this.#r.clear(), $t = this, pn(r), pn(n), $t = null, this.#s?.resolve();
		var s = A;
		if (this.#a === 0 && (this.#c.length === 0 || s !== null) && this.#x(), this.#c.length > 0) if (s !== null) {
			let e = s;
			e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
		} else s = this;
		s !== null && s.#g();
	}
	#_(e, t, n) {
		e.f ^= ee;
		for (var r = e.first; r !== null;) {
			var i = r.f, a = !!(i & 96);
			if (!(a && i & 1024 || i & 8192 || this.#f.has(r)) && r.fn !== null) {
				a ? r.f ^= ee : i & 4 ? t.push(r) : Pr(r) && (i & 16 && this.#d.add(r), zr(r));
				var o = r.first;
				if (o !== null) {
					r = o;
					continue;
				}
			}
			for (; r !== null;) {
				var s = r.next;
				if (s !== null) {
					r = s;
					break;
				}
				r = r.parent;
			}
		}
	}
	#v() {
		for (var e = this.#t; e !== null;) {
			if (!e.is_fork) {
				for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
			}
			e = e.#t;
		}
		return null;
	}
	#y(e) {
		for (let [t, n] of e.current) !this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)), this.current.set(t, n);
		for (let [t, n] of e.async_deriveds) {
			let e = this.async_deriveds.get(t);
			e && n.promise.then(e.resolve).catch(e.reject);
		}
		e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d);
		let t = (e) => {
			var n = e.reactions;
			if (n !== null && !(e.f & 2 && !(e.f & 6144))) for (let e of n) {
				var r = e.f;
				if (r & 2) t(e);
				else {
					var i = e;
					r & 4194320 && !this.async_deriveds.has(i) && (this.#d.delete(i), ht(i, te), this.schedule(i));
				}
			}
		};
		for (let e of this.current.keys()) t(e);
		this.oncommit(() => e.discard()), e.#x(), A = this, this.#g();
	}
	#b(e) {
		for (var t = 0; t < e.length; t += 1) vt(e[t], this.#u, this.#d);
	}
	capture(e, t, r = !1) {
		e.v !== n && !this.previous.has(e) && this.previous.set(e, e.v), e.f & 8388608 || (this.current.set(e, [t, r]), en?.set(e, t)), this.is_fork || (e.v = t);
	}
	activate() {
		A = this;
	}
	deactivate() {
		A = null, en = null;
	}
	flush() {
		try {
			rn = !0, A = this, this.#g();
		} finally {
			sn = 0, tn = null, an = null, on = null, rn = !1, A = null, en = null, vn.clear();
		}
	}
	discard() {
		for (let e of this.#i) e(this);
		this.#i.clear();
		for (let e of this.async_deriveds.values()) e.reject(Ut);
		this.#x(), this.#s?.resolve();
	}
	register_created_effect(e) {
		this.#l.push(e);
	}
	increment(e, t) {
		if (this.#a += 1, e) {
			let e = this.#o.get(t) ?? 0;
			this.#o.set(t, e + 1);
		}
	}
	decrement(e, t) {
		if (--this.#a, e) {
			let e = this.#o.get(t) ?? 0;
			e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
		}
		this.#m || (this.#m = !0, ut(() => {
			this.#m = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(e, t) {
		for (let t of e) this.#u.add(t);
		for (let e of t) this.#d.add(e);
		e.clear(), t.clear();
	}
	oncommit(e) {
		this.#r.add(e);
	}
	ondiscard(e) {
		this.#i.add(e);
	}
	settled() {
		return (this.#s ??= S()).promise;
	}
	static ensure() {
		if (A === null) {
			let t = A = new e();
			!rn && !nn && ut(() => {
				t.#e || t.flush();
			});
		}
		return A;
	}
	apply() {
		en = null;
	}
	schedule(e) {
		if (tn = e, e.b?.is_pending && e.f & 16777228 && !(e.f & 32768)) {
			e.b.defer_effect(e);
			return;
		}
		for (var t = e; t.parent !== null;) {
			t = t.parent;
			var n = t.f;
			if (an !== null && t === xr && (vr === null || !(vr.f & 2)) && !Ct) return;
			if (n & 96) {
				if (!(n & 1024)) return;
				t.f ^= ee;
			}
		}
		this.#c.push(t);
	}
	#x() {
		if (this.linked) {
			var e = this.#t, t = this.#n;
			e === null || (e.#n = t), t === null ? Qt = e : t.#t = e, this.linked = !1;
		}
	}
};
function un(e) {
	var t = nn;
	nn = !0;
	try {
		var n;
		for (e && (A !== null && !A.is_fork && A.flush(), n = e());;) {
			if (dt(), A === null) return n;
			A.flush();
		}
	} finally {
		nn = t;
	}
}
function dn() {
	try {
		Me();
	} catch (e) {
		pt(e, tn);
	}
}
var fn = null;
function pn(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (!(r.f & 24576) && Pr(r) && (fn = /* @__PURE__ */ new Set(), zr(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && cr(r), fn?.size > 0)) {
				vn.clear();
				for (let e of fn) {
					if (e.f & 24576) continue;
					let t = [e], n = e.parent;
					for (; n !== null;) fn.has(n) && (fn.delete(n), t.push(n)), n = n.parent;
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || zr(n);
					}
				}
				fn.clear();
			}
		}
		fn = null;
	}
}
function mn(e) {
	A.schedule(e);
}
function hn(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), ht(e, ee);
		for (var n = e.first; n !== null;) hn(n, t), n = n.next;
	}
}
function gn(e) {
	ht(e, ee);
	for (var t = e.first; t !== null;) gn(t), t = t.next;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var _n = /* @__PURE__ */ new Set(), vn = /* @__PURE__ */ new Map(), yn = !1;
function bn(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ye,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function j(e, t) {
	let n = bn(e, t);
	return wr(n), n;
}
/*#__NO_SIDE_EFFECTS__*/
function xn(e, t = !1, n = !0) {
	let r = bn(e);
	return t || (r.equals = Ze), Qe && n && et !== null && et.l !== null && (et.l.s ??= []).push(r), r;
}
function M(e, t, n = !1) {
	return vr !== null && (!yr || vr.f & 131072) && at() && vr.f & 4325394 && (Cr === null || !Cr.has(e)) && Ie(), Sn(e, n ? En(t) : t, on);
}
function Sn(e, t, n = null) {
	if (!e.equals(t)) {
		vn.set(e, gr ? t : e.v);
		var r = ln.ensure();
		if (r.capture(e, t), e.f & 2) {
			let t = e;
			e.f & 2048 && Jt(t), en === null && gt(t);
		}
		e.wv = Nr(), Tn(e, te, n), at() && xr !== null && xr.f & 1024 && !(xr.f & 96) && (Dr === null ? Or([e]) : Dr.push(e)), !r.is_fork && _n.size > 0 && !yn && Cn();
	}
	return t;
}
function Cn() {
	yn = !1;
	for (let e of _n) {
		e.f & 1024 && ht(e, ne);
		let t;
		try {
			t = Pr(e);
		} catch {
			t = !0;
		}
		t && zr(e);
	}
	_n.clear();
}
function wn(e) {
	M(e, e.v + 1);
}
function Tn(e, t, n) {
	var r = e.reactions;
	if (r !== null) for (var i = at(), a = r.length, o = 0; o < a; o++) {
		var s = r[o], c = s.f;
		if (!(!i && s === xr)) {
			var l = (c & te) === 0;
			if (l && ht(s, t), c & 131072) _n.add(s);
			else if (c & 2) {
				var u = s;
				en?.delete(u), c & 65536 || (c & 512 && (xr === null || !(xr.f & 2097152)) && (s.f |= fe), Tn(u, ne, n));
			} else if (l) {
				var d = s;
				c & 16 && fn !== null && fn.add(d), n === null ? mn(d) : n.push(d);
			}
		}
	}
}
function En(e) {
	if (typeof e != "object" || !e || ge in e) return e;
	let t = h(e);
	if (t !== p && t !== m) return e;
	var r = /* @__PURE__ */ new Map(), i = o(e), a = /* @__PURE__ */ j(0), s = null, c = jr, l = (e) => {
		if (jr === c) return e();
		var t = vr, n = jr;
		br(null), Mr(c);
		var r = e();
		return br(t), Mr(n), r;
	};
	return i && r.set("length", /* @__PURE__ */ j(e.length, s)), new Proxy(e, {
		defineProperty(e, t, n) {
			(!("value" in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) && Pe();
			var i = r.get(t);
			return i === void 0 ? l(() => {
				var e = /* @__PURE__ */ j(n.value, s);
				return r.set(t, e), e;
			}) : M(i, n.value, !0), !0;
		},
		deleteProperty(e, t) {
			var i = r.get(t);
			if (i === void 0) {
				if (t in e) {
					let e = l(() => /* @__PURE__ */ j(n, s));
					r.set(t, e), wn(a);
				}
			} else M(i, n), wn(a);
			return !0;
		},
		get(t, i, a) {
			if (i === ge) return e;
			var o = r.get(i), c = i in t;
			if (o === void 0 && (!c || d(t, i)?.writable) && (o = l(() => /* @__PURE__ */ j(En(c ? t[i] : n), s)), r.set(i, o)), o !== void 0) {
				var u = I(o);
				return u === n ? void 0 : u;
			}
			return Reflect.get(t, i, a);
		},
		getOwnPropertyDescriptor(e, t) {
			var i = Reflect.getOwnPropertyDescriptor(e, t);
			if (i && "value" in i) {
				var a = r.get(t);
				a && (i.value = I(a));
			} else if (i === void 0) {
				var o = r.get(t), s = o?.v;
				if (o !== void 0 && s !== n) return {
					enumerable: !0,
					configurable: !0,
					value: s,
					writable: !0
				};
			}
			return i;
		},
		has(e, t) {
			if (t === ge) return !0;
			var i = r.get(t), a = i !== void 0 && i.v !== n || Reflect.has(e, t);
			return (i !== void 0 || xr !== null && (!a || d(e, t)?.writable)) && (i === void 0 && (i = l(() => /* @__PURE__ */ j(a ? En(e[t]) : n, s)), r.set(t, i)), I(i) === n) ? !1 : a;
		},
		set(e, t, o, c) {
			var u = r.get(t), f = t in e;
			if (i && t === "length") for (var p = o; p < u.v; p += 1) {
				var m = r.get(p + "");
				m === void 0 ? p in e && (m = l(() => /* @__PURE__ */ j(n, s)), r.set(p + "", m)) : M(m, n);
			}
			if (u === void 0) (!f || d(e, t)?.writable) && (u = l(() => /* @__PURE__ */ j(void 0, s)), M(u, En(o)), r.set(t, u));
			else {
				f = u.v !== n;
				var h = l(() => En(o));
				M(u, h);
			}
			var g = Reflect.getOwnPropertyDescriptor(e, t);
			if (g?.set && g.set.call(c, o), !f) {
				if (i && typeof t == "string") {
					var _ = r.get("length"), v = Number(t);
					Number.isInteger(v) && v >= _.v && M(_, v + 1);
				}
				wn(a);
			}
			return !0;
		},
		ownKeys(e) {
			I(a);
			var t = Reflect.ownKeys(e).filter((e) => {
				var t = r.get(e);
				return t === void 0 || t.v !== n;
			});
			for (var [i, o] of r) o.v !== n && !(i in e) && t.push(i);
			return t;
		},
		setPrototypeOf() {
			Fe();
		}
	});
}
function Dn(e) {
	try {
		if (typeof e == "object" && e && ge in e) return e[ge];
	} catch {}
	return e;
}
function On(e, t) {
	return Object.is(Dn(e), Dn(t));
}
var kn, An, jn, Mn, Nn;
function Pn() {
	if (kn === void 0) {
		kn = window, An = document, jn = /Firefox/.test(navigator.userAgent);
		var e = Element.prototype, t = Node.prototype, n = Text.prototype;
		Mn = d(t, "firstChild").get, Nn = d(t, "nextSibling").get, g(e) && (e[be] = void 0, e[ye] = null, e[xe] = void 0, e.__e = void 0), g(n) && (n[Se] = void 0);
	}
}
function Fn(e = "") {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function In(e) {
	return Mn.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Ln(e) {
	return Nn.call(e);
}
function N(e, t) {
	if (!w) return /* @__PURE__ */ In(e);
	var n = /* @__PURE__ */ In(Ue);
	if (n === null) n = Ue.appendChild(Fn());
	else if (t && n.nodeType !== 3) {
		var r = Fn();
		return n?.before(r), We(r), r;
	}
	return t && Hn(n), We(n), n;
}
function Rn(e, t = !1) {
	if (!w) {
		var n = /* @__PURE__ */ In(e);
		return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ln(n) : n;
	}
	if (t) {
		if (Ue?.nodeType !== 3) {
			var r = Fn();
			return Ue?.before(r), We(r), r;
		}
		Hn(Ue);
	}
	return Ue;
}
function P(e, t = 1, n = !1) {
	let r = w ? Ue : e;
	for (var i; t--;) i = r, r = /* @__PURE__ */ Ln(r);
	if (!w) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = Fn();
			return r === null ? i?.after(a) : r.before(a), We(a), a;
		}
		Hn(r);
	}
	return We(r), r;
}
function zn(e) {
	e.textContent = "";
}
function Bn() {
	return !1;
}
function Vn(e, t, n) {
	return t == null || t === "http://www.w3.org/1999/xhtml" ? n ? document.createElement(e, { is: n }) : document.createElement(e) : n ? document.createElementNS(t, e, { is: n }) : document.createElementNS(t, e);
}
function Hn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;) t.remove(), e.nodeValue += t.nodeValue, t = e.nextSibling;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function Un(e) {
	xr === null && (vr === null && je(e), Ae()), gr && ke(e);
}
function Wn(e, t) {
	var n = t.last;
	n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Gn(e, t) {
	var n = xr;
	n !== null && n.f & 8192 && (e |= re);
	var r = {
		ctx: et,
		deps: null,
		nodes: null,
		f: e | te | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	A?.register_created_effect(r);
	var i = r;
	if (e & 4) an === null ? ln.ensure().schedule(r) : an.push(r);
	else if (t !== null) {
		try {
			zr(r);
		} catch (e) {
			throw or(r), e;
		}
		i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && !(i.f & 524288) && (i = i.first, e & 16 && e & 65536 && i !== null && (i.f |= se));
	}
	if (i !== null && (i.parent = n, n !== null && Wn(i, n), vr !== null && vr.f & 2 && !(e & 64))) {
		var a = vr;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Kn() {
	return vr !== null && !yr;
}
function qn(e) {
	let t = Gn(8, null);
	return ht(t, ee), t.teardown = e, t;
}
function Jn(e) {
	Un("$effect");
	var t = xr.f;
	if (!vr && t & 32 && et !== null && !et.i) {
		var n = et;
		(n.e ??= []).push(e);
	} else return Yn(e);
}
function Yn(e) {
	return Gn(4 | ue, e);
}
function Xn(e) {
	return Un("$effect.pre"), Gn(8 | ue, e);
}
function Zn(e) {
	ln.ensure();
	let t = Gn(64 | le, e);
	return (e = {}) => new Promise((n) => {
		e.outro ? lr(t, () => {
			or(t), n(void 0);
		}) : (or(t), n(void 0));
	});
}
function Qn(e) {
	return Gn(4, e);
}
function $n(e) {
	return Gn(me | le, e);
}
function er(e, t = 0) {
	return Gn(8 | t, e);
}
function F(e, t = [], n = [], r = []) {
	Rt(r, t, n, (t) => {
		Gn(8, () => {
			e(...t.map(I));
		});
	});
}
function tr(e, t = 0) {
	return Gn(16 | t, e);
}
function nr(e) {
	return Gn(32 | le, e);
}
function rr(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = gr, n = vr;
		_r(!0), br(null);
		try {
			t.call(null);
		} finally {
			_r(e), br(n);
		}
	}
}
function ir(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null && Mt(() => {
			e.abort(we);
		});
		var r = n.next;
		n.f & 64 ? n.parent = null : or(n, t), n = r;
	}
}
function ar(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		t.f & 32 || or(t), t = n;
	}
}
function or(e, t = !0) {
	var n = !1;
	(t || e.f & 262144) && e.nodes !== null && e.nodes.end !== null && (sr(e.nodes.start, e.nodes.end), n = !0), e.f |= oe, ir(e, t && !n), Rr(e, 0);
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	rr(e), e.f ^= oe, e.f |= ie;
	var i = e.parent;
	i !== null && i.first !== null && cr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function sr(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ Ln(e);
		e.remove(), e = n;
	}
}
function cr(e) {
	var t = e.parent, n = e.prev, r = e.next;
	n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function lr(e, t, n = !0) {
	var r = [];
	ur(e, r, !0);
	var i = () => {
		n && or(e), t && t();
	}, a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function ur(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= re;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = !!(i.f & 65536) || !!(i.f & 32) && !!(e.f & 16);
				ur(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function dr(e) {
	fr(e, !0);
}
function fr(e, t) {
	if (e.f & 8192) {
		e.f ^= re, e.f & 1024 || (ht(e, te), ln.ensure().schedule(e));
		for (var n = e.first; n !== null;) {
			var r = n.next, i = !!(n.f & 65536) || !!(n.f & 32);
			fr(n, i ? t : !1), n = r;
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function pr(e, t) {
	if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
		var i = n === r ? null : /* @__PURE__ */ Ln(n);
		t.append(n), n = i;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var mr = null, hr = !1, gr = !1;
function _r(e) {
	gr = e;
}
var vr = null, yr = !1;
function br(e) {
	vr = e;
}
var xr = null;
function Sr(e) {
	xr = e;
}
var Cr = null;
function wr(e) {
	vr !== null && (Cr ??= /* @__PURE__ */ new Set()).add(e);
}
var Tr = null, Er = 0, Dr = null;
function Or(e) {
	Dr = e;
}
var kr = 1, Ar = 0, jr = Ar;
function Mr(e) {
	jr = e;
}
function Nr() {
	return ++kr;
}
function Pr(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if (t & 2 && (e.f &= ~fe), t & 4096) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if (Pr(a) && Yt(a), a.wv > e.wv) return !0;
		}
		t & 512 && en === null && ht(e, ee);
	}
	return !1;
}
function Fr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(Cr !== null && Cr.has(e))) for (var i = 0; i < r.length; i++) {
		var a = r[i];
		a.f & 2 ? Fr(a, t, !1) : t === a && (n ? ht(a, te) : a.f & 1024 && ht(a, ne), mn(a));
	}
}
function Ir(e) {
	var t = Tr, n = Er, r = Dr, i = vr, a = Cr, o = et, s = yr, c = jr, l = e.f;
	Tr = null, Er = 0, Dr = null, vr = l & 96 ? null : e, Cr = null, tt(e.ctx), yr = !1, jr = ++Ar, e.ac !== null && (Mt(() => {
		e.ac.abort(we);
	}), e.ac = null);
	try {
		e.f |= pe;
		var u = e.fn, d = u();
		e.f |= ae;
		var f = e.deps, p = A?.is_fork;
		if (Tr !== null) {
			var m;
			if (p || Rr(e, Er), f !== null && Er > 0) for (f.length = Er + Tr.length, m = 0; m < Tr.length; m++) f[Er + m] = Tr[m];
			else e.deps = f = Tr;
			if (Kn() && e.f & 512) for (m = Er; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Er < f.length && (Rr(e, Er), f.length = Er);
		if (at() && Dr !== null && !yr && f !== null && !(e.f & 6146)) for (m = 0; m < Dr.length; m++) Fr(Dr[m], e);
		if (i !== null && i !== e) {
			if (Ar++, i.deps !== null) for (let e = 0; e < n; e += 1) i.deps[e].rv = Ar;
			if (t !== null) for (let e of t) e.rv = Ar;
			Dr !== null && (r === null ? r = Dr : r.push(...Dr));
		}
		return e.f & 8388608 && (e.f ^= he), d;
	} catch (e) {
		return ft(e);
	} finally {
		e.f ^= pe, Tr = t, Er = n, Dr = r, vr = i, Cr = a, tt(o), yr = s, jr = c;
	}
}
function Lr(e, t) {
	let r = t.reactions;
	if (r !== null) {
		var i = s.call(r, e);
		if (i !== -1) {
			var a = r.length - 1;
			a === 0 ? r = t.reactions = null : (r[i] = r[a], r.pop());
		}
	}
	if (r === null && t.f & 2 && (Tr === null || !c.call(Tr, t))) {
		var o = t;
		o.f & 512 && (o.f ^= 512, o.f &= ~fe), o.v !== n && gt(o), o.ac !== null && Mt(() => {
			o.ac.abort(we), o.ac = null, ht(o, te);
		}), Xt(o), Rr(o, 0);
	}
}
function Rr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) Lr(e, n[r]);
}
function zr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		ht(e, ee);
		var n = xr, r = hr;
		xr = e, hr = !(t & 96);
		try {
			t & 16777232 ? ar(e) : ir(e), rr(e);
			var i = Ir(e);
			e.teardown = typeof i == "function" ? i : null, e.wv = kr;
		} finally {
			hr = r, xr = n;
		}
	}
}
async function Br() {
	await Promise.resolve(), un();
}
function I(e) {
	var t = !!(e.f & 2);
	if (mr?.add(e), vr !== null && !yr && !(xr !== null && xr.f & 16384) && (Cr === null || !Cr.has(e))) {
		var n = vr.deps;
		if (vr.f & 2097152) e.rv < Ar && (e.rv = Ar, Tr === null && n !== null && n[Er] === e ? Er++ : Tr === null ? Tr = [e] : Tr.push(e));
		else {
			vr.deps ??= [], c.call(vr.deps, e) || vr.deps.push(e);
			var r = e.reactions;
			r === null ? e.reactions = [vr] : c.call(r, vr) || r.push(vr);
		}
	}
	if (gr && vn.has(e)) return vn.get(e);
	if (t) {
		var i = e;
		if (gr) {
			var a = i.v;
			return (!(i.f & 1024) && i.reactions !== null || Hr(i)) && (a = Jt(i)), vn.set(i, a), a;
		}
		var o = !(i.f & 512) && !yr && vr !== null && (hr || !!(vr.f & 512)), s = (i.f & ae) === 0;
		Pr(i) && (o && (i.f |= 512), Yt(i)), o && !s && (Zt(i), Vr(i));
	}
	if (en?.has(e)) return en.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Vr(e) {
	if (e.f |= 512, e.deps !== null) for (let t of e.deps) (t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Zt(t), Vr(t));
}
function Hr(e) {
	if (e.v === n) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (vn.has(t) || t.f & 2 && Hr(t)) return !0;
	return !1;
}
function Ur(e) {
	var t = yr;
	try {
		return yr = !0, e();
	} finally {
		yr = t;
	}
}
function Wr(e) {
	if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
		if (ge in e) Gr(e);
		else if (!Array.isArray(e)) for (let t in e) {
			let n = e[t];
			typeof n == "object" && n && ge in n && Gr(n);
		}
	}
}
function Gr(e, t = /* @__PURE__ */ new Set()) {
	if (typeof e == "object" && e && !(e instanceof EventTarget) && !t.has(e)) {
		t.add(e), e instanceof Date && e.getTime();
		for (let n in e) try {
			Gr(e[n], t);
		} catch {}
		let n = h(e);
		if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
			let t = f(n);
			for (let n in t) {
				let r = t[n].get;
				if (r) try {
					r.call(e);
				} catch {}
			}
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Kr = Symbol("events"), qr = /* @__PURE__ */ new Set(), Jr = /* @__PURE__ */ new Set();
function Yr(e) {
	if (!w) return;
	e.removeAttribute("onload"), e.removeAttribute("onerror");
	let t = e.__e;
	t !== void 0 && (e.__e = void 0, queueMicrotask(() => {
		e.isConnected && e.dispatchEvent(t);
	}));
}
function Xr(e, t, n, r = {}) {
	function i(e) {
		if (r.capture || ei.call(t, e), !e.cancelBubble) return Mt(() => n?.call(this, e));
	}
	return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
		t.addEventListener(e, i, r);
	}) : t.addEventListener(e, i, r), i;
}
function Zr(e, t, n, r, i) {
	var a = {
		capture: r,
		passive: i
	}, o = Xr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && qn(() => {
		t.removeEventListener(e, o, a);
	});
}
function L(e, t, n) {
	(t[Kr] ??= {})[e] = n;
}
function Qr(e) {
	for (var t = 0; t < e.length; t++) qr.add(e[t]);
	for (var n of Jr) n(e);
}
var $r = null;
function ei(e) {
	var t = this, n = t.ownerDocument, r = e.type, i = e.composedPath?.() || [], a = i[0] || e.target;
	$r = e;
	var o = 0, s = $r === e && e[Kr];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Kr] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (a = i[o] || e.target, a !== t) {
		u(e, "currentTarget", {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var d = vr, f = xr;
		br(null), Sr(null);
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Kr]?.[r];
					h != null && (!a.disabled || e.target === a) && h.call(a, e);
				} catch (e) {
					p ? m.push(e) : p = e;
				}
				if (e.cancelBubble) break;
				o++, a = o < i.length ? i[o] : null;
			}
			if (p) {
				for (let e of m) queueMicrotask(() => {
					throw e;
				});
				throw p;
			}
		} finally {
			e[Kr] = t, delete e.currentTarget, br(d), Sr(f);
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var ti = globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ni(e) {
	return ti?.createHTML(e) ?? e;
}
function ri(e) {
	var t = Vn("template");
	return t.innerHTML = ni(e.replaceAll("<!>", "<!---->")), t.content;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function ii(e, t) {
	var n = xr;
	n.nodes === null && (n.nodes = {
		start: e,
		end: t,
		a: null,
		t: null
	});
}
/*#__NO_SIDE_EFFECTS__*/
function R(e, t) {
	var n = !!(t & 1), r = !!(t & 2), i, a = !e.startsWith("<!>");
	return () => {
		if (w) return ii(Ue, null), Ue;
		i === void 0 && (i = ri(a ? e : "<!>" + e), n || (i = /* @__PURE__ */ In(i)));
		var t = r || jn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ In(t), s = t.lastChild;
			ii(o, s);
		} else ii(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function ai(e, t, n = "svg") {
	var r = !e.startsWith("<!>"), i = !!(t & 1), a = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
	return () => {
		if (w) return ii(Ue, null), Ue;
		if (!o) {
			var e = /* @__PURE__ */ In(ri(a));
			if (i) for (o = document.createDocumentFragment(); /* @__PURE__ */ In(e);) o.appendChild(/* @__PURE__ */ In(e));
			else o = /* @__PURE__ */ In(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = /* @__PURE__ */ In(t), r = t.lastChild;
			ii(n, r);
		} else ii(t, t);
		return t;
	};
}
/*#__NO_SIDE_EFFECTS__*/
function oi(e, t) {
	return /* @__PURE__ */ ai(e, t, "svg");
}
function si(e = "") {
	if (!w) {
		var t = Fn(e + "");
		return ii(t, t), t;
	}
	var n = Ue;
	return n.nodeType === 3 ? Hn(n) : (n.before(n = Fn()), We(n)), ii(n, n), n;
}
function ci() {
	if (w) return ii(Ue, null), Ue;
	var e = document.createDocumentFragment(), t = document.createComment(""), n = Fn();
	return e.append(t, n), ii(t, n), e;
}
function z(e, t) {
	if (w) {
		var n = xr;
		(!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = Ue), Ge();
		return;
	}
	e !== null && e.before(t);
}
[.../* @__PURE__ */ "allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback".split(".")];
var li = ["touchstart", "touchmove"];
function ui(e) {
	return li.includes(e);
}
function di(e, t) {
	var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
	n !== (e[Se] ??= e.nodeValue) && (e[Se] = n, e.nodeValue = `${n}`);
}
function fi(e, t) {
	return mi(e, t);
}
var pi = /* @__PURE__ */ new Map();
function mi(e, { target: n, anchor: r, props: i = {}, events: a, context: o, intro: s = !0, transformError: c }) {
	Pn();
	var u = void 0, d = Zn(() => {
		var s = r ?? n.appendChild(Fn());
		It(s, { pending: () => {} }, (n) => {
			E({});
			var r = et;
			if (o && (r.c = o), a && (i.$$events = a), w && ii(n, null), u = e(n, i) || {}, w && (xr.nodes.end = Ue, Ue === null || Ue.nodeType !== 8 || Ue.data !== "]")) throw ze(), t;
			D();
		}, c);
		var d = /* @__PURE__ */ new Set(), f = (e) => {
			for (var t = 0; t < e.length; t++) {
				var r = e[t];
				if (!d.has(r)) {
					d.add(r);
					var i = ui(r);
					for (let e of [n, document]) {
						var a = pi.get(e);
						a === void 0 && (a = /* @__PURE__ */ new Map(), pi.set(e, a));
						var o = a.get(r);
						o === void 0 ? (e.addEventListener(r, ei, { passive: i }), a.set(r, 1)) : a.set(r, o + 1);
					}
				}
			}
		};
		return f(l(qr)), Jr.add(f), () => {
			for (var e of d) for (let r of [n, document]) {
				var t = pi.get(r), i = t.get(e);
				--i == 0 ? (r.removeEventListener(e, ei), t.delete(e), t.size === 0 && pi.delete(r)) : t.set(e, i);
			}
			Jr.delete(f), s !== r && s.parentNode?.removeChild(s);
		};
	});
	return hi.set(u, d), u;
}
var hi = /* @__PURE__ */ new WeakMap(), gi = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		this.anchor = e, this.#i = t;
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e), n = this.#t.get(t);
			if (n) dr(n), this.#r.delete(t);
			else {
				var r = this.#n.get(t);
				r && (dr(r.effect), this.#t.set(t, r.effect), this.#n.delete(t), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), n = r.effect);
			}
			for (let [t, n] of this.#e) {
				if (this.#e.delete(t), t === e) break;
				let r = this.#n.get(n);
				r && (or(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						pr(r, t), t.append(Fn()), this.#n.set(e, {
							effect: r,
							fragment: t
						});
					} else or(r);
					this.#r.delete(e), this.#t.delete(e);
				};
				this.#i || !n ? (this.#r.add(e), lr(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (or(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = A, r = Bn();
		if (t && !this.#t.has(e) && !this.#n.has(e)) if (r) {
			var i = document.createDocumentFragment(), a = Fn();
			i.append(a), this.#n.set(e, {
				effect: nr(() => t(a)),
				fragment: i
			});
		} else this.#t.set(e, nr(() => t(this.anchor)));
		if (this.#e.set(n, e), r) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			n.oncommit(this.#a), n.ondiscard(this.#o);
		} else w && (this.anchor = Ue), this.#a(n);
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/snippet.js
function _i(e, t, ...n) {
	var r = new gi(e);
	tr(() => {
		let e = t() ?? null;
		r.ensure(e, e && ((t) => e(t, ...n)));
	}, se);
}
function vi(e) {
	et === null && Ee("onMount"), Qe && et.l !== null ? bi(et).m.push(e) : Jn(() => {
		let t = Ur(e);
		if (typeof t == "function") return t;
	});
}
function yi(e) {
	et === null && Ee("onDestroy"), vi(() => () => Ur(e));
}
function bi(e) {
	var t = e.l;
	return t.u ??= {
		a: [],
		b: [],
		m: []
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/await.js
var xi = 0, Si = 1, Ci = 2;
function wi(e, t, r, i, a) {
	w && Ge();
	var o = at(), s = n, c = o ? bn(s) : /* @__PURE__ */ xn(s, !1, !1), l = o ? bn(s) : /* @__PURE__ */ xn(s, !1, !1), u = new gi(e);
	tr(() => {
		var n = A, o = t(), s = !1;
		let d = w && y(o) === (e.data === "[!");
		if (d && (We(qe()), He(!1)), y(o)) {
			var f = zt(), p = !1;
			let e = (e) => {
				if (!s) {
					p = !0, f(!1), A === n && n.deactivate(), ln.ensure();
					try {
						e();
					} finally {
						Bt(!1), nn || un();
					}
				}
			};
			o.then((t) => {
				e(() => {
					Sn(c, t), u.ensure(Si, i && ((e) => i(e, c)));
				});
			}, (t) => {
				e(() => {
					if (Sn(l, t), u.ensure(Ci, a && ((e) => a(e, l))), !a) throw l.v;
				});
			}), w ? u.ensure(xi, r) : ut(() => {
				p || e(() => {
					u.ensure(xi, r);
				});
			});
		} else Sn(c, o), u.ensure(Si, i && ((e) => i(e, c)));
		return d && He(!0), () => {
			s = !0;
		};
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function Ti(e, t, n = !1) {
	var r;
	w && (r = Ue, Ge());
	var i = new gi(e), a = n ? se : 0;
	function o(e, t) {
		if (w) {
			var n = Je(r);
			if (e !== parseInt(n.substring(1))) {
				var a = qe();
				We(a), i.anchor = a, He(!1), i.ensure(e, t), He(!0);
				return;
			}
		}
		i.ensure(e, t);
	}
	tr(() => {
		var e = !1;
		t((t, n = 0) => {
			e = !0, o(n, t);
		}), e || o(-1, null);
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function Ei(e, t) {
	return t;
}
function Di(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		lr(n, () => {
			if (a) {
				if (a.pending.delete(n), a.done.add(n), a.pending.size === 0) {
					var t = e.outrogroups;
					Oi(e, l(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null);
				}
			} else --o;
		}, !1);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var u = n, d = u.parentNode;
			zn(d), d.append(u), e.items.clear();
		}
		Oi(e, t, !c);
	} else a = {
		pending: new Set(t),
		done: /* @__PURE__ */ new Set()
	}, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Oi(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? (a.f |= de, pr(a, document.createDocumentFragment())) : or(t[i], n);
	}
}
var ki;
function Ai(e, t, n, r, i, a = null) {
	var s = e, c = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		s = w ? We(/* @__PURE__ */ In(u)) : u.appendChild(Fn());
	}
	w && Ge();
	var d = null, f = /* @__PURE__ */ Kt(() => {
		var e = n();
		return o(e) ? e : e == null ? [] : l(e);
	}), p, m = /* @__PURE__ */ new Map(), h = !0;
	function g(e) {
		v.effect.f & 16384 || (v.pending.delete(e), v.fallback = d, Mi(v, p, s, t, r), d !== null && (p.length === 0 ? d.f & 33554432 ? (d.f ^= de, Pi(d, null, s)) : dr(d) : lr(d, () => {
			d = null;
		})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: tr(() => {
			p = I(f);
			var e = p.length;
			let o = !1;
			w && Je(s) === "[!" != (e === 0) && (s = qe(), We(s), He(!1), o = !0);
			for (var l = /* @__PURE__ */ new Set(), u = A, v = Bn(), y = 0; y < e; y += 1) {
				w && Ue.nodeType === 8 && Ue.data === "]" && (s = Ue, o = !0, He(!1));
				var b = p[y], x = r(b, y), S = h ? null : c.get(x);
				S ? (S.v && Sn(S.v, b), S.i && Sn(S.i, y), v && u.unskip_effect(S.e)) : (S = Ni(c, h ? s : ki ??= Fn(), b, x, y, i, t, n), h || (S.e.f |= de), c.set(x, S)), l.add(x);
			}
			if (e === 0 && a && !d && (h ? d = nr(() => a(s)) : (d = nr(() => a(ki ??= Fn())), d.f |= de)), e > l.size && Oe("", "", ""), w && e > 0 && We(qe()), !h) if (m.set(u, l), v) {
				for (let [e, t] of c) l.has(e) || u.skip_effect(t.e);
				u.oncommit(g), u.ondiscard(_);
			} else g(u);
			o && He(!0), I(f);
		}),
		flags: t,
		items: c,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	h = !1, w && (s = Ue);
}
function ji(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function Mi(e, t, n, r, i) {
	var a = !!(r & 8), o = t.length, s = e.items, c = ji(e.effect.first), u, d = null, f, p = [], m = [], h, g, _, v;
	if (a) for (v = 0; v < o; v += 1) h = t[v], g = i(h, v), _ = s.get(g).e, _.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_));
	for (v = 0; v < o; v += 1) {
		if (h = t[v], g = i(h, v), _ = s.get(g).e, e.outrogroups !== null) for (let t of e.outrogroups) t.pending.delete(_), t.done.delete(_);
		if (_.f & 8192 && (dr(_), a && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))), _.f & 33554432) if (_.f ^= de, _ === c) Pi(_, null, n);
		else {
			var y = d ? d.next : c;
			_ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), Fi(e, d, _), Fi(e, _, y), Pi(_, y, n), d = _, p = [], m = [], c = ji(d.next);
			continue;
		}
		if (_ !== c) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var b = m[0], x;
					d = b.prev;
					var S = p[0], C = p[p.length - 1];
					for (x = 0; x < p.length; x += 1) Pi(p[x], b, n);
					for (x = 0; x < m.length; x += 1) u.delete(m[x]);
					Fi(e, S.prev, C.next), Fi(e, d, S), Fi(e, C, b), c = b, d = C, --v, p = [], m = [];
				} else u.delete(_), Pi(_, c, n), Fi(e, _.prev, _.next), Fi(e, _, d === null ? e.effect.first : d.next), Fi(e, d, _), d = _;
				continue;
			}
			for (p = [], m = []; c !== null && c !== _;) (u ??= /* @__PURE__ */ new Set()).add(c), m.push(c), c = ji(c.next);
			if (c === null) continue;
		}
		_.f & 33554432 || p.push(_), d = _, c = ji(_.next);
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups) t.pending.size === 0 && (Oi(e, l(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || u !== void 0) {
		var ee = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || ee.push(_);
		for (; c !== null;) !(c.f & 8192) && c !== e.fallback && ee.push(c), c = ji(c.next);
		var te = ee.length;
		if (te > 0) {
			var ne = r & 4 && o === 0 ? n : null;
			if (a) {
				for (v = 0; v < te; v += 1) ee[v].nodes?.a?.measure();
				for (v = 0; v < te; v += 1) ee[v].nodes?.a?.fix();
			}
			Di(e, ee, ne);
		}
	}
	a && ut(() => {
		if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
	});
}
function Ni(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? o & 16 ? bn(n) : /* @__PURE__ */ xn(n, !1, !1) : null, l = o & 2 ? bn(i) : null;
	return {
		v: c,
		i: l,
		e: nr(() => (a(t, c ?? n, l ?? i, s), () => {
			e.delete(r);
		}))
	};
}
function Pi(e, t, n) {
	if (e.nodes) for (var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n; r !== null;) {
		var o = /* @__PURE__ */ Ln(r);
		if (a.before(r), r === i) return;
		r = o;
	}
}
function Fi(e, t, n) {
	t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ii(e, n, r = !1, o = !1, s = !1, c = !1) {
	var l = e, u = "";
	if (r) {
		var d = e;
		w && (l = We(/* @__PURE__ */ In(d)));
	}
	F(() => {
		var e = xr;
		if (u === (u = n() ?? "")) {
			w && Ge();
			return;
		}
		if (r && !w) {
			e.nodes = null, d.innerHTML = u, u !== "" && ii(/* @__PURE__ */ In(d), d.lastChild);
			return;
		}
		if (e.nodes !== null && (sr(e.nodes.start, e.nodes.end), e.nodes = null), u !== "") {
			if (w) {
				for (var c = Ue.data, f = Ge(), p = f; f !== null && (f.nodeType !== 8 || f.data !== "");) p = f, f = /* @__PURE__ */ Ln(f);
				if (f === null) throw ze(), t;
				ii(Ue, p), l = We(f);
				return;
			}
			var m = Vn(o ? "svg" : s ? "math" : "template", o ? i : s ? a : void 0);
			m.innerHTML = u;
			var h = o || s ? m : m.content;
			if (ii(/* @__PURE__ */ In(h), h.lastChild), o || s) for (; /* @__PURE__ */ In(h);) l.before(/* @__PURE__ */ In(h));
			else l.before(h);
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function Li(e, t, n) {
	var r;
	w && (r = Ue, Ge());
	var i = new gi(e);
	tr(() => {
		var e = t() ?? null;
		if (w && Je(r) === "[" != (e !== null)) {
			var a = qe();
			We(a), i.anchor = a, He(!1), i.ensure(e, e && ((t) => n(t, e))), He(!0);
			return;
		}
		i.ensure(e, e && ((t) => n(t, e)));
	}, se);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/svelte-head.js
function Ri(e, t) {
	let n = null, r = w;
	var i;
	if (w) {
		n = Ue;
		for (var a = /* @__PURE__ */ In(document.head); a !== null && (a.nodeType !== 8 || a.data !== e);) a = /* @__PURE__ */ Ln(a);
		if (a === null) He(!1);
		else {
			var o = /* @__PURE__ */ Ln(a);
			a.remove(), We(o);
		}
	}
	w || (i = document.head.appendChild(Fn()));
	try {
		tr(() => {
			var e = nr(() => t(i));
			e.f |= ce;
		});
	} finally {
		r && (He(!0), We(n));
	}
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function zi(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = zi(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function Bi() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = zi(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function Vi(e) {
	return typeof e == "object" ? Bi(e) : e ?? "";
}
var Hi = [..." 	\n\r\f\xA0\v﻿"];
function Ui(e, t, n) {
	var r = e == null ? "" : "" + e;
	if (t && (r = r ? r + " " + t : t), n) {
		for (var i of Object.keys(n)) if (n[i]) r = r ? r + " " + i : i;
		else if (r.length) for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
			var s = o + a;
			(o === 0 || Hi.includes(r[o - 1])) && (s === r.length || Hi.includes(r[s])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(s + 1) : o = s;
		}
	}
	return r === "" ? null : r;
}
function Wi(e, t = !1) {
	var n = t ? " !important;" : ";", r = "";
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== "" && (r += " " + i + ": " + a + n);
	}
	return r;
}
function Gi(e) {
	return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ki(e, t) {
	if (t) {
		var n = "", r, i;
		if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
			e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
			var a = !1, o = 0, s = !1, c = [];
			r && c.push(...Object.keys(r).map(Gi)), i && c.push(...Object.keys(i).map(Gi));
			var l = 0, u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (s ? f === "/" && e[d - 1] === "*" && (s = !1) : a ? a === f && (a = !1) : f === "/" && e[d + 1] === "*" ? s = !0 : f === "\"" || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !s && a === !1 && o === 0) {
					if (f === ":" && u === -1) u = d;
					else if (f === ";" || d === t - 1) {
						if (u !== -1) {
							var p = Gi(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== ";" && d++;
								var m = e.substring(l, d).trim();
								n += " " + m + ";";
							}
						}
						l = d + 1, u = -1;
					}
				}
			}
		}
		return r && (n += Wi(r)), i && (n += Wi(i, !0)), n = n.trim(), n === "" ? null : n;
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function qi(e, t, n, r, i, a) {
	var o = e[be];
	if (w || o !== n || o === void 0) {
		var s = Ui(n, r, a);
		(!w || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s)), e[be] = n;
	} else if (a && i !== a) for (var c in a) {
		var l = !!a[c];
		(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
	}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Ji(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Yi(e, t, n, r) {
	var i = e[xe];
	if (w || i !== t) {
		var a = Ki(t, r);
		(!w || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e[xe] = t;
	} else r && (Array.isArray(r) ? (Ji(e, n?.[0], r[0]), Ji(e, n?.[1], r[1], "important")) : Ji(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function Xi(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!o(t)) return Be();
		for (var r of e.options) r.selected = t.includes($i(r));
		return;
	}
	for (r of e.options) if (On($i(r), t)) {
		r.selected = !0;
		return;
	}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function Zi(e) {
	var t = new MutationObserver(() => {
		"__value" in e && Xi(e, e.__value);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["value"]
	}), qn(() => {
		t.disconnect();
	});
}
function Qi(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet(), i = !0;
	Nt(e, "change", (t) => {
		var i = t ? "[selected]" : ":checked", a;
		if (e.multiple) a = [].map.call(e.querySelectorAll(i), $i);
		else {
			var o = e.querySelector(i) ?? e.querySelector("option:not([disabled])");
			a = o && $i(o);
		}
		n(a), e.__value = a, A !== null && r.add(A);
	}), Qn(() => {
		var a = t();
		if (e === document.activeElement) {
			var o = A;
			if (r.has(o)) return;
		}
		if (Xi(e, a, i), i && a === void 0) {
			var s = e.querySelector(":checked");
			s !== null && (a = $i(s), n(a));
		}
		e.__value = a, i = !1;
	}), Zi(e);
}
function $i(e) {
	return "__value" in e ? e.__value : e.value;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/attributes.js
var ea = Symbol("is custom element"), ta = Symbol("is html"), na = Te ? "link" : "LINK";
function ra(e) {
	if (w) {
		var t = !1, n = () => {
			if (!t) {
				if (t = !0, e.hasAttribute("value")) {
					var n = e.value;
					B(e, "value", null), e.value = n;
				}
				if (e.hasAttribute("checked")) {
					var r = e.checked;
					B(e, "checked", null), e.checked = r;
				}
			}
		};
		e[Ce] = n, ut(n), jt();
	}
}
function B(e, t, n, r) {
	var i = aa(e);
	w && (i[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === na) || i[t] !== (i[t] = n) && (t === "loading" && (e[ve] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && sa(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ia(e, t, n) {
	var r = vr, i = xr;
	let a = w;
	w && He(!1), br(null), Sr(null);
	try {
		t !== "style" && (oa.has(e.getAttribute("is") || e.nodeName) || !customElements || customElements.get(e.getAttribute("is") || e.nodeName.toLowerCase()) ? sa(e).includes(t) : n && typeof n == "object") ? e[t] = n : B(e, t, n == null ? n : String(n));
	} finally {
		br(r), Sr(i), a && He(!0);
	}
}
function aa(e) {
	return e[ye] ??= {
		[ea]: e.nodeName.includes("-"),
		[ta]: e.namespaceURI === r
	};
}
var oa = /* @__PURE__ */ new Map();
function sa(e) {
	var t = e.getAttribute("is") || e.nodeName, n = oa.get(t);
	if (n) return n;
	oa.set(t, n = []);
	for (var r, i = e, a = Element.prototype; a !== i;) {
		for (var o in r = f(i), r) r[o].set && o !== "innerHTML" && o !== "textContent" && o !== "innerText" && n.push(o);
		i = h(i);
	}
	return n;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function ca(e, t, n = t) {
	var r = /* @__PURE__ */ new WeakSet();
	Nt(e, "input", async (i) => {
		var a = i ? e.defaultValue : e.value;
		if (a = la(e) ? ua(a) : a, n(a), A !== null && r.add(A), await Br(), a !== (a = t())) {
			var o = e.selectionStart, s = e.selectionEnd, c = e.value.length;
			if (e.value = a ?? "", s !== null) {
				var l = e.value.length;
				o === s && s === c && l > c ? (e.selectionStart = l, e.selectionEnd = l) : (e.selectionStart = o, e.selectionEnd = Math.min(s, l));
			}
		}
	}), (w && e.defaultValue !== e.value || Ur(t) == null && e.value) && (n(la(e) ? ua(e.value) : e.value), A !== null && r.add(A)), er(() => {
		var n = t();
		if (e === document.activeElement) {
			var i = A;
			if (r.has(i)) return;
		}
		la(e) && n === ua(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
	});
}
function la(e) {
	var t = e.type;
	return t === "number" || t === "range";
}
function ua(e) {
	return e === "" ? null : +e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function da(e, t) {
	return e === t || e?.[ge] === t;
}
function fa(e = {}, t, n, r) {
	var i = et.r, a = xr;
	return Qn(() => {
		var o, s;
		return er(() => {
			o = s, s = r?.() || [], Ur(() => {
				da(n(...s), e) || (t(e, ...s), o && da(n(...o), e) && t(null, ...o));
			});
		}), () => {
			let r = a;
			for (; r !== i && r.parent !== null && r.parent.f & 33554432;) r = r.parent;
			let o = () => {
				s && da(n(...s), e) && t(null, ...s);
			}, c = r.teardown;
			r.teardown = () => {
				o(), c?.();
			};
		};
	}), e;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/event-modifiers.js
function pa(e) {
	return function(...t) {
		return t[0].preventDefault(), e?.apply(this, t);
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/legacy/lifecycle.js
function ma(e = !1) {
	let t = et, n = t.l.u;
	if (!n) return;
	let r = () => Wr(t.s);
	if (e) {
		let e = 0, n = {}, i = /* @__PURE__ */ Ht(() => {
			let r = !1, i = t.s;
			for (let e in i) i[e] !== n[e] && (n[e] = i[e], r = !0);
			return r && e++, e;
		});
		r = () => I(i);
	}
	n.b.length && Xn(() => {
		ha(t, r), x(n.b);
	}), Jn(() => {
		let e = Ur(() => n.m.map(b));
		return () => {
			for (let t of e) typeof t == "function" && t();
		};
	}), n.a.length && Jn(() => {
		ha(t, r), x(n.a);
	});
}
function ha(e, t) {
	if (e.l.s) for (let t of e.l.s) I(t);
	t();
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/props.js
var ga = {
	get(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (_(r) && (r = r()), typeof r == "object" && r && t in r) return r[t];
		}
	},
	set(e, t, n) {
		let r = e.props.length;
		for (; r--;) {
			let i = e.props[r];
			_(i) && (i = i());
			let a = d(i, t);
			if (a && a.set) return a.set(n), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e.props.length;
		for (; n--;) {
			let r = e.props[n];
			if (_(r) && (r = r()), typeof r == "object" && r && t in r) {
				let e = d(r, t);
				return e && !e.configurable && (e.configurable = !0), e;
			}
		}
	},
	has(e, t) {
		if (t === ge || t === _e) return !1;
		for (let n of e.props) if (_(n) && (n = n()), n != null && t in n) return !0;
		return !1;
	},
	ownKeys(e) {
		let t = [];
		for (let n of e.props) if (_(n) && (n = n()), n) {
			for (let e in n) t.includes(e) || t.push(e);
			for (let e of Object.getOwnPropertySymbols(n)) t.includes(e) || t.push(e);
		}
		return t;
	}
};
function _a(...e) {
	return new Proxy({ props: e }, ga);
}
function V(e, t, n, r) {
	var i = !Qe || !!(n & 2), a = !!(n & 8), o = !!(n & 16), s = r, c = !0, l = void 0, u = () => o && i ? (l ??= /* @__PURE__ */ Ht(r), I(l)) : (c && (c = !1, s = o ? Ur(r) : r), s);
	let f;
	if (a) {
		var p = ge in e || _e in e;
		f = d(e, t)?.set ?? (p && t in e ? (n) => e[t] = n : void 0);
	}
	var m, h = !1;
	a ? [m, h] = Ot(() => e[t]) : m = e[t], m === void 0 && r !== void 0 && (m = u(), f && (i && Ne(t), f(m)));
	var g = i ? () => {
		var n = e[t];
		return n === void 0 ? u() : (c = !0, n);
	} : () => {
		var n = e[t];
		return n !== void 0 && (s = void 0), n === void 0 ? s : n;
	};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return (function(e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		});
	}
	var v = !1, y = (n & 1 ? Ht : Kt)(() => (v = !1, g()));
	a && I(y);
	var b = xr;
	return (function(e, t) {
		if (arguments.length > 0) {
			let n = t ? I(y) : i && a ? En(e) : e;
			return M(y, n), v = !0, s !== void 0 && (s = n), e;
		}
		return gr && v || b.f & 16384 ? y.v : I(y);
	});
}
//#endregion
//#region node_modules/svelte/src/internal/flags/legacy.js
$e();
//#endregion
//#region node_modules/lexical/Lexical.prod.mjs
function H(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function va(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	n.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var ya = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, ba = ya && "documentMode" in document ? document.documentMode : null, xa = ya && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Sa = ya && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Ca = !(!ya || !("InputEvent" in window) || ba) && "getTargetRanges" in new window.InputEvent("input"), wa = ya && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Ta = ya && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ea = ya && /Android/.test(navigator.userAgent), Da = ya && /^(?=.*Chrome).*/i.test(navigator.userAgent), Oa = ya && Ea && Da, ka = ya && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && xa && !Da, Aa = 0, ja = 1, Ma = 2, Na = 1, Pa = 2, Fa = 3, Ia = 4, La = 5, Ra = 6, za = wa || Ta || ka ? "\xA0" : "​", Ba = "\n\n", Va = Sa ? "\xA0" : za, Ha = /* @__PURE__ */ RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]"), Ua = /* @__PURE__ */ RegExp("^[^֑-߿יִ-﷽ﹰ-ﻼ]*[A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿]"), Wa = {
	bold: 1,
	capitalize: 1024,
	code: 16,
	highlight: 128,
	italic: 2,
	lowercase: 256,
	strikethrough: 4,
	subscript: 32,
	superscript: 64,
	underline: 8,
	uppercase: 512
}, Ga = {
	directionless: 1,
	unmergeable: 2
}, Ka = {
	center: 2,
	end: 6,
	justify: 4,
	left: 1,
	right: 3,
	start: 5
}, qa = {
	[Pa]: "center",
	[Ra]: "end",
	[Ia]: "justify",
	[Na]: "left",
	[Fa]: "right",
	[La]: "start"
}, Ja = {
	normal: 0,
	segmented: 2,
	token: 1
}, Ya = {
	[Aa]: "normal",
	[Ma]: "segmented",
	[ja]: "token"
}, Xa = "$config";
function Za(e, t, n, r, i, a) {
	let o = e.getFirstChild();
	for (; o !== null;) {
		let e = o.__key;
		o.__parent === t && (q(o) && Za(o, e, n, r, i, a), n.has(e) || a.delete(e), i.push(e)), o = o.getNextSibling();
	}
}
var Qa = !1, $a = 0;
function eo(e) {
	$a = e.timeStamp;
}
function to(e, t, n) {
	let r = e.nodeName === "BR", i = t.__lexicalLineBreak;
	return i && (e === i || r && e.previousSibling === i) || r && fd(e, n) !== void 0;
}
function no(e, t, n) {
	let r = rf(qd(n)), i = null, a = null;
	r !== null && r.anchorNode === e && (i = r.anchorOffset, a = r.focusOffset);
	let o = e.nodeValue;
	o !== null && Td(t, o, i, a, !1);
}
function ro(e, t, n) {
	if (G(e)) {
		let t = e.anchor.getNode();
		if (t.is(n) && e.format !== t.getFormat()) return !1;
	}
	return ed(t) && n.isAttached();
}
function io(e, t, n, r) {
	for (let i = e; i && !xf(i); i = Vd(i)) {
		let e = fd(i, t);
		if (e !== void 0) {
			let t = ud(e, n);
			if (t) return wu(t) || !sf(i) ? void 0 : [i, t];
		} else if (i === r) return [r, _d(n)];
	}
}
function ao(e, t, n) {
	Qa = !0;
	let r = performance.now() - $a > 100;
	try {
		vu(e, () => {
			let i = K() || function(e) {
				return e.getEditorState().read(() => {
					let e = K();
					return e === null ? null : e.clone();
				});
			}(e), a = /* @__PURE__ */ new Map(), o = e.getRootElement(), s = e._editorState, c = e._blockCursorElement, l = !1, u = "";
			for (let n = 0; n < t.length; n++) {
				let d = t[n], f = d.type, p = d.target, m = io(p, e, s, o);
				if (!m) continue;
				let [h, g] = m;
				if (f === "characterData") r && W(g) && ed(p) && ro(i, p, g) && no(p, g, e);
				else if (f === "childList") {
					l = !0;
					let t = d.addedNodes;
					for (let n = 0; n < t.length; n++) {
						let r = t[n], i = dd(r), a = r.parentNode;
						if (a != null && r !== c && i === null && !to(r, a, e)) {
							if (Sa) {
								let e = (sf(r) ? r.innerText : null) || r.nodeValue;
								e && (u += e);
							}
							a.removeChild(r);
						}
					}
					let n = d.removedNodes, r = n.length;
					if (r > 0) {
						let t = 0;
						for (let i = 0; i < r; i++) {
							let r = n[i];
							(to(r, p, e) || c === r) && (p.appendChild(r), t++);
						}
						r !== t && a.set(h, g);
					}
				}
			}
			if (a.size > 0) for (let [t, n] of a) n.reconcileObservedMutation(t, e);
			let d = n.takeRecords();
			if (d.length > 0) {
				for (let t = 0; t < d.length; t++) {
					let n = d[t], r = n.addedNodes, i = n.target;
					for (let t = 0; t < r.length; t++) {
						let n = r[t], a = n.parentNode;
						a == null || n.nodeName !== "BR" || to(n, i, e) || a.removeChild(n);
					}
				}
				n.takeRecords();
			}
			i !== null && (l && vd(i), Sa && zd(e) && i.insertRawText(u));
		});
	} finally {
		Qa = !1;
	}
}
function oo(e) {
	let t = e._observer;
	t !== null && ao(e, t.takeRecords(), t);
}
function so(e) {
	(function(e) {
		$a === 0 && qd(e).addEventListener("textInput", eo, !0);
	})(e), e._observer = new MutationObserver((t, n) => {
		ao(e, t, n);
	});
}
var co = class {
	key;
	parse;
	unparse;
	isEqual;
	defaultValue;
	constructor(e, t) {
		this.key = e, this.parse = t.parse.bind(t), this.unparse = (t.unparse || vo).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0);
	}
};
function lo(e, t) {
	return new co(e, t);
}
function uo(e, t, n = "latest") {
	let r = (n === "latest" ? e.getLatest() : e).__state;
	return r ? r.getValue(t) : t.defaultValue;
}
function fo(e, t, n) {
	let r;
	if (nu(), typeof n == "function") {
		let i = e.getLatest(), a = uo(i, t);
		if (r = n(a), t.isEqual(a, r)) return i;
	} else r = n;
	let i = e.getWritable();
	return ho(i).updateFromKnown(t, r), i;
}
function po(e) {
	let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
	for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
		let { ownNodeConfig: e } = Cf(r);
		if (e && e.stateConfigs) for (let r of e.stateConfigs) {
			let e;
			"stateConfig" in r ? (e = r.stateConfig, r.flat && n.add(e.key)) : e = r, t.set(e.key, e);
		}
	}
	return {
		flatKeys: n,
		sharedConfigMap: t
	};
}
var mo = class e {
	node;
	knownState;
	unknownState;
	sharedNodeState;
	size;
	constructor(e, t, n = void 0, r = /* @__PURE__ */ new Map(), i = void 0) {
		this.node = e, this.sharedNodeState = t, this.unknownState = n, this.knownState = r;
		let { sharedConfigMap: a } = this.sharedNodeState, o = i === void 0 ? function(e, t, n) {
			let r = n.size;
			if (t) for (let i in t) {
				let t = e.get(i);
				t && n.has(t) || r++;
			}
			return r;
		}(a, n, r) : i;
		this.size = o;
	}
	getValue(e) {
		let t = this.knownState.get(e);
		if (t !== void 0) return t;
		this.sharedNodeState.sharedConfigMap.set(e.key, e);
		let n = e.defaultValue;
		if (this.unknownState && e.key in this.unknownState) {
			let t = this.unknownState[e.key];
			t !== void 0 && (n = e.parse(t)), this.updateFromKnown(e, n);
		}
		return n;
	}
	getInternalState() {
		return [this.unknownState, this.knownState];
	}
	toJSON() {
		let e = { ...this.unknownState }, t = {};
		for (let [t, n] of this.knownState) t.isEqual(n, t.defaultValue) ? delete e[t.key] : e[t.key] = t.unparse(n);
		for (let n of this.sharedNodeState.flatKeys) n in e && (t[n] = e[n], delete e[n]);
		return _o(e) && (t.$ = e), t;
	}
	getWritable(t) {
		if (this.node === t) return this;
		let { sharedNodeState: n, unknownState: r } = this, i = new Map(this.knownState);
		return new e(t, n, function(e, t, n) {
			let r;
			if (n) for (let [i, a] of Object.entries(n)) {
				let n = e.get(i);
				n ? t.has(n) || t.set(n, n.parse(a)) : (r ||= {}, r[i] = a);
			}
			return r;
		}(n.sharedConfigMap, i, r), i, this.size);
	}
	updateFromKnown(e, t) {
		let n = e.key;
		this.sharedNodeState.sharedConfigMap.set(n, e);
		let { knownState: r, unknownState: i } = this;
		r.has(e) || i && n in i || (i && (delete i[n], this.unknownState = _o(i)), this.size++), r.set(e, t);
	}
	updateFromUnknown(e, t) {
		let n = this.sharedNodeState.sharedConfigMap.get(e);
		n ? this.updateFromKnown(n, n.parse(t)) : (this.unknownState = this.unknownState || {}, e in this.unknownState || this.size++, this.unknownState[e] = t);
	}
	updateFromJSON(e) {
		let { knownState: t } = this;
		for (let e of t.keys()) t.set(e, e.defaultValue);
		if (this.size = t.size, this.unknownState = void 0, e) for (let [t, n] of Object.entries(e)) this.updateFromUnknown(t, n);
	}
};
function ho(e) {
	let t = e.getWritable(), n = t.__state ? t.__state.getWritable(t) : new mo(t, go(t));
	return t.__state = n, n;
}
function go(e) {
	return e.__state ? e.__state.sharedNodeState : Hu(pf(), e.getType()).sharedNodeState;
}
function _o(e) {
	if (e) for (let t in e) return e;
}
function vo(e) {
	return e;
}
function yo(e, t, n) {
	for (let [r, i] of t.knownState) {
		if (e.has(r.key)) continue;
		e.add(r.key);
		let t = n ? n.getValue(r) : r.defaultValue;
		if (t !== i && !r.isEqual(t, i)) return !0;
	}
	return !1;
}
function bo(e, t, n) {
	let { unknownState: r } = t, i = n ? n.unknownState : void 0;
	if (r) {
		for (let [t, n] of Object.entries(r)) if (!e.has(t) && (e.add(t), n !== (i ? i[t] : void 0))) return !0;
	}
	return !1;
}
function xo(e, t) {
	let n = e.__state;
	return n && n.node === e ? n.getWritable(t) : n;
}
function So(e, t) {
	let n = e.__mode, r = e.__format, i = e.__style, a = t.__mode, o = t.__format, s = t.__style, c = e.__state, l = t.__state;
	return (n === null || n === a) && (r === null || r === o) && (i === null || i === s) && (e.__state === null || c === l || function(e, t) {
		if (e === t) return !0;
		if (e && t && e.size !== t.size) return !1;
		let n = /* @__PURE__ */ new Set();
		return !(e && yo(n, e, t) || t && yo(n, t, e) || e && bo(n, e, t) || t && bo(n, t, e));
	}(c, l));
}
function Co(e, t) {
	let n = e.mergeWithSibling(t), r = au()._normalizedNodes;
	return r.add(e.__key), r.add(t.__key), n;
}
function wo(e) {
	let t, n, r = e;
	if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
		for (; (t = r.getPreviousSibling()) !== null && W(t) && t.isSimpleText() && !t.isUnmergeable();) {
			if (t.__text !== "") {
				if (So(t, r)) {
					r = Co(t, r);
					break;
				}
				break;
			}
			t.remove();
		}
		for (; (n = r.getNextSibling()) !== null && W(n) && n.isSimpleText() && !n.isUnmergeable();) {
			if (n.__text !== "") {
				if (So(r, n)) {
					r = Co(r, n);
					break;
				}
				break;
			}
			n.remove();
		}
	} else r.remove();
}
function To(e) {
	return Eo(e.anchor), Eo(e.focus), e;
}
function Eo(e) {
	for (; e.type === "element";) {
		let t = e.getNode(), n = e.offset, r, i;
		if (n === t.getChildrenSize() ? (r = t.getChildAtIndex(n - 1), i = !0) : (r = t.getChildAtIndex(n), i = !1), W(r)) {
			e.set(r.__key, i ? r.getTextContentSize() : 0, "text", !0);
			break;
		}
		if (!q(r)) break;
		e.set(r.__key, i ? r.getChildrenSize() : 0, "element", !0);
	}
}
var Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo = "", Ro = null, zo = null, Bo = !1, Vo = !1;
function Ho(e, t) {
	let n = No.get(e);
	if (t !== null) {
		let n = os(e);
		n.parentNode === t && t.removeChild(n);
	}
	if (Po.has(e) || Oo._keyToDOMMap.delete(e), q(n)) {
		let e = es(n, No);
		Uo(e, 0, e.length - 1, null);
	}
	n !== void 0 && Id(Io, ko, Ao, n, "destroyed");
}
function Uo(e, t, n, r) {
	for (let i = t; i <= n; ++i) {
		let t = e[i];
		t !== void 0 && Ho(t, r);
	}
}
function Wo(e, t) {
	e.setProperty("text-align", t);
}
var Go = "40px";
function Ko(e, t) {
	let n = Do.theme.indent;
	if (typeof n == "string") {
		let r = e.classList.contains(n);
		t > 0 && !r ? e.classList.add(n) : t < 1 && r && e.classList.remove(n);
	}
	let r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || Go;
	e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${r})`);
}
function qo(e, t) {
	let n = e.style;
	t === 0 ? Wo(n, "") : t === 1 ? Wo(n, "left") : t === 2 ? Wo(n, "center") : t === 3 ? Wo(n, "right") : t === 4 ? Wo(n, "justify") : t === 5 ? Wo(n, "start") : t === 6 && Wo(n, "end");
}
function Jo(e, t) {
	let n = function(e) {
		let t = e.__dir;
		if (t !== null) return t;
		if (Eu(e)) return null;
		let n = e.getParentOrThrow();
		return Eu(n) && n.__dir === null ? "auto" : null;
	}(t);
	n === null ? e.removeAttribute("dir") : e.dir = n;
}
function Yo(e, t) {
	let n = Po.get(e);
	n === void 0 && H(60);
	let r = n.createDOM(Do, Oo);
	if (function(e, t, n) {
		let r = n._keyToDOMMap;
		(function(e, t, n) {
			let r = `__lexicalKey_${t._key}`;
			e[r] = n;
		})(t, n, e), r.set(e, t);
	}(e, r, Oo), W(n) ? r.setAttribute("data-lexical-text", "true") : wu(n) && r.setAttribute("data-lexical-decorator", "true"), q(n)) {
		let e = n.__indent, t = n.__size;
		if (Jo(r, n), e !== 0 && Ko(r, e), t !== 0) {
			let e = t - 1;
			Xo(es(n, Po), n, 0, e, n.getDOMSlot(r));
		}
		let i = n.__format;
		i !== 0 && qo(r, i), n.isInline() || Qo(null, n, r);
	} else {
		let t = n.getTextContent();
		if (wu(n)) {
			let t = n.decorate(Oo, Do);
			t !== null && ns(e, t), r.contentEditable = "false";
		}
		Lo += t;
	}
	return t !== null && t.insertChild(r), Id(Io, ko, Ao, n, "created"), r;
}
function Xo(e, t, n, r, i) {
	let a = Lo;
	Lo = "";
	let o = n;
	for (; o <= r; ++o) {
		Yo(e[o], i);
		let t = Po.get(e[o]);
		t !== null && W(t) ? Ro === null && (Ro = t.getFormat(), zo = t.getStyle()) : q(t) && o < r && !t.isInline() && (Lo += Ba);
	}
	i.element.__lexicalTextContent = Lo, Lo = a + Lo;
}
function Zo(e, t) {
	if (e) {
		let n = e.__last;
		if (n) {
			let e = t.get(n);
			if (e) return Jc(e) ? "line-break" : wu(e) && e.isInline() ? "decorator" : null;
		}
		return "empty";
	}
	return null;
}
function Qo(e, t, n) {
	let r = Zo(e, No), i = Zo(t, Po);
	r !== i && t.getDOMSlot(n).setManagedLineBreak(i);
}
function $o(e, t, n) {
	var r;
	Ro = null, zo = null, function(e, t, n) {
		let r = Lo, i = e.__size, a = t.__size;
		Lo = "";
		let o = n.element;
		if (i === 1 && a === 1) {
			let n = e.__first, r = t.__first;
			if (n === r) ts(n, o);
			else {
				let e = os(n), t = Yo(r, null);
				try {
					o.replaceChild(t, e);
				} catch (i) {
					if (typeof i == "object" && i) {
						let a = `${i.toString()} Parent: ${o.tagName}, new child: {tag: ${t.tagName} key: ${r}}, old child: {tag: ${e.tagName}, key: ${n}}.`;
						throw Error(a);
					}
					throw i;
				}
				Ho(n, null);
			}
			let i = Po.get(r);
			W(i) && Ro === null && (Ro = i.getFormat(), zo = i.getStyle());
		} else {
			let r = es(e, No), s = es(t, Po);
			if (r.length !== i && H(227), s.length !== a && H(228), i === 0) a !== 0 && Xo(s, 0, 0, a - 1, n);
			else if (a === 0) {
				if (i !== 0) {
					let e = n.after == null && n.before == null && n.element.__lexicalLineBreak == null;
					Uo(r, 0, i - 1, e ? null : o), e && (o.textContent = "");
				}
			} else (function(e, t, n, r, i, a) {
				let o = r - 1, s = i - 1, c, l, u = a.getFirstChild(), d = 0, f = 0;
				for (; d <= o && f <= s;) {
					let e = t[d], r = n[f];
					if (e === r) u = rs(ts(r, a.element)), d++, f++;
					else {
						if (l === void 0 && (l = is(n, f)), c === void 0) c = is(t, d);
						else if (!c.has(e)) {
							d++;
							continue;
						}
						if (!l.has(e)) {
							u = rs(os(e)), Ho(e, a.element), d++, c.delete(e);
							continue;
						}
						if (c.has(r)) {
							let e = Bd(Oo, r);
							e !== u && a.withBefore(u).insertChild(e), u = rs(ts(r, a.element)), d++, f++;
						} else Yo(r, a.withBefore(u)), f++;
					}
					let i = Po.get(r);
					i !== null && W(i) ? Ro === null && (Ro = i.getFormat(), zo = i.getStyle()) : q(i) && f <= s && !i.isInline() && (Lo += Ba);
				}
				let p = d > o, m = f > s;
				if (p && !m) {
					let e = n[s + 1], t = e === void 0 ? null : Oo.getElementByKey(e);
					Xo(n, 0, f, s, a.withBefore(t));
				} else m && !p && Uo(t, d, o, a.element);
			})(0, r, s, i, a, n);
		}
		o.__lexicalTextContent = Lo, Lo = r + Lo;
	}(e, t, t.getDOMSlot(n)), r = t, Ro == null || Ro === r.__textFormat || Vo || r.setTextFormat(Ro), function(e) {
		zo == null || zo === e.__textStyle || Vo || e.setTextStyle(zo);
	}(t);
}
function es(e, t) {
	let n = [], r = e.__first;
	for (; r !== null;) {
		let e = t.get(r);
		e === void 0 && H(101), n.push(r), r = e.__next;
	}
	return n;
}
function ts(e, t) {
	let n = No.get(e), r = Po.get(e);
	n !== void 0 && r !== void 0 || H(61);
	let i = Bo || Mo.has(e) || jo.has(e), a = Bd(Oo, e);
	if (n === r && !i) {
		let e;
		if (q(n)) {
			let t = a.__lexicalTextContent;
			typeof t == "string" ? e = t : (e = n.getTextContent(), a.__lexicalTextContent = e);
		} else e = n.getTextContent();
		return Lo += e, a;
	}
	if (n !== r && i && Id(Io, ko, Ao, r, "updated"), r.updateDOM(n, a, Do)) {
		let n = Yo(e, null);
		return t === null && H(62), t.replaceChild(n, a), Ho(e, null), n;
	}
	if (q(n)) {
		q(r) || H(334, e);
		let t = r.__indent;
		(Bo || t !== n.__indent) && Ko(a, t);
		let o = r.__format;
		if ((Bo || o !== n.__format) && qo(a, o), i) $o(n, r, a), Eu(r) || r.isInline() || Qo(n, r, a);
		else {
			let e = a.__lexicalTextContent, t;
			typeof e == "string" ? t = e : (t = n.getTextContent(), a.__lexicalTextContent = t), Lo += t;
		}
		if ((Bo || r.__dir !== n.__dir) && (Jo(a, r), Eu(r) && !Bo)) for (let e of r.getChildren()) q(e) && Jo(Bd(Oo, e.getKey()), e);
	} else {
		let t = r.getTextContent();
		if (wu(r)) {
			let t = r.decorate(Oo, Do);
			t !== null && ns(e, t);
		}
		Lo += t;
	}
	if (!Vo && Eu(r) && r.__cachedText !== Lo) {
		let e = r.getWritable();
		e.__cachedText = Lo, r = e;
	}
	return a;
}
function ns(e, t) {
	let n = Oo._pendingDecorators, r = Oo._decorators;
	if (n === null) {
		if (r[e] === t) return;
		n = md(Oo);
	}
	n[e] = t;
}
function rs(e) {
	let t = e.nextSibling;
	return t !== null && t === Oo._blockCursorElement && (t = t.nextSibling), t;
}
function is(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let r = t; r < e.length; r++) n.add(e[r]);
	return n;
}
function as(e, t, n, r, i, a) {
	Lo = "", Bo = r === 2, Oo = n, Do = n._config, ko = n._nodes, Ao = Oo._listeners.mutation, jo = i, Mo = a, No = e._nodeMap, Po = t._nodeMap, Vo = t._readOnly, Fo = new Map(n._keyToDOMMap);
	let o = /* @__PURE__ */ new Map();
	return Io = o, ts("root", null), Oo = void 0, ko = void 0, jo = void 0, Mo = void 0, No = void 0, Po = void 0, Do = void 0, Fo = void 0, Io = void 0, o;
}
function os(e) {
	let t = Fo.get(e);
	return t === void 0 && H(75, e), t;
}
function U(e) {
	return { type: e };
}
var ss = U("SELECTION_CHANGE_COMMAND"), cs = U("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), ls = U("CLICK_COMMAND"), us = U("BEFORE_INPUT_COMMAND"), ds = U("INPUT_COMMAND"), fs = U("COMPOSITION_START_COMMAND"), ps = U("COMPOSITION_END_COMMAND"), ms = U("DELETE_CHARACTER_COMMAND"), hs = U("INSERT_LINE_BREAK_COMMAND"), gs = U("INSERT_PARAGRAPH_COMMAND"), _s = U("CONTROLLED_TEXT_INSERTION_COMMAND"), vs = U("PASTE_COMMAND"), ys = U("REMOVE_TEXT_COMMAND"), bs = U("DELETE_WORD_COMMAND"), xs = U("DELETE_LINE_COMMAND"), Ss = U("FORMAT_TEXT_COMMAND"), Cs = U("UNDO_COMMAND"), ws = U("REDO_COMMAND"), Ts = U("KEYDOWN_COMMAND"), Es = U("KEY_ARROW_RIGHT_COMMAND"), Ds = U("MOVE_TO_END"), Os = U("KEY_ARROW_LEFT_COMMAND"), ks = U("MOVE_TO_START"), As = U("KEY_ARROW_UP_COMMAND"), js = U("KEY_ARROW_DOWN_COMMAND"), Ms = U("KEY_ENTER_COMMAND"), Ns = U("KEY_SPACE_COMMAND"), Ps = U("KEY_BACKSPACE_COMMAND"), Fs = U("KEY_ESCAPE_COMMAND"), Is = U("KEY_DELETE_COMMAND"), Ls = U("KEY_TAB_COMMAND"), Rs = U("INSERT_TAB_COMMAND"), zs = U("INDENT_CONTENT_COMMAND"), Bs = U("OUTDENT_CONTENT_COMMAND"), Vs = U("DROP_COMMAND"), Hs = U("FORMAT_ELEMENT_COMMAND"), Us = U("DRAGSTART_COMMAND"), Ws = U("DRAGOVER_COMMAND"), Gs = U("DRAGEND_COMMAND"), Ks = U("COPY_COMMAND"), qs = U("CUT_COMMAND"), Js = U("SELECT_ALL_COMMAND"), Ys = U("CLEAR_EDITOR_COMMAND"), Xs = U("CLEAR_HISTORY_COMMAND"), Zs = U("CAN_REDO_COMMAND"), Qs = U("CAN_UNDO_COMMAND"), $s = U("FOCUS_COMMAND"), ec = U("BLUR_COMMAND"), tc = U("KEY_MODIFIER_COMMAND"), nc = Object.freeze({}), rc = [
	["keydown", function(e, t) {
		ic = e.timeStamp, ac = e.key, !t.isComposing() && Y(t, Ts, e);
	}],
	["pointerdown", function(e, t) {
		let n = e.target, r = e.pointerType;
		cf(n) && r !== "touch" && r !== "pen" && e.button === 0 && vu(t, () => {
			Gu(n) || (dc = !0);
		});
	}],
	["compositionstart", function(e, t) {
		Y(t, fs, e);
	}],
	["compositionend", function(e, t) {
		Sa ? pc = !0 : Ta || !wa && !ka ? Y(t, ps, e) : (mc = !0, hc = e.data);
	}],
	["input", function(e, t) {
		e.stopPropagation(), vu(t, () => {
			t.dispatchCommand(ds, e);
		}, { event: e }), sc = null;
	}],
	["click", function(e, t) {
		vu(t, () => {
			let n = K(), r = rf(qd(t)), i = Rl();
			if (r) {
				if (G(n)) {
					let t = n.anchor, a = t.getNode();
					if (t.type === "element" && t.offset === 0 && n.isCollapsed() && !Eu(a) && gd().getChildrenSize() === 1 && a.getTopLevelElementOrThrow().isEmpty() && i !== null && n.is(i)) r.removeAllRanges(), n.dirty = !0;
					else if (e.detail === 3 && !n.isCollapsed() && a !== n.focus.getNode()) {
						let e = X(a, (e) => q(e) && !e.isInline());
						q(e) && e.select(0);
					}
				} else if (e.pointerType === "touch" || e.pointerType === "pen") {
					let n = r.anchorNode;
					(sf(n) || ed(n)) && vd(Ll(i, r, t, e));
				}
			}
			Y(t, ls, e);
		});
	}],
	["cut", nc],
	["copy", nc],
	["dragstart", nc],
	["dragover", nc],
	["dragend", nc],
	["paste", nc],
	["focus", nc],
	["blur", nc],
	["drop", nc]
];
Ca && rc.push(["beforeinput", (e, t) => function(e, t) {
	let n = e.inputType;
	n === "deleteCompositionText" || Sa && zd(t) || n !== "insertCompositionText" && Y(t, us, e);
}(e, t)]);
var ic = 0, ac = null, oc = 0, sc = null, cc = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), uc = !1, dc = !1, fc = !1, pc = !1, mc = !1, hc = "", gc = null, _c = [
	0,
	"",
	0,
	"root",
	0
];
function vc(e, t, n, r, i) {
	let a = e.anchor, o = e.focus, s = a.getNode(), c = au(), l = rf(qd(c)), u = l === null ? null : l.anchorNode, d = a.key, f = c.getElementByKey(d), p = n.length;
	return d !== o.key || !W(s) || (!i && (!Ca || oc < r + 50) || s.isDirty() && p < 2 || bd(n)) && a.offset !== o.offset && !s.isComposing() || $u(s) || s.isDirty() && p > 1 || (i || !Ca) && f !== null && !s.isComposing() && u !== nd(f) || l !== null && t !== null && (!t.collapsed || t.startContainer !== l.anchorNode || t.startOffset !== l.anchorOffset) || s.getFormat() !== e.format || s.getStyle() !== e.style || function(e, t) {
		if (t.isSegmented()) return !0;
		if (!e.isCollapsed()) return !1;
		let n = e.anchor.offset, r = t.getParentOrThrow(), i = Qu(t);
		return n === 0 ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || i || function(e) {
			let t = e.getPreviousSibling();
			return (W(t) || q(t) && t.isInline()) && !t.canInsertTextAfter();
		}(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || i);
	}(e, s);
}
function yc(e, t) {
	return ed(e) && e.nodeValue !== null && t !== 0 && t !== e.nodeValue.length;
}
function bc(e, t, n) {
	let { anchorNode: r, anchorOffset: i, focusNode: a, focusOffset: o } = e;
	uc && (uc = !1, yc(r, i) && yc(a, o) && !gc) || vu(t, () => {
		if (!n) return void vd(null);
		if (!qu(t, r, a)) return;
		let s = K();
		if (gc && G(s) && s.isCollapsed()) {
			let e = s.anchor, t = gc.anchor;
			(e.key === t.key && e.offset === t.offset + 1 || e.offset === 1 && t.getNode().is(e.getNode().getPreviousSibling())) && (s = gc.clone(), vd(s));
		}
		if (gc = null, G(s)) {
			let n = s.anchor, r = n.getNode();
			if (s.isCollapsed()) {
				e.type === "Range" && e.anchorNode === e.focusNode && (s.dirty = !0);
				let i = qd(t).event, a = i ? i.timeStamp : performance.now(), [o, c, l, u, d] = _c, f = gd(), p = !1 === t.isComposing() && f.getTextContent() === "";
				if (a < d + 200 && n.offset === l && n.key === u) xc(s, o, c);
				else if (n.type === "text") W(r) || H(141), Sc(s, r);
				else if (n.type === "element" && !p) {
					q(r) || H(259);
					let e = n.getNode();
					e.isEmpty() ? function(e, t) {
						xc(e, t.getTextFormat(), t.getTextStyle());
					}(s, e) : xc(s, 0, "");
				}
			} else {
				let e = n.key, t = s.focus.key, r = s.getNodes(), a = r.length, c = s.isBackward(), l = c ? o : i, u = c ? i : o, d = c ? t : e, f = c ? e : t, p = 2047, m = !1;
				for (let e = 0; e < a; e++) {
					let t = r[e], n = t.getTextContentSize();
					if (W(t) && n !== 0 && !(e === 0 && t.__key === d && l === n || e === a - 1 && t.__key === f && u === 0) && (m = !0, p &= t.getFormat(), p === 0)) break;
				}
				s.format = m ? p : 0;
			}
		}
		Y(t, ss, void 0);
	});
}
function xc(e, t, n) {
	e.format === t && e.style === n || (e.format = t, e.style = n, e.dirty = !0);
}
function Sc(e, t) {
	xc(e, t.getFormat(), t.getStyle());
}
function Cc(e) {
	if (!e.getTargetRanges) return null;
	let t = e.getTargetRanges();
	return t.length === 0 ? null : t[0];
}
function wc(e) {
	let t = e.inputType, n = Cc(e), r = au(), i = K();
	if (t === "deleteContentBackward") {
		if (i === null) {
			let e = Rl();
			if (!G(e)) return !0;
			vd(e.clone());
		}
		if (G(i)) {
			let t = i.anchor.key === i.focus.key;
			if (a = e.timeStamp, ac === "MediaLast" && a < ic + 30 && r.isComposing() && t) {
				if (cd(null), ic = 0, setTimeout(() => {
					vu(r, () => {
						cd(null);
					});
				}, 30), G(i)) {
					let e = i.anchor.getNode();
					e.markDirty(), W(e) || H(142), Sc(i, e);
				}
			} else {
				cd(null), e.preventDefault();
				let n = i.anchor.getNode(), a = n.getTextContent(), o = n.canInsertTextAfter(), s = i.anchor.offset === 0 && i.focus.offset === a.length, c = Oa && t && !s && o;
				if (c && i.isCollapsed() && (c = !wu(Rd(i.anchor, !0))), !c) {
					Y(r, ms, !0);
					let e = K();
					Oa && G(e) && e.isCollapsed() && (gc = e, setTimeout(() => gc = null));
				}
			}
			return !0;
		}
	}
	var a;
	if (!G(i)) return !0;
	let o = e.data;
	sc !== null && wd(!1, r, sc), i.dirty && sc === null || !i.isCollapsed() || Eu(i.anchor.getNode()) || n === null || i.applyDOMRange(n), sc = null;
	let s = i.anchor, c = i.focus, l = s.getNode(), u = c.getNode();
	if (t === "insertText" || t === "insertTranspose") {
		if (o === "\n") e.preventDefault(), Y(r, hs, !1);
		else if (o === Ba) e.preventDefault(), Y(r, gs, void 0);
		else if (o == null && e.dataTransfer) {
			let t = e.dataTransfer.getData("text/plain");
			e.preventDefault(), i.insertRawText(t);
		} else o != null && vc(i, n, o, e.timeStamp, !0) ? (e.preventDefault(), Y(r, _s, o)) : sc = o;
		return oc = e.timeStamp, !0;
	}
	switch (e.preventDefault(), t) {
		case "insertFromYank":
		case "insertFromDrop":
		case "insertReplacementText":
			Y(r, _s, e);
			break;
		case "insertFromComposition":
			cd(null), Y(r, _s, e);
			break;
		case "insertLineBreak":
			cd(null), Y(r, hs, !1);
			break;
		case "insertParagraph":
			cd(null), fc && !Ta ? (fc = !1, Y(r, hs, !1)) : Y(r, gs, void 0);
			break;
		case "insertFromPaste":
		case "insertFromPasteAsQuotation":
			Y(r, vs, e);
			break;
		case "deleteByComposition":
			(function(e, t) {
				return e !== t || q(e) || q(t) || !Qu(e) || !Qu(t);
			})(l, u) && Y(r, ys, e);
			break;
		case "deleteByDrag":
		case "deleteByCut":
			Y(r, ys, e);
			break;
		case "deleteContent":
			Y(r, ms, !1);
			break;
		case "deleteWordBackward":
			Y(r, bs, !0);
			break;
		case "deleteWordForward":
			Y(r, bs, !1);
			break;
		case "deleteHardLineBackward":
		case "deleteSoftLineBackward":
			Y(r, xs, !0);
			break;
		case "deleteContentForward":
		case "deleteHardLineForward":
		case "deleteSoftLineForward":
			Y(r, xs, !1);
			break;
		case "formatStrikeThrough":
			Y(r, Ss, "strikethrough");
			break;
		case "formatBold":
			Y(r, Ss, "bold");
			break;
		case "formatItalic":
			Y(r, Ss, "italic");
			break;
		case "formatUnderline":
			Y(r, Ss, "underline");
			break;
		case "historyUndo":
			Y(r, Cs, void 0);
			break;
		case "historyRedo": Y(r, ws, void 0);
	}
	return !0;
}
function Tc(e) {
	if (sf(e.target) && Gu(e.target)) return !0;
	let t = au(), n = K(), r = e.data, i = Cc(e);
	if (r != null && G(n) && vc(n, i, r, e.timeStamp, !1)) {
		pc &&= (Oc(t, r), !1);
		let i = n.anchor.getNode(), a = rf(qd(t));
		if (a === null) return !0;
		let o = n.isBackward(), s = o ? n.anchor.offset : n.focus.offset, c = o ? n.focus.offset : n.anchor.offset;
		Ca && !n.isCollapsed() && W(i) && a.anchorNode !== null && i.getTextContent().slice(0, s) + r + i.getTextContent().slice(s + c) === Cd(a.anchorNode) || Y(t, _s, r);
		let l = r.length;
		Sa && l > 1 && e.inputType === "insertCompositionText" && !t.isComposing() && (n.anchor.offset -= l), wa || Ta || ka || !t.isComposing() || (ic = 0, cd(null));
	} else wd(!1, t, r === null ? void 0 : r), pc &&= (Oc(t, r || void 0), !1);
	return function() {
		nu(), oo(au());
	}(), !0;
}
function Ec(e) {
	let t = au(), n = K();
	if (G(n) && !t.isComposing()) {
		let r = n.anchor, i = n.anchor.getNode();
		cd(r.key), (e.timeStamp < ic + 30 || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || W(i) && i.getStyle() !== n.style) && Y(t, _s, Va);
	}
	return !0;
}
function Dc(e) {
	return Oc(au(), e.data), !0;
}
function Oc(e, t) {
	let n = e._compositionKey;
	if (cd(null), n !== null && t != null) {
		if (t === "") {
			let t = ud(n), r = nd(e.getElementByKey(n));
			r !== null && r.nodeValue !== null && W(t) && Td(t, r.nodeValue, null, null, !0);
			return;
		}
		if (t[t.length - 1] === "\n") {
			let t = K();
			if (G(t)) {
				let n = t.focus;
				t.anchor.set(n.key, n.offset, n.type), Y(e, Ms, null);
				return;
			}
		}
	}
	wd(!0, e, t);
}
function kc(e) {
	let t = au();
	if (e.key == null) return !0;
	if (mc && Md(e)) return vu(t, () => {
		Oc(t, hc);
	}), mc = !1, hc = "", !0;
	if (function(e) {
		return kd(e, "ArrowRight", { shiftKey: "any" });
	}(e)) Y(t, Es, e);
	else if (function(e) {
		return kd(e, "ArrowRight", Ad);
	}(e)) Y(t, Ds, e);
	else if (function(e) {
		return kd(e, "ArrowLeft", { shiftKey: "any" });
	}(e)) Y(t, Os, e);
	else if (function(e) {
		return kd(e, "ArrowLeft", Ad);
	}(e)) Y(t, ks, e);
	else if (function(e) {
		return kd(e, "ArrowUp", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) Y(t, As, e);
	else if (function(e) {
		return kd(e, "ArrowDown", {
			altKey: "any",
			shiftKey: "any"
		});
	}(e)) Y(t, js, e);
	else if (function(e) {
		return kd(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any",
			shiftKey: !0
		});
	}(e)) fc = !0, Y(t, Ms, e);
	else if (function(e) {
		return e.key === " ";
	}(e)) Y(t, Ns, e);
	else if (function(e) {
		return xa && kd(e, "o", { ctrlKey: !0 });
	}(e)) e.preventDefault(), fc = !0, Y(t, hs, !0);
	else if (function(e) {
		return kd(e, "Enter", {
			altKey: "any",
			ctrlKey: "any",
			metaKey: "any"
		});
	}(e)) fc = !1, Y(t, Ms, e);
	else if (function(e) {
		return kd(e, "Backspace", { shiftKey: "any" }) || xa && kd(e, "h", { ctrlKey: !0 });
	}(e)) Md(e) ? Y(t, Ps, e) : (e.preventDefault(), Y(t, ms, !0));
	else if (function(e) {
		return e.key === "Escape";
	}(e)) Y(t, Fs, e);
	else if (function(e) {
		return kd(e, "Delete", {}) || xa && kd(e, "d", { ctrlKey: !0 });
	}(e)) (function(e) {
		return e.key === "Delete";
	})(e) ? Y(t, Is, e) : (e.preventDefault(), Y(t, ms, !1));
	else if (function(e) {
		return kd(e, "Backspace", jd);
	}(e)) e.preventDefault(), Y(t, bs, !0);
	else if (function(e) {
		return kd(e, "Delete", jd);
	}(e)) e.preventDefault(), Y(t, bs, !1);
	else if (function(e) {
		return xa && kd(e, "Backspace", { metaKey: !0 });
	}(e)) e.preventDefault(), Y(t, xs, !0);
	else if (function(e) {
		return xa && (kd(e, "Delete", { metaKey: !0 }) || kd(e, "k", { ctrlKey: !0 }));
	}(e)) e.preventDefault(), Y(t, xs, !1);
	else if (function(e) {
		return kd(e, "b", Ad);
	}(e)) e.preventDefault(), Y(t, Ss, "bold");
	else if (function(e) {
		return kd(e, "u", Ad);
	}(e)) e.preventDefault(), Y(t, Ss, "underline");
	else if (function(e) {
		return kd(e, "i", Ad);
	}(e)) e.preventDefault(), Y(t, Ss, "italic");
	else if (function(e) {
		return kd(e, "Tab", { shiftKey: "any" });
	}(e)) Y(t, Ls, e);
	else if (function(e) {
		return kd(e, "z", Ad);
	}(e)) e.preventDefault(), Y(t, Cs, void 0);
	else if (function(e) {
		return xa ? kd(e, "z", {
			metaKey: !0,
			shiftKey: !0
		}) : kd(e, "y", { ctrlKey: !0 }) || kd(e, "z", {
			ctrlKey: !0,
			shiftKey: !0
		});
	}(e)) e.preventDefault(), Y(t, ws, void 0);
	else {
		let n = t._editorState._selection;
		n === null || G(n) ? Nd(e) && (e.preventDefault(), Y(t, Js, e)) : function(e) {
			return kd(e, "c", Ad);
		}(e) ? (e.preventDefault(), Y(t, Ks, e)) : function(e) {
			return kd(e, "x", Ad);
		}(e) ? (e.preventDefault(), Y(t, qs, e)) : Nd(e) && (e.preventDefault(), Y(t, Js, e));
	}
	return function(e) {
		return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
	}(e) && t.dispatchCommand(tc, e), !0;
}
function Ac(e) {
	let t = e.__lexicalEventHandles;
	return t === void 0 && (t = [], e.__lexicalEventHandles = t), t;
}
var jc = /* @__PURE__ */ new Map();
function Mc(e) {
	let t = af(e.target);
	if (t === null) return;
	let n = Yu(t.anchorNode);
	if (n === null) return;
	dc && (dc = !1, vu(n, () => {
		let r = Rl(), i = t.anchorNode;
		(sf(i) || ed(i)) && vd(Ll(r, t, n, e));
	}));
	let r = xd(n), i = r[r.length - 1], a = i._key, o = jc.get(a), s = o || i;
	s !== n && bc(t, s, !1), bc(t, n, !0), n === i ? o && jc.delete(a) : jc.set(a, n);
}
function Nc(e) {
	e._lexicalHandled = !0;
}
function Pc(e) {
	return !0 === e._lexicalHandled;
}
function Fc(e) {
	let t = cc.get(e);
	if (t === void 0) return;
	let n = lc.get(t);
	if (n === void 0) return;
	let r = n - 1;
	r >= 0 || H(164), cc.delete(e), lc.set(t, r), r === 0 && t.removeEventListener("selectionchange", Mc);
	let i = Xu(e);
	Ju(i) ? (function(e) {
		if (e._parentEditor !== null) {
			let t = xd(e), n = t[t.length - 1]._key;
			jc.get(n) === e && jc.delete(n);
		} else jc.delete(e._key);
	}(i), e.__lexicalEditor = null) : i && H(198);
	let a = Ac(e);
	for (let e = 0; e < a.length; e++) a[e]();
	e.__lexicalEventHandles = [];
}
function Ic(e, t, n) {
	nu();
	let r = e.__key, i = e.getParent();
	if (i === null) return;
	let a = function(e) {
		let t = K();
		if (!G(t) || !q(e)) return t;
		let { anchor: n, focus: r } = t, i = n.getNode(), a = r.getNode();
		return Gd(i, e) && n.set(e.__key, 0, "element"), Gd(a, e) && r.set(e.__key, 0, "element"), t;
	}(e), o = !1;
	if (G(a) && t) {
		let t = a.anchor, n = a.focus;
		t.key === r && (Vl(t, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0), n.key === r && (Vl(n, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0);
	} else Sl(a) && t && e.isSelected() && e.selectPrevious();
	if (G(a) && t && !o) {
		let t = e.getIndexWithinParent();
		od(e), zl(a, i, t, -1);
	} else od(e);
	n || Xd(i) || i.canBeEmpty() || !i.isEmpty() || Ic(i, t), t && a && Eu(i) && i.isEmpty() && i.selectEnd();
}
function Lc(e) {
	return e;
}
var Rc = Symbol.for("ephemeral");
function zc(e) {
	return e[Rc] || !1;
}
var Bc = class {
	__type;
	__key;
	__parent;
	__prev;
	__next;
	__state;
	static getType() {
		let { ownNodeType: e } = Cf(this);
		return e === void 0 && H(64, this.name), e;
	}
	static clone(e) {
		H(65, this.name);
	}
	$config() {
		return {};
	}
	config(e, t) {
		let n = t.extends || Object.getPrototypeOf(this.constructor);
		return Object.assign(t, {
			extends: n,
			type: e
		}), { [e]: t };
	}
	afterCloneFrom(e) {
		this.__key === e.__key ? (this.__parent = e.__parent, this.__next = e.__next, this.__prev = e.__prev, this.__state = e.__state) : e.__state && (this.__state = e.__state.getWritable(this));
	}
	static importDOM;
	constructor(e) {
		this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", {
			configurable: !0,
			enumerable: !1,
			value: void 0,
			writable: !0
		}), ad(this, e);
	}
	getType() {
		return this.__type;
	}
	isInline() {
		H(137, this.constructor.name);
	}
	isAttached() {
		let e = this.__key;
		for (; e !== null;) {
			if (e === "root") return !0;
			let t = ud(e);
			if (t === null) break;
			e = t.__parent;
		}
		return !1;
	}
	isSelected(e) {
		let t = e || K();
		if (t == null) return !1;
		let n = t.getNodes().some((e) => e.__key === this.__key);
		if (W(this)) return n;
		if (G(t) && t.anchor.type === "element" && t.focus.type === "element") {
			if (t.isCollapsed()) return !1;
			let e = this.getParent();
			if (wu(this) && this.isInline() && e) {
				let n = t.isBackward() ? t.focus : t.anchor;
				if (e.is(n.getNode()) && n.offset === e.getChildrenSize() && this.is(e.getLastChild())) return !1;
			}
		}
		return n;
	}
	getKey() {
		return this.__key;
	}
	getIndexWithinParent() {
		let e = this.getParent();
		if (e === null) return -1;
		let t = e.getFirstChild(), n = 0;
		for (; t !== null;) {
			if (this.is(t)) return n;
			n++, t = t.getNextSibling();
		}
		return -1;
	}
	getParent() {
		let e = this.getLatest().__parent;
		return e === null ? null : ud(e);
	}
	getParentOrThrow() {
		let e = this.getParent();
		return e === null && H(66, this.__key), e;
	}
	getTopLevelElement() {
		let e = this;
		for (; e !== null;) {
			let t = e.getParent();
			if (Xd(t)) return q(e) || e === this && wu(e) || H(194), e;
			e = t;
		}
		return null;
	}
	getTopLevelElementOrThrow() {
		let e = this.getTopLevelElement();
		return e === null && H(67, this.__key), e;
	}
	getParents() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t), t = t.getParent();
		return e;
	}
	getParentKeys() {
		let e = [], t = this.getParent();
		for (; t !== null;) e.push(t.__key), t = t.getParent();
		return e;
	}
	getPreviousSibling() {
		let e = this.getLatest().__prev;
		return e === null ? null : ud(e);
	}
	getPreviousSiblings() {
		let e = [], t = this.getParent();
		if (t === null) return e;
		let n = t.getFirstChild();
		for (; n !== null && !n.is(this);) e.push(n), n = n.getNextSibling();
		return e;
	}
	getNextSibling() {
		let e = this.getLatest().__next;
		return e === null ? null : ud(e);
	}
	getNextSiblings() {
		let e = [], t = this.getNextSibling();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getCommonAncestor(e) {
		let t = q(this) ? this : this.getParent(), n = q(e) ? e : e.getParent(), r = t && n ? np(t, n) : null;
		return r ? r.commonAncestor : null;
	}
	is(e) {
		return e != null && this.__key === e.__key;
	}
	isBefore(e) {
		let t = np(this, e);
		return t !== null && (t.type === "descendant" || (t.type === "branch" ? $f(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && H(279), !1)));
	}
	isParentOf(e) {
		let t = np(this, e);
		return t !== null && t.type === "ancestor";
	}
	getNodesBetween(e) {
		let t = this.isBefore(e), n = [], r = /* @__PURE__ */ new Set(), i = this;
		for (; i !== null;) {
			let a = i.__key;
			if (r.has(a) || (r.add(a), n.push(i)), i === e) break;
			let o = q(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
			if (o !== null) {
				i = o;
				continue;
			}
			let s = t ? i.getNextSibling() : i.getPreviousSibling();
			if (s !== null) {
				i = s;
				continue;
			}
			let c = i.getParentOrThrow();
			if (r.has(c.__key) || n.push(c), c === e) break;
			let l = null, u = c;
			do {
				if (u === null && H(68), l = t ? u.getNextSibling() : u.getPreviousSibling(), u = u.getParent(), u === null) break;
				l !== null || r.has(u.__key) || n.push(u);
			} while (l === null);
			i = l;
		}
		return t || n.reverse(), n;
	}
	isDirty() {
		let e = au()._dirtyLeaves;
		return e !== null && e.has(this.__key);
	}
	getLatest() {
		if (zc(this)) return this;
		let e = ud(this.__key);
		return e === null && H(113), e;
	}
	getWritable() {
		if (zc(this)) return this;
		nu();
		let e = iu(), t = au(), n = e._nodeMap, r = this.__key, i = this.getLatest(), a = t._cloneNotNeeded, o = K();
		if (o !== null && o.setCachedNodes(null), a.has(r)) return sd(i), i;
		let s = _f(i);
		return a.add(r), sd(s), n.set(r, s), s;
	}
	getTextContent() {
		return "";
	}
	getTextContentSize() {
		return this.getTextContent().length;
	}
	createDOM(e, t) {
		H(70);
	}
	updateDOM(e, t, n) {
		H(71);
	}
	exportDOM(e) {
		return { element: this.createDOM(e._config, e) };
	}
	exportJSON() {
		let e = this.__state ? this.__state.toJSON() : void 0;
		return {
			type: this.__type,
			version: 1,
			...e
		};
	}
	static importJSON(e) {
		H(18, this.name);
	}
	updateFromJSON(e) {
		return function(e, t) {
			let n = e.getWritable(), r = t.$, i = r;
			for (let e of go(n).flatKeys) e in t && (i !== void 0 && i !== r || (i = { ...r }), i[e] = t[e]);
			return (n.__state || i) && ho(e).updateFromJSON(i), n;
		}(this, e);
	}
	static transform() {
		return null;
	}
	remove(e) {
		Ic(this, !0, e);
	}
	replace(e, t) {
		nu();
		let n = K();
		n !== null && (n = n.clone()), $d(this, e);
		let r = this.getLatest(), i = this.__key, a = e.__key, o = e.getWritable(), s = this.getParentOrThrow().getWritable(), c = s.__size;
		od(o);
		let l = r.getPreviousSibling(), u = r.getNextSibling(), d = r.__prev, f = r.__next, p = r.__parent;
		if (Ic(r, !1, !0), l === null ? s.__first = a : l.getWritable().__next = a, o.__prev = d, u === null ? s.__last = a : u.getWritable().__prev = a, o.__next = f, o.__parent = p, s.__size = c, t && (q(this) && q(o) || H(139), this.getChildren().forEach((e) => {
			o.append(e);
		})), G(n)) {
			vd(n);
			let e = n.anchor, t = n.focus;
			e.key === i && yl(e, o), t.key === i && yl(t, o);
		}
		return ld() === i && cd(a), o;
	}
	insertAfter(e, t = !0) {
		nu(), $d(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.getParent(), a = K(), o = !1, s = !1;
		if (i !== null) {
			let t = e.getIndexWithinParent();
			if (od(r), G(a)) {
				let e = i.__key, n = a.anchor, r = a.focus;
				o = n.type === "element" && n.key === e && n.offset === t + 1, s = r.type === "element" && r.key === e && r.offset === t + 1;
			}
		}
		let c = this.getNextSibling(), l = this.getParentOrThrow().getWritable(), u = r.__key, d = n.__next;
		if (c === null ? l.__last = u : c.getWritable().__prev = u, l.__size++, n.__next = u, r.__next = d, r.__prev = n.__key, r.__parent = n.__parent, t && G(a)) {
			let e = this.getIndexWithinParent();
			zl(a, l, e + 1);
			let t = l.__key;
			o && a.anchor.set(t, e + 2, "element"), s && a.focus.set(t, e + 2, "element");
		}
		return e;
	}
	insertBefore(e, t = !0) {
		nu(), $d(this, e);
		let n = this.getWritable(), r = e.getWritable(), i = r.__key;
		od(r);
		let a = this.getPreviousSibling(), o = this.getParentOrThrow().getWritable(), s = n.__prev, c = this.getIndexWithinParent();
		a === null ? o.__first = i : a.getWritable().__next = i, o.__size++, n.__prev = i, r.__prev = s, r.__next = n.__key, r.__parent = n.__parent;
		let l = K();
		return t && G(l) && zl(l, this.getParentOrThrow(), c), e;
	}
	isParentRequired() {
		return !1;
	}
	createParentElementNode() {
		return J();
	}
	selectStart() {
		return this.selectPrevious();
	}
	selectEnd() {
		return this.selectNext(0, 0);
	}
	selectPrevious(e, t) {
		nu();
		let n = this.getPreviousSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select(0, 0);
		if (q(n)) return n.select();
		if (!W(n)) {
			let e = n.getIndexWithinParent() + 1;
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	selectNext(e, t) {
		nu();
		let n = this.getNextSibling(), r = this.getParentOrThrow();
		if (n === null) return r.select();
		if (q(n)) return n.select(0, 0);
		if (!W(n)) {
			let e = n.getIndexWithinParent();
			return r.select(e, e);
		}
		return n.select(e, t);
	}
	markDirty() {
		this.getWritable();
	}
	reconcileObservedMutation(e, t) {
		this.markDirty();
	}
}, Vc = "historic", Hc = "history-push", Uc = "history-merge", Wc = "skip-scroll-into-view", Gc = class e extends Bc {
	static getType() {
		return "linebreak";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super(e);
	}
	getTextContent() {
		return "\n";
	}
	createDOM() {
		return document.createElement("br");
	}
	updateDOM() {
		return !1;
	}
	isInline() {
		return !0;
	}
	static importDOM() {
		return { br: (e) => function(e) {
			let t = e.parentElement;
			if (t !== null && df(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && Yc(n)) {
					let n = t.lastChild;
					if (n === e || n.previousSibling === e && Yc(n)) return !0;
				}
			}
			return !1;
		}(e) || function(e) {
			let t = e.parentElement;
			if (t !== null && df(t)) {
				let n = t.firstChild;
				if (n === e || n.nextSibling === e && Yc(n)) return !1;
				let r = t.lastChild;
				if (r === e || r.previousSibling === e && Yc(r)) return !0;
			}
			return !1;
		}(e) ? null : {
			conversion: Kc,
			priority: 0
		} };
	}
	static importJSON(e) {
		return qc().updateFromJSON(e);
	}
};
function Kc(e) {
	return { node: qc() };
}
function qc() {
	return Qd(new Gc());
}
function Jc(e) {
	return e instanceof Gc;
}
function Yc(e) {
	return ed(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function Xc(e, t) {
	return 16 & t ? "code" : t & 128 ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function Zc(e, t) {
	return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function Qc(e, t, n, r, i) {
	let a = r.classList, o = Fd(i, "base");
	o !== void 0 && a.add(...o), o = Fd(i, "underlineStrikethrough");
	let s = !1, c = 8 & t && 4 & t;
	o !== void 0 && (8 & n && 4 & n ? (s = !0, c || a.add(...o)) : c && a.remove(...o));
	for (let e in Wa) {
		let r = Wa[e];
		if (o = Fd(i, e), o !== void 0) if (n & r) {
			if (s && (e === "underline" || e === "strikethrough")) {
				t & r && a.remove(...o);
				continue;
			}
			((t & r) === 0 || c && e === "underline" || e === "strikethrough") && a.add(...o);
		} else t & r && a.remove(...o);
	}
}
function $c(e, t, n) {
	let r = t.firstChild, i = n.isComposing(), a = e + (i ? za : "");
	if (r == null) t.textContent = a;
	else {
		let e = r.nodeValue;
		if (e !== a) if (i || Sa) {
			let [t, n, i] = function(e, t) {
				let n = e.length, r = t.length, i = 0, a = 0;
				for (; i < n && i < r && e[i] === t[i];) i++;
				for (; a + i < n && a + i < r && e[n - a - 1] === t[r - a - 1];) a++;
				return [
					i,
					n - i - a,
					t.slice(i, r - a)
				];
			}(e, a);
			n !== 0 && r.deleteData(t, n), r.insertData(t, i);
		} else r.nodeValue = a;
	}
}
function el(e, t, n, r, i, a) {
	$c(i, e, t);
	let o = a.theme.text;
	o !== void 0 && Qc(0, 0, r, e, o);
}
function tl(e, t) {
	let n = document.createElement(t);
	return n.appendChild(e), n;
}
var nl = class e extends Bc {
	__text;
	__format;
	__style;
	__mode;
	__detail;
	static getType() {
		return "text";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__text = e.__text, this.__format = e.__format, this.__style = e.__style, this.__mode = e.__mode, this.__detail = e.__detail;
	}
	constructor(e = "", t) {
		super(t), this.__text = e, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getDetail() {
		return this.getLatest().__detail;
	}
	getMode() {
		return Ya[this.getLatest().__mode];
	}
	getStyle() {
		return this.getLatest().__style;
	}
	isToken() {
		return this.getLatest().__mode === 1;
	}
	isComposing() {
		return this.__key === ld();
	}
	isSegmented() {
		return this.getLatest().__mode === 2;
	}
	isDirectionless() {
		return !!(1 & this.getLatest().__detail);
	}
	isUnmergeable() {
		return !!(2 & this.getLatest().__detail);
	}
	hasFormat(e) {
		let t = Wa[e];
		return (this.getFormat() & t) !== 0;
	}
	isSimpleText() {
		return this.__type === "text" && this.__mode === 0;
	}
	getTextContent() {
		return this.getLatest().__text;
	}
	getFormatFlags(e, t) {
		return rd(this.getLatest().__format, e, t);
	}
	canHaveFormat() {
		return !0;
	}
	isInline() {
		return !0;
	}
	createDOM(e, t) {
		let n = this.__format, r = Xc(0, n), i = Zc(0, n), a = r === null ? i : r, o = document.createElement(a), s = o;
		this.hasFormat("code") && o.setAttribute("spellcheck", "false"), r !== null && (s = document.createElement(i), o.appendChild(s)), el(s, this, 0, n, this.__text, e);
		let c = this.__style;
		return c !== "" && (o.style.cssText = c), o;
	}
	updateDOM(e, t, n) {
		let r = this.__text, i = e.__format, a = this.__format, o = Xc(0, i), s = Xc(0, a), c = Zc(0, i), l = Zc(0, a);
		if ((o === null ? c : o) !== (s === null ? l : s)) return !0;
		if (o === s && c !== l) {
			let e = t.firstChild;
			e ?? H(48);
			let i = document.createElement(l);
			return el(i, this, 0, a, r, n), t.replaceChild(i, e), !1;
		}
		let u = t;
		s !== null && o !== null && (u = t.firstChild, u ?? H(49)), $c(r, u, this);
		let d = n.theme.text;
		d !== void 0 && i !== a && Qc(0, i, a, u, d);
		let f = e.__style, p = this.__style;
		return f !== p && (t.style.cssText = p), !1;
	}
	static importDOM() {
		return {
			"#text": () => ({
				conversion: sl,
				priority: 0
			}),
			b: () => ({
				conversion: il,
				priority: 0
			}),
			code: () => ({
				conversion: ul,
				priority: 0
			}),
			em: () => ({
				conversion: ul,
				priority: 0
			}),
			i: () => ({
				conversion: ul,
				priority: 0
			}),
			mark: () => ({
				conversion: ul,
				priority: 0
			}),
			s: () => ({
				conversion: ul,
				priority: 0
			}),
			span: () => ({
				conversion: rl,
				priority: 0
			}),
			strong: () => ({
				conversion: ul,
				priority: 0
			}),
			sub: () => ({
				conversion: ul,
				priority: 0
			}),
			sup: () => ({
				conversion: ul,
				priority: 0
			}),
			u: () => ({
				conversion: ul,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return dl().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTextContent(e.text).setFormat(e.format).setDetail(e.detail).setMode(e.mode).setStyle(e.style);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		return sf(t) || H(132), t.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? t.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? t.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (t.style.textTransform = "capitalize"), this.hasFormat("bold") && (t = tl(t, "b")), this.hasFormat("italic") && (t = tl(t, "i")), this.hasFormat("strikethrough") && (t = tl(t, "s")), this.hasFormat("underline") && (t = tl(t, "u")), { element: t };
	}
	exportJSON() {
		return {
			detail: this.getDetail(),
			format: this.getFormat(),
			mode: this.getMode(),
			style: this.getStyle(),
			text: this.getTextContent(),
			...super.exportJSON()
		};
	}
	selectionTransform(e, t) {}
	setFormat(e) {
		let t = this.getWritable();
		return t.__format = typeof e == "string" ? Wa[e] : e, t;
	}
	setDetail(e) {
		let t = this.getWritable();
		return t.__detail = typeof e == "string" ? Ga[e] : e, t;
	}
	setStyle(e) {
		let t = this.getWritable();
		return t.__style = e, t;
	}
	toggleFormat(e) {
		let t = rd(this.getFormat(), e, null);
		return this.setFormat(t);
	}
	toggleDirectionless() {
		let e = this.getWritable();
		return e.__detail ^= 1, e;
	}
	toggleUnmergeable() {
		let e = this.getWritable();
		return e.__detail ^= 2, e;
	}
	setMode(e) {
		let t = Ja[e];
		if (this.__mode === t) return this;
		let n = this.getWritable();
		return n.__mode = t, n;
	}
	setTextContent(e) {
		if (this.__text === e) return this;
		let t = this.getWritable();
		return t.__text = e, t;
	}
	select(e, t) {
		nu();
		let n = e, r = t, i = K(), a = this.getTextContent(), o = this.__key;
		if (typeof a == "string") {
			let e = a.length;
			n === void 0 && (n = e), r === void 0 && (r = e);
		} else n = 0, r = 0;
		if (!G(i)) return Nl(o, n, o, r, "text", "text");
		{
			let e = ld();
			e !== i.anchor.key && e !== i.focus.key || cd(o), i.setTextNodeRange(this, n, this, r);
		}
		return i;
	}
	selectStart() {
		return this.select(0, 0);
	}
	selectEnd() {
		let e = this.getTextContentSize();
		return this.select(e, e);
	}
	spliceText(e, t, n, r) {
		let i = this.getWritable(), a = i.__text, o = n.length, s = e;
		s < 0 && (s = o + s, s < 0 && (s = 0));
		let c = K();
		if (r && G(c)) {
			let t = e + o;
			c.setTextNodeRange(i, t, i, t);
		}
		return i.__text = a.slice(0, s) + n + a.slice(s + t), i;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	splitText(...e) {
		nu();
		let t = this.getLatest(), n = t.getTextContent();
		if (n === "") return [];
		let r = t.__key, i = ld(), a = n.length;
		e.sort((e, t) => e - t), e.push(a);
		let o = [], s = e.length;
		for (let t = 0, r = 0; t < a && r <= s; r++) {
			let i = e[r];
			i > t && (o.push(n.slice(t, i)), t = i);
		}
		let c = o.length;
		if (c === 1) return [t];
		let l = o[0], u = t.getParent(), d, f = t.getFormat(), p = t.getStyle(), m = t.__detail, h = !1, g = null, _ = null, v = K();
		if (G(v)) {
			let [e, t] = v.isBackward() ? [v.focus, v.anchor] : [v.anchor, v.focus];
			e.type === "text" && e.key === r && (g = e), t.type === "text" && t.key === r && (_ = t);
		}
		t.isSegmented() ? (d = dl(l), d.__format = f, d.__style = p, d.__detail = m, d.__state = xo(t, d), h = !0) : d = t.setTextContent(l);
		let y = [d];
		for (let e = 1; e < c; e++) {
			let n = dl(o[e]);
			n.__format = f, n.__style = p, n.__detail = m, n.__state = xo(t, n);
			let a = n.__key;
			i === r && cd(a), y.push(n);
		}
		let b = g ? g.offset : null, x = _ ? _.offset : null, S = 0;
		for (let e of y) {
			if (!g && !_) break;
			let t = S + e.getTextContentSize();
			if (g !== null && b !== null && b <= t && b >= S && (g.set(e.getKey(), b - S, "text"), b < t && (g = null)), _ !== null && x !== null && x <= t && x >= S) {
				_.set(e.getKey(), x - S, "text");
				break;
			}
			S = t;
		}
		if (u !== null) {
			(function(e) {
				let t = e.getPreviousSibling(), n = e.getNextSibling();
				t !== null && sd(t), n !== null && sd(n);
			})(this);
			let e = u.getWritable(), t = this.getIndexWithinParent();
			h ? (e.splice(t, 0, y), this.remove()) : e.splice(t, 1, y), G(v) && zl(v, u, t, c - 1);
		}
		return y;
	}
	mergeWithSibling(e) {
		let t = e === this.getPreviousSibling();
		t || e === this.getNextSibling() || H(50);
		let n = this.__key, r = e.__key, i = this.__text, a = i.length;
		ld() === r && cd(n);
		let o = K();
		if (G(o)) {
			let i = o.anchor, s = o.focus;
			i !== null && i.key === r && Hl(i, t, n, e, a), s !== null && s.key === r && Hl(s, t, n, e, a);
		}
		let s = e.__text, c = t ? s + i : i + s;
		this.setTextContent(c);
		let l = this.getWritable();
		return e.remove(), l;
	}
	isTextEntity() {
		return !1;
	}
};
function rl(e) {
	return {
		forChild: fl(e.style),
		node: null
	};
}
function il(e) {
	let t = e, n = t.style.fontWeight === "normal";
	return {
		forChild: fl(t.style, n ? void 0 : "bold"),
		node: null
	};
}
var al = /* @__PURE__ */ new WeakMap();
function ol(e) {
	if (!sf(e)) return !1;
	if (e.nodeName === "PRE") return !0;
	let t = e.style.whiteSpace;
	return typeof t == "string" && t.startsWith("pre");
}
function sl(e) {
	let t = e;
	e.parentElement === null && H(129);
	let n = t.textContent || "";
	if (function(e) {
		let t, n = e.parentNode, r = [e];
		for (; n !== null && (t = al.get(n)) === void 0 && !ol(n);) r.push(n), n = n.parentNode;
		let i = t === void 0 ? n : t;
		for (let e = 0; e < r.length; e++) al.set(r[e], i);
		return i;
	}(t) !== null) {
		let e = n.split(/(\r?\n|\t)/), t = [], r = e.length;
		for (let n = 0; n < r; n++) {
			let r = e[n];
			r === "\n" || r === "\r\n" ? t.push(qc()) : r === "	" ? t.push(ml()) : r !== "" && t.push(dl(r));
		}
		return { node: t };
	}
	if (n = n.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), n === "") return { node: null };
	if (n[0] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = cl(e, !1)) !== null;) {
			let t = e.textContent || "";
			if (t.length > 0) {
				/[ \t\n]$/.test(t) && (n = n.slice(1)), r = !1;
				break;
			}
		}
		r && (n = n.slice(1));
	}
	if (n[n.length - 1] === " ") {
		let e = t, r = !0;
		for (; e !== null && (e = cl(e, !0)) !== null;) if ((e.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
			r = !1;
			break;
		}
		r && (n = n.slice(0, n.length - 1));
	}
	return n === "" ? { node: null } : { node: dl(n) };
}
function cl(e, t) {
	let n = e;
	for (;;) {
		let e;
		for (; (e = t ? n.nextSibling : n.previousSibling) === null;) {
			let e = n.parentElement;
			if (e === null) return null;
			n = e;
		}
		if (n = e, sf(n)) {
			let e = n.style.display;
			if (e === "" && !uf(n) || e !== "" && !e.startsWith("inline")) return null;
		}
		let r = n;
		for (; (r = t ? n.firstChild : n.lastChild) !== null;) n = r;
		if (ed(n)) return n;
		if (n.nodeName === "BR") return null;
	}
}
var ll = {
	code: "code",
	em: "italic",
	i: "italic",
	mark: "highlight",
	s: "strikethrough",
	strong: "bold",
	sub: "subscript",
	sup: "superscript",
	u: "underline"
};
function ul(e) {
	let t = ll[e.nodeName.toLowerCase()];
	return t === void 0 ? { node: null } : {
		forChild: fl(e.style, t),
		node: null
	};
}
function dl(e = "") {
	return Qd(new nl(e));
}
function W(e) {
	return e instanceof nl;
}
function fl(e, t) {
	let n = e.fontWeight, r = e.textDecoration.split(" "), i = n === "700" || n === "bold", a = r.includes("line-through"), o = e.fontStyle === "italic", s = r.includes("underline"), c = e.verticalAlign;
	return (e) => W(e) ? (i && !e.hasFormat("bold") && e.toggleFormat("bold"), a && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"), o && !e.hasFormat("italic") && e.toggleFormat("italic"), s && !e.hasFormat("underline") && e.toggleFormat("underline"), c !== "sub" || e.hasFormat("subscript") || e.toggleFormat("subscript"), c !== "super" || e.hasFormat("superscript") || e.toggleFormat("superscript"), t && !e.hasFormat(t) && e.toggleFormat(t), e) : e;
}
var pl = class e extends nl {
	static getType() {
		return "tab";
	}
	static clone(t) {
		return new e(t.__key);
	}
	constructor(e) {
		super("	", e), this.__detail = 2;
	}
	static importDOM() {
		return null;
	}
	createDOM(e) {
		let t = super.createDOM(e), n = Fd(e.theme, "tab");
		return n !== void 0 && t.classList.add(...n), t;
	}
	static importJSON(e) {
		return ml().updateFromJSON(e);
	}
	setTextContent(e) {
		return e !== "	" && e !== "" && va(126), super.setTextContent("	");
	}
	spliceText(e, t, n, r) {
		return n === "" && t === 0 || n === "	" && t === 1 || H(286), this;
	}
	setDetail(e) {
		return e !== 2 && H(127), this;
	}
	setMode(e) {
		return e !== "normal" && H(128), this;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
};
function ml() {
	return Qd(new pl());
}
function hl(e) {
	return e instanceof pl;
}
var gl = class {
	key;
	offset;
	type;
	_selection;
	constructor(e, t, n) {
		this._selection = null, this.key = e, this.offset = t, this.type = n;
	}
	is(e) {
		return this.key === e.key && this.offset === e.offset && this.type === e.type;
	}
	isBefore(e) {
		return this.key === e.key ? this.offset < e.offset : Qf(fp(rp(this, "next")), fp(rp(e, "next"))) < 0;
	}
	getNode() {
		let e = ud(this.key);
		return e === null && H(20), e;
	}
	set(e, t, n, r) {
		let i = this._selection, a = this.key;
		r && this.key === e && this.offset === t && this.type === n || (this.key = e, this.offset = t, this.type = n, tu() || (ld() === a && cd(e), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
	}
};
function _l(e, t, n) {
	return new gl(e, t, n);
}
function vl(e, t) {
	let n = t.__key, r = e.offset, i = "element";
	if (W(t)) {
		i = "text";
		let e = t.getTextContentSize();
		r > e && (r = e);
	} else if (!q(t)) {
		let e = t.getNextSibling();
		if (W(e)) n = e.__key, r = 0, i = "text";
		else {
			let e = t.getParent();
			e && (n = e.__key, r = t.getIndexWithinParent() + 1);
		}
	}
	e.set(n, r, i);
}
function yl(e, t) {
	if (q(t)) {
		let n = t.getLastDescendant();
		q(n) || W(n) ? vl(e, n) : vl(e, t);
	} else vl(e, t);
}
var bl = class e {
	_nodes;
	_cachedNodes;
	dirty;
	constructor(e) {
		this._cachedNodes = null, this._nodes = e, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		if (!Sl(e)) return !1;
		let t = this._nodes, n = e._nodes;
		return t.size === n.size && Array.from(t).every((e) => n.has(e));
	}
	isCollapsed() {
		return !1;
	}
	isBackward() {
		return !1;
	}
	getStartEndPoints() {
		return null;
	}
	add(e) {
		this.dirty = !0, this._nodes.add(e), this._cachedNodes = null;
	}
	delete(e) {
		this.dirty = !0, this._nodes.delete(e), this._cachedNodes = null;
	}
	clear() {
		this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
	}
	has(e) {
		return this._nodes.has(e);
	}
	clone() {
		return new e(new Set(this._nodes));
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {}
	insertText() {}
	insertNodes(e) {
		let t = this.getNodes(), n = t.length, r = t[n - 1], i;
		if (W(r)) i = r.select();
		else {
			let e = r.getIndexWithinParent() + 1;
			i = r.getParentOrThrow().select(e, e);
		}
		i.insertNodes(e);
		for (let e = 0; e < n; e++) t[e].remove();
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = this._nodes, n = [];
		for (let e of t) {
			let t = ud(e);
			t !== null && n.push(t);
		}
		return tu() || (this._cachedNodes = n), n;
	}
	getTextContent() {
		let e = this.getNodes(), t = "";
		for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
		return t;
	}
	deleteNodes() {
		let e = this.getNodes();
		if ((K() || Rl()) === this && e[0]) {
			let t = zf(e[0], "next");
			ap(Xf(t, t));
		}
		for (let t of e) t.remove();
	}
};
function G(e) {
	return e instanceof xl;
}
var xl = class e {
	format;
	style;
	anchor;
	focus;
	_cachedNodes;
	dirty;
	constructor(e, t, n, r) {
		this.anchor = e, this.focus = t, e._selection = this, t._selection = this, this._cachedNodes = null, this.format = n, this.style = r, this.dirty = !1;
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return !!G(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
	}
	isCollapsed() {
		return this.anchor.is(this.focus);
	}
	getNodes() {
		let e = this._cachedNodes;
		if (e !== null) return e;
		let t = function(e) {
			let t = [], [n, r] = e.getTextSlices();
			n && t.push(n.caret.origin);
			let i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
			for (let n of e) if (Ff(n)) {
				let { origin: e } = n;
				t.length === 0 ? i.add(e) : (a.add(e), t.push(e));
			} else {
				let { origin: e } = n;
				q(e) && a.has(e) || t.push(e);
			}
			if (r && t.push(r.caret.origin), Pf(e.focus) && q(e.focus.origin) && e.focus.getNodeAtCaret() === null) for (let n = Uf(e.focus.origin, "previous"); Ff(n) && i.has(n.origin) && !n.origin.isEmpty() && n.origin.is(t[t.length - 1]); n = Gf(n)) i.delete(n.origin), t.pop();
			for (; t.length > 1;) {
				let e = t[t.length - 1];
				if (!q(e) || a.has(e) || e.isEmpty() || i.has(e)) break;
				t.pop();
			}
			if (t.length === 0 && e.isCollapsed()) {
				let n = fp(e.anchor), r = fp(e.anchor.getFlipped()), i = (e) => Nf(e) ? e.origin : e.getNodeAtCaret(), a = i(n) || i(r) || (e.anchor.getNodeAtCaret() ? n.origin : r.origin);
				t.push(a);
			}
			return t;
		}(hp(sp(this), "next"));
		return tu() || (this._cachedNodes = t), t;
	}
	setTextNodeRange(e, t, n, r) {
		this.anchor.set(e.__key, t, "text"), this.focus.set(n.__key, r, "text");
	}
	getTextContent() {
		let e = this.getNodes();
		if (e.length === 0) return "";
		let t = e[0], n = e[e.length - 1], r = this.anchor, i = this.focus, a = r.isBefore(i), [o, s] = wl(this), c = "", l = !0;
		for (let u = 0; u < e.length; u++) {
			let d = e[u];
			if (q(d) && !d.isInline()) l || (c += "\n"), l = !d.isEmpty();
			else if (l = !1, W(d)) {
				let e = d.getTextContent();
				d === t ? d === n ? r.type === "element" && i.type === "element" && i.offset !== r.offset || (e = o < s ? e.slice(o, s) : e.slice(s, o)) : e = a ? e.slice(o) : e.slice(s) : d === n && (e = a ? e.slice(0, s) : e.slice(0, o)), c += e;
			} else !wu(d) && !Jc(d) || d === n && this.isCollapsed() || (c += d.getTextContent());
		}
		return c;
	}
	applyDOMRange(e) {
		let t = au(), n = t.getEditorState()._selection, r = jl(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n);
		if (r === null) return;
		let [i, a] = r;
		this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(a.key, a.offset, a.type, !0), To(this);
	}
	clone() {
		let t = this.anchor, n = this.focus;
		return new e(_l(t.key, t.offset, t.type), _l(n.key, n.offset, n.type), this.format, this.style);
	}
	toggleFormat(e) {
		this.format = rd(this.format, e, null), this.dirty = !0;
	}
	setFormat(e) {
		this.format = e, this.dirty = !0;
	}
	setStyle(e) {
		this.style = e, this.dirty = !0;
	}
	hasFormat(e) {
		let t = Wa[e];
		return (this.format & t) !== 0;
	}
	insertRawText(e) {
		let t = e.split(/(\r?\n|\t)/), n = [], r = t.length;
		for (let e = 0; e < r; e++) {
			let r = t[e];
			r === "\n" || r === "\r\n" ? n.push(qc()) : r === "	" ? n.push(ml()) : n.push(dl(r));
		}
		this.insertNodes(n);
	}
	insertText(e) {
		let t = this.anchor, n = this.focus, r = this.format, i = this.style, a = t, o = n;
		!this.isCollapsed() && n.isBefore(t) && (a = n, o = t), a.type === "element" && function(e, t, n, r) {
			let i = e.getNode(), a = i.getChildAtIndex(e.offset), o = dl();
			if (o.setFormat(n), o.setStyle(r), Pu(a)) a.splice(0, 0, [o]);
			else {
				let e = Eu(i) ? J().append(o) : o;
				a === null ? i.append(e) : a.insertBefore(e);
			}
			e.is(t) && t.set(o.__key, 0, "text"), e.set(o.__key, 0, "text");
		}(a, o, r, i), o.type === "element" && ip(o, fp(rp(o, "next")));
		let s = a.offset, c = o.offset, l = this.getNodes(), u = l.length, d = l[0];
		W(d) || H(26);
		let f = d.getTextContent().length, p = d.getParentOrThrow(), m = l[u - 1];
		if (u === 1 && o.type === "element" && (c = f, o.set(a.key, c, "text")), this.isCollapsed() && s === f && ($u(d) || !d.canInsertTextAfter() || !p.canInsertTextAfter() && d.getNextSibling() === null)) {
			let t = d.getNextSibling();
			if (W(t) && t.canInsertTextBefore() && !$u(t) || (t = dl(), t.setFormat(r), t.setStyle(i), p.canInsertTextAfter() ? d.insertAfter(t) : p.insertAfter(t)), t.select(0, 0), d = t, e !== "") return void this.insertText(e);
		} else if (this.isCollapsed() && s === 0 && ($u(d) || !d.canInsertTextBefore() || !p.canInsertTextBefore() && d.getPreviousSibling() === null)) {
			let t = d.getPreviousSibling();
			if (W(t) && !$u(t) || (t = dl(), t.setFormat(r), p.canInsertTextBefore() ? d.insertBefore(t) : p.insertBefore(t)), t.select(), d = t, e !== "") return void this.insertText(e);
		} else if (d.isSegmented() && s !== f) {
			let e = dl(d.getTextContent());
			e.setFormat(r), d.replace(e), d = e;
		} else if (!this.isCollapsed() && e !== "") {
			let t = m.getParent();
			if (!p.canInsertTextBefore() || !p.canInsertTextAfter() || q(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) return this.insertText(""), Al(this.anchor, this.focus, null), void this.insertText(e);
		}
		if (u === 1) {
			if (Qu(d)) {
				let t = dl(e);
				t.select(), d.replace(t);
				return;
			}
			let t = d.getFormat(), n = d.getStyle();
			if (s !== c || t === r && n === i) {
				if (hl(d)) {
					let t = dl(e);
					t.setFormat(r), t.setStyle(i), t.select(), d.replace(t);
					return;
				}
			} else {
				if (d.getTextContent() !== "") {
					let t = dl(e);
					if (t.setFormat(r), t.setStyle(i), t.select(), s === 0) d.insertBefore(t, !1);
					else {
						let [e] = d.splitText(s);
						e.insertAfter(t, !1);
					}
					t.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length);
					return;
				}
				d.setFormat(r), d.setStyle(i);
			}
			let a = c - s;
			d = d.spliceText(s, a, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (d.isComposing() ? this.anchor.offset -= e.length : (this.format = t, this.style = n));
		} else {
			let t = /* @__PURE__ */ new Set([...d.getParentKeys(), ...m.getParentKeys()]), n = q(d) ? d : d.getParentOrThrow(), r = q(m) ? m : m.getParentOrThrow(), i = m;
			if (!n.is(r) && r.isInline()) do
				i = r, r = r.getParentOrThrow();
			while (r.isInline());
			if (o.type === "text" && (c !== 0 || m.getTextContent() === "") || o.type === "element" && m.getIndexWithinParent() < c) if (W(m) && !Qu(m) && c !== m.getTextContentSize()) {
				if (m.isSegmented()) {
					let e = dl(m.getTextContent());
					m.replace(e), m = e;
				}
				Eu(o.getNode()) || o.type !== "text" || (m = m.spliceText(0, c, "")), t.add(m.__key);
			} else {
				let e = m.getParentOrThrow();
				e.canBeEmpty() || e.getChildrenSize() !== 1 ? m.remove() : e.remove();
			}
			else t.add(m.__key);
			let a = r.getChildren(), p = new Set(l), h = n.is(r), g = n.isInline() && d.getNextSibling() === null ? n : d;
			for (let e = a.length - 1; e >= 0; e--) {
				let t = a[e];
				if (t.is(d) || q(t) && t.isParentOf(d)) break;
				t.isAttached() && (!p.has(t) || t.is(i) ? h || g.insertAfter(t, !1) : t.remove());
			}
			if (!h) {
				let e = r, n = null;
				for (; e !== null;) {
					let r = e.getChildren(), i = r.length;
					(i === 0 || r[i - 1].is(n)) && (t.delete(e.__key), n = e), e = e.getParent();
				}
			}
			if (Qu(d)) if (s === f) d.select();
			else {
				let t = dl(e);
				t.select(), d.replace(t);
			}
			else d = d.spliceText(s, f - s, e, !0), d.getTextContent() === "" ? d.remove() : this.anchor.type === "text" && (d.isComposing() ? this.anchor.offset -= e.length : (this.format = d.getFormat(), this.style = d.getStyle()));
			for (let e = 1; e < u; e++) {
				let n = l[e], r = n.__key;
				t.has(r) || n.remove();
			}
		}
	}
	removeText() {
		let e = K() === this;
		op(this, dp(sp(this))), e && K() !== this && vd(this);
	}
	formatText(e, t = null) {
		if (this.isCollapsed()) return this.toggleFormat(e), void cd(null);
		let n = this.getNodes(), r = [];
		for (let e of n) W(e) && r.push(e);
		let i = (t) => {
			n.forEach((n) => {
				if (q(n)) {
					let r = n.getFormatFlags(e, t);
					n.setTextFormat(r);
				}
			});
		}, a = r.length;
		if (a === 0) return this.toggleFormat(e), cd(null), void i(t);
		let o = this.anchor, s = this.focus, c = this.isBackward(), l = c ? s : o, u = c ? o : s, d = 0, f = r[0], p = l.type === "element" ? 0 : l.offset;
		if (l.type === "text" && p === f.getTextContentSize() && (d = 1, f = r[1], p = 0), f == null) return;
		let m = f.getFormatFlags(e, t);
		i(m);
		let h = a - 1, g = r[h], _ = u.type === "text" ? u.offset : g.getTextContentSize();
		if (f.is(g)) {
			if (p === _) return;
			if ($u(f) || p === 0 && _ === f.getTextContentSize()) f.setFormat(m);
			else {
				let e = f.splitText(p, _), t = p === 0 ? e[0] : e[1];
				t.setFormat(m), l.type === "text" && l.set(t.__key, 0, "text"), u.type === "text" && u.set(t.__key, _ - p, "text");
			}
			this.format = m;
			return;
		}
		p === 0 || $u(f) || ([, f] = f.splitText(p), p = 0), f.setFormat(m);
		let v = g.getFormatFlags(e, m);
		_ > 0 && (_ === g.getTextContentSize() || $u(g) || ([g] = g.splitText(_)), g.setFormat(v));
		for (let t = d + 1; t < h; t++) {
			let n = r[t], i = n.getFormatFlags(e, v);
			n.setFormat(i);
		}
		l.type === "text" && l.set(f.__key, p, "text"), u.type === "text" && u.set(g.__key, _, "text"), this.format = m | v;
	}
	insertNodes(e) {
		if (e.length === 0) return;
		if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
			this.insertParagraph();
			let t = K();
			return G(t) || H(134), t.insertNodes(e);
		}
		let t = (this.isBackward() ? this.focus : this.anchor).getNode(), n = X(t, ff), r = e[e.length - 1];
		if (q(n) && "__language" in n) {
			if ("__language" in e[0]) this.insertText(e[0].getTextContent());
			else {
				let t = Kl(this);
				n.splice(t, 0, e), r.selectEnd();
			}
			return;
		}
		if (!e.some((e) => (q(e) || wu(e)) && !e.isInline())) {
			q(n) || H(211, t.constructor.name, t.getType());
			let i = Kl(this);
			n.splice(i, 0, e), r.selectEnd();
			return;
		}
		let i = function(e) {
			let t = J(), n = null;
			for (let r = 0; r < e.length; r++) {
				let i = e[r], a = Jc(i);
				if (a || wu(i) && i.isInline() || q(i) && i.isInline() || W(i) || i.isParentRequired()) {
					if (n === null && (n = i.createParentElementNode(), t.append(n), a)) continue;
					n !== null && n.append(i);
				} else t.append(i), n = null;
			}
			return t;
		}(e), a = i.getLastDescendant(), o = i.getChildren(), s = !q(n) || !n.isEmpty() ? this.insertParagraph() : null, c = o[o.length - 1], l = o[0];
		var u;
		q(u = l) && ff(u) && !u.isEmpty() && q(n) && (!n.isEmpty() || n.canMergeWhenEmpty()) && (q(n) || H(211, t.constructor.name, t.getType()), n.append(...l.getChildren()), l = o[1]), l && (n === null && H(212, t.constructor.name, t.getType()), function(e, t) {
			let n = t.getParentOrThrow().getLastChild(), r = t, i = [t];
			for (; r !== n;) r.getNextSibling() || H(140), r = r.getNextSibling(), i.push(r);
			let a = e;
			for (let e of i) a = a.insertAfter(e);
		}(n, l));
		let d = X(a, ff);
		s && q(d) && (s.canMergeWhenEmpty() || ff(c)) && (d.append(...s.getChildren()), s.remove()), q(n) && n.isEmpty() && n.remove(), a.selectEnd();
		let f = q(n) ? n.getLastChild() : null;
		Jc(f) && d !== n && f.remove();
	}
	insertParagraph() {
		if (this.anchor.key === "root") {
			let e = J();
			return gd().splice(this.anchor.offset, 0, [e]), e.select(), e;
		}
		let e = Kl(this), t = X(this.anchor.getNode(), ff);
		q(t) || H(213);
		let n = t.getChildAtIndex(e), r = n ? [n, ...n.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
		return i ? (i.append(...r), i.selectStart(), i) : null;
	}
	insertLineBreak(e) {
		let t = qc();
		if (this.insertNodes([t]), e) {
			let e = t.getParentOrThrow(), n = t.getIndexWithinParent();
			e.select(n, n);
		}
	}
	extract() {
		let e = [...this.getNodes()], t = e.length, n = e[0], r = e[t - 1], [i, a] = wl(this), o = this.isBackward(), [s, c] = o ? [this.focus, this.anchor] : [this.anchor, this.focus], [l, u] = o ? [a, i] : [i, a];
		if (t === 0) return [];
		if (t === 1) {
			if (W(n) && !this.isCollapsed()) {
				let e = n.splitText(l, u), t = l === 0 ? e[0] : e[1];
				return t ? (s.set(t.getKey(), 0, "text"), c.set(t.getKey(), t.getTextContentSize(), "text"), [t]) : [];
			}
			return [n];
		}
		if (W(n) && (l === n.getTextContentSize() ? e.shift() : l !== 0 && ([, n] = n.splitText(l), e[0] = n, s.set(n.getKey(), 0, "text"))), W(r)) {
			let t = r.getTextContent().length;
			u === 0 ? e.pop() : u !== t && ([r] = r.splitText(u), e[e.length - 1] = r, c.set(r.getKey(), r.getTextContentSize(), "text"));
		}
		return e;
	}
	modify(e, t, n) {
		if (Jl(this, e, t, n)) return;
		let r = e === "move", i = au(), a = rf(qd(i));
		if (!a) return;
		let o = i._blockCursorElement, s = i._rootElement, c = this.focus.getNode();
		if (s === null || o === null || !q(c) || c.isInline() || c.canBeEmpty() || nf(o, i, s), this.dirty) {
			let e = Bd(i, this.anchor.key), t = Bd(i, this.focus.key);
			this.anchor.type === "text" && (e = nd(e)), this.focus.type === "text" && (t = nd(t)), e && t && Ul(a, e, this.anchor.offset, t, this.focus.offset);
		}
		if (function(e, t, n, r) {
			e.modify(t, n, r);
		}(a, e, t ? "backward" : "forward", n), a.rangeCount > 0) {
			let e = a.getRangeAt(0), n = this.anchor.getNode(), i = Eu(n) ? n : Yd(n);
			if (this.applyDOMRange(e), this.dirty = !0, !r) {
				let n = this.getNodes(), r = [], o = !1;
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					Gd(t, i) ? r.push(t) : o = !0;
				}
				if (o && r.length > 0) if (t) {
					let e = r[0];
					q(e) ? e.selectStart() : e.getParentOrThrow().selectStart();
				} else {
					let e = r[r.length - 1];
					q(e) ? e.selectEnd() : e.getParentOrThrow().selectEnd();
				}
				a.anchorNode === e.startContainer && a.anchorOffset === e.startOffset || function(e) {
					let t = e.focus, n = e.anchor, r = n.key, i = n.offset, a = n.type;
					n.set(t.key, t.offset, t.type, !0), t.set(r, i, a, !0);
				}(this);
			}
		}
		n === "lineboundary" && Jl(this, e, t, n, "decorators");
	}
	forwardDeletion(e, t, n) {
		if (!n && (e.type === "element" && q(t) && e.offset === t.getChildrenSize() || e.type === "text" && e.offset === t.getTextContentSize())) {
			let e = t.getParent(), n = t.getNextSibling() || (e === null ? null : e.getNextSibling());
			if (q(n) && n.isShadowRoot()) return !0;
		}
		return !1;
	}
	deleteCharacter(e) {
		let t = this.isCollapsed();
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			let r = Jf(rp(t, e ? "previous" : "next"));
			if (r.getTextSlices().every((e) => e === null || e.distance === 0)) {
				let e = { type: "initial" };
				for (let t of r.iterNodeCarets("shadowRoot")) if (Ff(t)) {
					if (!t.origin.isInline()) {
						if (t.origin.isShadowRoot()) {
							if (e.type === "merge-block") break;
							if (q(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								let e = fp(t);
								op(this, Xf(e, e)), r.anchor.origin.remove();
							}
							return;
						}
						e.type !== "merge-next-block" && e.type !== "merge-block" || (e = {
							block: e.block,
							caret: t,
							type: "merge-block"
						});
					}
				} else {
					if (e.type === "merge-block") break;
					if (Pf(t)) {
						if (q(t.origin)) {
							if (t.origin.isInline()) {
								if (!t.origin.isParentOf(r.anchor.origin)) break;
							} else e = {
								block: t.origin,
								type: "merge-next-block"
							};
							continue;
						}
						if (wu(t.origin)) {
							if (!t.origin.isIsolated()) if (e.type === "merge-next-block" && (t.origin.isKeyboardSelectable() || !t.origin.isInline()) && q(r.anchor.origin) && r.anchor.origin.isEmpty()) {
								r.anchor.origin.remove();
								let e = Fl();
								e.add(t.origin.getKey()), vd(e);
							} else t.origin.remove();
							return;
						}
						break;
					}
				}
				if (e.type === "merge-block") {
					let { caret: t, block: n } = e;
					return op(this, Xf(!t.origin.isEmpty() && n.isEmpty() ? cp(zf(n, t.direction)) : r.anchor, t)), this.removeText();
				}
			}
			let i = this.focus;
			if (this.modify("extend", e, "character"), this.isCollapsed()) {
				if (e && t.offset === 0 && Tl(this, t.getNode())) return;
			} else {
				let r = i.type === "text" ? i.getNode() : null;
				if (n = t.type === "text" ? t.getNode() : null, r !== null && r.isSegmented()) {
					let t = i.offset, a = r.getTextContentSize();
					if (r.is(n) || e && t !== a || !e && t !== 0) return void Dl(r, e, t);
				} else if (n !== null && n.isSegmented()) {
					let i = t.offset, a = n.getTextContentSize();
					if (n.is(r) || e && i !== 0 || !e && i !== a) return void Dl(n, e, i);
				}
				(function(e, t) {
					let n = e.anchor, r = e.focus, i = n.getNode();
					if (i === r.getNode() && n.type === "text" && r.type === "text") {
						let e = n.offset, a = r.offset, o = e < a, s = o ? e : a, c = o ? a : e, l = c - 1;
						s !== l && (function(e) {
							return !(bd(e) || El(e));
						})(i.getTextContent().slice(s, c)) && (t ? r.set(r.key, l, r.type) : n.set(n.key, l, n.type));
					}
				})(this, e);
			}
		}
		if (this.removeText(), e && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
			let e = this.anchor.getNode();
			e.isEmpty() && Eu(e.getParent()) && e.getPreviousSibling() === null && Tl(this, e);
		}
	}
	deleteLine(e) {
		this.isCollapsed() && this.modify("extend", e, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(e) : this.removeText();
	}
	deleteWord(e) {
		if (this.isCollapsed()) {
			let t = this.anchor, n = t.getNode();
			if (this.forwardDeletion(t, n, e)) return;
			this.modify("extend", e, "word");
		}
		this.removeText();
	}
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
};
function Sl(e) {
	return e instanceof bl;
}
function Cl(e) {
	let t = e.offset;
	if (e.type === "text") return t;
	let n = e.getNode();
	return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
function wl(e) {
	let t = e.getStartEndPoints();
	if (t === null) return [0, 0];
	let [n, r] = t;
	return n.type === "element" && r.type === "element" && n.key === r.key && n.offset === r.offset ? [0, 0] : [Cl(n), Cl(r)];
}
function Tl(e, t) {
	for (let n = t; n; n = n.getParent()) {
		if (q(n)) {
			if (n.collapseAtStart(e)) return !0;
			if (Xd(n)) break;
		}
		if (n.getPreviousSibling()) break;
	}
	return !1;
}
var El = (() => {
	try {
		let e = /* @__PURE__ */ RegExp("\\p{Emoji}", "u"), t = e.test.bind(e);
		if (t("❤️") && t("#️⃣") && t("👍")) return t;
	} catch {}
	return () => !1;
})();
function Dl(e, t, n) {
	let r = e, i = r.getTextContent().split(/(?=\s)/g), a = i.length, o = 0, s = 0;
	for (let e = 0; e < a; e++) {
		let r = e === a - 1;
		if (s = o, o += i[e].length, t && o === n || o > n || r) {
			i.splice(e, 1), r && (s = void 0);
			break;
		}
	}
	let c = i.join("").trim();
	c === "" ? r.remove() : (r.setTextContent(c), r.select(s, s));
}
function Ol(e, t, n, r) {
	let i, a = t;
	if (sf(e)) {
		let o = !1, s = e.childNodes, c = s.length, l = r._blockCursorElement;
		a === c && (o = !0, a = c - 1);
		let u = s[a], d = !1;
		if (u === l) u = s[a + 1], d = !0;
		else if (l !== null) {
			let n = l.parentNode;
			e === n && t > Array.prototype.indexOf.call(n.children, l) && a--;
		}
		if (i = yd(u), W(i)) a = Vf(i, o ? "next" : "previous");
		else {
			let s = yd(e);
			if (s === null) return null;
			if (q(s)) {
				let c = r.getElementByKey(s.getKey());
				c === null && H(214);
				let l = s.getDOMSlot(c);
				[s, a] = l.resolveChildIndex(s, c, e, t), q(s) || H(215), o && a >= s.getChildrenSize() && (a = Math.max(0, s.getChildrenSize() - 1));
				let u = s.getChildAtIndex(a);
				if (q(u) && function(e, t, n) {
					let r = e.getParent();
					return n === null || r === null || !r.canBeEmpty() || r !== n.getNode();
				}(u, 0, n)) {
					let e = o ? u.getLastDescendant() : u.getFirstDescendant();
					e === null ? s = u : (u = e, s = q(u) ? u : u.getParentOrThrow()), a = 0;
				}
				W(u) ? (i = u, s = null, a = Vf(u, o ? "next" : "previous")) : u !== s && o && !d && (q(s) || H(216), a = Math.min(s.getChildrenSize(), a + 1));
			} else {
				let n = s.getIndexWithinParent();
				a = t === 0 && wu(s) && yd(e) === s ? n : n + 1, s = s.getParentOrThrow();
			}
			if (q(s)) return _l(s.__key, a, "element");
		}
	} else i = yd(e);
	return W(i) ? _l(i.__key, Vf(i, a, "clamp"), "text") : null;
}
function kl(e, t, n) {
	let r = e.offset, i = e.getNode();
	if (r === 0) {
		let r = i.getPreviousSibling(), a = i.getParent();
		if (t) {
			if ((n || !t) && r === null && q(a) && a.isInline()) {
				let t = a.getPreviousSibling();
				W(t) && e.set(t.__key, t.getTextContent().length, "text");
			}
		} else q(r) && !n && r.isInline() ? e.set(r.__key, r.getChildrenSize(), "element") : W(r) && e.set(r.__key, r.getTextContent().length, "text");
	} else if (r === i.getTextContent().length) {
		let r = i.getNextSibling(), a = i.getParent();
		if (t && q(r) && r.isInline()) e.set(r.__key, 0, "element");
		else if ((n || t) && r === null && q(a) && a.isInline() && !a.canInsertTextAfter()) {
			let t = a.getNextSibling();
			W(t) && e.set(t.__key, 0, "text");
		}
	}
}
function Al(e, t, n) {
	if (e.type === "text" && t.type === "text") {
		let r = e.isBefore(t), i = e.is(t);
		kl(e, r, i), kl(t, !r, i), i && t.set(e.key, e.offset, e.type);
		let a = au();
		if (a.isComposing() && a._compositionKey !== e.key && G(n)) {
			let r = n.anchor, i = n.focus;
			e.set(r.key, r.offset, r.type, !0), t.set(i.key, i.offset, i.type, !0);
		}
	}
}
function jl(e, t, n, r, i, a) {
	if (e === null || n === null || !qu(i, e, n)) return null;
	let o = Ol(e, t, G(a) ? a.anchor : null, i);
	if (o === null) return null;
	let s = Ol(n, r, G(a) ? a.focus : null, i);
	if (s === null) return null;
	if (o.type === "element" && s.type === "element") {
		let t = yd(e), r = yd(n);
		if (wu(t) && wu(r)) return null;
	}
	return Al(o, s, a), [o, s];
}
function Ml(e) {
	return q(e) && !e.isInline();
}
function Nl(e, t, n, r, i, a) {
	let o = iu(), s = new xl(_l(e, t, i), _l(n, r, a), 0, "");
	return s.dirty = !0, o._selection = s, s;
}
function Pl() {
	return new xl(_l("root", 0, "element"), _l("root", 0, "element"), 0, "");
}
function Fl() {
	return new bl(/* @__PURE__ */ new Set());
}
function Il(e, t) {
	return Ll(null, e, t, null);
}
function Ll(e, t, n, r) {
	let i = n._window;
	if (i === null) return null;
	let a = r || i.event, o = a ? a.type : void 0, s = o === "selectionchange", c = !Qa && (s || o === "beforeinput" || o === "compositionstart" || o === "compositionend" || o === "click" && a && a.detail === 3 || o === "drop" || o === void 0), l, u, d, f;
	if (G(e) && !c) return e.clone();
	if (t === null) return null;
	if (l = t.anchorNode, u = t.focusNode, d = t.anchorOffset, f = t.focusOffset, (s || o === void 0) && G(e) && !qu(n, l, u)) return e.clone();
	let p = jl(l, d, u, f, n, e);
	if (p === null) return null;
	let [m, h] = p;
	return new xl(m, h, G(e) ? e.format : 0, G(e) ? e.style : "");
}
function K() {
	return iu()._selection;
}
function Rl() {
	return au()._editorState._selection;
}
function zl(e, t, n, r = 1) {
	let i = e.anchor, a = e.focus, o = i.getNode(), s = a.getNode();
	if (!t.is(o) && !t.is(s)) return;
	let c = t.__key;
	if (e.isCollapsed()) {
		let t = i.offset;
		if (n <= t && r > 0 || n < t && r < 0) {
			let n = Math.max(0, t + r);
			i.set(c, n, "element"), a.set(c, n, "element"), Bl(e);
		}
	} else {
		let o = e.isBackward(), s = o ? a : i, l = s.getNode(), u = o ? i : a, d = u.getNode();
		if (t.is(l)) {
			let e = s.offset;
			(n <= e && r > 0 || n < e && r < 0) && s.set(c, Math.max(0, e + r), "element");
		}
		if (t.is(d)) {
			let e = u.offset;
			(n <= e && r > 0 || n < e && r < 0) && u.set(c, Math.max(0, e + r), "element");
		}
	}
	Bl(e);
}
function Bl(e) {
	let t = e.anchor, n = t.offset, r = e.focus, i = r.offset, a = t.getNode(), o = r.getNode();
	if (e.isCollapsed()) {
		if (!q(a)) return;
		let e = a.getChildrenSize(), i = n >= e, o = i ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (W(o)) {
			let e = 0;
			i && (e = o.getTextContentSize()), t.set(o.__key, e, "text"), r.set(o.__key, e, "text");
		}
		return;
	}
	if (q(a)) {
		let e = a.getChildrenSize(), r = n >= e, i = r ? a.getChildAtIndex(e - 1) : a.getChildAtIndex(n);
		if (W(i)) {
			let e = 0;
			r && (e = i.getTextContentSize()), t.set(i.__key, e, "text");
		}
	}
	if (q(o)) {
		let e = o.getChildrenSize(), t = i >= e, n = t ? o.getChildAtIndex(e - 1) : o.getChildAtIndex(i);
		if (W(n)) {
			let e = 0;
			t && (e = n.getTextContentSize()), r.set(n.__key, e, "text");
		}
	}
}
function Vl(e, t, n, r, i) {
	let a = null, o = 0, s = null;
	r === null ? i !== null && (a = i.__key, W(i) ? s = "text" : q(i) && (s = "element")) : (a = r.__key, W(r) ? (o = r.getTextContentSize(), s = "text") : q(r) && (o = r.getChildrenSize(), s = "element")), a !== null && s !== null ? e.set(a, o, s) : (o = t.getIndexWithinParent(), o === -1 && (o = n.getChildrenSize()), e.set(n.__key, o, "element"));
}
function Hl(e, t, n, r, i) {
	e.type === "text" ? e.set(n, e.offset + (t ? 0 : i), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Ul(e, t, n, r, i) {
	try {
		e.setBaseAndExtent(t, n, r, i);
	} catch {}
}
function Wl(e, t, n, r, i, a, o) {
	let s = r.anchorNode, c = r.focusNode, l = r.anchorOffset, u = r.focusOffset, d = document.activeElement;
	if (i.has("collaboration") && d !== a || d !== null && Ku(d)) return;
	if (!G(t)) return void (e !== null && qu(n, s, c) && r.removeAllRanges());
	let f = t.anchor, p = t.focus, m = f.key, h = p.key, g = Bd(n, m), _ = Bd(n, h), v = f.offset, y = p.offset, b = t.format, x = t.style, S = t.isCollapsed(), C = g, ee = _, te = !1;
	if (f.type === "text") {
		C = nd(g);
		let e = f.getNode();
		te = e.getFormat() !== b || e.getStyle() !== x;
	} else G(e) && e.anchor.type === "text" && (te = !0);
	var ne, re, ie, ae, oe;
	if (p.type === "text" && (ee = nd(_)), C !== null && ee !== null && (S && (e === null || te || G(e) && (e.format !== b || e.style !== x)) && (ne = b, re = x, ie = v, ae = m, oe = performance.now(), _c = [
		ne,
		re,
		ie,
		ae,
		oe
	]), l !== v || u !== y || s !== C || c !== ee || r.type === "Range" && S || (d !== null && a.contains(d) || i.has("skip-selection-focus") || a.focus({ preventScroll: !0 }), f.type === "element"))) {
		if (Ul(r, C, v, ee, y), !Sa || !t.isCollapsed() || a === null || i.has("skip-selection-focus") || document.activeElement !== null && a.contains(document.activeElement) || a.focus({ preventScroll: !0 }), !i.has("skip-scroll-into-view") && t.isCollapsed() && a !== null && a === document.activeElement) {
			let e = G(t) && t.anchor.type === "element" ? C.childNodes[v] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
			if (e !== null) {
				let t;
				if (e instanceof Text) {
					let n = document.createRange();
					n.selectNode(e), t = n.getBoundingClientRect();
				} else t = e.getBoundingClientRect();
				(function(e, t, n) {
					let r = Hd(n), i = Kd(r);
					if (r === null || i === null) return;
					let { top: a, bottom: o } = t, s = 0, c = 0, l = n;
					for (; l !== null;) {
						let t = l === r.body;
						if (t) s = 0, c = qd(e).innerHeight;
						else {
							let e = l.getBoundingClientRect();
							s = e.top, c = e.bottom;
						}
						let n = 0;
						if (a < s ? n = -(s - a) : o > c && (n = o - c), n !== 0) if (t) i.scrollBy(0, n);
						else {
							let e = l.scrollTop;
							l.scrollTop += n;
							let t = l.scrollTop - e;
							a -= t, o -= t;
						}
						if (t) break;
						l = Vd(l);
					}
				})(n, t, a);
			}
		}
		uc = !0;
	}
}
function Gl(e) {
	let t = K() || Rl();
	t === null && (t = gd().selectEnd()), t.insertNodes(e);
}
function Kl(e) {
	let t = e;
	e.isCollapsed() || t.removeText();
	let n = K();
	G(n) && (t = n), G(t) || H(161);
	let r = t.anchor, i = r.getNode(), a = r.offset;
	for (; !ff(i);) {
		let e = i;
		if ([i, a] = ql(i, a), e.is(i)) break;
	}
	return a;
}
function ql(e, t) {
	let n = e.getParent();
	if (!n) {
		let e = J();
		return gd().append(e), e.select(), [gd(), 0];
	}
	if (W(e)) {
		let r = e.splitText(t);
		if (r.length === 0) return [n, e.getIndexWithinParent()];
		let i = t === 0 ? 0 : 1;
		return [n, r[0].getIndexWithinParent() + i];
	}
	if (!q(e) || t === 0) return [n, e.getIndexWithinParent()];
	let r = e.getChildAtIndex(t);
	if (r) {
		let n = new xl(_l(e.__key, t, "element"), _l(e.__key, t, "element"), 0, ""), i = e.insertNewAfter(n);
		i && i.append(r, ...r.getNextSiblings());
	}
	return [n, e.getIndexWithinParent() + 1];
}
function Jl(e, t, n, r, i = "decorators-and-blocks") {
	if (t === "move" && r === "character" && !e.isCollapsed()) {
		let [t, r] = n === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
		return r.set(t.key, t.offset, t.type), !0;
	}
	let a = rp(e.focus, n ? "previous" : "next"), o = r === "lineboundary", s = t === "move", c = a, l = i === "decorators-and-blocks";
	if (!pp(c)) {
		for (let e of c) {
			l = !1;
			let { origin: t } = e;
			if (!wu(t) || t.isIsolated() || (c = e, !o || !t.isInline())) break;
		}
		if (l) for (let e of Jf(a).iterNodeCarets(t === "extend" ? "shadowRoot" : "root")) {
			if (Ff(e)) e.origin.isInline() || (c = e);
			else {
				if (q(e.origin)) continue;
				wu(e.origin) && !e.origin.isInline() && (c = e);
			}
			break;
		}
	}
	if (c === a) return !1;
	if (s && !o && wu(c.origin) && c.origin.isKeyboardSelectable()) {
		let e = Fl();
		return e.add(c.origin.getKey()), vd(e), !0;
	}
	return c = fp(c), s && ip(e.anchor, c), ip(e.focus, c), l || !o;
}
var Yl = null, Xl = null, Zl = !1, Ql = !1, $l = 0, eu = {
	characterData: !0,
	childList: !0,
	subtree: !0
};
function tu() {
	return Zl || Yl !== null && Yl._readOnly;
}
function nu() {
	Zl && H(13);
}
function ru() {
	$l > 99 && H(14);
}
function iu() {
	return Yl === null && H(195, ou()), Yl;
}
function au() {
	return Xl === null && H(196, ou()), Xl;
}
function ou() {
	let e = 0, t = /* @__PURE__ */ new Set(), n = Ru.version;
	if (typeof window < "u") for (let r of document.querySelectorAll("[contenteditable]")) {
		let i = Xu(r);
		if (Ju(i)) e++;
		else if (i) {
			let e = String(i.constructor.version || "<0.17.1");
			e === n && (e += " (separately built, likely a bundler configuration issue)"), t.add(e);
		}
	}
	let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
	return t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`), r;
}
function su() {
	return Xl;
}
function cu(e, t, n) {
	let r = t.__type, i = Hu(e, r), a = n.get(r);
	a === void 0 && (a = Array.from(i.transforms), n.set(r, a));
	let o = a.length;
	for (let e = 0; e < o && (a[e](t), t.isAttached()); e++);
}
function lu(e, t) {
	return e !== void 0 && e.__key !== t && e.isAttached();
}
function uu(e, t) {
	if (!t) return;
	let n = e._updateTags, r = t;
	Array.isArray(t) || (r = [t]);
	for (let e of r) n.add(e);
}
function du(e) {
	return fu(e, au()._nodes);
}
function fu(e, t) {
	let n = e.type, r = t.get(n);
	r === void 0 && H(17, n);
	let i = r.klass;
	e.type !== i.getType() && H(18, i.name);
	let a = i.importJSON(e), o = e.children;
	if (q(a) && Array.isArray(o)) for (let e = 0; e < o.length; e++) {
		let n = fu(o[e], t);
		a.append(n);
	}
	return a;
}
function pu(e, t, n) {
	let r = Yl, i = Zl, a = Xl;
	Yl = t, Zl = !0, Xl = e;
	try {
		return n();
	} finally {
		Yl = r, Zl = i, Xl = a;
	}
}
function mu(e, t) {
	let n = e._pendingEditorState, r = e._rootElement, i = e._headless || r === null;
	if (n === null) return;
	let a = e._editorState, o = a._selection, s = n._selection, c = e._dirtyType !== 0, l = Yl, u = Zl, d = Xl, f = e._updating, p = e._observer, m = null;
	if (e._pendingEditorState = null, e._editorState = n, !i && c && p !== null) {
		Xl = e, Yl = n, Zl = !1, e._updating = !0;
		try {
			let t = e._dirtyType, r = e._dirtyElements, i = e._dirtyLeaves;
			p.disconnect(), m = as(a, n, e, t, r, i);
		} catch (t) {
			if (t instanceof Error && e._onError(t), Ql) throw t;
			Fu(e, null, r, n), so(e), e._dirtyType = 2, Ql = !0, mu(e, a), Ql = !1;
			return;
		} finally {
			p.observe(r, eu), e._updating = f, Yl = l, Zl = u, Xl = d;
		}
	}
	n._readOnly ||= !0;
	let h = e._dirtyLeaves, g = e._dirtyElements, _ = e._normalizedNodes, v = e._updateTags, y = e._deferred;
	c && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), function(e, t) {
		let n = e._decorators, r = e._pendingDecorators || n, i = t._nodeMap, a;
		for (a in r) i.has(a) || (r === n && (r = md(e)), delete r[a]);
	}(e, n);
	let b = i ? null : rf(qd(e));
	if (e._editable && b !== null && (c || s === null || s.dirty || !s.is(o)) && r !== null && !v.has("skip-dom-selection")) {
		Xl = e, Yl = n;
		try {
			if (p !== null && p.disconnect(), c || s === null || s.dirty) {
				let t = e._blockCursorElement;
				t !== null && nf(t, e, r), Wl(o, s, e, b, v, r);
			}
			(function(e, t, n) {
				let r = e._blockCursorElement;
				if (G(n) && n.isCollapsed() && n.anchor.type === "element" && t.contains(document.activeElement)) {
					let i = n.anchor, a = i.getNode(), o = i.offset, s = !1, c = null;
					if (o === a.getChildrenSize()) tf(a.getChildAtIndex(o - 1)) && (s = !0);
					else {
						let t = a.getChildAtIndex(o);
						if (t !== null && tf(t)) {
							let n = t.getPreviousSibling();
							(n === null || tf(n)) && (s = !0, c = e.getElementByKey(t.__key));
						}
					}
					if (s) {
						let n = e.getElementByKey(a.__key);
						r === null && (e._blockCursorElement = r = function(e) {
							let t = e.theme, n = document.createElement("div");
							n.contentEditable = "false", n.setAttribute("data-lexical-cursor", "true");
							let r = t.blockCursor;
							return r !== void 0 && (typeof r == "string" && (r = t.blockCursor = bp(r)), r !== void 0 && n.classList.add(...r)), n;
						}(e._config)), t.style.caretColor = "transparent", c === null ? n.appendChild(r) : n.insertBefore(r, c);
						return;
					}
				}
				r !== null && nf(r, e, t);
			})(e, r, s);
		} finally {
			p !== null && p.observe(r, eu), Xl = d, Yl = l;
		}
	}
	m !== null && function(e, t, n, r, i) {
		let a = Array.from(e._listeners.mutation), o = a.length;
		for (let e = 0; e < o; e++) {
			let [o, s] = a[e];
			for (let e of s) {
				let a = t.get(e);
				a !== void 0 && o(a, {
					dirtyLeaves: r,
					prevEditorState: i,
					updateTags: n
				});
			}
		}
	}(e, m, v, h, a), G(s) || s === null || o !== null && o.is(s) || e.dispatchCommand(ss, void 0);
	let x = e._pendingDecorators;
	x !== null && (e._decorators = x, e._pendingDecorators = null, hu("decorator", e, !0, x)), function(e, t, n) {
		let r = hd(t), i = hd(n);
		r !== i && hu("textcontent", e, !0, i);
	}(e, t || a, n), hu("update", e, !0, {
		dirtyElements: g,
		dirtyLeaves: h,
		editorState: n,
		mutatedNodes: m,
		normalizedNodes: _,
		prevEditorState: t || a,
		tags: v
	}), function(e, t) {
		if (e._deferred = [], t.length !== 0) {
			let n = e._updating;
			e._updating = !0;
			try {
				for (let e = 0; e < t.length; e++) t[e]();
			} finally {
				e._updating = n;
			}
		}
	}(e, y), function(e) {
		let t = e._updates;
		if (t.length !== 0) {
			let n = t.shift();
			if (n) {
				let [t, r] = n;
				_u(e, t, r);
			}
		}
	}(e);
}
function hu(e, t, n, ...r) {
	let i = t._updating;
	t._updating = n;
	try {
		let n = Array.from(t._listeners[e]);
		for (let e = 0; e < n.length; e++) n[e].apply(null, r);
	} finally {
		t._updating = i;
	}
}
function gu(e, t) {
	let n = e._updates, r = t || !1;
	for (; n.length !== 0;) {
		let t = n.shift();
		if (t) {
			let [n, i] = t, a = e._pendingEditorState, o;
			i !== void 0 && (o = i.onUpdate, i.skipTransforms && (r = !0), i.discrete && (a === null && H(191), a._flushSync = !0), o && e._deferred.push(o), uu(e, i.tag)), a == null ? _u(e, n, i) : n();
		}
	}
	return r;
}
function _u(e, t, n) {
	let r = e._updateTags, i, a = !1, o = !1;
	n !== void 0 && (i = n.onUpdate, uu(e, n.tag), a = n.skipTransforms || !1, o = n.discrete || !1), i && e._deferred.push(i);
	let s = e._editorState, c = e._pendingEditorState, l = !1;
	(c === null || c._readOnly) && (c = e._pendingEditorState = Du(c || s), l = !0), c._flushSync = o;
	let u = Yl, d = Zl, f = Xl, p = e._updating;
	Yl = c, Zl = !1, e._updating = !0, Xl = e;
	let m = e._headless || e.getRootElement() === null;
	Bu(null);
	try {
		l && (m ? s._selection !== null && (c._selection = s._selection.clone()) : c._selection = function(e, t) {
			let n = e.getEditorState()._selection, r = rf(qd(e));
			return G(n) || n == null ? Ll(n, r, e, t) : n.clone();
		}(e, n && n.event || null));
		let r = e._compositionKey;
		t(), a = gu(e, a), function(e, t) {
			let n = t.getEditorState()._selection, r = e._selection;
			if (G(r)) {
				let e = r.anchor, t = r.focus, i;
				if (e.type === "text" && (i = e.getNode(), i.selectionTransform(n, r)), t.type === "text") {
					let e = t.getNode();
					i !== e && e.selectionTransform(n, r);
				}
			}
		}(c, e), e._dirtyType !== 0 && (a ? function(e, t) {
			let n = t._dirtyLeaves, r = e._nodeMap;
			for (let e of n) {
				let t = r.get(e);
				W(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && wo(t);
			}
		}(c, e) : function(e, t) {
			let n = t._dirtyLeaves, r = t._dirtyElements, i = e._nodeMap, a = ld(), o = /* @__PURE__ */ new Map(), s = n, c = s.size, l = r, u = l.size;
			for (; c > 0 || u > 0;) {
				if (c > 0) {
					t._dirtyLeaves = /* @__PURE__ */ new Set();
					for (let e of s) {
						let r = i.get(e);
						W(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && wo(r), r !== void 0 && lu(r, a) && cu(t, r, o), n.add(e);
					}
					if (s = t._dirtyLeaves, c = s.size, c > 0) {
						$l++;
						continue;
					}
				}
				t._dirtyLeaves = /* @__PURE__ */ new Set(), t._dirtyElements = /* @__PURE__ */ new Map(), l.delete("root") && l.set("root", !0);
				for (let e of l) {
					let n = e[0], s = e[1];
					if (r.set(n, s), !s) continue;
					let c = i.get(n);
					c !== void 0 && lu(c, a) && cu(t, c, o);
				}
				s = t._dirtyLeaves, c = s.size, l = t._dirtyElements, u = l.size, $l++;
			}
			t._dirtyLeaves = n, t._dirtyElements = r;
		}(c, e), gu(e), function(e, t, n, r) {
			let i = e._nodeMap, a = t._nodeMap, o = [];
			for (let [e] of r) {
				let t = a.get(e);
				t !== void 0 && (t.isAttached() || (q(t) && Za(t, e, i, a, o, r), i.has(e) || r.delete(e), o.push(e)));
			}
			for (let e of o) a.delete(e);
			for (let e of n) {
				let t = a.get(e);
				t === void 0 || t.isAttached() || (i.has(e) || n.delete(e), a.delete(e));
			}
		}(s, c, e._dirtyLeaves, e._dirtyElements)), r !== e._compositionKey && (c._flushSync = !0);
		let i = c._selection;
		if (G(i)) {
			let e = c._nodeMap, t = i.anchor.key, n = i.focus.key;
			e.get(t) !== void 0 && e.get(n) !== void 0 || H(19);
		} else Sl(i) && i._nodes.size === 0 && (c._selection = null);
	} catch (t) {
		t instanceof Error && e._onError(t), e._pendingEditorState = s, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), mu(e);
		return;
	} finally {
		Yl = u, Zl = d, Xl = f, e._updating = p, $l = 0;
	}
	e._dirtyType !== 0 || e._deferred.length > 0 || function(e, t) {
		let n = t.getEditorState()._selection, r = e._selection;
		if (r !== null) {
			if (r.dirty || !r.is(n)) return !0;
		} else if (n !== null) return !0;
		return !1;
	}(c, e) ? c._flushSync ? (c._flushSync = !1, mu(e)) : l && Wu(() => {
		mu(e);
	}) : (c._flushSync = !1, l && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function vu(e, t, n) {
	Xl === e && n === void 0 ? t() : _u(e, t, n);
}
var yu = class e {
	element;
	before;
	after;
	constructor(e, t, n) {
		this.element = e, this.before = t || null, this.after = n || null;
	}
	withBefore(t) {
		return new e(this.element, t, this.after);
	}
	withAfter(t) {
		return new e(this.element, this.before, t);
	}
	withElement(t) {
		return this.element === t ? this : new e(t, this.before, this.after);
	}
	insertChild(e) {
		let t = this.before || this.getManagedLineBreak();
		return t !== null && t.parentElement !== this.element && H(222), this.element.insertBefore(e, t), this;
	}
	removeChild(e) {
		return e.parentElement !== this.element && H(223), this.element.removeChild(e), this;
	}
	replaceChild(e, t) {
		return t.parentElement !== this.element && H(224), this.element.replaceChild(e, t), this;
	}
	getFirstChild() {
		let e = this.after ? this.after.nextSibling : this.element.firstChild;
		return e === this.before || e === this.getManagedLineBreak() ? null : e;
	}
	getManagedLineBreak() {
		return this.element.__lexicalLineBreak || null;
	}
	setManagedLineBreak(e) {
		if (e === null) this.removeManagedLineBreak();
		else {
			let t = e === "decorator" && (ka || Ta || wa);
			this.insertManagedLineBreak(t);
		}
	}
	removeManagedLineBreak() {
		let e = this.getManagedLineBreak();
		if (e) {
			let t = this.element, n = e.nodeName === "IMG" ? e.nextSibling : null;
			n && t.removeChild(n), t.removeChild(e), t.__lexicalLineBreak = void 0;
		}
	}
	insertManagedLineBreak(e) {
		let t = this.getManagedLineBreak();
		if (t) {
			if (e === (t.nodeName === "IMG")) return;
			this.removeManagedLineBreak();
		}
		let n = this.element, r = this.before, i = document.createElement("br");
		if (n.insertBefore(i, r), e) {
			let e = document.createElement("img");
			e.setAttribute("data-lexical-linebreak", "true"), e.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", e.alt = "", n.insertBefore(e, i), n.__lexicalLineBreak = e;
		} else n.__lexicalLineBreak = i;
	}
	getFirstChildOffset() {
		let e = 0;
		for (let t = this.after; t !== null; t = t.previousSibling) e++;
		return e;
	}
	resolveChildIndex(e, t, n, r) {
		if (n === this.element) {
			let t = this.getFirstChildOffset();
			return [e, Math.min(t + e.getChildrenSize(), Math.max(t, r))];
		}
		let i = bu(t, n);
		i.push(r);
		let a = bu(t, this.element), o = e.getIndexWithinParent();
		for (let e = 0; e < a.length; e++) {
			let t = i[e], n = a[e];
			if (t === void 0 || t < n) break;
			if (t > n) {
				o += 1;
				break;
			}
		}
		return [e.getParentOrThrow(), o];
	}
};
function bu(e, t) {
	let n = [], r = t;
	for (; r !== e && r !== null; r = r.parentNode) {
		let e = 0;
		for (let t = r.previousSibling; t !== null; t = t.previousSibling) e++;
		n.push(e);
	}
	return r !== e && H(225), n.reverse();
}
var xu = class extends Bc {
	__first;
	__last;
	__size;
	__format;
	__style;
	__indent;
	__dir;
	__textFormat;
	__textStyle;
	constructor(e) {
		super(e), this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__key === e.__key && (this.__first = e.__first, this.__last = e.__last, this.__size = e.__size), this.__indent = e.__indent, this.__format = e.__format, this.__style = e.__style, this.__dir = e.__dir, this.__textFormat = e.__textFormat, this.__textStyle = e.__textStyle;
	}
	getFormat() {
		return this.getLatest().__format;
	}
	getFormatType() {
		return qa[this.getFormat()] || "";
	}
	getStyle() {
		return this.getLatest().__style;
	}
	getIndent() {
		return this.getLatest().__indent;
	}
	getChildren() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t), t = t.getNextSibling();
		return e;
	}
	getChildrenKeys() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) e.push(t.__key), t = t.getNextSibling();
		return e;
	}
	getChildrenSize() {
		return this.getLatest().__size;
	}
	isEmpty() {
		return this.getChildrenSize() === 0;
	}
	isDirty() {
		let e = au()._dirtyElements;
		return e !== null && e.has(this.__key);
	}
	isLastChild() {
		let e = this.getLatest(), t = this.getParentOrThrow().getLastChild();
		return t !== null && t.is(e);
	}
	getAllTextNodes() {
		let e = [], t = this.getFirstChild();
		for (; t !== null;) {
			if (W(t) && e.push(t), q(t)) {
				let n = t.getAllTextNodes();
				e.push(...n);
			}
			t = t.getNextSibling();
		}
		return e;
	}
	getFirstDescendant() {
		let e = this.getFirstChild();
		for (; q(e);) {
			let t = e.getFirstChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getLastDescendant() {
		let e = this.getLastChild();
		for (; q(e);) {
			let t = e.getLastChild();
			if (t === null) break;
			e = t;
		}
		return e;
	}
	getDescendantByIndex(e) {
		let t = this.getChildren(), n = t.length;
		if (e >= n) {
			let e = t[n - 1];
			return q(e) && e.getLastDescendant() || e || null;
		}
		let r = t[e];
		return q(r) && r.getFirstDescendant() || r || null;
	}
	getFirstChild() {
		let e = this.getLatest().__first;
		return e === null ? null : ud(e);
	}
	getFirstChildOrThrow() {
		let e = this.getFirstChild();
		return e === null && H(45, this.__key), e;
	}
	getLastChild() {
		let e = this.getLatest().__last;
		return e === null ? null : ud(e);
	}
	getLastChildOrThrow() {
		let e = this.getLastChild();
		return e === null && H(96, this.__key), e;
	}
	getChildAtIndex(e) {
		let t = this.getChildrenSize(), n, r;
		if (e < t / 2) {
			for (n = this.getFirstChild(), r = 0; n !== null && r <= e;) {
				if (r === e) return n;
				n = n.getNextSibling(), r++;
			}
			return null;
		}
		for (n = this.getLastChild(), r = t - 1; n !== null && r >= e;) {
			if (r === e) return n;
			n = n.getPreviousSibling(), r--;
		}
		return null;
	}
	getTextContent() {
		let e = "", t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContent(), q(i) && r !== n - 1 && !i.isInline() && (e += Ba);
		}
		return e;
	}
	getTextContentSize() {
		let e = 0, t = this.getChildren(), n = t.length;
		for (let r = 0; r < n; r++) {
			let i = t[r];
			e += i.getTextContentSize(), q(i) && r !== n - 1 && !i.isInline() && (e += 2);
		}
		return e;
	}
	getDirection() {
		return this.getLatest().__dir;
	}
	getTextFormat() {
		return this.getLatest().__textFormat;
	}
	hasFormat(e) {
		if (e !== "") {
			let t = Ka[e];
			return (this.getFormat() & t) !== 0;
		}
		return !1;
	}
	hasTextFormat(e) {
		let t = Wa[e];
		return (this.getTextFormat() & t) !== 0;
	}
	getFormatFlags(e, t) {
		return rd(this.getLatest().__textFormat, e, t);
	}
	getTextStyle() {
		return this.getLatest().__textStyle;
	}
	select(e, t) {
		nu();
		let n = K(), r = e, i = t, a = this.getChildrenSize();
		if (!this.canBeEmpty()) {
			if (e === 0 && t === 0) {
				let e = this.getFirstChild();
				if (W(e) || q(e)) return e.select(0, 0);
			} else if (!(e !== void 0 && e !== a || t !== void 0 && t !== a)) {
				let e = this.getLastChild();
				if (W(e) || q(e)) return e.select();
			}
		}
		r === void 0 && (r = a), i === void 0 && (i = a);
		let o = this.__key;
		return G(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : Nl(o, r, o, i, "element", "element");
	}
	selectStart() {
		let e = this.getFirstDescendant();
		return e ? e.selectStart() : this.select();
	}
	selectEnd() {
		let e = this.getLastDescendant();
		return e ? e.selectEnd() : this.select();
	}
	clear() {
		let e = this.getWritable();
		return this.getChildren().forEach((e) => e.remove()), e;
	}
	append(...e) {
		return this.splice(this.getChildrenSize(), 0, e);
	}
	setDirection(e) {
		let t = this.getWritable();
		return t.__dir = e, t;
	}
	setFormat(e) {
		return this.getWritable().__format = e === "" ? 0 : Ka[e], this;
	}
	setStyle(e) {
		return this.getWritable().__style = e || "", this;
	}
	setTextFormat(e) {
		let t = this.getWritable();
		return t.__textFormat = e, t;
	}
	setTextStyle(e) {
		let t = this.getWritable();
		return t.__textStyle = e, t;
	}
	setIndent(e) {
		return this.getWritable().__indent = e, this;
	}
	splice(e, t, n) {
		zc(this) && H(324, this.__key, this.__type);
		let r = this.getChildrenSize(), i = this.getWritable();
		e + t <= r || H(226, String(e), String(t), String(r));
		let a = i.__key, o = [], s = [], c = this.getChildAtIndex(e + t), l = null, u = r - t + n.length;
		if (e !== 0) if (e === r) l = this.getLastChild();
		else {
			let t = this.getChildAtIndex(e);
			t !== null && (l = t.getPreviousSibling());
		}
		if (t > 0) {
			let e = l === null ? this.getFirstChild() : l.getNextSibling();
			for (let n = 0; n < t; n++) {
				e === null && H(100);
				let t = e.getNextSibling(), n = e.__key;
				od(e.getWritable()), s.push(n), e = t;
			}
		}
		let d = l;
		for (let e of n) {
			d !== null && e.is(d) && (l = d = d.getPreviousSibling());
			let t = e.getWritable();
			t.__parent === a && u--, od(t);
			let n = e.__key;
			if (d === null) i.__first = n, t.__prev = null;
			else {
				let e = d.getWritable();
				e.__next = n, t.__prev = e.__key;
			}
			e.__key === a && H(76), t.__parent = a, o.push(n), d = e;
		}
		if (e + t === r) d !== null && (d.getWritable().__next = null, i.__last = d.__key);
		else if (c !== null) {
			let e = c.getWritable();
			if (d !== null) {
				let t = d.getWritable();
				e.__prev = d.__key, t.__next = c.__key;
			} else e.__prev = null;
		}
		if (i.__size = u, s.length) {
			let e = K();
			if (G(e)) {
				let t = new Set(s), n = new Set(o), { anchor: r, focus: i } = e;
				Su(r, t, n) && Vl(r, r.getNode(), this, l, c), Su(i, t, n) && Vl(i, i.getNode(), this, l, c), u !== 0 || this.canBeEmpty() || Xd(this) || this.remove();
			}
		}
		return i;
	}
	getDOMSlot(e) {
		return new yu(e);
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (sf(t)) {
			let e = this.getIndent();
			e > 0 && (t.style.paddingInlineStart = 40 * e + "px");
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	exportJSON() {
		let e = {
			children: [],
			direction: this.getDirection(),
			format: this.getFormatType(),
			indent: this.getIndent(),
			...super.exportJSON()
		}, t = this.getTextFormat(), n = this.getTextStyle();
		return t === 0 && n === "" || Xd(this) || this.getChildren().some(W) || (t !== 0 && (e.textFormat = t), n !== "" && (e.textStyle = n)), e;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setFormat(e.format).setIndent(e.indent).setDirection(e.direction).setTextFormat(e.textFormat || 0).setTextStyle(e.textStyle || "");
	}
	insertNewAfter(e, t) {
		return null;
	}
	canIndent() {
		return !0;
	}
	collapseAtStart(e) {
		return !1;
	}
	excludeFromCopy(e) {
		return !1;
	}
	canReplaceWith(e) {
		return !0;
	}
	canInsertAfter(e) {
		return !0;
	}
	canBeEmpty() {
		return !0;
	}
	canInsertTextBefore() {
		return !0;
	}
	canInsertTextAfter() {
		return !0;
	}
	isInline() {
		return !1;
	}
	isShadowRoot() {
		return !1;
	}
	canMergeWith(e) {
		return !1;
	}
	extractWithChild(e, t, n) {
		return !1;
	}
	canMergeWhenEmpty() {
		return !1;
	}
	reconcileObservedMutation(e, t) {
		let n = this.getDOMSlot(e), r = n.getFirstChild();
		for (let e = this.getFirstChild(); e; e = e.getNextSibling()) {
			let i = t.getElementByKey(e.getKey());
			i !== null && (r == null ? (n.insertChild(i), r = i) : r !== i && n.replaceChild(i, r), r = r.nextSibling);
		}
	}
};
function q(e) {
	return e instanceof xu;
}
function Su(e, t, n) {
	let r = e.getNode();
	for (; r;) {
		let e = r.__key;
		if (t.has(e) && !n.has(e)) return !0;
		r = r.getParent();
	}
	return !1;
}
var Cu = class extends Bc {
	decorate(e, t) {
		return null;
	}
	isIsolated() {
		return !1;
	}
	isInline() {
		return !0;
	}
	isKeyboardSelectable() {
		return !0;
	}
};
function wu(e) {
	return e instanceof Cu;
}
var Tu = class e extends xu {
	__cachedText;
	static getType() {
		return "root";
	}
	static clone() {
		return new e();
	}
	constructor() {
		super("root"), this.__cachedText = null;
	}
	getTopLevelElementOrThrow() {
		H(51);
	}
	getTextContent() {
		let e = this.__cachedText;
		return !tu() && au()._dirtyType !== 0 || e === null ? super.getTextContent() : e;
	}
	remove() {
		H(52);
	}
	replace(e) {
		H(53);
	}
	insertBefore(e) {
		H(54);
	}
	insertAfter(e) {
		H(55);
	}
	updateDOM(e, t) {
		return !1;
	}
	splice(e, t, n) {
		for (let e of n) q(e) || wu(e) || H(282);
		return super.splice(e, t, n);
	}
	static importJSON(e) {
		return gd().updateFromJSON(e);
	}
	collapseAtStart() {
		return !0;
	}
};
function Eu(e) {
	return e instanceof Tu;
}
function Du(e) {
	return new Au(new Map(e._nodeMap));
}
function Ou() {
	return new Au(/* @__PURE__ */ new Map([["root", new Tu()]]));
}
function ku(e) {
	let t = e.exportJSON(), n = e.constructor;
	if (t.type !== n.getType() && H(130, n.name), q(e)) {
		let r = t.children;
		Array.isArray(r) || H(59, n.name);
		let i = e.getChildren();
		for (let e = 0; e < i.length; e++) {
			let t = ku(i[e]);
			r.push(t);
		}
	}
	return t;
}
var Au = class e {
	_nodeMap;
	_selection;
	_flushSync;
	_readOnly;
	constructor(e, t) {
		this._nodeMap = e, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
	}
	isEmpty() {
		return this._nodeMap.size === 1 && this._selection === null;
	}
	read(e, t) {
		return pu(t && t.editor || null, this, e);
	}
	clone(t) {
		let n = new e(this._nodeMap, t === void 0 ? this._selection : t);
		return n._readOnly = !0, n;
	}
	toJSON() {
		return pu(null, this, () => ({ root: ku(gd()) }));
	}
}, ju = class extends xu {
	static getType() {
		return "artificial";
	}
	createDOM(e) {
		return document.createElement("div");
	}
}, Mu = class e extends xu {
	static getType() {
		return "paragraph";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("p"), n = Fd(e.theme, "paragraph");
		return n !== void 0 && t.classList.add(...n), t;
	}
	updateDOM(e, t, n) {
		return !1;
	}
	static importDOM() {
		return { p: (e) => ({
			conversion: Nu,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (sf(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
		}
		return { element: t };
	}
	static importJSON(e) {
		return J().updateFromJSON(e);
	}
	exportJSON() {
		let e = super.exportJSON();
		if (e.textFormat === void 0 || e.textStyle === void 0) {
			let t = this.getChildren().find(W);
			t ? (e.textFormat = t.getFormat(), e.textStyle = t.getStyle()) : (e.textFormat = this.getTextFormat(), e.textStyle = this.getTextStyle());
		}
		return e;
	}
	insertNewAfter(e, t) {
		let n = J();
		n.setTextFormat(e.format), n.setTextStyle(e.style);
		let r = this.getDirection();
		return n.setDirection(r), n.setFormat(this.getFormatType()), n.setStyle(this.getStyle()), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = this.getChildren();
		if (e.length === 0 || W(e[0]) && e[0].getTextContent().trim() === "") {
			if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
			if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
		}
		return !1;
	}
};
function Nu(e) {
	let t = J();
	return e.style && (t.setFormat(e.style.textAlign), yf(e, t)), { node: t };
}
function J() {
	return Qd(new Mu());
}
function Pu(e) {
	return e instanceof Mu;
}
function Fu(e, t, n, r) {
	let i = e._keyToDOMMap;
	i.clear(), e._editorState = Ou(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
	let a = e._observer;
	a !== null && (a.disconnect(), e._observer = null), t !== null && (t.textContent = ""), n !== null && (n.textContent = "", i.set("root", n));
}
function Iu(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = e;
	for (; r;) {
		let { ownNodeConfig: e } = Cf(r), i = r.transform;
		if (!n.has(i)) {
			n.add(i);
			let e = r.transform();
			e && t.add(e);
		}
		if (e) {
			let n = e.$transform;
			n && t.add(n), r = e.extends;
		} else {
			let e = Object.getPrototypeOf(r);
			r = e.prototype instanceof Bc && e !== Bc ? e : void 0;
		}
	}
	return t;
}
function Lu(e) {
	let t = e || {}, n = su(), r = t.theme || {}, i = e === void 0 ? n : t.parentEditor || null, a = t.disableEvents || !1, o = Ou(), s = t.namespace || (i === null ? Sd() : i._config.namespace), c = t.editorState, l = [
		Tu,
		nl,
		Gc,
		pl,
		Mu,
		ju,
		...t.nodes || []
	], { onError: u, html: d } = t, f = t.editable === void 0 || t.editable, p;
	if (e === void 0 && n !== null) p = n._nodes;
	else {
		p = /* @__PURE__ */ new Map();
		for (let e = 0; e < l.length; e++) {
			let t = l[e], n = null, r = null;
			if (typeof t != "function") {
				let e = t;
				t = e.replace, n = e.with, r = e.withKlass || null;
			}
			Cf(t);
			let i = t.getType(), a = Iu(t);
			p.set(i, {
				exportDOM: d && d.export ? d.export.get(t) : void 0,
				klass: t,
				replace: n,
				replaceWithKlass: r,
				sharedNodeState: po(l[e]),
				transforms: a
			});
		}
	}
	let m = new Ru(o, i, p, {
		disableEvents: a,
		namespace: s,
		theme: r
	}, u || console.error, function(e, t) {
		let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), i = (e) => {
			Object.keys(e).forEach((t) => {
				let r = n.get(t);
				r === void 0 && (r = [], n.set(t, r)), r.push(e[t]);
			});
		};
		return e.forEach((e) => {
			let t = e.klass.importDOM;
			if (t == null || r.has(t)) return;
			r.add(t);
			let n = t.call(e.klass);
			n !== null && i(n);
		}), t && i(t), n;
	}(p, d ? d.import : void 0), f, e);
	return c !== void 0 && (m._pendingEditorState = c, m._dirtyType = 2), function(e) {
		e.registerCommand(us, wc, 0), e.registerCommand(ds, Tc, 0), e.registerCommand(fs, Ec, 0), e.registerCommand(ps, Dc, 0), e.registerCommand(Ts, kc, 0);
	}(m), m;
}
var Ru = class {
	static version;
	_headless;
	_parentEditor;
	_rootElement;
	_editorState;
	_pendingEditorState;
	_compositionKey;
	_deferred;
	_keyToDOMMap;
	_updates;
	_updating;
	_listeners;
	_commands;
	_nodes;
	_decorators;
	_pendingDecorators;
	_config;
	_dirtyType;
	_cloneNotNeeded;
	_dirtyLeaves;
	_dirtyElements;
	_normalizedNodes;
	_updateTags;
	_observer;
	_key;
	_onError;
	_htmlConversions;
	_window;
	_editable;
	_blockCursorElement;
	_createEditorArgs;
	constructor(e, t, n, r, i, a, o, s) {
		this._createEditorArgs = s, this._parentEditor = t, this._rootElement = null, this._editorState = e, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = {
			decorator: /* @__PURE__ */ new Set(),
			editable: /* @__PURE__ */ new Set(),
			mutation: /* @__PURE__ */ new Map(),
			root: /* @__PURE__ */ new Set(),
			textcontent: /* @__PURE__ */ new Set(),
			update: /* @__PURE__ */ new Set()
		}, this._commands = /* @__PURE__ */ new Map(), this._config = r, this._nodes = n, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Sd(), this._onError = i, this._htmlConversions = a, this._editable = o, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
	}
	isComposing() {
		return this._compositionKey != null;
	}
	registerUpdateListener(e) {
		let t = this._listeners.update;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerEditableListener(e) {
		let t = this._listeners.editable;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerDecoratorListener(e) {
		let t = this._listeners.decorator;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerTextContentListener(e) {
		let t = this._listeners.textcontent;
		return t.add(e), () => {
			t.delete(e);
		};
	}
	registerRootListener(e) {
		let t = this._listeners.root;
		return e(this._rootElement, null), t.add(e), () => {
			e(null, this._rootElement), t.delete(e);
		};
	}
	registerCommand(e, t, n) {
		n === void 0 && H(35);
		let r = this._commands;
		r.has(e) || r.set(e, [
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set(),
			/* @__PURE__ */ new Set()
		]);
		let i = r.get(e);
		i === void 0 && H(36, String(e));
		let a = i[n];
		return a.add(t), () => {
			a.delete(t), i.every((e) => e.size === 0) && r.delete(e);
		};
	}
	registerMutationListener(e, t, n) {
		let r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass, i = this._listeners.mutation, a = i.get(t);
		a === void 0 && (a = /* @__PURE__ */ new Set(), i.set(t, a)), a.add(r);
		let o = n && n.skipInitialization;
		return o !== void 0 && o || this.initializeMutationListener(t, r), () => {
			a.delete(r), a.size === 0 && i.delete(t);
		};
	}
	getRegisteredNode(e) {
		let t = this._nodes.get(e.getType());
		return t === void 0 && H(37, e.name), t;
	}
	resolveRegisteredNodeAfterReplacements(e) {
		for (; e.replaceWithKlass;) e = this.getRegisteredNode(e.replaceWithKlass);
		return e;
	}
	initializeMutationListener(e, t) {
		let n = this._editorState, r = gf(n).get(t.getType());
		if (!r) return;
		let i = /* @__PURE__ */ new Map();
		for (let e of r.keys()) i.set(e, "created");
		i.size > 0 && e(i, {
			dirtyLeaves: /* @__PURE__ */ new Set(),
			prevEditorState: n,
			updateTags: /* @__PURE__ */ new Set(["registerMutationListener"])
		});
	}
	registerNodeTransformToKlass(e, t) {
		let n = this.getRegisteredNode(e);
		return n.transforms.add(t), n;
	}
	registerNodeTransform(e, t) {
		let n = this.registerNodeTransformToKlass(e, t), r = [n], i = n.replaceWithKlass;
		if (i != null) {
			let e = this.registerNodeTransformToKlass(i, t);
			r.push(e);
		}
		return function(e, t) {
			let n = gf(e.getEditorState()), r = [];
			for (let e of t) {
				let t = n.get(e);
				t && r.push(t);
			}
			r.length !== 0 && e.update(() => {
				for (let e of r) for (let t of e.keys()) {
					let e = ud(t);
					e && e.markDirty();
				}
			}, e._pendingEditorState === null ? { tag: Uc } : void 0);
		}(this, r.map((e) => e.klass.getType())), () => {
			r.forEach((e) => e.transforms.delete(t));
		};
	}
	hasNode(e) {
		return this._nodes.has(e.getType());
	}
	hasNodes(e) {
		return e.every(this.hasNode.bind(this));
	}
	dispatchCommand(e, t) {
		return Y(this, e, t);
	}
	getDecorators() {
		return this._decorators;
	}
	getRootElement() {
		return this._rootElement;
	}
	getKey() {
		return this._key;
	}
	setRootElement(e) {
		let t = this._rootElement;
		if (e !== t) {
			let n = Fd(this._config.theme, "root"), r = this._pendingEditorState || this._editorState;
			if (this._rootElement = e, Fu(this, t, e, r), t !== null && (this._config.disableEvents || Fc(t), n != null && t.classList.remove(...n)), e !== null) {
				let t = Kd(e), r = e.style;
				r.userSelect = "text", r.whiteSpace = "pre-wrap", r.wordBreak = "break-word", e.setAttribute("data-lexical-editor", "true"), this._window = t, this._dirtyType = 2, so(this), this._updateTags.add(Uc), mu(this), this._config.disableEvents || function(e, t) {
					let n = e.ownerDocument;
					cc.set(e, n);
					let r = lc.get(n) ?? 0;
					r < 1 && n.addEventListener("selectionchange", Mc), lc.set(n, r + 1), e.__lexicalEditor = t;
					let i = Ac(e);
					for (let n = 0; n < rc.length; n++) {
						let [r, a] = rc[n], o = typeof a == "function" ? (e) => {
							Pc(e) || (Nc(e), (t.isEditable() || r === "click") && a(e, t));
						} : (e) => {
							if (Pc(e)) return;
							Nc(e);
							let n = t.isEditable();
							switch (r) {
								case "cut": return n && Y(t, qs, e);
								case "copy": return Y(t, Ks, e);
								case "paste": return n && Y(t, vs, e);
								case "dragstart": return n && Y(t, Us, e);
								case "dragover": return n && Y(t, Ws, e);
								case "dragend": return n && Y(t, Gs, e);
								case "focus": return n && Y(t, $s, e);
								case "blur": return n && Y(t, ec, e);
								case "drop": return n && Y(t, Vs, e);
							}
						};
						e.addEventListener(r, o), i.push(() => {
							e.removeEventListener(r, o);
						});
					}
				}(e, this), n != null && e.classList.add(...n);
			} else this._window = null, this._updateTags.add(Uc), mu(this);
			hu("root", this, !1, e, t);
		}
	}
	getElementByKey(e) {
		return this._keyToDOMMap.get(e) || null;
	}
	getEditorState() {
		return this._editorState;
	}
	setEditorState(e, t) {
		e.isEmpty() && H(38);
		let n = e;
		n._readOnly && (n = Du(e), n._selection = e._selection ? e._selection.clone() : null), oo(this);
		let r = this._pendingEditorState, i = this._updateTags, a = t === void 0 ? null : t.tag;
		r === null || r.isEmpty() || (a != null && i.add(a), mu(this)), this._pendingEditorState = n, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, a != null && i.add(a), this._updating || mu(this);
	}
	parseEditorState(e, t) {
		return function(e, t, n) {
			let r = Ou(), i = Yl, a = Zl, o = Xl, s = t._dirtyElements, c = t._dirtyLeaves, l = t._cloneNotNeeded, u = t._dirtyType;
			t._dirtyElements = /* @__PURE__ */ new Map(), t._dirtyLeaves = /* @__PURE__ */ new Set(), t._cloneNotNeeded = /* @__PURE__ */ new Set(), t._dirtyType = 0, Yl = r, Zl = !1, Xl = t, Bu(null);
			try {
				let i = t._nodes;
				fu(e.root, i), n && n(), r._readOnly = !0;
			} catch (e) {
				e instanceof Error && t._onError(e);
			} finally {
				t._dirtyElements = s, t._dirtyLeaves = c, t._cloneNotNeeded = l, t._dirtyType = u, Yl = i, Zl = a, Xl = o;
			}
			return r;
		}(typeof e == "string" ? JSON.parse(e) : e, this, t);
	}
	read(e) {
		return mu(this), this.getEditorState().read(e, { editor: this });
	}
	update(e, t) {
		(function(e, t, n) {
			e._updating ? e._updates.push([t, n]) : _u(e, t, n);
		})(this, e, t);
	}
	focus(e, t = {}) {
		let n = this._rootElement;
		n !== null && (n.setAttribute("autocapitalize", "off"), vu(this, () => {
			let r = K(), i = gd();
			r === null ? i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()) : r.dirty || vd(r.clone()), Ud("focus"), Wd(() => {
				n.removeAttribute("autocapitalize"), e && e();
			});
		}), this._pendingEditorState === null && n.removeAttribute("autocapitalize"));
	}
	blur() {
		let e = this._rootElement;
		e !== null && e.blur();
		let t = rf(this._window);
		t !== null && t.removeAllRanges();
	}
	isEditable() {
		return this._editable;
	}
	setEditable(e) {
		this._editable !== e && (this._editable = e, hu("editable", this, !0, e));
	}
	toJSON() {
		return { editorState: this._editorState.toJSON() };
	}
};
Ru.version = "0.40.0+prod.esm";
var zu = null;
function Bu(e) {
	zu = e;
}
var Vu = 1;
function Hu(e, t) {
	let n = Uu(e, t);
	return n === void 0 && H(30, t), n;
}
function Uu(e, t) {
	return e._nodes.get(t);
}
var Wu = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
	Promise.resolve().then(e);
};
function Gu(e) {
	return wu(pd(e));
}
function Ku(e) {
	let t = document.activeElement;
	if (!sf(t)) return !1;
	let n = t.nodeName;
	return wu(pd(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && Xu(t) == null);
}
function qu(e, t, n) {
	let r = e.getRootElement();
	try {
		return r !== null && r.contains(t) && r.contains(n) && t !== null && !Ku(t) && Yu(t) === e;
	} catch {
		return !1;
	}
}
function Ju(e) {
	return e instanceof Ru;
}
function Yu(e) {
	let t = e;
	for (; t != null;) {
		let e = Xu(t);
		if (Ju(e)) return e;
		t = Vd(t);
	}
	return null;
}
function Xu(e) {
	return e ? e.__lexicalEditor : null;
}
function Zu(e) {
	return Ha.test(e) ? "rtl" : Ua.test(e) ? "ltr" : null;
}
function Qu(e) {
	return hl(e) || e.isToken();
}
function $u(e) {
	return Qu(e) || e.isSegmented();
}
function ed(e) {
	return cf(e) && e.nodeType === 3;
}
function td(e) {
	return cf(e) && e.nodeType === 9;
}
function nd(e) {
	let t = e;
	for (; t != null;) {
		if (ed(t)) return t;
		t = t.firstChild;
	}
	return null;
}
function rd(e, t, n) {
	let r = Wa[t];
	if (n !== null && (e & r) === (n & r)) return e;
	let i = e ^ r;
	return t === "subscript" ? i &= ~Wa.superscript : t === "superscript" ? i &= ~Wa.subscript : t === "lowercase" ? (i &= ~Wa.uppercase, i &= ~Wa.capitalize) : t === "uppercase" ? (i &= ~Wa.lowercase, i &= ~Wa.capitalize) : t === "capitalize" && (i &= ~Wa.lowercase, i &= ~Wa.uppercase), i;
}
function id(e) {
	return W(e) || Jc(e) || wu(e);
}
function ad(e, t) {
	let n = function() {
		let e = zu;
		return zu = null, e;
	}();
	if ((t ||= n && n.__key) != null) return void (e.__key = t);
	nu(), ru();
	let r = au(), i = iu(), a = "" + Vu++;
	i._nodeMap.set(a, e), q(e) ? r._dirtyElements.set(a, !0) : r._dirtyLeaves.add(a), r._cloneNotNeeded.add(a), r._dirtyType = 1, e.__key = a;
}
function od(e) {
	let t = e.getParent();
	if (t !== null) {
		let n = e.getWritable(), r = t.getWritable(), i = e.getPreviousSibling(), a = e.getNextSibling(), o = a === null ? null : a.__key, s = i === null ? null : i.__key, c = i === null ? null : i.getWritable(), l = a === null ? null : a.getWritable();
		i === null && (r.__first = o), a === null && (r.__last = s), c !== null && (c.__next = o), l !== null && (l.__prev = s), n.__prev = null, n.__next = null, n.__parent = null, r.__size--;
	}
}
function sd(e) {
	ru(), zc(e) && H(323, e.__key, e.__type);
	let t = e.getLatest(), n = t.__parent, r = iu(), i = au(), a = r._nodeMap, o = i._dirtyElements;
	n !== null && function(e, t, n) {
		let r = e;
		for (; r !== null;) {
			if (n.has(r)) return;
			let e = t.get(r);
			if (e === void 0) break;
			n.set(r, !1), r = e.__parent;
		}
	}(n, a, o);
	let s = t.__key;
	i._dirtyType = 1, q(e) ? o.set(s, !0) : i._dirtyLeaves.add(s);
}
function cd(e) {
	nu();
	let t = au(), n = t._compositionKey;
	if (e !== n) {
		if (t._compositionKey = e, n !== null) {
			let e = ud(n);
			e !== null && e.getWritable();
		}
		if (e !== null) {
			let t = ud(e);
			t !== null && t.getWritable();
		}
	}
}
function ld() {
	return tu() ? null : au()._compositionKey;
}
function ud(e, t) {
	let n = (t || iu())._nodeMap.get(e);
	return n === void 0 ? null : n;
}
function dd(e, t) {
	let n = fd(e, au());
	return n === void 0 ? null : ud(n, t);
}
function fd(e, t) {
	return e[`__lexicalKey_${t._key}`];
}
function pd(e, t) {
	let n = e;
	for (; n != null;) {
		let e = dd(n, t);
		if (e !== null) return e;
		n = Vd(n);
	}
	return null;
}
function md(e) {
	let t = e._decorators, n = Object.assign({}, t);
	return e._pendingDecorators = n, n;
}
function hd(e) {
	return e.read(() => gd().getTextContent());
}
function gd() {
	return _d(iu());
}
function _d(e) {
	return e._nodeMap.get("root");
}
function vd(e) {
	nu();
	let t = iu();
	e !== null && (e.dirty = !0, e.setCachedNodes(null)), t._selection = e;
}
function yd(e) {
	let t = au(), n = function(e, t) {
		let n = e;
		for (; n != null;) {
			let e = fd(n, t);
			if (e !== void 0) return e;
			n = Vd(n);
		}
		return null;
	}(e, t);
	return n === null ? e === t.getRootElement() ? ud("root") : null : ud(n);
}
function bd(e) {
	return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function xd(e) {
	let t = [], n = e;
	for (; n !== null;) t.push(n), n = n._parentEditor;
	return t;
}
function Sd() {
	return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Cd(e) {
	return ed(e) ? e.nodeValue : null;
}
function wd(e, t, n) {
	let r = rf(qd(t));
	if (r === null) return;
	let i = r.anchorNode, { anchorOffset: a, focusOffset: o } = r;
	if (i !== null) {
		let t = Cd(i), r = pd(i);
		if (t !== null && W(r)) {
			if (t === za && n) {
				let e = n.length;
				t = n, a = e, o = e;
			}
			t !== null && Td(r, t, a, o, e);
		}
	}
}
function Td(e, t, n, r, i) {
	let a = e;
	if (a.isAttached() && (i || !a.isDirty())) {
		let o = a.isComposing(), s = t;
		(o || i) && t[t.length - 1] === za && (s = t.slice(0, -1));
		let c = a.getTextContent();
		if (i || s !== c) {
			if (s === "") {
				if (cd(null), wa || Ta || ka) a.remove();
				else {
					let e = au();
					setTimeout(() => {
						e.update(() => {
							a.isAttached() && a.remove();
						});
					}, 20);
				}
				return;
			}
			let t = a.getParent(), i = Rl(), c = a.getTextContentSize(), l = ld(), u = a.getKey();
			if (a.isToken() || l !== null && u === l && !o || G(i) && (t !== null && !t.canInsertTextBefore() && i.anchor.offset === 0 || i.anchor.key === e.__key && i.anchor.offset === 0 && !a.canInsertTextBefore() && !o || i.focus.key === e.__key && i.focus.offset === c && !a.canInsertTextAfter() && !o)) return void a.markDirty();
			let d = K();
			if (!G(d) || n === null || r === null) return void Ed(a, s, d);
			if (d.setTextNodeRange(a, n, a, r), a.isSegmented()) {
				let e = dl(a.getTextContent());
				a.replace(e), a = e;
			}
			Ed(a, s, d);
		}
	}
}
function Ed(e, t, n) {
	if (e.setTextContent(t), G(n)) {
		let t = e.getKey();
		for (let r of ["anchor", "focus"]) {
			let i = n[r];
			i.type === "text" && i.key === t && (i.offset = Vf(e, i.offset, "clamp"));
		}
	}
}
function Dd(e, t, n) {
	let r = t[n] || !1;
	return r === "any" || r === e[n];
}
function Od(e, t) {
	return Dd(e, t, "altKey") && Dd(e, t, "ctrlKey") && Dd(e, t, "shiftKey") && Dd(e, t, "metaKey");
}
function kd(e, t, n) {
	return Od(e, n) && e.key.toLowerCase() === t.toLowerCase();
}
var Ad = {
	ctrlKey: !xa,
	metaKey: xa
}, jd = {
	altKey: xa,
	ctrlKey: !xa
};
function Md(e) {
	return e.key === "Backspace";
}
function Nd(e) {
	return kd(e, "a", Ad);
}
function Pd(e) {
	let t = gd();
	if (G(e)) {
		let t = e.anchor, n = e.focus, r = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
		return t.set(r.getKey(), 0, "element"), n.set(r.getKey(), r.getChildrenSize(), "element"), To(e), e;
	}
	{
		let e = t.select(0, t.getChildrenSize());
		return vd(To(e)), e;
	}
}
function Fd(e, t) {
	e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
	let n = e.__lexicalClassNameCache, r = n[t];
	if (r !== void 0) return r;
	let i = e[t];
	if (typeof i == "string") {
		let e = bp(i);
		return n[t] = e, e;
	}
	return i;
}
function Id(e, t, n, r, i) {
	if (n.size === 0) return;
	let a = r.__type, o = r.__key, s = t.get(a);
	s === void 0 && H(33, a);
	let c = s.klass, l = e.get(c);
	l === void 0 && (l = /* @__PURE__ */ new Map(), e.set(c, l));
	let u = l.get(o), d = u === "destroyed" && i === "created";
	(u === void 0 || d) && l.set(o, d ? "updated" : i);
}
function Ld(e, t, n) {
	let r = e.getParent(), i = n, a = e;
	return r !== null && (t && n === 0 ? (i = a.getIndexWithinParent(), a = r) : t || n !== a.getChildrenSize() || (i = a.getIndexWithinParent() + 1, a = r)), a.getChildAtIndex(t ? i - 1 : i);
}
function Rd(e, t) {
	let n = e.offset;
	if (e.type === "element") return Ld(e.getNode(), t, n);
	{
		let r = e.getNode();
		if (t && n === 0 || !t && n === r.getTextContentSize()) {
			let e = t ? r.getPreviousSibling() : r.getNextSibling();
			return e === null ? Ld(r.getParentOrThrow(), t, r.getIndexWithinParent() + +!t) : e;
		}
	}
	return null;
}
function zd(e) {
	let t = qd(e).event, n = t && t.inputType;
	return n === "insertFromPaste" || n === "insertFromPasteAsQuotation";
}
function Y(e, t, n) {
	return function(e, t, n) {
		let r = xd(e);
		for (let i = 4; i >= 0; i--) for (let a = 0; a < r.length; a++) {
			let o = r[a], s = o._commands.get(t);
			if (s !== void 0) {
				let t = s[i];
				if (t !== void 0) {
					let r = Array.from(t), i = r.length, a = !1;
					if (vu(o, () => {
						for (let t = 0; t < i; t++) if (r[t](n, e)) return void (a = !0);
					}), a) return a;
				}
			}
		}
		return !1;
	}(e, t, n);
}
function Bd(e, t) {
	let n = e._keyToDOMMap.get(t);
	return n === void 0 && H(75, t), n;
}
function Vd(e) {
	let t = e.assignedSlot || e.parentElement;
	return lf(t) ? t.host : t;
}
function Hd(e) {
	return td(e) ? e : sf(e) ? e.ownerDocument : null;
}
function Ud(e) {
	nu(), au()._updateTags.add(e);
}
function Wd(e) {
	nu(), au()._deferred.push(e);
}
function Gd(e, t) {
	let n = e.getParent();
	for (; n !== null;) {
		if (n.is(t)) return !0;
		n = n.getParent();
	}
	return !1;
}
function Kd(e) {
	let t = Hd(e);
	return t ? t.defaultView : null;
}
function qd(e) {
	let t = e._window;
	return t === null && H(78), t;
}
function Jd(e) {
	return q(e) && e.isInline() || wu(e) && e.isInline();
}
function Yd(e) {
	let t = e.getParentOrThrow();
	for (; t !== null;) {
		if (Xd(t)) return t;
		t = t.getParentOrThrow();
	}
	return t;
}
function Xd(e) {
	return Eu(e) || q(e) && e.isShadowRoot();
}
function Zd(e) {
	let t = e.constructor.clone(e);
	return ad(t, null), t.afterCloneFrom(e), t;
}
function Qd(e) {
	let t = au(), n = e.getType(), r = Uu(t, n);
	r === void 0 && H(200, e.constructor.name, n);
	let { replace: i, replaceWithKlass: a } = r;
	if (i !== null) {
		let t = i(e), r = t.constructor;
		return a === null ? t instanceof e.constructor && r !== e.constructor || H(202, r.name, r.getType(), e.constructor.name, n) : t instanceof a || H(201, a.name, a.getType(), r.name, r.getType(), e.constructor.name, n), t.__key === e.__key && H(203, e.constructor.name, n, r.name, r.getType()), t;
	}
	return e;
}
function $d(e, t) {
	!Eu(e.getParent()) || q(t) || wu(t) || H(99);
}
function ef(e) {
	let t = ud(e);
	return t === null && H(63, e), t;
}
function tf(e) {
	return (wu(e) || q(e) && !e.canBeEmpty()) && !e.isInline();
}
function nf(e, t, n) {
	n.style.removeProperty("caret-color"), t._blockCursorElement = null;
	let r = e.parentElement;
	r !== null && r.removeChild(e);
}
function rf(e) {
	return ya ? (e || window).getSelection() : null;
}
function af(e) {
	let t = Kd(e);
	return t ? t.getSelection() : null;
}
function of(e) {
	return sf(e) && e.tagName === "A";
}
function sf(e) {
	return cf(e) && e.nodeType === 1;
}
function cf(e) {
	return typeof e == "object" && !!e && "nodeType" in e && typeof e.nodeType == "number";
}
function lf(e) {
	return cf(e) && e.nodeType === 11;
}
function uf(e) {
	let t = /* @__PURE__ */ new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
	return e.nodeName.match(t) !== null;
}
function df(e) {
	let t = /* @__PURE__ */ new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
	return e.nodeName.match(t) !== null;
}
function ff(e) {
	if (wu(e) && !e.isInline()) return !0;
	if (!q(e) || Xd(e)) return !1;
	let t = e.getFirstChild(), n = t === null || Jc(t) || W(t) || t.isInline();
	return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
function pf() {
	return au();
}
var mf = /* @__PURE__ */ new WeakMap(), hf = /* @__PURE__ */ new Map();
function gf(e) {
	if (!e._readOnly && e.isEmpty()) return hf;
	e._readOnly || H(192);
	let t = mf.get(e);
	return t || (t = function(e) {
		let t = /* @__PURE__ */ new Map();
		for (let [n, r] of e._nodeMap) {
			let e = r.__type, i = t.get(e);
			i || (i = /* @__PURE__ */ new Map(), t.set(e, i)), i.set(n, r);
		}
		return t;
	}(e), mf.set(e, t)), t;
}
function _f(e) {
	let t = e.constructor.clone(e);
	return t.afterCloneFrom(e), t;
}
function vf(e) {
	return (t = _f(e))[Rc] = !0, t;
	var t;
}
function yf(e, t) {
	let n = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(n / 40);
	t.setIndent(r);
}
function bf(e) {
	e.__lexicalUnmanaged = !0;
}
function xf(e) {
	return !0 === e.__lexicalUnmanaged;
}
function Sf(e, t) {
	return function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t);
	}(e, t) && e[t] !== Bc[t];
}
function Cf(e) {
	let t = Xa in e.prototype ? e.prototype[Xa]() : void 0, n = function(e) {
		if (!(e === Bc || e.prototype instanceof Bc)) {
			let t = "<unknown>", n = "<unknown>";
			try {
				t = e.getType();
			} catch {}
			try {
				Ru.version && (n = JSON.parse(Ru.version));
			} catch {}
			H(290, e.name, t, n);
		}
		return e === Cu || e === xu || e === Bc;
	}(e), r = !n && Sf(e, "getType") ? e.getType() : void 0, i, a = r;
	if (t) if (r) i = t[r];
	else for (let [e, n] of Object.entries(t)) a = e, i = n;
	if (!n && a && (Sf(e, "getType") || (e.getType = () => a), Sf(e, "clone") || (e.clone = (t) => (Bu(t), new e())), Sf(e, "importJSON") || (e.importJSON = i && i.$importJSON || ((t) => new e().updateFromJSON(t))), !Sf(e, "importDOM") && i)) {
		let { importDOM: t } = i;
		t && (e.importDOM = () => t);
	}
	return {
		ownNodeConfig: i,
		ownNodeType: a
	};
}
function wf(e) {
	let t = pf();
	return nu(), new (t.resolveRegisteredNodeAfterReplacements(t.getRegisteredNode(e))).klass();
}
var X = (e, t) => {
	let n = e;
	for (; n != null && !Eu(n);) {
		if (t(n)) return n;
		n = n.getParent();
	}
	return null;
}, Tf = {
	next: "previous",
	previous: "next"
}, Ef = class {
	origin;
	constructor(e) {
		this.origin = e;
	}
	[Symbol.iterator]() {
		return Zf({
			hasNext: Pf,
			initial: this.getAdjacentCaret(),
			map: (e) => e,
			step: (e) => e.getAdjacentCaret()
		});
	}
	getAdjacentCaret() {
		return zf(this.getNodeAtCaret(), this.direction);
	}
	getSiblingCaret() {
		return zf(this.origin, this.direction);
	}
	remove() {
		let e = this.getNodeAtCaret();
		return e && e.remove(), this;
	}
	replaceOrInsert(e, t) {
		let n = this.getNodeAtCaret();
		return e.is(this.origin) || e.is(n) || (n === null ? this.insert(e) : n.replace(e, t)), this;
	}
	splice(e, t, n = "next") {
		let r = n === this.direction ? t : Array.from(t).reverse(), i = this, a = this.getParentAtCaret(), o = /* @__PURE__ */ new Map();
		for (let t = i.getAdjacentCaret(); t !== null && o.size < e; t = t.getAdjacentCaret()) {
			let e = t.origin.getWritable();
			o.set(e.getKey(), e);
		}
		for (let e of r) {
			if (o.size > 0) {
				let t = i.getNodeAtCaret();
				if (t) {
					if (o.delete(t.getKey()), o.delete(e.getKey()), !(t.is(e) || i.origin.is(e))) {
						let n = e.getParent();
						n && n.is(a) && e.remove(), t.replace(e);
					}
				} else t === null && H(263, Array.from(o).join(" "));
			} else i.insert(e);
			i = zf(e, this.direction);
		}
		for (let e of o.values()) e.remove();
		return this;
	}
}, Df = class e extends Ef {
	type = "child";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : Uf(e, this.direction);
	}
	getParentCaret(e = "root") {
		return zf(Af(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = kf(this.direction);
		return zf(this.getNodeAtCaret(), e) || Uf(this.origin, e);
	}
	getParentAtCaret() {
		return this.origin;
	}
	getChildCaret() {
		return this;
	}
	isSameNodeCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSamePointCaret(e) {
		return this.isSameNodeCaret(e);
	}
}, Of = {
	root: Eu,
	shadowRoot: Xd
};
function kf(e) {
	return Tf[e];
}
function Af(e, t = "root") {
	return Of[t](e) ? null : e;
}
var jf = class e extends Ef {
	type = "sibling";
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : zf(e, this.direction);
	}
	getSiblingCaret() {
		return this;
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return q(this.origin) ? Uf(this.origin, this.direction) : null;
	}
	getParentCaret(e = "root") {
		return zf(Af(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		let e = kf(this.direction);
		return zf(this.getNodeAtCaret(), e) || Uf(this.origin.getParentOrThrow(), e);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin);
	}
	isSameNodeCaret(t) {
		return (t instanceof e || t instanceof Mf) && this.direction === t.direction && this.origin.is(t.origin);
	}
}, Mf = class e extends Ef {
	type = "text";
	offset;
	constructor(e, t) {
		super(e), this.offset = t;
	}
	getLatest() {
		let e = this.origin.getLatest();
		return e === this.origin ? this : Bf(e, this.direction, this.offset);
	}
	getParentAtCaret() {
		return this.origin.getParent();
	}
	getChildCaret() {
		return null;
	}
	getParentCaret(e = "root") {
		return zf(Af(this.getParentAtCaret(), e), this.direction);
	}
	getFlipped() {
		return Bf(this.origin, kf(this.direction), this.offset);
	}
	isSamePointCaret(t) {
		return t instanceof e && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
	}
	isSameNodeCaret(t) {
		return (t instanceof jf || t instanceof e) && this.direction === t.direction && this.origin.is(t.origin);
	}
	getSiblingCaret() {
		return zf(this.origin, this.direction);
	}
};
function Nf(e) {
	return e instanceof Mf;
}
function Pf(e) {
	return e instanceof jf;
}
function Ff(e) {
	return e instanceof Df;
}
var If = {
	next: class extends Mf {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends Mf {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, Lf = {
	next: class extends jf {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getNextSibling();
		}
		insert(e) {
			return this.origin.insertAfter(e), this;
		}
	},
	previous: class extends jf {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getPreviousSibling();
		}
		insert(e) {
			return this.origin.insertBefore(e), this;
		}
	}
}, Rf = {
	next: class extends Df {
		direction = "next";
		getNodeAtCaret() {
			return this.origin.getFirstChild();
		}
		insert(e) {
			return this.origin.splice(0, 0, [e]), this;
		}
	},
	previous: class extends Df {
		direction = "previous";
		getNodeAtCaret() {
			return this.origin.getLastChild();
		}
		insert(e) {
			return this.origin.splice(this.origin.getChildrenSize(), 0, [e]), this;
		}
	}
};
function zf(e, t) {
	return e ? new Lf[t](e) : null;
}
function Bf(e, t, n) {
	return e ? new If[t](e, Vf(e, n)) : null;
}
function Vf(e, t, n = "error") {
	let r = e.getTextContentSize(), i = t === "next" ? r : t === "previous" ? 0 : t;
	return (i < 0 || i > r) && (n !== "clamp" && va(284, String(t), String(r), e.getKey()), i = i < 0 ? 0 : r), i;
}
function Hf(e, t) {
	return new qf(e, t);
}
function Uf(e, t) {
	return q(e) ? new Rf[t](e) : null;
}
function Wf(e) {
	return e && e.getChildCaret() || e;
}
function Gf(e) {
	return e && Wf(e.getAdjacentCaret());
}
var Kf = class e {
	type = "node-caret-range";
	direction;
	anchor;
	focus;
	constructor(e, t, n) {
		this.anchor = e, this.focus = t, this.direction = n;
	}
	getLatest() {
		let t = this.anchor.getLatest(), n = this.focus.getLatest();
		return t === this.anchor && n === this.focus ? this : new e(t, n, this.direction);
	}
	isCollapsed() {
		return this.anchor.isSamePointCaret(this.focus);
	}
	getTextSlices() {
		let e = (e) => {
			let t = this[e].getLatest();
			return Nf(t) ? function(e, t) {
				let { direction: n, origin: r } = e;
				return Hf(e, Vf(r, t === "focus" ? kf(n) : n) - e.offset);
			}(t, e) : null;
		}, t = e("anchor"), n = e("focus");
		if (t && n) {
			let { caret: e } = t, { caret: r } = n;
			if (e.isSameNodeCaret(r)) return [Hf(e, r.offset - e.offset), null];
		}
		return [t, n];
	}
	iterNodeCarets(e = "root") {
		let t = Nf(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), n = this.focus.getLatest(), r = Nf(n), i = (t) => t.isSameNodeCaret(n) ? null : Gf(t) || t.getParentCaret(e);
		return Zf({
			hasNext: (e) => e !== null && !(r && n.isSameNodeCaret(e)),
			initial: t.isSameNodeCaret(n) ? null : i(t),
			map: (e) => e,
			step: i
		});
	}
	[Symbol.iterator]() {
		return this.iterNodeCarets("root");
	}
}, qf = class {
	type = "slice";
	caret;
	distance;
	constructor(e, t) {
		this.caret = e, this.distance = t;
	}
	getSliceIndices() {
		let { distance: e, caret: { offset: t } } = this, n = t + e;
		return n < t ? [n, t] : [t, n];
	}
	getTextContent() {
		let [e, t] = this.getSliceIndices();
		return this.caret.origin.getTextContent().slice(e, t);
	}
	getTextContentSize() {
		return Math.abs(this.distance);
	}
	removeTextSlice() {
		let { caret: { origin: e, direction: t } } = this, [n, r] = this.getSliceIndices(), i = e.getTextContent();
		return Bf(e.setTextContent(i.slice(0, n) + i.slice(r)), t, n);
	}
};
function Jf(e) {
	return Xf(e, zf(gd(), e.direction));
}
function Yf(e) {
	return Xf(e, e);
}
function Xf(e, t) {
	return e.direction !== t.direction && H(265), new Kf(e, t, e.direction);
}
function Zf(e) {
	let { initial: t, hasNext: n, step: r, map: i } = e, a = t;
	return {
		[Symbol.iterator]() {
			return this;
		},
		next() {
			if (!n(a)) return {
				done: !0,
				value: void 0
			};
			let e = {
				done: !1,
				value: i(a)
			};
			return a = r(a), e;
		}
	};
}
function Qf(e, t) {
	let n = np(e.origin, t.origin);
	switch (n === null && H(275, e.origin.getKey(), t.origin.getKey()), n.type) {
		case "same": {
			let n = e.type === "text", r = t.type === "text";
			return n && r ? function(e, t) {
				return Math.sign(e - t);
			}(e.offset, t.offset) : e.type === t.type ? 0 : n ? -1 : r ? 1 : e.type === "child" ? -1 : 1;
		}
		case "ancestor": return e.type === "child" ? -1 : 1;
		case "descendant": return t.type === "child" ? 1 : -1;
		case "branch": return $f(n);
	}
}
function $f(e) {
	let { a: t, b: n } = e, r = t.__key, i = n.__key, a = t, o = n;
	for (; a && o; a = a.getNextSibling(), o = o.getNextSibling()) {
		if (a.__key === i) return -1;
		if (o.__key === r) return 1;
	}
	return a === null ? 1 : -1;
}
function ep(e, t) {
	return t.is(e);
}
function tp(e) {
	return q(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function np(e, t) {
	if (e.is(t)) return {
		commonAncestor: e,
		type: "same"
	};
	let n = /* @__PURE__ */ new Map();
	for (let [t, r] = tp(e); t; r = t, t = t.getParent()) n.set(t, r);
	for (let [r, i] = tp(t); r; i = r, r = r.getParent()) {
		let a = n.get(r);
		if (a !== void 0) return a === null ? (ep(e, r) || H(276), {
			commonAncestor: r,
			type: "ancestor"
		}) : i === null ? (ep(t, r) || H(277), {
			commonAncestor: r,
			type: "descendant"
		}) : ((q(a) || ep(e, a)) && (q(i) || ep(t, i)) && r.is(a.getParent()) && r.is(i.getParent()) || H(278), {
			a,
			b: i,
			commonAncestor: r,
			type: "branch"
		});
	}
	return null;
}
function rp(e, t) {
	let { type: n, key: r, offset: i } = e, a = ef(e.key);
	return n === "text" ? (W(a) || H(266, a.getType(), r), Bf(a, t, i)) : (q(a) || H(267, a.getType(), r), gp(a, e.offset, t));
}
function ip(e, t) {
	let { origin: n, direction: r } = t, i = r === "next";
	Nf(t) ? e.set(n.getKey(), t.offset, "text") : Pf(t) ? W(n) ? e.set(n.getKey(), Vf(n, r), "text") : e.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent() + +!!i, "element") : (Ff(t) && q(n) || H(268), e.set(n.getKey(), i ? 0 : n.getChildrenSize(), "element"));
}
function ap(e) {
	let t = K(), n = G(t) ? t : Pl();
	return op(n, e), vd(n), n;
}
function op(e, t) {
	ip(e.anchor, t.anchor), ip(e.focus, t.focus);
}
function sp(e) {
	let { anchor: t, focus: n } = e, r = rp(t, "next"), i = rp(n, "next"), a = Qf(r, i) <= 0 ? "next" : "previous";
	return Xf(mp(r, a), mp(i, a));
}
function cp(e) {
	let { direction: t, origin: n } = e, r = zf(n, kf(t)).getNodeAtCaret();
	return r ? zf(r, t) : Uf(n.getParentOrThrow(), t);
}
function lp(e, t = "root") {
	let n = [e];
	for (let r = Ff(e) ? e.getParentCaret(t) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(t)) n.push(cp(r));
	return n;
}
function up(e) {
	return !!e && e.origin.isAttached();
}
function dp(e, t = "removeEmptySlices") {
	if (e.isCollapsed()) return e;
	let n = "root", r = "next", i = t, a = hp(e, r), o = lp(a.anchor, n), s = lp(a.focus.getFlipped(), n), c = /* @__PURE__ */ new Set(), l = [];
	for (let e of a.iterNodeCarets(n)) if (Ff(e)) c.add(e.origin.getKey());
	else if (Pf(e)) {
		let { origin: t } = e;
		q(t) && !c.has(t.getKey()) || l.push(t);
	}
	for (let e of l) e.remove();
	for (let e of a.getTextSlices()) {
		if (!e) continue;
		let { origin: t } = e.caret, n = t.getTextContentSize(), a = cp(zf(t, r)), c = t.getMode();
		if (Math.abs(e.distance) === n && i === "removeEmptySlices" || c === "token" && e.distance !== 0) a.remove();
		else if (e.distance !== 0) {
			i = "removeEmptySlices";
			let t = e.removeTextSlice(), n = e.caret.origin;
			if (c === "segmented") {
				let e = t.origin, n = dl(e.getTextContent()).setStyle(e.getStyle()).setFormat(e.getFormat());
				a.replaceOrInsert(n), t = Bf(n, r, t.offset);
			}
			n.is(o[0].origin) && (o[0] = t), n.is(s[0].origin) && (s[0] = t.getFlipped());
		}
	}
	let u, d;
	for (let e of o) if (up(e)) {
		u = fp(e);
		break;
	}
	for (let e of s) if (up(e)) {
		d = fp(e);
		break;
	}
	let f = function(e, t, n) {
		if (!e || !t) return null;
		let r = e.getParentAtCaret(), i = t.getParentAtCaret();
		if (!r || !i) return null;
		let a = r.getParents().reverse();
		a.push(r);
		let o = i.getParents().reverse();
		o.push(i);
		let s = Math.min(a.length, o.length), c;
		for (c = 0; c < s && a[c] === o[c]; c++);
		let l = (e, t) => {
			let n;
			for (let r = c; r < e.length; r++) {
				let i = e[r];
				if (Xd(i)) return;
				!n && t(i) && (n = i);
			}
			return n;
		}, u = l(a, ff), d = u && l(o, (e) => n.has(e.getKey()) && ff(e));
		return u && d ? [u, d] : null;
	}(u, d, c);
	if (f) {
		let [e, t] = f;
		Uf(e, "previous").splice(0, t.getChildren()), t.remove();
	}
	let p = [
		u,
		d,
		...o,
		...s
	].find(up);
	if (p) return Yf(mp(fp(p), e.direction));
	H(269, JSON.stringify(o.map((e) => e.origin.__key)));
}
function fp(e) {
	let t = function(e) {
		let t = e;
		for (; Ff(t);) {
			let e = Gf(t);
			if (!Ff(e)) break;
			t = e;
		}
		return t;
	}(e.getLatest()), { direction: n } = t;
	if (W(t.origin)) return Nf(t) ? t : Bf(t.origin, n, n);
	let r = t.getAdjacentCaret();
	return Pf(r) && W(r.origin) ? Bf(r.origin, n, kf(n)) : t;
}
function pp(e) {
	return Nf(e) && e.offset !== Vf(e.origin, e.direction);
}
function mp(e, t) {
	return e.direction === t ? e : e.getFlipped();
}
function hp(e, t) {
	return e.direction === t ? e : Xf(mp(e.focus, t), mp(e.anchor, t));
}
function gp(e, t, n) {
	let r = Uf(e, "next");
	for (let e = 0; e < t; e++) {
		let e = r.getAdjacentCaret();
		if (e === null) break;
		r = e;
	}
	return mp(r, n);
}
function _p(e) {
	let { origin: t, offset: n, direction: r } = e;
	if (n === Vf(t, r)) return e.getSiblingCaret();
	if (n === Vf(t, kf(r))) return cp(e.getSiblingCaret());
	let [i] = t.splitText(n);
	return W(i) || H(281), mp(zf(i, "next"), r);
}
function vp(e, t) {
	return !0;
}
function yp(e, { $copyElementNode: t = Zd, $splitTextPointCaretNext: n = _p, rootMode: r = "shadowRoot", $shouldSplit: i = vp } = {}) {
	if (Nf(e)) return n(e);
	let a = e.getParentCaret(r);
	if (a) {
		let { origin: n } = a;
		if (Ff(e) && (!n.canBeEmpty() || !i(n, "first"))) return cp(a);
		let r = function(e) {
			let t = [];
			for (let n = e.getAdjacentCaret(); n; n = n.getAdjacentCaret()) t.push(n.origin);
			return t;
		}(e);
		(r.length > 0 || n.canBeEmpty() && i(n, "last")) && a.insert(t(n).splice(0, 0, r));
	}
	return a;
}
function bp(...e) {
	let t = [];
	for (let n of e) if (n && typeof n == "string") for (let [e] of n.matchAll(/\S+/g)) t.push(e);
	return t;
}
function xp(e, ...t) {
	let n = bp(...t);
	n.length > 0 && e.classList.add(...n);
}
function Sp(e, ...t) {
	let n = bp(...t);
	n.length > 0 && e.classList.remove(...n);
}
function Cp(...e) {
	return () => {
		for (let t = e.length - 1; t >= 0; t--) e[t]();
		e.length = 0;
	};
}
//#endregion
//#region node_modules/@lexical/selection/LexicalSelection.prod.mjs
function wp(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var Tp = /* @__PURE__ */ new Map();
function Ep(e) {
	let t = {};
	if (!e) return t;
	let n = e.split(";");
	for (let e of n) if (e !== "") {
		let [n, r] = e.split(/:([^]+)/);
		n && r && (t[n.trim()] = r.trim());
	}
	return t;
}
function Dp(e) {
	let t = Tp.get(e);
	return t === void 0 && (t = Ep(e), Tp.set(e, t)), t;
}
function Op(e) {
	let t = "";
	for (let n in e) n && (t += `${n}: ${e[n]};`);
	return t;
}
function kp(e) {
	let t = pf().getElementByKey(e.getKey());
	if (t === null) return null;
	let n = t.ownerDocument.defaultView;
	return n === null ? null : n.getComputedStyle(t);
}
function Ap(e) {
	return kp(Eu(e) ? e : e.getParentOrThrow());
}
function jp(e) {
	let t = Ap(e);
	return t !== null && t.direction === "rtl";
}
function Mp(e, t, n = "self") {
	let r = e.getStartEndPoints();
	if (t.isSelected(e) && !$u(t) && r !== null) {
		let [i, a] = r, o = e.isBackward(), s = i.getNode(), c = a.getNode(), l = t.is(s), u = t.is(c);
		if (l || u) {
			let [r, i] = wl(e), a = s.is(c), l = t.is(o ? c : s), u = t.is(o ? s : c), d, f = 0;
			a ? (f = r > i ? i : r, d = r > i ? r : i) : l ? (f = o ? i : r, d = void 0) : u && (f = 0, d = o ? r : i);
			let p = t.__text.slice(f, d);
			p !== t.__text && (n === "clone" && (t = vf(t)), t.__text = p);
		}
	}
	return t;
}
function Np(e) {
	if (e.type === "text") return e.offset === e.getNode().getTextContentSize();
	let t = e.getNode();
	return q(t) || wp(177), e.offset === t.getChildrenSize();
}
function Pp(e) {
	let t = e.getStyle(), n = Ep(t);
	Tp.set(t, n);
}
function Fp(e, t) {
	(G(e) ? e.isCollapsed() : W(e) || q(e)) || wp(280);
	let n = Dp(G(e) ? e.style : W(e) ? e.getStyle() : e.getTextStyle()), r = Object.entries(t).reduce((t, [r, i]) => (typeof i == "function" ? t[r] = i(n[r], e) : i === null ? delete t[r] : t[r] = i, t), { ...n }), i = Op(r);
	G(e) || W(e) ? e.setStyle(i) : e.setTextStyle(i), Tp.set(i, r);
}
function Ip(e, t) {
	if (G(e) && e.isCollapsed()) {
		Fp(e, t);
		let n = e.anchor.getNode();
		q(n) && n.isEmpty() && Fp(n, t);
	}
	Lp((e) => {
		Fp(e, t);
	});
	let n = e.getNodes();
	if (n.length > 0) {
		let e = /* @__PURE__ */ new Set();
		for (let r of n) {
			if (!q(r) || !r.canBeEmpty() || r.getChildrenSize() !== 0) continue;
			let n = r.getKey();
			e.has(n) || (e.add(n), Fp(r, t));
		}
	}
}
function Lp(e) {
	let t = K();
	if (!t) return;
	let n = /* @__PURE__ */ new Map(), r = (e) => n.get(e.getKey()) || [0, e.getTextContentSize()];
	if (G(t)) for (let e of sp(t).getTextSlices()) e && n.set(e.caret.origin.getKey(), e.getSliceIndices());
	let i = t.getNodes();
	for (let t of i) {
		if (!W(t) || !t.canHaveFormat()) continue;
		let [n, i] = r(t);
		i !== n && ($u(t) || n === 0 && i === t.getTextContentSize() ? e(t) : e(t.splitText(n, i)[n === 0 ? 0 : 1]));
	}
	G(t) && t.anchor.type === "text" && t.focus.type === "text" && t.anchor.key === t.focus.key && Rp(t);
}
function Rp(e) {
	if (e.isBackward()) {
		let { anchor: t, focus: n } = e, { key: r, offset: i, type: a } = t;
		t.set(n.key, n.offset, n.type), n.set(r, i, a);
	}
}
function zp(e) {
	let t = Bp(e);
	return t !== null && t.writingMode === "vertical-rl";
}
function Bp(e) {
	let t = e.anchor.getNode();
	return q(t) ? kp(t) : Ap(t);
}
function Vp(e, t) {
	let n = zp(e) ? !t : t;
	Up(e) && (n = !n);
	let r = rp(e.focus, n ? "previous" : "next");
	if (pp(r)) return !1;
	for (let e of Jf(r)) {
		if (Ff(e)) return !e.origin.isInline();
		if (!q(e.origin)) {
			if (wu(e.origin)) return !0;
			break;
		}
	}
	return !1;
}
function Hp(e, t, n, r) {
	e.modify(t ? "extend" : "move", n, r);
}
function Up(e) {
	let t = Bp(e);
	return t !== null && t.direction === "rtl";
}
function Wp(e, t, n) {
	let r = Up(e), i;
	i = zp(e) || r ? !n : n, Hp(e, t, i, "character");
}
function Gp(e, t, n) {
	let r = Dp(e.getStyle());
	return r !== null && r[t] || n;
}
function Kp(e, t, n = "") {
	let r = null, i = e.getNodes(), a = e.anchor, o = e.focus, s = e.isBackward(), c = s ? o.offset : a.offset, l = s ? o.getNode() : a.getNode();
	if (G(e) && e.isCollapsed() && e.style !== "") {
		let n = Dp(e.style);
		if (n !== null && t in n) return n[t];
	}
	for (let e = 0; e < i.length; e++) {
		let a = i[e];
		if ((e === 0 || c !== 0 || !a.is(l)) && W(a)) {
			let e = Gp(a, t, n);
			if (r === null) r = e;
			else if (r !== e) {
				r = "";
				break;
			}
		}
	}
	return r === null ? n : r;
}
//#endregion
//#region node_modules/@lexical/utils/LexicalUtils.prod.mjs
function qp(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var Jp = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Yp = Jp && "documentMode" in document ? document.documentMode : null, Xp = Jp && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Zp = Jp && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
!(!Jp || !("InputEvent" in window) || Yp) && "getTargetRanges" in new window.InputEvent("input"), Jp && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Jp && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream, Jp && /Android/.test(navigator.userAgent), Jp && /^(?=.*Chrome).*/i.test(navigator.userAgent), Jp && /AppleWebKit\/[\d.]+/.test(navigator.userAgent);
var Qp = Jp, $p = Xp, em = Zp;
function tm(e) {
	return e ? e.getAdjacentCaret() : null;
}
function nm(e, t) {
	let n = e;
	for (; n != null;) {
		if (n instanceof t) return n;
		n = n.getParent();
	}
	return null;
}
function rm(e) {
	let t = X(e, (e) => q(e) && !e.isInline());
	return q(t) || qp(4, e.__key), t;
}
function im(e) {
	let t = K() || Rl(), n;
	if (G(t)) n = rp(t.focus, "next");
	else {
		if (t != null) {
			let e = t.getNodes(), r = e[e.length - 1];
			r && (n = zf(r, "next"));
		}
		n ||= Uf(gd(), "previous").getFlipped().insert(J());
	}
	let r = am(e, n), i = Gf(r);
	return ap(Yf(Ff(i) ? fp(i) : r)), e.getLatest();
}
function am(e, t, n) {
	let r = mp(t, "next");
	for (let e = r; e; e = yp(e, n)) r = e;
	return Nf(r) && qp(283), r.insert(e.isInline() ? J().append(e) : e), mp(zf(e.getLatest(), "next"), t.direction);
}
function om(e, t) {
	let n = t();
	return e.replace(n), n.append(e), n;
}
function sm(e, t) {
	return e !== null && Object.getPrototypeOf(e).constructor.name === t.name;
}
function cm(e, t) {
	let n = [];
	for (let r = 0; r < e.length; r++) {
		let i = t(e[r]);
		i !== null && n.push(i);
	}
	return n;
}
function lm(e, t) {
	Uf(e, "next").insert(t);
}
var um = !(em || !Qp) && void 0;
function dm(e, t = !1) {
	let n = 1;
	if (function() {
		if (um === void 0) {
			let e = document.createElement("div");
			e.style.cssText = "position: absolute; opacity: 0; width: 100px; left: -1000px;", document.body.appendChild(e);
			let t = e.getBoundingClientRect();
			e.style.setProperty("zoom", "2"), um = e.getBoundingClientRect().width === t.width, document.body.removeChild(e);
		}
		return um;
	}() || t) for (; e;) n *= Number(window.getComputedStyle(e).getPropertyValue("zoom")), e = e.parentElement;
	return n;
}
function fm(e) {
	return e._parentEditor !== null;
}
function pm(e, t) {
	return mm(e, t, null);
}
function mm(e, t, n) {
	let r = !1;
	for (let i of gm(e)) t(i) ? n !== null && n(i) : (r = !0, q(i) && mm(i, t, n || ((e) => i.insertAfter(e))), i.remove());
	return r;
}
function hm(e, t) {
	let n = [], r = Array.from(e).reverse();
	for (let e = r.pop(); e !== void 0; e = r.pop()) if (t(e)) n.push(e);
	else if (q(e)) for (let t of gm(e)) r.push(t);
	return n;
}
function gm(e) {
	return _m(Uf(e, "previous"));
}
function _m(e) {
	return Zf({
		hasNext: Pf,
		initial: e.getAdjacentCaret(),
		map: (e) => e.origin.getLatest(),
		step: (e) => e.getAdjacentCaret()
	});
}
//#endregion
//#region node_modules/@lexical/html/LexicalHtml.prod.mjs
function vm(e, t) {
	let n = td(t) ? t.body.childNodes : t.childNodes, r = [], i = [];
	for (let t of n) if (!xm.has(t.nodeName)) {
		let n = Sm(t, e, i, !1);
		n !== null && (r = r.concat(n));
	}
	return function(e) {
		for (let t of e) t.getNextSibling() instanceof ju && t.insertAfter(qc());
		for (let t of e) {
			let e = t.getChildren();
			for (let n of e) t.insertBefore(n);
			t.remove();
		}
	}(i), r;
}
function ym(e, t) {
	if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
	let n = document.createElement("div"), r = gd().getChildren();
	for (let i = 0; i < r.length; i++) bm(e, r[i], n, t);
	return n.innerHTML;
}
function bm(e, t, n, r = null) {
	let i = r === null || t.isSelected(r), a = q(t) && t.excludeFromCopy("html"), o = t;
	r !== null && W(t) && (o = Mp(r, t, "clone"));
	let s = q(o) ? o.getChildren() : [], c = Uu(e, o.getType()), l;
	l = c && c.exportDOM !== void 0 ? c.exportDOM(e, o) : o.exportDOM(e);
	let { element: u, after: d } = l;
	if (!u) return !1;
	let f = document.createDocumentFragment();
	for (let n = 0; n < s.length; n++) {
		let a = s[n], o = bm(e, a, f, r);
		!i && q(t) && o && t.extractWithChild(a, r, "html") && (i = !0);
	}
	if (i && !a) {
		if ((sf(u) || lf(u)) && u.append(f), n.append(u), d) {
			let e = d.call(o, u);
			e && (lf(u) ? u.replaceChildren(e) : u.replaceWith(e));
		}
	} else n.append(f);
	return i;
}
var xm = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function Sm(e, t, n, r, i = /* @__PURE__ */ new Map(), a) {
	let o = [];
	if (xm.has(e.nodeName)) return o;
	let s = null, c = function(e, t) {
		let { nodeName: n } = e, r = t._htmlConversions.get(n.toLowerCase()), i = null;
		if (r !== void 0) for (let t of r) {
			let n = t(e);
			n !== null && (i === null || (i.priority || 0) <= (n.priority || 0)) && (i = n);
		}
		return i === null ? null : i.conversion;
	}(e, t), l = c ? c(e) : null, u = null;
	if (l !== null) {
		u = l.after;
		let t = l.node;
		if (s = Array.isArray(t) ? t[t.length - 1] : t, s !== null) {
			for (let [, e] of i) if (s = e(s, a), !s) break;
			s && o.push(...Array.isArray(t) ? t : [s]);
		}
		l.forChild != null && i.set(e.nodeName, l.forChild);
	}
	let d = e.childNodes, f = [], p = (s == null || !Xd(s)) && (s != null && Ml(s) || r);
	for (let e = 0; e < d.length; e++) f.push(...Sm(d[e], t, n, p, new Map(i), s));
	return u != null && (f = u(f)), df(e) && (f = Cm(e, f, p ? () => {
		let e = new ju();
		return n.push(e), e;
	} : J)), s == null ? f.length > 0 ? o = o.concat(f) : df(e) && function(e) {
		return e.nextSibling == null || e.previousSibling == null ? !1 : uf(e.nextSibling) && uf(e.previousSibling);
	}(e) && (o = o.concat(qc())) : q(s) && s.append(...f), o;
}
function Cm(e, t, n) {
	let r = e.style.textAlign, i = [], a = [];
	for (let e = 0; e < t.length; e++) {
		let o = t[e];
		if (Ml(o)) r && !o.getFormat() && o.setFormat(r), i.push(o);
		else if (a.push(o), e === t.length - 1 || e < t.length - 1 && Ml(t[e + 1])) {
			let e = n();
			e.setFormat(r), e.append(...a), i.push(e), a = [];
		}
	}
	return i;
}
//#endregion
//#region node_modules/@lexical/clipboard/LexicalClipboard.prod.mjs
function wm(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Tm(e, t = K()) {
	return t ?? wm(166), G(t) && t.isCollapsed() || t.getNodes().length === 0 ? "" : ym(e, t);
}
function Em(e, t = K()) {
	return t ?? wm(166), G(t) && t.isCollapsed() || t.getNodes().length === 0 ? null : JSON.stringify(Am(e, t));
}
function Dm(e, t, n) {
	let r = e.getData("application/x-lexical-editor");
	if (r) try {
		let e = JSON.parse(r);
		if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) return Om(n, jm(e.nodes), t);
	} catch (e) {
		console.error(e);
	}
	let i = e.getData("text/html"), a = e.getData("text/plain");
	if (i && a !== i) try {
		return Om(n, vm(n, new DOMParser().parseFromString(function(e) {
			return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (e) => e }).createHTML(e) : e;
		}(i), "text/html")), t);
	} catch (e) {
		console.error(e);
	}
	let o = a || e.getData("text/uri-list");
	if (o != null) if (G(t)) {
		let e = o.split(/(\r?\n|\t)/);
		e[e.length - 1] === "" && e.pop();
		for (let t = 0; t < e.length; t++) {
			let n = K();
			if (G(n)) {
				let r = e[t];
				r === "\n" || r === "\r\n" ? n.insertParagraph() : r === "	" ? n.insertNodes([ml()]) : n.insertText(r);
			}
		}
	} else t.insertRawText(o);
}
function Om(e, t, n) {
	e.dispatchCommand(cs, {
		nodes: t,
		selection: n
	}) || (n.insertNodes(t), function(e) {
		if (G(e) && e.isCollapsed()) {
			let t = e.anchor, n = null, r = rp(t, "previous");
			if (r) if (Nf(r)) n = r.origin;
			else {
				let e = Xf(r, Uf(gd(), "next").getFlipped());
				for (let t of e) {
					if (W(t.origin)) {
						n = t.origin;
						break;
					}
					if (q(t.origin) && !t.origin.isInline()) break;
				}
			}
			if (n && W(n)) {
				let t = n.getFormat(), r = n.getStyle();
				e.format === t && e.style === r || (e.format = t, e.style = r, e.dirty = !0);
			}
		}
	}(n));
}
function km(e, t, n, r = []) {
	let i = t === null || n.isSelected(t), a = q(n) && n.excludeFromCopy("html"), o = n;
	t !== null && W(o) && (o = Mp(t, o, "clone"));
	let s = q(o) ? o.getChildren() : [], c = function(e) {
		let t = e.exportJSON(), n = e.constructor;
		if (t.type !== n.getType() && wm(58, n.name), q(e)) {
			let e = t.children;
			Array.isArray(e) || wm(59, n.name);
		}
		return t;
	}(o);
	W(o) && o.getTextContentSize() === 0 && (i = !1);
	for (let r = 0; r < s.length; r++) {
		let a = s[r], o = km(e, t, a, c.children);
		!i && q(n) && o && n.extractWithChild(a, t, "clone") && (i = !0);
	}
	if (i && !a) r.push(c);
	else if (Array.isArray(c.children)) for (let e = 0; e < c.children.length; e++) {
		let t = c.children[e];
		r.push(t);
	}
	return i;
}
function Am(e, t) {
	let n = [], r = gd().getChildren();
	for (let i = 0; i < r.length; i++) km(e, t, r[i], n);
	return {
		namespace: e._config.namespace,
		nodes: n
	};
}
function jm(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n], i = du(r);
		W(i) && Pp(i), t.push(i);
	}
	return t;
}
var Mm = null;
async function Nm(e, t, n) {
	if (Mm !== null) return !1;
	if (t !== null) return new Promise((r, i) => {
		e.update(() => {
			r(Pm(e, t, n));
		});
	});
	let r = e.getRootElement(), i = e._window || window, a = i.document, o = rf(i);
	if (r === null || o === null) return !1;
	let s = a.createElement("span");
	s.style.cssText = "position: fixed; top: -1000px;", s.append(a.createTextNode("#")), r.append(s);
	let c = new Range();
	return c.setStart(s, 0), c.setEnd(s, 1), o.removeAllRanges(), o.addRange(c), new Promise((t, r) => {
		let o = e.registerCommand(Ks, (r) => (sm(r, ClipboardEvent) && (o(), Mm !== null && (i.clearTimeout(Mm), Mm = null), t(Pm(e, r, n))), !0), 4);
		Mm = i.setTimeout(() => {
			o(), Mm = null, t(!1);
		}, 50), a.execCommand("copy"), s.remove();
	});
}
function Pm(e, t, n) {
	if (n === void 0) {
		let t = rf(e._window), r = K();
		if (!r || r.isCollapsed() || !t) return !1;
		let i = t.anchorNode, a = t.focusNode;
		if (i !== null && a !== null && !qu(e, i, a)) return !1;
		n = Im(r);
	}
	t.preventDefault();
	let r = t.clipboardData;
	return r !== null && (Lm(r, n), !0);
}
var Fm = [["text/html", Tm], ["application/x-lexical-editor", Em]];
function Im(e = K()) {
	let t = { "text/plain": e ? e.getTextContent() : "" };
	if (e) {
		let n = pf();
		for (let [r, i] of Fm) {
			let a = i(n, e);
			a !== null && (t[r] = a);
		}
	}
	return t;
}
function Lm(e, t) {
	for (let [n] of Fm) t[n] === void 0 && e.setData(n, "");
	for (let n in t) {
		let r = t[n];
		r !== void 0 && e.setData(n, r);
	}
}
//#endregion
//#region node_modules/@lexical/extension/LexicalExtension.prod.mjs
var Rm = Symbol.for("preact-signals");
function zm() {
	if (Um > 1) return void Um--;
	let e, t = !1;
	for (; Vm !== void 0;) {
		let n = Vm;
		for (Vm = void 0, Wm++; n !== void 0;) {
			let r = n.o;
			if (n.o = void 0, n.f &= -3, !(8 & n.f) && Ym(n)) try {
				n.c();
			} catch (n) {
				t ||= (e = n, !0);
			}
			n = r;
		}
	}
	if (Wm = 0, Um--, t) throw e;
}
var Bm, Vm;
function Hm(e) {
	let t = Bm;
	Bm = void 0;
	try {
		return e();
	} finally {
		Bm = t;
	}
}
var Um = 0, Wm = 0, Gm = 0;
function Km(e) {
	if (Bm === void 0) return;
	let t = e.n;
	return t === void 0 || t.t !== Bm ? (t = {
		i: 0,
		S: e,
		p: Bm.s,
		n: void 0,
		t: Bm,
		e: void 0,
		x: void 0,
		r: t
	}, Bm.s !== void 0 && (Bm.s.n = t), Bm.s = t, e.n = t, 32 & Bm.f && e.S(t), t) : t.i === -1 ? (t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = Bm.s, t.n = void 0, Bm.s.n = t, Bm.s = t), t) : void 0;
}
function qm(e, t) {
	this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function Jm(e, t) {
	return new qm(e, t);
}
function Ym(e) {
	for (let t = e.s; t !== void 0; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function Xm(e) {
	for (let t = e.s; t !== void 0; t = t.n) {
		let n = t.S.n;
		if (n !== void 0 && (t.r = n), t.S.n = t, t.i = -1, t.n === void 0) {
			e.s = t;
			break;
		}
	}
}
function Zm(e) {
	let t, n = e.s;
	for (; n !== void 0;) {
		let e = n.p;
		n.i === -1 ? (n.S.U(n), e !== void 0 && (e.n = n.n), n.n !== void 0 && (n.n.p = e)) : t = n, n.S.n = n.r, n.r !== void 0 && (n.r = void 0), n = e;
	}
	e.s = t;
}
function Qm(e, t) {
	qm.call(this, void 0), this.x = e, this.s = void 0, this.g = Gm - 1, this.f = 4, this.W = t?.watched, this.Z = t?.unwatched, this.name = t?.name;
}
function $m(e) {
	let t = e.u;
	if (e.u = void 0, typeof t == "function") {
		Um++;
		let n = Bm;
		Bm = void 0;
		try {
			t();
		} catch (t) {
			throw e.f &= -2, e.f |= 8, eh(e), t;
		} finally {
			Bm = n, zm();
		}
	}
}
function eh(e) {
	for (let t = e.s; t !== void 0; t = t.n) t.S.U(t);
	e.x = void 0, e.s = void 0, $m(e);
}
function th(e) {
	if (Bm !== this) throw Error("Out-of-order effect");
	Zm(this), Bm = e, this.f &= -2, 8 & this.f && eh(this), zm();
}
function nh(e, t) {
	this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = t?.name;
}
function rh(e, t) {
	let n = new nh(e, t);
	try {
		n.c();
	} catch (e) {
		throw n.d(), e;
	}
	let r = n.d.bind(n);
	return r[Symbol.dispose] = r, r;
}
qm.prototype.brand = Rm, qm.prototype.h = function() {
	return !0;
}, qm.prototype.S = function(e) {
	let t = this.t;
	t !== e && e.e === void 0 && (e.x = t, this.t = e, t === void 0 ? Hm(() => {
		var e;
		(e = this.W) == null || e.call(this);
	}) : t.e = e);
}, qm.prototype.U = function(e) {
	if (this.t !== void 0) {
		let t = e.e, n = e.x;
		t !== void 0 && (t.x = n, e.e = void 0), n !== void 0 && (n.e = t, e.x = void 0), e === this.t && (this.t = n, n === void 0 && Hm(() => {
			var e;
			(e = this.Z) == null || e.call(this);
		}));
	}
}, qm.prototype.subscribe = function(e) {
	return rh(() => {
		let t = this.value, n = Bm;
		Bm = void 0;
		try {
			e(t);
		} finally {
			Bm = n;
		}
	}, { name: "sub" });
}, qm.prototype.valueOf = function() {
	return this.value;
}, qm.prototype.toString = function() {
	return this.value + "";
}, qm.prototype.toJSON = function() {
	return this.value;
}, qm.prototype.peek = function() {
	let e = Bm;
	Bm = void 0;
	try {
		return this.value;
	} finally {
		Bm = e;
	}
}, Object.defineProperty(qm.prototype, "value", {
	get() {
		let e = Km(this);
		return e !== void 0 && (e.i = this.i), this.v;
	},
	set(e) {
		if (e !== this.v) {
			if (Wm > 100) throw Error("Cycle detected");
			this.v = e, this.i++, Gm++, Um++;
			try {
				for (let e = this.t; e !== void 0; e = e.x) e.t.N();
			} finally {
				zm();
			}
		}
	}
}), Qm.prototype = new qm(), Qm.prototype.h = function() {
	if (this.f &= -3, 1 & this.f) return !1;
	if ((36 & this.f) == 32 || (this.f &= -5, this.g === Gm)) return !0;
	if (this.g = Gm, this.f |= 1, this.i > 0 && !Ym(this)) return this.f &= -2, !0;
	let e = Bm;
	try {
		Xm(this), Bm = this;
		let e = this.x();
		(16 & this.f || this.v !== e || this.i === 0) && (this.v = e, this.f &= -17, this.i++);
	} catch (e) {
		this.v = e, this.f |= 16, this.i++;
	}
	return Bm = e, Zm(this), this.f &= -2, !0;
}, Qm.prototype.S = function(e) {
	if (this.t === void 0) {
		this.f |= 36;
		for (let e = this.s; e !== void 0; e = e.n) e.S.S(e);
	}
	qm.prototype.S.call(this, e);
}, Qm.prototype.U = function(e) {
	if (this.t !== void 0 && (qm.prototype.U.call(this, e), this.t === void 0)) {
		this.f &= -33;
		for (let e = this.s; e !== void 0; e = e.n) e.S.U(e);
	}
}, Qm.prototype.N = function() {
	if (!(2 & this.f)) {
		this.f |= 6;
		for (let e = this.t; e !== void 0; e = e.x) e.t.N();
	}
}, Object.defineProperty(Qm.prototype, "value", { get() {
	if (1 & this.f) throw Error("Cycle detected");
	let e = Km(this);
	if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
	return this.v;
} }), nh.prototype.c = function() {
	let e = this.S();
	try {
		if (8 & this.f || this.x === void 0) return;
		let e = this.x();
		typeof e == "function" && (this.u = e);
	} finally {
		e();
	}
}, nh.prototype.S = function() {
	if (1 & this.f) throw Error("Cycle detected");
	this.f |= 1, this.f &= -9, $m(this), Xm(this), Um++;
	let e = Bm;
	return Bm = this, th.bind(this, e);
}, nh.prototype.N = function() {
	2 & this.f || (this.f |= 2, this.o = Vm, Vm = this);
}, nh.prototype.d = function() {
	this.f |= 8, 1 & this.f || eh(this);
}, nh.prototype.dispose = function() {
	this.d();
};
var ih = class e extends Cu {
	static getType() {
		return "horizontalrule";
	}
	static clone(t) {
		return new e(t.__key);
	}
	static importJSON(e) {
		return oh().updateFromJSON(e);
	}
	static importDOM() {
		return { hr: () => ({
			conversion: ah,
			priority: 0
		}) };
	}
	exportDOM() {
		return { element: document.createElement("hr") };
	}
	createDOM(e) {
		let t = document.createElement("hr");
		return xp(t, e.theme.hr), t;
	}
	getTextContent() {
		return "\n";
	}
	isInline() {
		return !1;
	}
	updateDOM() {
		return !1;
	}
};
function ah() {
	return { node: oh() };
}
function oh() {
	return wf(ih);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/composerContext.js
function sh() {
	return nt("editor");
}
function ch(e) {
	rt("editor", e);
}
function lh() {
	return nt("isEditable");
}
function uh() {
	return nt("activeEditor");
}
function dh(e) {
	rt("historyState", e);
}
function fh() {
	return nt("isBold");
}
function ph() {
	rt("editorSharedContext", {});
}
function mh() {
	return nt("editorSharedContext");
}
function hh() {
	return mh().ImageHistoryComponentType;
}
//#endregion
//#region node_modules/@lexical/rich-text/LexicalRichText.prod.mjs
function gh(e, t) {
	if (document.caretRangeFromPoint !== void 0) {
		let n = document.caretRangeFromPoint(e, t);
		return n === null ? null : {
			node: n.startContainer,
			offset: n.startOffset
		};
	}
	if (document.caretPositionFromPoint !== "undefined") {
		let n = document.caretPositionFromPoint(e, t);
		return n === null ? null : {
			node: n.offsetNode,
			offset: n.offset
		};
	}
	return null;
}
var _h = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, vh = _h && "documentMode" in document ? document.documentMode : null, yh = _h && /Mac|iPod|iPhone|iPad/.test(navigator.platform), bh = !(!_h || !("InputEvent" in window) || vh) && "getTargetRanges" in new window.InputEvent("input"), xh = _h && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Sh = _h && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ch = _h && /^(?=.*Chrome).*/i.test(navigator.userAgent), wh = _h && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && yh && !Ch, Th = U("DRAG_DROP_PASTE_FILE"), Eh = class e extends xu {
	static getType() {
		return "quote";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("blockquote");
		return xp(t, e.theme.quote), t;
	}
	updateDOM(e, t) {
		return !1;
	}
	static importDOM() {
		return { blockquote: (e) => ({
			conversion: Mh,
			priority: 0
		}) };
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (sf(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return Dh().updateFromJSON(e);
	}
	insertNewAfter(e, t) {
		let n = J(), r = this.getDirection();
		return n.setDirection(r), this.insertAfter(n, t), n;
	}
	collapseAtStart() {
		let e = J();
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function Dh() {
	return Qd(new Eh());
}
function Oh(e) {
	return e instanceof Eh;
}
var kh = class e extends xu {
	__tag;
	static getType() {
		return "heading";
	}
	static clone(t) {
		return new e(t.__tag, t.__key);
	}
	constructor(e, t) {
		super(t), this.__tag = e;
	}
	getTag() {
		return this.__tag;
	}
	setTag(e) {
		let t = this.getWritable();
		return this.__tag = e, t;
	}
	createDOM(e) {
		let t = this.__tag, n = document.createElement(t), r = e.theme.heading;
		if (r !== void 0) {
			let e = r[t];
			xp(n, e);
		}
		return n;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag;
	}
	static importDOM() {
		return {
			h1: (e) => ({
				conversion: jh,
				priority: 0
			}),
			h2: (e) => ({
				conversion: jh,
				priority: 0
			}),
			h3: (e) => ({
				conversion: jh,
				priority: 0
			}),
			h4: (e) => ({
				conversion: jh,
				priority: 0
			}),
			h5: (e) => ({
				conversion: jh,
				priority: 0
			}),
			h6: (e) => ({
				conversion: jh,
				priority: 0
			}),
			p: (e) => {
				let t = e.firstChild;
				return t !== null && Ah(t) ? {
					conversion: () => ({ node: null }),
					priority: 3
				} : null;
			},
			span: (e) => Ah(e) ? {
				conversion: (e) => ({ node: Nh("h1") }),
				priority: 3
			} : null
		};
	}
	exportDOM(e) {
		let { element: t } = super.exportDOM(e);
		if (sf(t)) {
			this.isEmpty() && t.append(document.createElement("br"));
			let e = this.getFormatType();
			e && (t.style.textAlign = e);
			let n = this.getDirection();
			n && (t.dir = n);
		}
		return { element: t };
	}
	static importJSON(e) {
		return Nh(e.tag).updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTag(e.tag);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			tag: this.getTag()
		};
	}
	insertNewAfter(e, t = !0) {
		let n = e ? e.anchor.offset : 0, r = this.getLastDescendant(), i = !r || e && e.anchor.key === r.getKey() && n === r.getTextContentSize() || !e ? J() : Nh(this.getTag()), a = this.getDirection();
		if (i.setDirection(a), this.insertAfter(i, t), n === 0 && !this.isEmpty() && e) {
			let e = J();
			e.select(), this.replace(e, !0);
		}
		return i;
	}
	collapseAtStart() {
		let e = this.isEmpty() ? J() : Nh(this.getTag());
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	extractWithChild() {
		return !0;
	}
};
function Ah(e) {
	return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function jh(e) {
	let t = e.nodeName.toLowerCase(), n = null;
	return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6" || (n = Nh(t), e.style !== null && (yf(e, n), n.setFormat(e.style.textAlign))), { node: n };
}
function Mh(e) {
	let t = Dh();
	return e.style !== null && (t.setFormat(e.style.textAlign), yf(e, t)), { node: t };
}
function Nh(e = "h1") {
	return Qd(new kh(e));
}
function Ph(e) {
	return e instanceof kh;
}
function Fh(e) {
	let t = null;
	if (sm(e, DragEvent) ? t = e.dataTransfer : sm(e, ClipboardEvent) && (t = e.clipboardData), t === null) return [
		!1,
		[],
		!1
	];
	let n = t.types, r = n.includes("Files"), i = n.includes("text/html") || n.includes("text/plain");
	return [
		r,
		Array.from(t.files),
		i
	];
}
function Ih(e) {
	let t = K();
	if (!G(t)) return !1;
	let n = /* @__PURE__ */ new Set(), r = t.getNodes();
	for (let t = 0; t < r.length; t++) {
		let i = r[t], a = i.getKey();
		if (n.has(a)) continue;
		let o = X(i, (e) => q(e) && !e.isInline());
		if (o === null) continue;
		let s = o.getKey();
		o.canIndent() && !n.has(s) && (n.add(s), e(o));
	}
	return n.size > 0;
}
function Lh(e) {
	return wu(pd(e));
}
function Rh(e) {
	for (let t of [
		"lowercase",
		"uppercase",
		"capitalize"
	]) e.hasFormat(t) && e.toggleFormat(t);
}
function zh(e) {
	return Cp(e.registerCommand(ls, (e) => {
		let t = K();
		return !!Sl(t) && (t.clear(), !0);
	}, 0), e.registerCommand(ms, (e) => {
		let t = K();
		return G(t) ? (t.deleteCharacter(e), !0) : !!Sl(t) && (t.deleteNodes(), !0);
	}, 0), e.registerCommand(bs, (e) => {
		let t = K();
		return !!G(t) && (t.deleteWord(e), !0);
	}, 0), e.registerCommand(xs, (e) => {
		let t = K();
		return !!G(t) && (t.deleteLine(e), !0);
	}, 0), e.registerCommand(_s, (t) => {
		let n = K();
		if (typeof t == "string") n !== null && n.insertText(t);
		else {
			if (n === null) return !1;
			let r = t.dataTransfer;
			if (r != null) Dm(r, n, e);
			else if (G(n)) {
				let e = t.data;
				return e && n.insertText(e), !0;
			}
		}
		return !0;
	}, 0), e.registerCommand(ys, () => {
		let e = K();
		return !!G(e) && (e.removeText(), !0);
	}, 0), e.registerCommand(Ss, (e) => {
		let t = K();
		return !!G(t) && (t.formatText(e), !0);
	}, 0), e.registerCommand(Hs, (e) => {
		let t = K();
		if (!G(t) && !Sl(t)) return !1;
		let n = t.getNodes();
		for (let t of n) {
			let n = X(t, (e) => q(e) && !e.isInline());
			n !== null && n.setFormat(e);
		}
		return !0;
	}, 0), e.registerCommand(hs, (e) => {
		let t = K();
		return !!G(t) && (t.insertLineBreak(e), !0);
	}, 0), e.registerCommand(gs, () => {
		let e = K();
		return !!G(e) && (e.insertParagraph(), !0);
	}, 0), e.registerCommand(Rs, () => (Gl([ml()]), !0), 0), e.registerCommand(zs, () => Ih((e) => {
		let t = e.getIndent();
		e.setIndent(t + 1);
	}), 0), e.registerCommand(Bs, () => Ih((e) => {
		let t = e.getIndent();
		t > 0 && e.setIndent(Math.max(0, t - 1));
	}), 0), e.registerCommand(As, (e) => {
		let t = K();
		if (Sl(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), n[0].selectPrevious(), !0;
		} else if (G(t)) {
			let n = Rd(t.focus, !0);
			if (!e.shiftKey && wu(n) && !n.isIsolated() && !n.isInline()) return n.selectPrevious(), e.preventDefault(), !0;
		}
		return !1;
	}, 0), e.registerCommand(js, (e) => {
		let t = K();
		if (Sl(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), n[0].selectNext(0, 0), !0;
		} else if (G(t)) {
			if (function(e) {
				let t = e.focus;
				return t.key === "root" && t.offset === gd().getChildrenSize();
			}(t)) return e.preventDefault(), !0;
			let n = Rd(t.focus, !1);
			if (!e.shiftKey && wu(n) && !n.isIsolated() && !n.isInline()) return n.selectNext(), e.preventDefault(), !0;
		}
		return !1;
	}, 0), e.registerCommand(Os, (e) => {
		let t = K();
		if (Sl(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), jp(n[0]) ? n[0].selectNext(0, 0) : n[0].selectPrevious(), !0;
		}
		if (!G(t)) return !1;
		if (Vp(t, !0)) {
			let n = e.shiftKey;
			return e.preventDefault(), Wp(t, n, !0), !0;
		}
		return !1;
	}, 0), e.registerCommand(Es, (e) => {
		let t = K();
		if (Sl(t)) {
			let n = t.getNodes();
			if (n.length > 0) return e.preventDefault(), jp(n[0]) ? n[0].selectPrevious() : n[0].selectNext(0, 0), !0;
		}
		if (!G(t)) return !1;
		let n = e.shiftKey;
		return !!Vp(t, !1) && (e.preventDefault(), Wp(t, n, !1), !0);
	}, 0), e.registerCommand(Ps, (t) => {
		if (Lh(t.target)) return !1;
		let n = K();
		if (G(n)) {
			if (function(e) {
				if (!e.isCollapsed()) return !1;
				let { anchor: t } = e;
				if (t.offset !== 0) return !1;
				let n = t.getNode();
				if (Eu(n)) return !1;
				let r = rm(n);
				return r.getIndent() > 0 && (r.is(n) || n.is(r.getFirstDescendant()));
			}(n)) return t.preventDefault(), e.dispatchCommand(Bs, void 0);
			if (Sh && navigator.language === "ko-KR") return !1;
		} else if (!Sl(n)) return !1;
		return t.preventDefault(), e.dispatchCommand(ms, !0);
	}, 0), e.registerCommand(Is, (t) => {
		if (Lh(t.target)) return !1;
		let n = K();
		return !(!G(n) && !Sl(n)) && (t.preventDefault(), e.dispatchCommand(ms, !1));
	}, 0), e.registerCommand(Ms, (t) => {
		let n = K();
		if (!G(n)) return !1;
		if (Rh(n), t !== null) {
			if ((Sh || xh || wh) && bh) return !1;
			if (t.preventDefault(), t.shiftKey) return e.dispatchCommand(hs, !1);
		}
		return e.dispatchCommand(gs, void 0);
	}, 0), e.registerCommand(Fs, () => !!G(K()) && (e.blur(), !0), 0), e.registerCommand(Vs, (t) => {
		let [, n] = Fh(t);
		if (n.length > 0) {
			let r = gh(t.clientX, t.clientY);
			if (r !== null) {
				let { offset: t, node: i } = r, a = pd(i);
				if (a !== null) {
					let e = Pl();
					if (W(a)) e.anchor.set(a.getKey(), t, "text"), e.focus.set(a.getKey(), t, "text");
					else {
						let t = a.getParentOrThrow().getKey(), n = a.getIndexWithinParent() + 1;
						e.anchor.set(t, n, "element"), e.focus.set(t, n, "element");
					}
					vd(To(e));
				}
				e.dispatchCommand(Th, n);
			}
			return t.preventDefault(), !0;
		}
		return !!G(K());
	}, 0), e.registerCommand(Us, (e) => {
		let [t] = Fh(e), n = K();
		return !(t && !G(n));
	}, 0), e.registerCommand(Ws, (e) => {
		let [t] = Fh(e), n = K();
		if (t && !G(n)) return !1;
		let r = gh(e.clientX, e.clientY);
		return r !== null && wu(pd(r.node)) && e.preventDefault(), !0;
	}, 0), e.registerCommand(Js, () => (Pd(), !0), 0), e.registerCommand(Ks, (t) => (Nm(e, sm(t, ClipboardEvent) ? t : null), !0), 0), e.registerCommand(qs, (t) => (async function(e, t) {
		await Nm(t, sm(e, ClipboardEvent) ? e : null), t.update(() => {
			let e = K();
			G(e) ? e.removeText() : Sl(e) && e.getNodes().forEach((e) => e.remove());
		});
	}(t, e), !0), 0), e.registerCommand(vs, (t) => {
		let [, n, r] = Fh(t);
		return n.length > 0 && !r ? (e.dispatchCommand(Th, n), !0) : cf(t.target) && Ku(t.target) ? !1 : K() !== null && (function(e, t) {
			e.preventDefault(), t.update(() => {
				let n = K(), r = sm(e, InputEvent) || sm(e, KeyboardEvent) ? null : e.clipboardData;
				r != null && n !== null && Dm(r, n, t);
			}, { tag: "paste" });
		}(t, e), !0);
	}, 0), e.registerCommand(Ns, (e) => {
		let t = K();
		return G(t) && Rh(t), !1;
	}, 0), e.registerCommand(Ls, (e) => {
		let t = K();
		return G(t) && Rh(t), !1;
	}, 0));
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/Decorator.svelte
function Bh(e, t) {
	E(t, !0);
	let n = it(), r = sh(), i = {}, a = [];
	vi(() => {
		let e = [];
		return r._nodes.forEach((t) => {
			if (t.klass.prototype instanceof Cu && !t.klass.skipDecorateRender) {
				let n = r.registerMutationListener(t.klass, (e, t) => {
					for (let [t, n] of e) n === "destroyed" ? delete i[t] : a.push(t);
				});
				e.push(n);
			}
		}), Cp(...e, r.registerDecoratorListener((e) => {
			a.forEach((t) => {
				let a = e[t], o = i[t], s = r.getElementByKey(t);
				if (s?.innerHTML && o) {
					let e = i[t];
					a.updateProps(e);
				} else if (s) {
					let e = En({});
					a.updateProps(e), i[t] = e, fi(a.componentClass, {
						target: s,
						props: e,
						context: n
					});
				}
			}), a.length = 0;
		}));
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/RichTextPlugin.svelte
function Vh(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => zh(n)), ma(), Bh(e, {}), D();
}
//#endregion
//#region node_modules/@lexical/history/LexicalHistory.prod.mjs
function Hh(e, t, n, r, i) {
	if (e === null || n.size === 0 && r.size === 0 && !i) return 0;
	let a = t._selection, o = e._selection;
	if (i) return 1;
	if (!(G(a) && G(o) && o.isCollapsed() && a.isCollapsed())) return 0;
	let s = function(e, t, n) {
		let r = e._nodeMap, i = [];
		for (let e of t) {
			let t = r.get(e);
			t !== void 0 && i.push(t);
		}
		for (let [e, t] of n) {
			if (!t) continue;
			let n = r.get(e);
			n === void 0 || Eu(n) || i.push(n);
		}
		return i;
	}(t, n, r);
	if (s.length === 0) return 0;
	if (s.length > 1) {
		let n = t._nodeMap, r = n.get(a.anchor.key), i = n.get(o.anchor.key);
		return r && i && !e._nodeMap.has(r.__key) && W(r) && r.__text.length === 1 && a.anchor.offset === 1 ? 2 : 0;
	}
	let c = s[0], l = e._nodeMap.get(c.__key);
	if (!W(l) || !W(c) || l.__mode !== c.__mode) return 0;
	let u = l.__text, d = c.__text;
	if (u === d) return 0;
	let f = a.anchor, p = o.anchor;
	if (f.key !== p.key || f.type !== "text") return 0;
	let m = f.offset, h = p.offset, g = d.length - u.length;
	return g === 1 && h === m - 1 ? 2 : g === -1 && h === m + 1 ? 3 : g === -1 && h === m ? 4 : 0;
}
function Uh(e, t) {
	let n = Date.now(), r = 0;
	return (i, a, o, s, c, l) => {
		let u = Date.now();
		if (l.has("historic")) return r = 0, n = u, 2;
		let d = Hh(i, a, s, c, e.isComposing()), f = (() => {
			let f = o === null || o.editor === e, p = l.has(Hc);
			if (!p && f && l.has("history-merge")) return 0;
			if (i === null) return 1;
			let m = a._selection;
			if (!(s.size > 0 || c.size > 0)) return m === null ? 2 : 0;
			let h = typeof t == "number" ? t : t.peek();
			return !1 === p && d !== 0 && d === r && u < n + h && f || s.size === 1 && function(e, t, n) {
				let r = t._nodeMap.get(e), i = n._nodeMap.get(e), a = t._selection, o = n._selection;
				return !(G(a) && G(o) && a.anchor.type === "element" && a.focus.type === "element" && o.anchor.type === "text" && o.focus.type === "text" || !W(r) || !W(i) || r.__parent !== i.__parent) && JSON.stringify(t.read(() => r.exportJSON())) === JSON.stringify(n.read(() => i.exportJSON()));
			}(Array.from(s)[0], i, a) ? 0 : 1;
		})();
		return n = u, r = d, f;
	};
}
function Wh(e) {
	e.undoStack = [], e.redoStack = [], e.current = null;
}
function Gh(e, t, n) {
	let r = Uh(e, n);
	return Cp(e.registerCommand(Cs, () => (function(e, t) {
		let n = t.redoStack, r = t.undoStack;
		if (r.length !== 0) {
			let i = t.current, a = r.pop();
			i !== null && (n.push(i), e.dispatchCommand(Zs, !0)), r.length === 0 && e.dispatchCommand(Qs, !1), t.current = a || null, a && a.editor.setEditorState(a.editorState, { tag: "historic" });
		}
	}(e, t), !0), 0), e.registerCommand(ws, () => (function(e, t) {
		let n = t.redoStack, r = t.undoStack;
		if (n.length !== 0) {
			let i = t.current;
			i !== null && (r.push(i), e.dispatchCommand(Qs, !0));
			let a = n.pop();
			n.length === 0 && e.dispatchCommand(Zs, !1), t.current = a || null, a && a.editor.setEditorState(a.editorState, { tag: "historic" });
		}
	}(e, t), !0), 0), e.registerCommand(Ys, () => (Wh(t), !1), 0), e.registerCommand(Xs, () => (Wh(t), e.dispatchCommand(Zs, !1), e.dispatchCommand(Qs, !1), !0), 0), e.registerUpdateListener(({ editorState: n, prevEditorState: i, dirtyLeaves: a, dirtyElements: o, tags: s }) => {
		let c = t.current, l = t.redoStack, u = t.undoStack, d = c === null ? null : c.editorState;
		if (c !== null && n === d) return;
		let f = r(i, n, c, a, o, s);
		if (f === 1) l.length !== 0 && (t.redoStack = [], e.dispatchCommand(Zs, !1)), c !== null && (u.push({ ...c }), e.dispatchCommand(Qs, !0));
		else if (f === 2) return;
		t.current = {
			editor: e,
			editorState: n
		};
	}));
}
function Kh() {
	return {
		current: null,
		redoStack: [],
		undoStack: []
	};
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/HistoryPlugin.svelte
function qh(e, t) {
	E(t, !0);
	let n = sh(), r = V(t, "externalHistoryState", 19, Kh), i = V(t, "delay", 3, 1e3);
	vi(() => Gh(n, r(), i())), D();
}
//#endregion
//#region node_modules/@lexical/list/LexicalList.prod.mjs
function Jh(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Yh(e) {
	let t = 1, n = e.getParent();
	for (; n != null;) {
		if (mg(n)) {
			let e = n.getParent();
			if (Z(e)) {
				t++, n = e.getParent();
				continue;
			}
			Jh(40);
		}
		return t;
	}
	return t;
}
function Xh(e) {
	let t = e.getParent();
	Z(t) || Jh(40);
	let n = t;
	for (; n !== null;) n = n.getParent(), Z(n) && (t = n);
	return t;
}
function Zh(e) {
	let t = [], n = e.getChildren().filter(mg);
	for (let e = 0; e < n.length; e++) {
		let r = n[e], i = r.getFirstChild();
		Z(i) ? t = t.concat(Zh(i)) : t.push(r);
	}
	return t;
}
function Qh(e) {
	return mg(e) && Z(e.getFirstChild());
}
function $h(e) {
	return pg().append(e);
}
function eg(e, t) {
	return mg(e) && (t.length === 0 || t.length === 1 && e.is(t[0]) && e.getChildrenSize() === 0);
}
function tg(e) {
	let t = K();
	if (t !== null) {
		let n = t.getNodes();
		if (G(t)) {
			let r = t.getStartEndPoints();
			r === null && Jh(143);
			let [i] = r, a = i.getNode(), o = a.getParent();
			if (Xd(a)) {
				let e = a.getFirstChild();
				if (e) n = e.selectStart().getNodes();
				else {
					let e = J();
					a.append(e), n = e.select().getNodes();
				}
			} else if (eg(a, n)) {
				let t = bg(e);
				if (Xd(o)) {
					a.replace(t);
					let e = pg();
					q(a) && (e.setFormat(a.getFormatType()), e.setIndent(a.getIndent())), t.append(e);
				} else if (mg(a)) {
					let e = a.getParentOrThrow();
					ng(t, e.getChildren()), e.replace(t);
				}
				return;
			}
		}
		let r = /* @__PURE__ */ new Set();
		for (let t = 0; t < n.length; t++) {
			let i = n[t];
			if (q(i) && i.isEmpty() && !mg(i) && !r.has(i.getKey())) {
				rg(i, e);
				continue;
			}
			let a = id(i) ? i.getParent() : mg(i) && i.isEmpty() ? i : null;
			for (; a != null;) {
				let t = a.getKey();
				if (Z(a)) {
					if (!r.has(t)) {
						let n = bg(e);
						ng(n, a.getChildren()), a.replace(n), r.add(t);
					}
					break;
				}
				{
					let n = a.getParent();
					if (Xd(n) && !r.has(t)) {
						r.add(t), rg(a, e);
						break;
					}
					a = n;
				}
			}
		}
	}
}
function ng(e, t) {
	e.splice(e.getChildrenSize(), 0, t);
}
function rg(e, t) {
	if (Z(e)) return e;
	let n = e.getPreviousSibling(), r = e.getNextSibling(), i = pg(), a;
	if (ng(i, e.getChildren()), Z(n) && t === n.getListType()) n.append(i), Z(r) && t === r.getListType() && (ng(n, r.getChildren()), r.remove()), a = n;
	else if (Z(r) && t === r.getListType()) r.getFirstChildOrThrow().insertBefore(i), a = r;
	else {
		let n = bg(t);
		n.append(i), e.replace(n), a = n;
	}
	i.setFormat(e.getFormatType()), i.setIndent(e.getIndent());
	let o = K();
	return G(o) && (a.getKey() === o.anchor.key && o.anchor.set(i.getKey(), o.anchor.offset, "element"), a.getKey() === o.focus.key && o.focus.set(i.getKey(), o.focus.offset, "element")), e.remove(), a;
}
function ig(e, t) {
	let n = e.getLastChild(), r = t.getFirstChild();
	n && r && Qh(n) && Qh(r) && (ig(n.getFirstChild(), r.getFirstChild()), r.remove());
	let i = t.getChildren();
	i.length > 0 && e.append(...i), t.remove();
}
function ag() {
	let e = K();
	if (G(e)) {
		let t = /* @__PURE__ */ new Set(), n = e.getNodes(), r = e.anchor.getNode();
		if (eg(r, n)) t.add(Xh(r));
		else for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (id(r)) {
				let e = nm(r, ug);
				e != null && t.add(Xh(e));
			}
		}
		for (let n of t) {
			let t = n, r = Zh(n);
			for (let n of r) {
				let r = J().setTextStyle(e.style).setTextFormat(e.format);
				ng(r, n.getChildren()), t.insertAfter(r), t = r, n.__key === e.anchor.key && ip(e.anchor, fp(Uf(r, "next"))), n.__key === e.focus.key && ip(e.focus, fp(Uf(r, "next"))), n.remove();
			}
			n.remove();
		}
	}
}
function og(e) {
	let t = e.getListType() !== "check", n = e.getStart();
	for (let r of e.getChildren()) mg(r) && (r.getValue() !== n && r.setValue(n), t && r.getLatest().__checked != null && r.setChecked(void 0), Z(r.getFirstChild()) || n++);
}
function sg(e) {
	let t = /* @__PURE__ */ new Set();
	if (Qh(e) || t.has(e.getKey())) return;
	let n = e.getParent(), r = e.getNextSibling(), i = e.getPreviousSibling();
	if (Qh(r) && Qh(i)) {
		let n = i.getFirstChild();
		if (Z(n)) {
			n.append(e);
			let i = r.getFirstChild();
			Z(i) && (ng(n, i.getChildren()), r.remove(), t.add(r.getKey()));
		}
	} else if (Qh(r)) {
		let t = r.getFirstChild();
		if (Z(t)) {
			let n = t.getFirstChild();
			n !== null && n.insertBefore(e);
		}
	} else if (Qh(i)) {
		let t = i.getFirstChild();
		Z(t) && t.append(e);
	} else if (Z(n)) {
		let t = pg().setTextFormat(e.getTextFormat()).setTextStyle(e.getTextStyle()), a = bg(n.getListType()).setTextFormat(n.getTextFormat()).setTextStyle(n.getTextStyle());
		t.append(a), a.append(e), i ? i.insertAfter(t) : r ? r.insertBefore(t) : n.append(t);
	}
}
function cg(e) {
	if (Qh(e)) return;
	let t = e.getParent(), n = t ? t.getParent() : void 0;
	if (Z(n ? n.getParent() : void 0) && mg(n) && Z(t)) {
		let r = t ? t.getFirstChild() : void 0, i = t ? t.getLastChild() : void 0;
		if (e.is(r)) n.insertBefore(e), t.isEmpty() && n.remove();
		else if (e.is(i)) n.insertAfter(e), t.isEmpty() && n.remove();
		else {
			let r = t.getListType(), i = pg(), a = bg(r);
			i.append(a), e.getPreviousSiblings().forEach((e) => a.append(e));
			let o = pg(), s = bg(r);
			o.append(s), ng(s, e.getNextSiblings()), n.insertBefore(i), n.insertAfter(o), n.replace(e);
		}
	}
}
function lg() {
	let e = K();
	if (!G(e) || !e.isCollapsed()) return !1;
	let t = e.anchor.getNode(), n = null;
	if (mg(t) && t.getChildrenSize() === 0) n = t;
	else if (W(t)) {
		let e = t.getParent();
		mg(e) && e.getChildren().every((e) => W(e) && e.getTextContent().trim() === "") && (n = e);
	}
	if (n === null) return !1;
	let r = Xh(n), i = n.getParent();
	Z(i) || Jh(40);
	let a = i.getParent(), o;
	if (Xd(a)) o = J(), r.insertAfter(o);
	else {
		if (!mg(a)) return !1;
		o = pg(), a.insertAfter(o);
	}
	o.setTextStyle(e.style).setTextFormat(e.format).select();
	let s = n.getNextSiblings();
	if (s.length > 0) {
		let e = bg(i.getListType());
		if (mg(o)) {
			let t = pg();
			t.append(e), o.insertAfter(t);
		} else o.insertAfter(e);
		e.append(...s);
	}
	return function(e) {
		let t = e;
		for (; t.getNextSibling() == null && t.getPreviousSibling() == null;) {
			let e = t.getParent();
			if (e == null || !mg(e) && !Z(e)) break;
			t = e;
		}
		t.remove();
	}(n), !0;
}
var ug = class extends xu {
	__value;
	__checked;
	$config() {
		return this.config("listitem", {
			$transform: (e) => {
				if (e.__checked == null) return;
				let t = e.getParent();
				Z(t) && t.getListType() !== "check" && e.getChecked() != null && e.setChecked(void 0);
			},
			extends: xu,
			importDOM: Lc({ li: () => ({
				conversion: dg,
				priority: 0
			}) })
		});
	}
	constructor(e = 1, t = void 0, n) {
		super(n), this.__value = e === void 0 ? 1 : e, this.__checked = t;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__value = e.__value, this.__checked = e.__checked;
	}
	createDOM(e) {
		let t = document.createElement("li");
		return this.updateListItemDOM(null, t, e), t;
	}
	updateListItemDOM(e, t, n) {
		(function(e, t, n) {
			let r = t.getParent();
			!Z(r) || r.getListType() !== "check" || Z(t.getFirstChild()) ? (e.removeAttribute("role"), e.removeAttribute("tabIndex"), e.removeAttribute("aria-checked")) : (e.setAttribute("role", "checkbox"), e.setAttribute("tabIndex", "-1"), n && t.__checked === n.__checked || e.setAttribute("aria-checked", t.getChecked() ? "true" : "false"));
		})(t, this, e), t.value = this.__value, function(e, t, n) {
			let r = [], i = [], a = t.list, o = a ? a.listitem : void 0, s;
			if (a && a.nested && (s = a.nested.listitem), o !== void 0 && r.push(...bp(o)), a) {
				let e = n.getParent(), t = Z(e) && e.getListType() === "check", o = n.getChecked();
				t && !o || i.push(a.listitemUnchecked), t && o || i.push(a.listitemChecked), t && r.push(o ? a.listitemChecked : a.listitemUnchecked);
			}
			if (s !== void 0) {
				let e = bp(s);
				n.getChildren().some((e) => Z(e)) ? r.push(...e) : i.push(...e);
			}
			i.length > 0 && Sp(e, ...i), r.length > 0 && xp(e, ...r);
		}(t, n.theme, this);
		let r = e ? e.__style : "", i = this.__style;
		r !== i && (i === "" ? t.removeAttribute("style") : t.style.cssText = i), function(e, t, n) {
			let r = Dp(t.__textStyle);
			for (let t in r) e.style.setProperty(`--listitem-marker-${t}`, r[t]);
			if (n) for (let t in Dp(n.__textStyle)) t in r || e.style.removeProperty(`--listitem-marker-${t}`);
		}(t, this, e);
	}
	updateDOM(e, t, n) {
		let r = t;
		return this.updateListItemDOM(e, r, n), !1;
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setValue(e.value).setChecked(e.checked);
	}
	exportDOM(e) {
		let t = this.createDOM(e._config), n = this.getFormatType();
		n && (t.style.textAlign = n);
		let r = this.getDirection();
		return r && (t.dir = r), { element: t };
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			checked: this.getChecked(),
			value: this.getValue()
		};
	}
	append(...e) {
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (q(n) && this.canMergeWith(n)) {
				let e = n.getChildren();
				this.append(...e), n.remove();
			} else super.append(n);
		}
		return this;
	}
	replace(e, t) {
		if (mg(e)) return super.replace(e);
		this.setIndent(0);
		let n = this.getParentOrThrow();
		if (!Z(n)) return e;
		if (n.__first === this.getKey()) n.insertBefore(e);
		else if (n.__last === this.getKey()) n.insertAfter(e);
		else {
			let t = bg(n.getListType()), r = this.getNextSibling();
			for (; r;) {
				let e = r;
				r = r.getNextSibling(), t.append(e);
			}
			n.insertAfter(e), e.insertAfter(t);
		}
		return t && (q(e) || Jh(139), this.getChildren().forEach((t) => {
			e.append(t);
		})), this.remove(), n.getChildrenSize() === 0 && n.remove(), e;
	}
	insertAfter(e, t = !0) {
		let n = this.getParentOrThrow();
		if (Z(n) || Jh(39), mg(e)) return super.insertAfter(e, t);
		let r = this.getNextSiblings();
		if (n.insertAfter(e, t), r.length !== 0) {
			let i = bg(n.getListType());
			r.forEach((e) => i.append(e)), e.insertAfter(i, t);
		}
		return e;
	}
	remove(e) {
		let t = this.getPreviousSibling(), n = this.getNextSibling();
		super.remove(e), t && n && Qh(t) && Qh(n) && (ig(t.getFirstChild(), n.getFirstChild()), n.remove());
	}
	insertNewAfter(e, t = !0) {
		let n = pg().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
		return this.insertAfter(n, t), n;
	}
	collapseAtStart(e) {
		let t = J();
		this.getChildren().forEach((e) => t.append(e));
		let n = this.getParentOrThrow(), r = n.getParentOrThrow(), i = mg(r);
		if (n.getChildrenSize() === 1) if (i) n.remove(), r.select();
		else {
			n.insertBefore(t), n.remove();
			let r = e.anchor, i = e.focus, a = t.getKey();
			r.type === "element" && r.getNode().is(this) && r.set(a, r.offset, "element"), i.type === "element" && i.getNode().is(this) && i.set(a, i.offset, "element");
		}
		else n.insertBefore(t), this.remove();
		return !0;
	}
	getValue() {
		return this.getLatest().__value;
	}
	setValue(e) {
		let t = this.getWritable();
		return t.__value = e, t;
	}
	getChecked() {
		let e = this.getLatest(), t, n = this.getParent();
		return Z(n) && (t = n.getListType()), t === "check" ? !!e.__checked : void 0;
	}
	setChecked(e) {
		let t = this.getWritable();
		return t.__checked = e, t;
	}
	toggleChecked() {
		let e = this.getWritable();
		return e.setChecked(!e.__checked);
	}
	getIndent() {
		let e = this.getParent();
		if (e === null || !this.isAttached()) return this.getLatest().__indent;
		let t = e.getParentOrThrow(), n = 0;
		for (; mg(t);) t = t.getParentOrThrow().getParentOrThrow(), n++;
		return n;
	}
	setIndent(e) {
		typeof e != "number" && Jh(117), (e = Math.floor(e)) >= 0 || Jh(199);
		let t = this.getIndent();
		for (; t !== e;) t < e ? (sg(this), t++) : (cg(this), t--);
		return this;
	}
	canInsertAfter(e) {
		return mg(e);
	}
	canReplaceWith(e) {
		return mg(e);
	}
	canMergeWith(e) {
		return mg(e) || Pu(e);
	}
	extractWithChild(e, t) {
		if (!G(t)) return !1;
		let n = t.anchor.getNode(), r = t.focus.getNode();
		return this.isParentOf(n) && this.isParentOf(r) && this.getTextContent().length === t.getTextContent().length;
	}
	isParentRequired() {
		return !0;
	}
	createParentElementNode() {
		return bg("bullet");
	}
	canMergeWhenEmpty() {
		return !0;
	}
};
function dg(e) {
	if (e.classList.contains("task-list-item")) {
		for (let t of e.children) if (t.tagName === "INPUT") return fg(t);
	}
	if (e.classList.contains("joplin-checkbox")) {
		for (let t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && t.children[0].tagName === "INPUT") return fg(t.children[0]);
	}
	let t = e.getAttribute("aria-checked");
	return { node: pg(t === "true" || t !== "false" && void 0) };
}
function fg(e) {
	return e.getAttribute("type") === "checkbox" ? { node: pg(e.hasAttribute("checked")) } : { node: null };
}
function pg(e) {
	return Qd(new ug(void 0, e));
}
function mg(e) {
	return e instanceof ug;
}
var hg = class extends xu {
	__tag;
	__start;
	__listType;
	$config() {
		return this.config("list", {
			$transform: (e) => {
				(function(e) {
					let t = e.getNextSibling();
					Z(t) && e.getListType() === t.getListType() && ig(e, t);
				})(e), og(e);
			},
			extends: xu,
			importDOM: Lc({
				ol: () => ({
					conversion: vg,
					priority: 0
				}),
				ul: () => ({
					conversion: vg,
					priority: 0
				})
			})
		});
	}
	constructor(e = "number", t = 1, n) {
		super(n);
		let r = yg[e] || e;
		this.__listType = r, this.__tag = r === "number" ? "ol" : "ul", this.__start = t;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__listType = e.__listType, this.__tag = e.__tag, this.__start = e.__start;
	}
	getTag() {
		return this.getLatest().__tag;
	}
	setListType(e) {
		let t = this.getWritable();
		return t.__listType = e, t.__tag = e === "number" ? "ol" : "ul", t;
	}
	getListType() {
		return this.getLatest().__listType;
	}
	getStart() {
		return this.getLatest().__start;
	}
	setStart(e) {
		let t = this.getWritable();
		return t.__start = e, t;
	}
	createDOM(e, t) {
		let n = this.__tag, r = document.createElement(n);
		return this.__start !== 1 && r.setAttribute("start", String(this.__start)), r.__lexicalListType = this.__listType, gg(r, e.theme, this), r;
	}
	updateDOM(e, t, n) {
		return e.__tag !== this.__tag || e.__listType !== this.__listType || (gg(t, n.theme, this), !1);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setListType(e.listType).setStart(e.start);
	}
	exportDOM(e) {
		let t = this.createDOM(e._config, e);
		return sf(t) && (this.__start !== 1 && t.setAttribute("start", String(this.__start)), this.__listType === "check" && t.setAttribute("__lexicalListType", "check")), { element: t };
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			listType: this.getListType(),
			start: this.getStart(),
			tag: this.getTag()
		};
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
	splice(e, t, n) {
		let r = n;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			mg(t) || (r === n && (r = [...n]), r[e] = pg().append(!q(t) || Z(t) || t.isInline() ? t : dl(t.getTextContent())));
		}
		return super.splice(e, t, r);
	}
	extractWithChild(e) {
		return mg(e);
	}
};
function gg(e, t, n) {
	let r = [], i = [], a = t.list;
	if (a !== void 0) {
		let e = a[`${n.__tag}Depth`] || [], t = Yh(n) - 1, o = t % e.length, s = e[o], c = a[n.__tag], l, u = a.nested, d = a.checklist;
		if (u !== void 0 && u.list && (l = u.list), c !== void 0 && r.push(c), d !== void 0 && n.__listType === "check" && r.push(d), s !== void 0) {
			r.push(...bp(s));
			for (let t = 0; t < e.length; t++) t !== o && i.push(n.__tag + t);
		}
		if (l !== void 0) {
			let e = bp(l);
			t > 1 ? r.push(...e) : i.push(...e);
		}
	}
	i.length > 0 && Sp(e, ...i), r.length > 0 && xp(e, ...r);
}
function _g(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (mg(r)) {
			t.push(r);
			let e = r.getChildren();
			e.length > 1 && e.forEach((e) => {
				Z(e) && t.push($h(e));
			});
		} else t.push($h(r));
	}
	return t;
}
function vg(e) {
	let t = e.nodeName.toLowerCase(), n = null;
	return t === "ol" ? n = bg("number", e.start) : t === "ul" && (n = function(e) {
		if (e.getAttribute("__lexicallisttype") === "check" || e.classList.contains("contains-task-list") || e.getAttribute("data-is-checklist") === "1") return !0;
		for (let t of e.childNodes) if (sf(t) && t.hasAttribute("aria-checked")) return !0;
		return !1;
	}(e) ? bg("check") : bg("bullet")), {
		after: _g,
		node: n
	};
}
var yg = {
	ol: "number",
	ul: "bullet"
};
function bg(e = "number", t = 1) {
	return Qd(new hg(e, t));
}
function Z(e) {
	return e instanceof hg;
}
var xg = U("INSERT_CHECK_LIST_COMMAND");
function Sg(e) {
	return Cp(e.registerCommand(xg, () => (tg("check"), !0), 1), e.registerCommand(js, (t) => Dg(t, e, !1), 1), e.registerCommand(As, (t) => Dg(t, e, !0), 1), e.registerCommand(Fs, () => Eg() != null && (e.getRootElement()?.focus(), !0), 1), e.registerCommand(Ns, (t) => {
		let n = Eg();
		return !(n == null || !e.isEditable()) && (e.update(() => {
			let e = pd(n);
			mg(e) && (t.preventDefault(), e.toggleChecked());
		}), !0);
	}, 1), e.registerCommand(Os, (t) => e.getEditorState().read(() => {
		let n = K();
		if (G(n) && n.isCollapsed()) {
			let { anchor: r } = n, i = r.type === "element";
			if (i || r.offset === 0) {
				let n = r.getNode(), a = X(n, (e) => q(e) && !e.isInline());
				if (mg(a)) {
					let r = a.getParent();
					if (Z(r) && r.getListType() === "check" && (i || a.getFirstDescendant() === n)) {
						let n = e.getElementByKey(a.__key);
						if (n != null && document.activeElement !== n) return n.focus(), t.preventDefault(), !0;
					}
				}
			}
		}
		return !1;
	}), 1), e.registerRootListener((e, t) => {
		e !== null && (e.addEventListener("click", wg), e.addEventListener("pointerdown", Tg)), t !== null && (t.removeEventListener("click", wg), t.removeEventListener("pointerdown", Tg));
	}));
}
function Cg(e, t) {
	let n = e.target;
	if (!sf(n)) return;
	let r = n.firstChild;
	if (sf(r) && (r.tagName === "UL" || r.tagName === "OL")) return;
	let i = n.parentNode;
	if (!i || i.__lexicalListType !== "check") return;
	let a = n.getBoundingClientRect(), o = dm(n), s = e.clientX / o, c = window.getComputedStyle ? window.getComputedStyle(n, "::before") : { width: "0px" }, l = parseFloat(c.width), u = e.pointerType === "touch" ? 32 : 0;
	(n.dir === "rtl" ? s < a.right + u && s > a.right - l - u : s > a.left - u && s < a.left + l + u) && t();
}
function wg(e) {
	Cg(e, () => {
		if (sf(e.target)) {
			let t = e.target, n = Yu(t);
			n != null && n.isEditable() && n.update(() => {
				let e = pd(t);
				mg(e) && (t.focus(), e.toggleChecked());
			});
		}
	});
}
function Tg(e) {
	Cg(e, () => {
		e.preventDefault();
	});
}
function Eg() {
	let e = document.activeElement;
	return sf(e) && e.tagName === "LI" && e.parentNode != null && e.parentNode.__lexicalListType === "check" ? e : null;
}
function Dg(e, t, n) {
	let r = Eg();
	return r != null && t.update(() => {
		let i = pd(r);
		if (!mg(i)) return;
		let a = function(e, t) {
			let n = t ? e.getPreviousSibling() : e.getNextSibling(), r = e;
			for (; n == null && mg(r);) r = r.getParentOrThrow().getParent(), r != null && (n = t ? r.getPreviousSibling() : r.getNextSibling());
			for (; mg(n);) {
				let e = t ? n.getLastChild() : n.getFirstChild();
				if (!Z(e)) return n;
				n = t ? e.getLastChild() : e.getFirstChild();
			}
			return null;
		}(i, n);
		if (a != null) {
			a.selectStart();
			let n = t.getElementByKey(a.__key);
			n != null && (e.preventDefault(), setTimeout(() => {
				n.focus();
			}, 0));
		}
	}), !1;
}
var Og = U("UPDATE_LIST_START_COMMAND"), kg = U("INSERT_UNORDERED_LIST_COMMAND"), Ag = U("INSERT_ORDERED_LIST_COMMAND"), jg = U("REMOVE_LIST_COMMAND");
function Mg(e) {
	return Cp(e.registerCommand(Ag, () => (tg("number"), !0), 1), e.registerCommand(Og, (e) => {
		let { listNodeKey: t, newStart: n } = e, r = ud(t);
		return !!Z(r) && (r.getListType() === "number" && (r.setStart(n), og(r)), !0);
	}, 1), e.registerCommand(kg, () => (tg("bullet"), !0), 1), e.registerCommand(jg, () => (ag(), !0), 1), e.registerCommand(gs, () => lg(), 1), e.registerNodeTransform(ug, (e) => {
		let t = e.getFirstChild();
		if (t) {
			if (W(t)) {
				let n = t.getStyle(), r = t.getFormat();
				e.getTextStyle() !== n && e.setTextStyle(n), e.getTextFormat() !== r && e.setTextFormat(r);
			}
		} else {
			let t = K();
			G(t) && (t.style !== e.getTextStyle() || t.format !== e.getTextFormat()) && t.isCollapsed() && e.is(t.anchor.getNode()) && e.setTextStyle(t.style).setTextFormat(t.format);
		}
	}), e.registerNodeTransform(nl, (e) => {
		let t = e.getParent();
		if (mg(t) && e.is(t.getFirstChild())) {
			let n = e.getStyle(), r = e.getFormat();
			n === t.getTextStyle() && r === t.getTextFormat() || t.setTextStyle(n).setTextFormat(r);
		}
	}));
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/ListPlugin.svelte
function Ng(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => Mg(n)), ma(), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/CheckListPlugin.svelte
function Pg(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => Sg(n)), ma(), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/nodeSelectionStore.js
function Fg(e, t) {
	return e.getEditorState().read(() => {
		let e = ud(t);
		return e !== null && e.isSelected();
	});
}
function Ig(e) {
	e.update(() => {
		let e = K();
		Sl(e) && e.clear();
	});
}
function Lg(e, t) {
	let { subscribe: n, set: r } = xt(!1);
	return e.registerUpdateListener(() => {
		r(Fg(e, t));
	}), {
		subscribe: n,
		set: (n) => {
			e.update(() => {
				let e = K();
				Sl(e) || (e = Fl(), vd(e)), Sl(e) && (n ? e.add(t) : e.delete(t));
			});
		}
	};
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/HorizontalRuleComponent.svelte
function Rg(e, t) {
	E(t, !0);
	let n = () => O(a, "$isSelected", r), [r, i] = Et(), a = Lg(t.editor, t.nodeKey), o = t.editor._config.theme.hrSelected ?? "selected";
	Jn(() => {
		n() ? xp(t.self, o) : Sp(t.self, o);
	}), vi(() => Cp(t.editor.registerCommand(ls, (e) => e.target === t.self && (e.shiftKey || Ig(t.editor), k(a, !n()), !0), 1))), D(), i();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/HorizontalRuleNode.js
var zg = U("INSERT_HORIZONTAL_RULE_COMMAND"), Bg = class e extends Cu {
	static getType() {
		return "horizontalrule";
	}
	static clone(t) {
		return new e(t.__key);
	}
	static importJSON(e) {
		return Hg().updateFromJSON(e);
	}
	static importDOM() {
		return { hr: () => ({
			conversion: Vg,
			priority: 0
		}) };
	}
	static skipDecorateRender = !0;
	exportDOM() {
		return { element: document.createElement("hr") };
	}
	createDOM(e, t) {
		let n = document.createElement("hr");
		return xp(n, e.theme.hr), fi(Rg, {
			target: n,
			props: {
				nodeKey: this.__key,
				editor: t,
				self: n
			}
		}), n;
	}
	getTextContent() {
		return "\n";
	}
	isInline() {
		return !1;
	}
	updateDOM() {
		return !1;
	}
	decorate() {
		return null;
	}
};
function Vg() {
	return { node: Hg() };
}
function Hg() {
	return Qd(new Bg());
}
function Ug(e) {
	return e instanceof Bg;
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/HorizontalRulePlugin.svelte
function Wg(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => n.registerCommand(zg, (e) => {
		let t = K();
		return G(t) ? (t.focus.getNode() !== null && im(Hg()), !0) : !1;
	}, 0)), ma(), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Image/ImageResizer.svelte
var Gg = /* @__PURE__ */ R("<button type=\"button\" class=\"image-caption-button\">Add Caption</button>"), Kg = /* @__PURE__ */ R("<div><!> <div class=\"image-resizer image-resizer-n\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-ne\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-e\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-se\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-s\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-sw\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-w\" role=\"button\" tabindex=\"-1\"></div> <div class=\"image-resizer image-resizer-nw\" role=\"button\" tabindex=\"-1\"></div></div>");
function qg(e, t) {
	E(t, !0);
	let n = () => O(t.buttonRef, "$buttonRef", r), [r, i] = Et(), a = /* @__PURE__ */ j(null);
	function o(e, t, n) {
		return Math.min(Math.max(e, t), n);
	}
	let s = {
		east: 1,
		north: 8,
		south: 2,
		west: 4
	}, c = {
		priority: "",
		value: "default"
	}, l = {
		currentHeight: 0,
		currentWidth: 0,
		direction: 0,
		isResizing: !1,
		ratio: 0,
		startHeight: 0,
		startWidth: 0,
		startX: 0,
		startY: 0
	}, u = t.editor.getRootElement(), d = t.maxWidth ? t.maxWidth : u === null ? 100 : u.getBoundingClientRect().width - 20, f = u === null ? 100 : u.getBoundingClientRect().height - 20, p = (e) => {
		let t = e === s.east || e === s.west, n = e === s.north || e === s.south, r = e & s.north && e & s.west || e & s.south && e & s.east, i = t ? "ew" : n ? "ns" : r ? "nwse" : "nesw";
		u !== null && u.style.setProperty("cursor", `${i}-resize`, "important"), document.body !== null && (document.body.style.setProperty("cursor", `${i}-resize`, "important"), c.value = document.body.style.getPropertyValue("-webkit-user-select"), c.priority = document.body.style.getPropertyPriority("-webkit-user-select"), document.body.style.setProperty("-webkit-user-select", "none", "important"));
	}, m = () => {
		u !== null && u.style.setProperty("cursor", "default"), document.body !== null && (document.body.style.setProperty("cursor", "default"), document.body.style.setProperty("-webkit-user-select", c.value, c.priority));
	}, h = (e, n) => {
		if (!t.editor.isEditable()) return;
		let r = t.imageRef, i = I(a);
		if (r !== null && i !== null) {
			e.preventDefault();
			let { width: a, height: o } = r.getBoundingClientRect(), s = dm(r), c = l;
			c.startWidth = a, c.startHeight = o, c.ratio = a / o, c.currentWidth = a, c.currentHeight = o, c.startX = e.clientX / s, c.startY = e.clientY / s, c.isResizing = !0, c.direction = n, p(n), t.onResizeStart(), i.classList.add("image-control-wrapper--resizing"), r.style.height = `${o}px`, r.style.width = `${a}px`, document.addEventListener("pointermove", g), document.addEventListener("pointerup", _);
		}
	}, g = (e) => {
		let n = t.imageRef, r = l, i = r.direction & (s.east | s.west), a = r.direction & (s.south | s.north);
		if (n !== null && r.isResizing) {
			let t = dm(n);
			if (i && a) {
				let i = Math.floor(r.startX - e.clientX / t);
				i = r.direction & s.east ? -i : i;
				let a = o(r.startWidth + i, 100, d), c = a / r.ratio;
				n.style.width = `${a}px`, n.style.height = `${c}px`, r.currentHeight = c, r.currentWidth = a;
			} else if (a) {
				let i = Math.floor(r.startY - e.clientY / t);
				i = r.direction & s.south ? -i : i;
				let a = o(r.startHeight + i, 100, f);
				n.style.height = `${a}px`, r.currentHeight = a;
			} else {
				let i = Math.floor(r.startX - e.clientX / t);
				i = r.direction & s.east ? -i : i;
				let a = o(r.startWidth + i, 100, d);
				n.style.width = `${a}px`, r.currentWidth = a;
			}
		}
	}, _ = () => {
		let e = t.imageRef, n = l, r = I(a);
		if (e !== null && r !== null && n.isResizing) {
			let e = n.currentWidth, i = n.currentHeight;
			n.startWidth = 0, n.startHeight = 0, n.ratio = 0, n.startX = 0, n.startY = 0, n.currentWidth = 0, n.currentHeight = 0, n.isResizing = !1, r.classList.remove("image-control-wrapper--resizing"), m(), t.onResizeEnd(e, i), document.removeEventListener("pointermove", g), document.removeEventListener("pointerup", _);
		}
	};
	var v = Kg(), y = N(v), b = (e) => {
		var r = Gg();
		fa(r, (e) => k(t.buttonRef, e), () => n()), L("click", r, () => {
			t.setShowCaption(!t.showCaption);
		}), z(e, r);
	};
	Ti(y, (e) => {
		!t.showCaption && t.captionsEnabled && e(b);
	});
	var x = P(y, 2), S = P(x, 2), C = P(S, 2), ee = P(C, 2), te = P(ee, 2), ne = P(te, 2), re = P(ne, 2), ie = P(re, 2);
	T(v), fa(v, (e) => M(a, e), () => I(a)), L("pointerdown", x, (e) => {
		h(e, s.north);
	}), L("pointerdown", S, (e) => {
		h(e, s.north | s.east);
	}), L("pointerdown", C, (e) => {
		h(e, s.east);
	}), L("pointerdown", ee, (e) => {
		h(e, s.south | s.east);
	}), L("pointerdown", te, (e) => {
		h(e, s.south);
	}), L("pointerdown", ne, (e) => {
		h(e, s.south | s.west);
	}), L("pointerdown", re, (e) => {
		h(e, s.west);
	}), L("pointerdown", ie, (e) => {
		h(e, s.north | s.west);
	}), z(e, v), D(), i();
}
Qr(["click", "pointerdown"]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/NestedComposer.svelte
function Jg(e, t) {
	E(t, !0);
	let n = V(t, "initialEditor", 15), r = V(t, "initialTheme", 3, null);
	function i(e) {
		let t = e.transform();
		return t === null ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
	}
	rt("editor", n());
	let a = r() || t.parentEditor._config.theme;
	a && n(n()._config.theme = a, !0), n(n()._parentEditor = t.parentEditor, !0);
	let o = n(n()._nodes = new Map(t.parentEditor._nodes), !0);
	for (let [e, t] of o) n()._nodes.set(e, {
		exportDOM: t.exportDOM,
		klass: t.klass,
		replace: t.replace,
		replaceWithKlass: t.replaceWithKlass,
		sharedNodeState: po(t.klass),
		transforms: i(t.klass)
	});
	n(n()._config.namespace = t.parentEditor._config.namespace, !0), n(n()._editable = t.parentEditor._editable, !0), vi(() => t.parentEditor.registerEditableListener((e) => {
		n().setEditable(e);
	}));
	var s = ci();
	_i(Rn(s), () => t.children ?? v), z(e, s), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/ContentEditable.svelte
var Yg = /* @__PURE__ */ R("<div></div>");
function Xg(e, t) {
	E(t, !0);
	let n = V(t, "ariaActiveDescendantID", 19, () => void 0), r = V(t, "ariaAutoComplete", 3, null), i = V(t, "ariaControls", 19, () => void 0), a = V(t, "ariaDescribedBy", 19, () => void 0), o = V(t, "ariaExpanded", 19, () => void 0), s = V(t, "ariaLabel", 19, () => void 0), c = V(t, "ariaLabelledBy", 19, () => void 0), l = V(t, "ariaMultiline", 19, () => void 0), u = V(t, "ariaOwns", 19, () => void 0), d = V(t, "ariaRequired", 19, () => void 0), f = V(t, "autoCapitalize", 19, () => void 0), p = V(t, "className", 3, "ContentEditable__root"), m = V(t, "id", 19, () => void 0), h = V(t, "role", 3, "textbox"), g = V(t, "spellCheck", 3, !0), _ = V(t, "style", 19, () => void 0), v = V(t, "tabIndex", 19, () => void 0), y = V(t, "testid", 19, () => void 0), b = /* @__PURE__ */ j(!1), x = sh(), S = /* @__PURE__ */ j(null);
	vi(() => (I(S) && I(S).ownerDocument && I(S).ownerDocument.defaultView ? x.setRootElement(I(S)) : x.setRootElement(null), M(b, x.isEditable(), !0), x.registerEditableListener((e) => {
		M(b, e, !0);
	})));
	var C = Yg();
	fa(C, (e) => M(S, e), () => I(S)), F(() => {
		B(C, "aria-activedescendant", I(b) ? n() : void 0), B(C, "aria-autocomplete", I(b) ? r() : "none"), B(C, "aria-controls", I(b) ? i() : void 0), B(C, "aria-describedby", a()), B(C, "aria-expanded", I(b) && h() === "combobox" ? !!o() : void 0), B(C, "aria-label", s()), B(C, "aria-labelledby", c()), B(C, "aria-multiline", l()), B(C, "aria-owns", I(b) ? u() : null), B(C, "aria-readonly", !I(b) || void 0), B(C, "aria-required", d()), B(C, "autocapitalize", f()), qi(C, 1, Vi(p())), B(C, "contenteditable", I(b)), B(C, "data-testid", y()), B(C, "id", m()), B(C, "role", h()), B(C, "spellcheck", g()), Yi(C, _()), B(C, "tabindex", v());
	}), z(e, C), D();
}
//#endregion
//#region node_modules/@lexical/text/LexicalText.prod.mjs
function Zg() {
	return gd().getTextContent();
}
function Qg(e, t = !0) {
	if (e) return !1;
	let n = Zg();
	return t && (n = n.trim()), n === "";
}
function $g(e) {
	if (!Qg(e, !1)) return !1;
	let t = gd().getChildren(), n = t.length;
	if (n > 1) return !1;
	for (let e = 0; e < n; e++) {
		let n = t[e];
		if (wu(n)) return !1;
		if (q(n)) {
			if (!Pu(n) || n.__indent !== 0) return !1;
			let t = n.getChildren(), r = t.length;
			for (let n = 0; n < r; n++) {
				let n = t[e];
				if (!W(n)) return !1;
			}
		}
	}
	return !0;
}
function e_(e) {
	return () => $g(e);
}
function t_(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function n_(e, t, n, r) {
	let i = (e) => e instanceof n, a = (e) => {
		let t = dl(e.getTextContent());
		t.setFormat(e.getFormat()), e.replace(t);
	};
	return [e.registerNodeTransform(nl, (e) => {
		if (!e.isSimpleText()) return;
		let n, o = e.getPreviousSibling(), s = e.getTextContent(), c = e;
		if (W(o)) {
			let n = o.getTextContent(), r = t(n + s);
			if (i(o)) {
				if (r === null || ((e) => e.getLatest().__mode)(o) !== 0) return void a(o);
				{
					let t = r.end - n.length;
					if (t > 0) {
						let r = n + s.slice(0, t);
						if (o.select(), o.setTextContent(r), t === s.length) e.remove();
						else {
							let n = s.slice(t);
							e.setTextContent(n);
						}
						return;
					}
				}
			} else if (r === null || r.start < n.length) return;
		}
		let l = 0;
		for (;;) {
			n = t(s);
			let e, u = n === null ? "" : s.slice(n.end);
			if (s = u, u === "") {
				let e = c.getNextSibling();
				if (W(e)) {
					u = c.getTextContent() + e.getTextContent();
					let n = t(u);
					if (n === null) return void (i(e) ? a(e) : e.markDirty());
					if (n.start !== 0) return;
				}
			}
			if (n === null) return;
			if (n.start === 0 && W(o) && o.isTextEntity()) {
				l += n.end;
				continue;
			}
			n.start === 0 ? [e, c] = c.splitText(n.end) : [, e, c] = c.splitText(n.start + l, n.end + l), e === void 0 && t_(165, "nodeToReplace");
			let d = r(e);
			if (d.setFormat(e.getFormat()), e.replace(d), c == null) return;
			l = 0, o = d;
		}
	}), e.registerNodeTransform(n, (e) => {
		let n = e.getTextContent(), r = t(n);
		if (r === null || r.start !== 0) return void a(e);
		if (n.length > r.end) return void e.splitText(r.end);
		let o = e.getPreviousSibling();
		W(o) && o.isTextEntity() && (a(o), a(e));
		let s = e.getNextSibling();
		W(s) && s.isTextEntity() && (a(s), i(e) && a(e));
	})];
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/PlaceHolder.svelte
var r_ = /* @__PURE__ */ R("<div><!></div>");
function i_(e, t) {
	E(t, !0);
	let n = V(t, "className", 3, "Placeholder__root"), r = sh(), i = /* @__PURE__ */ j(!0);
	vi(() => Cp(r.registerUpdateListener(() => {
		M(i, a(r), !0);
	}), r.registerEditableListener(() => {
		M(i, a(r), !0);
	})));
	function a(e) {
		return e.getEditorState().read(e_(e.isComposing()));
	}
	var o = ci(), s = Rn(o), c = (e) => {
		var r = r_();
		_i(N(r), () => t.children ?? v), T(r), F(() => qi(r, 1, Vi(n()), "svelte-o8kgqf")), z(e, r);
	};
	Ti(s, (e) => {
		I(i) && e(c);
	}), z(e, o), D();
}
//#endregion
//#region node_modules/prismjs/components/prism-cpp.js
(/* @__PURE__ */ e(((e, t) => {
	var n = function(e) {
		var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, r = {}, i = {
			manual: e.Prism && e.Prism.manual,
			disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
			util: {
				encode: function e(t) {
					return t instanceof a ? new a(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(e) {
					return Object.prototype.toString.call(e).slice(8, -1);
				},
				objId: function(e) {
					return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id;
				},
				clone: function e(t, n) {
					n ||= {};
					var r, a;
					switch (i.util.type(t)) {
						case "Object":
							if (a = i.util.objId(t), n[a]) return n[a];
							for (var o in r = {}, n[a] = r, t) t.hasOwnProperty(o) && (r[o] = e(t[o], n));
							return r;
						case "Array": return a = i.util.objId(t), n[a] ? n[a] : (r = [], n[a] = r, t.forEach(function(t, i) {
							r[i] = e(t, n);
						}), r);
						default: return t;
					}
				},
				getLanguage: function(e) {
					for (; e;) {
						var n = t.exec(e.className);
						if (n) return n[1].toLowerCase();
						e = e.parentElement;
					}
					return "none";
				},
				setLanguage: function(e, n) {
					e.className = e.className.replace(RegExp(t, "gi"), ""), e.classList.add("language-" + n);
				},
				currentScript: function() {
					if (typeof document > "u") return null;
					if (document.currentScript && document.currentScript.tagName === "SCRIPT") return document.currentScript;
					try {
						throw Error();
					} catch (r) {
						var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
						if (e) {
							var t = document.getElementsByTagName("script");
							for (var n in t) if (t[n].src == e) return t[n];
						}
						return null;
					}
				},
				isActive: function(e, t, n) {
					for (var r = "no-" + t; e;) {
						var i = e.classList;
						if (i.contains(t)) return !0;
						if (i.contains(r)) return !1;
						e = e.parentElement;
					}
					return !!n;
				}
			},
			languages: {
				plain: r,
				plaintext: r,
				text: r,
				txt: r,
				extend: function(e, t) {
					var n = i.util.clone(i.languages[e]);
					for (var r in t) n[r] = t[r];
					return n;
				},
				insertBefore: function(e, t, n, r) {
					r ||= i.languages;
					var a = r[e], o = {};
					for (var s in a) if (a.hasOwnProperty(s)) {
						if (s == t) for (var c in n) n.hasOwnProperty(c) && (o[c] = n[c]);
						n.hasOwnProperty(s) || (o[s] = a[s]);
					}
					var l = r[e];
					return r[e] = o, i.languages.DFS(i.languages, function(t, n) {
						n === l && t != e && (this[t] = o);
					}), o;
				},
				DFS: function e(t, n, r, a) {
					a ||= {};
					var o = i.util.objId;
					for (var s in t) if (t.hasOwnProperty(s)) {
						n.call(t, s, t[s], r || s);
						var c = t[s], l = i.util.type(c);
						l === "Object" && !a[o(c)] ? (a[o(c)] = !0, e(c, n, null, a)) : l === "Array" && !a[o(c)] && (a[o(c)] = !0, e(c, n, s, a));
					}
				}
			},
			plugins: {},
			highlightAll: function(e, t) {
				i.highlightAllUnder(document, e, t);
			},
			highlightAllUnder: function(e, t, n) {
				var r = {
					callback: n,
					container: e,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				i.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), i.hooks.run("before-all-elements-highlight", r);
				for (var a = 0, o; o = r.elements[a++];) i.highlightElement(o, t === !0, r.callback);
			},
			highlightElement: function(t, n, r) {
				var a = i.util.getLanguage(t), o = i.languages[a];
				i.util.setLanguage(t, a);
				var s = t.parentElement;
				s && s.nodeName.toLowerCase() === "pre" && i.util.setLanguage(s, a);
				var c = {
					element: t,
					language: a,
					grammar: o,
					code: t.textContent
				};
				function l(e) {
					c.highlightedCode = e, i.hooks.run("before-insert", c), c.element.innerHTML = c.highlightedCode, i.hooks.run("after-highlight", c), i.hooks.run("complete", c), r && r.call(c.element);
				}
				if (i.hooks.run("before-sanity-check", c), s = c.element.parentElement, s && s.nodeName.toLowerCase() === "pre" && !s.hasAttribute("tabindex") && s.setAttribute("tabindex", "0"), !c.code) {
					i.hooks.run("complete", c), r && r.call(c.element);
					return;
				}
				if (i.hooks.run("before-highlight", c), !c.grammar) {
					l(i.util.encode(c.code));
					return;
				}
				if (n && e.Worker) {
					var u = new Worker(i.filename);
					u.onmessage = function(e) {
						l(e.data);
					}, u.postMessage(JSON.stringify({
						language: c.language,
						code: c.code,
						immediateClose: !0
					}));
				} else l(i.highlight(c.code, c.grammar, c.language));
			},
			highlight: function(e, t, n) {
				var r = {
					code: e,
					grammar: t,
					language: n
				};
				if (i.hooks.run("before-tokenize", r), !r.grammar) throw Error("The language \"" + r.language + "\" has no grammar.");
				return r.tokens = i.tokenize(r.code, r.grammar), i.hooks.run("after-tokenize", r), a.stringify(i.util.encode(r.tokens), r.language);
			},
			tokenize: function(e, t) {
				var n = t.rest;
				if (n) {
					for (var r in n) t[r] = n[r];
					delete t.rest;
				}
				var i = new c();
				return l(i, i.head, e), s(e, i, t, i.head, 0), d(i);
			},
			hooks: {
				all: {},
				add: function(e, t) {
					var n = i.hooks.all;
					n[e] = n[e] || [], n[e].push(t);
				},
				run: function(e, t) {
					var n = i.hooks.all[e];
					if (!(!n || !n.length)) for (var r = 0, a; a = n[r++];) a(t);
				}
			},
			Token: a
		};
		e.Prism = i;
		function a(e, t, n, r) {
			this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0;
		}
		a.stringify = function e(t, n) {
			if (typeof t == "string") return t;
			if (Array.isArray(t)) {
				var r = "";
				return t.forEach(function(t) {
					r += e(t, n);
				}), r;
			}
			var a = {
				type: t.type,
				content: e(t.content, n),
				tag: "span",
				classes: ["token", t.type],
				attributes: {},
				language: n
			}, o = t.alias;
			o && (Array.isArray(o) ? Array.prototype.push.apply(a.classes, o) : a.classes.push(o)), i.hooks.run("wrap", a);
			var s = "";
			for (var c in a.attributes) s += " " + c + "=\"" + (a.attributes[c] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + a.tag + " class=\"" + a.classes.join(" ") + "\"" + s + ">" + a.content + "</" + a.tag + ">";
		};
		function o(e, t, n, r) {
			e.lastIndex = t;
			var i = e.exec(n);
			if (i && r && i[1]) {
				var a = i[1].length;
				i.index += a, i[0] = i[0].slice(a);
			}
			return i;
		}
		function s(e, t, n, r, c, d) {
			for (var f in n) if (!(!n.hasOwnProperty(f) || !n[f])) {
				var p = n[f];
				p = Array.isArray(p) ? p : [p];
				for (var m = 0; m < p.length; ++m) {
					if (d && d.cause == f + "," + m) return;
					var h = p[m], g = h.inside, _ = !!h.lookbehind, v = !!h.greedy, y = h.alias;
					if (v && !h.pattern.global) {
						var b = h.pattern.toString().match(/[imsuy]*$/)[0];
						h.pattern = RegExp(h.pattern.source, b + "g");
					}
					for (var x = h.pattern || h, S = r.next, C = c; S !== t.tail && !(d && C >= d.reach); C += S.value.length, S = S.next) {
						var ee = S.value;
						if (t.length > e.length) return;
						if (!(ee instanceof a)) {
							var te = 1, ne;
							if (v) {
								if (ne = o(x, C, e, _), !ne || ne.index >= e.length) break;
								var re = ne.index, ie = ne.index + ne[0].length, ae = C;
								for (ae += S.value.length; re >= ae;) S = S.next, ae += S.value.length;
								if (ae -= S.value.length, C = ae, S.value instanceof a) continue;
								for (var oe = S; oe !== t.tail && (ae < ie || typeof oe.value == "string"); oe = oe.next) te++, ae += oe.value.length;
								te--, ee = e.slice(C, ae), ne.index -= C;
							} else if (ne = o(x, 0, ee, _), !ne) continue;
							var re = ne.index, se = ne[0], ce = ee.slice(0, re), le = ee.slice(re + se.length), ue = C + ee.length;
							d && ue > d.reach && (d.reach = ue);
							var de = S.prev;
							ce && (de = l(t, de, ce), C += ce.length), u(t, de, te);
							var fe = new a(f, g ? i.tokenize(se, g) : se, y, se);
							if (S = l(t, de, fe), le && l(t, S, le), te > 1) {
								var pe = {
									cause: f + "," + m,
									reach: ue
								};
								s(e, t, n, S.prev, C, pe), d && pe.reach > d.reach && (d.reach = pe.reach);
							}
						}
					}
				}
			}
		}
		function c() {
			var e = {
				value: null,
				prev: null,
				next: null
			}, t = {
				value: null,
				prev: e,
				next: null
			};
			e.next = t, this.head = e, this.tail = t, this.length = 0;
		}
		function l(e, t, n) {
			var r = t.next, i = {
				value: n,
				prev: t,
				next: r
			};
			return t.next = i, r.prev = i, e.length++, i;
		}
		function u(e, t, n) {
			for (var r = t.next, i = 0; i < n && r !== e.tail; i++) r = r.next;
			t.next = r, r.prev = t, e.length -= i;
		}
		function d(e) {
			for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next;
			return t;
		}
		if (!e.document) return e.addEventListener && (i.disableWorkerMessageHandler || e.addEventListener("message", function(t) {
			var n = JSON.parse(t.data), r = n.language, a = n.code, o = n.immediateClose;
			e.postMessage(i.highlight(a, i.languages[r], r)), o && e.close();
		}, !1)), i;
		var f = i.util.currentScript();
		f && (i.filename = f.src, f.hasAttribute("data-manual") && (i.manual = !0));
		function p() {
			i.manual || i.highlightAll();
		}
		if (!i.manual) {
			var m = document.readyState;
			m === "loading" || m === "interactive" && f && f.defer ? document.addEventListener("DOMContentLoaded", p) : window.requestAnimationFrame ? window.requestAnimationFrame(p) : window.setTimeout(p, 16);
		}
		return i;
	}(typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {});
	t !== void 0 && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n), n.languages.markup = {
		comment: {
			pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
			greedy: !0
		},
		prolog: {
			pattern: /<\?[\s\S]+?\?>/,
			greedy: !0
		},
		doctype: {
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: !0,
			inside: {
				"internal-subset": {
					pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
					lookbehind: !0,
					greedy: !0,
					inside: null
				},
				string: {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: !0
				},
				punctuation: /^<!|>$|[[\]]/,
				"doctype-tag": /^DOCTYPE/i,
				name: /[^\s<>'"]+/
			}
		},
		cdata: {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			greedy: !0
		},
		tag: {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
			greedy: !0,
			inside: {
				tag: {
					pattern: /^<\/?[^\s>\/]+/,
					inside: {
						punctuation: /^<\/?/,
						namespace: /^[^\s>\/:]+:/
					}
				},
				"special-attr": [],
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: { punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: !0
					}] }
				},
				punctuation: /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: { namespace: /^[^\s>\/:]+:/ }
				}
			}
		},
		entity: [{
			pattern: /&[\da-z]{1,8};/i,
			alias: "named-entity"
		}, /&#x?[\da-f]{1,8};/i]
	}, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(e) {
		e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
	}), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(e, t) {
		var r = {};
		r["language-" + t] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: !0,
			inside: n.languages[t]
		}, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
		var i = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: r
		} };
		i["language-" + t] = {
			pattern: /[\s\S]+/,
			inside: n.languages[t]
		};
		var a = {};
		a[e] = {
			pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)".replace(/__/g, function() {
				return e;
			}), "i"),
			lookbehind: !0,
			greedy: !0,
			inside: i
		}, n.languages.insertBefore("markup", "cdata", a);
	} }), Object.defineProperty(n.languages.markup.tag, "addAttribute", { value: function(e, t) {
		n.languages.markup.tag.inside["special-attr"].push({
			pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
			lookbehind: !0,
			inside: {
				"attr-name": /^[^\s=]+/,
				"attr-value": {
					pattern: /=[\s\S]+/,
					inside: {
						value: {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: !0,
							alias: [t, "language-" + t],
							inside: n.languages[t]
						},
						punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml, (function(e) {
		var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
		e.languages.css = {
			comment: /\/\*[\s\S]*?\*\//,
			atrule: {
				pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
				inside: {
					rule: /^@[\w-]+/,
					"selector-function-argument": {
						pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
						lookbehind: !0,
						alias: "selector"
					},
					keyword: {
						pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
						lookbehind: !0
					}
				}
			},
			url: {
				pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\\r\\n()\"']|\\\\[\\s\\S])*)\\)", "i"),
				greedy: !0,
				inside: {
					function: /^url/i,
					punctuation: /^\(|\)$/,
					string: {
						pattern: RegExp("^" + t.source + "$"),
						alias: "url"
					}
				}
			},
			selector: {
				pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
				lookbehind: !0
			},
			string: {
				pattern: t,
				greedy: !0
			},
			property: {
				pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
				lookbehind: !0
			},
			important: /!important\b/i,
			function: {
				pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
				lookbehind: !0
			},
			punctuation: /[(){};:,]/
		}, e.languages.css.atrule.inside.rest = e.languages.css;
		var n = e.languages.markup;
		n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
	})(n), n.languages.clike = {
		comment: [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: !0
		},
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: !0,
			inside: { punctuation: /[.\\]/ }
		},
		keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
		boolean: /\b(?:false|true)\b/,
		function: /\b\w+(?=\()/,
		number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		punctuation: /[{}[\];(),.:]/
	}, n.languages.javascript = n.languages.extend("clike", {
		"class-name": [n.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: !0
		}],
		keyword: [{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: !0
		}, {
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0
		}],
		function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		number: {
			pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
			lookbehind: !0
		},
		operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	}), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
		regex: {
			pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: "language-regex",
					inside: n.languages.regex
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/
			}
		},
		"function-variable": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function"
		},
		parameter: [
			{
				pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: n.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: n.languages.javascript
			}
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	}), n.languages.insertBefore("javascript", "string", {
		hashbang: {
			pattern: /^#!.*/,
			greedy: !0,
			alias: "comment"
		},
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: n.languages.javascript
					}
				},
				string: /[\s\S]+/
			}
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: !0,
			greedy: !0,
			alias: "property"
		}
	}), n.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: !0,
		alias: "property"
	} }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), n.languages.js = n.languages.javascript, (function() {
		if (n === void 0 || typeof document > "u") return;
		Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
		var e = "Loading…", t = function(e, t) {
			return "✖ Error " + e + " while fetching file: " + t;
		}, r = "✖ Error: File does not exist or is empty", i = {
			js: "javascript",
			py: "python",
			rb: "ruby",
			ps1: "powershell",
			psm1: "powershell",
			sh: "bash",
			bat: "batch",
			h: "c",
			tex: "latex"
		}, a = "data-src-status", o = "loading", s = "loaded", c = "failed", l = "pre[data-src]:not([" + a + "=\"" + s + "\"]):not([" + a + "=\"" + o + "\"])";
		function u(e, n, i) {
			var a = new XMLHttpRequest();
			a.open("GET", e, !0), a.onreadystatechange = function() {
				a.readyState == 4 && (a.status < 400 && a.responseText ? n(a.responseText) : a.status >= 400 ? i(t(a.status, a.statusText)) : i(r));
			}, a.send(null);
		}
		function d(e) {
			var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "");
			if (t) {
				var n = Number(t[1]), r = t[2], i = t[3];
				return r ? i ? [n, Number(i)] : [n, void 0] : [n, n];
			}
		}
		n.hooks.add("before-highlightall", function(e) {
			e.selector += ", " + l;
		}), n.hooks.add("before-sanity-check", function(t) {
			var r = t.element;
			if (r.matches(l)) {
				t.code = "", r.setAttribute(a, o);
				var f = r.appendChild(document.createElement("CODE"));
				f.textContent = e;
				var p = r.getAttribute("data-src"), m = t.language;
				if (m === "none") {
					var h = (/\.(\w+)$/.exec(p) || [, "none"])[1];
					m = i[h] || h;
				}
				n.util.setLanguage(f, m), n.util.setLanguage(r, m);
				var g = n.plugins.autoloader;
				g && g.loadLanguages(m), u(p, function(e) {
					r.setAttribute(a, s);
					var t = d(r.getAttribute("data-range"));
					if (t) {
						var i = e.split(/\r\n?|\n/g), o = t[0], c = t[1] == null ? i.length : t[1];
						o < 0 && (o += i.length), o = Math.max(0, Math.min(o - 1, i.length)), c < 0 && (c += i.length), c = Math.max(0, Math.min(c, i.length)), e = i.slice(o, c).join("\n"), r.hasAttribute("data-start") || r.setAttribute("data-start", String(o + 1));
					}
					f.textContent = e, n.highlightElement(f);
				}, function(e) {
					r.setAttribute(a, c), f.textContent = e;
				});
			}
		}), n.plugins.fileHighlight = { highlight: function(e) {
			for (var t = (e || document).querySelectorAll(l), r = 0, i; i = t[r++];) n.highlightElement(i);
		} };
		var f = !1;
		n.fileHighlight = function() {
			f ||= (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), !0), n.plugins.fileHighlight.highlight.apply(this, arguments);
		};
	})();
})))(), Prism.languages.clike = {
	comment: [{
		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
		lookbehind: !0,
		greedy: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ }
	},
	keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	boolean: /\b(?:false|true)\b/,
	function: /\b\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
	"class-name": [Prism.languages.clike["class-name"], {
		pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
		lookbehind: !0
	}],
	keyword: [{
		pattern: /((?:^|\})\s*)catch\b/,
		lookbehind: !0
	}, {
		pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0
	}],
	function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number: {
		pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
		lookbehind: !0
	},
	operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)\\/(?:(?:\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.|\\[(?:[^[\\]\\\\\\r\\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|\\/\\*(?:[^*]|\\*(?!\\/))*\\*\\/)*(?:$|[\\r\\n,.;:})\\]]|\\/\\/))"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			"regex-source": {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: !0,
				alias: "language-regex",
				inside: Prism.languages.regex
			},
			"regex-delimiter": /^\/|\/$/,
			"regex-flags": /^[a-z]+$/
		}
	},
	"function-variable": {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: "function"
	},
	parameter: [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: !0,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: !0,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: !0,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: !0,
			inside: Prism.languages.javascript
		}
	],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
	hashbang: {
		pattern: /^#!.*/,
		greedy: !0,
		alias: "comment"
	},
	"template-string": {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: !0,
		inside: {
			"template-punctuation": {
				pattern: /^`|`$/,
				alias: "string"
			},
			interpolation: {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: !0,
				inside: {
					"interpolation-punctuation": {
						pattern: /^\$\{|\}$/,
						alias: "punctuation"
					},
					rest: Prism.languages.javascript
				}
			},
			string: /[\s\S]+/
		}
	},
	"string-property": {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: !0,
		greedy: !0,
		alias: "property"
	}
}), Prism.languages.insertBefore("javascript", "operator", { "literal-property": {
	pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
	lookbehind: !0,
	alias: "property"
} }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript, Prism.languages.markup = {
	comment: {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: !0
	},
	prolog: {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: !0
	},
	doctype: {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			"internal-subset": {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null
			},
			string: {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: !0
			},
			punctuation: /^<!|>$|[[\]]/,
			"doctype-tag": /^DOCTYPE/i,
			name: /[^\s<>'"]+/
		}
	},
	cdata: {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: !0
	},
	tag: {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					punctuation: /^<\/?/,
					namespace: /^[^\s>\/:]+:/
				}
			},
			"special-attr": [],
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: { punctuation: [{
					pattern: /^=/,
					alias: "attr-equals"
				}, {
					pattern: /^(\s*)["']|["']$/,
					lookbehind: !0
				}] }
			},
			punctuation: /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ }
			}
		}
	},
	entity: [{
		pattern: /&[\da-z]{1,8};/i,
		alias: "named-entity"
	}, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function(e) {
	e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function(e, t) {
	var n = {};
	n["language-" + t] = {
		pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
		lookbehind: !0,
		inside: Prism.languages[t]
	}, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
	var r = { "included-cdata": {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		inside: n
	} };
	r["language-" + t] = {
		pattern: /[\s\S]+/,
		inside: Prism.languages[t]
	};
	var i = {};
	i[e] = {
		pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[\\s\\S])*?(?=<\\/__>)".replace(/__/g, function() {
			return e;
		}), "i"),
		lookbehind: !0,
		greedy: !0,
		inside: r
	}, Prism.languages.insertBefore("markup", "cdata", i);
} }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(e, t) {
	Prism.languages.markup.tag.inside["special-attr"].push({
		pattern: RegExp("(^|[\"'\\s])(?:" + e + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
		lookbehind: !0,
		inside: {
			"attr-name": /^[^\s=]+/,
			"attr-value": {
				pattern: /=[\s\S]+/,
				inside: {
					value: {
						pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
						lookbehind: !0,
						alias: [t, "language-" + t],
						inside: Prism.languages[t]
					},
					punctuation: [{
						pattern: /^=/,
						alias: "attr-equals"
					}, /"|'/]
				}
			}
		}
	});
} }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml, (function(e) {
	function t(e) {
		return e = e.replace(/<inner>/g, function() {
			return "(?:\\\\.|[^\\\\\\n\\r]|(?:\\n|\\r\\n?)(?![\\r\\n]))";
		}), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + e + ")");
	}
	var n = "(?:\\\\.|``(?:[^`\\r\\n]|`(?!`))+``|`[^`\\r\\n]+`|[^\\\\|\\r\\n`])+", r = "\\|?__(?:\\|__)+\\|?(?:(?:\\n|\\r\\n?)|(?![\\s\\S]))".replace(/__/g, function() {
		return n;
	}), i = "\\|?[ \\t]*:?-{3,}:?[ \\t]*(?:\\|[ \\t]*:?-{3,}:?[ \\t]*)+\\|?(?:\\n|\\r\\n?)";
	e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
		"front-matter-block": {
			pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				punctuation: /^---|---$/,
				"front-matter": {
					pattern: /\S+(?:\s+\S+)*/,
					alias: ["yaml", "language-yaml"],
					inside: e.languages.yaml
				}
			}
		},
		blockquote: {
			pattern: /^>(?:[\t ]*>)*/m,
			alias: "punctuation"
		},
		table: {
			pattern: RegExp("^" + r + i + "(?:" + r + ")*", "m"),
			inside: {
				"table-data-rows": {
					pattern: RegExp("^(" + r + i + ")(?:" + r + ")*$"),
					lookbehind: !0,
					inside: {
						"table-data": {
							pattern: RegExp(n),
							inside: e.languages.markdown
						},
						punctuation: /\|/
					}
				},
				"table-line": {
					pattern: RegExp("^(" + r + ")" + i + "$"),
					lookbehind: !0,
					inside: { punctuation: /\||:?-{3,}:?/ }
				},
				"table-header-row": {
					pattern: RegExp("^" + r + "$"),
					inside: {
						"table-header": {
							pattern: RegExp(n),
							alias: "important",
							inside: e.languages.markdown
						},
						punctuation: /\|/
					}
				}
			}
		},
		code: [{
			pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
			lookbehind: !0,
			alias: "keyword"
		}, {
			pattern: /^```[\s\S]*?^```$/m,
			greedy: !0,
			inside: {
				"code-block": {
					pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
					lookbehind: !0
				},
				"code-language": {
					pattern: /^(```).+/,
					lookbehind: !0
				},
				punctuation: /```/
			}
		}],
		title: [{
			pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
			alias: "important",
			inside: { punctuation: /==+$|--+$/ }
		}, {
			pattern: /(^\s*)#.+/m,
			lookbehind: !0,
			alias: "important",
			inside: { punctuation: /^#+|#+$/ }
		}],
		hr: {
			pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
			lookbehind: !0,
			alias: "punctuation"
		},
		list: {
			pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
			lookbehind: !0,
			alias: "punctuation"
		},
		"url-reference": {
			pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
			inside: {
				variable: {
					pattern: /^(!?\[)[^\]]+/,
					lookbehind: !0
				},
				string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
				punctuation: /^[\[\]!:]|[<>]/
			},
			alias: "url"
		},
		bold: {
			pattern: t("\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^..)[\s\S]+(?=..$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /\*\*|__/
			}
		},
		italic: {
			pattern: t("\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^.)[\s\S]+(?=.$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /[*_]/
			}
		},
		strike: {
			pattern: t("(~~?)(?:(?!~)<inner>)+\\2"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				content: {
					pattern: /(^~~?)[\s\S]+(?=\1$)/,
					lookbehind: !0,
					inside: {}
				},
				punctuation: /~~?/
			}
		},
		"code-snippet": {
			pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
			lookbehind: !0,
			greedy: !0,
			alias: ["code", "keyword"]
		},
		url: {
			pattern: t("!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\\t ]+\"(?:\\\\.|[^\"\\\\])*\")?\\)|[ \\t]?\\[(?:(?!\\])<inner>)+\\])"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				operator: /^!/,
				content: {
					pattern: /(^\[)[^\]]+(?=\])/,
					lookbehind: !0,
					inside: {}
				},
				variable: {
					pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
					lookbehind: !0
				},
				url: {
					pattern: /(^\]\()[^\s)]+/,
					lookbehind: !0
				},
				string: {
					pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
					lookbehind: !0
				}
			}
		}
	}), [
		"url",
		"bold",
		"italic",
		"strike"
	].forEach(function(t) {
		[
			"url",
			"bold",
			"italic",
			"strike",
			"code-snippet"
		].forEach(function(n) {
			t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n]);
		});
	}), e.hooks.add("after-tokenize", function(e) {
		if (e.language !== "markdown" && e.language !== "md") return;
		function t(e) {
			if (!(!e || typeof e == "string")) for (var n = 0, r = e.length; n < r; n++) {
				var i = e[n];
				if (i.type !== "code") {
					t(i.content);
					continue;
				}
				var a = i.content[1], o = i.content[3];
				if (a && o && a.type === "code-language" && o.type === "code-block" && typeof a.content == "string") {
					var s = a.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
					s = (/[a-z][\w-]*/i.exec(s) || [""])[0].toLowerCase();
					var c = "language-" + s;
					o.alias ? typeof o.alias == "string" ? o.alias = [o.alias, c] : o.alias.push(c) : o.alias = [c];
				}
			}
		}
		t(e.tokens);
	}), e.hooks.add("wrap", function(t) {
		if (t.type === "code-block") {
			for (var n = "", r = 0, i = t.classes.length; r < i; r++) {
				var a = t.classes[r], o = /language-(.+)/.exec(a);
				if (o) {
					n = o[1];
					break;
				}
			}
			var s = e.languages[n];
			if (s) t.content = e.highlight(c(t.content), s, n);
			else if (n && n !== "none" && e.plugins.autoloader) {
				var l = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 0x2386f26fc10000);
				t.attributes.id = l, e.plugins.autoloader.loadLanguages(n, function() {
					var t = document.getElementById(l);
					t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n));
				});
			}
		}
	});
	var a = RegExp(e.languages.markup.tag.pattern.source, "gi"), o = {
		amp: "&",
		lt: "<",
		gt: ">",
		quot: "\""
	}, s = String.fromCodePoint || String.fromCharCode;
	function c(e) {
		var t = e.replace(a, "");
		return t = t.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(e, t) {
			return t = t.toLowerCase(), t[0] === "#" ? s(t[1] === "x" ? parseInt(t.slice(2), 16) : Number(t.slice(1))) : o[t] || e;
		}), t;
	}
	e.languages.md = e.languages.markdown;
})(Prism), Prism.languages.c = Prism.languages.extend("clike", {
	comment: {
		pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: !0
	},
	string: {
		pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: !0
	},
	"class-name": {
		pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
		lookbehind: !0
	},
	keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
	operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}), Prism.languages.insertBefore("c", "string", { char: {
	pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
	greedy: !0
} }), Prism.languages.insertBefore("c", "string", { macro: {
	pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
	lookbehind: !0,
	greedy: !0,
	alias: "property",
	inside: {
		string: [{
			pattern: /^(#\s*include\s*)<[^>]+>/,
			lookbehind: !0
		}, Prism.languages.c.string],
		char: Prism.languages.c.char,
		comment: Prism.languages.c.comment,
		"macro-name": [{
			pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
			lookbehind: !0
		}, {
			pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
			lookbehind: !0,
			alias: "function"
		}],
		directive: {
			pattern: /^(#\s*)[a-z]+/,
			lookbehind: !0,
			alias: "keyword"
		},
		"directive-hash": /^#/,
		punctuation: /##|\\(?=[\r\n])/,
		expression: {
			pattern: /\S[\s\S]*/,
			inside: Prism.languages.c
		}
	}
} }), Prism.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete Prism.languages.c.boolean, (function(e) {
	var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	e.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + t.source + ")*?(?:;|(?=\\s*\\{))"),
			inside: {
				rule: /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: "selector"
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0
				}
			}
		},
		url: {
			pattern: RegExp("\\burl\\((?:" + t.source + "|(?:[^\\\\\\r\\n()\"']|\\\\[\\s\\S])*)\\)", "i"),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: {
					pattern: RegExp("^" + t.source + "$"),
					alias: "url"
				}
			}
		},
		selector: {
			pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
			lookbehind: !0
		},
		string: {
			pattern: t,
			greedy: !0
		},
		property: {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0
		},
		important: /!important\b/i,
		function: {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: !0
		},
		punctuation: /[(){};:,]/
	}, e.languages.css.atrule.inside.rest = e.languages.css;
	var n = e.languages.markup;
	n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(Prism), Prism.languages.objectivec = Prism.languages.extend("c", {
	string: {
		pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
		greedy: !0
	},
	keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
	operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec, Prism.languages.sql = {
	comment: {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
		lookbehind: !0
	},
	variable: [{
		pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
		greedy: !0
	}, /@[\w.$]+/],
	string: {
		pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
		greedy: !0,
		lookbehind: !0
	},
	identifier: {
		pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
		greedy: !0,
		lookbehind: !0,
		inside: { punctuation: /^`|`$/ }
	},
	function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
	keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
	boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
	number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
	operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
	punctuation: /[;[\]()`,.]/
}, (function(e) {
	var t = e.languages.powershell = {
		comment: [{
			pattern: /(^|[^`])<#[\s\S]*?#>/,
			lookbehind: !0
		}, {
			pattern: /(^|[^`])#.*/,
			lookbehind: !0
		}],
		string: [{
			pattern: /"(?:`[\s\S]|[^`"])*"/,
			greedy: !0,
			inside: null
		}, {
			pattern: /'(?:[^']|'')*'/,
			greedy: !0
		}],
		namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
		boolean: /\$(?:false|true)\b/i,
		variable: /\$\w+\b/,
		function: [/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i, /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
		keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
		operator: {
			pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
			lookbehind: !0
		},
		punctuation: /[|{}[\];(),.]/
	};
	t.string[0].inside = {
		function: {
			pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
			lookbehind: !0,
			inside: t
		},
		boolean: t.boolean,
		variable: t.variable
	};
})(Prism), Prism.languages.python = {
	comment: {
		pattern: /(^|[^\\])#.*/,
		lookbehind: !0,
		greedy: !0
	},
	"string-interpolation": {
		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: !0,
				inside: {
					"format-spec": {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: !0
					},
					"conversion-option": {
						pattern: /![sra](?=[:}]$)/,
						alias: "punctuation"
					},
					rest: null
				}
			},
			string: /[\s\S]+/
		}
	},
	"triple-quoted-string": {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: !0,
		alias: "string"
	},
	string: {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: !0
	},
	function: {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: !0
	},
	"class-name": {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: !0
	},
	decorator: {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: !0,
		alias: ["annotation", "punctuation"],
		inside: { punctuation: /\./ }
	},
	keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	boolean: /\b(?:False|None|True)\b/,
	number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	punctuation: /[{}[\];(),.:]/
}, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python, (function(e) {
	for (var t = "\\/\\*(?:[^*/]|\\*(?!\\/)|\\/(?!\\*)|<self>)*\\*\\/", n = 0; n < 2; n++) t = t.replace(/<self>/g, function() {
		return t;
	});
	t = t.replace(/<self>/g, function() {
		return "[^\\s\\S]";
	}), e.languages.rust = {
		comment: [{
			pattern: RegExp("(^|[^\\\\])" + t),
			lookbehind: !0,
			greedy: !0
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: !0,
			greedy: !0
		}],
		string: {
			pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
			greedy: !0
		},
		char: {
			pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
			greedy: !0
		},
		attribute: {
			pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
			greedy: !0,
			alias: "attr-name",
			inside: { string: null }
		},
		"closure-params": {
			pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				"closure-punctuation": {
					pattern: /^\||\|$/,
					alias: "punctuation"
				},
				rest: null
			}
		},
		"lifetime-annotation": {
			pattern: /'\w+/,
			alias: "symbol"
		},
		"fragment-specifier": {
			pattern: /(\$\w+:)[a-z]+/,
			lookbehind: !0,
			alias: "punctuation"
		},
		variable: /\$\w+/,
		"function-definition": {
			pattern: /(\bfn\s+)\w+/,
			lookbehind: !0,
			alias: "function"
		},
		"type-definition": {
			pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
			lookbehind: !0,
			alias: "class-name"
		},
		"module-declaration": [{
			pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
			lookbehind: !0,
			alias: "namespace"
		}, {
			pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
			lookbehind: !0,
			alias: "namespace",
			inside: { punctuation: /::/ }
		}],
		keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],
		function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
		macro: {
			pattern: /\b\w+!/,
			alias: "property"
		},
		constant: /\b[A-Z_][A-Z_\d]+\b/,
		"class-name": /\b[A-Z]\w*\b/,
		namespace: {
			pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
			inside: { punctuation: /::/ }
		},
		number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
		boolean: /\b(?:false|true)\b/,
		punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
		operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
	}, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(Prism), Prism.languages.swift = {
	comment: {
		pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
		lookbehind: !0,
		greedy: !0
	},
	"string-literal": [{
		pattern: RegExp("(^|[^\"#])(?:\"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^(])|[^\\\\\\r\\n\"])*\"|\"\"\"(?:\\\\(?:\\((?:[^()]|\\([^()]*\\))*\\)|[^(])|[^\\\\\"]|\"(?!\"\"))*\"\"\")(?![\"#])"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
				lookbehind: !0,
				inside: null
			},
			"interpolation-punctuation": {
				pattern: /^\)|\\\($/,
				alias: "punctuation"
			},
			punctuation: /\\(?=[\r\n])/,
			string: /[\s\S]+/
		}
	}, {
		pattern: RegExp("(^|[^\"#])(#+)(?:\"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|\\r\\n|[^#])|[^\\\\\\r\\n])*?\"|\"\"\"(?:\\\\(?:#+\\((?:[^()]|\\([^()]*\\))*\\)|[^#])|[^\\\\])*?\"\"\")\\2"),
		lookbehind: !0,
		greedy: !0,
		inside: {
			interpolation: {
				pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
				lookbehind: !0,
				inside: null
			},
			"interpolation-punctuation": {
				pattern: /^\)|\\#+\($/,
				alias: "punctuation"
			},
			string: /[\s\S]+/
		}
	}],
	directive: {
		pattern: RegExp("#(?:(?:elseif|if)\\b(?:[ 	]*(?:![ \\t]*)?(?:\\b\\w+\\b(?:[ \\t]*\\((?:[^()]|\\([^()]*\\))*\\))?|\\((?:[^()]|\\([^()]*\\))*\\))(?:[ \\t]*(?:&&|\\|\\|))?)+|(?:else|endif)\\b)"),
		alias: "property",
		inside: {
			"directive-name": /^#\w+/,
			boolean: /\b(?:false|true)\b/,
			number: /\b\d+(?:\.\d+)*\b/,
			operator: /!|&&|\|\||[<>]=?/,
			punctuation: /[(),]/
		}
	},
	literal: {
		pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
		alias: "constant"
	},
	"other-directive": {
		pattern: /#\w+\b/,
		alias: "property"
	},
	attribute: {
		pattern: /@\w+/,
		alias: "atrule"
	},
	"function-definition": {
		pattern: /(\bfunc\s+)\w+/,
		lookbehind: !0,
		alias: "function"
	},
	label: {
		pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
		lookbehind: !0,
		alias: "important"
	},
	keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
	boolean: /\b(?:false|true)\b/,
	nil: {
		pattern: /\bnil\b/,
		alias: "constant"
	},
	"short-argument": /\$\d+\b/,
	omit: {
		pattern: /\b_\b/,
		alias: "keyword"
	},
	number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
	"class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
	function: /\b[a-z_]\w*(?=\s*\()/i,
	constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
	operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
	punctuation: /[{}[\]();,.:\\]/
}, Prism.languages.swift["string-literal"].forEach(function(e) {
	e.inside.interpolation.inside = Prism.languages.swift;
}), (function(e) {
	e.languages.typescript = e.languages.extend("javascript", {
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null
		},
		builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
	}), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
	var t = e.languages.extend("typescript", {});
	delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", {
		decorator: {
			pattern: /@[$\w\xA0-\uFFFF]+/,
			inside: {
				at: {
					pattern: /^@/,
					alias: "operator"
				},
				function: /^[\s\S]+/
			}
		},
		"generic-function": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: !0,
			inside: {
				function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
				generic: {
					pattern: /<[\s\S]+/,
					alias: "class-name",
					inside: t
				}
			}
		}
	}), e.languages.ts = e.languages.typescript;
})(Prism), (function(e) {
	var t = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, n = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*", r = {
		pattern: RegExp("(^|[^\\w.])" + n + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
		lookbehind: !0,
		inside: {
			namespace: {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: { punctuation: /\./ }
			},
			punctuation: /\./
		}
	};
	e.languages.java = e.languages.extend("clike", {
		string: {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: !0,
			greedy: !0
		},
		"class-name": [
			r,
			{
				pattern: RegExp("(^|[^\\w.])" + n + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),
				lookbehind: !0,
				inside: r.inside
			},
			{
				pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + n + "[A-Z]\\w*\\b"),
				lookbehind: !0,
				inside: r.inside
			}
		],
		keyword: t,
		function: [e.languages.clike.function, {
			pattern: /(::\s*)[a-z_]\w*/,
			lookbehind: !0
		}],
		number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		operator: {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: !0
		},
		constant: /\b[A-Z][A-Z_\d]+\b/
	}), e.languages.insertBefore("java", "string", {
		"triple-quoted-string": {
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: !0,
			alias: "string"
		},
		char: {
			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
			greedy: !0
		}
	}), e.languages.insertBefore("java", "class-name", {
		annotation: {
			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
			lookbehind: !0,
			alias: "punctuation"
		},
		generics: {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				"class-name": r,
				keyword: t,
				punctuation: /[<>(),.:]/,
				operator: /[?&|]/
			}
		},
		import: [{
			pattern: RegExp("(\\bimport\\s+)" + n + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"),
			lookbehind: !0,
			inside: {
				namespace: r.inside.namespace,
				punctuation: /\./,
				operator: /\*/,
				"class-name": /\w+/
			}
		}, {
			pattern: RegExp("(\\bimport\\s+static\\s+)" + n + "(?:\\w+|\\*)(?=\\s*;)"),
			lookbehind: !0,
			alias: "static",
			inside: {
				namespace: r.inside.namespace,
				static: /\b\w+$/,
				punctuation: /\./,
				operator: /\*/,
				"class-name": /\w+/
			}
		}],
		namespace: {
			pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function() {
				return t.source;
			})),
			lookbehind: !0,
			inside: { punctuation: /\./ }
		}
	});
})(Prism), (function(e) {
	var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, function() {
		return t.source;
	});
	e.languages.cpp = e.languages.extend("c", {
		"class-name": [
			{
				pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, function() {
					return t.source;
				})),
				lookbehind: !0
			},
			/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
			/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
			/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
		],
		keyword: t,
		number: {
			pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
			greedy: !0
		},
		operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
		boolean: /\b(?:false|true)\b/
	}), e.languages.insertBefore("cpp", "string", {
		module: {
			pattern: RegExp("(\\b(?:import|module)\\s+)(?:\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\"\\\\\\r\\n])*\"|<[^<>\\r\\n]*>|" + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, function() {
				return n;
			}) + ")"),
			lookbehind: !0,
			greedy: !0,
			inside: {
				string: /^[<"][\s\S]+/,
				operator: /:/,
				punctuation: /\./
			}
		},
		"raw-string": {
			pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
			alias: "string",
			greedy: !0
		}
	}), e.languages.insertBefore("cpp", "keyword", { "generic-function": {
		pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
		inside: {
			function: /^\w+/,
			generic: {
				pattern: /<[\s\S]+/,
				alias: "class-name",
				inside: e.languages.cpp
			}
		}
	} }), e.languages.insertBefore("cpp", "operator", { "double-colon": {
		pattern: /::/,
		alias: "punctuation"
	} }), e.languages.insertBefore("cpp", "class-name", { "base-clause": {
		pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
		lookbehind: !0,
		greedy: !0,
		inside: e.languages.extend("cpp", {})
	} }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})(Prism);
//#endregion
//#region node_modules/@lexical/code/LexicalCode.prod.mjs
function a_(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var o_ = "javascript";
function s_(e, t) {
	for (let n of e.childNodes) {
		if (sf(n) && n.tagName === t) return !0;
		s_(n, t);
	}
	return !1;
}
var c_ = "data-language", l_ = "data-highlight-language", u_ = "data-theme", d_ = class e extends xu {
	__language;
	__theme;
	__isSyntaxHighlightSupported;
	static getType() {
		return "code";
	}
	static clone(t) {
		return new e(t.__language, t.__key);
	}
	constructor(e, t) {
		super(t), this.__language = e || void 0, this.__isSyntaxHighlightSupported = !1, this.__theme = void 0;
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__language = e.__language, this.__theme = e.__theme, this.__isSyntaxHighlightSupported = e.__isSyntaxHighlightSupported;
	}
	createDOM(e) {
		let t = document.createElement("code");
		xp(t, e.theme.code), t.setAttribute("spellcheck", "false");
		let n = this.getLanguage();
		n && (t.setAttribute(c_, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(l_, n));
		let r = this.getTheme();
		r && t.setAttribute(u_, r);
		let i = this.getStyle();
		return i && t.setAttribute("style", i), t;
	}
	updateDOM(e, t, n) {
		let r = this.__language, i = e.__language;
		r ? r !== i && t.setAttribute(c_, r) : i && t.removeAttribute(c_);
		let a = this.__isSyntaxHighlightSupported;
		e.__isSyntaxHighlightSupported && i ? a && r ? r !== i && t.setAttribute(l_, r) : t.removeAttribute(l_) : a && r && t.setAttribute(l_, r);
		let o = this.__theme, s = e.__theme;
		o ? o !== s && t.setAttribute(u_, o) : s && t.removeAttribute(u_);
		let c = this.__style, l = e.__style;
		return c ? c !== l && t.setAttribute("style", c) : l && t.removeAttribute("style"), !1;
	}
	exportDOM(e) {
		let t = document.createElement("pre");
		xp(t, e._config.theme.code), t.setAttribute("spellcheck", "false");
		let n = this.getLanguage();
		n && (t.setAttribute(c_, n), this.getIsSyntaxHighlightSupported() && t.setAttribute(l_, n));
		let r = this.getTheme();
		r && t.setAttribute(u_, r);
		let i = this.getStyle();
		return i && t.setAttribute("style", i), { element: t };
	}
	static importDOM() {
		return {
			code: (e) => e.textContent != null && (/\r?\n/.test(e.textContent) || s_(e, "BR")) ? {
				conversion: m_,
				priority: 1
			} : null,
			div: () => ({
				conversion: h_,
				priority: 1
			}),
			pre: () => ({
				conversion: m_,
				priority: 0
			}),
			table: (e) => y_(e) ? {
				conversion: g_,
				priority: 3
			} : null,
			td: (e) => {
				let t = e, n = t.closest("table");
				return t.classList.contains("js-file-line") || n && y_(n) ? {
					conversion: __,
					priority: 3
				} : null;
			},
			tr: (e) => {
				let t = e.closest("table");
				return t && y_(t) ? {
					conversion: __,
					priority: 3
				} : null;
			}
		};
	}
	static importJSON(e) {
		return f_().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setLanguage(e.language).setTheme(e.theme);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			language: this.getLanguage(),
			theme: this.getTheme()
		};
	}
	insertNewAfter(e, t = !0) {
		let n = this.getChildren(), r = n.length;
		if (r >= 2 && n[r - 1].getTextContent() === "\n" && n[r - 2].getTextContent() === "\n" && e.isCollapsed() && e.anchor.key === this.__key && e.anchor.offset === r) {
			n[r - 1].remove(), n[r - 2].remove();
			let e = J();
			return this.insertAfter(e, t), e;
		}
		let { anchor: i, focus: a } = e, o = (i.isBefore(a) ? i : a).getNode();
		if (W(o)) {
			let e = T_(o), t = [];
			for (;;) if (hl(e)) t.push(ml()), e = e.getNextSibling();
			else {
				if (!C_(e)) break;
				{
					let n = 0, r = e.getTextContent(), i = e.getTextContentSize();
					for (; n < i && r[n] === " ";) n++;
					if (n !== 0 && t.push(S_(" ".repeat(n))), n !== i) break;
					e = e.getNextSibling();
				}
			}
			let n = o.splitText(i.offset)[0], r = i.offset === 0 ? 0 : 1, a = n.getIndexWithinParent() + r, s = o.getParentOrThrow(), c = [qc(), ...t];
			s.splice(a, 0, c);
			let l = t[t.length - 1];
			l ? l.select() : i.offset === 0 ? n.selectPrevious() : n.getNextSibling().selectNext(0, 0);
		}
		if (p_(o)) {
			let { offset: t } = e.anchor;
			o.splice(t, 0, [qc()]), o.select(t + 1, t + 1);
		}
		return null;
	}
	canIndent() {
		return !1;
	}
	collapseAtStart() {
		let e = J();
		return this.getChildren().forEach((t) => e.append(t)), this.replace(e), !0;
	}
	setLanguage(e) {
		let t = this.getWritable();
		return t.__language = e || void 0, t;
	}
	getLanguage() {
		return this.getLatest().__language;
	}
	setIsSyntaxHighlightSupported(e) {
		let t = this.getWritable();
		return t.__isSyntaxHighlightSupported = e, t;
	}
	getIsSyntaxHighlightSupported() {
		return this.getLatest().__isSyntaxHighlightSupported;
	}
	setTheme(e) {
		let t = this.getWritable();
		return t.__theme = e || void 0, t;
	}
	getTheme() {
		return this.getLatest().__theme;
	}
};
function f_(e, t) {
	return wf(d_).setLanguage(e).setTheme(t);
}
function p_(e) {
	return e instanceof d_;
}
function m_(e) {
	return { node: f_(e.getAttribute(c_)) };
}
function h_(e) {
	let t = e, n = v_(t);
	return n || function(e) {
		let t = e.parentElement;
		for (; t !== null;) {
			if (v_(t)) return !0;
			t = t.parentElement;
		}
		return !1;
	}(t) ? { node: n ? f_() : null } : { node: null };
}
function g_() {
	return { node: f_() };
}
function __() {
	return { node: null };
}
function v_(e) {
	return e.style.fontFamily.match("monospace") !== null;
}
function y_(e) {
	return e.classList.contains("js-file-line-container");
}
var b_ = class e extends nl {
	__highlightType;
	constructor(e = "", t, n) {
		super(e, n), this.__highlightType = t;
	}
	static getType() {
		return "code-highlight";
	}
	static clone(t) {
		return new e(t.__text, t.__highlightType || void 0, t.__key);
	}
	getHighlightType() {
		return this.getLatest().__highlightType;
	}
	setHighlightType(e) {
		let t = this.getWritable();
		return t.__highlightType = e || void 0, t;
	}
	canHaveFormat() {
		return !1;
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return xp(t, x_(e.theme, this.__highlightType)), t;
	}
	updateDOM(e, t, n) {
		let r = super.updateDOM(e, t, n), i = x_(n.theme, e.__highlightType), a = x_(n.theme, this.__highlightType);
		return i !== a && (i && Sp(t, i), a && xp(t, a)), r;
	}
	static importJSON(e) {
		return S_().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setHighlightType(e.highlightType);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			highlightType: this.getHighlightType()
		};
	}
	setFormat(e) {
		return this;
	}
	isParentRequired() {
		return !0;
	}
	createParentElementNode() {
		return f_();
	}
};
function x_(e, t) {
	return t && e && e.codeHighlight && e.codeHighlight[t];
}
function S_(e = "", t) {
	return Qd(new b_(e, t));
}
function C_(e) {
	return e instanceof b_;
}
function w_(e, t) {
	let n = e;
	for (let r = zf(e, t); r && (C_(r.origin) || hl(r.origin)); r = tm(r)) n = r.origin;
	return n;
}
function T_(e) {
	return w_(e, "previous");
}
function E_(e) {
	return w_(e, "next");
}
function D_(e) {
	let t = T_(e), n = E_(e), r = t;
	for (; r !== null;) {
		if (C_(r)) {
			let e = Zu(r.getTextContent());
			if (e !== null) return e;
		}
		if (r === n) break;
		r = r.getNextSibling();
	}
	let i = t.getParent();
	if (q(i)) {
		let e = i.getDirection();
		if (e === "ltr" || e === "rtl") return e;
	}
	return null;
}
function O_(e, t) {
	let n = null, r = null, i = e, a = t, o = e.getTextContent();
	for (;;) {
		if (a === 0) {
			if (i = i.getPreviousSibling(), i === null) break;
			if (C_(i) || hl(i) || Jc(i) || a_(167), Jc(i)) {
				n = {
					node: i,
					offset: 1
				};
				break;
			}
			a = Math.max(0, i.getTextContentSize() - 1), o = i.getTextContent();
		} else a--;
		let e = o[a];
		C_(i) && e !== " " && (r = {
			node: i,
			offset: a
		});
	}
	if (r !== null) return r;
	let s = null;
	if (t < e.getTextContentSize()) C_(e) && (s = e.getTextContent()[t]);
	else {
		let t = e.getNextSibling();
		C_(t) && (s = t.getTextContent()[0]);
	}
	if (s !== null && s !== " ") return n;
	{
		let r = function(e, t) {
			let n = e, r = t, i = e.getTextContent(), a = e.getTextContentSize();
			for (;;) {
				if (!C_(n) || r === a) {
					if (n = n.getNextSibling(), n === null || Jc(n)) return null;
					C_(n) && (r = 0, i = n.getTextContent(), a = n.getTextContentSize());
				}
				if (C_(n)) {
					if (i[r] !== " ") return {
						node: n,
						offset: r
					};
					r++;
				}
			}
		}(e, t);
		return r === null ? n : r;
	}
}
function k_(e) {
	let t = E_(e);
	return Jc(t) && a_(168), t;
}
(function(e) {
	e.languages.diff = { coord: [
		/^(?:\*{3}|-{3}|\+{3}).*$/m,
		/^@@.*@@$/m,
		/^\d.*$/m
	] };
	var t = {
		"deleted-sign": "-",
		"deleted-arrow": "<",
		"inserted-sign": "+",
		"inserted-arrow": ">",
		unchanged: " ",
		diff: "!"
	};
	Object.keys(t).forEach(function(n) {
		var r = t[n], i = [];
		/^\w+$/.test(n) || i.push(/\w+/.exec(n)[0]), n === "diff" && i.push("bold"), e.languages.diff[n] = {
			pattern: RegExp("^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
			alias: i,
			inside: {
				line: {
					pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
					lookbehind: !0
				},
				prefix: {
					pattern: /[\s\S]/,
					alias: /\w+/.exec(n)[0]
				}
			}
		};
	}), Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
})(Prism);
var A_ = globalThis.Prism || window.Prism, j_ = {
	cpp: "cpp",
	java: "java",
	javascript: "js",
	md: "markdown",
	plaintext: "plain",
	python: "py",
	text: "plain",
	ts: "typescript"
};
function M_(e) {
	return typeof e == "string" ? e : Array.isArray(e) ? e.map(M_).join("") : M_(e.content);
}
function N_(e, t) {
	let n = /^diff-([\w-]+)/i.exec(t), r = e.getTextContent(), i = A_.tokenize(r, A_.languages[n ? "diff" : t]);
	return n && (i = function(e, t) {
		let n = t, r = A_.languages[n], i = { tokens: e }, a = A_.languages.diff.PREFIXES;
		for (let e of i.tokens) {
			if (typeof e == "string" || !(e.type in a) || !Array.isArray(e.content)) continue;
			let t = e.type, n = 0, i = () => (n++, new A_.Token("prefix", a[t], t.replace(/^(\w+).*/, "$1"))), o = e.content.filter((e) => typeof e == "string" || e.type !== "prefix"), s = e.content.length - o.length, c = A_.tokenize(M_(o), r);
			c.unshift(i());
			let l = /\r\n|\n/g, u = (e) => {
				let t = [];
				l.lastIndex = 0;
				let r, a = 0;
				for (; n < s && (r = l.exec(e));) {
					let n = r.index + r[0].length;
					t.push(e.slice(a, n)), a = n, t.push(i());
				}
				if (t.length !== 0) return a < e.length && t.push(e.slice(a)), t;
			}, d = (e) => {
				for (let t = 0; t < e.length && n < s; t++) {
					let n = e[t];
					if (typeof n == "string") {
						let r = u(n);
						r && (e.splice(t, 1, ...r), t += r.length - 1);
					} else if (typeof n.content == "string") {
						let e = u(n.content);
						e && (n.content = e);
					} else Array.isArray(n.content) ? d(n.content) : d([n.content]);
				}
			};
			d(c), n < s && c.push(i()), e.content = c;
		}
		return i.tokens;
	}(i, n[1])), P_(i);
}
function P_(e, t) {
	let n = [];
	for (let r of e) if (typeof r == "string") {
		let e = r.split(/(\n|\t)/), i = e.length;
		for (let r = 0; r < i; r++) {
			let i = e[r];
			i === "\n" || i === "\r\n" ? n.push(qc()) : i === "	" ? n.push(ml()) : i.length > 0 && n.push(S_(i, t));
		}
	} else {
		let { content: e, alias: t } = r;
		typeof e == "string" ? n.push(...P_([e], r.type === "prefix" && typeof t == "string" ? t : r.type)) : Array.isArray(e) && n.push(...P_(e, r.type === "unchanged" ? void 0 : r.type));
	}
	return n;
}
var F_ = {
	$tokenize(e, t) {
		return N_(e, t || this.defaultLanguage);
	},
	defaultLanguage: o_,
	tokenize(e, t) {
		return A_.tokenize(e, A_.languages[t || ""] || A_.languages[this.defaultLanguage]);
	}
};
function I_(e, t, n) {
	let r = e.getParent();
	p_(r) ? z_(r, t, n) : C_(e) && e.replace(dl(e.__text));
}
function L_(e, t) {
	let n = t.getElementByKey(e.getKey());
	if (n === null) return;
	let r = e.getChildren(), i = r.length;
	if (i === n.__cachedChildrenLength) return;
	n.__cachedChildrenLength = i;
	let a = "1", o = 1;
	for (let e = 0; e < i; e++) Jc(r[e]) && (a += "\n" + ++o);
	n.setAttribute("data-gutter", a);
}
var R_ = /* @__PURE__ */ new Set();
function z_(e, t, n) {
	let r = e.getKey(), i = t.getKey() + "/" + r;
	if (e.getLanguage() === void 0 && e.setLanguage(n.defaultLanguage), !function(e) {
		let t = function(e) {
			let t = /^diff-([\w-]+)/i.exec(e);
			return t ? t[1] : null;
		}(e) || e;
		try {
			return !!t && A_.languages.hasOwnProperty(t);
		} catch {
			return !1;
		}
	}(e.getLanguage() || n.defaultLanguage)) return e.getIsSyntaxHighlightSupported() && e.setIsSyntaxHighlightSupported(!1), void async function() {}();
	e.getIsSyntaxHighlightSupported() || e.setIsSyntaxHighlightSupported(!0), R_.has(i) || (R_.add(i), t.update(() => {
		(function(e, t) {
			let n = ud(e);
			if (!p_(n) || !n.isAttached()) return;
			let r = K();
			if (!G(r)) return void t();
			let i = r.anchor, a = i.offset, o = i.type === "element" && Jc(n.getChildAtIndex(i.offset - 1)), s = 0;
			if (o || (s = a + i.getNode().getPreviousSiblings().reduce((e, t) => e + t.getTextContentSize(), 0)), t()) {
				if (o) return void i.getNode().select(a, a);
				n.getChildren().some((e) => {
					let t = W(e);
					if (t || Jc(e)) {
						let n = e.getTextContentSize();
						if (t && n >= s) return e.select(s, s), !0;
						s -= n;
					}
					return !1;
				});
			}
		})(r, () => {
			let t = ud(r);
			if (!p_(t) || !t.isAttached()) return !1;
			let i = t.getLanguage() || n.defaultLanguage, a = n.$tokenize(t, i), { from: o, to: s, nodesForReplacement: c } = function(e, t) {
				let n = 0;
				for (; n < e.length && B_(e[n], t[n]);) n++;
				let r = e.length, i = t.length, a = Math.min(r, i) - n, o = 0;
				for (; o < a;) if (o++, !B_(e[r - o], t[i - o])) {
					o--;
					break;
				}
				let s = n, c = r - o;
				return {
					from: s,
					nodesForReplacement: t.slice(n, i - o),
					to: c
				};
			}(t.getChildren(), a);
			return !(o === s && !c.length) && (e.splice(o, s - o, c), !0);
		});
	}, {
		onUpdate: () => {
			R_.delete(i);
		},
		skipTransforms: !0
	}));
}
function B_(e, t) {
	return C_(e) && C_(t) && e.__text === t.__text && e.__highlightType === t.__highlightType || hl(e) && hl(t) || Jc(e) && Jc(t);
}
function V_(e) {
	if (!G(e)) return !1;
	let t = e.anchor.getNode(), n = p_(t) ? t : t.getParent(), r = e.focus.getNode(), i = p_(r) ? r : r.getParent();
	return p_(n) && n.is(i);
}
function H_(e) {
	let t = e.getNodes(), n = [];
	if (t.length === 1 && p_(t[0])) return n;
	let r = [];
	for (let e = 0; e < t.length; e++) {
		let i = t[e];
		C_(i) || hl(i) || Jc(i) || a_(169), Jc(i) ? r.length > 0 && (n.push(r), r = []) : r.push(i);
	}
	if (r.length > 0) {
		let t = e.isBackward() ? e.anchor : e.focus, i = _l(r[0].getKey(), 0, "text");
		t.is(i) || n.push(r);
	}
	return n;
}
function U_(e) {
	let t = K();
	if (!G(t) || !V_(t)) return !1;
	let n = H_(t), r = n.length;
	if (r === 0 && t.isCollapsed()) return e === zs && t.insertNodes([ml()]), !0;
	if (r === 0 && e === zs && t.getTextContent() === "\n") {
		let e = ml(), n = qc(), r = t.isBackward() ? "previous" : "next";
		return t.insertNodes([e, n]), ap(hp(Xf(Bf(e, "next", 0), fp(zf(n, "next"))), r)), !0;
	}
	for (let i = 0; i < r; i++) {
		let r = n[i];
		if (r.length > 0) {
			let n = r[0];
			if (i === 0 && (n = T_(n)), e === zs) {
				let e = ml();
				if (n.insertBefore(e), i === 0) {
					let r = t.isBackward() ? "focus" : "anchor", i = _l(n.getKey(), 0, "text");
					t[r].is(i) && t[r].set(e.getKey(), 0, "text");
				}
			} else hl(n) && n.remove();
		}
	}
	return !0;
}
function W_(e, t) {
	let n = K();
	if (!G(n)) return !1;
	let { anchor: r, focus: i } = n, a = r.offset, o = i.offset, s = r.getNode(), c = i.getNode(), l = e === As;
	if (!V_(n) || !C_(s) && !hl(s) || !C_(c) && !hl(c)) return !1;
	if (!t.altKey) {
		if (n.isCollapsed()) {
			let e = s.getParentOrThrow();
			if (l && a === 0 && s.getPreviousSibling() === null) {
				if (e.getPreviousSibling() === null) return e.selectPrevious(), t.preventDefault(), !0;
			} else if (!l && a === s.getTextContentSize() && s.getNextSibling() === null && e.getNextSibling() === null) return e.selectNext(), t.preventDefault(), !0;
		}
		return !1;
	}
	let u, d;
	if (s.isBefore(c) ? (u = T_(s), d = E_(c)) : (u = T_(c), d = E_(s)), u == null || d == null) return !1;
	let f = u.getNodesBetween(d);
	for (let e = 0; e < f.length; e++) {
		let t = f[e];
		if (!C_(t) && !hl(t) && !Jc(t)) return !1;
	}
	t.preventDefault(), t.stopPropagation();
	let p = l ? u.getPreviousSibling() : d.getNextSibling();
	if (!Jc(p)) return !0;
	let m = l ? p.getPreviousSibling() : p.getNextSibling();
	if (m == null) return !0;
	let h = (C_(m) || hl(m) || Jc(m) ? l ? T_(m) : E_(m) : null) ?? m;
	return p.remove(), f.forEach((e) => e.remove()), e === As ? (f.forEach((e) => h.insertBefore(e)), h.insertBefore(p)) : (h.insertAfter(p), h = p, f.forEach((e) => {
		h.insertAfter(e), h = e;
	})), n.setTextNodeRange(s, a, c, o), !0;
}
function G_(e, t) {
	let n = K();
	if (!G(n)) return !1;
	let { anchor: r, focus: i } = n, a = r.getNode(), o = i.getNode(), s = e === ks;
	if (!V_(n) || !C_(a) && !hl(a) || !C_(o) && !hl(o)) return !1;
	let c = o;
	if (D_(c) === "rtl" ? !s : s) {
		let e = O_(c, i.offset);
		if (e !== null) {
			let { node: t, offset: r } = e;
			Jc(t) ? t.selectNext(0, 0) : n.setTextNodeRange(t, r, t, r);
		} else c.getParentOrThrow().selectStart();
	} else k_(c).select();
	return t.preventDefault(), t.stopPropagation(), !0;
}
function K_(e, t) {
	if (!e.hasNodes([d_, b_])) throw Error("CodeHighlightPlugin: CodeNode or CodeHighlightNode not registered on editor");
	t ??= F_;
	let n = [];
	return !0 !== e._headless && n.push(e.registerMutationListener(d_, (t) => {
		e.getEditorState().read(() => {
			for (let [n, r] of t) if (r !== "destroyed") {
				let t = ud(n);
				t !== null && L_(t, e);
			}
		});
	}, { skipInitialization: !1 })), n.push(e.registerNodeTransform(d_, (n) => z_(n, e, t)), e.registerNodeTransform(nl, (n) => I_(n, e, t)), e.registerNodeTransform(b_, (n) => I_(n, e, t)), e.registerCommand(Ls, (t) => {
		let n = function(e) {
			let t = K();
			if (!G(t) || !V_(t)) return null;
			let n = e ? Bs : zs, r = e ? Bs : Rs, i = t.anchor, a = t.focus;
			if (i.is(a)) return r;
			let o = H_(t);
			if (o.length !== 1) return n;
			let s = o[0], c, l;
			s.length === 0 && a_(285), t.isBackward() ? (c = a, l = i) : (c = i, l = a);
			let u = T_(s[0]), d = E_(s[0]), f = _l(u.getKey(), 0, "text"), p = _l(d.getKey(), d.getTextContentSize(), "text");
			return c.isBefore(f) || p.isBefore(l) ? n : f.isBefore(c) || l.isBefore(p) ? r : n;
		}(t.shiftKey);
		return n !== null && (t.preventDefault(), e.dispatchCommand(n, void 0), !0);
	}, 1), e.registerCommand(Rs, () => !!V_(K()) && (Gl([ml()]), !0), 1), e.registerCommand(zs, (e) => U_(zs), 1), e.registerCommand(Bs, (e) => U_(Bs), 1), e.registerCommand(As, (e) => {
		let t = K();
		if (!G(t)) return !1;
		let { anchor: n } = t, r = n.getNode();
		return !!V_(t) && (t.isCollapsed() && n.offset === 0 && r.getPreviousSibling() === null && p_(r.getParentOrThrow()) ? (e.preventDefault(), !0) : W_(As, e));
	}, 1), e.registerCommand(js, (e) => {
		let t = K();
		if (!G(t)) return !1;
		let { anchor: n } = t, r = n.getNode();
		return !!V_(t) && (t.isCollapsed() && n.offset === r.getTextContentSize() && r.getNextSibling() === null && p_(r.getParentOrThrow()) ? (e.preventDefault(), !0) : W_(js, e));
	}, 1), e.registerCommand(ks, (e) => G_(ks, e), 1), e.registerCommand(Ds, (e) => G_(Ds, e), 1)), Cp(...n);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/DecoratorBlockNode.js
var q_ = class extends Cu {
	__format;
	constructor(e, t) {
		super(t), this.__format = e || "";
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			format: this.__format || ""
		};
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setFormat(e.format || "");
	}
	canIndent() {
		return !1;
	}
	createDOM() {
		return document.createElement("div");
	}
	updateDOM() {
		return !1;
	}
	setFormat(e) {
		let t = this.getWritable();
		return t.__format = e, t;
	}
	isInline() {
		return !1;
	}
};
function J_(e) {
	return e instanceof q_;
}
//#endregion
//#region node_modules/@lexical/table/LexicalTable.prod.mjs
var Y_ = /^(\d+(?:\.\d+)?)px$/, X_ = {
	BOTH: 3,
	COLUMN: 2,
	NO_STATUS: 0,
	ROW: 1
}, Z_ = class e extends xu {
	__colSpan;
	__rowSpan;
	__headerState;
	__width;
	__backgroundColor;
	__verticalAlign;
	static getType() {
		return "tablecell";
	}
	static clone(t) {
		return new e(t.__headerState, t.__colSpan, t.__width, t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__rowSpan = e.__rowSpan, this.__backgroundColor = e.__backgroundColor, this.__verticalAlign = e.__verticalAlign;
	}
	static importDOM() {
		return {
			td: (e) => ({
				conversion: $_,
				priority: 0
			}),
			th: (e) => ({
				conversion: $_,
				priority: 0
			})
		};
	}
	static importJSON(e) {
		return ev().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setHeaderStyles(e.headerState).setColSpan(e.colSpan || 1).setRowSpan(e.rowSpan || 1).setWidth(e.width || void 0).setBackgroundColor(e.backgroundColor || null).setVerticalAlign(e.verticalAlign || void 0);
	}
	constructor(e = X_.NO_STATUS, t = 1, n, r) {
		super(r), this.__colSpan = t, this.__rowSpan = 1, this.__headerState = e, this.__width = n, this.__backgroundColor = null, this.__verticalAlign = void 0;
	}
	createDOM(e) {
		let t = document.createElement(this.getTag());
		return this.__width && (t.style.width = `${this.__width}px`), this.__colSpan > 1 && (t.colSpan = this.__colSpan), this.__rowSpan > 1 && (t.rowSpan = this.__rowSpan), this.__backgroundColor !== null && (t.style.backgroundColor = this.__backgroundColor), Q_(this.__verticalAlign) && (t.style.verticalAlign = this.__verticalAlign), xp(t, e.theme.tableCell, this.hasHeader() && e.theme.tableCellHeader), t;
	}
	exportDOM(e) {
		let t = super.exportDOM(e);
		if (sf(t.element)) {
			let e = t.element;
			e.setAttribute("data-temporary-table-cell-lexical-key", this.getKey()), e.style.border = "1px solid black", this.__colSpan > 1 && (e.colSpan = this.__colSpan), this.__rowSpan > 1 && (e.rowSpan = this.__rowSpan), e.style.width = `${this.getWidth() || 75}px`, e.style.verticalAlign = this.getVerticalAlign() || "top", e.style.textAlign = "start", this.__backgroundColor === null && this.hasHeader() && (e.style.backgroundColor = "#f2f3f5");
		}
		return t;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			...Q_(this.__verticalAlign) && { verticalAlign: this.__verticalAlign },
			backgroundColor: this.getBackgroundColor(),
			colSpan: this.__colSpan,
			headerState: this.__headerState,
			rowSpan: this.__rowSpan,
			width: this.getWidth()
		};
	}
	getColSpan() {
		return this.getLatest().__colSpan;
	}
	setColSpan(e) {
		let t = this.getWritable();
		return t.__colSpan = e, t;
	}
	getRowSpan() {
		return this.getLatest().__rowSpan;
	}
	setRowSpan(e) {
		let t = this.getWritable();
		return t.__rowSpan = e, t;
	}
	getTag() {
		return this.hasHeader() ? "th" : "td";
	}
	setHeaderStyles(e, t = X_.BOTH) {
		let n = this.getWritable();
		return n.__headerState = e & t | n.__headerState & ~t, n;
	}
	getHeaderStyles() {
		return this.getLatest().__headerState;
	}
	setWidth(e) {
		let t = this.getWritable();
		return t.__width = e, t;
	}
	getWidth() {
		return this.getLatest().__width;
	}
	getBackgroundColor() {
		return this.getLatest().__backgroundColor;
	}
	setBackgroundColor(e) {
		let t = this.getWritable();
		return t.__backgroundColor = e, t;
	}
	getVerticalAlign() {
		return this.getLatest().__verticalAlign;
	}
	setVerticalAlign(e) {
		let t = this.getWritable();
		return t.__verticalAlign = e || void 0, t;
	}
	toggleHeaderStyle(e) {
		let t = this.getWritable();
		return (t.__headerState & e) === e ? t.__headerState -= e : t.__headerState += e, t;
	}
	hasHeaderState(e) {
		return (this.getHeaderStyles() & e) === e;
	}
	hasHeader() {
		return this.getLatest().__headerState !== X_.NO_STATUS;
	}
	updateDOM(e) {
		return e.__headerState !== this.__headerState || e.__width !== this.__width || e.__colSpan !== this.__colSpan || e.__rowSpan !== this.__rowSpan || e.__backgroundColor !== this.__backgroundColor || e.__verticalAlign !== this.__verticalAlign;
	}
	isShadowRoot() {
		return !0;
	}
	collapseAtStart() {
		return !0;
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
};
function Q_(e) {
	return e === "middle" || e === "bottom";
}
function $_(e) {
	let t = e, n = e.nodeName.toLowerCase(), r;
	Y_.test(t.style.width) && (r = parseFloat(t.style.width));
	let i = ev(n === "th" ? X_.ROW : X_.NO_STATUS, t.colSpan, r);
	i.__rowSpan = t.rowSpan;
	let a = t.style.backgroundColor;
	a !== "" && (i.__backgroundColor = a);
	let o = t.style.verticalAlign;
	Q_(o) && (i.__verticalAlign = o);
	let s = t.style, c = (s && s.textDecoration || "").split(" "), l = s.fontWeight === "700" || s.fontWeight === "bold", u = c.includes("line-through"), d = s.fontStyle === "italic", f = c.includes("underline");
	return {
		after: (e) => {
			let t = [], n = null, r = () => {
				if (n) {
					let e = n.getFirstChild();
					Jc(e) && n.getChildrenSize() === 1 && e.remove();
				}
			};
			for (let i of e) Jd(i) || W(i) || Jc(i) ? (W(i) && (l && i.toggleFormat("bold"), u && i.toggleFormat("strikethrough"), d && i.toggleFormat("italic"), f && i.toggleFormat("underline")), n ? n.append(i) : (n = J().append(i), t.push(n))) : (t.push(i), r(), n = null);
			return r(), t.length === 0 && t.push(J()), t;
		},
		node: i
	};
}
function ev(e = X_.NO_STATUS, t = 1, n) {
	return Qd(new Z_(e, t, n));
}
function Q(e) {
	return e instanceof Z_;
}
var tv = U("INSERT_TABLE_COMMAND");
function $(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var nv = class e extends xu {
	__height;
	static getType() {
		return "tablerow";
	}
	static clone(t) {
		return new e(t.__height, t.__key);
	}
	static importDOM() {
		return { tr: (e) => ({
			conversion: rv,
			priority: 0
		}) };
	}
	static importJSON(e) {
		return iv().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setHeight(e.height);
	}
	constructor(e, t) {
		super(t), this.__height = e;
	}
	exportJSON() {
		let e = this.getHeight();
		return {
			...super.exportJSON(),
			...e === void 0 ? void 0 : { height: e }
		};
	}
	createDOM(e) {
		let t = document.createElement("tr");
		return this.__height && (t.style.height = `${this.__height}px`), xp(t, e.theme.tableRow), t;
	}
	extractWithChild(e, t, n) {
		return n === "html";
	}
	isShadowRoot() {
		return !0;
	}
	setHeight(e) {
		let t = this.getWritable();
		return t.__height = e, t;
	}
	getHeight() {
		return this.getLatest().__height;
	}
	updateDOM(e) {
		return e.__height !== this.__height;
	}
	canBeEmpty() {
		return !1;
	}
	canIndent() {
		return !1;
	}
};
function rv(e) {
	let t = e, n;
	return Y_.test(t.style.height) && (n = parseFloat(t.style.height)), {
		after: (e) => hm(e, Q),
		node: iv(n)
	};
}
function iv(e) {
	return Qd(new nv(e));
}
function av(e) {
	return e instanceof nv;
}
var ov = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, sv = ov && "documentMode" in document ? document.documentMode : null, cv = ov && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
function lv(e, t, n = !0) {
	let r = Oy();
	for (let i = 0; i < e; i++) {
		let e = iv();
		for (let r = 0; r < t; r++) {
			let t = X_.NO_STATUS;
			typeof n == "object" ? (i === 0 && n.rows && (t |= X_.ROW), r === 0 && n.columns && (t |= X_.COLUMN)) : n && (i === 0 && (t |= X_.ROW), r === 0 && (t |= X_.COLUMN));
			let a = ev(t), o = J();
			o.append(dl()), a.append(o), e.append(a);
		}
		r.append(e);
	}
	return r;
}
function uv(e) {
	let t = X(e, (e) => Q(e));
	return Q(t) ? t : null;
}
function dv(e) {
	let t = X(e, (e) => av(e));
	if (av(t)) return t;
	throw Error("Expected table cell to be inside of table row.");
}
function fv(e) {
	let t = X(e, (e) => ky(e));
	if (ky(t)) return t;
	throw Error("Expected table cell to be inside of table.");
}
function pv(e) {
	let t = dv(e);
	return fv(t).getChildren().findIndex((e) => e.is(t));
}
function mv(e) {
	return dv(e).getChildren().findIndex((t) => t.is(e));
}
ov && "InputEvent" in window && !sv && new window.InputEvent("input");
var hv = (e, t) => e === X_.BOTH || e === t ? t : X_.NO_STATUS;
function gv(e = !0) {
	let t = K();
	G(t) || Fv(t) || $(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = Av(n), [a, , o] = Av(r), [, s, c] = Ov(o, a, i), { startRow: l } = c, { startRow: u } = s;
	return e ? _v(l + i.__rowSpan > u + a.__rowSpan ? i : a, !0) : _v(u < l ? a : i, !1);
}
function _v(e, t = !0) {
	let [, , n] = Av(e), [r, i] = Ov(n, e, e), a = r[0].length, { startRow: o } = i, s = null;
	if (t) {
		let t = o + e.__rowSpan - 1, i = r[t], c = iv();
		for (let e = 0; e < a; e++) {
			let { cell: n, startRow: r } = i[e];
			if (r + n.__rowSpan - 1 <= t) {
				let t = i[e].cell.__headerState, n = hv(t, X_.COLUMN);
				c.append(ev(n).append(J()));
			} else n.setRowSpan(n.__rowSpan + 1);
		}
		let l = n.getChildAtIndex(t);
		av(l) || $(256), l.insertAfter(c), s = c;
	} else {
		let e = o, t = r[e], i = iv();
		for (let n = 0; n < a; n++) {
			let { cell: r, startRow: a } = t[n];
			if (a === e) {
				let e = t[n].cell.__headerState, r = hv(e, X_.COLUMN);
				i.append(ev(r).append(J()));
			} else r.setRowSpan(r.__rowSpan + 1);
		}
		let c = n.getChildAtIndex(e);
		av(c) || $(257), c.insertBefore(i), s = i;
	}
	return s;
}
function vv(e = !0) {
	let t = K();
	G(t) || Fv(t) || $(188);
	let n = t.anchor.getNode(), r = t.focus.getNode(), [i] = Av(n), [a, , o] = Av(r), [, s, c] = Ov(o, a, i), { startColumn: l } = c, { startColumn: u } = s;
	return e ? yv(l + i.__colSpan > u + a.__colSpan ? i : a, !0) : yv(u < l ? a : i, !1);
}
function yv(e, t = !0, n = !0) {
	let [, , r] = Av(e), [i, a] = Ov(r, e, e), o = i.length, { startColumn: s } = a, c = t ? s + e.__colSpan - 1 : s - 1, l = r.getFirstChild();
	av(l) || $(120);
	let u = null;
	function d(e = X_.NO_STATUS) {
		let t = ev(e).append(J());
		return u === null && (u = t), t;
	}
	let f = l;
	e: for (let e = 0; e < o; e++) {
		if (e !== 0) {
			let e = f.getNextSibling();
			av(e) || $(121), f = e;
		}
		let t = i[e], n = t[c < 0 ? 0 : c].cell.__headerState, r = hv(n, X_.ROW);
		if (c < 0) {
			Cv(f, d(r));
			continue;
		}
		let { cell: a, startColumn: o, startRow: s } = t[c];
		if (o + a.__colSpan - 1 <= c) {
			let n = a, i = s, o = c;
			for (; i !== e && n.__rowSpan > 1;) {
				if (o -= a.__colSpan, !(o >= 0)) {
					f.append(d(r));
					continue e;
				}
				{
					let { cell: e, startRow: r } = t[o];
					n = e, i = r;
				}
			}
			n.insertAfter(d(r));
		} else a.setColSpan(a.__colSpan + 1);
	}
	u !== null && n && Sv(u);
	let p = r.getColWidths();
	if (p) {
		let e = [...p], t = c < 0 ? 0 : c, n = e[t];
		e.splice(t, 0, n), r.setColWidths(e);
	}
	return u;
}
function bv() {
	let e = K();
	G(e) || Fv(e) || $(188);
	let [t, n] = e.isBackward() ? [e.focus.getNode(), e.anchor.getNode()] : [e.anchor.getNode(), e.focus.getNode()], [r, , i] = Av(t), [a] = Av(n), [o, s, c] = Ov(i, r, a), { startRow: l } = s, { startRow: u } = c, d = u + a.__rowSpan - 1;
	if (o.length === d - l + 1) return void i.remove();
	let f = o[0].length, p = o[d + 1], m = i.getChildAtIndex(d + 1);
	for (let e = d; e >= l; e--) {
		for (let t = f - 1; t >= 0; t--) {
			let { cell: n, startRow: r, startColumn: i } = o[e][t];
			if (i === t) {
				if (r < l || r + n.__rowSpan - 1 > d) {
					let e = Math.max(r, l), t = Math.min(n.__rowSpan + r - 1, d), i = e <= t ? t - e + 1 : 0;
					n.setRowSpan(n.__rowSpan - i);
				}
				if (r >= l && r + n.__rowSpan - 1 > d && e === d) {
					m === null && $(122);
					let r = null;
					for (let n = 0; n < t; n++) {
						let t = p[n], i = t.cell;
						t.startRow === e + 1 && (r = i), i.__colSpan > 1 && (n += i.__colSpan - 1);
					}
					r === null ? Cv(m, n) : r.insertAfter(n);
				}
			}
		}
		let t = i.getChildAtIndex(e);
		av(t) || $(206, String(e)), t.remove();
	}
	if (p !== void 0) {
		let { cell: e } = p[0];
		Sv(e);
	} else {
		let { cell: e } = o[l - 1][0];
		Sv(e);
	}
}
function xv() {
	let e = K();
	G(e) || Fv(e) || $(188);
	let t = e.anchor.getNode(), n = e.focus.getNode(), [r, , i] = Av(t), [a] = Av(n), [o, s, c] = Ov(i, r, a), { startColumn: l } = s, { startRow: u, startColumn: d } = c, f = Math.min(l, d), p = Math.max(l + r.__colSpan - 1, d + a.__colSpan - 1), m = p - f + 1;
	if (o[0].length === p - f + 1) return i.selectPrevious(), void i.remove();
	let h = o.length;
	for (let e = 0; e < h; e++) for (let t = f; t <= p; t++) {
		let { cell: n, startColumn: r } = o[e][t];
		if (r < f) {
			if (t === f) {
				let e = f - r;
				n.setColSpan(n.__colSpan - Math.min(m, n.__colSpan - e));
			}
		} else if (r + n.__colSpan - 1 > p) {
			if (t === p) {
				let e = p - r + 1;
				n.setColSpan(n.__colSpan - e);
			}
		} else n.remove();
	}
	let g = o[u], _ = l > d ? g[l + r.__colSpan] : g[d + a.__colSpan];
	if (_ !== void 0) {
		let { cell: e } = _;
		Sv(e);
	} else {
		let { cell: e } = d < l ? g[d - 1] : g[l - 1];
		Sv(e);
	}
	let v = i.getColWidths();
	if (v) {
		let e = [...v];
		e.splice(f, m), i.setColWidths(e);
	}
}
function Sv(e) {
	let t = e.getFirstDescendant();
	t == null ? e.selectStart() : t.getParentOrThrow().selectStart();
}
function Cv(e, t) {
	let n = e.getFirstChild();
	n === null ? e.append(t) : n.insertBefore(t);
}
function wv(e) {
	if (e.length === 0) return null;
	let [t] = kv(fv(e[0]), null, null), n = Infinity, r = -Infinity, i = Infinity, a = -Infinity, o = /* @__PURE__ */ new Set();
	for (let s of t) for (let t of s) {
		if (!t || !t.cell) continue;
		let s = t.cell.getKey();
		if (!o.has(s) && e.some((e) => e.is(t.cell))) {
			o.add(s);
			let e = t.startRow, c = t.startColumn, l = t.cell.__rowSpan || 1, u = t.cell.__colSpan || 1;
			n = Math.min(n, e), r = Math.max(r, e + l - 1), i = Math.min(i, c), a = Math.max(a, c + u - 1);
		}
	}
	if (n === Infinity || i === Infinity) return null;
	let s = r - n + 1, c = a - i + 1, l = t[n][i];
	if (!l.cell) return null;
	let u = l.cell;
	u.setColSpan(c), u.setRowSpan(s);
	let d = /* @__PURE__ */ new Set([u.getKey()]);
	for (let e = n; e <= r; e++) for (let n = i; n <= a; n++) {
		let r = t[e][n];
		if (!r.cell) continue;
		let i = r.cell, a = i.getKey();
		d.has(a) || (d.add(a), Tv(i) || u.append(...i.getChildren()), i.remove());
	}
	return u.getChildrenSize() === 0 && u.append(J()), u;
}
function Tv(e) {
	if (e.getChildrenSize() !== 1) return !1;
	let t = e.getFirstChildOrThrow();
	return !(!Pu(t) || !t.isEmpty());
}
function Ev() {
	let e = K();
	G(e) || Fv(e) || $(188);
	let t = X(e.anchor.getNode(), Q);
	return Q(t) || $(148), Dv(t);
}
function Dv(e) {
	let [t, n, r] = Av(e), i = t.__colSpan, a = t.__rowSpan;
	if (i === 1 && a === 1) return;
	let [o, s] = Ov(r, t, t), { startColumn: c, startRow: l } = s, u = t.__headerState & X_.COLUMN, d = Array.from({ length: i }, (e, t) => {
		let n = u;
		for (let e = 0; n !== 0 && e < o.length; e++) n &= o[e][t + c].cell.__headerState;
		return n;
	}), f = t.__headerState & X_.ROW, p = Array.from({ length: a }, (e, t) => {
		let n = f;
		for (let e = 0; n !== 0 && e < o[0].length; e++) n &= o[t + l][e].cell.__headerState;
		return n;
	});
	if (i > 1) {
		for (let e = 1; e < i; e++) t.insertAfter(ev(d[e] | p[0]).append(J()));
		t.setColSpan(1);
	}
	if (a > 1) {
		let e;
		for (let t = 1; t < a; t++) {
			let r = l + t, a = o[r];
			e = (e || n).getNextSibling(), av(e) || $(125);
			let s = null;
			for (let e = 0; e < c; e++) {
				let t = a[e], n = t.cell;
				t.startRow === r && (s = n), n.__colSpan > 1 && (e += n.__colSpan - 1);
			}
			if (s === null) for (let n = i - 1; n >= 0; n--) Cv(e, ev(d[n] | p[t]).append(J()));
			else for (let e = i - 1; e >= 0; e--) s.insertAfter(ev(d[e] | p[t]).append(J()));
		}
		t.setRowSpan(1);
	}
}
function Ov(e, t, n) {
	let [r, i, a] = kv(e, t, n);
	return i === null && $(207), a === null && $(208), [
		r,
		i,
		a
	];
}
function kv(e, t, n) {
	let r = [], i = null, a = null;
	function o(e) {
		let t = r[e];
		return t === void 0 && (r[e] = t = []), t;
	}
	let s = e.getChildren();
	for (let e = 0; e < s.length; e++) {
		let r = s[e];
		av(r) || $(209);
		let c = o(e);
		for (let l = r.getFirstChild(), u = 0; l != null; l = l.getNextSibling()) {
			for (Q(l) || $(147); c[u] !== void 0;) u++;
			let r = {
				cell: l,
				startColumn: u,
				startRow: e
			}, { __rowSpan: d, __colSpan: f } = l;
			for (let t = 0; t < d && !(e + t >= s.length); t++) {
				let n = o(e + t);
				for (let e = 0; e < f; e++) n[u + e] = r;
			}
			t !== null && i === null && t.is(l) && (i = r), n !== null && a === null && n.is(l) && (a = r);
		}
	}
	return [
		r,
		i,
		a
	];
}
function Av(e) {
	let t;
	if (e instanceof Z_) t = e;
	else if ("__type" in e) {
		let n = X(e, Q);
		Q(n) || $(148), t = n;
	} else {
		let n = X(e.getNode(), Q);
		Q(n) || $(148), t = n;
	}
	let n = t.getParent();
	av(n) || $(149);
	let r = n.getParent();
	return ky(r) || $(210), [
		t,
		n,
		r
	];
}
function jv(e, t, n) {
	let r, i = Math.min(t.startColumn, n.startColumn), a = Math.min(t.startRow, n.startRow), o = Math.max(t.startColumn + t.cell.__colSpan - 1, n.startColumn + n.cell.__colSpan - 1), s = Math.max(t.startRow + t.cell.__rowSpan - 1, n.startRow + n.cell.__rowSpan - 1);
	do {
		r = !1;
		for (let t = 0; t < e.length; t++) for (let n = 0; n < e[0].length; n++) {
			let c = e[t][n];
			if (!c) continue;
			let l = c.startColumn + c.cell.__colSpan - 1, u = c.startRow + c.cell.__rowSpan - 1, d = c.startColumn <= o && l >= i, f = c.startRow <= s && u >= a;
			if (d && f) {
				let e = Math.min(i, c.startColumn), t = Math.max(o, l), n = Math.min(a, c.startRow), d = Math.max(s, u);
				e === i && t === o && n === a && d === s || (i = e, o = t, a = n, s = d, r = !0);
			}
		}
	} while (r);
	return {
		maxColumn: o,
		maxRow: s,
		minColumn: i,
		minRow: a
	};
}
function Mv(e) {
	let [t, , n] = Av(e), r = n.getChildren(), i = r.length, a = r[0].getChildren().length, o = Array(i);
	for (let e = 0; e < i; e++) o[e] = Array(a);
	for (let e = 0; e < i; e++) {
		let n = r[e].getChildren(), i = 0;
		for (let r = 0; r < n.length; r++) {
			for (; o[e][i];) i++;
			let a = n[r], s = a.__rowSpan || 1, c = a.__colSpan || 1;
			for (let t = 0; t < s; t++) for (let n = 0; n < c; n++) o[e + t][i + n] = a;
			if (t === a) return {
				colSpan: c,
				columnIndex: i,
				rowIndex: e,
				rowSpan: s
			};
			i += c;
		}
	}
	return null;
}
function Nv(e) {
	let [[t, n, r, i], [a, o, s, c]] = ["anchor", "focus"].map((t) => {
		let n = e[t].getNode(), r = X(n, Q);
		Q(r) || $(238, t, n.getKey(), n.getType());
		let i = r.getParent();
		av(i) || $(239, t);
		let a = i.getParent();
		return ky(a) || $(240, t), [
			n,
			r,
			i,
			a
		];
	});
	return i.is(c) || $(241), {
		anchorCell: n,
		anchorNode: t,
		anchorRow: r,
		anchorTable: i,
		focusCell: o,
		focusNode: a,
		focusRow: s,
		focusTable: c
	};
}
var Pv = class e {
	tableKey;
	anchor;
	focus;
	_cachedNodes;
	dirty;
	constructor(e, t, n) {
		this.anchor = t, this.focus = n, t._selection = this, n._selection = this, this._cachedNodes = null, this.dirty = !1, this.tableKey = e;
	}
	getStartEndPoints() {
		return [this.anchor, this.focus];
	}
	isValid() {
		if (this.tableKey === "root" || this.anchor.key === "root" || this.anchor.type !== "element" || this.focus.key === "root" || this.focus.type !== "element") return !1;
		let e = ud(this.tableKey), t = ud(this.anchor.key), n = ud(this.focus.key);
		return e !== null && t !== null && n !== null;
	}
	isBackward() {
		return this.focus.isBefore(this.anchor);
	}
	getCachedNodes() {
		return this._cachedNodes;
	}
	setCachedNodes(e) {
		this._cachedNodes = e;
	}
	is(e) {
		return Fv(e) && this.tableKey === e.tableKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
	}
	set(e, t, n) {
		this.dirty = this.dirty || e !== this.tableKey || t !== this.anchor.key || n !== this.focus.key, this.tableKey = e, this.anchor.key = t, this.focus.key = n, this._cachedNodes = null;
	}
	clone() {
		return new e(this.tableKey, _l(this.anchor.key, this.anchor.offset, this.anchor.type), _l(this.focus.key, this.focus.offset, this.focus.type));
	}
	isCollapsed() {
		return !1;
	}
	extract() {
		return this.getNodes();
	}
	insertRawText(e) {}
	insertText() {}
	hasFormat(e) {
		let t = 0;
		this.getNodes().filter(Q).forEach((e) => {
			let n = e.getFirstChild();
			Pu(n) && (t |= n.getTextFormat());
		});
		let n = Wa[e];
		return (t & n) !== 0;
	}
	insertNodes(e) {
		let t = this.focus.getNode();
		q(t) || $(151), To(t.select(0, t.getChildrenSize())).insertNodes(e);
	}
	getShape() {
		let { anchorCell: e, focusCell: t } = Nv(this), n = Mv(e);
		n === null && $(153);
		let r = Mv(t);
		r === null && $(155);
		let i = Math.min(n.columnIndex, r.columnIndex), a = Math.max(n.columnIndex + n.colSpan - 1, r.columnIndex + r.colSpan - 1), o = Math.min(n.rowIndex, r.rowIndex), s = Math.max(n.rowIndex + n.rowSpan - 1, r.rowIndex + r.rowSpan - 1);
		return {
			fromX: Math.min(i, a),
			fromY: Math.min(o, s),
			toX: Math.max(i, a),
			toY: Math.max(o, s)
		};
	}
	getNodes() {
		if (!this.isValid()) return [];
		let e = this._cachedNodes;
		if (e !== null) return e;
		let { anchorTable: t, anchorCell: n, focusCell: r } = Nv(this), i = r.getParents()[1];
		if (i !== t) {
			if (t.isParentOf(r)) {
				let e = i.getParent();
				e ?? $(159), this.set(this.tableKey, r.getKey(), e.getKey());
			} else {
				let e = t.getParent();
				e ?? $(158), this.set(this.tableKey, e.getKey(), r.getKey());
			}
			return this.getNodes();
		}
		let [a, o, s] = Ov(t, n, r), { minColumn: c, maxColumn: l, minRow: u, maxRow: d } = jv(a, o, s), f = /* @__PURE__ */ new Map([[t.getKey(), t]]), p = null;
		for (let e = u; e <= d; e++) for (let t = c; t <= l; t++) {
			let { cell: n } = a[e][t], r = n.getParent();
			av(r) || $(160), r !== p && (f.set(r.getKey(), r), p = r), f.has(n.getKey()) || Rv(n, (e) => {
				f.set(e.getKey(), e);
			});
		}
		let m = Array.from(f.values());
		return tu() || (this._cachedNodes = m), m;
	}
	getTextContent() {
		let e = this.getNodes().filter((e) => Q(e)), t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.__parent, a = (e[n + 1] || {}).__parent;
			t += r.getTextContent() + (a === i ? "	" : "\n");
		}
		return t;
	}
};
function Fv(e) {
	return e instanceof Pv;
}
function Iv() {
	return new Pv("root", _l("root", 0, "element"), _l("root", 0, "element"));
}
function Lv(e, t, n) {
	e.getKey(), t.getKey(), n.getKey();
	let r = K(), i = Fv(r) ? r.clone() : Iv();
	return i.set(e.getKey(), t.getKey(), n.getKey()), i;
}
function Rv(e, t) {
	let n = [[e]];
	for (let e = n.at(-1); e !== void 0 && n.length > 0; e = n.at(-1)) {
		let r = e.pop();
		r === void 0 ? n.pop() : !1 !== t(r) && q(r) && n.push(r.getChildren());
	}
}
function zv(e, t = pf()) {
	let n = ud(e);
	ky(n) || $(231, e);
	let r = Uv(n, t.getElementByKey(e));
	return r === null && $(232, e), {
		tableElement: r,
		tableNode: n
	};
}
var Bv = class {
	focusX;
	focusY;
	listenersToRemove;
	table;
	isHighlightingCells;
	anchorX;
	anchorY;
	tableNodeKey;
	anchorCell;
	focusCell;
	anchorCellNodeKey;
	focusCellNodeKey;
	editor;
	tableSelection;
	hasHijackedSelectionStyles;
	isSelecting;
	pointerType;
	shouldCheckSelection;
	abortController;
	listenerOptions;
	nextFocus;
	constructor(e, t) {
		this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.listenersToRemove = /* @__PURE__ */ new Set(), this.tableNodeKey = t, this.editor = e, this.table = {
			columns: 0,
			domRows: [],
			rows: 0
		}, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.isSelecting = !1, this.pointerType = null, this.shouldCheckSelection = !1, this.abortController = new AbortController(), this.listenerOptions = { signal: this.abortController.signal }, this.nextFocus = null, this.trackTable();
	}
	getTable() {
		return this.table;
	}
	removeListeners() {
		this.abortController.abort("removeListeners"), Array.from(this.listenersToRemove).forEach((e) => e()), this.listenersToRemove.clear();
	}
	$lookup() {
		return zv(this.tableNodeKey, this.editor);
	}
	trackTable() {
		let e = new MutationObserver((e) => {
			this.editor.getEditorState().read(() => {
				let t = !1;
				for (let n = 0; n < e.length; n++) {
					let r = e[n].target.nodeName;
					if (r === "TABLE" || r === "TBODY" || r === "THEAD" || r === "TR") {
						t = !0;
						break;
					}
				}
				if (!t) return;
				let { tableNode: n, tableElement: r } = this.$lookup();
				this.table = $v(n, r);
			}, { editor: this.editor });
		});
		this.editor.getEditorState().read(() => {
			let { tableNode: t, tableElement: n } = this.$lookup();
			this.table = $v(t, n), e.observe(n, {
				attributes: !0,
				childList: !0,
				subtree: !0
			});
		}, { editor: this.editor });
	}
	$clearHighlight() {
		let e = this.editor;
		this.isHighlightingCells = !1, this.anchorX = -1, this.anchorY = -1, this.focusX = -1, this.focusY = -1, this.tableSelection = null, this.anchorCellNodeKey = null, this.focusCellNodeKey = null, this.anchorCell = null, this.focusCell = null, this.hasHijackedSelectionStyles = !1, this.$enableHighlightStyle();
		let { tableNode: t, tableElement: n } = this.$lookup();
		ey(e, $v(t, n), null), K() !== null && (vd(null), e.dispatchCommand(ss, void 0));
	}
	$enableHighlightStyle() {
		let e = this.editor, { tableElement: t } = this.$lookup();
		Sp(t, e._config.theme.tableSelection), t.classList.remove("disable-selection"), this.hasHijackedSelectionStyles = !1;
	}
	$disableHighlightStyle() {
		let { tableElement: e } = this.$lookup();
		xp(e, this.editor._config.theme.tableSelection), this.hasHijackedSelectionStyles = !0;
	}
	$updateTableTableSelection(e) {
		if (e !== null) {
			e.tableKey !== this.tableNodeKey && $(233, e.tableKey, this.tableNodeKey);
			let t = this.editor;
			this.tableSelection = e, this.isHighlightingCells = !0, this.$disableHighlightStyle(), this.updateDOMSelection(), ey(t, this.table, this.tableSelection);
		} else this.$clearHighlight();
	}
	setShouldCheckSelection() {
		this.shouldCheckSelection = !0;
	}
	getAndClearShouldCheckSelection() {
		return !!this.shouldCheckSelection && (this.shouldCheckSelection = !1, !0);
	}
	setNextFocus(e) {
		this.nextFocus = e;
	}
	getAndClearNextFocus() {
		let { nextFocus: e } = this;
		return e !== null && (this.nextFocus = null), e;
	}
	updateDOMSelection() {
		if (this.anchorCell !== null && this.focusCell !== null) {
			let e = rf(this.editor._window);
			e && e.rangeCount > 0 && e.removeAllRanges();
		}
	}
	$setFocusCellForSelection(e, t = !1) {
		let n = this.editor, { tableNode: r } = this.$lookup(), i = e.x, a = e.y;
		if (this.focusCell = e, !this.isHighlightingCells && (t || this.anchorX !== i || this.anchorY !== a || this.tableSelection != null && this.anchorCellNodeKey != null) && (this.isHighlightingCells = !0, this.$disableHighlightStyle()), this.focusX !== -1 && this.focusY !== -1 && i === this.focusX && a === this.focusY) return !1;
		if (this.focusX = i, this.focusY = a, this.isHighlightingCells) {
			let o = by(r, e.elem);
			if (this.tableSelection != null && this.anchorCellNodeKey != null) {
				let e = o;
				if (e === null && t && (e = r.getCellNodeFromCords(i, a, this.table)), e !== null) {
					let t = this.$getAnchorTableCellOrThrow();
					return this.focusCellNodeKey = e.getKey(), this.tableSelection = Lv(r, t, e), vd(this.tableSelection), n.dispatchCommand(ss, void 0), ey(n, this.table, this.tableSelection), !0;
				}
			}
		}
		return !1;
	}
	$getAnchorTableCell() {
		return this.anchorCellNodeKey ? ud(this.anchorCellNodeKey) : null;
	}
	$getAnchorTableCellOrThrow() {
		let e = this.$getAnchorTableCell();
		return e === null && $(234), e;
	}
	$getFocusTableCell() {
		return this.focusCellNodeKey ? ud(this.focusCellNodeKey) : null;
	}
	$getFocusTableCellOrThrow() {
		let e = this.$getFocusTableCell();
		return e === null && $(235), e;
	}
	$setAnchorCellForSelection(e) {
		this.isHighlightingCells = !1, this.anchorCell = e, this.anchorX = e.x, this.anchorY = e.y, this.focusX = -1, this.focusY = -1, this.focusCell = null, this.focusCellNodeKey = null;
		let { tableNode: t } = this.$lookup(), n = by(t, e.elem);
		if (n !== null) {
			let e = n.getKey();
			this.tableSelection == null ? this.tableSelection = Lv(t, n, n) : (this.tableSelection = this.tableSelection.clone(), this.tableSelection.set(t.getKey(), e, e)), this.anchorCellNodeKey = e;
		}
	}
	$formatCells(e) {
		let t = K();
		Fv(t) || $(236);
		let n = Pl(), r = n.anchor, i = n.focus, a = t.getNodes().filter(Q);
		a.length > 0 || $(237);
		let o = a[0].getFirstChild(), s = Pu(o) ? o.getFormatFlags(e, null) : null;
		a.forEach((t) => {
			r.set(t.getKey(), 0, "element"), i.set(t.getKey(), t.getChildrenSize(), "element"), n.formatText(e, s);
		}), vd(t), this.editor.dispatchCommand(ss, void 0);
	}
	$clearText() {
		let { editor: e } = this, t = ud(this.tableNodeKey);
		if (!ky(t)) throw Error("Expected TableNode.");
		let n = K();
		Fv(n) || $(253);
		let r = n.getNodes().filter(Q), i = t.getFirstChild(), a = t.getLastChild();
		if (r.length > 0 && i !== null && a !== null && av(i) && av(a) && r[0] === i.getFirstChild() && r[r.length - 1] === a.getLastChild()) {
			t.selectPrevious();
			let n = t.getParent();
			t.remove(), Eu(n) && n.isEmpty() && e.dispatchCommand(gs, void 0);
			return;
		}
		r.forEach((e) => {
			if (q(e)) {
				let t = J(), n = dl();
				t.append(n), e.append(t), e.getChildren().forEach((e) => {
					e !== t && e.remove();
				});
			}
		}), ey(e, this.table, null), vd(null), e.dispatchCommand(ss, void 0);
	}
}, Vv = "__lexicalTableSelection";
function Hv(e) {
	return sf(e) && e.nodeName === "TABLE";
}
function Uv(e, t) {
	if (!t) return t;
	let n = Hv(t) ? t : e.getDOMSlot(t).element;
	return n.nodeName !== "TABLE" && $(245, t.nodeName), n;
}
function Wv(e) {
	return e._window;
}
function Gv(e, t) {
	for (let n = t, r = null; n !== null; n = n.getParent()) {
		if (e.is(n)) return r;
		Q(n) && (r = n);
	}
	return null;
}
var Kv = [
	[js, "down"],
	[As, "up"],
	[Os, "backward"],
	[Es, "forward"]
], qv = [
	bs,
	xs,
	ms
], Jv = [Ps, Is];
function Yv(e, t, n, r) {
	let i = n.getRootElement(), a = Wv(n);
	i !== null && a !== null || $(246);
	let o = new Bv(n, e.getKey()), s = Uv(e, t);
	(function(e, t) {
		Xv(e) !== null && $(205), e[Vv] = t;
	})(s, o), o.listenersToRemove.add(() => function(e, t) {
		Xv(e) === t && delete e[Vv];
	}(s, o));
	let c = (t) => {
		if (o.pointerType = t.pointerType, t.button !== 0 || !cf(t.target) || !a) return;
		let r = Zv(t.target);
		r !== null && n.update(() => {
			let n = Rl();
			if (cv && t.shiftKey && cy(n, e) && (G(n) || Fv(n))) {
				let i = n.anchor.getNode(), a = Gv(e, n.anchor.getNode());
				a ? (o.$setAnchorCellForSelection(yy(o, a)), o.$setFocusCellForSelection(r), gy(t)) : (e.isBefore(i) ? e.selectStart() : e.selectEnd()).anchor.set(n.anchor.key, n.anchor.offset, n.anchor.type);
			} else t.pointerType !== "touch" && o.$setAnchorCellForSelection(r);
		}), ((e) => {
			if (o.isSelecting) return;
			o.isSelecting = !0, e !== null && o.anchorCell === null && n.update(() => {
				o.$setAnchorCellForSelection(e);
			});
			let t = () => {
				o.isSelecting = !1, a.removeEventListener("pointerup", t), a.removeEventListener("pointermove", r);
			}, r = (e) => {
				if (1 & ~e.buttons && o.isSelecting) return o.isSelecting = !1, a.removeEventListener("pointerup", t), void a.removeEventListener("pointermove", r);
				if (!cf(e.target)) return;
				let i = null, c = !(cv || s.contains(e.target));
				if (c) i = Qv(s, e.target);
				else for (let t of document.elementsFromPoint(e.clientX, e.clientY)) if (i = Qv(s, t), i) break;
				if (i) {
					let e = i;
					o.anchorCell === null && n.update(() => {
						o.$setAnchorCellForSelection(e);
					}), o.focusCell !== null && i.elem === o.focusCell.elem || (o.setNextFocus({
						focusCell: i,
						override: c
					}), n.dispatchCommand(ss, void 0));
				}
			};
			a.addEventListener("pointerup", t, o.listenerOptions), a.addEventListener("pointermove", r, o.listenerOptions);
		})(r);
	};
	s.addEventListener("pointerdown", c, o.listenerOptions), o.listenersToRemove.add(() => {
		s.removeEventListener("pointerdown", c);
	});
	let l = (e) => {
		e.detail >= 3 && cf(e.target) && Zv(e.target) !== null && e.preventDefault();
	};
	s.addEventListener("mousedown", l, o.listenerOptions), o.listenersToRemove.add(() => {
		s.removeEventListener("mousedown", l);
	});
	let u = (e) => {
		let t = e.target;
		e.button === 0 && cf(t) && n.update(() => {
			let e = K();
			Fv(e) && e.tableKey === o.tableNodeKey && i.contains(t) && o.$clearHighlight();
		});
	};
	a.addEventListener("pointerdown", u, o.listenerOptions), o.listenersToRemove.add(() => {
		a.removeEventListener("pointerdown", u);
	});
	for (let [t, r] of Kv) o.listenersToRemove.add(n.registerCommand(t, (t) => hy(n, t, r, e, o), 3));
	o.listenersToRemove.add(n.registerCommand(Fs, (t) => {
		let n = K();
		if (Fv(n)) {
			let r = Gv(e, n.focus.getNode());
			if (r !== null) return gy(t), r.selectEnd(), !0;
		}
		return !1;
	}, 3));
	let d = (t) => () => {
		let n = K();
		if (!cy(n, e)) return !1;
		if (Fv(n)) return o.$clearText(), !0;
		if (G(n)) {
			if (!Q(Gv(e, n.anchor.getNode()))) return !1;
			let r = n.anchor.getNode(), i = n.focus.getNode(), a = e.isParentOf(r), s = e.isParentOf(i);
			if (a && !s || s && !a) return o.$clearText(), !0;
			let c = X(n.anchor.getNode(), (e) => q(e)), l = c && X(c, (e) => q(e) && Q(e.getParent()));
			if (!q(l) || !q(c)) return !1;
			if (t === xs && l.getPreviousSibling() === null) return !0;
		}
		return !1;
	};
	for (let e of qv) o.listenersToRemove.add(n.registerCommand(e, d(e), 3));
	let f = (t) => {
		let n = K();
		if (!Fv(n) && !G(n)) return !1;
		let r = e.isParentOf(n.anchor.getNode());
		if (r !== e.isParentOf(n.focus.getNode())) {
			let t = r ? "anchor" : "focus", i = r ? "focus" : "anchor", { key: a, offset: o, type: s } = n[i];
			return e[n[t].isBefore(n[i]) ? "selectPrevious" : "selectNext"]()[i].set(a, o, s), !1;
		}
		return !!cy(n, e) && !!Fv(n) && (t && (t.preventDefault(), t.stopPropagation()), o.$clearText(), !0);
	};
	for (let e of Jv) o.listenersToRemove.add(n.registerCommand(e, f, 3));
	return o.listenersToRemove.add(n.registerCommand(qs, (e) => {
		let t = K();
		if (t) {
			if (!Fv(t) && !G(t)) return !1;
			Nm(n, sm(e, ClipboardEvent) ? e : null, Im(t));
			let r = f(e);
			return G(t) ? (t.removeText(), !0) : r;
		}
		return !1;
	}, 3)), o.listenersToRemove.add(n.registerCommand(Ss, (t) => {
		let n = K();
		return cy(n, e) ? Fv(n) ? (o.$formatCells(t), !0) : (G(n) && Q(X(n.anchor.getNode(), (e) => Q(e))), !1) : !1;
	}, 3)), o.listenersToRemove.add(n.registerCommand(Hs, (t) => {
		let n = K();
		if (!Fv(n) || !cy(n, e)) return !1;
		let r = n.anchor.getNode(), i = n.focus.getNode();
		if (!Q(r) || !Q(i)) return !1;
		if (function(e, t) {
			if (Fv(e)) {
				let n = e.anchor.getNode(), r = e.focus.getNode();
				if (t && n && r) {
					let [e] = Ov(t, n, r);
					return n.getKey() === e[0][0].cell.getKey() && r.getKey() === e[e.length - 1].at(-1).cell.getKey();
				}
			}
			return !1;
		}(n, e)) return e.setFormat(t), !0;
		let [a, o, s] = Ov(e, r, i), c = Math.max(o.startRow + o.cell.__rowSpan - 1, s.startRow + s.cell.__rowSpan - 1), l = Math.max(o.startColumn + o.cell.__colSpan - 1, s.startColumn + s.cell.__colSpan - 1), u = Math.min(o.startRow, s.startRow), d = Math.min(o.startColumn, s.startColumn), f = /* @__PURE__ */ new Set();
		for (let e = u; e <= c; e++) for (let n = d; n <= l; n++) {
			let r = a[e][n].cell;
			if (f.has(r)) continue;
			f.add(r), r.setFormat(t);
			let i = r.getChildren();
			for (let e = 0; e < i.length; e++) {
				let n = i[e];
				q(n) && !n.isInline() && n.setFormat(t);
			}
		}
		return !0;
	}, 3)), o.listenersToRemove.add(n.registerCommand(_s, (t) => {
		let r = K();
		if (!cy(r, e)) return !1;
		if (Fv(r)) return o.$clearHighlight(), !1;
		if (G(r)) {
			if (!Q(X(r.anchor.getNode(), (e) => Q(e)))) return !1;
			if (typeof t == "string") {
				let i = vy(n, r, e);
				if (i) return _y(i, e, [dl(t)]), !0;
			}
		}
		return !1;
	}, 3)), r && o.listenersToRemove.add(n.registerCommand(Ls, (t) => {
		let n = K();
		if (!G(n) || !n.isCollapsed() || !cy(n, e)) return !1;
		let r = fy(n.anchor.getNode());
		return !(r === null || !e.is(py(r))) && (gy(t), function(e, t) {
			let n = t === "next" ? "getNextSibling" : "getPreviousSibling", r = t === "next" ? "getFirstChild" : "getLastChild", i = e[n]();
			if (q(i)) return i.selectEnd();
			let a = X(e, av);
			a === null && $(247);
			for (let e = a[n](); av(e); e = e[n]()) {
				let t = e[r]();
				if (q(t)) return t.selectEnd();
			}
			let o = X(a, ky);
			o === null && $(248), t === "next" ? o.selectNext() : o.selectPrevious();
		}(r, t.shiftKey ? "previous" : "next"), !0);
	}, 3)), o.listenersToRemove.add(n.registerCommand($s, (t) => e.isSelected(), 3)), o.listenersToRemove.add(n.registerCommand(ss, () => {
		let t = K(), r = Rl(), i = o.getAndClearNextFocus();
		if (i !== null) {
			let { focusCell: e } = i;
			if (Fv(t) && t.tableKey === o.tableNodeKey) return (e.x !== o.focusX || e.y !== o.focusY) && (o.$setFocusCellForSelection(e), !0);
			if (e !== o.anchorCell && o.anchorCell !== null && o.anchorCellNodeKey !== null && o.tableSelection !== null) return o.$setFocusCellForSelection(e, !0), !0;
		}
		if (o.getAndClearShouldCheckSelection() && G(r) && G(t) && t.isCollapsed()) {
			let n = t.anchor.getNode(), r = e.getFirstChild(), i = fy(n);
			if (i !== null && av(r)) {
				let t = r.getFirstChild();
				if (Q(t) && e.is(X(i, (n) => n.is(e) || n.is(t)))) return t.selectStart(), !0;
			}
		}
		if (G(t)) {
			let { anchor: i, focus: a } = t, s = i.getNode(), c = a.getNode(), l = fy(s), u = fy(c), d = !(!l || !e.is(py(l))), f = !(!u || !e.is(py(u))), p = d !== f, m = d && f, h = t.isBackward();
			if (p) {
				let r = t.clone();
				if (f) {
					let [t] = Ov(e, u, u), n = t[0][0].cell, i = t[t.length - 1].at(-1).cell;
					r.focus.set(h ? n.getKey() : i.getKey(), h ? 0 : i.getChildrenSize(), "element");
				} else if (d) {
					let [t] = Ov(e, l, l), n = t[0][0].cell, i = t[t.length - 1].at(-1).cell;
					r.anchor.set(h ? i.getKey() : n.getKey(), h ? i.getChildrenSize() : 0, "element");
				}
				vd(r), ny(n, o);
			} else if (m && (l.is(u) || (o.$setAnchorCellForSelection(yy(o, l)), o.$setFocusCellForSelection(yy(o, u), !0)), o.pointerType === "touch" && o.isSelecting && t.isCollapsed() && G(r) && r.isCollapsed())) {
				let e = fy(r.anchor.getNode());
				e && !e.is(u) && (o.$setAnchorCellForSelection(yy(o, e)), o.$setFocusCellForSelection(yy(o, u), !0), o.pointerType = null);
			}
		} else if (t && Fv(t) && t.is(r) && t.tableKey === e.getKey()) {
			let r = rf(a);
			if (r && r.anchorNode && r.focusNode) {
				let i = pd(r.focusNode), a = i && !e.isParentOf(i), o = pd(r.anchorNode), s = o && e.isParentOf(o);
				if (a && s && r.rangeCount > 0) {
					let i = Il(r, n);
					i && (i.anchor.set(e.getKey(), t.isBackward() ? e.getChildrenSize() : 0, "element"), r.removeAllRanges(), vd(i));
				}
			}
		}
		return t && !t.is(r) && (Fv(t) || Fv(r)) && o.tableSelection && !o.tableSelection.is(r) ? (Fv(t) && t.tableKey === o.tableNodeKey ? o.$updateTableTableSelection(t) : !Fv(t) && Fv(r) && r.tableKey === o.tableNodeKey && o.$updateTableTableSelection(null), !1) : (o.hasHijackedSelectionStyles && !e.isSelected() ? function(e, t) {
			t.$enableHighlightStyle(), ty(t.table, (t) => {
				let n = t.elem;
				t.highlighted = !1, dy(e, t), n.getAttribute("style") || n.removeAttribute("style");
			});
		}(n, o) : !o.hasHijackedSelectionStyles && e.isSelected() && ny(n, o), !1);
	}, 3)), o.listenersToRemove.add(n.registerCommand(gs, () => {
		let t = K();
		if (!G(t) || !t.isCollapsed() || !cy(t, e)) return !1;
		let r = vy(n, t, e);
		return !!r && (_y(r, e), !0);
	}, 3)), o;
}
function Xv(e) {
	return e[Vv] || null;
}
function Zv(e) {
	let t = e;
	for (; t != null;) {
		let e = t.nodeName;
		if (e === "TD" || e === "TH") {
			let e = t._cell;
			return e === void 0 ? null : e;
		}
		t = t.parentNode;
	}
	return null;
}
function Qv(e, t) {
	if (!e.contains(t)) return null;
	let n = null;
	for (let r = t; r != null; r = r.parentNode) {
		if (r === e) return n;
		let t = r.nodeName;
		t !== "TD" && t !== "TH" || (n = r._cell || null);
	}
	return null;
}
function $v(e, t) {
	let n = [], r = {
		columns: 0,
		domRows: n,
		rows: 0
	}, i = Uv(e, t).querySelector("tr"), a = 0, o = 0;
	for (n.length = 0; i != null;) {
		let e = i.nodeName;
		if (e === "TD" || e === "TH") {
			let e = {
				elem: i,
				hasBackgroundColor: i.style.backgroundColor !== "",
				highlighted: !1,
				x: a,
				y: o
			};
			i._cell = e;
			let t = n[o];
			t === void 0 && (t = n[o] = []), t[a] = e;
		} else {
			let e = i.firstChild;
			if (e != null) {
				i = e;
				continue;
			}
		}
		let t = i.nextSibling;
		if (t != null) {
			a++, i = t;
			continue;
		}
		let r = i.parentNode;
		if (r != null) {
			let e = r.nextSibling;
			if (e == null) break;
			o++, a = 0, i = e;
		}
	}
	return r.columns = a + 1, r.rows = o + 1, r;
}
function ey(e, t, n) {
	let r = new Set(n ? n.getNodes() : []);
	ty(t, (t, n) => {
		let i = t.elem;
		r.has(n) ? (t.highlighted = !0, uy(e, t)) : (t.highlighted = !1, dy(e, t), i.getAttribute("style") || i.removeAttribute("style"));
	});
}
function ty(e, t) {
	let { domRows: n } = e;
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		if (r) for (let n = 0; n < r.length; n++) {
			let i = r[n];
			if (!i) continue;
			let a = pd(i.elem);
			a !== null && t(i, a, {
				x: n,
				y: e
			});
		}
	}
}
function ny(e, t) {
	t.$disableHighlightStyle(), ty(t.table, (t) => {
		t.highlighted = !0, uy(e, t);
	});
}
var ry = (e, t, n, r, i) => {
	let a = i === "forward";
	switch (i) {
		case "backward":
		case "forward": return n === (a ? e.table.columns - 1 : 0) ? r === (a ? e.table.rows - 1 : 0) ? a ? t.selectNext() : t.selectPrevious() : ly(t.getCellNodeFromCordsOrThrow(a ? 0 : e.table.columns - 1, r + (a ? 1 : -1), e.table), a) : ly(t.getCellNodeFromCordsOrThrow(n + (a ? 1 : -1), r, e.table), a), !0;
		case "up": return r === 0 ? t.selectPrevious() : ly(t.getCellNodeFromCordsOrThrow(n, r - 1, e.table), !1), !0;
		case "down": return r === e.table.rows - 1 ? t.selectNext() : ly(t.getCellNodeFromCordsOrThrow(n, r + 1, e.table), !0), !0;
		default: return !1;
	}
};
function iy(e, t) {
	let n, r;
	if (t.startColumn === e.minColumn) n = "minColumn";
	else {
		if (t.startColumn + t.cell.__colSpan - 1 !== e.maxColumn) return null;
		n = "maxColumn";
	}
	if (t.startRow === e.minRow) r = "minRow";
	else {
		if (t.startRow + t.cell.__rowSpan - 1 !== e.maxRow) return null;
		r = "maxRow";
	}
	return [n, r];
}
function ay([e, t]) {
	return [e === "minColumn" ? "maxColumn" : "minColumn", t === "minRow" ? "maxRow" : "minRow"];
}
function oy(e, t, [n, r]) {
	let i = t[r], a = e[i];
	a === void 0 && $(250, r, String(i));
	let o = t[n], s = a[o];
	return s === void 0 && $(250, n, String(o)), s;
}
function sy(e, t, n, r, i) {
	let a = jv(t, n, r), { topSpan: o, leftSpan: s, bottomSpan: c, rightSpan: l } = function(e, t) {
		let { minColumn: n, maxColumn: r, minRow: i, maxRow: a } = t, o = 1, s = 1, c = 1, l = 1, u = e[i], d = e[a];
		for (let e = n; e <= r; e++) o = Math.max(o, u[e].cell.__rowSpan), l = Math.max(l, d[e].cell.__rowSpan);
		for (let t = i; t <= a; t++) s = Math.max(s, e[t][n].cell.__colSpan), c = Math.max(c, e[t][r].cell.__colSpan);
		return {
			bottomSpan: l,
			leftSpan: s,
			rightSpan: c,
			topSpan: o
		};
	}(t, a), [u, d] = ay(function(e, t) {
		let n = iy(e, t);
		return n === null && $(249, t.cell.getKey()), n;
	}(a, n)), f = a[u], p = a[d];
	i === "forward" ? f += u === "maxColumn" ? 1 : s : i === "backward" ? f -= u === "minColumn" ? 1 : l : i === "down" ? p += d === "maxRow" ? 1 : o : i === "up" && (p -= d === "minRow" ? 1 : c);
	let m = t[p];
	if (m === void 0) return !1;
	let h = m[f];
	if (h === void 0) return !1;
	let [g, _] = function(e, t, n) {
		let r = jv(e, t, n), i = iy(r, t);
		if (i) return [oy(e, r, i), oy(e, r, ay(i))];
		let a = iy(r, n);
		if (a) return [oy(e, r, ay(a)), oy(e, r, a)];
		let o = ["minColumn", "minRow"];
		return [oy(e, r, o), oy(e, r, ay(o))];
	}(t, n, h), v = yy(e, g.cell), y = yy(e, _.cell);
	return e.$setAnchorCellForSelection(v), e.$setFocusCellForSelection(y, !0), !0;
}
function cy(e, t) {
	if (G(e) || Fv(e)) {
		let n = t.isParentOf(e.anchor.getNode()), r = t.isParentOf(e.focus.getNode());
		return n && r;
	}
	return !1;
}
function ly(e, t) {
	t ? e.selectStart() : e.selectEnd();
}
function uy(e, t) {
	let n = t.elem, r = e._config.theme;
	Q(pd(n)) || $(131), xp(n, r.tableCellSelected);
}
function dy(e, t) {
	let n = t.elem;
	Q(pd(n)) || $(131);
	let r = e._config.theme;
	Sp(n, r.tableCellSelected);
}
function fy(e) {
	let t = X(e, Q);
	return Q(t) ? t : null;
}
function py(e) {
	let t = X(e, ky);
	return ky(t) ? t : null;
}
function my(e, t, n, r, i, a, o) {
	let s = rp(n.focus, i ? "previous" : "next");
	if (pp(s)) return !1;
	let c = s;
	for (let e of Jf(s).iterNodeCarets("shadowRoot")) {
		if (!Pf(e) || !q(e.origin)) return !1;
		c = e;
	}
	let l = c.getParentAtCaret();
	if (!Q(l)) return !1;
	let u = l, d = function(e) {
		for (let t of Jf(e).iterNodeCarets("root")) {
			let { origin: n } = t;
			if (Q(n)) {
				if (Ff(t)) return Uf(n, e.direction);
			} else if (!av(n)) break;
		}
		return null;
	}(zf(u, c.direction)), f = X(u, ky);
	if (!f || !f.is(a)) return !1;
	let p = e.getElementByKey(u.getKey()), m = Zv(p);
	if (!p || !m) return !1;
	if (o.table = Ey(e, f), d) if (r === "extend") {
		let t = Zv(e.getElementByKey(d.origin.getKey()));
		if (!t) return !1;
		o.$setAnchorCellForSelection(m), o.$setFocusCellForSelection(t, !0);
	} else {
		let e = fp(d);
		ip(n.anchor, e), ip(n.focus, e);
	}
	else if (r === "extend") o.$setAnchorCellForSelection(m), o.$setFocusCellForSelection(m, !0);
	else {
		let e = function(e) {
			let t = Gf(e);
			return Ff(t) ? fp(t) : e;
		}(zf(f, s.direction));
		ip(n.anchor, e), ip(n.focus, e);
	}
	return gy(t), !0;
}
function hy(e, t, n, r, i) {
	if ((n === "up" || n === "down") && function(e) {
		let t = e.getRootElement();
		return t ? t.hasAttribute("aria-controls") && t.getAttribute("aria-controls") === "typeahead-menu" : !1;
	}(e)) return !1;
	let a = K();
	if (!cy(a, r)) {
		if (G(a)) {
			if (n === "backward") {
				if (a.focus.offset > 0) return !1;
				let e = function(e) {
					for (let t = e, n = e; n !== null; t = n, n = n.getParent()) if (q(n)) {
						if (n !== t && n.getFirstChild() !== t) return null;
						if (!n.isInline()) return n;
					}
					return null;
				}(a.focus.getNode());
				if (!e) return !1;
				let n = e.getPreviousSibling();
				return !!ky(n) && (gy(t), t.shiftKey ? a.focus.set(n.getParentOrThrow().getKey(), n.getIndexWithinParent(), "element") : n.selectEnd(), !0);
			}
			if (t.shiftKey && (n === "up" || n === "down")) {
				let e = a.focus.getNode();
				if (!a.isCollapsed() && (n === "up" && !a.isBackward() || n === "down" && a.isBackward())) {
					let i = X(e, (e) => ky(e));
					if (Q(i) && (i = X(i, ky)), i !== r || !i) return !1;
					let o = n === "down" ? i.getNextSibling() : i.getPreviousSibling();
					if (!o) return !1;
					let s = 0;
					n === "up" && q(o) && (s = o.getChildrenSize());
					let c = o;
					n === "up" && q(o) && (c = o.getLastChild() || o, s = W(c) ? c.getTextContentSize() : 0);
					let l = a.clone();
					return l.focus.set(c.getKey(), s, W(c) ? "text" : "element"), vd(l), gy(t), !0;
				}
				if (Xd(e)) {
					let e = n === "up" ? a.getNodes()[a.getNodes().length - 1] : a.getNodes()[0];
					if (e && Gv(r, e) !== null) {
						let e = r.getFirstDescendant(), t = r.getLastDescendant();
						if (!e || !t) return !1;
						let [n] = Av(e), [a] = Av(t), o = r.getCordsFromCellNode(n, i.table), s = r.getCordsFromCellNode(a, i.table), c = r.getDOMCellFromCordsOrThrow(o.x, o.y, i.table), l = r.getDOMCellFromCordsOrThrow(s.x, s.y, i.table);
						return i.$setAnchorCellForSelection(c), i.$setFocusCellForSelection(l, !0), !0;
					}
					return !1;
				}
				{
					let r = X(e, (e) => q(e) && !e.isInline());
					if (Q(r) && (r = X(r, ky)), !r) return !1;
					let o = n === "down" ? r.getNextSibling() : r.getPreviousSibling();
					if (ky(o) && i.tableNodeKey === o.getKey()) {
						let e = o.getFirstDescendant(), r = o.getLastDescendant();
						if (!e || !r) return !1;
						let [i] = Av(e), [s] = Av(r), c = a.clone();
						return c.focus.set((n === "up" ? i : s).getKey(), n === "up" ? 0 : s.getChildrenSize(), "element"), gy(t), vd(c), !0;
					}
				}
			}
		}
		return n === "down" && Cy(e) && i.setShouldCheckSelection(), !1;
	}
	if (G(a)) {
		if (n === "backward" || n === "forward") return my(e, t, a, t.shiftKey ? "extend" : "move", n === "backward", r, i);
		if (a.isCollapsed()) {
			let { anchor: o, focus: s } = a, c = X(o.getNode(), Q), l = X(s.getNode(), Q);
			if (!Q(c) || !c.is(l)) return !1;
			let u = py(c);
			if (u !== r && u != null) {
				let r = Uv(u, e.getElementByKey(u.getKey()));
				if (r != null) return i.table = $v(u, r), hy(e, t, n, u, i);
			}
			let d = e.getElementByKey(c.__key), f = e.getElementByKey(o.key);
			if (f == null || d == null) return !1;
			let p;
			if (o.type === "element") p = f.getBoundingClientRect();
			else {
				let t = rf(Wv(e));
				if (t === null || t.rangeCount === 0) return !1;
				p = t.getRangeAt(0).getBoundingClientRect();
			}
			let m = n === "up" ? c.getFirstChild() : c.getLastChild();
			if (m == null) return !1;
			let h = e.getElementByKey(m.__key);
			if (h == null) return !1;
			let g = h.getBoundingClientRect();
			if (n === "up" ? g.top > p.top - p.height : p.bottom + p.height > g.bottom) {
				gy(t);
				let e = r.getCordsFromCellNode(c, i.table);
				if (!t.shiftKey) return ry(i, r, e.x, e.y, n);
				{
					let t = r.getDOMCellFromCordsOrThrow(e.x, e.y, i.table);
					i.$setAnchorCellForSelection(t), i.$setFocusCellForSelection(t, !0);
				}
				return !0;
			}
		}
	} else if (Fv(a)) {
		let { anchor: o, focus: s } = a, c = X(o.getNode(), Q), l = X(s.getNode(), Q), [u] = a.getNodes();
		ky(u) || $(251);
		let d = Uv(u, e.getElementByKey(u.getKey()));
		if (!Q(c) || !Q(l) || !ky(u) || d == null) return !1;
		i.$updateTableTableSelection(a);
		let f = $v(u, d), p = r.getCordsFromCellNode(c, f), m = r.getDOMCellFromCordsOrThrow(p.x, p.y, f);
		if (i.$setAnchorCellForSelection(m), gy(t), t.shiftKey) {
			let [e, t, a] = Ov(r, c, l);
			return sy(i, e, t, a, n);
		}
		return l.selectEnd(), !0;
	}
	return !1;
}
function gy(e) {
	e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
}
function _y(e, t, n) {
	let r = J();
	e === "first" ? t.insertBefore(r) : t.insertAfter(r), r.append(...n || []), r.selectEnd();
}
function vy(e, t, n) {
	let r = n.getParent();
	if (!r) return;
	let i = rf(Wv(e));
	if (!i) return;
	let a = i.anchorNode, o = e.getElementByKey(r.getKey()), s = Uv(n, e.getElementByKey(n.getKey()));
	if (!a || !o || !s || !o.contains(a) || s.contains(a)) return;
	let c = X(t.anchor.getNode(), (e) => Q(e));
	if (!c) return;
	let l = X(c, (e) => ky(e));
	if (!ky(l) || !l.is(n)) return;
	let [u, d] = Ov(n, c, c), f = u[0][0], p = u[u.length - 1][u[0].length - 1], { startRow: m, startColumn: h } = d, g = m === f.startRow && h === f.startColumn, _ = m === p.startRow && h === p.startColumn;
	return g ? "first" : _ ? "last" : void 0;
}
function yy(e, t) {
	let { tableNode: n } = e.$lookup(), r = n.getCordsFromCellNode(t, e.table);
	return n.getDOMCellFromCordsOrThrow(r.x, r.y, e.table);
}
function by(e, t, n) {
	return Gv(e, pd(t, n));
}
function xy(e, t, n) {
	if (!t.theme.tableAlignment) return;
	let r = [], i = [];
	for (let e of ["center", "right"]) {
		let a = t.theme.tableAlignment[e];
		a && (e === n ? i : r).push(a);
	}
	Sp(e, ...r), xp(e, ...i);
}
var Sy = /* @__PURE__ */ new WeakSet();
function Cy(e = pf()) {
	return Sy.has(e);
}
function wy(e, t) {
	t ? Sy.add(e) : Sy.delete(e);
}
var Ty = class e extends xu {
	__rowStriping;
	__frozenColumnCount;
	__frozenRowCount;
	__colWidths;
	static getType() {
		return "table";
	}
	getColWidths() {
		return this.getLatest().__colWidths;
	}
	setColWidths(e) {
		let t = this.getWritable();
		return t.__colWidths = e, t;
	}
	static clone(t) {
		return new e(t.__key);
	}
	afterCloneFrom(e) {
		super.afterCloneFrom(e), this.__colWidths = e.__colWidths, this.__rowStriping = e.__rowStriping, this.__frozenColumnCount = e.__frozenColumnCount, this.__frozenRowCount = e.__frozenRowCount;
	}
	static importDOM() {
		return { table: (e) => ({
			conversion: Dy,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Oy().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setRowStriping(e.rowStriping || !1).setFrozenColumns(e.frozenColumnCount || 0).setFrozenRows(e.frozenRowCount || 0).setColWidths(e.colWidths);
	}
	constructor(e) {
		super(e), this.__rowStriping = !1, this.__frozenColumnCount = 0, this.__frozenRowCount = 0, this.__colWidths = void 0;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			colWidths: this.getColWidths(),
			frozenColumnCount: this.__frozenColumnCount ? this.__frozenColumnCount : void 0,
			frozenRowCount: this.__frozenRowCount ? this.__frozenRowCount : void 0,
			rowStriping: this.__rowStriping ? this.__rowStriping : void 0
		};
	}
	extractWithChild(e, t, n) {
		return n === "html";
	}
	getDOMSlot(e) {
		let t = Hv(e) ? e : e.querySelector("table");
		return Hv(t) || $(229), super.getDOMSlot(e).withElement(t).withAfter(t.querySelector("colgroup"));
	}
	createDOM(e, t) {
		let n = document.createElement("table");
		this.__style && (n.style.cssText = this.__style);
		let r = document.createElement("colgroup");
		if (n.appendChild(r), bf(r), xp(n, e.theme.table), this.updateTableElement(null, n, e), Cy(t)) {
			let t = document.createElement("div"), r = e.theme.tableScrollableWrapper;
			return r ? xp(t, r) : t.style.cssText = "overflow-x: auto;", t.appendChild(n), this.updateTableWrapper(null, t, n, e), t;
		}
		return n;
	}
	updateTableWrapper(e, t, n, r) {
		this.__frozenColumnCount !== (e ? e.__frozenColumnCount : 0) && function(e, t, n, r) {
			r > 0 ? (xp(e, n.theme.tableFrozenColumn), t.setAttribute("data-lexical-frozen-column", "true")) : (Sp(e, n.theme.tableFrozenColumn), t.removeAttribute("data-lexical-frozen-column"));
		}(t, n, r, this.__frozenColumnCount), this.__frozenRowCount !== (e ? e.__frozenRowCount : 0) && function(e, t, n, r) {
			r > 0 ? (xp(e, n.theme.tableFrozenRow), t.setAttribute("data-lexical-frozen-row", "true")) : (Sp(e, n.theme.tableFrozenRow), t.removeAttribute("data-lexical-frozen-row"));
		}(t, n, r, this.__frozenRowCount);
	}
	updateTableElement(e, t, n) {
		this.__style !== (e ? e.__style : "") && (t.style.cssText = this.__style), this.__rowStriping !== (!!e && e.__rowStriping) && function(e, t, n) {
			n ? (xp(e, t.theme.tableRowStriping), e.setAttribute("data-lexical-row-striping", "true")) : (Sp(e, t.theme.tableRowStriping), e.removeAttribute("data-lexical-row-striping"));
		}(t, n, this.__rowStriping), function(e, t, n, r) {
			let i = e.querySelector("colgroup");
			if (!i) return;
			let a = [];
			for (let e = 0; e < n; e++) {
				let t = document.createElement("col"), n = r && r[e];
				n && (t.style.width = `${n}px`), a.push(t);
			}
			i.replaceChildren(...a);
		}(t, 0, this.getColumnCount(), this.getColWidths()), xy(t, n, this.getFormatType());
	}
	updateDOM(e, t, n) {
		let r = this.getDOMSlot(t).element;
		return t === r === Cy() || (sf(i = t) && i.nodeName === "DIV" && this.updateTableWrapper(e, t, r, n), this.updateTableElement(e, r, n), !1);
		var i;
	}
	exportDOM(e) {
		let t = super.exportDOM(e), { element: n } = t;
		return {
			after: (n) => {
				if (t.after && (n = t.after(n)), !Hv(n) && sf(n) && (n = n.querySelector("table")), !Hv(n)) return null;
				xy(n, e._config, this.getFormatType());
				let [r] = kv(this, null, null), i = /* @__PURE__ */ new Map();
				for (let e of r) for (let t of e) {
					let e = t.cell.getKey();
					i.has(e) || i.set(e, {
						colSpan: t.cell.getColSpan(),
						startColumn: t.startColumn
					});
				}
				let a = /* @__PURE__ */ new Set();
				for (let e of n.querySelectorAll(":scope > tr > [data-temporary-table-cell-lexical-key]")) {
					let t = e.getAttribute("data-temporary-table-cell-lexical-key");
					if (t) {
						let n = i.get(t);
						if (e.removeAttribute("data-temporary-table-cell-lexical-key"), n) {
							i.delete(t);
							for (let e = 0; e < n.colSpan; e++) a.add(e + n.startColumn);
						}
					}
				}
				let o = n.querySelector(":scope > colgroup");
				if (o) {
					let e = Array.from(n.querySelectorAll(":scope > colgroup > col")).filter((e, t) => a.has(t));
					o.replaceChildren(...e);
				}
				let s = n.querySelectorAll(":scope > tr");
				if (s.length > 0) {
					let e = document.createElement("tbody");
					for (let t of s) e.appendChild(t);
					n.append(e);
				}
				return n;
			},
			element: !Hv(n) && sf(n) ? n.querySelector("table") : n
		};
	}
	canBeEmpty() {
		return !1;
	}
	isShadowRoot() {
		return !0;
	}
	getCordsFromCellNode(e, t) {
		let { rows: n, domRows: r } = t;
		for (let t = 0; t < n; t++) {
			let n = r[t];
			if (n != null) for (let r = 0; r < n.length; r++) {
				let i = n[r];
				if (i == null) continue;
				let { elem: a } = i, o = by(this, a);
				if (o !== null && e.is(o)) return {
					x: r,
					y: t
				};
			}
		}
		throw Error("Cell not found in table.");
	}
	getDOMCellFromCords(e, t, n) {
		let { domRows: r } = n, i = r[t];
		return i == null ? null : i[e < i.length ? e : i.length - 1] ?? null;
	}
	getDOMCellFromCordsOrThrow(e, t, n) {
		let r = this.getDOMCellFromCords(e, t, n);
		if (!r) throw Error("Cell not found at cords.");
		return r;
	}
	getCellNodeFromCords(e, t, n) {
		let r = this.getDOMCellFromCords(e, t, n);
		if (r == null) return null;
		let i = pd(r.elem);
		return Q(i) ? i : null;
	}
	getCellNodeFromCordsOrThrow(e, t, n) {
		let r = this.getCellNodeFromCords(e, t, n);
		if (!r) throw Error("Node at cords not TableCellNode.");
		return r;
	}
	getRowStriping() {
		return !!this.getLatest().__rowStriping;
	}
	setRowStriping(e) {
		let t = this.getWritable();
		return t.__rowStriping = e, t;
	}
	setFrozenColumns(e) {
		let t = this.getWritable();
		return t.__frozenColumnCount = e, t;
	}
	getFrozenColumns() {
		return this.getLatest().__frozenColumnCount;
	}
	setFrozenRows(e) {
		let t = this.getWritable();
		return t.__frozenRowCount = e, t;
	}
	getFrozenRows() {
		return this.getLatest().__frozenRowCount;
	}
	canSelectBefore() {
		return !0;
	}
	canIndent() {
		return !1;
	}
	getColumnCount() {
		let e = this.getFirstChild();
		if (!e) return 0;
		let t = 0;
		return e.getChildren().forEach((e) => {
			Q(e) && (t += e.getColSpan());
		}), t;
	}
};
function Ey(e, t) {
	let n = e.getElementByKey(t.getKey());
	return n === null && $(230), $v(t, n);
}
function Dy(e) {
	let t = Oy();
	e.hasAttribute("data-lexical-row-striping") && t.setRowStriping(!0), e.hasAttribute("data-lexical-frozen-column") && t.setFrozenColumns(1), e.hasAttribute("data-lexical-frozen-row") && t.setFrozenRows(1);
	let n = e.querySelector(":scope > colgroup");
	if (n) {
		let e = [];
		for (let t of n.querySelectorAll(":scope > col")) {
			let n = t.style.width || "";
			if (!Y_.test(n) && (n = t.getAttribute("width") || "", !/^\d+$/.test(n))) {
				e = void 0;
				break;
			}
			e.push(parseFloat(n));
		}
		e && t.setColWidths(e);
	}
	return {
		after: (e) => hm(e, av),
		node: t
	};
}
function Oy() {
	return Qd(new Ty());
}
function ky(e) {
	return e instanceof Ty;
}
function Ay(e) {
	av(e.getParent()) ? e.isEmpty() && e.append(J()) : e.remove();
}
function jy(e) {
	ky(e.getParent()) ? pm(e, Q) : e.remove();
}
function My(e) {
	pm(e, av);
	let [t] = kv(e, null, null), n = t.reduce((e, t) => Math.max(e, t.length), 0), r = e.getChildren();
	for (let e = 0; e < t.length; ++e) {
		let i = r[e];
		if (!i) continue;
		av(i) || $(254, i.constructor.name, i.getType());
		let a = t[e].reduce((e, t) => t ? 1 + e : e, 0);
		if (a !== n) for (let e = a; e < n; ++e) {
			let e = ev();
			e.append(J()), i.append(e);
		}
	}
	let i = e.getColWidths(), a = e.getColumnCount();
	if (i && i.length !== a) {
		let t;
		if (a < i.length) t = i.slice(0, a);
		else if (i.length > 0) {
			let e = i[i.length - 1];
			t = [...i, ...Array(a - i.length).fill(e)];
		}
		e.setColWidths(t);
	}
}
function Ny(e) {
	if (e.detail < 3 || !cf(e.target)) return !1;
	let t = pd(e.target);
	if (t === null) return !1;
	let n = X(t, (e) => q(e) && !e.isInline());
	return n !== null && !!Q(n.getParent()) && (n.select(0), !0);
}
function Py() {
	let e = K();
	if (!G(e)) return !1;
	let t = py(e.anchor.getNode());
	if (t === null) return !1;
	let n = gd();
	if (!n.is(t.getParent()) || n.getChildrenSize() !== 1) return !1;
	let [r] = kv(t, null, null);
	if (r.length === 0 || r[0].length === 0) return !1;
	let i = r[0][0];
	if (!i || !i.cell) return !1;
	let a = r[r.length - 1], o = a[a.length - 1];
	return !o || !o.cell ? !1 : (vd(Lv(t, i.cell, o.cell)), !0);
}
function Fy(e) {
	return e.registerNodeTransform(Z_, (e) => {
		if (e.getColSpan() > 1 || e.getRowSpan() > 1) {
			let [, , t] = Av(e), [n] = Ov(t, e, e), r = n.length, i = n[0].length, a = t.getFirstChild();
			av(a) || $(175);
			let o = [];
			for (let e = 0; e < r; e++) {
				e !== 0 && (a = a.getNextSibling(), av(a) || $(175));
				let t = null;
				for (let r = 0; r < i; r++) {
					let i = n[e][r], s = i.cell;
					if (i.startRow === e && i.startColumn === r) t = s, o.push(s);
					else if (s.getColSpan() > 1 || s.getRowSpan() > 1) {
						Q(s) || $(176);
						let e = ev(s.__headerState);
						t === null ? lm(a, e) : t.insertAfter(e);
					}
				}
			}
			for (let e of o) e.setColSpan(1), e.setRowSpan(1);
		}
	});
}
function Iy(e, t = !0) {
	let n = /* @__PURE__ */ new Map(), r = (r, i, a) => {
		let o = Uv(r, a), s = Yv(r, o, e, t);
		n.set(i, [s, o]);
	}, i = e.registerMutationListener(Ty, (t) => {
		e.getEditorState().read(() => {
			for (let [e, i] of t) {
				let t = n.get(e);
				if (i === "created" || i === "updated") {
					let { tableNode: i, tableElement: a } = zv(e);
					t === void 0 ? r(i, e, a) : a !== t[1] && (t[0].removeListeners(), n.delete(e), r(i, e, a));
				} else i === "destroyed" && t !== void 0 && (t[0].removeListeners(), n.delete(e));
			}
		}, { editor: e });
	}, { skipInitialization: !1 });
	return () => {
		i();
		for (let [, [e]] of n) e.removeListeners();
	};
}
function Ly(e, t) {
	e.hasNodes([Ty]) || $(255);
	let { hasNestedTables: n = Jm(!1) } = t ?? {};
	return Cp(e.registerCommand(tv, (e) => function({ rows: e, columns: t, includeHeaders: n }, r) {
		let i = K() || Rl();
		if (!i || !G(i) || !r && py(i.anchor.getNode())) return !1;
		let a = lv(Number(e), Number(t), n);
		im(a);
		let o = a.getFirstDescendant();
		return W(o) && o.select(), !0;
	}(e, n.peek()), 0), e.registerCommand(cs, (t, r) => {
		if (e !== r) return !1;
		if (function(e) {
			let { nodes: t, selection: n } = e, r = n.getStartEndPoints(), i = Fv(n), a = G(n) && X(n.anchor.getNode(), (e) => Q(e)) !== null && X(n.focus.getNode(), (e) => Q(e)) !== null || i;
			if (t.length !== 1 || !ky(t[0]) || !a || r === null) return !1;
			let [o, s] = r, [c, l, u] = Av(o), d = X(s.getNode(), (e) => Q(e));
			if (!(Q(c) && Q(d) && av(l) && ky(u))) return !1;
			let f = t[0], [p, m, h] = Ov(u, c, d), [g] = kv(f, null, null), _ = p.length, v = _ > 0 ? p[0].length : 0, y = m.startRow, b = m.startColumn, x = g.length, S = x > 0 ? g[0].length : 0;
			if (i) {
				let e = jv(p, m, h), t = e.maxRow - e.minRow + 1, n = e.maxColumn - e.minColumn + 1;
				y = e.minRow, b = e.minColumn, x = Math.min(x, t), S = Math.min(S, n);
			}
			let C = !1, ee = Math.min(_, y + x) - 1, te = Math.min(v, b + S) - 1, ne = /* @__PURE__ */ new Set();
			for (let e = y; e <= ee; e++) for (let t = b; t <= te; t++) {
				let n = p[e][t];
				ne.has(n.cell.getKey()) || n.cell.__rowSpan === 1 && n.cell.__colSpan === 1 || (Dv(n.cell), ne.add(n.cell.getKey()), C = !0);
			}
			let [re] = kv(u.getWritable(), null, null), ie = x - _ + y;
			for (let e = 0; e < ie; e++) _v(re[_ - 1][0].cell);
			let ae = S - v + b;
			for (let e = 0; e < ae; e++) yv(re[0][v - 1].cell, !0, !1);
			[re] = kv(u.getWritable(), null, null);
			for (let e = y; e < y + x; e++) for (let t = b; t < b + S; t++) {
				let n = e - y, r = t - b, i = g[n][r];
				if (i.startRow !== n || i.startColumn !== r) continue;
				let a = i.cell;
				if (a.__rowSpan !== 1 || a.__colSpan !== 1) {
					let n = [], r = Math.min(e + a.__rowSpan, y + x) - 1, i = Math.min(t + a.__colSpan, b + S) - 1;
					for (let a = e; a <= r; a++) for (let e = t; e <= i; e++) {
						let t = re[a][e];
						n.push(t.cell);
					}
					wv(n), C = !0;
				}
				let { cell: o } = re[e][t], s = o.getChildren();
				a.getChildren().forEach((e) => {
					W(e) && J().append(e), o.append(e);
				}), s.forEach((e) => e.remove());
			}
			if (i && C) {
				let [e] = kv(u.getWritable(), null, null);
				e[m.startRow][m.startColumn].cell.selectEnd();
			}
			return !0;
		}(t)) return !0;
		let { selection: i, nodes: a } = t;
		return n.peek() || e !== r || !G(i) ? !1 : py(i.anchor.getNode()) !== null && a.some(ky);
	}, 0), e.registerCommand(Js, Py, 1), e.registerCommand(ls, Ny, 0), e.registerNodeTransform(Ty, My), e.registerNodeTransform(nv, jy), e.registerNodeTransform(Z_, Ay));
}
//#endregion
//#region node_modules/@lexical/link/LexicalLink.prod.mjs
var Ry = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]), zy = class e extends xu {
	__url;
	__target;
	__rel;
	__title;
	static getType() {
		return "link";
	}
	static clone(t) {
		return new e(t.__url, {
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	constructor(e = "", t = {}, n) {
		super(n);
		let { target: r = null, rel: i = null, title: a = null } = t;
		this.__url = e, this.__target = r, this.__rel = i, this.__title = a;
	}
	createDOM(e) {
		let t = document.createElement("a");
		return this.updateLinkDOM(null, t, e), xp(t, e.theme.link), t;
	}
	updateLinkDOM(e, t, n) {
		if (of(t)) {
			e && e.__url === this.__url || (t.href = this.sanitizeUrl(this.__url));
			for (let n of [
				"target",
				"rel",
				"title"
			]) {
				let r = `__${n}`, i = this[r];
				e && e[r] === i || (i ? t[n] = i : t.removeAttribute(n));
			}
		}
	}
	updateDOM(e, t, n) {
		return this.updateLinkDOM(e, t, n), !1;
	}
	static importDOM() {
		return { a: (e) => ({
			conversion: By,
			priority: 1
		}) };
	}
	static importJSON(e) {
		return Vy().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setURL(e.url).setRel(e.rel || null).setTarget(e.target || null).setTitle(e.title || null);
	}
	sanitizeUrl(e) {
		e = Xy(e);
		try {
			let t = new URL(Xy(e));
			if (!Ry.has(t.protocol)) return "about:blank";
		} catch {
			return e;
		}
		return e;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			rel: this.getRel(),
			target: this.getTarget(),
			title: this.getTitle(),
			url: this.getURL()
		};
	}
	getURL() {
		return this.getLatest().__url;
	}
	setURL(e) {
		let t = this.getWritable();
		return t.__url = e, t;
	}
	getTarget() {
		return this.getLatest().__target;
	}
	setTarget(e) {
		let t = this.getWritable();
		return t.__target = e, t;
	}
	getRel() {
		return this.getLatest().__rel;
	}
	setRel(e) {
		let t = this.getWritable();
		return t.__rel = e, t;
	}
	getTitle() {
		return this.getLatest().__title;
	}
	setTitle(e) {
		let t = this.getWritable();
		return t.__title = e, t;
	}
	insertNewAfter(e, t = !0) {
		let n = Vy(this.__url, {
			rel: this.__rel,
			target: this.__target,
			title: this.__title
		});
		return this.insertAfter(n, t), n;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	canBeEmpty() {
		return !1;
	}
	isInline() {
		return !0;
	}
	extractWithChild(e, t, n) {
		if (!G(t)) return !1;
		let r = t.anchor.getNode(), i = t.focus.getNode();
		return this.isParentOf(r) && this.isParentOf(i) && t.getTextContent().length > 0;
	}
	isEmailURI() {
		return this.__url.startsWith("mailto:");
	}
	isWebSiteURI() {
		return this.__url.startsWith("https://") || this.__url.startsWith("http://");
	}
};
function By(e) {
	let t = null;
	if (of(e)) {
		let n = e.textContent;
		(n !== null && n !== "" || e.children.length > 0) && (t = Vy(e.getAttribute("href") || "", {
			rel: e.getAttribute("rel"),
			target: e.getAttribute("target"),
			title: e.getAttribute("title")
		}));
	}
	return { node: t };
}
function Vy(e = "", t) {
	return Qd(new zy(e, t));
}
function Hy(e) {
	return e instanceof zy;
}
var Uy = class e extends zy {
	__isUnlinked;
	constructor(e = "", t = {}, n) {
		super(e, t, n), this.__isUnlinked = t.isUnlinked !== void 0 && t.isUnlinked !== null && t.isUnlinked;
	}
	static getType() {
		return "autolink";
	}
	static clone(t) {
		return new e(t.__url, {
			isUnlinked: t.__isUnlinked,
			rel: t.__rel,
			target: t.__target,
			title: t.__title
		}, t.__key);
	}
	getIsUnlinked() {
		return this.__isUnlinked;
	}
	setIsUnlinked(e) {
		let t = this.getWritable();
		return t.__isUnlinked = e, t;
	}
	createDOM(e) {
		return this.__isUnlinked ? document.createElement("span") : super.createDOM(e);
	}
	updateDOM(e, t, n) {
		return super.updateDOM(e, t, n) || e.__isUnlinked !== this.__isUnlinked;
	}
	static importJSON(e) {
		return Wy().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setIsUnlinked(e.isUnlinked || !1);
	}
	static importDOM() {
		return null;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			isUnlinked: this.__isUnlinked
		};
	}
	insertNewAfter(e, t = !0) {
		let n = this.getParentOrThrow().insertNewAfter(e, t);
		if (q(n)) {
			let e = Wy(this.__url, {
				isUnlinked: this.__isUnlinked,
				rel: this.__rel,
				target: this.__target,
				title: this.__title
			});
			return n.append(e), e;
		}
		return null;
	}
};
function Wy(e = "", t) {
	return Qd(new Uy(e, t));
}
function Gy(e) {
	return e instanceof Uy;
}
var Ky = U("TOGGLE_LINK_COMMAND");
function qy(e, t) {
	if (e.type === "element") {
		let n = e.getNode();
		return q(n) || function(e, ...t) {
			let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
			r.append("code", e);
			for (let e of t) r.append("v", e);
			throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
		}(252), n.getChildren()[e.offset + t] || null;
	}
	return null;
}
function Jy(e, t = {}) {
	let n;
	if (e && typeof e == "object") {
		let { url: r, ...i } = e;
		n = r, t = {
			...i,
			...t
		};
	} else n = e;
	let { target: r, title: i } = t, a = t.rel === void 0 ? "noreferrer" : t.rel, o = K();
	if (o === null || !G(o) && !Sl(o)) return;
	if (Sl(o)) {
		let e = o.getNodes();
		if (e.length === 0) return;
		e.forEach((e) => {
			if (n === null) {
				let t = X(e, (e) => !Gy(e) && Hy(e));
				t && (t.insertBefore(e), t.getChildren().length === 0 && t.remove());
			} else {
				let t = X(e, (e) => !Gy(e) && Hy(e));
				if (t) t.setURL(n), r !== void 0 && t.setTarget(r), a !== void 0 && t.setRel(a);
				else {
					let t = Vy(n, {
						rel: a,
						target: r
					});
					e.insertBefore(t), t.append(e);
				}
			}
		});
		return;
	}
	let s = o.extract();
	if (n === null) {
		let e = /* @__PURE__ */ new Set();
		s.forEach((t) => {
			let n = X(t, (e) => !Gy(e) && Hy(e));
			if (n !== null) {
				let t = n.getKey();
				if (e.has(t)) return;
				(function(e, t) {
					let n = new Set(t.filter((t) => e.isParentOf(t)).map((e) => e.getKey())), r = e.getChildren(), i = (r) => n.has(r.getKey()) || q(r) && t.some((t) => e.isParentOf(t) && r.isParentOf(t)), a = r.filter(i);
					if (a.length === r.length) return r.forEach((t) => e.insertBefore(t)), void e.remove();
					let o = r.findIndex(i), s = r.findLastIndex(i), c = o === 0, l = s === r.length - 1;
					if (c) a.forEach((t) => e.insertBefore(t));
					else if (l) for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
					else {
						for (let t = a.length - 1; t >= 0; t--) e.insertAfter(a[t]);
						let t = r.slice(s + 1);
						if (t.length > 0) {
							let n = Vy(e.getURL(), {
								rel: e.getRel(),
								target: e.getTarget(),
								title: e.getTitle()
							});
							a[a.length - 1].insertAfter(n), t.forEach((e) => n.append(e));
						}
					}
				})(n, s), e.add(t);
			}
		});
		return;
	}
	let c = /* @__PURE__ */ new Set(), l = (e) => {
		c.has(e.getKey()) || (c.add(e.getKey()), e.setURL(n), r !== void 0 && e.setTarget(r), a !== void 0 && e.setRel(a), i !== void 0 && e.setTitle(i));
	};
	if (s.length === 1) {
		let e = s[0], t = X(e, Hy);
		if (t !== null) return l(t);
	}
	(function(e) {
		let t = K();
		if (!G(t)) return e();
		let n = To(t), r = n.isBackward(), i = qy(n.anchor, r ? -1 : 0), a = qy(n.focus, r ? 0 : -1);
		if (e(), i || a) {
			let e = K();
			if (G(e)) {
				let t = e.clone();
				if (i) {
					let e = i.getParent();
					e && t.anchor.set(e.getKey(), i.getIndexWithinParent() + +!!r, "element");
				}
				if (a) {
					let e = a.getParent();
					e && t.focus.set(e.getKey(), a.getIndexWithinParent() + +!r, "element");
				}
				vd(To(t));
			}
		}
	})(() => {
		let e = null;
		for (let t of s) {
			if (!t.isAttached()) continue;
			let o = X(t, Hy);
			if (o) {
				l(o);
				continue;
			}
			if (q(t)) {
				if (!t.isInline()) continue;
				if (Hy(t)) {
					if (!(Gy(t) || e !== null && e.getParentOrThrow().isParentOf(t))) {
						l(t), e = t;
						continue;
					}
					for (let e of t.getChildren()) t.insertBefore(e);
					t.remove();
					continue;
				}
			}
			let s = t.getPreviousSibling();
			Hy(s) && s.is(e) ? s.append(t) : (e = Vy(n, {
				rel: a,
				target: r,
				title: i
			}), t.insertAfter(e), e.append(t));
		}
	});
}
var Yy = /^\+?[0-9\s()-]{5,}$/;
function Xy(e) {
	return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : Yy.test(e) ? `tel:${e}` : `https://${e}`;
}
var Zy = /* @__PURE__ */ new Set([
	"http:",
	"https:",
	"mailto:",
	"sms:",
	"tel:"
]);
function Qy(e) {
	try {
		let t = new URL(e);
		if (!Zy.has(t.protocol)) return "about:blank";
	} catch {
		return e;
	}
	return e;
}
//#endregion
//#region node_modules/@atcute/client/dist/fetch-handler.js
var $y = (e) => typeof e == "object" ? e.handle.bind(e) : e, eb = ({ service: e, fetch: t = fetch }) => async (n, r) => await t(new URL(n, e), r), tb = (e, t) => {
	let n;
	for (let r in t) {
		let i = t[r];
		i !== null && (n ??= new Headers(e), n.has(r) || n.set(r, i));
	}
	return n ?? e;
}, nb = class extends Error {
	constructor(e, { kind: t = `HTTP error ${e}`, description: n = "Unspecified error description", headers: r, cause: i } = {}) {
		super(`${t} > ${n}`, { cause: i }), this.name = "XRPCError", this.status = e, this.kind = t, this.description = n, this.headers = r || {};
	}
}, rb = class {
	constructor({ handler: e, proxy: t }) {
		this.handle = $y(e), this.proxy = t;
	}
	get(e, t) {
		return this.request({
			type: "get",
			nsid: e,
			...t
		});
	}
	call(e, t) {
		return this.request({
			type: "post",
			nsid: e,
			...t
		});
	}
	async request(e) {
		let t = e.data, n = `/xrpc/${e.nsid}` + ab(e.params), r = ob(t), i = await this.handle(n, {
			method: e.type,
			signal: e.signal,
			body: r ? JSON.stringify(t) : t,
			headers: tb(e.headers, {
				"content-type": r ? "application/json" : null,
				"atproto-proxy": ib(this.proxy)
			})
		}), a = i.status, o = Object.fromEntries(i.headers), s = o["content-type"], c, l;
		s && (s.startsWith("application/json") ? c = i.json() : s.startsWith("text/") && (c = i.text()));
		try {
			l = await (c || i.arrayBuffer().then((e) => new Uint8Array(e)));
		} catch (e) {
			throw new nb(2, {
				cause: e,
				kind: "InvalidResponse",
				description: "Failed to parse response body",
				headers: o
			});
		}
		if (a === 200) return {
			data: l,
			headers: o
		};
		throw sb(l) ? new nb(a, {
			kind: l.error,
			description: l.message,
			headers: o
		}) : new nb(a, { headers: o });
	}
}, ib = (e) => e ? `${e.service}#${e.type}` : null, ab = (e) => {
	let t;
	for (let n in e) {
		let r = e[n];
		if (r !== void 0) if (t ??= new URLSearchParams(), Array.isArray(r)) for (let e = 0, i = r.length; e < i; e++) {
			let i = r[e];
			t.append(n, "" + i);
		}
		else t.set(n, "" + r);
	}
	return t ? "?" + t.toString() : "";
}, ob = (e) => {
	if (typeof e != "object" || !e) return !1;
	if ("toJSON" in e) return !0;
	let t = Object.getPrototypeOf(e);
	return t === null || t === Object.prototype;
}, sb = (e) => {
	if (typeof e != "object" || !e) return !1;
	let t = typeof e.error, n = typeof e.message;
	return (t === "undefined" || t === "string") && (n === "undefined" || n === "string");
}, cb = (e, t) => ({
	text: e,
	features: e.length > 0 ? t : void 0
}), lb = (e, t) => {
	if (t === void 0 || t.length === 0) return [cb(e, void 0)];
	let n = [], r = e.length, i = 0, a = 0, o = (t, n) => {
		let i = t;
		if (e.charCodeAt(i) < 128) for (i += 1, a += 1; a + 8 <= n && i + 8 <= r;) {
			let t = e.charCodeAt(i), n = e.charCodeAt(i + 1), r = e.charCodeAt(i + 2), o = e.charCodeAt(i + 3), s = e.charCodeAt(i + 4), c = e.charCodeAt(i + 5), l = e.charCodeAt(i + 6), u = e.charCodeAt(i + 7);
			if ((t | n | r | o | s | c | l | u) < 128) {
				i += 8, a += 8;
				continue;
			}
			break;
		}
		for (; a < n && i < r;) {
			let t = e.charCodeAt(i);
			t < 128 ? (i += 1, a += 1) : t < 2048 ? (i += 1, a += 2) : t < 55296 || t > 56319 ? (i += 1, a += 3) : (i += 2, a += 4);
		}
		return i;
	};
	for (let r = 0, s = t.length; r < s; r++) {
		let s = t[r], { byteStart: c, byteEnd: l } = s.index, u = s.features;
		if (!(c > l || u.length === 0)) {
			if (a < c) {
				let t = o(i, c);
				t > i && n.push(cb(e.slice(i, t), void 0)), i = t;
			}
			{
				let t = o(i, l);
				t > i && n.push(cb(e.slice(i, t), u)), i = t;
			}
		}
	}
	return i < r && n.push(cb(e.slice(i), void 0)), n;
}, ub = /[&"<]/g, db = /[&<]/g;
function fb(e, t) {
	let n = String(e ?? ""), r = t ? ub : db;
	r.lastIndex = 0;
	let i = "", a = 0;
	for (; r.test(n);) {
		let e = r.lastIndex - 1, t = n[e];
		i += n.substring(a, e) + (t === "&" ? "&amp;" : t === "\"" ? "&quot;" : "&lt;"), a = e + 1;
	}
	return i + n.substring(a);
}
function pb(e, t, n = !1) {
	return e === "hidden" && t !== "until-found" && (n = !0), t == null || !t && n ? "" : ` ${e}${n ? "" : `="${fb(t, !0)}"`}`;
}
function mb(e, t, n) {
	var r = e == null ? "" : "" + e;
	return t && (r = r ? r + " " + t : t), r === "" ? null : r;
}
function hb(e, t) {
	return e == null ? null : String(e);
}
function gb(e, t = {}) {
	let n = "";
	return e({ push(e) {
		n += e;
	} }, t.props ?? {}), { body: n };
}
function _b(e, t, n) {
	var r = mb(e, t);
	return r ? ` class="${fb(r, !0)}"` : "";
}
function vb(e, t) {
	var n = hb(e);
	return n ? ` style="${fb(n, !0)}"` : "";
}
function yb(e) {
	return e;
}
var bb = "https://public.api.bsky.app", xb = "!no-unauthenticated";
function Sb(e, t) {
	let { children: n } = t;
	e.push("<div class=\"bluesky-embed s-3olstj\">"), n(e), e.push("</div>");
}
var Cb = (e) => `https://bsky.app/profile/${e}`, wb = (e, t) => `https://bsky.app/profile/${e}/post/${t}`, Tb = (e) => `https://bsky.app/hashtag/${e}`, Eb = (e, t) => `https://bsky.app/profile/${e}/feed/${t}`, Db = (e, t) => `https://bsky.app/starter-pack/${e}/${t}`, Ob = (e, t) => `https://ogcard.cdn.bsky.app/start/${e}/${t}`, kb = 0, Ab = 0, jb = new Intl.DateTimeFormat("en-US", {
	dateStyle: "long",
	timeStyle: "short"
}), Mb = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }), Nb = new Intl.DateTimeFormat("en-US", {
	month: "short",
	day: "numeric"
}), Pb = (e) => {
	let t = new Date(e), n = t.getTime();
	if (isNaN(n)) return "N/A";
	let r = Date.now();
	if (r > Ab) {
		let e = new Date(r);
		e.setMonth(0, 1), e.setHours(0, 0, 0), kb = e.getTime(), e.setFullYear(e.getFullYear() + 1, 0, 0), e.setHours(23, 59, 59, 999), Ab = e.getTime();
	}
	return n >= kb && n <= Ab ? Nb.format(t) : Mb.format(t);
}, Fb = (e) => {
	let t = new Date(e);
	return isNaN(t.getTime()) ? "N/A" : jb.format(t);
}, Ib = 0, Lb = 1, Rb = {
	"!hide": {
		name: "Hidden by moderators",
		flags: Lb
	},
	"!warn": {
		name: "Content warning",
		flags: Lb
	},
	porn: {
		name: "Adult content",
		flags: Ib
	},
	sexual: {
		name: "Sexually suggestive",
		flags: Ib
	},
	"graphic-media": {
		name: "Graphic media",
		flags: Ib
	},
	nudity: {
		name: "Nudity",
		flags: Ib
	}
}, zb = (e, t) => {
	if (e?.length) for (let n = 0, r = e.length; n < r; n++) {
		let r = e[n], i = r.val;
		if (!(i in Rb)) continue;
		let a = Rb[i];
		if (!(a.flags & Lb && r.src === t)) return a;
	}
}, Bb = new Intl.NumberFormat("en-US"), Vb = new Intl.NumberFormat("en-US", { notation: "compact" }), Hb = (e) => e < 1e3 ? "" + e : e < 1e5 ? Bb.format(e) : Vb.format(e), Ub = (e) => Bb.format(e), Wb = /^at:\/\/((?:did:[a-zA-Z0-9._:%-]+)|(?:[a-zA-Z0-9][a-zA-Z0-9-.]*))(?:\/([a-zA-Z0-9.-]+)(?:\/([a-zA-Z0-9_~.:-]{1,512}))?)?\/?(?:\?([^#\s]*))?(?:#([^\s]*))?$/, Gb = (e) => {
	let t = Wb.exec(e);
	if (!t) throw new Kb(`invalid at-uri: ${e}`);
	return {
		repo: t[1],
		collection: t[2] ?? "",
		rkey: t[3] ?? "",
		query: t[4] ?? "",
		fragment: t[5] ?? ""
	};
}, Kb = class extends Error {};
function qb(e, t) {
	{
		let { warning: n, children: r } = t;
		n ? (e.push(`<details class="content-hider s-q6x07m"><summary class="gate s-q6x07m"><svg class="icon s-q6x07m" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M11 11h1v5m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path><path fill="currentColor" stroke="currentColor" stroke-width=".5" d="M11.5 7.25h-.25v1.5h1.5v-1.5H11.5Z"></path></svg> <span class="label s-q6x07m">${fb(n.name)}</span> <span class="action s-q6x07m"></span></summary> `), r(e), e.push("</details>")) : r(e);
	}
}
var Jb = (e) => {
	let t;
	if ("parse" in URL) t = URL.parse(e);
	else try {
		t = new URL(e);
	} catch {}
	return t && (t.protocol === "https:" || t.protocol === "http:") ? t : null;
};
function Yb(e, t) {
	{
		let { embed: n } = t, r = n.external, i = Jb(r.uri)?.host;
		e.push(`<a target="_blank"${pb("href", i && r.uri)} rel="noopener noreferrer nofollow" class="external-embed s-rtbqd8">`), r.thumb && e.push(`<img loading="lazy"${pb("src", r.thumb)} alt="" class="thumbnail s-rtbqd8"/>`), e.push(` <div class="meta s-rtbqd8"><p class="title s-rtbqd8">${fb(r.title)}</p> <p class="description s-rtbqd8">${fb(r.description)}</p> `), i && e.push(`<div class="domain s-rtbqd8"><svg class="icon" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m4.172 8.07 3.94 2.957.977-1.941 3.887-.978 1.15-4.6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-6.078 4.865.973-1.946-2.869-1.928-1.89-.12-1.08 1.075 1.947 2.919h2.919Z"></path></svg> <span class="domain-name">${fb(i)}</span></div>`), e.push("</div></a>");
	}
}
function Xb(e, t) {
	{
		let { embed: n } = t, r = n.creator, i = Eb(r.did, Gb(n.uri).rkey);
		e.push(`<a target="_blank"${pb("href", i)} class="feed-embed s-156tlwp"><div class="main s-156tlwp"><div class="avatar-wrapper s-156tlwp">`), n.avatar ? e.push(`<img loading="lazy"${pb("src", n.avatar)} alt="" class="avatar s-156tlwp"/>`) : e.push("<svg viewBox=\"0 0 32 32\" class=\"avatar s-156tlwp\"><path fill=\"#0070FF\" d=\"M0 0h32v32H0z\"></path><path fill=\"#fff\" d=\"M22.153 22.354a9.328 9.328 0 0 0 3.837-.491 3.076 3.076 0 0 0-4.802-2.79m.965 3.281a6.128 6.128 0 0 0-.965-3.28Zm-11.342-3.28a3.077 3.077 0 0 0-4.801 2.79 9.21 9.21 0 0 0 3.835.49m.966-3.28a6.127 6.127 0 0 0-.966 3.28Zm8.265-8.997a3.076 3.076 0 1 1-6.153 0 3.076 3.076 0 0 1 6.153 0Zm6.154 3.077a2.307 2.307 0 1 1-4.615 0 2.307 2.307 0 0 1 4.615 0Zm-13.847 0a2.307 2.307 0 1 1-4.614 0 2.307 2.307 0 0 1 4.614 0Z\"></path><path fill=\"#fff\" d=\"M22 22c0 3.314-2.686 3.5-6 3.5s-6-.186-6-3.5a6 6 0 0 1 12 0Z\"></path></svg>"), e.push(`</div> <div class="info"><p class="name s-156tlwp">${fb(n.displayName)}</p> <p class="creator s-156tlwp">Feed by @${fb(r.handle)}</p></div></div> <p class="description s-156tlwp">${fb(n.description)}</p></a>`);
	}
}
var Zb = {
	width: 16,
	height: 9
};
function Qb(e, t) {
	{
		let { embed: n, borderless: r, standalone: i, blur: a } = t, o = n.images, s = o.length;
		function c(e, t) {
			let n = o[t];
			e.push(`<img loading="lazy"${pb("src", n.thumb)}${pb("alt", n.alt)}${_b("image" + (a ? " is-blurred" : ""), "s-t3k6fc")}/>`);
		}
		if (e.push(`<div${_b("image-embed" + (r ? "" : " is-bordered") + (i && s === 1 ? " is-aligned" : ""), "s-t3k6fc")}>`), s === 4) e.push("<div class=\"grid s-t3k6fc\"><div class=\"col s-t3k6fc\"><div class=\"item wide tl s-t3k6fc\">"), c(e, 0), e.push("</div> <div class=\"item wide bl s-t3k6fc\">"), c(e, 2), e.push("</div></div> <div class=\"col s-t3k6fc\"><div class=\"item wide tr s-t3k6fc\">"), c(e, 1), e.push("</div> <div class=\"item wide br s-t3k6fc\">"), c(e, 3), e.push("</div></div></div>");
		else if (s === 3) e.push("<div class=\"grid s-t3k6fc\"><div class=\"col square s-t3k6fc\"><div class=\"item tl bl s-t3k6fc\">"), c(e, 0), e.push("</div></div> <div class=\"col square s-t3k6fc\"><div class=\"item tr s-t3k6fc\">"), c(e, 1), e.push("</div> <div class=\"item br s-t3k6fc\">"), c(e, 2), e.push("</div></div></div>");
		else if (s === 2) e.push("<div class=\"grid s-t3k6fc\"><div class=\"col s-t3k6fc\"><div class=\"item square tl bl s-t3k6fc\">"), c(e, 0), e.push("</div></div> <div class=\"col s-t3k6fc\"><div class=\"item square tr br s-t3k6fc\">"), c(e, 1), e.push("</div></div></div>");
		else if (s === 1) {
			let t = i && (o[0].aspectRatio || Zb);
			e.push(`<div${_b("single-item tl tr bl br" + (t ? " is-standalone" : ""), "s-t3k6fc")}${vb(t ? `aspect-ratio: ${t.width}/${t.height}` : "")}>`), c(e, 0), e.push(" "), t && e.push("<div class=\"placeholder s-t3k6fc\"></div>"), e.push("</div>");
		}
		e.push("</div>");
	}
}
var $b = (e) => {
	switch (e) {
		case "app.bsky.graph.defs#curatelist": return "User list";
		case "app.bsky.graph.defs#modlist": return "Moderation list";
	}
	return "Unknown list";
};
function ex(e, t) {
	{
		let { embed: n } = t, r = n.creator, i = Eb(r.did, Gb(n.uri).rkey);
		e.push(`<a target="_blank"${pb("href", i)} class="list-embed s-6uize5"><div class="main s-6uize5"><div class="avatar-wrapper s-6uize5">`), n.avatar ? e.push(`<img loading="lazy"${pb("src", n.avatar)} alt="" class="avatar s-6uize5"/>`) : e.push("<svg viewBox=\"0 0 32 32\" class=\"avatar s-6uize5\"><path fill=\"#0070FF\" d=\"M0 0h32v32H0z\"></path><path fill=\"#fff\" d=\"M22.153 22.354a9.328 9.328 0 0 0 3.837-.491 3.076 3.076 0 0 0-4.802-2.79m.965 3.281a6.128 6.128 0 0 0-.965-3.28Zm-11.342-3.28a3.077 3.077 0 0 0-4.801 2.79 9.21 9.21 0 0 0 3.835.49m.966-3.28a6.127 6.127 0 0 0-.966 3.28Zm8.265-8.997a3.076 3.076 0 1 1-6.153 0 3.076 3.076 0 0 1 6.153 0Zm6.154 3.077a2.307 2.307 0 1 1-4.615 0 2.307 2.307 0 0 1 4.615 0Zm-13.847 0a2.307 2.307 0 1 1-4.614 0 2.307 2.307 0 0 1 4.614 0Z\"></path><path fill=\"#fff\" d=\"M22 22c0 3.314-2.686 3.5-6 3.5s-6-.186-6-3.5a6 6 0 0 1 12 0Z\"></path></svg>"), e.push(`</div> <div class="info"><p class="name s-6uize5">${fb(n.name)}</p> <p class="creator s-6uize5">${fb($b(n.purpose))} by @${fb(r.handle)}</p></div></div> <p class="description s-6uize5">${fb(n.description)}</p></a>`);
	}
}
function tx(e, t) {
	{
		let { post: n, embed: r, borderless: i, standalone: a, blur: o } = t, s = a && r.aspectRatio, c = n && wb(n.author.did, Gb(n.uri).rkey);
		function l(e) {
			e.push(`<img loading="lazy"${pb("src", r.thumbnail)} alt=""${_b("thumbnail" + (o ? " is-blurred" : ""), "s-1azk58e")}/> `), s && e.push("<div class=\"placeholder s-1azk58e\"></div>"), e.push(" <div class=\"play s-1azk58e\"><svg class=\"icon s-1azk58e\" fill=\"none\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M22 12 5 2v20l17-10Z\"></path></svg></div>");
		}
		a ? (e.push(`<a target="_blank"${pb("href", c)}${_b("video-embed" + (i ? "" : " is-bordered") + (a ? " is-standalone" : ""), "s-1azk58e")}><div class="constrainer s-1azk58e"${vb(s ? `aspect-ratio: ${s.width}/${s.height}` : "")}>`), l(e), e.push("</div></a>")) : (e.push(`<div${_b("video-embed" + (i ? "" : " is-bordered"), "s-1azk58e")}${vb(s ? `aspect-ratio: ${s.width}/${s.height}` : "")}>`), l(e), e.push("</div>"));
	}
}
var nx = (e) => {
	if (e) {
		if (e.$type === "app.bsky.embed.images#view") return e;
		if (e.$type === "app.bsky.embed.recordWithMedia#view") return nx(e.media);
	}
}, rx = (e) => {
	if (e) {
		if (e.$type === "app.bsky.embed.video#view") return e;
		if (e.$type === "app.bsky.embed.recordWithMedia#view") return rx(e.media);
	}
};
function ix(e, t) {
	{
		let { embed: n, large: r = !1 } = t, i = n.value, a = i.text.trim(), o = n.author, s = o.displayName?.trim(), c = n.embeds?.[0], l = nx(c), u = rx(c), d = wb(o.did, Gb(n.uri).rkey), f = !!zb(n.labels, o.did);
		e.push(`<a target="_blank"${pb("href", d)} class="quote-embed s-za6fip"><div class="meta s-za6fip"><div class="avatar-wrapper s-za6fip">`), o.avatar && e.push(`<img loading="lazy"${pb("src", o.avatar)} alt="" class="avatar s-za6fip"/>`), e.push("</div> <span class=\"name-wrapper s-za6fip\">"), s && e.push(`<bdi class="display-name-wrapper s-za6fip"><span class="display-name s-za6fip">${fb(s)}</span></bdi>`), e.push(` <span class="handle s-za6fip">@${fb(o.handle)}</span></span> <span aria-hidden="true" class="dot s-za6fip">·</span> <time${pb("datetime", i.createdAt)} class="date s-za6fip">${fb(Pb(i.createdAt))}</time></div> `), a ? (e.push("<div class=\"body s-za6fip\">"), r || (l ? (e.push("<div class=\"aside s-za6fip\">"), Qb(e, {
			embed: l,
			blur: f
		}), e.push("</div>")) : u && (e.push("<div class=\"aside s-za6fip\">"), tx(e, {
			embed: u,
			blur: f
		}), e.push("</div>"))), e.push(` <p class="text s-za6fip">${fb(a)}</p></div>`)) : e.push("<div class=\"divide s-za6fip\"></div>"), e.push(" "), (r || !a) && (l ? Qb(e, {
			embed: l,
			borderless: !0,
			blur: f
		}) : u && tx(e, {
			embed: u,
			borderless: !0,
			blur: f
		})), e.push("</a>");
	}
}
function ax(e, t) {
	{
		let { embed: n, large: r = !1 } = t, i = n.record, a = n.creator, o = a.did, s = Gb(n.uri).rkey, c = Db(o, s);
		if (e.push(`<a target="_blank"${pb("href", c)} class="starterpack-embed s-15v965v">`), r) {
			let t = Ob(o, s);
			e.push(`<img loading="lazy"${pb("src", t)} alt="" class="banner s-15v965v"/>`);
		}
		e.push(` <div class="meta s-15v965v"><div class="main s-15v965v"><svg fill="none" viewBox="0 0 24 24" class="avatar s-15v965v"><defs><linearGradient id="a" x1="0" x2="100%" y1="0" y2="0" gradientTransform="rotate(45)"><stop offset="0" stop-color="#0A7AFF"></stop><stop offset="1" stop-color="#59B9FF"></stop></linearGradient></defs><path fill="url(#a)" fill-rule="evenodd" d="M11.26 5.227 5.02 6.899c-.734.197-1.17.95-.973 1.685l1.672 6.24c.197.734.951 1.17 1.685.973l6.24-1.672a1.376 1.376 0 0 0 .973-1.685L12.945 6.2a1.375 1.375 0 0 0-1.685-.973Zm-6.566.459a2.632 2.632 0 0 0-1.86 3.223l1.672 6.24a2.632 2.632 0 0 0 3.223 1.861l6.24-1.672a2.631 2.631 0 0 0 1.861-3.223l-1.672-6.24a2.632 2.632 0 0 0-3.223-1.861l-6.24 1.672Z" clip-rule="evenodd"></path><path fill="url(#a)" fill-rule="evenodd" d="M15.138 18.411a4.606 4.606 0 1 0 0-9.211 4.606 4.606 0 0 0 0 9.211Zm0 1.257a5.862 5.862 0 1 0 0-11.724 5.862 5.862 0 0 0 0 11.724Z" clip-rule="evenodd"></path></svg> <div class="info"><p class="name s-15v965v">${fb(i.name)}</p> <p class="creator s-15v965v">Starter pack by @${fb(a.handle)}</p></div></div> <p class="description s-15v965v">${fb(i.description)}</p></div></a>`);
	}
}
function ox(e, t) {
	e.push(`<div class="message s-azdpbr">${fb(t)}</div>`);
}
var sx = (e) => {
	switch (e) {
		case "app.bsky.feed.post": return "post";
		case "app.bsky.feed.generator": return "feed";
		case "app.bsky.graph.list": return "list";
		case "app.bsky.graph.starterpack": return "starter pack";
		case "app.bsky.labeler.service": return "labeler";
	}
	return null;
};
function cx(e, t) {
	{
		let { post: n, embed: r, large: i = !1 } = t;
		function a(e, t) {
			qb(e, {
				warning: n && zb(n.labels, n.author.did),
				children: (e) => {
					t.$type === "app.bsky.embed.external#view" ? Yb(e, { embed: t }) : t.$type === "app.bsky.embed.images#view" ? Qb(e, {
						embed: t,
						standalone: !0
					}) : t.$type === "app.bsky.embed.video#view" ? tx(e, {
						post: n,
						embed: t,
						standalone: !0
					}) : ox(e, "Unsupported media embed");
				}
			});
		}
		function o(e, t) {
			let n = t.record;
			if (n.$type === "app.bsky.embed.record#viewRecord") ix(e, {
				embed: n,
				large: i
			});
			else if (n.$type === "app.bsky.feed.defs#generatorView") Xb(e, { embed: n });
			else if (n.$type === "app.bsky.graph.defs#listView") ex(e, { embed: n });
			else if (n.$type === "app.bsky.graph.defs#starterPackViewBasic") ax(e, {
				embed: n,
				large: i
			});
			else {
				let t = sx(Gb(n.uri).collection);
				ox(e, t && (n.$type === "app.bsky.embed.record#viewNotFound" || n.$type === "app.bsky.embed.record#viewBlocked" || n.$type === "app.bsky.embed.record#viewDetached") ? `This ${t} is unavailable` : "Unsupported record embed");
			}
		}
		e.push("<div class=\"embeds s-azdpbr\">"), r.$type === "app.bsky.embed.recordWithMedia#view" ? (a(e, r.media), e.push(" "), o(e, r.record)) : r.$type === "app.bsky.embed.record#view" ? o(e, r) : a(e, r), e.push("</div>");
	}
}
var lx = (e) => e?.find((e) => e.$type === "app.bsky.richtext.facet#link" || e.$type === "app.bsky.richtext.facet#mention" || e.$type === "app.bsky.richtext.facet#tag");
function ux(e, t) {
	{
		let { text: n, facets: r, large: i } = t;
		e.push(`<p${_b("rich-text" + (i ? " is-large" : " is-small"), "s-1lecfnd")}>`);
		let a = yb(lb(n, r));
		for (let t = 0, n = a.length; t < n; t++) {
			let n = a[t], r = lx(n.features);
			r ? r.$type === "app.bsky.richtext.facet#link" ? e.push(`<a target="_blank"${pb("href", r.uri)} rel="noopener nofollow" class="link s-1lecfnd">${fb(n.text)}</a>`) : r.$type === "app.bsky.richtext.facet#mention" ? e.push(`<a target="_blank"${pb("href", Cb(r.did))} class="mention s-1lecfnd">${fb(n.text)}</a>`) : r.$type === "app.bsky.richtext.facet#tag" && e.push(`<a target="_blank"${pb("href", Tb(r.tag))} class="hashtag s-1lecfnd">${fb(n.text)}</a>`) : e.push(`${fb(n.text)}`);
		}
		e.push("</p>");
	}
}
function dx(e, t) {
	{
		let { post: n, parent: r, prev: i = !1 } = t, a = n.author, o = Cb(a.did), s = a.displayName?.trim(), c = n.record, l = wb(a.did, Gb(n.uri).rkey), u = n.replyCount || 0, d = n.likeCount || 0, f = (n.repostCount || 0) + (n.quoteCount || 0), p = !!zb(a.labels, a.did);
		if (e.push(`<div class="highlighted-post s-hik11q"><div class="meta s-hik11q"><a${pb("href", o)} target="_blank" class="avatar-wrapper s-hik11q">`), a.avatar && e.push(`<img loading="lazy"${pb("src", a.avatar)} alt=""${_b("avatar" + (p ? " is-blurred" : ""), "s-hik11q")}/>`), e.push(`</a> <a${pb("href", o)} target="_blank" class="name-wrapper s-hik11q">`), s && e.push(`<bdi class="display-name-wrapper s-hik11q"><span class="display-name s-hik11q">${fb(s)}</span></bdi>`), e.push(` <span class="handle s-hik11q">@${fb(a.handle)}</span></a> `), i || e.push("<svg class=\"logo s-hik11q\" fill=\"none\" viewBox=\"0 0 320 286\"><path fill=\"#0A7AFF\" d=\"M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z\"></path></svg>"), e.push("</div> "), !i && c.reply) {
			if (e.push("<p class=\"context s-hik11q\">"), r) {
				let t = r.author;
				e.push(`Replying to <a target="_blank"${pb("href", Cb(t.did))} dir="auto" class="s-hik11q">${fb(t.displayName?.trim() || `@${t.handle}`)}</a>`);
			} else e.push("Replying to an unknown post");
			e.push("</p>");
		}
		e.push(" "), ux(e, {
			text: c.text,
			facets: c.facets,
			large: !0
		}), e.push(" "), n.embed && cx(e, {
			post: n,
			embed: n.embed,
			large: !0
		}), e.push(` <time${pb("datetime", c.createdAt)} class="date s-hik11q">${fb(Fb(c.createdAt))}</time> <div class="stats s-hik11q"><span class="stat s-hik11q"${pb("title", d === 1 ? `${Ub(d)} like` : `${Ub(d)} likes`)}><svg class="icon" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M12 5.768c6.162-6.25 16.725 5.358 0 14.732C-4.725 11.126 5.838-.482 12 5.768Z"></path></svg> <span>${fb(Hb(d))}</span></span> <span class="stat s-hik11q"${pb("title", f === 1 ? `${Ub(f)} repost` : `${Ub(f)} reposts`)}><svg class="icon" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="m17 3 3 3-3 3M7 21l-3-3 3-3m-2 3h15v-5M4 11V6h15"></path></svg> <span>${fb(Hb(f))}</span></span> <div class="gap s-hik11q"></div> <a${pb("href", l)} target="_blank" class="permalink s-hik11q"><span>${fb(u ? u === 1 ? `Read ${Hb(u)} reply on Bluesky` : `Read ${Hb(u)} replies on Bluesky` : "View on Bluesky")}</span></a></div></div>`);
	}
}
function fx(e, t) {
	{
		let { post: n, parent: r, prev: i } = t, a = n.author, o = Cb(a.did), s = a.displayName?.trim(), c = n.record, l = wb(a.did, Gb(n.uri).rkey), u = !!zb(a.labels, a.did);
		if (e.push("<div class=\"post s-12mzi62\">"), i || e.push("<svg class=\"logo s-12mzi62\" fill=\"none\" viewBox=\"0 0 320 286\"><path fill=\"#0A7AFF\" d=\"M69.364 19.146c36.687 27.806 76.147 84.186 90.636 114.439 14.489-30.253 53.948-86.633 90.636-114.439C277.107-.917 320-16.44 320 32.957c0 9.865-5.603 82.875-8.889 94.729-11.423 41.208-53.045 51.719-90.071 45.357 64.719 11.12 81.182 47.953 45.627 84.785-80 82.874-106.667-44.333-106.667-44.333s-26.667 127.207-106.667 44.333c-35.555-36.832-19.092-73.665 45.627-84.785-37.026 6.362-78.648-4.149-90.071-45.357C5.603 115.832 0 42.822 0 32.957 0-16.44 42.893-.917 69.364 19.147Z\"></path></svg>"), e.push(` <div class="aside s-12mzi62"><a target="_blank"${pb("href", o)} class="avatar-wrapper s-12mzi62">`), a.avatar && e.push(`<img loading="lazy"${pb("src", a.avatar)} alt=""${_b("avatar" + (u ? " is-blurred" : ""), "s-12mzi62")}/>`), e.push(`</a> <div class="line s-12mzi62"></div></div> <div class="main s-12mzi62"><div class="meta s-12mzi62"><a${pb("href", o)} target="_blank" class="name-wrapper s-12mzi62">`), s && e.push(`<bdi class="display-name-wrapper s-12mzi62"><span class="display-name s-12mzi62">${fb(s)}</span></bdi>`), e.push(` <span class="handle s-12mzi62">@${fb(a.handle)}</span></a> <span aria-hidden="true" class="dot s-12mzi62">·</span> <a target="_blank"${pb("href", l)}${pb("title", Fb(c.createdAt))} class="date s-12mzi62"><time${pb("datetime", c.createdAt)}>${fb(Pb(c.createdAt))}</time></a></div> `), !i && c.reply) {
			if (e.push("<p class=\"context s-12mzi62\">"), r) {
				let t = r.author;
				e.push(`Replying to <a target="_blank"${pb("href", Cb(t.did))} dir="auto" class="s-12mzi62">${fb(t.displayName?.trim() || `@${t.handle}`)}</a>`);
			} else e.push("Replying to an unknown post");
			e.push("</p>");
		}
		e.push(" "), ux(e, {
			text: c.text,
			facets: c.facets
		}), e.push(" "), n.embed && cx(e, {
			post: n,
			embed: n.embed
		}), e.push("</div></div>");
	}
}
function px(e, t) {
	Sb(e, { children: (e) => {
		e.push(`<div class="message s-1q9cbx0">${fb(t)}</div>`);
	} });
}
var mx = (e, t, n) => {
	let r = [], i = 0, a = t ? 1 : 2, o = e;
	for (; o && o.$type !== "app.bsky.feed.defs#notFoundPost" && o.$type !== "app.bsky.feed.defs#blockedPost";) {
		let e = o.post;
		if (i !== 0 && (r[i - 1].parent = e), ++i > a) break;
		let t = e.author;
		if (!n && t.labels?.some((e) => e.val === "!no-unauthenticated")) break;
		r.push({
			post: e,
			parent: null
		}), o = o.parent;
	}
	return r.reverse();
};
function hx(e, t) {
	{
		let { thread: n, contextless: r, allowUnauthenticated: i } = t, a = !i && n !== null && n.$type === "app.bsky.feed.defs#threadViewPost" && n.post.author.labels?.some((e) => e.val === xb);
		if (n === null) px(e, "The post can't be found, it may have been deleted.");
		else if (a) px(e, "The author has requested for their posts to not be displayed on external sites.");
		else {
			let t = mx(n, r, i);
			Sb(e, { children: (e) => {
				let n = yb(t);
				for (let r = 0, i = n.length; r < i; r++) {
					let { post: i, parent: a } = n[r], o = r !== 0;
					r === t.length - 1 ? dx(e, {
						post: i,
						parent: a,
						prev: o
					}) : fx(e, {
						post: i,
						parent: a,
						prev: o
					});
				}
			} });
		}
	}
}
var gx = async (e) => {
	let t = new rb({ handler: eb({ service: e.serviceUri ?? bb }) }), n = e.contextless ?? !1, { data: r } = await t.get("app.bsky.feed.getPostThread", {
		signal: e.signal,
		params: {
			uri: e.uri,
			parentHeight: n ? 1 : 2,
			depth: 0
		}
	}).catch((e) => e instanceof nb && e.kind === "NotFound" ? { data: null } : Promise.reject(e));
	return {
		thread: r?.thread.$type === "app.bsky.feed.defs#threadViewPost" ? r.thread : null,
		contextless: n,
		allowUnauthenticated: e.allowUnauthenticated ?? !1
	};
}, _x = (e) => gb(hx, { props: e }).body, vx = /* @__PURE__ */ R("<div><!></div>");
function yx(e, t) {
	E(t, !0);
	let n = () => O(o, "$isSelected", r), [r, i] = Et(), a = sh(), o = Lg(a, t.nodeKey), s;
	Jn(() => Cp(a.registerCommand(Hs, (e) => {
		if (n()) {
			let n = K();
			if (Sl(n)) {
				let n = ud(t.nodeKey);
				J_(n) && n.setFormat(e);
			} else if (G(n)) {
				let t = n.getNodes();
				for (let n of t) J_(n) ? n.setFormat(e) : rm(n).setFormat(e);
			}
			return !0;
		}
		return !1;
	}, 1), a.registerCommand(ls, (e) => e.target === s && (e.preventDefault(), e.shiftKey || Ig(a), k(o, !n()), !0), 1)));
	var c = vx();
	_i(N(c), () => t.children), T(c), fa(c, (e) => s = e, () => s), F((e) => {
		qi(c, 1, e), Yi(c, `text-align: ${t.format ? t.format : ""};`);
	}, [() => Vi([t.className.base, n() ? t.className.focus : null].filter(Boolean).join(" "))]), z(e, c), D(), i();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/bluesky/BlueskyPostComponent.svelte
var bx = /* @__PURE__ */ R("<bluesky-post></bluesky-post>", 2), xx = /* @__PURE__ */ R("<p>...rendering</p>"), Sx = /* @__PURE__ */ R("<p>...loading</p>"), Cx = /* @__PURE__ */ R("<div style=\"display: inline-block; width: 550px\"><!></div>");
function wx(e, t) {
	E(t, !0);
	let n = /* @__PURE__ */ Gt(() => gx({ uri: `at://${t.profile}/app.bsky.feed.post/${t.postKey}` }));
	yx(e, {
		get className() {
			return t.className;
		},
		get format() {
			return t.format;
		},
		get nodeKey() {
			return t.nodeKey;
		},
		children: (e, t) => {
			var r = Cx();
			wi(N(r), () => I(n), (e) => {
				z(e, Sx());
			}, (e, t) => {
				let n = /* @__PURE__ */ Gt(() => _x(I(t)));
				var r = ci();
				wi(Rn(r), () => I(n), (e) => {
					z(e, xx());
				}, (e, n) => {
					var r = bx();
					F(() => ia(r, "src", I(t).thread?.post.uri)), Ii(r, () => I(n), !0), T(r), z(e, r);
				}), z(e, r);
			}), T(r), z(e, r);
		},
		$$slots: { default: !0 }
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/bluesky/BlueskyNode.js
function Tx(e) {
	let t = e.getAttribute("data-lexical-profile-id"), n = e.getAttribute("data-lexical-post-key");
	return t && n ? { node: Dx(t, n) } : null;
}
var Ex = class e extends q_ {
	__profile;
	__postKey;
	static getType() {
		return "bluesky";
	}
	static clone(t) {
		return new e(t.__profile, t.__postKey, t.__format, t.__key);
	}
	static importJSON(e) {
		return Dx(e.profile, e.postKey).updateFromJSON(e);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			profile: this.__profile,
			postKey: this.__postKey
		};
	}
	static importDOM() {
		return { div: (e) => e.hasAttribute("data-lexical-profile-id") ? {
			conversion: Tx,
			priority: 2
		} : null };
	}
	exportDOM() {
		let e = document.createElement("div");
		e.setAttribute("data-lexical-profile-id", this.__profile), e.setAttribute("data-lexical-post-key", this.__postKey);
		let t = document.createTextNode(this.getTextContent());
		return e.append(t), { element: e };
	}
	constructor(e, t, n, r) {
		super(n, r), this.__profile = e, this.__postKey = t;
	}
	getProfile() {
		return this.__profile;
	}
	getPostKey() {
		return this.__postKey;
	}
	getTextContent(e, t) {
		return `https://bsky.app/profile/${this.__profile}/post/${this.__postKey}`;
	}
	decorate(e, t) {
		let n = t.theme.embedBlock || {}, r = {
			base: n.base || "",
			focus: n.focus || ""
		};
		return {
			componentClass: wx,
			updateProps: (e) => {
				e.className = r, e.format = this.__format, e.nodeKey = this.__key, e.profile = this.__profile, e.postKey = this.__postKey;
			}
		};
	}
};
function Dx(e, t) {
	return new Ex(e, t);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/bluesky/BlueskyPlugin.svelte
var Ox = U("INSERT_BLUESKY_COMMAND");
function kx(e, t) {
	E(t, !0);
	let n = sh();
	Jn(() => {
		if (!n.hasNodes([Ex])) throw Error("BlueskyPlugin: BlueskyNode not registered on editor");
		return n.registerCommand(Ox, ({ profile: e, postKey: t }) => (im(Dx(e, t)), !0), 0);
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/ColumnsLayout/LayoutItemNode.js
function Ax() {
	return { node: Fx() };
}
function jx(e) {
	if (!Ix(e) || e.getChildrenSize() !== 1) return !1;
	let t = e.getFirstChild();
	return Pu(t) && t.isEmpty();
}
var Mx = U("INSERT_LAYOUT_COMMAND"), Nx = U(), Px = class e extends xu {
	static getType() {
		return "layout-item";
	}
	static clone(t) {
		return new e(t.__key);
	}
	createDOM(e) {
		let t = document.createElement("div");
		return t.setAttribute("data-lexical-layout-item", "true"), typeof e.theme.layoutItem == "string" && xp(t, e.theme.layoutItem), t;
	}
	updateDOM() {
		return !1;
	}
	collapseAtStart() {
		let e = this.getParentOrThrow();
		return this.is(e.getFirstChild()) && e.getChildren().every(jx) ? (e.remove(), !0) : !1;
	}
	static importDOM() {
		return { div: (e) => e.hasAttribute("data-lexical-layout-item") ? {
			conversion: Ax,
			priority: 2
		} : null };
	}
	static importJSON(e) {
		return Fx().updateFromJSON(e);
	}
	isShadowRoot() {
		return !0;
	}
};
function Fx() {
	return new Px();
}
function Ix(e) {
	return e instanceof Px;
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/twitter/TweetComponent.svelte
var Lx = /* @__PURE__ */ R("<!> <div style=\"display: inline-block; width: 550px\"></div>", 1);
function Rx(e, t) {
	E(t, !0);
	let n = !0, r = null, i = "", a = /* @__PURE__ */ j(!1), o = async () => {
		try {
			await window.twttr.widgets.createTweet(t.tweetID, r), M(a, !1), n = !1, t.onLoad && t.onLoad();
		} catch (e) {
			t.onError && t.onError(String(e));
		}
	};
	Jn(() => {
		if (t.tweetID !== i) {
			if (M(a, !0), n) {
				let e = document.createElement("script");
				e.src = "https://platform.twitter.com/widgets.js", e.async = !0, document.body?.appendChild(e), e.onload = o, t.onError && (e.onerror = (e) => t.onError(String(e)));
			} else o();
			i &&= t.tweetID;
		}
	}), yx(e, {
		get className() {
			return t.className;
		},
		get format() {
			return t.format;
		},
		get nodeKey() {
			return t.nodeKey;
		},
		children: (e, n) => {
			var i = Lx(), o = Rn(i), s = (e) => {
				var n = si();
				F(() => di(n, t.loadingComponent)), z(e, n);
			};
			Ti(o, (e) => {
				I(a) && e(s);
			}), fa(P(o, 2), (e) => r = e, () => r), z(e, i);
		},
		$$slots: { default: !0 }
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/twitter/TweetNode.js
function zx(e) {
	let t = e.getAttribute("data-lexical-tweet-id");
	return t ? { node: Vx(t) } : null;
}
var Bx = class e extends q_ {
	__id;
	static getType() {
		return "tweet";
	}
	static clone(t) {
		return new e(t.__id, t.__format, t.__key);
	}
	static importJSON(e) {
		return Vx(e.id).updateFromJSON(e);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			id: this.getId()
		};
	}
	static importDOM() {
		return { div: (e) => e.hasAttribute("data-lexical-tweet-id") ? {
			conversion: zx,
			priority: 2
		} : null };
	}
	exportDOM() {
		let e = document.createElement("div");
		e.setAttribute("data-lexical-tweet-id", this.__id);
		let t = document.createTextNode(this.getTextContent());
		return e.append(t), { element: e };
	}
	constructor(e, t, n) {
		super(t, n), this.__id = e;
	}
	getId() {
		return this.__id;
	}
	getTextContent(e, t) {
		return `https://x.com/i/web/status/${this.__id}`;
	}
	decorate(e, t) {
		let n = t.theme.embedBlock || {}, r = {
			base: n.base || "",
			focus: n.focus || ""
		};
		return {
			componentClass: Rx,
			updateProps: (e) => {
				e.className = r, e.format = this.__format, e.loadingComponent = "Loading...", e.nodeKey = this.__key, e.tweetID = this.__id;
			}
		};
	}
};
function Vx(e) {
	return new Bx(e);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/twitter/TwitterPlugin.svelte
var Hx = U("INSERT_TWEET_COMMAND");
function Ux(e, t) {
	E(t, !0);
	let n = sh();
	Jn(() => {
		if (!n.hasNodes([Bx])) throw Error("TwitterPlugin: TweetNode not registered on editor");
		return n.registerCommand(Hx, (e) => (im(Vx(e)), !0), 0);
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/youtube/YouTubeComponent.svelte
var Wx = /* @__PURE__ */ R("<iframe width=\"560\" height=\"315\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" title=\"YouTube video\"></iframe>");
function Gx(e, t) {
	yx(e, {
		get className() {
			return t.className;
		},
		get format() {
			return t.format;
		},
		get nodeKey() {
			return t.nodeKey;
		},
		children: (e, n) => {
			var r = Wx();
			r.allowFullscreen = !0, F(() => B(r, "src", `https://www.youtube-nocookie.com/embed/${t.videoID}`)), z(e, r);
		},
		$$slots: { default: !0 }
	});
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/youtube/YouTubeNode.js
function Kx(e) {
	let t = e.getAttribute("data-lexical-youtube");
	return t ? { node: Jx(t) } : null;
}
var qx = class e extends q_ {
	__id;
	static getType() {
		return "youtube";
	}
	static clone(t) {
		return new e(t.__id, t.__format, t.__key);
	}
	static importJSON(e) {
		return Jx(e.videoID).updateFromJSON(e);
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			videoID: this.__id
		};
	}
	constructor(e, t, n) {
		super(t, n), this.__id = e;
	}
	exportDOM() {
		let e = document.createElement("iframe");
		return e.setAttribute("data-lexical-youtube", this.__id), e.setAttribute("width", "560"), e.setAttribute("height", "315"), e.setAttribute("src", `https://www.youtube-nocookie.com/embed/${this.__id}`), e.setAttribute("frameborder", "0"), e.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"), e.setAttribute("allowfullscreen", "true"), e.setAttribute("title", "YouTube video"), { element: e };
	}
	static importDOM() {
		return { iframe: (e) => e.hasAttribute("data-lexical-youtube") ? {
			conversion: Kx,
			priority: 1
		} : null };
	}
	updateDOM() {
		return !1;
	}
	getId() {
		return this.__id;
	}
	getTextContent(e, t) {
		return `https://www.youtube.com/watch?v=${this.__id}`;
	}
	decorate(e, t) {
		let n = t.theme.embedBlock || {}, r = {
			base: n.base || "",
			focus: n.focus || ""
		};
		return {
			componentClass: Gx,
			updateProps: (e) => {
				e.className = r, e.format = this.__format, e.nodeKey = this.__key, e.videoID = this.__id;
			}
		};
	}
};
function Jx(e) {
	return new qx(e);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/youtube/YoutubePlugin.svelte
var Yx = U("INSERT_YOUTUBE_COMMAND");
function Xx(e, t) {
	E(t, !0);
	let n = sh();
	Jn(() => {
		if (!n.hasNodes([qx])) throw Error("YouTubePlugin: YouTubeNode not registered on editor");
		return n.registerCommand(Yx, (e) => (im(Jx(e)), !0), 0);
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/commands/commands.js
function Zx(e) {
	e.dispatchCommand(Ss, "bold");
}
function Qx(e) {
	e.dispatchCommand(Ss, "italic");
}
function $x(e) {
	e.dispatchCommand(Ss, "strikethrough");
}
function eS(e) {
	e.dispatchCommand(Ss, "underline");
}
function tS(e) {
	e.dispatchCommand(Cs, void 0);
}
function nS(e) {
	e.dispatchCommand(ws, void 0);
}
function rS(e, t) {
	return t ? e.dispatchCommand(Ky, null) : e.dispatchCommand(Ky, Qy("https://"));
}
function iS(e, t = void 0) {
	e.focus(() => {
		let t = document.activeElement, n = e.getRootElement();
		n !== null && (t === null || !n.contains(t)) && n.focus({ preventScroll: !0 });
	}, { defaultSelection: t });
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/AutoFocusPlugin.svelte
function aS(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => {
		iS(n);
	}), ma(), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Image/ImageComponent.svelte
var oS = /* @__PURE__ */ new Set(), sS = U("RIGHT_CLICK_IMAGE_COMMAND"), cS = /* @__PURE__ */ R("<img draggable=\"false\"/>"), lS = /* @__PURE__ */ R("<img src=\"/images/image-broken.svg\" alt=\"broken link\" style=\"height: 200px; width: 200px; opacity: 0.2;\" draggable=\"false\"/>"), uS = /* @__PURE__ */ R("<p>...loading image</p>"), dS = /* @__PURE__ */ R("<!> <!> <!> <!> <!>", 1), fS = /* @__PURE__ */ R("<div class=\"image-caption-container\"><!></div>"), pS = /* @__PURE__ */ R("<div><!></div> <!> <!>", 1);
function mS(e, t) {
	E(t, !0);
	let n = () => O(u, "$isSelected", a), r = () => O(p, "$isEditable", a), i = () => O(l, "$buttonRef", a), [a, o] = Et(), s = /* @__PURE__ */ j(null), c = /* @__PURE__ */ j(null), l = xt(null), u = Lg(t.editor, t.nodeKey), d = /* @__PURE__ */ j(!1), f, p = lh(), m = /* @__PURE__ */ Gt(() => n() && Sl(I(s)) && !I(d)), h = /* @__PURE__ */ Gt(() => (n() || I(d)) && r()), g = new Promise((e, n) => {
		if (oS.has(t.src)) e(null);
		else {
			let r = new Image();
			r.src = t.src, r.onload = () => {
				oS.add(t.src), e(null);
			}, r.onerror = () => {
				n(null);
			};
		}
	}), _ = (e) => {
		let r = K(), a = i();
		if (n() && Sl(r) && r.getNodes().length === 1) {
			if (t.showCaption) return M(s, null), e.preventDefault(), t.caption.focus(), !0;
			if (a !== null && a !== document.activeElement) return e.preventDefault(), a.focus(), !0;
		}
		return !1;
	}, v = (e) => f === t.caption || i() === e.target ? (M(s, null), t.editor.update(() => {
		k(u, !0);
		let e = t.editor.getRootElement();
		e !== null && e.focus();
	}), !0) : !1, y = (e) => {
		let r = e;
		return I(d) ? !0 : r.target === I(c) && (r.shiftKey ? k(u, !n()) : (Ig(t.editor), k(u, !0)), !0);
	}, b = (e) => {
		t.editor.getEditorState().read(() => {
			let n = K();
			e.target.tagName === "IMG" && G(n) && n.getNodes().length === 1 && t.editor.dispatchCommand(sS, e);
		});
	};
	vi(() => {
		let e = t.editor.getRootElement(), n = Cp(t.editor.registerUpdateListener(({ editorState: e }) => {
			let t = e.read(() => K());
			Sl(t) ? M(s, t, !0) : M(s, null);
		}), t.editor.registerCommand(ss, (e, t) => (f = t, !1), 1), t.editor.registerCommand(ls, y, 1), t.editor.registerCommand(sS, y, 1), t.editor.registerCommand(Us, (e) => e.target === I(c) && (e.preventDefault(), !0), 1), t.editor.registerCommand(Ms, _, 1), t.editor.registerCommand(Fs, v, 1));
		return e?.addEventListener("contextmenu", b), () => {
			n(), e?.removeEventListener("contextmenu", b);
		};
	});
	let x = () => {
		t.editor.update(() => {
			let e = ud(t.nodeKey);
			CS(e) && e.setShowCaption(!0);
		});
	}, S = (e, n) => {
		setTimeout(() => {
			M(d, !1);
		}, 200), t.editor.update(() => {
			let r = ud(t.nodeKey);
			CS(r) && r.setWidthAndHeight(e, n);
		});
	}, C = () => {
		M(d, !0);
	}, ee = hh(), te = /* @__PURE__ */ j(null);
	function ne(e) {
		return e.toLowerCase().endsWith(".svg");
	}
	let re = ne(t.src);
	Jn(() => {
		if (I(c) && re) {
			let { naturalWidth: e, naturalHeight: t } = I(c);
			M(te, {
				height: t,
				width: e
			}, !0);
		}
	});
	function ie() {
		if (!re) return {
			height: t.height,
			maxWidth: t.maxWidth,
			width: t.width
		};
		let e = I(te)?.width || 200, n = I(te)?.height || 200, r = e, i = n;
		if (r > t.maxWidth) {
			let e = t.maxWidth / r;
			r = t.maxWidth, i = Math.round(i * e);
		}
		if (i > 500) {
			let e = 500 / i;
			i = 500, r = Math.round(r * e);
		}
		return {
			height: i,
			maxWidth: t.maxWidth,
			width: r
		};
	}
	let ae = /* @__PURE__ */ Gt(ie);
	var oe = pS(), se = Rn(oe);
	wi(N(se), () => g, (e) => {
		z(e, uS());
	}, (e, n) => {
		var r = cS();
		let i;
		fa(r, (e) => M(c, e), () => I(c)), F((e) => {
			B(r, "src", t.src), B(r, "alt", t.altText), Yi(r, `height:${I(ae).height === "inherit" ? "inherit" : I(ae).height + "px"};max-width:${t.maxWidth ?? ""}px;width:${I(ae).width === "inherit" ? "inherit" : I(ae).width + "px"};`), i = qi(r, 1, "", null, i, e);
		}, [() => ({
			focused: I(h),
			draggable: I(h) && Sl(I(s))
		})]), Zr("load", r, (e) => {
			if (re) {
				let t = e.currentTarget;
				M(te, {
					height: t.naturalHeight,
					width: t.naturalWidth
				}, !0);
			}
		}), Yr(r), z(e, r);
	}, (e, t) => {
		z(e, lS());
	}), T(se);
	var ce = P(se, 2), le = (e) => {
		var n = fS();
		Jg(N(n), {
			get initialEditor() {
				return t.caption;
			},
			get parentEditor() {
				return t.editor;
			},
			children: (e, t) => {
				var n = dS(), r = Rn(n);
				aS(r, {});
				var i = P(r, 2);
				Li(i, () => ee.componentType, (e, t) => {
					t(e, _a(() => ee.props));
				});
				var a = P(i, 2);
				Vh(a, {});
				var o = P(a, 2);
				Xg(o, { className: "ImageNode__contentEditable" }), i_(P(o, 2), {
					className: "ImageNode__placeholder",
					children: (e, t) => {
						Ke(), z(e, si("Enter image caption..."));
					},
					$$slots: { default: !0 }
				}), z(e, n);
			},
			$$slots: { default: !0 }
		}), T(n), z(e, n);
	};
	Ti(ce, (e) => {
		t.showCaption && e(le);
	});
	var ue = P(ce, 2), de = (e) => {
		qg(e, {
			get showCaption() {
				return t.showCaption;
			},
			setShowCaption: x,
			get editor() {
				return t.editor;
			},
			get buttonRef() {
				return l;
			},
			get imageRef() {
				return I(c);
			},
			get maxWidth() {
				return t.maxWidth;
			},
			onResizeStart: C,
			onResizeEnd: S,
			get captionsEnabled() {
				return t.captionsEnabled;
			}
		});
	}, fe = /* @__PURE__ */ Gt(() => t.resizable && Sl(I(s)) && I(h));
	Ti(ue, (e) => {
		I(fe) && e(de);
	}), F(() => B(se, "draggable", I(m))), z(e, oe), D(), o();
}
//#endregion
//#region node_modules/@lexical/hashtag/LexicalHashtag.prod.mjs
var hS = class e extends nl {
	static getType() {
		return "hashtag";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return xp(t, e.theme.hashtag), t;
	}
	static importJSON(e) {
		return gS().updateFromJSON(e);
	}
	canInsertTextBefore() {
		return !1;
	}
	isTextEntity() {
		return !0;
	}
};
function gS(e = "") {
	return Qd(new hS(e));
}
new RegExp(function() {
	let { alpha: e, alphanumeric: t, hashChars: n } = function() {
		let e = String.fromCharCode, t = "A-Za-zªµºÀ-ÖØ-öø-Ɂɐ-ˁˆ-ˑˠ-ˤˮͺΆΈ-ΊΌΎ-ΡΣ-ώϐ-ϵϷ-ҁҊ-ӎӐ-ӹԀ-ԏԱ-Ֆՙա-ևא-תװ-ײء-غـ-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ݭހ-ޥޱऄ-हऽॐक़-ॡॽঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹఅ-ఌఎ-ఐఒ-నప-ళవ-హౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹൠ-ൡඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཪྈ-ྋက-အဣ-ဧဩ-ဪၐ-ၕႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᴀ-ᶿḀ-ẛẠ-ỹἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℱℳ-ℹℼ-ℿⅅ-ⅉⰀ-Ⱞⰰ-ⱞⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄬㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-龻ꀀ-ꒌꠀ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜÀ-ÖØ-öø-ÿĀ-ɏɓ-ɔɖ-ɗəɛɣɨɯɲʉʋʻ̀-ͯḀ-ỿЀ-ӿԀ-ԧⷠ-ⷿꙀ-֑ꚟ-ֿׁ-ׂׄ-ׇׅא-תװ-״﬒-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﭏؐ-ؚؠ-ٟٮ-ۓە-ۜ۞-۪ۨ-ۯۺ-ۼۿݐ-ݿࢠࢢ-ࢬࣤ-ࣾﭐ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼ‌-‌ก-ฺเ-๎ᄀ-ᇿ㄰-ㆅꥠ-꥿가-힯ힰ-퟿ﾡ-ￜァ-ヺー-ヾｦ-ﾟ０-９Ａ-Ｚａ-ｚぁ-ゖ゙-ゞ㐀-䶿一-鿿" + e(173824) + "-" + e(177983) + e(177984) + "-" + e(178207) + e(194560) + "-" + e(195103) + "〃々〻";
		return {
			alpha: t,
			alphanumeric: t + "̀-ͯ҃-֑҆-ֹֻ-ֽֿׁ-ׂׄ-ׇׅؐ-ًؕ-ٰٞۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ްँ-ः़ा-्॑-॔ॢ-ॣঁ-ঃ়া-ৄে-ৈো-্ৗৢ-ৣਁ-ਃ਼ਾ-ੂੇ-ੈੋ-੍ੰ-ੱઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣଁ-ଃ଼ା-ୃେ-ୈୋ-୍ୖ-ୗஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕ-ౖಂ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕ-ೖം-ഃാ-ൃെ-ൈൊ-്ൗං-ඃ්ා-ුූෘ-ෟෲ-ෳัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-༹༙༵༷༾-༿ཱ-྄྆-྇ྐ-ྗྙ-ྼ࿆ာ-ဲံ-္ၖ-ၙ፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈ-ᧉᨗ-ᨛ᷀-᷃⃐-⃥⃜⃡-⃫〪-゙〯-゚ꠂ꠆ꠋꠣ-ꠧﬞ︀-️︠-︣0-9٠-٩۰-۹०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉០-៩᠐-᠙᥆-᥏᧐-᧙０-９_",
			hashChars: "#\\uFF03"
		};
	}(), r = "[" + t + "]";
	return "(" + ("^|$|[^&/" + t + "]") + ")(" + ("[" + n + "]") + ")(" + r + "*" + ("[" + e + "]") + r + "*)";
}(), "i");
var _S = class e extends nl {
	static getType() {
		return "keyword";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	static importJSON(e) {
		return vS().updateFromJSON(e);
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return t.style.cursor = "default", t.className = "keyword", t;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !1;
	}
	isTextEntity() {
		return !0;
	}
};
function vS(e = "") {
	return Qd(new _S(e));
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Image/ImageNode.js
function yS(e) {
	return e.parentElement != null && e.parentElement.tagName === "LI" && e.previousSibling === null && e.getAttribute("aria-roledescription") === "checkbox";
}
function bS(e) {
	let t = e;
	if (t.src.startsWith("file:///") || yS(t)) return null;
	let { alt: n, src: r, width: i, height: a } = t;
	return { node: SS({
		altText: n,
		height: a,
		src: r,
		width: i
	}) };
}
var xS = class e extends Cu {
	__src;
	__altText;
	__width;
	__height;
	__maxWidth;
	__showCaption;
	__caption;
	__captionsEnabled;
	static getType() {
		return "image";
	}
	static clone(t) {
		return new e(t.__src, t.__altText, t.__maxWidth, t.__width, t.__height, t.__showCaption, t.__caption, t.__captionsEnabled, t.__key);
	}
	static importJSON(e) {
		let { altText: t, height: n, width: r, maxWidth: i, src: a, showCaption: o } = e;
		return SS({
			altText: t,
			height: n,
			maxWidth: i,
			showCaption: o,
			src: a,
			width: r
		}).updateFromJSON(e);
	}
	updateFromJSON(e) {
		let t = super.updateFromJSON(e), { caption: n } = e, r = t.__caption, i = r.parseEditorState(n.editorState);
		return i.isEmpty() || r.setEditorState(i), t;
	}
	exportDOM() {
		let e = document.createElement("img");
		return e.setAttribute("src", this.__src), e.setAttribute("alt", this.__altText), e.setAttribute("width", this.__width.toString()), e.setAttribute("height", this.__height.toString()), { element: e };
	}
	static importDOM() {
		return { img: (e) => ({
			conversion: bS,
			priority: 0
		}) };
	}
	constructor(e, t, n, r, i, a, o, s, c) {
		super(c), this.__src = e, this.__altText = t, this.__maxWidth = n, this.__width = r || "inherit", this.__height = i || "inherit", this.__showCaption = a || !1, this.__caption = o || Lu({
			namespace: "Playground/ImageNodeCaption",
			nodes: [
				Tu,
				nl,
				Gc,
				Mu,
				zy,
				hS,
				_S
			]
		}), this.__captionsEnabled = s || s === void 0;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			altText: this.getAltText(),
			caption: this.__caption.toJSON(),
			height: this.__height === "inherit" ? 0 : this.__height,
			maxWidth: this.__maxWidth,
			showCaption: this.__showCaption,
			src: this.getSrc(),
			width: this.__width === "inherit" ? 0 : this.__width
		};
	}
	setWidthAndHeight(e, t) {
		let n = this.getWritable();
		n.__width = e, n.__height = t;
	}
	setShowCaption(e) {
		let t = this.getWritable();
		t.__showCaption = e;
	}
	createDOM(e) {
		let t = document.createElement("span"), n = e.theme.image;
		return n !== void 0 && (t.className = n), t;
	}
	updateDOM() {
		return !1;
	}
	getSrc() {
		return this.__src;
	}
	getAltText() {
		return this.__altText;
	}
	decorate(e, t) {
		return {
			componentClass: mS,
			updateProps: (t) => {
				t.src = this.__src, t.altText = this.__altText, t.width = this.__width, t.height = this.__height, t.maxWidth = this.__maxWidth, t.nodeKey = this.__key, t.showCaption = this.__showCaption, t.caption = this.__caption, t.captionsEnabled = this.__captionsEnabled, t.resizable = !0, t.editor = e;
			}
		};
	}
};
function SS({ altText: e, height: t, maxWidth: n = 500, captionsEnabled: r, src: i, width: a, showCaption: o, caption: s, key: c }) {
	return Qd(new xS(i, e, n, a, t, o, s, r, c));
}
function CS(e) {
	return e instanceof xS;
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Image/ImagePlugin.svelte
var wS = U();
function TS(e, t) {
	E(t, !0);
	let n = sh(), r, i = V(t, "captionsEnabled", 3, !0);
	vi(() => {
		if (!n.hasNodes([xS])) throw Error("ImagesPlugin: ImageNode not registered on editor");
		return r = document.createElement("img"), r.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Cp(n.registerCommand(wS, (e) => {
			e.captionsEnabled = i();
			let t = SS(e);
			return Gl([t]), Xd(t.getParentOrThrow()) && om(t, J).selectEnd(), !0;
		}, 0), n.registerCommand(Us, (e) => a(e), 3), n.registerCommand(Ws, (e) => o(e), 1), n.registerCommand(Vs, (e) => s(e, n), 3));
	});
	function a(e) {
		let t = c();
		if (!t) return !1;
		let n = e.dataTransfer;
		return n ? (n.setData("text/plain", "_"), n.setDragImage(r, 0, 0), n.setData("application/x-lexical-drag", JSON.stringify({
			data: {
				altText: t.__altText,
				caption: t.__caption,
				height: t.__height,
				key: t.getKey(),
				maxWidth: t.__maxWidth,
				showCaption: t.__showCaption,
				src: t.__src,
				width: t.__width
			},
			type: "image"
		})), !0) : !1;
	}
	function o(e) {
		return c() ? (u(e) || e.preventDefault(), !0) : !1;
	}
	function s(e, t) {
		let n = c();
		if (!n) return !1;
		let r = l(e);
		if (!r) return !1;
		if (e.preventDefault(), u(e)) {
			let i = d(e);
			n.remove();
			let a = Pl();
			i != null && a.applyDOMRange(i), vd(a), t.dispatchCommand(wS, r);
		}
		return !0;
	}
	function c() {
		let e = K();
		if (!Sl(e)) return null;
		let t = e.getNodes()[0];
		return CS(t) ? t : null;
	}
	function l(e) {
		let t = e.dataTransfer?.getData("application/x-lexical-drag");
		if (!t) return null;
		let { type: n, data: r } = JSON.parse(t);
		return n === "image" ? r : null;
	}
	function u(e) {
		let t = e.target;
		return !!(sf(t) && !t.closest("code, span.editor-image") && sf(t.parentElement) && t.parentElement.closest("div.ContentEditable__root"));
	}
	function d(e) {
		let t, n = af(e.target);
		if (document.caretRangeFromPoint) t = document.caretRangeFromPoint(e.clientX, e.clientY);
		else if (e.rangeParent && n !== null) n.collapse(e.rangeParent, e.rangeOffset || 0), t = n.getRangeAt(0);
		else throw Error("Cannot get the selection when dragging");
		return t;
	}
	var f = ci();
	_i(Rn(f), () => t.children ?? v), z(e, f), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/collaboration/CollaborationContext.js
var ES = [
	["Cat", "rgb(125, 50, 0)"],
	["Dog", "rgb(100, 0, 0)"],
	["Rabbit", "rgb(150, 0, 0)"],
	["Frog", "rgb(200, 0, 0)"],
	["Fox", "rgb(200, 75, 0)"],
	["Hedgehog", "rgb(0, 75, 0)"],
	["Pigeon", "rgb(0, 125, 0)"],
	["Squirrel", "rgb(75, 100, 0)"],
	["Bear", "rgb(125, 100, 0)"],
	["Tiger", "rgb(0, 0, 150)"],
	["Leopard", "rgb(0, 0, 200)"],
	["Zebra", "rgb(0, 0, 250)"],
	["Wolf", "rgb(0, 100, 150)"],
	["Owl", "rgb(0, 100, 100)"],
	["Gull", "rgb(100, 0, 100)"],
	["Squid", "rgb(150, 0, 150)"]
], DS = ES[Math.floor(Math.random() * ES.length)];
DS[1], DS[0];
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/HashtagNode.js
var OS = class e extends nl {
	static getType() {
		return "hashtag";
	}
	static clone(t) {
		return new e(t.__text, t.__key);
	}
	static importJSON(e) {
		let t = kS(e.text);
		return t.setFormat(e.format), t.setDetail(e.detail), t.setMode(e.mode), t.setStyle(e.style), t;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			type: "hashtag",
			version: 1
		};
	}
	createDOM(e) {
		let t = super.createDOM(e);
		return t.classList.add(e.theme.hashtag), t;
	}
	canInsertTextBefore() {
		return !1;
	}
	canInsertTextAfter() {
		return !0;
	}
	isTextEntity() {
		return !0;
	}
};
function kS(e) {
	return new OS(e);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/HashtagPlugin.svelte
function AS(e, t) {
	E(t, !1);
	function n() {
		let e = String.fromCharCode, t = "A-Za-zªµºÀ-ÖØ-öø-Ɂɐ-ˁˆ-ˑˠ-ˤˮͺΆΈ-ΊΌΎ-ΡΣ-ώϐ-ϵϷ-ҁҊ-ӎӐ-ӹԀ-ԏԱ-Ֆՙա-ևא-תװ-ײء-غـ-يٮ-ٯٱ-ۓەۥ-ۦۮ-ۯۺ-ۼۿܐܒ-ܯݍ-ݭހ-ޥޱऄ-हऽॐक़-ॡॽঅ-ঌএ-ঐও-নপ-রলশ-হঽৎড়-ঢ়য়-ৡৰ-ৱਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽૐૠ-ૡଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽଡ଼-ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹఅ-ఌఎ-ఐఒ-నప-ళవ-హౠ-ౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠ-ೡഅ-ഌഎ-ഐഒ-നപ-ഹൠ-ൡඅ-ඖක-නඳ-රලව-ෆก-ะา-ำเ-ๆກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆໜ-ໝༀཀ-ཇཉ-ཪྈ-ྋက-အဣ-ဧဩ-ဪၐ-ၕႠ-Ⴥა-ჺჼᄀ-ᅙᅟ-ᆢᆨ-ᇹሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙶᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦩᧁ-ᧇᨀ-ᨖᴀ-ᶿḀ-ẛẠ-ỹἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₔℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℱℳ-ℹℼ-ℿⅅ-ⅉⰀ-Ⱞⰰ-ⱞⲀ-ⳤⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〆〱-〵〻-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄬㄱ-ㆎㆠ-ㆷㇰ-ㇿ㐀-䶵一-龻ꀀ-ꒌꠀ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢ가-힣豈-鶴侮-頻並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" + ("À-ÖØ-öø-ÿĀ-ɏɓ-ɔɖ-ɗəɛɣɨɯɲʉʋʻ̀-ͯḀ-ỿЀ-ӿԀ-ԧⷠ-ⷿꙀ-֑ꚟ-ֿׁ-ׂׄ-ׇׅא-תװ-״﬒-ﬨשׁ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﭏؐ-ؚؠ-ٟٮ-ۓە-ۜ۞-۪ۨ-ۯۺ-ۼۿݐ-ݿࢠࢢ-ࢬࣤ-ࣾﭐ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼ‌-‌ก-ฺเ-๎ᄀ-ᇿ㄰-ㆅꥠ-꥿가-힯ힰ-퟿ﾡ-ￜ" + ("ァ-ヺー-ヾｦ-ﾟ０-９Ａ-Ｚａ-ｚぁ-ゖ゙-ゞ㐀-䶿一-鿿" + e(173824) + "-" + e(177983) + e(177984) + "-" + e(178207) + e(194560) + "-" + e(195103) + "〃々〻"));
		return {
			alpha: t,
			alphanumeric: t + "̀-ͯ҃-֑҆-ֹֻ-ֽֿׁ-ׂׄ-ׇׅؐ-ًؕ-ٰٞۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ްँ-ः़ा-्॑-॔ॢ-ॣঁ-ঃ়া-ৄে-ৈো-্ৗৢ-ৣਁ-ਃ਼ਾ-ੂੇ-ੈੋ-੍ੰ-ੱઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣଁ-ଃ଼ା-ୃେ-ୈୋ-୍ୖ-ୗஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕ-ౖಂ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕ-ೖം-ഃാ-ൃെ-ൈൊ-്ൗං-ඃ්ා-ුූෘ-ෟෲ-ෳัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-༹༙༵༷༾-༿ཱ-྄྆-྇ྐ-ྗྙ-ྼ࿆ာ-ဲံ-္ၖ-ၙ፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈ-ᧉᨗ-ᨛ᷀-᷃⃐-⃥⃜⃡-⃫〪-゙〯-゚ꠂ꠆ꠋꠣ-ꠧﬞ︀-️︠-︣0-9٠-٩۰-۹०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉០-៩᠐-᠙᥆-᥏᧐-᧙０-９_",
			hashChars: "#\\uFF03"
		};
	}
	function r() {
		let { alpha: e, alphanumeric: t, hashChars: r } = n(), i = "[" + e + "]", a = "[" + t + "]", o = "^|$|[^&/" + t + "]", s = "[" + r + "]";
		return "(" + o + ")(" + s + ")(" + a + "*" + i + a + "*)";
	}
	let i = new RegExp(r(), "i"), a = sh();
	if (!a.hasNodes([OS])) throw Error("HashtagPlugin: HashtagNode not registered on editor");
	function o(e) {
		return kS(e.getTextContent());
	}
	vi(() => Cp(...n_(a, s, OS, o)));
	function s(e) {
		let t = i.exec(e);
		if (t === null) return null;
		let n = t[3].length + 1, r = t.index + t[1].length;
		return {
			end: r + n,
			start: r
		};
	}
	ma(), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/AutoLink/AutoLinkPluginCore.svelte
function jS(e, t) {
	E(t, !0);
	function n(e, t) {
		for (let n = 0; n < t.length; n++) {
			let r = t[n](e);
			if (r) return r;
		}
		return null;
	}
	let r = /[.,;\s]/;
	function i(e) {
		return r.test(e);
	}
	function a(e) {
		return i(e[e.length - 1]);
	}
	function o(e) {
		return i(e[0]);
	}
	function s(e, t) {
		return t ? /^\.[a-zA-Z]{2,}/.test(e) : /^\.[a-zA-Z0-9]{1,}/.test(e);
	}
	function c(e) {
		let t = e.getPreviousSibling();
		return q(t) && (t = t.getLastDescendant()), t === null || Jc(t) || W(t) && a(t.getTextContent());
	}
	function l(e) {
		let t = e.getNextSibling();
		return q(t) && (t = t.getFirstDescendant()), t === null || Jc(t) || W(t) && o(t.getTextContent());
	}
	function u(e, t, n, r) {
		return (e > 0 ? i(n[e - 1]) : c(r[0])) ? t < n.length ? i(n[t]) : l(r[r.length - 1]) : !1;
	}
	function d(e, t, n) {
		let r = [], i = [], a = [], o = 0, s = 0, c = [...e];
		for (; c.length > 0;) {
			let e = c[0], l = e.getTextContent().length, u = s;
			s + l <= t ? (r.push(e), o += l) : u >= n ? a.push(e) : i.push(e), s += l, c.shift();
		}
		return [
			o,
			r,
			i,
			a
		];
	}
	function f(e, t, n, r) {
		let i = Wy(r.url, r.attributes);
		if (e.length === 1) {
			let a = e[0], o;
			t === 0 ? [o, a] = a.splitText(n) : [, o, a] = a.splitText(t, n);
			let s = dl(r.text);
			return s.setFormat(o.getFormat()), s.setDetail(o.getDetail()), s.setStyle(o.getStyle()), i.append(s), o.replace(i), a;
		}
		if (e.length > 1) {
			let r = e[0], a = r.getTextContent().length, o;
			t === 0 ? o = r : [, o] = r.splitText(t);
			let s = [], c;
			for (let t = 1; t < e.length; t++) {
				let r = e[t], i = r.getTextContent().length, o = a, l = a + i;
				if (o < n) if (l <= n) s.push(r);
				else {
					let [e, t] = r.splitText(n - o);
					s.push(e), c = t;
				}
				a += i;
			}
			let l = K(), u = l ? l.getNodes().find(W) : void 0, d = dl(o.getTextContent());
			return d.setFormat(o.getFormat()), d.setDetail(o.getDetail()), d.setStyle(o.getStyle()), i.append(d, ...s), u && u === o && (G(l) ? d.select(l.anchor.offset, l.focus.offset) : Sl(l) && d.select(0, d.getTextContent().length)), o.replace(i), c;
		}
	}
	function p(e, t, r) {
		let i = [...e], a = i.map((e) => e.getTextContent()).join(""), o = a, s, c = 0;
		for (; (s = n(o, t)) && s !== null;) {
			let e = s.index, t = e + s.length;
			if (u(c + e, c + t, a, i)) {
				let [n, , a, o] = d(i, c + e, c + t), l = f(a, c + e - n, c + t - n, s);
				i = l ? [l, ...o] : o, r(s.url, null), c = 0;
			} else c += t;
			o = o.substring(t);
		}
	}
	function m(e, t, r) {
		let i = e.getChildren(), a = i.length;
		for (let t = 0; t < a; t++) {
			let n = i[t];
			if (!W(n) || !n.isSimpleText()) {
				g(e), r(null, e.getURL());
				return;
			}
		}
		let o = e.getTextContent(), s = n(o, t);
		if (s === null || s.text !== o) {
			g(e), r(null, e.getURL());
			return;
		}
		if (!c(e) || !l(e)) {
			g(e), r(null, e.getURL());
			return;
		}
		let u = e.getURL();
		if (u !== s.url && (e.setURL(s.url), r(s.url, u)), s.attributes) {
			let t = e.getRel();
			t !== s.attributes.rel && (e.setRel(s.attributes.rel || null), r(s.attributes.rel || null, t));
			let n = e.getTarget();
			n !== s.attributes.target && (e.setTarget(s.attributes.target || null), r(s.attributes.target || null, n));
		}
	}
	function h(e, t, n) {
		let r = e.getPreviousSibling(), i = e.getNextSibling(), c = e.getTextContent();
		Gy(r) && !r.getIsUnlinked() && (!o(c) || s(c, r.isEmailURI())) && (r.append(e), m(r, t, n), n(null, r.getURL())), Gy(i) && !i.getIsUnlinked() && !a(c) && (g(i), m(i, t, n), n(null, i.getURL()));
	}
	function g(e) {
		let t = e.getChildren(), n = t.length;
		for (let r = n - 1; r >= 0; r--) e.insertAfter(t[r]);
		return e.remove(), t.map((e) => e.getLatest());
	}
	function _(e) {
		let t = [e], n = e.getNextSibling();
		for (; n !== null && W(n) && n.isSimpleText() && (t.push(n), !/[\s]/.test(n.getTextContent()));) n = n.getNextSibling();
		return t;
	}
	let v = sh(), y = V(t, "onChange", 19, () => void 0);
	vi(() => {
		if (!v.hasNodes([Uy])) throw Error("AutoLinkPlugin: AutoLinkNode not registered on editor");
		let e = (e, t) => {
			y() && y()(e, t);
		};
		return Cp(v.registerNodeTransform(nl, (n) => {
			let r = n.getParentOrThrow(), i = n.getPreviousSibling();
			Gy(r) && !r.getIsUnlinked() ? m(r, t.matchers, e) : Hy(r) || (n.isSimpleText() && (o(n.getTextContent()) || !Gy(i)) && p(_(n), t.matchers, e), h(n, t.matchers, e));
		}), v.registerCommand(Ky, (e) => {
			let t = K();
			return e !== null || !G(t) || t.extract().forEach((e) => {
				let t = e.getParent();
				Gy(t) && (t.setIsUnlinked(!t.getIsUnlinked()), t.markDirty());
			}), !1;
		}, 1));
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/AutoLink/AutoLinkPlugin.svelte
function MS(e, t) {
	E(t, !0);
	function n(e, n = (e) => e) {
		return (r) => {
			let i = e.exec(r);
			return i === null ? null : {
				index: i.index,
				length: i[0].length,
				text: i[0],
				url: n(i[0]),
				attributes: t.attributes
			};
		};
	}
	let r = [n(/((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)(?<![-.+():%])/, (e) => e.startsWith("http") ? e : `https://${e}`), n(/(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, (e) => `mailto:${e}`)];
	var i = { createLinkMatcherWithRegExp: n };
	return jS(e, { get matchers() {
		return r;
	} }), D(i);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/link/LinkPlugin.svelte
function NS(e, t) {
	E(t, !0);
	let n = V(t, "validateUrl", 19, () => void 0), r = V(t, "attributes", 19, () => ({})), i = sh();
	vi(() => {
		if (!i.hasNodes([zy])) throw Error("LinkPlugin: LinkNode not registered on editor");
		return Cp(i.registerCommand(Ky, (e) => {
			if (e === null) return Jy(e), !0;
			if (typeof e == "string") return n() === void 0 || n()(e) ? (Jy(e, r()), !0) : !1;
			{
				let { url: t, target: n, rel: i, title: a } = e;
				return Jy(t, {
					...r(),
					rel: i,
					target: n,
					title: a
				}), !0;
			}
		}, 1), n() === void 0 ? () => {} : i.registerCommand(vs, (e) => {
			let t = K();
			if (!G(t) || t.isCollapsed() || !sm(e, ClipboardEvent) || e.clipboardData === null) return !1;
			let r = e.clipboardData.getData("text");
			return n()(r) ? !t.getNodes().some((e) => q(e)) && (i.dispatchCommand(Ky, r), e.preventDefault(), !0) : !1;
		}, 1));
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/getSelectionInfo.js
function PS(e) {
	let t = e.anchor, n = e.focus, r = e.anchor.getNode(), i = e.focus.getNode();
	return r === i ? r : e.isBackward() ? Np(n) ? r : i : Np(t) ? i : r;
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/link/FloatingLinkEditor.svelte
Qr([
	"keydown",
	"mousedown",
	"click"
]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/CodeBlock/CodeHighlightPrismPlugin.svelte
function FS(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => K_(n)), ma(), D();
}
//#endregion
//#region node_modules/lodash-es/_freeGlobal.js
var IS = typeof global == "object" && global && global.Object === Object && global, LS = typeof self == "object" && self && self.Object === Object && self, RS = IS || LS || Function("return this")(), zS = RS.Symbol, BS = Object.prototype, VS = BS.hasOwnProperty, HS = BS.toString, US = zS ? zS.toStringTag : void 0;
function WS(e) {
	var t = VS.call(e, US), n = e[US];
	try {
		e[US] = void 0;
		var r = !0;
	} catch {}
	var i = HS.call(e);
	return r && (t ? e[US] = n : delete e[US]), i;
}
//#endregion
//#region node_modules/lodash-es/_objectToString.js
var GS = Object.prototype.toString;
function KS(e) {
	return GS.call(e);
}
//#endregion
//#region node_modules/lodash-es/_baseGetTag.js
var qS = "[object Null]", JS = "[object Undefined]", YS = zS ? zS.toStringTag : void 0;
function XS(e) {
	return e == null ? e === void 0 ? JS : qS : YS && YS in Object(e) ? WS(e) : KS(e);
}
//#endregion
//#region node_modules/lodash-es/isObjectLike.js
function ZS(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region node_modules/lodash-es/isSymbol.js
var QS = "[object Symbol]";
function $S(e) {
	return typeof e == "symbol" || ZS(e) && XS(e) == QS;
}
//#endregion
//#region node_modules/lodash-es/_trimmedEndIndex.js
var eC = /\s/;
function tC(e) {
	for (var t = e.length; t-- && eC.test(e.charAt(t)););
	return t;
}
//#endregion
//#region node_modules/lodash-es/_baseTrim.js
var nC = /^\s+/;
function rC(e) {
	return e && e.slice(0, tC(e) + 1).replace(nC, "");
}
//#endregion
//#region node_modules/lodash-es/isObject.js
function iC(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region node_modules/lodash-es/toNumber.js
var aC = NaN, oC = /^[-+]0x[0-9a-f]+$/i, sC = /^0b[01]+$/i, cC = /^0o[0-7]+$/i, lC = parseInt;
function uC(e) {
	if (typeof e == "number") return e;
	if ($S(e)) return aC;
	if (iC(e)) {
		var t = typeof e.valueOf == "function" ? e.valueOf() : e;
		e = iC(t) ? t + "" : t;
	}
	if (typeof e != "string") return e === 0 ? e : +e;
	e = rC(e);
	var n = sC.test(e);
	return n || cC.test(e) ? lC(e.slice(2), n ? 2 : 8) : oC.test(e) ? aC : +e;
}
//#endregion
//#region node_modules/lodash-es/now.js
var dC = function() {
	return RS.Date.now();
}, fC = "Expected a function", pC = Math.max, mC = Math.min;
function hC(e, t, n) {
	var r, i, a, o, s, c, l = 0, u = !1, d = !1, f = !0;
	if (typeof e != "function") throw TypeError(fC);
	t = uC(t) || 0, iC(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? pC(uC(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f);
	function p(t) {
		var n = r, a = i;
		return r = i = void 0, l = t, o = e.apply(a, n), o;
	}
	function m(e) {
		return l = e, s = setTimeout(_, t), u ? p(e) : o;
	}
	function h(e) {
		var n = e - c, r = e - l, i = t - n;
		return d ? mC(i, a - r) : i;
	}
	function g(e) {
		var n = e - c, r = e - l;
		return c === void 0 || n >= t || n < 0 || d && r >= a;
	}
	function _() {
		var e = dC();
		if (g(e)) return v(e);
		s = setTimeout(_, h(e));
	}
	function v(e) {
		return s = void 0, f && r ? p(e) : (r = i = void 0, o);
	}
	function y() {
		s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
	}
	function b() {
		return s === void 0 ? o : v(dC());
	}
	function x() {
		var e = dC(), n = g(e);
		if (r = arguments, i = this, c = e, n) {
			if (s === void 0) return m(c);
			if (d) return clearTimeout(s), s = setTimeout(_, t), p(c);
		}
		return s === void 0 && (s = setTimeout(_, t)), o;
	}
	return x.cancel = y, x.flush = b, x;
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/CodeBlock/CodeActionMenuPlugin/utils.js
function gC(e, t, n) {
	let r = e;
	return hC((...e) => {
		r && r(...e);
	}, t, { maxWait: n });
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/CodeBlock/CodeActionMenuPlugin/components/PrettierButton.svelte
Qr(["click"]), Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/ColumnsLayout/LayoutContainerNode.js
function _C(e) {
	let t = window.getComputedStyle(e).getPropertyValue("grid-template-columns");
	return t ? { node: yC(t) } : null;
}
var vC = class e extends xu {
	__templateColumns;
	constructor(e, t) {
		super(t), this.__templateColumns = e;
	}
	static getType() {
		return "layout-container";
	}
	static clone(t) {
		return new e(t.__templateColumns, t.__key);
	}
	createDOM(e) {
		let t = document.createElement("div");
		return t.style.gridTemplateColumns = this.__templateColumns, typeof e.theme.layoutContainer == "string" && xp(t, e.theme.layoutContainer), t;
	}
	exportDOM() {
		let e = document.createElement("div");
		return e.style.gridTemplateColumns = this.__templateColumns, e.setAttribute("data-lexical-layout-container", "true"), { element: e };
	}
	updateDOM(e, t) {
		return e.__templateColumns !== this.__templateColumns && (t.style.gridTemplateColumns = this.__templateColumns), !1;
	}
	static importDOM() {
		return { div: (e) => e.hasAttribute("data-lexical-layout-container") ? {
			conversion: _C,
			priority: 2
		} : null };
	}
	static importJSON(e) {
		return yC().updateFromJSON(e);
	}
	updateFromJSON(e) {
		return super.updateFromJSON(e).setTemplateColumns(e.templateColumns);
	}
	isShadowRoot() {
		return !0;
	}
	canBeEmpty() {
		return !1;
	}
	exportJSON() {
		return {
			...super.exportJSON(),
			templateColumns: this.__templateColumns
		};
	}
	getTemplateColumns() {
		return this.getLatest().__templateColumns;
	}
	setTemplateColumns(e) {
		let t = this.getWritable();
		return t.__templateColumns = e, t;
	}
};
function yC(e = "") {
	return new vC(e);
}
function bC(e) {
	return e instanceof vC;
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/ColumnsLayout/ColumnLayoutPlugin.svelte
function xC(e, t) {
	E(t, !1);
	let n = sh();
	vi(() => {
		if (!n.hasNodes([vC, Px])) throw Error("LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor");
		let e = (e) => {
			let t = K();
			if (G(t) && t.isCollapsed() && t.anchor.offset === 0) {
				let n = X(t.anchor.getNode(), bC);
				if (bC(n)) {
					let r = n.getParent(), i = r && (e ? r.getFirstChild() : r?.getLastChild()), a = e ? n.getFirstDescendant()?.getKey() : n.getLastDescendant()?.getKey();
					r !== null && i === n && t.anchor.key === a && (e ? n.insertBefore(J()) : n.insertAfter(J()));
				}
			}
			return !1;
		}, t = (e) => {
			e.isEmpty() && e.append(J());
		}, i = (e) => {
			if (!bC(e.getParent())) {
				let t = e.getChildren();
				for (let n of t) e.insertBefore(n);
				return e.remove(), !0;
			}
			return !1;
		};
		return Cp(n.registerCommand(js, () => e(!1), 1), n.registerCommand(Es, () => e(!1), 1), n.registerCommand(As, () => e(!0), 1), n.registerCommand(Os, () => e(!0), 1), n.registerCommand(Mx, (e) => (n.update(() => {
			let t = yC(e), n = r(e);
			for (let e = 0; e < n; e++) t.append(Fx().append(J()));
			im(t), t.selectStart();
		}), !0), 0), n.registerCommand(Nx, ({ template: e, nodeKey: t }) => (n.update(() => {
			let n = ud(t);
			if (!bC(n)) return;
			let i = r(e), a = r(n.getTemplateColumns());
			if (i > a) for (let e = a; e < i; e++) n.append(Fx().append(J()));
			else if (i < a) for (let e = a - 1; e >= i; e--) {
				let t = n.getChildAtIndex(e);
				Ix(t) && t.remove();
			}
			n.setTemplateColumns(e);
		}), !0), 0), n.registerNodeTransform(Px, (e) => {
			i(e) || t(e);
		}), n.registerNodeTransform(vC, (e) => {
			let t = e.getChildren();
			if (!t.every(Ix)) {
				for (let n of t) e.insertBefore(n);
				e.remove();
			}
		}));
	});
	function r(e) {
		return e.trim().split(/\s+/).length;
	}
	ma(), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Table/TablePlugin.svelte
function SC(e, t) {
	E(t, !0);
	let n = V(t, "hasCellMerge", 3, !0), r = V(t, "hasCellBackgroundColor", 3, !0), i = V(t, "hasTabHandler", 3, !0), a = V(t, "hasHorizontalScroll", 3, !1), o = sh();
	Jn(() => {
		wy(o, a());
	}), Jn(() => Ly(o)), Jn(() => Iy(o, i())), Jn(() => {
		if (!n()) return Fy(o);
	}), Jn(() => {
		if (!r()) return o.registerNodeTransform(Z_, (e) => {
			e.getBackgroundColor() !== null && e.setBackgroundColor(null);
		});
	}), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/portal/Portal.svelte
var CC = /* @__PURE__ */ R("<div><!></div>");
function wC(e, t) {
	E(t, !0);
	let n = V(t, "target", 19, () => globalThis.document?.body), r = V(t, "portalRef", 15);
	vi(() => {
		n() && n().appendChild(r());
	}), yi(() => {
		r()?.parentNode && r().parentNode?.removeChild(r());
	});
	var i = CC();
	_i(N(i), () => t.children ?? v), T(i), fa(i, (e) => r(e), () => r()), z(e, i), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/dropdown/utils.js
var TC = Symbol();
function EC() {
	return nt(TC);
}
function DC(e) {
	rt(TC, e);
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/dropdown/DropDownItems.svelte
var OC = /* @__PURE__ */ R("<div class=\"dropdown svelte-lexical\"><!></div>");
function kC(e, t) {
	E(t, !0);
	let n = V(t, "dropDownRef", 15), r = [], i = /* @__PURE__ */ j(null);
	function a(e) {
		r.push(e);
	}
	DC(a);
	function o(e) {
		if (!r) return;
		let n = e.key;
		if ([
			"Escape",
			"ArrowUp",
			"ArrowDown",
			"Tab"
		].includes(n) && e.preventDefault(), n === "Escape" || n === "Tab") t.onClose();
		else if (n === "ArrowUp") if (I(i) === null) M(i, r[0], !0);
		else {
			let e = r.indexOf(I(i)) - 1;
			M(i, r[e === -1 ? r.length - 1 : e], !0);
		}
		else if (n === "ArrowDown") if (I(i) === null) M(i, r[0], !0);
		else {
			let e = r.indexOf(I(i)) + 1;
			M(i, r[e >= r.length ? 0 : e], !0);
		}
	}
	vi(() => {
		I(i) || M(i, r[0], !0);
	}), Jn(() => {
		I(i)?.focus();
	});
	var s = OC();
	_i(N(s), () => t.children ?? v), T(s), fa(s, (e) => n(e), () => n()), L("keydown", s, o), z(e, s), D();
}
Qr(["keydown"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/dropdown/DropDown.svelte
var AC = /* @__PURE__ */ R("<span></span>"), jC = /* @__PURE__ */ R("<span class=\"text dropdown-button-text\"> </span>"), MC = /* @__PURE__ */ R("<button type=\"button\"><!> <!> <i class=\"chevron-down\"></i></button> <!>", 1);
function NC(e, t) {
	E(t, !0);
	let n = V(t, "disabled", 3, !1), r = V(t, "buttonAriaLabel", 19, () => void 0), i = V(t, "buttonIconClassName", 19, () => void 0), a = V(t, "buttonLabel", 19, () => void 0), o = V(t, "stopCloseOnClickSelf", 3, !1), s = V(t, "title", 19, () => void 0), c = V(t, "target", 19, () => void 0), l = /* @__PURE__ */ j(void 0), u = /* @__PURE__ */ j(void 0), d = /* @__PURE__ */ j(!1);
	function f() {
		M(d, !1), I(u) && I(u).focus();
	}
	Jn(() => {
		if (!Qp || !I(d) || !I(u) || !I(l)) return;
		let { top: e, left: t } = I(u).getBoundingClientRect();
		I(l).style.top = `${e + 42}px`, I(l).style.left = `${Math.min(t, window.innerWidth - I(l).offsetWidth - 20)}px`;
	});
	let p = (e) => {
		let t = e.target;
		cf(t) && (o() && I(l) && I(l).contains(t) || I(u) && !I(u).contains(t) && M(d, !1));
	};
	Jn(() => {
		if (Qp && I(d)) return document.addEventListener("click", p), () => document.removeEventListener("click", p);
	});
	var m = MC(), h = Rn(m), g = N(h), _ = (e) => {
		var t = AC();
		F(() => qi(t, 1, Vi(i()))), z(e, t);
	};
	Ti(g, (e) => {
		i() && e(_);
	});
	var y = P(g, 2), b = (e) => {
		var t = jC(), n = N(t, !0);
		T(t), F(() => di(n, a())), z(e, t);
	};
	Ti(y, (e) => {
		a() && e(b);
	}), Ke(2), T(h), fa(h, (e) => M(u, e), () => I(u));
	var x = P(h, 2), S = (e) => {
		wC(e, {
			get target() {
				return c();
			},
			children: (e, n) => {
				kC(e, {
					onClose: f,
					get dropDownRef() {
						return I(l);
					},
					set dropDownRef(e) {
						M(l, e, !0);
					},
					children: (e, n) => {
						var r = ci();
						_i(Rn(r), () => t.children ?? v), z(e, r);
					},
					$$slots: { default: !0 }
				});
			},
			$$slots: { default: !0 }
		});
	};
	Ti(x, (e) => {
		I(d) && e(S);
	}), F(() => {
		h.disabled = n(), B(h, "aria-label", r() || a()), qi(h, 1, Vi(t.buttonClassName)), B(h, "title", s());
	}), L("click", h, () => M(d, !I(d))), z(e, m), D();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/dropdown/DropDownItem.svelte
var PC = /* @__PURE__ */ R("<button type=\"button\"><!></button>");
function FC(e, t) {
	E(t, !0);
	let n = V(t, "title", 19, () => void 0), r = V(t, "ariaLabel", 19, () => void 0), i = /* @__PURE__ */ j(void 0), a = EC();
	if (a === null) throw Error("DropDownItem must be used within a DropDown");
	vi(() => {
		a(I(i));
	});
	var o = PC();
	_i(N(o), () => t.children ?? v), T(o), fa(o, (e) => M(i, e), () => I(i)), F(() => {
		qi(o, 1, Vi(t.class)), B(o, "title", n()), B(o, "aria-label", r());
	}), L("click", o, function(...e) {
		t.onclick?.apply(this, e);
	}), z(e, o), D();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/button/CloseCircleButton.svelte
var IC = /* @__PURE__ */ oi("<svg id=\"close\" viewBox=\"0 0 12 12\" class=\"svelte-b9foul\"><circle cx=\"6\" cy=\"6\" r=\"6\"></circle><line x1=\"3\" y1=\"3\" x2=\"9\" y2=\"9\" class=\"svelte-b9foul\"></line><line x1=\"9\" y1=\"3\" x2=\"3\" y2=\"9\" class=\"svelte-b9foul\"></line></svg>");
function LC(e, t) {
	var n = IC();
	L("click", n, function(...e) {
		t.onclick?.apply(this, e);
	}), z(e, n);
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/dialog/ModalDialog.svelte
var RC = /* @__PURE__ */ R("<dialog class=\"svelte-6cxtnw\"><div class=\"svelte-6cxtnw\"><!></div></dialog>");
function zC(e, t) {
	E(t, !0);
	let n = V(t, "showModal", 15), r = V(t, "stopPropagation", 3, !0), i = /* @__PURE__ */ j(void 0);
	Jn(() => {
		I(i) && (n() ? I(i).showModal() : I(i).close());
	});
	function a(e) {
		e.target === e.currentTarget && I(i)?.close();
	}
	function o(e) {
		r() && e.stopPropagation(), t.onclick?.(e);
	}
	var s = ci(), c = Rn(s), l = (e) => {
		var r = RC(), s = N(r);
		_i(N(s), () => t.children ?? v), T(s), T(r), fa(r, (e) => M(i, e), () => I(i)), Zr("close", r, () => n(!1)), L("click", r, a), L("click", s, o), z(e, r);
	};
	Ti(c, (e) => {
		n() && e(l);
	}), z(e, s), D();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/colorpicker/helpers.js
var BC = [
	"#d0021b",
	"#f5a623",
	"#f8e71c",
	"#8b572a",
	"#7ed321",
	"#417505",
	"#bd10e0",
	"#9013fe",
	"#4a90e2",
	"#50e3c2",
	"#b8e986",
	"#000000",
	"#4a4a4a",
	"#9b9b9b",
	"#ffffff"
];
function VC(e) {
	if (!e.startsWith("#")) {
		let t = document.createElement("canvas").getContext("2d");
		if (!t) throw Error("2d context not supported or canvas already initialized");
		return t.fillStyle = e, t.fillStyle;
	}
	return e.length === 4 || e.length === 5 ? (e = e.split("").map((e, t) => t ? e + e : "#").join(""), e) : e.length === 7 || e.length === 9 ? e : "#000000";
}
function HC(e) {
	let t = (e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (e, t, n, r) => "#" + t + t + n + n + r + r).substring(1).match(/.{2}/g) || []).map((e) => parseInt(e, 16));
	return {
		b: t[2],
		g: t[1],
		r: t[0]
	};
}
function UC({ r: e, g: t, b: n }) {
	e /= 255, t /= 255, n /= 255;
	let r = Math.max(e, t, n), i = r - Math.min(e, t, n);
	return {
		h: i ? (r === e ? (t - n) / i + (t < n ? 6 : 0) : r === t ? 2 + (n - e) / i : 4 + (e - t) / i) * 60 : 0,
		s: r ? i / r * 100 : 0,
		v: r * 100
	};
}
function WC({ h: e, s: t, v: n }) {
	t /= 100, n /= 100;
	let r = ~~(e / 60), i = e / 60 - r, a = n * (1 - t), o = n * (1 - t * i), s = n * (1 - t * (1 - i)), c = r % 6, l = Math.round([
		n,
		o,
		a,
		a,
		s,
		n
	][c] * 255), u = Math.round([
		s,
		n,
		n,
		o,
		a,
		a
	][c] * 255);
	return {
		b: Math.round([
			a,
			a,
			s,
			n,
			n,
			o
		][c] * 255),
		g: u,
		r: l
	};
}
function GC({ b: e, g: t, r: n }) {
	return "#" + [
		n,
		t,
		e
	].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function KC(e, t) {
	let n = VC("#121212"), r = HC(n), i = UC(r);
	return e === "hex" ? (n = VC(t), r = HC(n), i = UC(r)) : e === "rgb" ? (r = t, n = GC(r), i = UC(r)) : e === "hsv" && (i = t, r = WC(i), n = GC(r)), {
		hex: n,
		hsv: i,
		rgb: r
	};
}
var qC = xt(!1), JC = /* @__PURE__ */ R("<div><!></div>");
function YC(e, t) {
	E(t, !0);
	let [n, r] = Et(), i = V(t, "className", 19, () => void 0), a = V(t, "style", 19, () => void 0), o, s = !1;
	function c(e, t, n) {
		return e > t ? t : e < n ? n : e;
	}
	let l = (e) => {
		if (o) {
			let { width: n, height: r, left: i, top: a } = o.getBoundingClientRect(), s = dm(o), l = c(e.clientX / s - i, n, 0), u = c(e.clientY / s - a, r, 0);
			t.onChange({
				x: l,
				y: u
			});
		}
	}, u = (e) => {
		if (e.button !== 0) return;
		l(e);
		let t = (e) => {
			s = !0, k(qC, !0), l(e);
		}, n = (e) => {
			s && k(qC, !1), document.removeEventListener("mousemove", t, !1), document.removeEventListener("mouseup", n, !1), l(e), s = !1;
		};
		document.addEventListener("mousemove", t, !1), document.addEventListener("mouseup", n, !1);
	};
	var d = JC();
	_i(N(d), () => t.children ?? v), T(d), fa(d, (e) => o = e, () => o), F(() => {
		qi(d, 1, Vi(i()), "svelte-dl9g18"), Yi(d, a());
	}), L("mousedown", d, u), z(e, d), D(), r();
}
Qr(["mousedown"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/input/TextInput.svelte
var XC = /* @__PURE__ */ R("<div class=\"Input__wrapper\"><label class=\"Input__label\"> </label> <input type=\"text\" class=\"Input__input\"/></div>");
function ZC(e, t) {
	E(t, !0);
	let n = V(t, "dataTestId", 19, () => void 0), r = V(t, "placeholder", 3, ""), i = V(t, "value", 15), a = V(t, "id", 3, ""), o = V(t, "onChange", 19, () => void 0), s = V(t, "width", 19, () => void 0);
	var c = XC(), l = N(c), u = N(l, !0);
	T(l);
	var d = P(l, 2);
	ra(d), T(c), F(() => {
		B(l, "for", a()), di(u, t.label), Yi(d, `width: ${s() ?? ""};`), B(d, "placeholder", r()), B(d, "data-test-id", n()), B(d, "id", a());
	}), L("change", d, (e) => {
		o() && o()(e.target.value);
	}), ca(d, i), z(e, c), D();
}
Qr(["change"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/colorpicker/ColorPicker.svelte
var QC = /* @__PURE__ */ R("<button type=\"button\"></button>"), $C = /* @__PURE__ */ R("<div class=\"color-picker-saturation_cursor svelte-1127p7b\"></div>"), ew = /* @__PURE__ */ R("<div class=\"color-picker-hue_cursor svelte-1127p7b\"></div>"), tw = /* @__PURE__ */ R("<div class=\"color-picker-wrapper svelte-1127p7b\"><!> <div class=\"color-picker-basic-color svelte-1127p7b\"></div> <!> <!> <div class=\"color-picker-color svelte-1127p7b\"></div></div>");
function nw(e, t) {
	E(t, !0);
	let n = () => O(qC, "$skipAddingToHistoryStack", r), [r, i] = Et(), a = /* @__PURE__ */ j(En(KC("hex", t.color))), o = /* @__PURE__ */ j(En(t.color)), s = /* @__PURE__ */ j(null), c = /* @__PURE__ */ Gt(() => ({
		x: I(a).hsv.s / 100 * 214,
		y: (100 - I(a).hsv.v) / 100 * 150
	})), l = /* @__PURE__ */ Gt(() => ({ x: I(a).hsv.h / 360 * 214 })), u = (e) => {
		if (M(o, e, !0), /^#[0-9A-Fa-f]{6}$/i.test(e)) {
			let t = KC("hex", e);
			M(a, t, !0);
		}
	}, d = ({ x: e, y: t }) => {
		let n = KC("hsv", {
			...I(a).hsv,
			s: e / 214 * 100,
			v: 100 - t / 150 * 100
		});
		M(a, n, !0), M(o, n.hex, !0);
	}, f = ({ x: e }) => {
		let t = KC("hsv", {
			...I(a).hsv,
			h: e / 214 * 360
		});
		M(a, t, !0), M(o, t.hex, !0);
	};
	Jn(() => {
		I(s) !== null && t.onChange && (t.onChange(I(a).hex, n()), M(o, I(a).hex, !0));
	}), Jn(() => {
		if (t.color) {
			let e = KC("hex", t.color);
			M(a, e, !0), M(o, e.hex, !0);
		}
	});
	var p = tw();
	Yi(p, "width: 214px");
	var m = N(p);
	ZC(m, {
		label: "Hex",
		onChange: u,
		get value() {
			return I(o);
		},
		width: "120px"
	});
	var h = P(m, 2);
	Ai(h, 21, () => BC, Ei, (e, t) => {
		var n = QC();
		F(() => {
			qi(n, 1, Vi(I(t) === I(a).hex ? " active" : ""), "svelte-1127p7b"), Yi(n, `background-color: ${I(t) ?? ""}`);
		}), L("click", n, () => {
			M(o, I(t), !0), M(a, KC("hex", I(t)), !0);
		}), z(e, n);
	}), T(h);
	var g = P(h, 2);
	YC(g, {
		className: "color-picker-saturation",
		get style() {
			return `background-color: hsl(${I(a).hsv.h ?? ""}, 100%, 50%)`;
		},
		onChange: d,
		children: (e, t) => {
			var n = $C();
			F(() => Yi(n, `background-color: ${I(a).hex ?? ""}; left: ${I(c).x ?? ""}px; top: ${I(c).y ?? ""}px`)), z(e, n);
		},
		$$slots: { default: !0 }
	});
	var _ = P(g, 2);
	YC(_, {
		className: "color-picker-hue",
		onChange: f,
		children: (e, t) => {
			var n = ew();
			F(() => Yi(n, `background-color: hsl(${I(a).hsv.h ?? ""}, 100%, 50%); left: ${I(l).x ?? ""}px`)), z(e, n);
		},
		$$slots: { default: !0 }
	});
	var v = P(_, 2);
	T(p), fa(p, (e) => M(s, e), () => I(s)), F(() => Yi(v, `background-color: ${I(a).hex ?? ""}`)), z(e, p), D(), i();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/colorpicker/ColorPickerDialog.svelte
var rw = /* @__PURE__ */ R("<!> <div class=\"modal\"><h2 class=\"Modal__title\"> </h2> <div class=\"Modal__content\"><!></div></div>", 1);
function iw(e, t) {
	E(t, !0);
	let n, r = sh(), i = V(t, "color", 7), a = V(t, "showModal", 15, !1);
	function o(e, t) {
		t && i(t), n = e, a(!0);
	}
	function s() {
		a(!1), iS(r);
	}
	function c(e) {
		n && n(e, !0);
	}
	var l = { open: o };
	return zC(e, {
		get showModal() {
			return a();
		},
		set showModal(e) {
			a(e);
		},
		children: (e, n) => {
			var r = rw(), a = Rn(r);
			LC(a, { onclick: s });
			var o = P(a, 2), l = N(o), u = N(l, !0);
			T(l);
			var d = P(l, 2);
			nw(N(d), {
				get color() {
					return i();
				},
				onChange: c
			}), T(d), T(o), F(() => di(u, t.title)), z(e, r);
		},
		$$slots: { default: !0 }
	}), D(l);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Table/TableActionMenu.svelte
var aw = /* @__PURE__ */ R("<button type=\"button\" class=\"item\" data-test-id=\"table-merge-cells\"><span class=\"text\">Merge cells</span></button>"), ow = /* @__PURE__ */ R("<button type=\"button\" class=\"item\" data-test-id=\"table-unmerge-cells\"><span class=\"text\">Unmerge cells</span></button>"), sw = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon vertical-top\"></i> <span class=\"text\">Top Align</span></div>"), cw = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon vertical-middle\"></i> <span class=\"text\">Middle Align</span></div>"), lw = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon vertical-bottom\"></i> <span class=\"text\">Bottom Align</span></div>"), uw = /* @__PURE__ */ R("<!> <!> <!>", 1), dw = /* @__PURE__ */ R("<div class=\"dropdown svelte-lexical\"><!> <button type=\"button\" class=\"item\" data-test-id=\"table-background-color\"><span class=\"text\">Background color</span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-row-striping\"><span class=\"text\">Toggle Row Striping</span></button> <!> <button type=\"button\" class=\"item\" data-test-id=\"table-freeze-first-row\"><span class=\"text\">Toggle First Row Freeze</span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-freeze-first-column\"><span class=\"text\">Toggle First Column Freeze</span></button> <hr/> <button type=\"button\" class=\"item\" data-test-id=\"table-insert-row-above\"><span class=\"text\"> </span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-insert-row-below\"><span class=\"text\"> </span></button> <hr/> <button type=\"button\" class=\"item\" data-test-id=\"table-insert-column-before\"><span class=\"text\"> </span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-insert-column-after\"><span class=\"text\"> </span></button> <hr/> <button type=\"button\" class=\"item\" data-test-id=\"table-delete-columns\"><span class=\"text\">Delete column</span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-delete-rows\"><span class=\"text\">Delete row</span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-delete\"><span class=\"text\">Delete table</span></button> <hr/> <button type=\"button\" class=\"item\" data-test-id=\"table-row-header\"><span class=\"text\"> </span></button> <button type=\"button\" class=\"item\" data-test-id=\"table-column-header\"><span class=\"text\"> </span></button></div>");
function fw(e, t) {
	E(t, !0);
	let n = () => O(h, "$backgroundColor", r), [r, i] = Et(), a = sh(), o = /* @__PURE__ */ j(null), s = /* @__PURE__ */ j(En(t._tableCellNode)), c = /* @__PURE__ */ j(En({
		columns: 1,
		rows: 1
	})), l = /* @__PURE__ */ j(!1), u = /* @__PURE__ */ j(!1);
	function d(e) {
		return e.getEditorState().read(() => {
			let e = K();
			if (G(e) || Fv(e)) {
				let [t] = Av(e.anchor);
				if (Q(t)) return t.getBackgroundColor();
			}
			return null;
		});
	}
	function f(e) {
		let t = e.getShape();
		return {
			columns: t.toX - t.fromX + 1,
			rows: t.toY - t.fromY + 1
		};
	}
	function p() {
		let e = K();
		if (G(e) && !e.isCollapsed() || Fv(e) && !e.anchor.is(e.focus) || !G(e) && !Fv(e)) return !1;
		let [t] = Av(e.anchor);
		return t.__colSpan > 1 || t.__rowSpan > 1;
	}
	function m(e) {
		let t = e.getLastDescendant();
		W(t) ? t.select() : q(t) ? t.selectEnd() : t !== null && t.selectNext();
	}
	let h = xt(d(a) || "");
	vi(() => (a.getEditorState().read(() => {
		let e = K();
		if (Fv(e)) {
			let t = f(e);
			M(c, f(e), !0), M(l, t.columns > 1 || t.rows > 1, !0);
		}
		M(u, p(), !0);
	}), Cp(a.registerMutationListener(Z_, (e) => {
		e.get(I(s).getKey()) === "updated" && (a.getEditorState().read(() => {
			M(s, I(s).getLatest(), !0);
		}), k(h, d(a) || ""));
	}, { skipInitialization: !0 })))), Jn(() => {
		let e = t.contextRef, n = I(o), r = a.getRootElement();
		if (e != null && n != null && r != null) {
			let t = r.getBoundingClientRect(), i = e.getBoundingClientRect();
			n.style.opacity = "1";
			let a = n.getBoundingClientRect(), o = i.right + 5;
			if (o + a.width > window.innerWidth || o + a.width > t.right) {
				let e = i.left - a.width - 5;
				o = (e < 0 ? 5 : e) + window.pageXOffset;
			}
			n.style.left = `${o + window.pageXOffset}px`;
			let s = i.top;
			if (s + a.height > window.innerHeight) {
				let e = i.bottom - a.height;
				s = e < 0 ? 5 : e;
			}
			n.style.top = `${s}px`;
		}
	});
	function g(e) {
		I(o) != null && t.contextRef != null && cf(e.target) && !I(o).contains(e.target) && !t.contextRef.contains(e.target) && t.setIsMenuOpen(!1);
	}
	vi(() => (window.addEventListener("click", g), () => window.removeEventListener("click", g)));
	let _ = () => {
		a.update(() => {
			if (I(s).isAttached()) {
				let e = fv(I(s)), t = Uv(e, a.getElementByKey(e.getKey()));
				if (!t) throw Error("Expected to find tableElement in DOM");
				let n = Xv(t);
				n !== null && n.$clearHighlight(), e.markDirty(), M(s, I(s).getLatest(), !0);
			}
			vd(null);
		});
	}, v = () => {
		a.update(() => {
			let e = K();
			if (!Fv(e)) return;
			let n = wv(e.getNodes().filter(Q));
			n && (m(n), t.onClose());
		});
	}, y = () => {
		a.update(() => {
			Ev();
		});
	}, b = (e) => {
		a.update(() => {
			for (let t = 0; t < I(c).rows; t++) gv(e);
			t.onClose();
		});
	}, x = (e) => {
		a.update(() => {
			for (let t = 0; t < I(c).columns; t++) vv(e);
			t.onClose();
		});
	}, S = () => {
		a.update(() => {
			bv(), t.onClose();
		});
	}, C = () => {
		a.update(() => {
			fv(I(s)).remove(), _(), t.onClose();
		});
	}, ee = () => {
		a.update(() => {
			xv(), t.onClose();
		});
	}, te = () => {
		a.update(() => {
			let e = fv(I(s)), n = pv(I(s)), [r] = kv(e, null, null), i = /* @__PURE__ */ new Set(), a = I(s).getHeaderStyles() ^ X_.ROW;
			for (let e = 0; e < r[n].length; e++) {
				let t = r[n][e];
				t?.cell && (i.has(t.cell) || (i.add(t.cell), t.cell.setHeaderStyles(a, X_.ROW)));
			}
			_(), t.onClose();
		});
	}, ne = () => {
		a.update(() => {
			let e = fv(I(s)), n = mv(I(s)), [r] = kv(e, null, null), i = /* @__PURE__ */ new Set(), a = I(s).getHeaderStyles() ^ X_.COLUMN;
			for (let e = 0; e < r.length; e++) {
				let t = r[e][n];
				t?.cell && (i.has(t.cell) || (i.add(t.cell), t.cell.setHeaderStyles(a, X_.COLUMN)));
			}
			_(), t.onClose();
		});
	}, re = () => {
		a.update(() => {
			if (I(s).isAttached()) {
				let e = fv(I(s));
				e && e.setRowStriping(!e.getRowStriping());
			}
			_(), t.onClose();
		});
	}, ie = () => {
		a.update(() => {
			if (I(s).isAttached()) {
				let e = fv(I(s));
				e && e.setFrozenRows(+(e.getFrozenRows() === 0));
			}
			_(), t.onClose();
		});
	}, ae = () => {
		a.update(() => {
			if (I(s).isAttached()) {
				let e = fv(I(s));
				e && e.setFrozenColumns(+(e.getFrozenColumns() === 0));
			}
			_(), t.onClose();
		});
	}, oe = (e) => {
		a.update(() => {
			let t = K();
			if (G(t) || Fv(t)) {
				let [n] = Av(t.anchor);
				if (Q(n) && n.setBackgroundColor(e), Fv(t)) {
					let n = t.getNodes();
					for (let t = 0; t < n.length; t++) {
						let r = n[t];
						Q(r) && r.setBackgroundColor(e);
					}
				}
			}
		});
	}, se = (e) => {
		a.update(() => {
			let t = K();
			if (G(t) || Fv(t)) {
				let [n] = Av(t.anchor);
				if (Q(n) && n.setVerticalAlign(e), Fv(t)) {
					let n = t.getNodes();
					for (let t = 0; t < n.length; t++) {
						let r = n[t];
						Q(r) && r.setVerticalAlign(e);
					}
				}
			}
		});
	};
	wC(e, {
		children: (e, r) => {
			var i = dw(), a = N(i), d = (e) => {
				var t = ci(), n = Rn(t), r = (e) => {
					var t = aw();
					L("click", t, () => v()), z(e, t);
				}, i = (e) => {
					var t = ow();
					L("click", t, () => y()), z(e, t);
				};
				Ti(n, (e) => {
					I(l) ? e(r) : I(u) && e(i, 1);
				}), z(e, t);
			};
			Ti(a, (e) => {
				t.cellMerge && e(d);
			});
			var f = P(a, 2), p = P(f, 2), m = P(p, 2);
			NC(m, {
				buttonLabel: "Vertical Align",
				buttonClassName: "item",
				buttonAriaLabel: "Formatting options for vertical alignment",
				children: (e, t) => {
					var n = uw(), r = Rn(n);
					FC(r, {
						onclick: () => {
							se("top");
						},
						class: "item wide",
						children: (e, t) => {
							z(e, sw());
						},
						$$slots: { default: !0 }
					});
					var i = P(r, 2);
					FC(i, {
						onclick: () => {
							se("middle");
						},
						class: "item wide",
						children: (e, t) => {
							z(e, cw());
						},
						$$slots: { default: !0 }
					}), FC(P(i, 2), {
						onclick: () => {
							se("bottom");
						},
						class: "item wide",
						children: (e, t) => {
							z(e, lw());
						},
						$$slots: { default: !0 }
					}), z(e, n);
				},
				$$slots: { default: !0 }
			});
			var h = P(m, 2), g = P(h, 2), _ = P(g, 4), ce = N(_), le = N(ce);
			T(ce), T(_);
			var ue = P(_, 2), de = N(ue), fe = N(de);
			T(de), T(ue);
			var pe = P(ue, 4), me = N(pe), he = N(me);
			T(me), T(pe);
			var ge = P(pe, 2), _e = N(ge), ve = N(_e);
			T(_e), T(ge);
			var ye = P(ge, 4), be = P(ye, 2), xe = P(be, 2), Se = P(xe, 4), Ce = N(Se), we = N(Ce);
			T(Ce), T(Se);
			var Te = P(Se, 2), Ee = N(Te), De = N(Ee);
			T(Ee), T(Te), T(i), fa(i, (e) => M(o, e), () => I(o)), F(() => {
				di(le, `Insert
        ${I(c).rows === 1 ? "row" : `${I(c).rows} rows`}
        above`), di(fe, `Insert
        ${I(c).rows === 1 ? "row" : `${I(c).rows} rows`}
        below`), di(he, `Insert
        ${I(c).columns === 1 ? "column" : `${I(c).columns} columns`}
        left`), di(ve, `Insert
        ${I(c).columns === 1 ? "column" : `${I(c).columns} columns`}
        right`), di(we, `${(I(s).__headerState & X_.ROW) === X_.ROW ? "Remove" : "Add"}
        row header`), di(De, `${(I(s).__headerState & X_.COLUMN) === X_.COLUMN ? "Remove" : "Add"}
        column header`);
			}), L("click", i, (e) => {
				e.stopPropagation();
			}), L("click", f, () => {
				t.setIsMenuOpen(!1), t.colorPicker.open(oe, n());
			}), L("click", p, () => re()), L("click", h, () => ie()), L("click", g, () => ae()), L("click", _, () => b(!1)), L("click", ue, () => b(!0)), L("click", pe, () => x(!1)), L("click", ge, () => x(!0)), L("click", ye, () => ee()), L("click", be, () => S()), L("click", xe, () => C()), L("click", Se, () => te()), L("click", Te, () => ne()), z(e, i);
		},
		$$slots: { default: !0 }
	}), D(), i();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Table/TableActionMenuPlugin.svelte
var pw = /* @__PURE__ */ R("<button type=\"button\" class=\"table-cell-action-button chevron-down\"><i class=\"chevron-down\"></i></button> <!>", 1), mw = /* @__PURE__ */ R("<div class=\"table-cell-action-button-container\"><!></div> <!>", 1);
function hw(e, t) {
	E(t, !0);
	let n = () => O(u, "$isMenuOpen", i), r = () => O(s, "$isEditable", i), [i, a] = Et(), o = sh(), s = lh(), c = /* @__PURE__ */ j(null), l = /* @__PURE__ */ j(null), u = xt(!1), d = /* @__PURE__ */ j(null), f = (e) => {
		let t = e.closest(".PlaygroundEditorTheme__tableScrollableWrapper");
		if (t) {
			let n = t.getBoundingClientRect(), r = e.getBoundingClientRect().right - 5, i = r - 28;
			if (r > n.right || i < n.left) return !0;
		}
		return !1;
	}, p = () => {
		let e = I(c), n = K(), r = window.getSelection(), i = document.activeElement;
		function a() {
			e && (e.classList.remove("table-cell-action-button-container--active"), e.classList.add("table-cell-action-button-container--inactive")), M(d, null);
		}
		if (n == null || e == null) return a();
		let s = o.getRootElement(), l = null, u = null;
		if (G(n) && s !== null && r !== null && s.contains(r.anchorNode)) {
			let e = uv(n.anchor.getNode());
			if (e == null || (u = o.getElementByKey(e.getKey()), u == null || !e.isAttached()) || f(u)) return a();
			let t = fv(e), r = Uv(t, o.getElementByKey(t.getKey()));
			if (!r) throw Error("Expected to find tableElement in DOM");
			l = Xv(r), M(d, e, !0);
		} else if (Fv(n)) {
			let e = uv(n.anchor.getNode());
			if (!Q(e)) throw Error("TableSelection anchorNode must be a TableCellNode");
			let t = fv(e), r = Uv(t, o.getElementByKey(t.getKey()));
			if (!r) throw Error("Expected to find tableElement in DOM");
			if (l = Xv(r), u = o.getElementByKey(e.getKey()), u === null || f(u)) return a();
		} else if (!i) return a();
		if (l === null || u === null) return a();
		let p = !l || !l.isSelecting;
		if (e.classList.toggle("table-cell-action-button-container--active", p), e.classList.toggle("table-cell-action-button-container--inactive", !p), p) {
			let n = u.getBoundingClientRect(), r = t.anchorElem.getBoundingClientRect(), i = n.top - r.top, a = n.right - r.left;
			e.style.transform = `translate(${a}px, ${i}px)`;
		}
	};
	Jn(() => {
		let e, t = () => {
			e = void 0, o.getEditorState().read(p);
		}, n = () => (e === void 0 && (e = setTimeout(t, 0)), !1);
		return Cp(o.registerUpdateListener(n), o.registerCommand(ss, n, 4), o.registerRootListener((e, t) => {
			t && t.removeEventListener("pointerup", n), e && (e.addEventListener("pointerup", n), n());
		}), () => clearTimeout(e));
	});
	let m = /* @__PURE__ */ j(En(I(d)));
	Jn(() => {
		I(m) !== I(d) && (k(u, !1), M(m, I(d), !0));
	});
	let h = /* @__PURE__ */ j(void 0);
	var g = ci(), _ = Rn(g), v = (e) => {
		var r = mw(), i = Rn(r), a = N(i), o = (e) => {
			var r = pw(), i = Rn(r);
			fa(i, (e) => M(l, e), () => I(l));
			var a = P(i, 2), o = (e) => {
				fw(e, {
					get contextRef() {
						return I(l);
					},
					setIsMenuOpen: (e) => k(u, e),
					onClose: () => k(u, !1),
					get _tableCellNode() {
						return I(d);
					},
					get cellMerge() {
						return t.cellMerge;
					},
					get colorPicker() {
						return I(h);
					}
				});
			};
			Ti(a, (e) => {
				n() && e(o);
			}), L("click", i, (e) => {
				e.stopPropagation(), k(u, !n());
			}), z(e, r);
		};
		Ti(a, (e) => {
			I(d) != null && e(o);
		}), T(i), fa(i, (e) => M(c, e), () => I(c));
		var s = P(i, 2), f = (e) => {
			fa(iw(e, {
				title: "Cell background color",
				color: "white"
			}), (e) => M(h, e, !0), () => I(h));
		};
		Ti(s, (e) => {
			Qp && e(f);
		}), z(e, r);
	};
	Ti(_, (e) => {
		r() && e(v);
	}), z(e, g), D(), a();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/util/getThemeSelector.js
function gw(e) {
	return e ? e.split(/\s+/g).map((e) => `.${e}`).join() : "";
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Table/TableHoverActionPlugin.svelte
var _w = /* @__PURE__ */ R("<button type=\"button\"></button>"), vw = /* @__PURE__ */ R("<!> <!>", 1);
function yw(e, t) {
	E(t, !0);
	let n = () => O(u, "$isShownRow", o), r = () => O(d, "$isShownColumn", o), i = () => O(p, "$position", o), a = () => O(l, "$isEditable", o), [o, s] = Et(), c = sh(), l = lh(), u = xt(!1), d = xt(!1), f = /* @__PURE__ */ j(!1), p = xt(""), m = /* @__PURE__ */ new Set(), h = null;
	function g(e) {
		let t = e.target;
		if (sf(t)) {
			let e = gw(c._config.theme.tableCell), n = t.closest(`td${e}, th${e}`);
			return {
				isOutside: !(n || t.closest(`button${gw(c._config.theme.tableAddRows)}`) || t.closest(`button${gw(c._config.theme.tableAddColumns)}`) || t.closest("div.SL_Theme__tableCellResizer")),
				tableDOMNode: n
			};
		}
		return {
			isOutside: !0,
			tableDOMNode: null
		};
	}
	let _ = gC((e) => {
		let { isOutside: n, tableDOMNode: r } = g(e);
		if (n) {
			k(u, !1), k(d, !1);
			return;
		}
		if (!r) return;
		h = r;
		let i = null, a = null, o = null;
		if (c.getEditorState().read(() => {
			let e = pd(r);
			if (Q(e)) {
				let t = X(e, (e) => ky(e));
				if (!ky(t)) return;
				if (o = Uv(t, c.getElementByKey(t.getKey())), o) {
					let n = t.getChildrenSize(), r = t.getChildAtIndex(0)?.getChildrenSize(), o = pv(e), s = mv(e);
					o === n - 1 ? i = e : s === r - 1 && (a = e);
				}
			}
		}, { editor: c }), o) {
			let { width: e, y: n, right: r, left: s, bottom: c, height: l } = o.getBoundingClientRect(), f = o.parentElement, m = !1;
			f && f.classList.contains("PlaygroundEditorTheme__tableScrollableWrapper") && (m = f.scrollWidth > f.clientWidth);
			let { y: h, left: g } = t.anchorElem.getBoundingClientRect();
			i ? (k(d, !1), k(u, !0), k(p, `height: 20px; left: ${m && f ? f.offsetLeft : s - g}px; top: ${c - h + 5}px; width: ${m && f ? f.offsetWidth : e}px;`)) : a && (k(d, !0), k(u, !1), k(p, `height: ${l}px; left: ${r - g + 5}px; top: ${n - h}px; width: 20px;`));
		}
	}, 50, 250);
	Jn(() => {
		if (Qp) {
			if (!I(f)) {
				k(u, !1), k(d, !1), _.cancel(), document.removeEventListener("mousemove", _);
				return;
			}
			return document.addEventListener("mousemove", _), () => document.removeEventListener("mousemove", _);
		}
	}), yi(() => {
		k(u, !1), k(d, !1), _.cancel(), Qp && document.removeEventListener("mousemove", _);
	}), vi(() => {
		let e = new ResizeObserver(() => {
			k(u, !1), k(d, !1);
		});
		return Cp(c.registerMutationListener(Ty, (t) => {
			c.getEditorState().read(() => {
				let n = !1;
				for (let [e, r] of t) switch (r) {
					case "created":
						m.add(e), n = !0;
						break;
					case "destroyed": m.delete(e), n = !0;
				}
				if (n) {
					e.disconnect();
					for (let t of m) {
						let { tableElement: n } = zv(t);
						e.observe(n);
					}
					M(f, m.size > 0);
				}
			}, { editor: c });
		}, { skipInitialization: !1 }));
	});
	let v = (e) => {
		c.update(() => {
			h && (pd(h)?.selectEnd(), e ? (gv(), k(u, !1)) : (vv(), k(d, !1)));
		});
	};
	var y = ci(), b = Rn(y), x = (e) => {
		var t = vw(), a = Rn(t), o = (e) => {
			var t = _w();
			F(() => {
				qi(t, 1, `${c._config.theme.tableAddRows}`), Yi(t, i());
			}), L("click", t, () => v(!0)), z(e, t);
		};
		Ti(a, (e) => {
			n() && e(o);
		});
		var s = P(a, 2), l = (e) => {
			var t = _w();
			F(() => {
				qi(t, 1, `${c._config.theme.tableAddColumns}`), Yi(t, i());
			}), L("click", t, () => v(!1)), z(e, t);
		};
		Ti(s, (e) => {
			r() && e(l);
		}), z(e, t);
	};
	Ti(b, (e) => {
		a() && e(x);
	}), z(e, y), D(), s();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/util/cssStylesUtil.js
function bw(e) {
	return Object.entries(e).map(([e, t]) => `${e}:${t}`).join(";");
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/Table/TableCellResizerPlugin.svelte
var xw = /* @__PURE__ */ R("<div class=\"SL_Theme__tableCellResizer svelte-q9a8wg\" role=\"button\" tabindex=\"-1\"></div> <div class=\"SL_Theme__tableCellResizer svelte-q9a8wg\" role=\"button\" tabindex=\"-1\"></div>", 1), Sw = /* @__PURE__ */ R("<div><!></div>");
function Cw(e, t) {
	E(t, !0);
	let n = sh(), r = null, i = null, a = null, o = /* @__PURE__ */ j(!1), s = null, c = /* @__PURE__ */ j(null), l = /* @__PURE__ */ j(null), u = /* @__PURE__ */ j(null), d = () => {
		M(l, null), r = null, M(u, null), s = null, a = null;
	};
	Jn(() => {
		let e = /* @__PURE__ */ new Set();
		return Cp(n.registerMutationListener(Ty, (t) => {
			for (let [n, r] of t) r === "destroyed" ? e.delete(n) : e.add(n);
			M(o, e.size > 0);
		}), n.registerNodeTransform(Ty, (e) => {
			if (e.getColWidths()) return e;
			let t = e.getColumnCount();
			return e.setColWidths(Array(t).fill(92)), e;
		}));
	}), Jn(() => {
		if (!I(o)) return;
		let e = (e) => {
			let t = e.target;
			if (sf(t)) {
				if (I(u)) {
					e.preventDefault(), e.stopPropagation(), M(c, {
						x: e.clientX,
						y: e.clientY
					}, !0);
					return;
				}
				if (!(i && i.contains(t)) && r !== t) {
					r = t;
					let e = Zv(t);
					e && I(l) !== e ? n.getEditorState().read(() => {
						let i = pd(e.elem);
						if (!i) throw Error("TableCellResizer: Table cell node not found.");
						let o = fv(i), s = Uv(o, n.getElementByKey(o.getKey()));
						if (!s) throw Error("TableCellResizer: Table element not found.");
						r = t, a = s.getBoundingClientRect(), M(l, e);
					}, { editor: n }) : e ?? d();
				}
			}
		}, t = (t) => {
			t.pointerType === "touch" && e(t);
		}, s = i;
		s?.addEventListener("pointermove", e, { capture: !0 });
		let f = n.registerRootListener((n, r) => {
			r?.removeEventListener("pointermove", e), r?.removeEventListener("pointerdown", t), n?.addEventListener("pointermove", e), n?.addEventListener("pointerdown", t);
		});
		return () => {
			f(), s?.removeEventListener("pointermove", e);
		};
	});
	let f = (e) => e === "bottom", p = (e) => {
		n.update(() => {
			if (!I(l)) throw Error("TableCellResizer: Expected active cell.");
			let t = pd(I(l).elem);
			if (!Q(t)) throw Error("TableCellResizer: Table cell node not found.");
			let r = fv(t), i = pv(t), a = r.getChildren(), o = t.getColSpan() === r.getColumnCount() ? i : i + t.getRowSpan() - 1;
			if (o >= a.length || o < 0) throw Error("Expected table cell to be inside of table row.");
			let s = a[o];
			if (!av(s)) throw Error("Expected table row");
			let c = s.getHeight();
			if (c === void 0) {
				let e = s.getChildren();
				c = Math.min(...e.map((e) => m(e, n) ?? Infinity));
			}
			let u = Math.max(c + e, 33);
			s.setHeight(u);
		}, { tag: Wc });
	}, m = (e, t) => t.getElementByKey(e.getKey())?.clientHeight, h = (e, t) => {
		for (let n = 0; n < t.length; n++) for (let r = 0; r < t[n].length; r++) if (t[n][r].cell === e) return r;
	}, g = (e) => {
		n.update(() => {
			if (!I(l)) throw Error("TableCellResizer: Expected active cell.");
			let t = pd(I(l).elem);
			if (!Q(t)) throw Error("TableCellResizer: Table cell node not found.");
			let n = fv(t), [r] = kv(n, null, null), i = h(t, r);
			if (i === void 0) throw Error("TableCellResizer: Table column not found.");
			let a = n.getColWidths();
			if (!a) return;
			let o = a[i];
			if (o === void 0) return;
			let s = [...a];
			s[i] = Math.max(o + e, 92), n.setColWidths(s);
		}, { tag: Wc });
	}, _ = (e) => {
		let t = (n) => {
			if (n.preventDefault(), n.stopPropagation(), !I(l)) throw Error("TableCellResizer: Expected active cell.");
			if (s) {
				let { x: r, y: i } = s;
				if (I(l) === null) return;
				let a = dm(n.target);
				if (f(e)) {
					let e = (n.clientY - i) / a;
					p(e);
				} else {
					let e = (n.clientX - r) / a;
					g(e);
				}
				d(), document.removeEventListener("pointerup", t);
			}
		};
		return t;
	}, v = (e) => (t) => {
		if (t.preventDefault(), t.stopPropagation(), !I(l)) throw Error("TableCellResizer: Expected active cell.");
		s = {
			x: t.clientX,
			y: t.clientY
		}, M(c, s, !0), M(u, e, !0), document.addEventListener("pointerup", _(e));
	}, y = () => {
		if (I(l)) {
			let { height: e, width: t, top: n, left: r } = I(l).elem.getBoundingClientRect(), i = dm(I(l).elem), o = {
				bottom: {
					"background-color": "none",
					cursor: "row-resize",
					height: "16px",
					left: `${window.scrollX + r}px`,
					top: `${window.scrollY + n + e - 16 / 2}px`,
					width: `${t}px`
				},
				right: {
					"background-color": "none",
					cursor: "col-resize",
					height: `${e}px`,
					left: `${window.scrollX + r + t - 16 / 2}px`,
					top: `${window.scrollY + n}px`,
					width: "16px"
				}
			}, s = a;
			return I(u) && I(c) && s && (f(I(u)) ? (o[I(u)].left = `${window.scrollX + s.left}px`, o[I(u)].top = `${window.scrollY + I(c).y / i}px`, o[I(u)].height = "3px", o[I(u)].width = `${s.width}px`) : (o[I(u)].top = `${window.scrollY + s.top}px`, o[I(u)].left = `${window.scrollX + I(c).x / i}px`, o[I(u)].width = "3px", o[I(u)].height = `${s.height}px`), o[I(u)]["background-color"] = "#adf", o[I(u)]["mix-blend-mode"] = "unset"), o;
		}
		return {
			bottom: null,
			left: null,
			right: null,
			top: null
		};
	}, b = /* @__PURE__ */ Gt(() => I(l) ? y() : {
		bottom: null,
		left: null,
		right: null,
		top: null
	});
	wC(e, {
		children: (e, t) => {
			var n = Sw(), r = N(n), a = (e) => {
				var t = xw(), n = Rn(t), r = /* @__PURE__ */ Gt(() => v("right")), i = P(n, 2), a = /* @__PURE__ */ Gt(() => v("bottom"));
				F((e, t) => {
					Yi(n, e), Yi(i, t);
				}, [() => I(b).right ? bw(I(b).right) : void 0, () => I(b).bottom ? bw(I(b).bottom) : void 0]), L("pointerdown", n, function(...e) {
					I(r)?.apply(this, e);
				}), L("pointerdown", i, function(...e) {
					I(a)?.apply(this, e);
				}), z(e, t);
			};
			Ti(r, (e) => {
				I(l) != null && e(a);
			}), T(n), fa(n, (e) => i = e, () => i), z(e, n);
		},
		$$slots: { default: !0 }
	}), D();
}
Qr(["pointerdown"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/shortcuts.js
var ww = Object.freeze({
	NORMAL: $p ? "⌘+Opt+0" : "Ctrl+Alt+0",
	HEADING1: $p ? "⌘+Opt+1" : "Ctrl+Alt+1",
	HEADING2: $p ? "⌘+Opt+2" : "Ctrl+Alt+2",
	HEADING3: $p ? "⌘+Opt+3" : "Ctrl+Alt+3",
	NUMBERED_LIST: $p ? "⌘+Shift+7" : "Ctrl+Shift+7",
	BULLET_LIST: $p ? "⌘+Shift+8" : "Ctrl+Shift+8",
	CHECK_LIST: $p ? "⌘+Shift+9" : "Ctrl+Shift+9",
	CODE_BLOCK: $p ? "⌘+Opt+C" : "Ctrl+Alt+C",
	QUOTE: $p ? "⌃+Shift+Q" : "Ctrl+Shift+Q",
	ADD_COMMENT: $p ? "⌘+Opt+M" : "Ctrl+Alt+M",
	INCREASE_FONT_SIZE: $p ? "⌘+Shift+." : "Ctrl+Shift+.",
	DECREASE_FONT_SIZE: $p ? "⌘+Shift+," : "Ctrl+Shift+,",
	INSERT_CODE_BLOCK: $p ? "⌘+Shift+C" : "Ctrl+Shift+C",
	STRIKETHROUGH: $p ? "⌘+Shift+X" : "Ctrl+Shift+X",
	LOWERCASE: $p ? "⌃+Shift+1" : "Ctrl+Shift+1",
	UPPERCASE: $p ? "⌃+Shift+2" : "Ctrl+Shift+2",
	CAPITALIZE: $p ? "⌃+Shift+3" : "Ctrl+Shift+3",
	CENTER_ALIGN: $p ? "⌘+Shift+E" : "Ctrl+Shift+E",
	JUSTIFY_ALIGN: $p ? "⌘+Shift+J" : "Ctrl+Shift+J",
	LEFT_ALIGN: $p ? "⌘+Shift+L" : "Ctrl+Shift+L",
	RIGHT_ALIGN: $p ? "⌘+Shift+R" : "Ctrl+Shift+R",
	SUBSCRIPT: $p ? "⌘+," : "Ctrl+,",
	SUPERSCRIPT: $p ? "⌘+." : "Ctrl+.",
	INDENT: $p ? "⌘+]" : "Ctrl+]",
	OUTDENT: $p ? "⌘+[" : "Ctrl+[",
	CLEAR_FORMATTING: $p ? "⌘+\\" : "Ctrl+\\",
	REDO: $p ? "⌘+Shift+Z" : "Ctrl+Y",
	UNDO: $p ? "⌘+Z" : "Ctrl+Z",
	BOLD: $p ? "⌘+B" : "Ctrl+B",
	ITALIC: $p ? "⌘+I" : "Ctrl+I",
	UNDERLINE: $p ? "⌘+U" : "Ctrl+U",
	INSERT_LINK: $p ? "⌘+K" : "Ctrl+K"
});
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/TabIndentationPlugin.svelte
function Tw(e, t) {
	E(t, !0);
	function n(e) {
		if (cm(e.getNodes(), (e) => Ml(e) && e.canIndent() ? e : null).length > 0) return !0;
		let t = e.anchor, n = e.focus, r = n.isBefore(t) ? n : t, i = rm(r.getNode());
		if (i.canIndent()) {
			let e = i.getKey(), t = Pl();
			if (t.anchor.set(e, 0, "element"), t.focus.set(e, 0, "element"), t = To(t), t.anchor.is(r)) return !0;
		}
		return !1;
	}
	function r(e, t) {
		return Cp(e.registerCommand(Ls, (t) => {
			let r = K();
			if (!G(r)) return !1;
			t.preventDefault();
			let i = n(r) ? t.shiftKey ? Bs : zs : Rs;
			return e.dispatchCommand(i, void 0);
		}, 0), e.registerCommand(zs, () => {
			if (t == null) return !1;
			let e = K();
			if (!G(e)) return !1;
			let n = e.getNodes().map((e) => rm(e).getIndent());
			return Math.max(...n) + 1 >= t;
		}, 4));
	}
	let i = V(t, "maxIndent", 3, 7), a = sh();
	vi(() => r(a, i())), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/ComponentPicker/ComponentPickerMenuItem.svelte
Qr(["click"]);
//#endregion
//#region node_modules/@lexical/markdown/LexicalMarkdown.prod.mjs
function Ew(e, t) {
	let n = {};
	for (let r of e) {
		let e = t(r);
		e && (n[e] ? n[e].push(r) : n[e] = [r]);
	}
	return n;
}
function Dw(e) {
	let t = Ew(e, (e) => e.type);
	return {
		element: t.element || [],
		multilineElement: t["multiline-element"] || [],
		textFormat: t["text-format"] || [],
		textMatch: t["text-match"] || []
	};
}
var Ow = /[!-/:-@[-`{-~\s]/, kw = /[ \t\n\r\f]/, Aw = /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~]/, jw = /^\s{0,3}$/;
function Mw(e) {
	if (!Pu(e)) return !1;
	let t = e.getFirstChild();
	return t == null || e.getChildrenSize() === 1 && W(t) && jw.test(t.getTextContent());
}
function Nw(e, t, n, r) {
	for (let i of t) {
		if (!i.export) continue;
		let t = i.export(e, (e) => Pw(e, n, r));
		if (t != null) return t;
	}
	return q(e) ? Pw(e, n, r) : wu(e) ? e.getTextContent() : null;
}
function Pw(e, t, n, r, i) {
	let a = [], o = e.getChildren();
	r ||= [], i ||= [];
	t: for (let e of o) {
		for (let o of n) {
			if (!o.export) continue;
			let s = o.export(e, (e) => Pw(e, t, n, r, [...i, ...r]), (e, n) => Fw(e, n, t, r, i));
			if (s != null) {
				a.push(s);
				continue t;
			}
		}
		Jc(e) ? a.push("\n") : W(e) ? a.push(Fw(e, e.getTextContent(), t, r, i)) : q(e) ? a.push(Pw(e, t, n, r, i)) : wu(e) && a.push(e.getTextContent());
	}
	return a.join("");
}
function Fw(e, t, n, r, i) {
	let a = e.getFormat() === 0 ? t : function(e) {
		return e.replace(/^\s+|\s+$/g, (e) => [...e].map((e) => "&#" + e.codePointAt(0) + ";").join(""));
	}(t);
	e.hasFormat("code") || (a = a.replace(/([*_`~\\])/g, "\\$1"));
	let o = "", s = "", c = "", l = Iw(e, !0), u = Iw(e, !1), d = /* @__PURE__ */ new Set();
	for (let t of n) {
		let n = t.format[0], i = t.tag;
		Lw(e, n) && !d.has(n) && (d.add(n), Lw(l, n) && r.find((e) => e.tag === i) || (r.push({
			format: n,
			tag: i
		}), o += i));
	}
	for (let t = 0; t < r.length; t++) {
		let n = Lw(e, r[t].format), a = Lw(u, r[t].format);
		if (n && a) continue;
		let o = [...r];
		for (; o.length > t;) {
			let e = o.pop();
			i && e && i.find((t) => t.tag === e.tag) || (e && typeof e.tag == "string" && (n ? a || (c += e.tag) : s += e.tag), r.pop());
		}
		break;
	}
	return a = o + a + c, s + a;
}
function Iw(e, t) {
	let n = t ? e.getPreviousSibling() : e.getNextSibling();
	return W(n) ? n : null;
}
function Lw(e, t) {
	return W(e) && e.hasFormat(t);
}
function Rw(e, t) {
	let n = e.getTextContent(), r = t.fullMatchRegExpByTag["`"], i = t.transformersByTag["`"], a = [], o = null;
	if (r && i) {
		let e = new RegExp(r.source, "g"), t = Array.from(n.matchAll(e));
		for (let e of t) {
			let t = e.index, n = t + e[0].length;
			o ||= {
				content: e[2],
				endIndex: n,
				startIndex: t,
				tag: "`"
			}, a.push({
				end: n,
				start: t
			});
		}
	}
	let s = function(e, t, n = []) {
		let r = [], i = new Set(Object.keys(t.transformersByTag).filter((e) => e[0] !== "`").map((e) => e[0])), a = (t) => {
			let n = 0;
			for (let r = t - 1; r >= 0 && e[r] === "\\"; r--) n++;
			return n % 2 == 1;
		}, o = (e) => n.some((t) => e >= t.start && e < t.end), s = 0;
		for (; s < e.length;) {
			let t = e[s];
			if (!i.has(t) || a(s) || o(s)) {
				s++;
				continue;
			}
			let n = 1;
			for (; s + n < e.length && e[s + n] === t;) n++;
			let c = zw(t, e, s, n, !0), l = zw(t, e, s, n, !1);
			(c || l) && r.push({
				active: !0,
				canClose: l,
				canOpen: c,
				char: t,
				index: s,
				length: n,
				originalLength: n
			}), s += n;
		}
		return r;
	}(n, t, a), c = s.length > 0 ? function(e, t, n) {
		let r = {}, i = 0, a = null;
		for (; i < t.length;) {
			let o = t[i];
			if (!o.active || !o.canClose || o.length === 0) {
				i++;
				continue;
			}
			let s = `${o.char}${o.canOpen}`, c = r[s] ?? -1, l = !1;
			for (let r = i - 1; r > c; r--) {
				let s = t[r];
				if (!s.active || !s.canOpen || s.length === 0 || s.char !== o.char || (s.canClose || o.canOpen) && (s.originalLength + o.originalLength) % 3 == 0 && s.originalLength % 3 != 0 && o.originalLength % 3 != 0) continue;
				let c = Math.min(s.length, o.length), u = Object.keys(n.transformersByTag).filter((e) => e[0] === s.char && e.length <= c).sort((e, t) => t.length - e.length)[0];
				if (!u) continue;
				l = !0;
				let d = u.length, f = {
					content: e.slice(s.index + s.length, o.index),
					endIndex: o.index + d,
					startIndex: s.index + (s.length - d),
					tag: u
				};
				(!a || f.startIndex < a.startIndex || f.startIndex === a.startIndex && f.endIndex > a.endIndex) && (a = f);
				for (let e = r + 1; e < i; e++) t[e].active = !1;
				s.length -= d, o.length -= d, s.active = s.length > 0, o.length > 0 ? o.index += d : (o.active = !1, i++);
				break;
			}
			l || (r[s] = i - 1, o.canOpen || (o.active = !1), i++);
		}
		return a;
	}(n, s, t) : null, l = null, u = null;
	if (o && c ? c.startIndex <= o.startIndex && c.endIndex >= o.endIndex ? (l = c, u = t.transformersByTag[c.tag]) : (l = o, u = i) : o ? (l = o, u = i) : c && (l = c, u = t.transformersByTag[c.tag]), !l || !u) return null;
	let d = [
		n.slice(l.startIndex, l.endIndex),
		l.tag,
		l.content
	];
	return d.index = l.startIndex, d.input = n, {
		endIndex: l.endIndex,
		match: d,
		startIndex: l.startIndex,
		transformer: u
	};
}
function zw(e, t, n, r, i) {
	if (!Bw(t, n, r, i)) return !1;
	if (e === "*") return !0;
	if (e === "_") {
		if (!Bw(t, n, r, !i)) return !0;
		let e = i ? t[n - 1] : t[n + r];
		return e !== void 0 && Aw.test(e);
	}
	return !0;
}
function Bw(e, t, n, r) {
	let i = e[t - 1], a = e[t + n], [o, s] = r ? [a, i] : [i, a];
	return o !== void 0 && !kw.test(o) && (!Aw.test(o) || s === void 0 || kw.test(s) || Aw.test(s));
}
function Vw(e) {
	return W(e) && !e.hasFormat("code");
}
function Hw(e, t, n) {
	let r = Rw(e, t), i = function(e, t) {
		let n = e, r, i, a, o;
		for (let e of t) {
			if (!e.replace || !e.importRegExp) continue;
			let t = n.getTextContent().match(e.importRegExp);
			if (!t) continue;
			let s = t.index || 0, c = e.getEndIndex ? e.getEndIndex(n, t) : s + t[0].length;
			!1 !== c && (r === void 0 || i === void 0 || s < r && (c > i || c <= r)) && (r = s, i = c, a = e, o = t);
		}
		return r === void 0 || i === void 0 || a === void 0 || o === void 0 ? null : {
			endIndex: i,
			match: o,
			startIndex: r,
			transformer: a
		};
	}(e, n);
	if (r && i && (r.startIndex <= i.startIndex && r.endIndex >= i.endIndex || i.startIndex > r.endIndex ? i = null : r = null), r) {
		let i = function(e, t, n, r, i) {
			let a = e.getTextContent(), o, s, c;
			if (i[0] === a ? o = e : t === 0 ? [o, s] = e.splitText(n) : [c, o, s] = e.splitText(t, n), o.setTextContent(i[2]), r) for (let e of r.format) o.hasFormat(e) || o.toggleFormat(e);
			return {
				nodeAfter: s,
				nodeBefore: c,
				transformedNode: o
			};
		}(e, r.startIndex, r.endIndex, r.transformer, r.match);
		Vw(i.nodeAfter) && Hw(i.nodeAfter, t, n), Vw(i.nodeBefore) && Hw(i.nodeBefore, t, n), Vw(i.transformedNode) && Hw(i.transformedNode, t, n);
	} else if (i) {
		let r = function(e, t, n, r, i) {
			let a, o, s;
			return t === 0 ? [a, o] = e.splitText(n) : [s, a, o] = e.splitText(t, n), r.replace ? {
				nodeAfter: o,
				nodeBefore: s,
				transformedNode: r.replace(a, i) || void 0
			} : null;
		}(e, i.startIndex, i.endIndex, i.transformer, i.match);
		if (!r) return;
		Vw(r.nodeAfter) && Hw(r.nodeAfter, t, n), Vw(r.nodeBefore) && Hw(r.nodeBefore, t, n), Vw(r.transformedNode) && Hw(r.transformedNode, t, n);
	}
	let a = e.getTextContent().replace(/\\([*_`~\\])/g, "$1").replace(/&#(\d+);/g, (e, t) => String.fromCodePoint(t));
	e.setTextContent(a);
}
function Uw(e, t = !1) {
	let n = Dw(e), r = function(e) {
		let t = {}, n = {}, r = [];
		for (let i of e) {
			let { tag: e } = i;
			t[e] = i;
			let a = e.replace(/(\*|\^|\+)/g, "\\$1");
			r.push(a), n[e] = e.length === 1 ? RegExp(e === "`" ? "(?<![\\\\`])(`)((?:\\\\`|[^`])+?)(`)(?!`)" : `(?<![\\\\${a}])(${a})((\\\\${a})?.*?[^${a}\\s](\\\\${a})?)((?<!\\\\)|(?<=\\\\\\\\))(${a})(?![\\\\${a}])`) : RegExp(`(?<!\\\\)(${a})((\\\\${a})?.*?[^\\s](\\\\${a})?)((?<!\\\\)|(?<=\\\\\\\\))(${a})(?!\\\\)`);
		}
		return {
			fullMatchRegExpByTag: n,
			openTagsRegExp: RegExp(`(?<![\\\\])(${r.join("|")})`, "g"),
			transformersByTag: t
		};
	}(n.textFormat);
	return (e, i) => {
		let a = e.split("\n"), o = a.length, s = i || gd();
		s.clear();
		for (let e = 0; e < o; e++) {
			let i = a[e], [o, c] = Ww(a, e, n.multilineElement, s);
			o ? e = c : Gw(i, s, n.element, r, n.textMatch, t);
		}
		let c = s.getChildren();
		for (let e of c) !t && Mw(e) && s.getChildrenSize() > 1 && e.remove();
		K() !== null && s.selectStart();
	};
}
function Ww(e, t, n, r) {
	for (let i of n) {
		let { handleImportAfterStartMatch: n, regExpEnd: a, regExpStart: o, replace: s } = i, c = e[t].match(o);
		if (!c) continue;
		if (n) {
			let a = n({
				lines: e,
				rootNode: r,
				startLineIndex: t,
				startMatch: c,
				transformer: i
			});
			if (a === null) continue;
			if (a) return a;
		}
		let l = typeof a == "object" && "regExp" in a ? a.regExp : a, u = a && typeof a == "object" && "optional" in a ? a.optional : !a, d = t, f = e.length;
		for (; d < f;) {
			let n = l ? e[d].match(l) : null;
			if (!n && (!u || u && d < f - 1)) {
				d++;
				continue;
			}
			if (n && t === d && n.index === c.index) {
				d++;
				continue;
			}
			let i = [];
			if (n && t === d) i.push(e[t].slice(c[0].length, -n[0].length));
			else for (let r = t; r <= d; r++) if (r === t) {
				let t = e[r].slice(c[0].length);
				i.push(t);
			} else if (r === d && n) {
				let t = e[r].slice(0, -n[0].length);
				i.push(t);
			} else i.push(e[r]);
			if (!1 !== s(r, null, c, n, i, !0)) return [!0, d];
			break;
		}
	}
	return [!1, t];
}
function Gw(e, t, n, r, i, a) {
	let o = dl(e), s = J();
	s.append(o), t.append(s);
	for (let { regExp: t, replace: r } of n) {
		let n = e.match(t);
		if (n && (o.setTextContent(e.slice(n[0].length)), !1 !== r(s, [o], n, !0))) break;
	}
	if (Hw(o, r, i), s.isAttached() && e.length > 0) {
		let e = s.getPreviousSibling();
		if (!a && (Pu(e) || Oh(e) || Z(e))) {
			let t = e;
			if (Z(e)) {
				let n = e.getLastDescendant();
				t = n == null ? null : X(n, mg);
			}
			t != null && t.getTextContentSize() > 0 && (t.splice(t.getChildrenSize(), 0, [qc(), ...s.getChildren()]), s.remove());
		}
	}
}
function Kw(e, ...t) {
	let n = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
	r.append("code", e);
	for (let e of t) r.append("v", e);
	throw n.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${n.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
var qw = /^(\s*)(\d{1,})\.\s/, Jw = /^(\s*)[-*+]\s/, Yw = /^(\s*)(?:[-*+]\s)?\s?(\[(\s|x)?\])\s/i, Xw = /^(#{1,6})\s/, Zw = /^>\s/, Qw = /^[ \t]*```([\w-]+)?/, $w = /[ \t]*```$/, eT = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/, tT = /^(?:\|)(.+)(?:\|)\s?$/, nT = /^(\| ?:?-*:? ?)+\|\s?$/, rT = /^<[a-z_][\w-]*(?:\s[^<>]*)?\/?>/i, iT = /^<\/[a-z_][\w-]*\s*>/i, aT = (e) => RegExp(`(?:${e.source})$`, e.flags), oT = lo("mdListMarker", { parse: (e) => typeof e == "string" && /^[-*+]$/.test(e) ? e : "-" }), sT = (e) => (t, n, r, i) => {
	let a = e(r);
	a.append(...n), t.replace(a), i || a.select(0, 0);
}, cT = (e) => (t, n, r, i) => {
	let a = t.getPreviousSibling(), o = t.getNextSibling(), s = pg(e === "check" ? r[3] === "x" : void 0), c = r[0].trim()[0], l = e !== "bullet" && e !== "check" || c !== oT.parse(c) ? void 0 : c;
	if (Z(o) && o.getListType() === e) {
		l && fo(o, oT, l);
		let e = o.getFirstChild();
		e === null ? o.append(s) : e.insertBefore(s), t.remove();
	} else if (Z(a) && a.getListType() === e) l && fo(a, oT, l), a.append(s), t.remove();
	else {
		let n = bg(e, e === "number" ? Number(r[2]) : void 0);
		l && fo(n, oT, l), n.append(s), t.replace(n);
	}
	s.append(...n), i || s.select(0, 0);
	let u = function(e) {
		let t = e.match(/\t/g), n = e.match(/ /g), r = 0;
		return t && (r += t.length), n && (r += Math.floor(n.length / 4)), r;
	}(r[1]);
	u && s.setIndent(u);
}, lT = (e, t, n) => {
	let r = [], i = e.getChildren(), a = 0;
	for (let o of i) if (mg(o)) {
		if (o.getChildrenSize() === 1) {
			let e = o.getFirstChild();
			if (Z(e)) {
				r.push(lT(e, t, n + 1));
				continue;
			}
		}
		let i = " ".repeat(4 * n), s = e.getListType(), c = uo(e, oT), l = s === "number" ? `${e.getStart() + a}. ` : s === "check" ? `${c} [${o.getChecked() ? "x" : " "}] ` : c + " ";
		r.push(i + l + t(o)), a++;
	}
	return r.join("\n");
}, uT = {
	dependencies: [kh],
	export: (e, t) => {
		if (!Ph(e)) return null;
		let n = Number(e.getTag().slice(1));
		return "#".repeat(n) + " " + t(e);
	},
	regExp: Xw,
	replace: sT((e) => Nh("h" + e[1].length)),
	type: "element"
}, dT = {
	dependencies: [Eh],
	export: (e, t) => {
		if (!Oh(e)) return null;
		let n = t(e).split("\n"), r = [];
		for (let e of n) r.push("> " + e);
		return r.join("\n");
	},
	regExp: Zw,
	replace: (e, t, n, r) => {
		if (r) {
			let n = e.getPreviousSibling();
			if (Oh(n)) return n.splice(n.getChildrenSize(), 0, [qc(), ...t]), void e.remove();
		}
		let i = Dh();
		i.append(...t), e.replace(i), r || i.select(0, 0);
	},
	type: "element"
}, fT = {
	dependencies: [d_],
	export: (e) => {
		if (!p_(e)) return null;
		let t = e.getTextContent();
		return "```" + (e.getLanguage() || "") + (t ? "\n" + t : "") + "\n```";
	},
	regExpEnd: {
		optional: !0,
		regExp: $w
	},
	regExpStart: Qw,
	replace: (e, t, n, r, i, a) => {
		let o, s;
		if (!t && i) {
			if (i.length === 1) r ? (o = f_(), s = n[1] + i[0]) : (o = f_(n[1]), s = i[0].startsWith(" ") ? i[0].slice(1) : i[0]);
			else {
				if (o = f_(n[1]), i[0].trim().length === 0) for (; i.length > 0 && !i[0].length;) i.shift();
				else i[0] = i[0].startsWith(" ") ? i[0].slice(1) : i[0];
				for (; i.length > 0 && !i[i.length - 1].length;) i.pop();
				s = i.join("\n");
			}
			let t = dl(s);
			o.append(t), e.append(o);
		} else t && sT((e) => f_(e ? e[1] : void 0))(e, t, n, a);
	},
	type: "multiline-element"
}, pT = {
	dependencies: [hg, ug],
	export: (e, t) => Z(e) ? lT(e, t, 0) : null,
	regExp: Jw,
	replace: cT("bullet"),
	type: "element"
}, mT = {
	dependencies: [hg, ug],
	export: (e, t) => Z(e) ? lT(e, t, 0) : null,
	regExp: Yw,
	replace: cT("check"),
	type: "element"
}, hT = {
	dependencies: [hg, ug],
	export: (e, t) => Z(e) ? lT(e, t, 0) : null,
	regExp: qw,
	replace: cT("number"),
	type: "element"
}, gT = {
	format: ["code"],
	tag: "`",
	type: "text-format"
}, _T = {
	format: ["highlight"],
	tag: "==",
	type: "text-format"
}, vT = {
	format: ["bold", "italic"],
	tag: "***",
	type: "text-format"
}, yT = {
	format: ["bold", "italic"],
	intraword: !1,
	tag: "___",
	type: "text-format"
}, bT = {
	format: ["bold"],
	tag: "**",
	type: "text-format"
}, xT = {
	format: ["bold"],
	intraword: !1,
	tag: "__",
	type: "text-format"
}, ST = {
	format: ["strikethrough"],
	tag: "~~",
	type: "text-format"
}, CT = {
	format: ["italic"],
	tag: "*",
	type: "text-format"
}, wT = {
	format: ["italic"],
	intraword: !1,
	tag: "_",
	type: "text-format"
}, TT = {
	dependencies: [zy],
	export: (e, t, n) => {
		if (!Hy(e) || Gy(e)) return null;
		let r = e.getTitle(), i = t(e);
		return r ? `[${i}](${e.getURL()} "${r}")` : `[${i}](${e.getURL()})`;
	},
	importRegExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/,
	regExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/,
	replace: (e, t) => {
		let [, n, r, i] = t, a = Vy(r, { title: i }), o = n.split("[").length - 1, s = n.split("]").length - 1, c = n, l = "";
		if (o < s) return;
		if (o > s) {
			let e = n.split("[");
			l = "[" + e[0], c = e.slice(1).join("[");
		}
		let u = dl(c);
		return u.setFormat(e.getFormat()), a.append(u), e.replace(a), l && a.insertBefore(dl(l)), u;
	},
	trigger: ")",
	type: "text-match"
}, ET = [
	uT,
	dT,
	pT,
	hT
], DT = [fT], OT = [
	gT,
	vT,
	yT,
	bT,
	xT,
	_T,
	CT,
	wT,
	ST
], kT = [TT], AT = [
	...ET,
	...DT,
	...OT,
	...kT
];
function jT(e, t, n) {
	let r = n.length;
	for (let i = t; i >= r; i--) {
		let t = i - r;
		if (MT(e, t, n, 0, r) && e[t + r] !== " ") return t;
	}
	return -1;
}
function MT(e, t, n, r, i) {
	for (let a = 0; a < i; a++) if (e[t + a] !== n[r + a]) return !1;
	return !0;
}
function NT(e, t = AT) {
	let n = Dw(t), r = Ew(n.textFormat, ({ tag: e }) => e[e.length - 1]), i = Ew(n.textMatch, ({ trigger: e }) => e);
	for (let n of t) {
		let t = n.type;
		if (t === "element" || t === "text-match" || t === "multiline-element") {
			let t = n.dependencies;
			for (let n of t) e.hasNode(n) || Kw(173, n.getType());
		}
	}
	let a = (e, t, a) => {
		(function(e, t, n, r) {
			if (!Xd(e.getParent()) || e.getFirstChild() !== t) return !1;
			let i = t.getTextContent();
			if (i[n - 1] !== " ") return !1;
			for (let { regExp: a, replace: o } of r) {
				let r = i.match(a);
				if (r && r[0].length === (r[0].endsWith(" ") ? n : n - 1)) {
					let i = t.getNextSiblings(), [a, s] = t.splitText(n);
					if (!1 !== o(e, s ? [s, ...i] : i, r, !1)) return a.remove(), !0;
				}
			}
			return !1;
		})(e, t, a, n.element) || function(e, t, n, r) {
			if (!Xd(e.getParent()) || e.getFirstChild() !== t) return !1;
			let i = t.getTextContent();
			if (i[n - 1] !== " ") return !1;
			for (let { regExpStart: a, replace: o, regExpEnd: s } of r) {
				if (s && !("optional" in s) || s && "optional" in s && !s.optional) continue;
				let r = i.match(a);
				if (r && r[0].length === (r[0].endsWith(" ") ? n : n - 1)) {
					let i = t.getNextSiblings(), [a, s] = t.splitText(n);
					if (!1 !== o(e, s ? [s, ...i] : i, r, null, null, !1)) return a.remove(), !0;
				}
			}
			return !1;
		}(e, t, a, n.multilineElement) || function(e, t, n) {
			let r = e.getTextContent(), i = n[r[t - 1]];
			if (i == null) return !1;
			t < r.length && (r = r.slice(0, t));
			for (let t of i) {
				if (!t.replace || !t.regExp) continue;
				let n = r.match(t.regExp);
				if (n === null) continue;
				let i = n.index || 0, a = i + n[0].length, o;
				return i === 0 ? [o] = e.splitText(a) : [, o] = e.splitText(i, a), o.selectNext(0, 0), t.replace(o, n), !0;
			}
			return !1;
		}(t, a, i) || function(e, t, n) {
			let r = e.getTextContent(), i = t - 1, a = r[i], o = n[a];
			if (!o) return !1;
			for (let t of o) {
				let { tag: n } = t, o = n.length, s = i - o + 1;
				if (o > 1 && !MT(r, s, n, 0, o) || r[s - 1] === " ") continue;
				let c = r[i + 1];
				if (!1 === t.intraword && c && !Ow.test(c)) continue;
				let l = e, u = l, d = jT(r, s, n), f = u;
				for (; d < 0 && (f = f.getPreviousSibling()) && !Jc(f);) if (W(f)) {
					if (f.hasFormat("code")) continue;
					let e = f.getTextContent();
					u = f, d = jT(e, e.length, n);
				}
				if (d < 0 || u === l && d + o === s) continue;
				let p = u.getTextContent();
				if (d > 0 && p[d - 1] === a) continue;
				let m = p[d - 1];
				if (!1 === t.intraword && m && !Ow.test(m)) continue;
				let h = l.getTextContent(), g = h.slice(0, s) + h.slice(i + 1);
				l.setTextContent(g);
				let _ = u === l ? g : p;
				u.setTextContent(_.slice(0, d) + _.slice(d + o));
				let v = K(), y = Pl();
				vd(y);
				let b = i - o * (u === l ? 2 : 1) + 1;
				y.anchor.set(u.__key, d, "text"), y.focus.set(l.__key, b, "text");
				for (let e of t.format) y.hasFormat(e) || y.formatText(e);
				y.anchor.set(y.focus.key, y.focus.offset, y.focus.type);
				for (let e of t.format) y.hasFormat(e) && y.toggleFormat(e);
				return G(v) && (y.format = v.format), !0;
			}
		}(t, a, r);
	};
	return e.registerUpdateListener(({ tags: t, dirtyLeaves: n, editorState: r, prevEditorState: i }) => {
		if (t.has("collaboration") || t.has("historic") || e.isComposing()) return;
		let o = r.read(K), s = i.read(K);
		if (!G(s) || !G(o) || !o.isCollapsed() || o.is(s)) return;
		let c = o.anchor.key, l = o.anchor.offset, u = r._nodeMap.get(c);
		!W(u) || !n.has(c) || l !== 1 && l > s.anchor.offset + 1 || e.update(() => {
			if (!Vw(u)) return;
			let e = u.getParent();
			e === null || p_(e) || a(e, u, o.anchor.offset);
		});
	});
}
function PT(e, t = AT, n, r = !1, i = !1) {
	let a = r ? e : function(e, t = !1) {
		let n = e.split("\n"), r = !1, i = [];
		for (let e = 0; e < n.length; e++) {
			let a = n[e].trimEnd(), o = i[i.length - 1];
			eT.test(a) ? i.push(a) : Qw.test(a) || $w.test(a) ? (r = !r, i.push(a)) : r || a === "" || o === "" || !o || Xw.test(o) || Xw.test(a) || Zw.test(a) || qw.test(a) || Jw.test(a) || Yw.test(a) || tT.test(a) || nT.test(a) || !t || rT.test(a) || iT.test(a) || aT(iT).test(o) || aT(rT).test(o) || $w.test(o) ? i.push(a) : i[i.length - 1] = o + " " + a.trimStart();
		}
		return i.join("\n");
	}(e, i);
	return Uw(t, r)(a, n);
}
function FT(e = AT, t, n = !1) {
	return function(e, t = !1) {
		let n = Dw(e), r = [...n.multilineElement, ...n.element], i = !t, a = n.textFormat.filter((e) => e.format.length === 1).sort((e, t) => Number(e.format.includes("code")) - Number(t.format.includes("code")));
		return (e) => {
			let t = [], o = (e || gd()).getChildren();
			for (let e = 0; e < o.length; e++) {
				let s = o[e], c = Nw(s, r, a, n.textMatch);
				c != null && t.push(i && e > 0 && !Mw(s) && !Mw(o[e - 1]) ? `
${c}` : c);
			}
			return t.join("\n");
		};
	}(e, n)(t);
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/MarkdownShortcut/MarkdownShortcutPlugin.svelte
function IT(e, t) {
	E(t, !0);
	let n = sh();
	vi(() => NT(n, t.transformers)), D();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/MarkdownShortcut/transformers.js
var LT = {
	dependencies: [Bg],
	export: (e) => Ug(e) ? "***" : null,
	regExp: /^(---|\*\*\*|___)\s?$/,
	replace: (e, t, n, r) => {
		let i = Hg();
		r || e.getNextSibling() != null ? e.replace(i) : e.insertBefore(i), i.selectNext();
	},
	type: "element"
}, RT = {
	dependencies: [xS],
	export: (e) => CS(e) ? `![${e.getAltText()}](${e.getSrc()})` : null,
	importRegExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))/,
	regExp: /!(?:\[([^[]*)\])(?:\(([^(]+)\))$/,
	replace: (e, t) => {
		let [, n, r] = t, i = SS({
			altText: n,
			maxWidth: 800,
			src: r
		});
		e.replace(i);
	},
	trigger: ")",
	type: "text-match"
}, zT = /^(?:\|)(.+)(?:\|)\s?$/, BT = /^(\| ?:?-*:? ?)+\|\s?$/, VT = {
	dependencies: [
		Ty,
		nv,
		Z_
	],
	export: (e) => {
		if (!ky(e)) return null;
		let t = [];
		for (let n of e.getChildren()) {
			let e = [];
			if (!av(n)) continue;
			let r = !1;
			for (let t of n.getChildren()) Q(t) && (e.push(FT(GT, t).replace(/\n/g, "\\n").trim()), t.__headerState === X_.ROW && (r = !0));
			t.push(`| ${e.join(" | ")} |`), r && t.push(`| ${e.map((e) => "---").join(" | ")} |`);
		}
		return t.join("\n");
	},
	regExp: zT,
	replace: (e, t, n) => {
		if (BT.test(n[0])) {
			let t = e.getPreviousSibling();
			if (!t || !ky(t)) return;
			let n = t.getChildren(), r = n[n.length - 1];
			if (!r || !av(r)) return;
			r.getChildren().forEach((e) => {
				Q(e) && e.setHeaderStyles(X_.ROW, X_.ROW);
			}), e.remove();
			return;
		}
		let r = WT(n[0]);
		if (r == null) return;
		let i = [r], a = e.getPreviousSibling(), o = r.length;
		for (; a && !(!Pu(a) || a.getChildrenSize() !== 1);) {
			let e = a.getFirstChild();
			if (!W(e)) break;
			let t = WT(e.getTextContent());
			if (t == null) break;
			o = Math.max(o, t.length), i.unshift(t);
			let n = a.getPreviousSibling();
			a.remove(), a = n;
		}
		let s = Oy();
		for (let e of i) {
			let t = iv();
			s.append(t);
			for (let n = 0; n < o; n++) t.append(n < e.length ? e[n] : UT(""));
		}
		let c = e.getPreviousSibling();
		ky(c) && HT(c) === o ? (c.append(...s.getChildren()), e.remove()) : e.replace(s), s.selectEnd();
	},
	type: "element"
};
function HT(e) {
	let t = e.getFirstChild();
	return av(t) ? t.getChildrenSize() : 0;
}
var UT = (e) => {
	e = e.replace(/\\n/g, "\n");
	let t = ev(X_.NO_STATUS);
	return PT(e, GT, t), t;
}, WT = (e) => {
	let t = e.match(zT);
	return !t || !t[1] ? null : t[1].split("|").map((e) => UT(e));
}, GT = [
	VT,
	LT,
	RT,
	mT,
	TT,
	fT,
	uT,
	dT,
	pT,
	hT,
	...OT
], KT = {
	bullet: "Bulleted List",
	check: "Check List",
	code: "Code Block",
	h1: "Heading 1",
	h2: "Heading 2",
	h3: "Heading 3",
	h4: "Heading 4",
	h5: "Heading 5",
	h6: "Heading 6",
	number: "Numbered List",
	paragraph: "Normal",
	quote: "Quote"
};
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/BlockFormatDropDown/BlockFormatDropDown.svelte
function qT(e, t) {
	E(t, !0);
	let n = () => O(s, "$isEditable", i), r = () => O(o, "$blockType", i), [i, a] = Et(), o = nt("blockType"), s = lh();
	{
		let i = /* @__PURE__ */ Gt(() => !n()), a = /* @__PURE__ */ Gt(() => "icon block-type " + r());
		NC(e, {
			get disabled() {
				return I(i);
			},
			buttonClassName: "toolbar-item block-controls",
			get buttonIconClassName() {
				return I(a);
			},
			get buttonLabel() {
				return KT[r()];
			},
			buttonAriaLabel: "Formatting options for text style",
			children: (e, n) => {
				var r = ci();
				_i(Rn(r), () => t.children ?? v), z(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	D(), a();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/BoldButton.svelte
var JT = /* @__PURE__ */ R("<button type=\"button\"><i class=\"format bold\"></i></button>");
function YT(e, t) {
	E(t, !1);
	let n = () => O(c, "$isEditable", a), r = () => O(s, "$activeEditor", a), i = () => O(l, "$isBold", a), [a, o] = Et(), s = uh(), c = lh(), l = fh();
	ma();
	var u = JT();
	F(() => {
		u.disabled = !n(), qi(u, 1, "toolbar-item spaced " + (i() ? "active" : "")), B(u, "title", `Bold (${ww.BOLD})`), B(u, "aria-label", `Format text as bold. Shortcut: ${ww.BOLD}`);
	}), L("click", u, () => Zx(r())), z(e, u), D(), o();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/Divider.svelte
var XT = /* @__PURE__ */ R("<div class=\"divider\"></div>");
function ZT(e) {
	z(e, XT());
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/RedoButton.svelte
var QT = /* @__PURE__ */ R("<button type=\"button\" class=\"toolbar-item\" aria-label=\"Redo\"><i class=\"format redo\"></i></button>");
function $T(e, t) {
	E(t, !0);
	let n = () => O(c, "$isEditable", i), r = () => O(s, "$activeEditor", i), [i, a] = Et(), o = sh(), s = uh(), c = lh(), l = /* @__PURE__ */ j(!1);
	vi(() => o.registerCommand(Zs, (e) => (M(l, e, !0), !1), 4));
	var u = QT();
	F(() => {
		u.disabled = !I(l) || !n(), B(u, "title", $p ? "Redo (⇧⌘Z)" : "Redo (Ctrl+Y)");
	}), L("click", u, () => {
		nS(r());
	}), z(e, u), D(), a();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/UndoButton.svelte
var eE = /* @__PURE__ */ R("<button type=\"button\" class=\"toolbar-item spaced\" aria-label=\"Undo\"><i class=\"format undo\"></i></button>");
function tE(e, t) {
	E(t, !0);
	let n = () => O(c, "$isEditable", i), r = () => O(s, "$activeEditor", i), [i, a] = Et(), o = sh(), s = uh(), c = lh(), l = /* @__PURE__ */ j(!1);
	vi(() => o.registerCommand(Qs, (e) => (M(l, e, !0), !1), 4));
	var u = eE();
	F(() => {
		u.disabled = !I(l) || !n(), B(u, "title", $p ? "Undo (⌘Z)" : "Undo (Ctrl+Z)");
	}), L("click", u, () => {
		tS(r());
	}), z(e, u), D(), a();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/ItalicButton.svelte
var nE = /* @__PURE__ */ R("<button type=\"button\"><i class=\"format italic\"></i></button>");
function rE(e, t) {
	E(t, !1);
	let n = () => O(c, "$isEditable", a), r = () => O(s, "$activeEditor", a), i = () => O(l, "$isItalic", a), [a, o] = Et(), s = uh(), c = lh(), l = nt("isItalic");
	ma();
	var u = nE();
	F(() => {
		u.disabled = !n(), qi(u, 1, "toolbar-item spaced " + (i() ? "active" : "")), B(u, "title", `Italic (${ww.ITALIC})`), B(u, "aria-label", `Format text as italics. Shortcut: ${ww.ITALIC}`);
	}), L("click", u, () => {
		Qx(r());
	}), z(e, u), D(), o();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/UnderlineButton.svelte
var iE = /* @__PURE__ */ R("<button type=\"button\"><i class=\"format underline\"></i></button>");
function aE(e, t) {
	E(t, !1);
	let n = () => O(c, "$isEditable", a), r = () => O(s, "$activeEditor", a), i = () => O(l, "$isUnderline", a), [a, o] = Et(), s = uh(), c = lh(), l = nt("isUnderline");
	ma();
	var u = iE();
	F(() => {
		u.disabled = !n(), qi(u, 1, "toolbar-item spaced " + (i() ? "active" : "")), B(u, "title", `Underline (${ww.UNDERLINE})`), B(u, "aria-label", `Format text to underlined. Shortcut: ${ww.UNDERLINE}`);
	}), L("click", u, () => {
		eS(r());
	}), z(e, u), D(), o();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/StrikethroughButton.svelte
var oE = /* @__PURE__ */ R("<button type=\"button\" aria-label=\"Format text with a strikethrough\"><i class=\"format strikethrough\"></i></button>");
function sE(e, t) {
	E(t, !1);
	let n = () => O(c, "$isEditable", a), r = () => O(s, "$activeEditor", a), i = () => O(l, "$isStrikethrough", a), [a, o] = Et(), s = uh(), c = lh(), l = nt("isStrikethrough");
	ma();
	var u = oE();
	F(() => {
		u.disabled = !n(), qi(u, 1, "toolbar-item spaced " + (i() ? "active" : "")), B(u, "title", `Strikethrough (${ww.STRIKETHROUGH})`);
	}), L("click", u, () => {
		$x(r());
	}), z(e, u), D(), o();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/FormatCodeButton.svelte
Qr(["click"]), Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/DropDownAlign.svelte
var cE = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon left-align\"></i> <span class=\"text\">Left Align</span></div> <span class=\"shortcut\"> </span>", 1), lE = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon center-align\"></i> <span class=\"text\">Center Align</span></div> <span class=\"shortcut\"> </span>", 1), uE = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon right-align\"></i> <span class=\"text\">Right Align</span></div> <span class=\"shortcut\"> </span>", 1), dE = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i class=\"icon justify-align\"></i> <span class=\"text\">Justify Align</span></div> <span class=\"shortcut\"> </span>", 1), fE = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i></i> <span class=\"text\">Outdent</span></div> <span class=\"shortcut\"> </span>", 1), pE = /* @__PURE__ */ R("<div class=\"icon-text-container\"><i></i> <span class=\"text\">Indent</span></div> <span class=\"shortcut\"> </span>", 1), mE = /* @__PURE__ */ R("<!> <!> <!> <!> <!> <!> <!>", 1);
function hE(e, t) {
	E(t, !1);
	let n = () => O(l, "$isEditable", a), r = () => O(s, "$activeEditor", a), i = () => O(c, "$isRTL", a), [a, o] = Et(), s = uh(), c = nt("isRTL"), l = lh();
	ma();
	{
		let t = /* @__PURE__ */ Kt(() => !n());
		NC(e, {
			get disabled() {
				return I(t);
			},
			buttonLabel: "Align",
			buttonIconClassName: "icon left-align",
			buttonClassName: "toolbar-item spaced alignment",
			buttonAriaLabel: "Formatting options for text alignment",
			children: (e, t) => {
				var n = mE(), a = Rn(n);
				FC(a, {
					onclick: () => {
						r().dispatchCommand(Hs, "left");
					},
					class: "item wide",
					children: (e, t) => {
						var n = cE(), r = P(Rn(n), 2), i = N(r, !0);
						T(r), F(() => di(i, ww.LEFT_ALIGN)), z(e, n);
					},
					$$slots: { default: !0 }
				});
				var o = P(a, 2);
				FC(o, {
					onclick: () => {
						r().dispatchCommand(Hs, "center");
					},
					class: "item wide",
					children: (e, t) => {
						var n = lE(), r = P(Rn(n), 2), i = N(r, !0);
						T(r), F(() => di(i, ww.CENTER_ALIGN)), z(e, n);
					},
					$$slots: { default: !0 }
				});
				var s = P(o, 2);
				FC(s, {
					onclick: () => {
						r().dispatchCommand(Hs, "right");
					},
					class: "item wide",
					children: (e, t) => {
						var n = uE(), r = P(Rn(n), 2), i = N(r, !0);
						T(r), F(() => di(i, ww.RIGHT_ALIGN)), z(e, n);
					},
					$$slots: { default: !0 }
				});
				var c = P(s, 2);
				FC(c, {
					onclick: () => {
						r().dispatchCommand(Hs, "justify");
					},
					class: "item wide",
					children: (e, t) => {
						var n = dE(), r = P(Rn(n), 2), i = N(r, !0);
						T(r), F(() => di(i, ww.JUSTIFY_ALIGN)), z(e, n);
					},
					$$slots: { default: !0 }
				});
				var l = P(c, 2);
				ZT(l, {});
				var u = P(l, 2);
				FC(u, {
					onclick: () => {
						r().dispatchCommand(Bs, void 0);
					},
					class: "item wide",
					children: (e, t) => {
						var n = fE(), r = Rn(n), a = N(r);
						Ke(2), T(r);
						var o = P(r, 2), s = N(o, !0);
						T(o), F(() => {
							qi(a, 1, "icon " + (i() ? "indent" : "outdent")), di(s, ww.OUTDENT);
						}), z(e, n);
					},
					$$slots: { default: !0 }
				}), FC(P(u, 2), {
					onclick: () => {
						r().dispatchCommand(zs, void 0);
					},
					class: "item wide",
					children: (e, t) => {
						var n = pE(), r = Rn(n), a = N(r);
						Ke(2), T(r);
						var o = P(r, 2), s = N(o, !0);
						T(o), F(() => {
							qi(a, 1, "icon " + (i() ? "outdent" : "indent")), di(s, ww.INDENT);
						}), z(e, n);
					},
					$$slots: { default: !0 }
				}), z(e, n);
			},
			$$slots: { default: !0 }
		});
	}
	D(), o();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/InsertDropDown/InsertDropDown.svelte
function gE(e, t) {
	E(t, !0);
	let n = () => O(a, "$isEditable", r), [r, i] = Et(), a = lh();
	{
		let r = /* @__PURE__ */ Gt(() => !n());
		NC(e, {
			get disabled() {
				return I(r);
			},
			buttonClassName: "toolbar-item spaced",
			buttonLabel: "Insert",
			buttonAriaLabel: "Insert specialized editor node",
			buttonIconClassName: "icon plus",
			children: (e, n) => {
				var r = ci();
				_i(Rn(r), () => t.children ?? v), z(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	D(), i();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/FontFamilyDropDown.svelte
var _E = /* @__PURE__ */ R("<span class=\"text\"> </span>");
function vE(e, t) {
	E(t, !1);
	let n = () => O(c, "$activeEditor", a), r = () => O(u, "$isEditable", a), i = () => O(l, "$value", a), [a, o] = Et(), s = [
		["Arial", "Arial"],
		["Courier New", "Courier New"],
		["Georgia", "Georgia"],
		["Times New Roman", "Times New Roman"],
		["Trebuchet MS", "Trebuchet MS"],
		["Verdana", "Verdana"]
	], c = uh(), l = nt("fontFamily"), u = lh(), d = (e) => {
		n().update(() => {
			let t = K();
			t !== null && Ip(t, { "font-family": e });
		});
	};
	ma();
	{
		let t = /* @__PURE__ */ Kt(() => !r());
		NC(e, {
			get disabled() {
				return I(t);
			},
			buttonClassName: "toolbar-item font-family",
			get buttonLabel() {
				return i();
			},
			buttonIconClassName: "icon block-type font-family",
			buttonAriaLabel: "Formatting options for font family",
			children: (e, t) => {
				var n = ci();
				Ai(Rn(n), 1, () => s, Ei, (e, t) => {
					var n = /* @__PURE__ */ Gt(() => C(I(t), 2));
					let r = () => I(n)[0], a = () => I(n)[1];
					{
						let t = /* @__PURE__ */ Kt(() => `item ${i() === r() ? "active dropdown-item-active" : ""}`);
						FC(e, {
							get class() {
								return I(t);
							},
							onclick: () => d(r()),
							children: (e, t) => {
								var n = _E(), r = N(n, !0);
								T(n), F(() => di(r, a())), z(e, n);
							},
							$$slots: { default: !0 }
						});
					}
				}), z(e, n);
			},
			$$slots: { default: !0 }
		});
	}
	D(), o();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/FontSizeDropDown.svelte
var yE = /* @__PURE__ */ R("<span class=\"text\"> </span>");
function bE(e, t) {
	E(t, !1);
	let n = () => O(l, "$isEditable", i), r = () => O(c, "$value", i), [i, a] = Et(), o = [
		["10px", "10px"],
		["11px", "11px"],
		["12px", "12px"],
		["13px", "13px"],
		["14px", "14px"],
		["15px", "15px"],
		["16px", "16px"],
		["17px", "17px"],
		["18px", "18px"],
		["19px", "19px"],
		["20px", "20px"]
	], s = sh(), c = nt("fontSize"), l = lh(), u = (e) => {
		s.update(() => {
			let t = K();
			G(t) && Ip(t, { "font-size": e });
		});
	};
	ma();
	{
		let t = /* @__PURE__ */ Kt(() => !n());
		NC(e, {
			get disabled() {
				return I(t);
			},
			buttonClassName: "toolbar-item font-size",
			get buttonLabel() {
				return r();
			},
			buttonIconClassName: "",
			buttonAriaLabel: "Formatting options for font size",
			children: (e, t) => {
				var n = ci();
				Ai(Rn(n), 1, () => o, Ei, (e, t) => {
					var n = /* @__PURE__ */ Gt(() => C(I(t), 2));
					let i = () => I(n)[0], a = () => I(n)[1];
					{
						let t = /* @__PURE__ */ Kt(() => `item ${r() === i() ? "active dropdown-item-active" : ""} 'fontsize-item'`);
						FC(e, {
							get class() {
								return I(t);
							},
							onclick: () => u(i()),
							children: (e, t) => {
								var n = yE(), r = N(n, !0);
								T(n), F(() => di(r, a())), z(e, n);
							},
							$$slots: { default: !0 }
						});
					}
				}), z(e, n);
			},
			$$slots: { default: !0 }
		});
	}
	D(), a();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/StateStoreRichTextUpdator.svelte
function xE(e, t) {
	E(t, !1);
	let n = () => O(o, "$activeEditor", r), [r, i] = Et(), a = sh(), o = uh(), s = nt("isBold"), c = nt("isItalic"), l = nt("isUnderline"), u = nt("isStrikethrough"), d = nt("isSubscript"), f = nt("isSuperscript"), p = nt("isCode"), m = nt("blockType"), h = nt("selectedElementKey"), g = nt("isRTL"), _ = nt("codeLanguage"), v = nt("codeTheme"), y = nt("fontSize"), b = nt("fontFamily"), x = nt("fontColor"), S = nt("bgColor"), C = nt("isLink"), ee = nt("isImageCaption");
	function te(e) {
		let t = e.getKey() === "root" ? e : X(e, (e) => {
			let t = e.getParent();
			return t !== null && Xd(t);
		});
		return t === null && (t = e.getTopLevelElementOrThrow()), t;
	}
	function ne(e) {
		let t = Ph(e) ? e.getTag() : e.getType();
		t in KT && k(m, t);
	}
	function re(e) {
		if (p_(e)) {
			let t = e.getLanguage();
			k(_, t ? j_[t] || t : "");
			let n = e.getTheme();
			k(v, n || "");
			return;
		}
	}
	let ie = () => {
		let e = K();
		if (G(e)) {
			if (n() !== a && fm(n())) {
				let e = n().getRootElement();
				k(ee, !!e?.parentElement?.classList.contains("image-caption-container"));
			} else k(ee, !1);
			let t = e.anchor.getNode(), r = te(t), i = r.getKey(), o = n().getElementByKey(i);
			k(g, Up(e));
			let s = PS(e);
			if (Hy(s.getParent()) || Hy(s) ? k(C, !0) : k(C, !1), o !== null) if (k(h, i), Z(r)) {
				let e = nm(t, hg), n = e ? e.getListType() : r.getListType();
				k(m, n);
			} else ne(r), re(r);
			k(x, Kp(e, "color", "#000")), k(S, Kp(e, "background-color", "#fff")), k(b, Kp(e, "font-family", "Arial"));
		}
		if ((G(e) || Fv(e)) && (k(s, e.hasFormat("bold")), k(c, e.hasFormat("italic")), k(l, e.hasFormat("underline")), k(u, e.hasFormat("strikethrough")), k(d, e.hasFormat("subscript")), k(f, e.hasFormat("superscript")), k(p, e.hasFormat("code")), k(y, Kp(e, "font-size", "15px"))), Sl(e)) {
			let t = e.getNodes();
			for (let e of t) {
				let t = nm(e, hg);
				if (t) {
					let e = t.getListType();
					k(m, e);
				} else {
					let t = te(e);
					ne(t), re(t);
				}
			}
		}
	};
	vi(() => Cp(a.registerUpdateListener(({ editorState: e }) => {
		e.read(() => {
			ie();
		}, { editor: a });
	}), a.registerCommand(ss, (e, t) => (k(o, t), ie(), !1), 4))), ma(), D(), i();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/Toolbar.svelte
var SE = /* @__PURE__ */ R("<!> <div class=\"toolbar\"><!></div>", 1);
function CE(e, t) {
	E(t, !0);
	let n = () => O(s, "$activeEditor", i), r = () => O(c, "$blockType", i), [i, a] = Et(), o = sh(), s = xt(o);
	rt("activeEditor", s), rt("isBold", xt(!1)), rt("isItalic", xt(!1)), rt("isUnderline", xt(!1)), rt("isStrikethrough", xt(!1)), rt("isSubscript", xt(!1)), rt("isSuperscript", xt(!1)), rt("isCode", xt(!1));
	let c = xt("paragraph");
	rt("blockType", c), rt("selectedElementKey", xt(null)), rt("fontSize", xt("15px")), rt("fontFamily", xt("Arial")), rt("fontColor", xt("#000")), rt("bgColor", xt("#fff")), rt("isRTL", xt(!1)), rt("codeLanguage", xt("")), rt("codeTheme", xt("one-light")), rt("isLink", xt(!1)), rt("isImageCaption", xt(!1));
	var l = SE(), u = Rn(l);
	xE(u, {});
	var d = P(u, 2);
	_i(N(d), () => t.children ?? v, () => ({
		editor: o,
		activeEditor: n(),
		blockType: r()
	})), T(d), z(e, l), D(), a();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/dialogs/InsertImageUriDialogBody.svelte
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/generic/colorpicker/ColorPickerDropDown.svelte
function wE(e, t) {
	E(t, !0);
	let n = () => O(a, "$isEditable", r), [r, i] = Et(), a = lh(), o = V(t, "buttonIconClassName", 19, () => void 0), s = V(t, "buttonAriaLabel", 19, () => void 0), c = V(t, "stopCloseOnClickSelf", 3, !0);
	{
		let r = /* @__PURE__ */ Gt(() => !n());
		NC(e, {
			get buttonClassName() {
				return t.buttonClassName;
			},
			get buttonIconClassName() {
				return o();
			},
			get buttonAriaLabel() {
				return s();
			},
			get title() {
				return t.title;
			},
			get disabled() {
				return I(r);
			},
			get stopCloseOnClickSelf() {
				return c();
			},
			children: (e, n) => {
				nw(e, {
					get color() {
						return t.color;
					},
					get onChange() {
						return t.onChange;
					}
				});
			},
			$$slots: { default: !0 }
		});
	}
	D(), i();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/DropDownTextColorPicker.svelte
function TE(e, t) {
	E(t, !1);
	let n = () => O(s, "$activeEditor", i), r = () => O(o, "$fontColor", i), [i, a] = Et(), o = nt("fontColor"), s = uh(), c = (e, t) => {
		l({ color: e }, t);
	}, l = (e, t) => {
		n().update(() => {
			let t = K();
			t !== null && Ip(t, e);
		}, t ? { tag: Vc } : {});
	};
	ma(), wE(e, {
		buttonClassName: "toolbar-item color-picker",
		buttonIconClassName: "icon font-color",
		buttonAriaLabel: "Formatting text color",
		title: "Text color",
		get color() {
			return r();
		},
		onChange: c
	}), D(), a();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/DropDownBackColorPicker.svelte
function EE(e, t) {
	E(t, !1);
	let n = () => O(s, "$activeEditor", i), r = () => O(o, "$bgColor", i), [i, a] = Et(), o = nt("bgColor"), s = uh(), c = (e, t) => {
		l({ "background-color": e }, t);
	}, l = (e, t) => {
		n().update(() => {
			let t = K();
			t !== null && Ip(t, e);
		}, t ? { tag: Vc } : {});
	};
	ma(), wE(e, {
		buttonClassName: "toolbar-item color-picker",
		buttonIconClassName: "icon bg-color",
		title: "Background color",
		get color() {
			return r();
		},
		onChange: c
	}), D(), a();
}
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/FontSizeEntry.svelte
Qr(["click", "keydown"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/InsertLink.svelte
var DE = /* @__PURE__ */ R("<button aria-label=\"Insert link\" type=\"button\"><i class=\"format link\"></i></button>");
function OE(e, t) {
	E(t, !1);
	let n = () => O(c, "$isEditable", a), r = () => O(s, "$activeEditor", a), i = () => O(l, "$isLink", a), [a, o] = Et(), s = uh(), c = lh(), l = nt("isLink");
	ma();
	var u = DE();
	F(() => {
		u.disabled = !n(), qi(u, 1, "toolbar-item spaced " + (i() ? "active" : "")), B(u, "title", `Insert link (${ww.INSERT_LINK})`);
	}), L("click", u, () => rS(r(), i())), z(e, u), D(), o();
}
Qr(["click"]);
//#endregion
//#region node_modules/svelte-lexical/dist/components/toolbar/MoreStylesDropDown/MoreStylesDropDown.svelte
function kE(e, t) {
	E(t, !0);
	let n = () => O(a, "$isEditable", r), [r, i] = Et(), a = lh();
	{
		let r = /* @__PURE__ */ Gt(() => !n());
		NC(e, {
			get disabled() {
				return I(r);
			},
			buttonClassName: "toolbar-item spaced",
			buttonLabel: "",
			buttonAriaLabel: "Formatting options for additional text styles",
			buttonIconClassName: "icon dropdown-more",
			children: (e, n) => {
				var r = ci();
				_i(Rn(r), () => t.children ?? v), z(e, r);
			},
			$$slots: { default: !0 }
		});
	}
	D(), i();
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/plugins/TreeView/TreeView.svelte
Qr(["change"]), Qr(["click"]), Qr(["click"]), Qr(["change"]), Qr(["click"]), Qr(["click"]), Qr(["click"]), Qr(["click"]), Qr(["click"]), Qr(["click"]), Qr(["click"]), Qr(["click", "change"]);
//#endregion
//#region node_modules/svelte-lexical/dist/core/initializeEditor.js
var AE = { tag: Uc };
function jE(e, t) {
	if (t !== null) {
		if (t === void 0) e.update(() => {
			let t = gd();
			if (t.isEmpty()) {
				let n = J();
				t.append(n);
				let r = Qp ? document.activeElement : null;
				(K() !== null || r !== null && r === e.getRootElement()) && n.select();
			}
		}, AE);
		else if (t !== null) switch (typeof t) {
			case "string": {
				let n = e.parseEditorState(t);
				e.setEditorState(n, AE);
				break;
			}
			case "object":
				e.setEditorState(t, AE);
				break;
			case "function": e.update(() => {
				gd().isEmpty() && t(e);
			}, AE);
		}
	}
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/editorExtensions.js
function ME(e) {
	e.extensions = {};
}
//#endregion
//#region node_modules/svelte-lexical/dist/core/Composer.svelte
function NE(e, t) {
	E(t, !0);
	let n = () => O(p, "$isEditable", r), [r, i] = Et(), { theme: a, namespace: o, nodes: s, onError: c, editorState: l, editable: u, html: d } = t.initialConfig, f = Lu({
		editable: u,
		html: d,
		namespace: o,
		nodes: s,
		onError: (e) => c(e, f),
		theme: a
	});
	jE(f, l), ME(f), ch(f);
	let p = xt(u === void 0 || u);
	rt("isEditable", p), vi(() => (f.setEditable(n()), f.registerEditableListener((e) => {
		k(p, e);
	})));
	let m = Kh();
	dh(m), ph();
	function h() {
		return f;
	}
	function g() {
		return m;
	}
	var _ = {
		getEditor: h,
		getHistoryState: g
	}, y = ci();
	_i(Rn(y), () => t.children ?? v), z(e, y);
	var b = D(_);
	return i(), b;
}
//#endregion
//#region node_modules/svelte-lexical/dist/themes/default/editor/DefaultEditorTheme.js
var PE = {
	autocomplete: "SL_Theme__autocomplete",
	blockCursor: "SL_Theme__blockCursor",
	characterLimit: "SL_Theme__characterLimit",
	code: "SL_Theme__code",
	codeHighlight: {
		atrule: "SL_Theme__tokenAttr",
		attr: "SL_Theme__tokenAttr",
		boolean: "SL_Theme__tokenProperty",
		builtin: "SL_Theme__tokenSelector",
		cdata: "SL_Theme__tokenComment",
		char: "SL_Theme__tokenSelector",
		class: "SL_Theme__tokenFunction",
		"class-name": "SL_Theme__tokenFunction",
		comment: "SL_Theme__tokenComment",
		constant: "SL_Theme__tokenProperty",
		deleted: "SL_Theme__tokenDeleted",
		doctype: "SL_Theme__tokenComment",
		entity: "SL_Theme__tokenOperator",
		function: "SL_Theme__tokenFunction",
		important: "SL_Theme__tokenVariable",
		inserted: "SL_Theme__tokenInserted",
		keyword: "SL_Theme__tokenAttr",
		namespace: "SL_Theme__tokenVariable",
		number: "SL_Theme__tokenProperty",
		operator: "SL_Theme__tokenOperator",
		prolog: "SL_Theme__tokenComment",
		property: "SL_Theme__tokenProperty",
		punctuation: "SL_Theme__tokenPunctuation",
		regex: "SL_Theme__tokenVariable",
		selector: "SL_Theme__tokenSelector",
		string: "SL_Theme__tokenSelector",
		symbol: "SL_Theme__tokenProperty",
		tag: "SL_Theme__tokenProperty",
		unchanged: "SL_Theme__tokenUnchanged",
		url: "SL_Theme__tokenOperator",
		variable: "SL_Theme__tokenVariable"
	},
	embedBlock: {
		base: "SL_Theme__embedBlock",
		focus: "SL_Theme__embedBlockFocus"
	},
	hashtag: "SL_Theme__hashtag",
	heading: {
		h1: "SL_Theme__h1",
		h2: "SL_Theme__h2",
		h3: "SL_Theme__h3",
		h4: "SL_Theme__h4",
		h5: "SL_Theme__h5",
		h6: "SL_Theme__h6"
	},
	hr: "SL_Theme__hr",
	hrSelected: "SL_Theme__hrSelected",
	image: "editor-image",
	indent: "SL_Theme__indent",
	inlineImage: "inline-editor-image",
	layoutContainer: "SL_Theme__layoutContainer",
	layoutItem: "SL_Theme__layoutItem",
	link: "SL_Theme__link",
	list: {
		checklist: "SL_Theme__checklist",
		listitem: "SL_Theme__listItem",
		listitemChecked: "SL_Theme__listItemChecked",
		listitemUnchecked: "SL_Theme__listItemUnchecked",
		nested: { listitem: "SL_Theme__nestedListItem" },
		olDepth: [
			"SL_Theme__ol1",
			"SL_Theme__ol2",
			"SL_Theme__ol3",
			"SL_Theme__ol4",
			"SL_Theme__ol5"
		],
		ul: "SL_Theme__ul"
	},
	ltr: "SL_Theme__ltr",
	mark: "SL_Theme__mark",
	markOverlap: "SL_Theme__markOverlap",
	paragraph: "SL_Theme__paragraph",
	quote: "SL_Theme__quote",
	rtl: "SL_Theme__rtl",
	specialText: "SL_Theme__specialText",
	tab: "SL_Theme__tabNode",
	table: "SL_Theme__table",
	tableAddColumns: "SL_Theme__tableAddColumns",
	tableAddRows: "SL_Theme__tableAddRows",
	tableAlignment: {
		center: "SL_Theme__tableAlignmentCenter",
		right: "SL_Theme__tableAlignmentRight"
	},
	tableCell: "SL_Theme__tableCell",
	tableCellActionButton: "SL_Theme__tableCellActionButton",
	tableCellActionButtonContainer: "SL_Theme__tableCellActionButtonContainer",
	tableCellHeader: "SL_Theme__tableCellHeader",
	tableCellResizer: "SL_Theme__tableCellResizer",
	tableCellSelected: "SL_Theme__tableCellSelected",
	tableFrozenColumn: "SL_Theme__tableFrozenColumn",
	tableFrozenRow: "SL_Theme__tableFrozenRow",
	tableRowStriping: "SL_Theme__tableRowStriping",
	tableScrollableWrapper: "SL_Theme__tableScrollableWrapper",
	tableSelected: "SL_Theme__tableSelected",
	tableSelection: "SL_Theme__tableSelection",
	text: {
		bold: "SL_Theme__textBold",
		capitalize: "SL_Theme__textCapitalize",
		code: "SL_Theme__textCode",
		highlight: "SL_Theme__textHighlight",
		italic: "SL_Theme__textItalic",
		lowercase: "SL_Theme__textLowercase",
		strikethrough: "SL_Theme__textStrikethrough",
		subscript: "SL_Theme__textSubscript",
		superscript: "SL_Theme__textSuperscript",
		underline: "SL_Theme__textUnderline",
		underlineStrikethrough: "SL_Theme__textUnderlineStrikethrough",
		uppercase: "SL_Theme__textUppercase"
	}
}, FE = /* @__PURE__ */ R("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>", 1), IE = /* @__PURE__ */ R("<div class=\"editor-shell svelte-lexical border border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 relative\"><!> <div class=\"editor-container relative border-t border-slate-200\"><div class=\"editor-scroller min-h-[350px] max-h-[600px] overflow-y-auto\"><div class=\"editor prose max-w-none w-full\"><!></div></div> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div></div>");
function LE(e, t) {
	E(t, !0);
	let n = V(t, "value", 15), r = {
		theme: PE,
		namespace: "PortalBeritaFullEditor",
		nodes: [
			kh,
			Eh,
			hg,
			ug,
			Bg,
			xS,
			Uy,
			zy,
			d_,
			b_,
			vC,
			Px,
			Ty,
			nv,
			Z_,
			qx,
			Bx,
			Ex,
			OS
		],
		onError: (e) => {
			console.error(e);
		}
	}, i = /* @__PURE__ */ j(void 0), a = !0;
	function o(e) {
		if (typeof document > "u") return !1;
		let t = e.getRootElement();
		if (!t) return !1;
		let n = document.activeElement;
		return t === n || t.contains(n);
	}
	vi(() => {
		if (!I(i)) return;
		let e = I(i).getEditor();
		n() && e.update(() => {
			let t = new DOMParser().parseFromString(n(), "text/html"), r = vm(e, t), i = gd();
			i.clear(), i.append(...r);
		}), a = !1;
		let t = e.registerUpdateListener(({ editorState: t }) => {
			a || t.read(() => {
				let t = ym(e, null);
				n() !== t && n(t);
			});
		});
		return () => {
			t();
		};
	}), Jn(() => {
		if (!I(i)) return;
		let e = I(i).getEditor(), t = "";
		e.getEditorState().read(() => {
			t = ym(e, null);
		});
		let r = o(e);
		n() !== t && !r && !a && e.update(() => {
			let t = new DOMParser().parseFromString(n() || "", "text/html"), r = vm(e, t), i = gd();
			i.clear(), i.append(...r);
		});
	}), fa(NE(e, {
		get initialConfig() {
			return r;
		},
		children: (e, t) => {
			var n = IE(), r = N(n);
			CE(r, {
				children: (e, t) => {
					var n = FE(), r = Rn(n);
					tE(r, {});
					var i = P(r, 2);
					$T(i, {});
					var a = P(i, 2);
					ZT(a, {});
					var o = P(a, 2);
					qT(o, {});
					var s = P(o, 2);
					ZT(s, {});
					var c = P(s, 2);
					vE(c, {});
					var l = P(c, 2);
					bE(l, {});
					var u = P(l, 2);
					ZT(u, {});
					var d = P(u, 2);
					YT(d, {});
					var f = P(d, 2);
					rE(f, {});
					var p = P(f, 2);
					aE(p, {});
					var m = P(p, 2);
					sE(m, {});
					var h = P(m, 2);
					ZT(h, {});
					var g = P(h, 2);
					TE(g, {});
					var _ = P(g, 2);
					EE(_, {});
					var v = P(_, 2);
					ZT(v, {});
					var y = P(v, 2);
					OE(y, {});
					var b = P(y, 2);
					gE(b, {});
					var x = P(b, 2);
					kE(x, {});
					var S = P(x, 2);
					ZT(S, {}), hE(P(S, 2), {}), z(e, n);
				},
				$$slots: { default: !0 }
			});
			var i = P(r, 2), a = N(i), o = N(a);
			Xg(N(o), { class: "focus:outline-none p-4 min-h-[350px]" }), T(o), T(a);
			var s = P(a, 2);
			Vh(s, {});
			var c = P(s, 2);
			qh(c, {});
			var l = P(c, 2);
			Ng(l, {});
			var u = P(l, 2);
			Pg(u, {});
			var d = P(u, 2);
			Wg(d, {});
			var f = P(d, 2);
			TS(f, {});
			var p = P(f, 2);
			NS(p, {});
			var m = P(p, 2);
			MS(m, {});
			var h = P(m, 2);
			FS(h, {});
			var g = P(h, 2);
			xC(g, {});
			var _ = P(g, 2);
			SC(_, {});
			var v = P(_, 2);
			hw(v, {});
			var y = P(v, 2);
			yw(y, {});
			var b = P(y, 2);
			Cw(b, {});
			var x = P(b, 2);
			Xx(x, {});
			var S = P(x, 2);
			Ux(S, {});
			var C = P(S, 2);
			kx(C, {});
			var ee = P(C, 2);
			Tw(ee, {});
			var te = P(ee, 2);
			IT(te, {}), AS(P(te, 2), {}), T(i), T(n), z(e, n);
		},
		$$slots: { default: !0 }
	}), (e) => M(i, e, !0), () => I(i)), D();
}
//#endregion
//#region node_modules/svelte-sonner/dist/internal/helpers.js
var RE = typeof document < "u", zE = 0, BE = class {
	#e = /* @__PURE__ */ j(En([]));
	get toasts() {
		return I(this.#e);
	}
	set toasts(e) {
		M(this.#e, e, !0);
	}
	#t = /* @__PURE__ */ j(En([]));
	get heights() {
		return I(this.#t);
	}
	set heights(e) {
		M(this.#t, e, !0);
	}
	#n = (e) => {
		let t = this.toasts.findIndex((t) => t.id === e);
		return t === -1 ? null : t;
	};
	addToast = (e) => {
		RE && this.toasts.unshift(e);
	};
	updateToast = ({ id: e, data: t, type: n, message: r }) => {
		let i = this.toasts.findIndex((t) => t.id === e), a = this.toasts[i];
		this.toasts[i] = {
			...a,
			...t,
			id: e,
			title: r,
			type: n,
			updated: !0
		};
	};
	create = (e) => {
		let { message: t, ...n } = e, r = typeof e?.id == "number" || e.id && e.id?.length > 0 ? e.id : zE++, i = e.dismissible === void 0 ? e.dismissable === void 0 || e.dismissable : e.dismissible, a = e.type === void 0 ? "default" : e.type;
		return Ur(() => {
			this.toasts.find((e) => e.id === r) ? this.updateToast({
				id: r,
				data: e,
				type: a,
				message: t,
				dismissible: i
			}) : this.addToast({
				...n,
				id: r,
				title: t,
				dismissible: i,
				type: a
			});
		}), r;
	};
	dismiss = (e) => (Ur(() => {
		if (e === void 0) {
			this.toasts = this.toasts.map((e) => ({
				...e,
				dismiss: !0
			}));
			return;
		}
		let t = this.toasts.findIndex((t) => t.id === e);
		this.toasts[t] && (this.toasts[t] = {
			...this.toasts[t],
			dismiss: !0
		});
	}), e);
	remove = (e) => {
		if (e === void 0) {
			this.toasts = [];
			return;
		}
		let t = this.#n(e);
		if (t !== null) return this.toasts.splice(t, 1), e;
	};
	message = (e, t) => this.create({
		...t,
		type: "default",
		message: e
	});
	error = (e, t) => this.create({
		...t,
		type: "error",
		message: e
	});
	success = (e, t) => this.create({
		...t,
		type: "success",
		message: e
	});
	info = (e, t) => this.create({
		...t,
		type: "info",
		message: e
	});
	warning = (e, t) => this.create({
		...t,
		type: "warning",
		message: e
	});
	loading = (e, t) => this.create({
		...t,
		type: "loading",
		message: e
	});
	promise = (e, t) => {
		if (!t) return;
		let n;
		t.loading !== void 0 && (n = this.create({
			...t,
			promise: e,
			type: "loading",
			message: typeof t.loading == "string" ? t.loading : t.loading()
		}));
		let r = e instanceof Promise ? e : e(), i = n !== void 0;
		return r.then((e) => {
			if (typeof e == "object" && e && "ok" in e && typeof e.ok == "boolean" && !e.ok) {
				i = !1;
				let t = VE(e);
				this.create({
					id: n,
					type: "error",
					message: t
				});
			} else if (t.success !== void 0) {
				i = !1;
				let r = typeof t.success == "function" ? t.success(e) : t.success;
				this.create({
					id: n,
					type: "success",
					message: r
				});
			}
		}).catch((e) => {
			if (t.error !== void 0) {
				i = !1;
				let r = typeof t.error == "function" ? t.error(e) : t.error;
				this.create({
					id: n,
					type: "error",
					message: r
				});
			}
		}).finally(() => {
			i && (this.dismiss(n), n = void 0), t.finally?.();
		}), n;
	};
	custom = (e, t) => {
		let n = t?.id || zE++;
		return this.create({
			component: e,
			id: n,
			...t
		}), n;
	};
	removeHeight = (e) => {
		this.heights = this.heights.filter((t) => t.toastId !== e);
	};
	setHeight = (e) => {
		let t = this.#n(e.toastId);
		if (t === null) {
			this.heights.push(e);
			return;
		}
		this.heights[t] = e;
	};
	reset = () => {
		this.toasts = [], this.heights = [];
	};
};
function VE(e) {
	return e && typeof e == "object" && "status" in e ? `HTTP error! Status: ${e.status}` : `Error! ${e}`;
}
var HE = new BE();
function UE(e, t) {
	return HE.create({
		message: e,
		...t
	});
}
var WE = Object.assign(UE, {
	success: HE.success,
	info: HE.info,
	warning: HE.warning,
	error: HE.error,
	custom: HE.custom,
	message: HE.message,
	promise: HE.promise,
	dismiss: HE.dismiss,
	loading: HE.loading,
	getActiveToasts: () => HE.toasts.filter((e) => !e.dismiss)
}), GE = /* @__PURE__ */ R("<tr><td colspan=\"5\" class=\"px-6 py-12 text-center text-slate-500\">Memuat data...</td></tr>"), KE = /* @__PURE__ */ R("<tr><td colspan=\"5\" class=\"px-6 py-12 text-center text-slate-500\">Belum ada berita.</td></tr>"), qE = /* @__PURE__ */ R("<img alt=\"Foto\" class=\"h-12 w-16 object-cover rounded shadow-sm\"/>"), JE = /* @__PURE__ */ R("<div class=\"h-12 w-16 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200\">No Img</div>"), YE = /* @__PURE__ */ R("<tr class=\"hover:bg-slate-50 transition-colors\"><td class=\"px-6 py-4 whitespace-nowrap\"><!></td><td class=\"px-6 py-4\"><div class=\"text-sm font-medium text-slate-900 line-clamp-2\"> </div> <div class=\"text-xs text-slate-500\"> </div></td><td class=\"px-6 py-4 whitespace-nowrap text-sm text-slate-500\"><span class=\"px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200\"> </span></td><td class=\"px-6 py-4 whitespace-nowrap text-sm text-slate-500\"> </td><td class=\"px-6 py-4 whitespace-nowrap text-right text-sm font-medium\"><button class=\"text-indigo-600 hover:text-indigo-900 mr-4\">Edit</button> <button class=\"text-red-600 hover:text-red-900\">Hapus</button></td></tr>"), XE = /* @__PURE__ */ R("<option> </option>"), ZE = /* @__PURE__ */ R("<div class=\"mt-2 mb-2\"><img alt=\"Preview\" class=\"h-32 rounded border border-slate-200\"/></div>"), QE = /* @__PURE__ */ R("<div class=\"fixed inset-0 z-50 overflow-y-auto\" aria-labelledby=\"modal-title\" role=\"dialog\" aria-modal=\"true\"><div class=\"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\"><div class=\"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity\" aria-hidden=\"true\"></div> <span class=\"hidden sm:inline-block sm:align-middle sm:h-screen\" aria-hidden=\"true\">&#8203;</span> <div class=\"relative z-10 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full\"><form><div class=\"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4\"><h3 class=\"text-xl leading-6 font-semibold text-slate-900 mb-6 border-b pb-4\" id=\"modal-title\"> </h3> <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6\"><div class=\"col-span-2\"><label for=\"judul\" class=\"block text-sm font-medium text-slate-700\">Judul Berita</label> <input type=\"text\" id=\"judul\" required=\"\" class=\"mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\"/></div> <div><label for=\"kategori\" class=\"block text-sm font-medium text-slate-700\">Kategori</label> <select id=\"kategori\" required=\"\" class=\"mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white\"><option disabled=\"\">Pilih Kategori...</option><!></select></div> <div><label for=\"lokasi\" class=\"block text-sm font-medium text-slate-700\">Lokasi</label> <input type=\"text\" id=\"lokasi\" required=\"\" placeholder=\"Misal: Jakarta, Indonesia\" class=\"mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm\"/></div> <div class=\"col-span-2\"><label for=\"foto\" class=\"block text-sm font-medium text-slate-700\">Upload Foto</label> <!> <input type=\"file\" id=\"foto\" accept=\"image/*\" class=\"mt-1 block w-full text-sm text-slate-500\n									file:mr-4 file:py-2 file:px-4\n									file:rounded-full file:border-0\n									file:text-sm file:font-semibold\n									file:bg-indigo-50 file:text-indigo-700\n									hover:file:bg-indigo-100 transition-colors\n									\"/></div> <div class=\"col-span-2 relative\"><label for=\"deskripsi\" class=\"block text-sm font-medium text-slate-700 mb-1\">Isi Berita</label> <!> <textarea class=\"absolute w-0 h-0 opacity-0 pointer-events-none\" required=\"\"></textarea></div></div></div> <div class=\"bg-slate-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl border-t border-slate-200\"><button type=\"submit\" class=\"w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 transition-colors\"> </button> <button type=\"button\" class=\"mt-3 w-full inline-flex justify-center rounded-lg border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors\">Batal</button></div></form></div></div></div>"), $E = /* @__PURE__ */ R("<div class=\"mb-6 flex justify-between items-center\"><div><h1 class=\"text-2xl font-bold text-slate-900\">Daftar Berita</h1> <p class=\"text-slate-500 text-sm mt-1\">Kelola semua artikel berita yang ada di portal Anda.</p></div> <button class=\"bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm\"><svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4v16m8-8H4\"></path></svg> Tulis Berita</button></div> <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\"><div class=\"overflow-x-auto\"><table class=\"min-w-full divide-y divide-slate-200\"><thead class=\"bg-slate-50\"><tr><th class=\"px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase\">Foto</th><th class=\"px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase\">Judul</th><th class=\"px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase\">Kategori</th><th class=\"px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase\">Tanggal</th><th class=\"px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase\">Aksi</th></tr></thead><tbody class=\"bg-white divide-y divide-slate-200\"><!></tbody></table></div></div> <!>", 1);
function eD(e, t) {
	E(t, !0);
	let n = V(t, "apiBaseUrl", 3, "/api/news");
	async function r(e, t = {}) {
		let r = await fetch(`${n()}${e.replace("/admin", "")}`, t);
		if (!r.ok) throw Error(await r.text());
		return r.headers.get("content-type")?.includes("application/json") ? await r.json() : await r.text();
	}
	let i = /* @__PURE__ */ j(En([])), a = /* @__PURE__ */ j(En([])), o = /* @__PURE__ */ j(!0), s = /* @__PURE__ */ j(!1), c = /* @__PURE__ */ j(!1), l = /* @__PURE__ */ j(null), u = /* @__PURE__ */ j(""), d = /* @__PURE__ */ j(""), f = /* @__PURE__ */ j(""), p = /* @__PURE__ */ j(""), m = /* @__PURE__ */ j(null), h = /* @__PURE__ */ j("");
	async function g() {
		M(o, !0);
		try {
			let [e, t] = await Promise.all([r("/berita"), r("/kategori")]);
			M(i, e, !0), M(a, t, !0);
		} catch (e) {
			console.error(e), WE.error("Gagal memuat data");
		} finally {
			M(o, !1);
		}
	}
	vi(() => {
		g();
	});
	function _(e = null) {
		e ? (M(l, e.id, !0), M(u, e.judul, !0), M(d, e.lokasi, !0), M(f, e.kategori_id, !0), M(p, e.deskripsi, !0), M(h, e.foto, !0)) : (M(l, null), M(u, ""), M(d, ""), M(f, ""), M(p, ""), M(h, "")), M(m, null), M(s, !0);
	}
	function v() {
		M(s, !1);
	}
	function y(e) {
		let t = e.target.files[0];
		t && M(m, t, !0);
	}
	async function b() {
		let e = !I(p) || I(p).trim() === "" || I(p).trim() === "<p></p>";
		if (!I(u) || !I(d) || !I(f) || e) {
			WE.error("Mohon lengkapi semua field!");
			return;
		}
		if (I(m) && I(m).size > 5242880) {
			WE.error("Ukuran foto terlalu besar. Maksimal 5 MB.");
			return;
		}
		M(c, !0);
		try {
			let e = new FormData();
			e.append("judul", I(u)), e.append("lokasi", I(d)), e.append("kategori_id", I(f).toString()), e.append("deskripsi", I(p)), I(m) && e.append("foto", I(m)), I(l) ? (await r(`/admin/berita/${I(l)}`, {
				method: "PUT",
				body: e
			}), WE.success("Berita berhasil diperbarui!")) : (await r("/admin/berita", {
				method: "POST",
				body: e
			}), WE.success("Berita berhasil ditambahkan!")), v(), g();
		} catch (e) {
			WE.error(e.message || "Gagal menyimpan berita");
		} finally {
			M(c, !1);
		}
	}
	async function x(e) {
		if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) try {
			await r(`/admin/berita/${e}`, { method: "DELETE" }), WE.success("Berita berhasil dihapus!"), g();
		} catch (e) {
			WE.error(e.message || "Gagal menghapus berita");
		}
	}
	var S = $E();
	Ri("1jslhvp", (e) => {
		Qn(() => {
			An.title = "Manajemen Berita - Admin Panel";
		});
	});
	var C = Rn(S), ee = P(N(C), 2);
	T(C);
	var te = P(C, 2), ne = N(te), re = N(ne), ie = P(N(re)), ae = N(ie), oe = (e) => {
		z(e, GE());
	}, se = (e) => {
		z(e, KE());
	}, ce = (e) => {
		var t = ci();
		Ai(Rn(t), 17, () => I(i), Ei, (e, t) => {
			var n = YE(), r = N(n), i = N(r), a = (e) => {
				var n = qE();
				F(() => B(n, "src", `http://localhost:3000${I(t).foto ?? ""}`)), z(e, n);
			}, o = (e) => {
				z(e, JE());
			};
			Ti(i, (e) => {
				I(t).foto ? e(a) : e(o, -1);
			}), T(r);
			var s = P(r), c = N(s), l = N(c, !0);
			T(c);
			var u = P(c, 2), d = N(u, !0);
			T(u), T(s);
			var f = P(s), p = N(f), m = N(p, !0);
			T(p), T(f);
			var h = P(f), g = N(h, !0);
			T(h);
			var v = P(h), y = N(v), b = P(y, 2);
			T(v), T(n), F((e) => {
				B(c, "title", I(t).judul), di(l, I(t).judul), di(d, I(t).lokasi), di(m, I(t).kategori?.nama || "-"), di(g, e);
			}, [() => new Date(I(t).created_at).toLocaleDateString("id-ID")]), Zr("click", y, () => _(I(t))), Zr("click", b, () => x(I(t).id)), z(e, n);
		}), z(e, t);
	};
	Ti(ae, (e) => {
		I(o) ? e(oe) : I(i).length === 0 ? e(se, 1) : e(ce, -1);
	}), T(ie), T(re), T(ne), T(te);
	var le = P(te, 2), ue = (e) => {
		var t = QE(), n = N(t), r = N(n), i = P(r, 4), o = N(i), s = N(o), g = N(s), _ = N(g, !0);
		T(g);
		var x = P(g, 2), S = N(x), C = P(N(S), 2);
		ra(C), T(S);
		var ee = P(S, 2), te = P(N(ee), 2), ne = N(te);
		ne.value = ne.__value = "", Ai(P(ne), 17, () => I(a), Ei, (e, t) => {
			var n = XE(), r = N(n, !0);
			T(n);
			var i = {};
			F(() => {
				di(r, I(t).nama), i !== (i = I(t).id) && (n.value = (n.__value = I(t).id) ?? "");
			}), z(e, n);
		}), T(te), T(ee);
		var re = P(ee, 2), ie = P(N(re), 2);
		ra(ie), T(re);
		var ae = P(re, 2), oe = P(N(ae), 2), se = (e) => {
			var t = ZE(), n = N(t);
			T(t), F(() => B(n, "src", `${API_URL ?? ""}${I(h) ?? ""}`)), z(e, t);
		};
		Ti(oe, (e) => {
			I(h) && !I(m) && e(se);
		});
		var ce = P(oe, 2);
		T(ae);
		var le = P(ae, 2), ue = P(N(le), 2);
		LE(ue, {
			get value() {
				return I(p);
			},
			set value(e) {
				M(p, e, !0);
			}
		});
		var de = P(ue, 2);
		kt(de), T(le), T(x), T(s);
		var fe = P(s, 2), pe = N(fe), me = N(pe, !0);
		T(pe);
		var he = P(pe, 2);
		T(fe), T(o), T(i), T(n), T(t), F(() => {
			di(_, I(l) ? "Edit Berita" : "Tulis Berita Baru"), pe.disabled = I(c), di(me, I(c) ? "Menyimpan..." : "Simpan & Publikasikan");
		}), Zr("click", r, v), ca(C, () => I(u), (e) => M(u, e)), Qi(te, () => I(f), (e) => M(f, e)), ca(ie, () => I(d), (e) => M(d, e)), Zr("change", ce, y), ca(de, () => I(p), (e) => M(p, e)), Zr("click", he, v), Zr("submit", o, pa(b)), z(e, t);
	};
	Ti(le, (e) => {
		I(s) && e(ue);
	}), Zr("click", ee, () => _()), z(e, S), D();
}
//#endregion
//#region src/lib/NewsCategoryManager.svelte
var tD = /* @__PURE__ */ R("<tr><td colspan=\"3\" class=\"px-6 py-12 text-center text-slate-500\">Memuat data...</td></tr>"), nD = /* @__PURE__ */ R("<tr><td colspan=\"3\" class=\"px-6 py-12 text-center text-slate-500\">Belum ada kategori.</td></tr>"), rD = /* @__PURE__ */ R("<tr class=\"hover:bg-slate-50 transition-colors\"><td class=\"px-6 py-4 whitespace-nowrap text-sm text-slate-500\"> </td><td class=\"px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900\"> </td><td class=\"px-6 py-4 whitespace-nowrap text-right text-sm font-medium\"><button class=\"text-indigo-600 hover:text-indigo-900 mr-4\">Edit</button> <button class=\"text-red-600 hover:text-red-900\">Hapus</button></td></tr>"), iD = /* @__PURE__ */ R("<div class=\"fixed inset-0 z-50 overflow-y-auto\" aria-labelledby=\"modal-title\" role=\"dialog\" aria-modal=\"true\"><div class=\"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\"><div class=\"fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity\" aria-hidden=\"true\"></div> <span class=\"hidden sm:inline-block sm:align-middle sm:h-screen\" aria-hidden=\"true\">&#8203;</span> <div class=\"relative z-10 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full\"><form><div class=\"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4\"><div class=\"sm:flex sm:items-start\"><div class=\"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full\"><h3 class=\"text-lg leading-6 font-medium text-slate-900\" id=\"modal-title\"> </h3> <div class=\"mt-4\"><label for=\"nama\" class=\"block text-sm font-medium text-slate-700\">Nama Kategori</label> <input type=\"text\" id=\"nama\" required=\"\" class=\"mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm\" placeholder=\"Misal: Teknologi, Olahraga\"/></div></div></div></div> <div class=\"bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl\"><button type=\"submit\" class=\"w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50\"> </button> <button type=\"button\" class=\"mt-3 w-full inline-flex justify-center rounded-lg border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm\">Batal</button></div></form></div></div></div>"), aD = /* @__PURE__ */ R("<div class=\"mb-6 flex justify-between items-center\"><div><h1 class=\"text-2xl font-bold text-slate-900\">Kategori Berita</h1> <p class=\"text-slate-500 text-sm mt-1\">Kelola data kategori berita di sistem.</p></div> <button class=\"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm\"><svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 4v16m8-8H4\"></path></svg> Tambah Kategori</button></div> <div class=\"bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden\"><div class=\"overflow-x-auto\"><table class=\"min-w-full divide-y divide-slate-200\"><thead class=\"bg-slate-50\"><tr><th scope=\"col\" class=\"px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-16\">ID</th><th scope=\"col\" class=\"px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider\">Nama Kategori</th><th scope=\"col\" class=\"px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider w-32\">Aksi</th></tr></thead><tbody class=\"bg-white divide-y divide-slate-200\"><!></tbody></table></div></div> <!>", 1);
function oD(e, t) {
	E(t, !0);
	let n = V(t, "apiBaseUrl", 3, "/api/news"), r = [], i = !0, a = "", o = null, s = !1, c = !1;
	async function l(e, t = {}) {
		let r = await fetch(`${n()}${e.replace("/admin", "")}`, {
			...t,
			headers: {
				...t.headers,
				"Content-Type": "application/json"
			}
		});
		if (!r.ok) throw Error(await r.text());
		return await r.json();
	}
	async function u() {
		i = !0;
		try {
			r = await l("/kategori");
		} catch (e) {
			console.error(e), alert("Gagal memuat kategori");
		} finally {
			i = !1;
		}
	}
	vi(() => {
		u();
	});
	function d(e = null) {
		e ? (o = e.id, a = e.nama) : (o = null, a = ""), s = !0;
	}
	function f() {
		s = !1, o = null, a = "";
	}
	async function p() {
		if (a.trim()) {
			c = !0;
			try {
				o ? await l(`/admin/kategori/${o}`, {
					method: "PUT",
					body: JSON.stringify({ nama: a })
				}) : await l("/admin/kategori", {
					method: "POST",
					body: JSON.stringify({ nama: a })
				}), f(), u();
			} catch (e) {
				alert(e.message);
			} finally {
				c = !1;
			}
		}
	}
	async function m(e) {
		if (confirm("Apakah Anda yakin ingin menghapus kategori ini?")) try {
			await l(`/admin/kategori/${e}`, { method: "DELETE" }), u();
		} catch (e) {
			alert(e.message);
		}
	}
	var h = aD();
	Ri("omfk99", (e) => {
		Qn(() => {
			An.title = "Manajemen Kategori - Admin Panel";
		});
	});
	var g = Rn(h), _ = P(N(g), 2);
	T(g);
	var v = P(g, 2), y = N(v), b = N(y), x = P(N(b)), S = N(x), C = (e) => {
		z(e, tD());
	}, ee = (e) => {
		z(e, nD());
	}, te = (e) => {
		var t = ci();
		Ai(Rn(t), 17, () => r, Ei, (e, t) => {
			var n = rD(), r = N(n), i = N(r, !0);
			T(r);
			var a = P(r), o = N(a, !0);
			T(a);
			var s = P(a), c = N(s), l = P(c, 2);
			T(s), T(n), F(() => {
				di(i, I(t).id), di(o, I(t).nama);
			}), Zr("click", c, () => d(I(t))), Zr("click", l, () => m(I(t).id)), z(e, n);
		}), z(e, t);
	};
	Ti(S, (e) => {
		i ? e(C) : r.length === 0 ? e(ee, 1) : e(te, -1);
	}), T(x), T(b), T(y), T(v);
	var ne = P(v, 2), re = (e) => {
		var t = iD(), n = N(t), r = N(n), i = P(r, 4), s = N(i), l = N(s), u = N(l), d = N(u), m = N(d), h = N(m, !0);
		T(m);
		var g = P(m, 2), _ = P(N(g), 2);
		ra(_), T(g), T(d), T(u), T(l);
		var v = P(l, 2), y = N(v), b = N(y, !0);
		T(y);
		var x = P(y, 2);
		T(v), T(s), T(i), T(n), T(t), F(() => {
			di(h, o ? "Edit Kategori" : "Tambah Kategori Baru"), y.disabled = c, di(b, c ? "Menyimpan..." : "Simpan");
		}), Zr("click", r, f), ca(_, () => a, (e) => a = e), Zr("click", x, f), Zr("submit", s, pa(p)), z(e, t);
	};
	Ti(ne, (e) => {
		s && e(re);
	}), Zr("click", _, () => d()), z(e, h), D();
}
//#endregion
//#region src/main.ts
typeof window < "u" && window.CMS && (window.CMS.registerMenu({
	name: "Berita",
	icon: "newspaper",
	route: "/admin/berita",
	component: eD,
	mountFunction: (e, t) => fi(eD, {
		target: e,
		props: t
	})
}), window.CMS.registerMenu({
	name: "Kategori",
	icon: "folder",
	route: "/admin/kategori",
	component: oD,
	mountFunction: (e, t) => fi(oD, {
		target: e,
		props: t
	})
}));
//#endregion
