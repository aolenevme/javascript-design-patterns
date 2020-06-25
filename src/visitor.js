/**
 * Represent an operation to be performed on the elements of an object
 * structure. Visitor lets you define a new operation without changing the
 * classes of the elements on which it operates.
 *
 * In JS world: If a language support multiple dispatch, you don’t need Visitor
 * pattern. Unfortunately, it is not true for Javascript either. But we can
 * create some sort of multidispatching using:
 * 1. strings instead of Clojure`s keywords (so it leads to elimination of
 * hierarchy at all).
 * 2. table-driven approach instead of switch cases
 * 3. and OCP is also violated. 🙃
 */
