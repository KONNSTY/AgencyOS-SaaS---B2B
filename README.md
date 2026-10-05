# ProposalGenius

Quellcode der Node.js-/Express-Anwendung ProposalGenius (AgencyOS). Die Anwendung enthält Angebotsansicht und Signatur, Firebase-Anbindung, Zahlungsintegration und E-Mail-Benachrichtigungen. Der Code liegt im Ordner [`PropsoalGenius`](./PropsoalGenius/) (Ordnername wie angefordert).

## Lokal starten

```bash
cd PropsoalGenius
npm ci
cp .env.example .env
# .env mit eigenen Werten ausfüllen
node tools/build-runtime-config.js
npm start
```

Der Firebase-Web-Key wird zur Laufzeit in `public/firebase-runtime-config.js` geschrieben. Firebase-Admin-Schlüssel, Stripe- und E-Mail-Secrets gehören nur in lokale Umgebungsvariablen oder einen externen Secret Store. `docker-compose.yml` ist eine neutrale Vorlage; `FIREBASE_KEY_PATH` verweist auf eine **lokale, ignorierte** Datei. Die HTML-Seiten für Impressum, Datenschutz und AGB enthalten Platzhalter und müssen vor einem produktiven Einsatz mit korrekten Betreiberangaben geprüft und ausgefüllt werden.

Interne Deployment- und Audit-Dokumente, Produktionsdaten, `.env`, Service-Account-Dateien und Abhängigkeiten sind absichtlich nicht Teil dieses öffentlichen Repositories.

## Urheberrecht

© 2026 KONNSTY. Alle Rechte vorbehalten. Für diesen Quellcode wird **keine Open-Source-Lizenz** erteilt. Vervielfältigung, Bearbeitung, Nutzung und Weiterverbreitung außerhalb der durch GitHub bereitgestellten Funktionen bedürfen einer vorherigen ausdrücklichen Erlaubnis des Rechteinhabers. Die Lizenzen der verwendeten Drittanbieter-Pakete gelten für deren jeweilige Inhalte separat.
