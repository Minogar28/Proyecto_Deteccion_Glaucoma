def imprimir_rutas(app):
    print("📍 RUTAS ACTIVAS EN FLASK:")
    for rule in app.url_map.iter_rules():
        methods = ", ".join(sorted(rule.methods - {"HEAD", "OPTIONS"}))
        print(f" - [{methods}] {rule.rule} → {rule.endpoint}")
