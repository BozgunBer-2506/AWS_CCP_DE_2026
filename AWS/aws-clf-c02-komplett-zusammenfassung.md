# ☁️ AWS Cloud Practitioner CLF-C02 – Komplette Zusammenfassung

> \*\*Für wen:\*\* Chris @ Syntax GmbH Weiterbildung  
> \*\*Prüfung:\*\* 65 Fragen · 90 Minuten · 700/1000 Punkte (70%) · 100 USD  
> \*\*Fragetypen:\*\* Multiple Choice (1 richtig) \& Multiple Response (2+ richtig)

\---

# Domain 1: Cloud Concepts (24%)

Hier geht es um das **Warum** – warum Cloud, warum AWS, wie denkt man Cloud-Architektur.

\---

## 1.1 Was ist Cloud Computing?

Cloud Computing bedeutet: IT-Ressourcen (Server, Speicher, Datenbanken, Netzwerk) über das Internet beziehen, statt sie selbst im Keller stehen zu haben. Du zahlst nur, was du nutzt – wie Strom.

**Die 5 Merkmale (laut NIST):**

* **On-Demand Self-Service** – Du klickst im Browser und hast in Minuten einen Server. Kein Ticket, kein Warten.
* **Broad Network Access** – Zugriff von überall (Laptop, Handy, API).
* **Resource Pooling** – AWS teilt Hardware unter vielen Kunden (Multi-Tenancy). Du merkst davon nichts.
* **Rapid Elasticity** – Ressourcen wachsen und schrumpfen automatisch mit deinem Bedarf.
* **Measured Service** – Du zahlst genau das, was du verbrauchst (Pay-as-you-go).

\---

## 1.2 Die 6 Vorteile der Cloud (laut AWS)

Das kommt **garantiert** in der Prüfung. Lern alle 6 auswendig:

|#|Vorteil|Einfach erklärt|
|-|-|-|
|1|**Trade capital expense for variable expense**|Statt teure Hardware kaufen (CapEx), zahlst du monatlich nur was du nutzt (OpEx). Wie Mieten statt Kaufen.|
|2|**Benefit from massive economies of scale**|AWS kauft Hardware in Massen → günstigere Preise als du allein jemals kriegen würdest.|
|3|**Stop guessing capacity**|Kein "Brauchen wir 10 oder 100 Server?" mehr. Skaliere hoch oder runter nach Bedarf.|
|4|**Increase speed and agility**|Neuer Server in 2 Minuten statt 4 Wochen Bestellung + Lieferung + Setup.|
|5|**Stop spending money running data centers**|Kein eigenes Rechenzentrum = kein Strom, keine Kühlung, keine Wachleute, kein Mietvertrag.|
|6|**Go global in minutes**|Deine App in Frankfurt, Tokyo und Virginia deployen – in Minuten, nicht Monaten.|

**Beispiel-Frage:** "Welcher Vorteil beschreibt, dass ein Unternehmen keine Hardware mehr im Voraus kaufen muss?"  
→ *Trade capital expense for variable expense*

\---

## 1.3 Cloud-Deployment-Modelle

|Modell|Bedeutung|Beispiel|
|-|-|-|
|**Public Cloud**|Alles in AWS/Azure/GCP. Kein eigenes Rechenzentrum.|Startup nutzt nur AWS|
|**Private Cloud**|Eigenes Rechenzentrum, aber mit Cloud-Technologie|Große Bank mit eigenem Rechenzentrum|
|**Hybrid Cloud**|Mix aus beidem. Teils eigene Server, teils AWS.|Firma hat sensible Daten on-premise, Rest in AWS|

\---

## 1.4 Cloud-Service-Modelle (IaaS, PaaS, SaaS)

Das ist wie Pizza bestellen – je höher das Modell, desto weniger machst du selbst:

|Modell|Du verwaltest|AWS verwaltet|AWS-Beispiel|Pizza-Vergleich|
|-|-|-|-|-|
|**IaaS**|OS, Apps, Daten, Middleware|Hardware, Netzwerk, Virtualisierung|EC2|Fertigteig kaufen, selbst belegen \& backen|
|**PaaS**|Nur deinen Code \& Daten|Alles andere (OS, Runtime, Server)|Elastic Beanstalk, Lambda|Pizza bestellen mit eigenen Wunschtoppings|
|**SaaS**|Nichts (nur nutzen)|Alles|Amazon WorkSpaces, Chime, Gmail|Fertige Pizza essen gehen|

**Beispiel-Frage:** "Ein Entwickler will nur seinen Code deployen, ohne sich um Server zu kümmern. Welches Modell?"  
→ *PaaS*

\---

## 1.5 AWS Well-Architected Framework (6 Säulen)

Das Framework beschreibt, wie man **gute** Cloud-Architekturen baut. 6 Säulen:

**1. Operational Excellence** – „Kann ich mein System gut betreiben?"  
Automatisierung, Monitoring, ständige Verbesserung. Beispiel: Deployments automatisieren statt manuell per SSH.

**2. Security** – „Sind Daten und Systeme geschützt?"  
Identitäten verwalten (IAM), Daten verschlüsseln, Netzwerk absichern. Beispiel: MFA für alle User aktivieren.

**3. Reliability** – „Überlebt mein System Ausfälle?"  
Multi-AZ, Backups, Auto Scaling, Disaster Recovery. Beispiel: Datenbank läuft in 2 Availability Zones – fällt eine aus, übernimmt die andere.

**4. Performance Efficiency** – „Nutze ich die richtigen Ressourcen effizient?"  
Richtige Instanztypen wählen, Caching nutzen, serverless wo möglich. Beispiel: CloudFront statt jede Anfrage zum Origin-Server schicken.

**5. Cost Optimization** – „Gebe ich nur aus, was nötig ist?"  
Reserved Instances, richtige Größe, ungenutzte Ressourcen abschalten. Beispiel: Dev-Server nachts automatisch stoppen.

**6. Sustainability** – „Minimiere ich den ökologischen Fußabdruck?"  
Effiziente Ressourcennutzung, weniger Verschwendung. Beispiel: Richtig dimensionierte Instanzen statt übergroße. *(Wurde 2021 als 6. Säule hinzugefügt – in der Prüfung sind es 6, nicht 5!)*

\---

## 1.6 AWS Cloud Adoption Framework (CAF)

Das CAF hilft Unternehmen, ihre **Migration in die Cloud zu planen**. Es hat 6 Perspektiven:

|Perspektive|Wer ist beteiligt?|Fokus|
|-|-|-|
|**Business**|Management, Stakeholder|Business Case, ROI|
|**People**|HR, Mitarbeiter|Schulung, Kultur, Rollen|
|**Governance**|CIO, Compliance|Risiko, Budget, Regeln|
|**Platform**|CTO, Architekten|Architektur, Infrastruktur|
|**Security**|CISO, Security-Team|Sicherheitskontrollen|
|**Operations**|IT-Ops, Support|Betrieb, Monitoring|

**Unterschied zum Well-Architected Framework:**

* CAF = Wie **plane** ich die Migration?
* Well-Architected = Wie **baue** ich gute Architektur?

\---

## 1.7 Migrationsstrategien (Die 6 R's)

Wenn ein Unternehmen in die Cloud umzieht, gibt es 6 Wege:

|Strategie|Was passiert?|Beispiel|Aufwand|
|-|-|-|-|
|**Rehost**|"Lift \& Shift" – 1:1 kopieren, keine Änderung|VM → EC2|Niedrig|
|**Replatform**|Kleine Optimierungen beim Umzug|DB auf eigenem Server → RDS|Mittel|
|**Refactor**|Komplett neu bauen für die Cloud (Cloud-Native)|Monolith → Lambda + API Gateway + DynamoDB|Hoch|
|**Repurchase**|Altes Tool durch SaaS ersetzen|Eigener Mailserver → Microsoft 365|Mittel|
|**Retire**|Abschalten, wird nicht mehr gebraucht|Legacy-App mit 3 Nutzern|Keiner|
|**Retain**|Bleibt erstmal on-premise|Zu komplex oder reguliert|Keiner (vorerst)|

**Beispiel-Frage:** "Ein Unternehmen migriert seine Anwendung ohne Änderungen auf EC2. Welche Strategie?"  
→ *Rehost (Lift \& Shift)*

\---

## 1.8 AWS Globale Infrastruktur

* **Region** = Geografischer Bereich (z.B. eu-central-1 = Frankfurt). Jede Region hat mindestens 2-3 Availability Zones.
* **Availability Zone (AZ)** = Ein oder mehrere Rechenzentren in einer Region. AZs sind physisch getrennt (eigene Stromversorgung, eigene Kühlung), aber mit schnellen Leitungen verbunden.
* **Edge Location** = Mini-Standorte weltweit für CloudFront (CDN) und Route 53 (DNS). Es gibt viel mehr Edge Locations als Regions.
* **Local Zone** = AWS-Infrastruktur näher an Endnutzern für niedrigste Latenz (z.B. in Großstädten).

**Warum mehrere AZs?** Wenn ein Rechenzentrum ausfällt (Brand, Stromausfall), läuft deine App in der anderen AZ weiter = **High Availability**.

**Wie wählt man eine Region?** 4 Faktoren:

1. **Compliance** – Daten müssen vielleicht in Deutschland bleiben (DSGVO)
2. **Latenz** – Nähe zu deinen Nutzern
3. **Verfügbarkeit** – Nicht jeder Service gibt es in jeder Region
4. **Preis** – Preise variieren zwischen Regions

\---

# Domain 2: Security \& Compliance (30%)

Der **größte Prüfungsbereich**. Fast ein Drittel aller Fragen. Hier musst du sattelfest sein.

\---

## 2.1 Shared Responsibility Model

**DAS wichtigste Sicherheitskonzept bei AWS.** Kommt zu 100% dran.

Die Idee: Sicherheit wird aufgeteilt:

**AWS verantwortet: "Security OF the Cloud"**

* Physische Rechenzentren (Gebäude, Zäune, Wachleute)
* Hardware (Server, Netzwerk-Equipment)
* Software der Infrastruktur (Hypervisor, Managed Services)
* Globale Infrastruktur (Regions, AZs, Edge Locations)

**Du verantwortest: "Security IN the Cloud"**

* Deine Daten (was du speicherst)
* Verschlüsselung (aktivieren und konfigurieren)
* IAM (User, Passwörter, Berechtigungen)
* Betriebssystem (Patches auf EC2)
* Firewall-Regeln (Security Groups, NACLs)
* Netzwerk-Konfiguration

**Grauzone – Geteilte Verantwortung:**

* Patch Management: AWS patcht die Infrastruktur, du patchst dein OS auf EC2
* Bei Managed Services (RDS, Lambda): AWS übernimmt mehr

**Eselsbrücke:**

* Wenn du es im AWS-Konto konfigurieren **kannst** → deine Verantwortung
* Wenn du es **nicht** konfigurieren kannst (z.B. Rechenzentrum-Tür) → AWS' Verantwortung

**Beispiel-Frage:** "Wer ist für die Verschlüsselung von S3-Daten verantwortlich?"  
→ *Der Kunde (Security IN the Cloud). AWS stellt KMS bereit, aber du musst es aktivieren.*

\---

## 2.2 IAM (Identity \& Access Management)

IAM ist der **globale** Service, mit dem du steuerst, WER auf WELCHE AWS-Ressourcen zugreifen darf.

### Die 4 Bausteine:

**1. IAM Users** = Individuelle Personen oder Anwendungen  
Jeder User hat eigene Zugangsdaten (Passwort für Console, Access Keys für CLI/SDK).

**2. IAM Groups** = Sammlung von Usern  
Du packst z.B. alle Entwickler in die Gruppe "Developers" und gibst der Gruppe Rechte. Alle User in der Gruppe erben diese Rechte.

**3. IAM Roles** = Temporäre Rechte für Services oder externe User  
Eine Role ist wie ein Ausweis, den sich ein Service "anziehen" kann. Beispiel: EC2-Instanz bekommt eine Role, die S3-Zugriff erlaubt. Keine Access Keys nötig!

**4. IAM Policies** = JSON-Dokumente, die Rechte definieren  
Eine Policy sagt: "Erlaube/Verbiete Aktion X auf Ressource Y."

```
Beispiel-Policy (vereinfacht):
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::mein-bucket/\*"
}
→ Erlaubt das Lesen von Objekten aus dem Bucket "mein-bucket"
```

### Zugangswege zu AWS:

|Weg|Wie?|Authentifizierung|
|-|-|-|
|**AWS Console**|Browser (Web-UI)|Username + Passwort + MFA|
|**AWS CLI**|Terminal (Kommandozeile)|Access Key + Secret Key|
|**AWS SDK**|Programmcode (Python, JS etc.)|Access Key + Secret Key|

### Best Practices:

* **Root-User** = Der allererste Account. Hat ALLE Rechte. Nutze ihn so selten wie möglich!
* **MFA aktivieren** = Immer, besonders für Root-User
* **Least Privilege Principle** = Gib Usern nur die Rechte, die sie tatsächlich brauchen
* **Keine Access Keys für Root** = Niemals
* **Roles statt User-Keys für Services** = EC2 bekommt eine Role, keine Access Keys reinschreiben

**Beispiel-Frage:** "Wie gibst du einer EC2-Instanz sicher Zugriff auf S3?"  
→ *Über eine IAM Role, die der EC2-Instanz zugewiesen wird. Niemals Access Keys auf die Instanz kopieren!*

\---

## 2.3 Security-Services

### Amazon GuardDuty – Der Wachposten

* Erkennt **Bedrohungen automatisch** durch Analyse von CloudTrail-Logs, VPC Flow Logs und DNS-Logs
* Machine Learning findet verdächtige Aktivitäten (z.B. ungewöhnliche API-Calls, Krypto-Mining, kompromittierte Instanzen)
* Du musst nichts konfigurieren – einfach aktivieren

**Beispiel:** GuardDuty meldet: "EC2-Instanz i-12345 kommuniziert mit einer bekannten Bitcoin-Mining-Adresse." → Wahrscheinlich kompromittiert!

### Amazon Inspector – Der Sicherheitsinspektor

* Scannt **EC2-Instanzen und Container** automatisch auf Schwachstellen
* Prüft gegen CVE-Datenbanken (bekannte Sicherheitslücken)
* Gibt Empfehlungen mit Priorität

**Beispiel:** Inspector findet: "EC2 hat OpenSSL 1.0.1 installiert – bekannte Heartbleed-Schwachstelle. Kritisch!" → Sofort updaten.

### AWS Shield – Das Schild gegen DDoS

* **Shield Standard** = Kostenlos, automatisch aktiv für ALLE AWS-Kunden. Schützt vor den häufigsten DDoS-Angriffen (Layer 3/4).
* **Shield Advanced** = Kostenpflichtig ($3.000/Monat). Erweiterter Schutz, DDoS Response Team (DRT), Kostenerstattung bei DDoS-bedingten Scaling-Kosten.

**Beispiel:** Jemand flutet deine Website mit Millionen Anfragen → Shield Standard blockt den Angriff automatisch auf Netzwerk-Ebene.

### AWS WAF – Der Türsteher für HTTP

* **Web Application Firewall** – filtert HTTP/HTTPS-Traffic
* Blockiert SQL-Injection, Cross-Site Scripting (XSS), Bot-Traffic
* Du definierst eigene Regeln (z.B. "Blockiere IPs aus Land X" oder "Blockiere Requests mit SQL-Syntax")
* Funktioniert vor CloudFront, ALB oder API Gateway

**Unterschied Shield vs. WAF:**

* Shield = DDoS-Schutz (Netzwerk-Ebene, Layer 3/4)
* WAF = Web-Angriffe (Anwendungs-Ebene, Layer 7)

### Amazon Macie – Der Datenschutz-Detektiv

* Findet automatisch **sensible Daten in S3-Buckets** (Kreditkartennummern, Sozialversicherungsnummern, E-Mail-Adressen)
* Nutzt Machine Learning und Pattern Matching
* Wichtig für DSGVO/Compliance

**Beispiel:** Macie scannt deine S3-Buckets und warnt: "Bucket 'kundendaten-backup' enthält 4.500 unverschlüsselte Kreditkartennummern." → Sofort verschlüsseln!

### AWS Security Hub – Die Sicherheitszentrale

* **Zentrales Dashboard** für alle Security-Findings aus GuardDuty, Inspector, Macie, Firewall Manager etc.
* Prüft gegen Best Practices und Compliance-Standards
* Ein Ort, um alles zu sehen

\---

## 2.4 Verschlüsselung

### Zwei Arten:

**Encryption at Rest** = Daten "ruhen" auf einem Speicher und sind dort verschlüsselt

* S3 Server-Side Encryption (SSE)
* EBS Volume Encryption
* RDS Encryption

**Encryption in Transit** = Daten sind "unterwegs" verschlüsselt

* HTTPS (TLS/SSL)
* VPN-Verbindungen

**Beispiel:** Deine Daten liegen verschlüsselt auf einer S3-Festplatte (at rest). Wenn du sie herunterlädst, werden sie über HTTPS übertragen (in transit). Beides zusammen = vollständiger Schutz.

### Verschlüsselungs-Services:

|Service|Funktion|
|-|-|
|**AWS KMS (Key Management Service)**|Erstellt und verwaltet Verschlüsselungsschlüssel. Die meisten AWS-Services nutzen KMS im Hintergrund.|
|**AWS Secrets Manager**|Speichert Passwörter, API-Keys, DB-Credentials sicher. Kann automatisch rotieren (z.B. RDS-Passwort alle 30 Tage ändern).|
|**AWS Certificate Manager (ACM)**|Kostenlose SSL/TLS-Zertifikate für HTTPS. Automatische Verlängerung.|
|**SSM Parameter Store**|Ähnlich wie Secrets Manager, aber einfacher. Speichert Konfigurationen und Passwörter. Kostenlos im Standard-Tier.|

**Beispiel-Frage:** "Welcher Service verwaltet kryptografische Schlüssel?"  
→ *KMS. Nicht Secrets Manager (der speichert Passwörter) und nicht ACM (der stellt Zertifikate aus).*

\---

## 2.5 Compliance

### AWS Artifact

* Self-Service-Portal, wo du **Compliance-Berichte herunterladen** kannst
* SOC 1/2/3, ISO 27001, PCI DSS, HIPAA etc.
* Auch AWS-Vereinbarungen (z.B. BAA für HIPAA) können hier akzeptiert werden

### AWS Config

* Überwacht die **Konfiguration deiner Ressourcen über Zeit**
* Prüft gegen definierte Regeln (z.B. "Alle S3-Buckets müssen verschlüsselt sein")
* Zeigt einen Zeitverlauf: "Wann wurde diese Security Group geändert?"

**Beispiel:** Du definierst eine Config Rule: "Kein S3-Bucket darf öffentlich sein." Config scannt laufend und markiert Verstöße als "NON\_COMPLIANT".

\---

## 2.6 Weitere wichtige Security-Konzepte

### AWS Organizations \& SCPs

* **AWS Organizations** = Verwaltet mehrere AWS-Accounts zentral unter einem Dach
* **Service Control Policies (SCPs)** = Regeln, die festlegen, was Accounts überhaupt dürfen (z.B. "Account 'Dev' darf keine EC2-Instanzen in us-east-1 starten")
* SCPs sind wie Leitplanken – sie begrenzen, was IAM-Policies erlauben können

### Amazon Cognito

* User-Management für deine **Webanwendungen**
* Deine App-Nutzer können sich registrieren, einloggen, Passwort zurücksetzen
* Unterstützt Social Login (Google, Facebook, Apple)
* Nicht zu verwechseln mit IAM! IAM = AWS-Account-Zugriff. Cognito = App-User-Zugriff.

\---

# Domain 3: Cloud Technology \& Services (34%)

Der **breiteste** Bereich. Hier musst du die wichtigsten AWS-Services kennen und wissen, wann man welchen nutzt.

\---

## 3.1 Compute (Rechenleistung)

### Amazon EC2 (Elastic Compute Cloud)

* Virtuelle Server in der Cloud (IaaS)
* Du wählst: Betriebssystem, CPU, RAM, Speicher, Netzwerk
* Du bist verantwortlich für OS-Patches, Security, Anwendungen

**Kaufoptionen:**

|Option|Für wen?|Rabatt|Wichtig zu wissen|
|-|-|-|-|
|**On-Demand**|Flexible, kurze Workloads|0%|Keine Bindung, bezahle pro Stunde/Sekunde|
|**Savings Plans**|1 oder 3 Jahre Nutzungsversprechen|Bis 72%|Flexibel bei Instanztyp und Region|
|**Reserved Instances**|1 oder 3 Jahre, fester Typ|Bis 75%|Am günstigsten bei "All Upfront" (Vorauszahlung)|
|**Spot Instances**|Unterbrechbare Jobs|Bis 90%|AWS kann sie mit 2 Min. Vorlauf wegnehmen!|
|**Dedicated Hosts**|Compliance, eigene Lizenzen|Variabel|Ganzer physischer Server nur für dich|

**Beispiel-Frage:** "Ein Unternehmen muss eine Datenbank 3 Jahre lang durchgehend laufen lassen. Welche Option ist am günstigsten?"  
→ *Reserved Instance (3 Jahre, All Upfront) oder Savings Plan*

**Beispiel-Frage:** "Ein Forschungsteam muss große Berechnungen durchführen, die jederzeit unterbrochen werden können. Welche Option?"  
→ *Spot Instances (bis 90% günstiger, aber unterbrechbar)*

### EC2 User Data (Startskript)

* Ein **Skript**, das beim allerersten Start einer EC2-Instanz automatisch ausgeführt wird
* Wird genutzt, um Software zu installieren, Konfigurationen zu setzen, Apps zu starten
* Läuft nur einmal beim ersten Boot, als Root-User

**Beispiel:** User Data installiert automatisch einen Webserver:

```
#!/bin/bash
apt update
apt install -y nginx
systemctl start nginx
```

→ Instanz startet und hat sofort einen laufenden Webserver, ohne dass du dich manuell einloggen musst.

### AMI (Amazon Machine Image)

* Eine **Vorlage/Snapshot** für EC2-Instanzen
* Enthält: Betriebssystem, vorinstallierte Software, Konfigurationen
* Du kannst eigene AMIs erstellen (z.B. "Ubuntu mit meiner App vorinstalliert") und davon beliebig viele identische Instanzen starten
* AWS bietet öffentliche AMIs (Amazon Linux, Ubuntu, Windows etc.)
* AMIs sind **regional** – du musst sie kopieren, wenn du sie in einer anderen Region nutzen willst

**Warum wichtig?** AMIs sind der Grund, warum horizontale Skalierung funktioniert: Du erstellst ein AMI deiner fertigen Instanz, und Auto Scaling startet davon automatisch neue identische Kopien.

### EC2 Security Groups (Zusammenfassung)

* Virtuelle **Firewall** für deine EC2-Instanz
* Du definierst: Welcher eingehende Traffic ist erlaubt? (z.B. "Port 22 nur von meiner IP", "Port 443 von überall")
* Standardmäßig: Alles eingehend blockiert, alles ausgehend erlaubt
* Wenn deine EC2 nicht erreichbar ist → **immer zuerst Security Group prüfen!**

### AWS Lambda (Serverless)

* Du lädst nur Code hoch – **kein Server zu verwalten**
* Code wird nur ausgeführt, wenn ein Event ihn triggert (z.B. Datei in S3 hochgeladen, API-Call, Timer)
* Du zahlst nur für die tatsächliche Ausführungszeit (Millisekunden!)
* Max. Laufzeit: 15 Minuten pro Ausführung

**Beispiel:** Ein Nutzer lädt ein Bild in S3 hoch → Lambda wird getriggert → Lambda erstellt ein Thumbnail → Speichert es zurück in S3. Du zahlst nur die 200ms, die Lambda gearbeitet hat.

### Container-Services

|Service|Was?|Beispiel|
|-|-|-|
|**ECS (Elastic Container Service)**|Orchestriert Docker-Container auf EC2|Du verwaltest die EC2-Instanzen selbst|
|**Fargate**|Serverless Container – keine EC2 nötig|Du sagst nur "Starte diesen Container"|
|**ECR (Elastic Container Registry)**|Speichert Docker-Images|Wie Docker Hub, aber privat in AWS|
|**EKS (Elastic Kubernetes Service)**|Managed Kubernetes|Wenn du Kubernetes nutzen willst/musst|

### Weitere Compute-Services

|Service|Funktion|
|-|-|
|**Elastic Beanstalk**|PaaS – du lädst Code hoch, AWS erstellt alles (EC2, ELB, ASG). Perfekt für Entwickler, die sich nicht um Infrastruktur kümmern wollen.|
|**Lightsail**|Einfacher VPS (Virtual Private Server) mit Festpreis. Für simple Websites, Blogs, WordPress.|
|**Batch**|Für große Hintergrund-Rechenjobs. AWS managed die Compute-Ressourcen.|

\---

## 3.2 Skalierung \& Hochverfügbarkeit

### Skalierungsarten

**Vertikale Skalierung (Scale Up):** Instanz wird "größer" – mehr CPU, mehr RAM. Hat Hardware-Limits. Beispiel: t3.micro → t3.xlarge.

**Horizontale Skalierung (Scale Out):** Mehr Instanzen parallel. DER Cloud-Standard. Beispiel: 2 EC2 → 10 EC2 bei mehr Traffic.

### Elastic Load Balancer (ELB)

Verteilt eingehenden Traffic auf mehrere Instanzen. Drei Typen:

|Typ|Layer|Für was?|
|-|-|-|
|**ALB (Application LB)**|Layer 7 (HTTP/HTTPS)|Web-Apps. Kann nach URL-Pfad, Header, Host routen.|
|**NLB (Network LB)**|Layer 4 (TCP/UDP)|Extrem hohe Performance, Millionen Requests, niedrigste Latenz. Gaming, IoT.|
|**GWLB (Gateway LB)**|Layer 3|Für Sicherheits-Appliances (Firewalls, IDS). Eher selten in der Prüfung.|

**Beispiel:** Deine Website läuft auf 3 EC2-Instanzen. Ein ALB verteilt eingehende HTTP-Anfragen gleichmäßig auf alle 3. Fällt eine aus, leitet der ALB den Traffic an die anderen 2.

### Auto Scaling Groups (ASG)

* Fügt automatisch EC2-Instanzen hinzu bei hoher Last ("Scale Out")
* Entfernt Instanzen bei niedriger Last ("Scale In")
* Ersetzt defekte Instanzen automatisch ("Self-healing")
* Du definierst: Minimum, Maximum, gewünschte Anzahl

**Beispiel:** ASG mit Min=2, Max=10, Desired=2. Normalerweise laufen 2 Instanzen. Bei einem Traffic-Spike skaliert ASG automatisch auf z.B. 8 Instanzen hoch. Danach wieder runter auf 2.

**Zusammenspiel:** ELB + ASG = Hochverfügbarkeit + Auto-Skalierung. ELB verteilt den Traffic, ASG passt die Anzahl der Server an.

\---

## 3.3 Storage (Speicher)

### Amazon S3 (Simple Storage Service) – Objektspeicher

* Speichert **Objekte** (Dateien) in **Buckets**
* Praktisch unbegrenzte Kapazität
* Maximale Objektgröße: 5 TB
* Buckets brauchen **global eindeutige** Namen
* S3 ist **regional**, aber der Name ist global eindeutig

**Speicherklassen:**

|Klasse|Zugriff|Kosten|Für was?|
|-|-|-|-|
|**S3 Standard**|Sofort|Am teuersten|Häufig genutzte Daten|
|**S3 Intelligent-Tiering**|Sofort|Automatisch optimiert|Wenn du nicht weißt, wie oft Zugriff|
|**S3 Standard-IA**|Sofort, aber Abrufkosten|Günstiger|Seltener Zugriff, aber sofort verfügbar|
|**S3 One Zone-IA**|Sofort, nur 1 AZ|Noch günstiger|Daten, die du neu erstellen könntest|
|**S3 Glacier Instant**|Sofort|Günstig|Archiv mit sofortigem Zugriff|
|**S3 Glacier Flexible**|Minuten bis Stunden|Sehr günstig|Archiv, Abruf dauert|
|**S3 Glacier Deep Archive**|12-48 Stunden|Am günstigsten|Langzeitarchiv, Compliance|

**Lifecycle Rules:** Automatisches Verschieben zwischen Klassen.  
Beispiel: Nach 30 Tagen → S3-IA, nach 90 Tagen → Glacier, nach 365 Tagen → löschen.

**Beispiel-Frage:** "Ein Unternehmen muss Daten 7 Jahre aufbewahren, greift aber nie darauf zu. Günstigste Lösung?"  
→ *S3 Glacier Deep Archive*

### S3 Static Website Hosting

Du kannst einen S3-Bucket als **einfachen Webserver** nutzen – für statische Websites (HTML, CSS, JavaScript, Bilder). Kein EC2 nötig, kein Server verwalten, extrem günstig.

**Die 3 Schritte, damit es funktioniert:**

1. **Static Website Hosting aktivieren** – Im Bucket die Funktion einschalten und die Startseite angeben (z.B. `index.html`)
2. **"Block Public Access" deaktivieren** – S3-Buckets sind standardmäßig komplett abgeriegelt. Für eine öffentliche Website musst du diesen Schutz lockern.
3. **Bucket Policy für öffentlichen Lesezugriff setzen** – Eine JSON-Regel, die sagt: "Jeder darf die Objekte lesen."

Fehlt einer dieser Schritte → Website nicht erreichbar!

**Beispiel-Frage:** "Eine statische Website auf S3 ist nicht erreichbar. Was tun?"  
→ *Die Bucket Policy korrigieren (öffentlichen Lesezugriff erlauben).* Nicht Verschlüsselung, nicht Replikation, nicht Versioning – die haben nichts mit Erreichbarkeit zu tun.

**Prüfungstipp:** S3 + CloudFront ist die Best-Practice-Kombination für statische Websites. CloudFront cached die S3-Inhalte global → schneller und sicherer (HTTPS). Oft die richtige Antwort, wenn nach "globaler statischer Website" gefragt wird.

### S3 Zugriffskontrolle (Access Control)

Es gibt mehrere Wege, den Zugriff auf S3 zu steuern:

|Methode|Was?|Beispiel|
|-|-|-|
|**Bucket Policy**|JSON-Regel auf Bucket-Ebene. Wer darf was mit dem gesamten Bucket?|"Jeder darf lesen" oder "Nur Account 12345 darf schreiben"|
|**IAM Policy**|Rechte auf User/Role-Ebene. Was darf dieser User?|"User 'backup-bot' darf in Bucket X hochladen"|
|**Block Public Access**|Globaler Schutzschalter. Überschreibt alles andere!|Wenn aktiv → kein öffentlicher Zugriff, egal was die Bucket Policy sagt|
|**Access Control Lists (ACLs)**|Alte Methode, per Objekt. Wird kaum noch verwendet.|AWS empfiehlt Bucket Policies stattdessen|
|**S3 Access Points**|Vereinfachter Zugriff für verschiedene Teams/Apps auf denselben Bucket|Team A hat eigenen Access Point mit eigenen Regeln|
|**Pre-Signed URLs**|Temporärer Zugriff auf ein einzelnes Objekt über eine signierte URL|"Dieser Download-Link funktioniert 1 Stunde lang"|

**Prüfungstipp:** Wenn eine Frage nach "temporärem Zugriff auf ein S3-Objekt" fragt → **Pre-Signed URL**.

### S3 Versioning

* Speichert **alle Versionen** eines Objekts (auch gelöschte!)
* Wenn du eine Datei überschreibst, bleibt die alte Version erhalten
* Schützt vor versehentlichem Löschen und Überschreiben
* Kann mit Lifecycle Rules kombiniert werden (alte Versionen nach X Tagen löschen)

**Beispiel:** Du lädst `report.pdf` hoch. Nächste Woche lädst du eine neue Version hoch. Mit Versioning kannst du jederzeit zur alten Version zurückkehren.

### S3 Replication (Replikation)

* **Cross-Region Replication (CRR)** = Kopiert Objekte automatisch in einen Bucket in einer anderen Region
* **Same-Region Replication (SRR)** = Kopiert in denselben Region (z.B. für Compliance oder Log-Aggregation)
* Versioning muss in beiden Buckets aktiviert sein
* Use Cases: Disaster Recovery, Compliance (Daten in mehreren Regionen), niedrigere Latenz für globale Nutzer

### S3 Object Lock \& Glacier Vault Lock

* **S3 Object Lock** = Verhindert, dass Objekte gelöscht oder überschrieben werden (WORM: Write Once Read Many)
* **Glacier Vault Lock** = Dasselbe für Glacier-Archive
* Wichtig für Compliance: Wenn Gesetze vorschreiben, dass Daten nicht verändert werden dürfen (z.B. Finanzbranche)

**Beispiel-Frage:** "Ein Unternehmen muss sicherstellen, dass Audit-Logs nicht gelöscht oder verändert werden können."  
→ *S3 Object Lock (Compliance Mode)*

### Amazon EBS (Elastic Block Store)

* **Block Storage** = wie eine Festplatte für EC2
* Persistent – Daten bleiben beim Stoppen der Instanz erhalten
* An eine **Availability Zone gebunden** (kann nicht einfach in andere AZ umziehen)
* Snapshots (Backups) werden in S3 gespeichert und können in andere AZs kopiert werden

### Amazon EFS (Elastic File System)

* **Netzwerk-Dateisystem** (NFS)
* Mehrere EC2-Instanzen können **gleichzeitig** darauf zugreifen
* Skaliert automatisch
* Funktioniert über mehrere AZs

### Instance Store

* Physisch am Host-Server angeschlossen
* **Extrem schnell** (für temporäre Daten, Caches)
* **FLÜCHTIG** – Daten gehen beim Stoppen/Terminieren verloren!

**Vergleich:**

|Feature|EBS|EFS|Instance Store|S3|
|-|-|-|-|-|
|Typ|Block|File|Block|Object|
|Persistent?|Ja|Ja|Nein!|Ja|
|Multi-Attach?|Begrenzt|Ja|Nein|Ja (über API)|
|AZ-gebunden?|Ja|Nein (Multi-AZ)|Ja|Nein (Regional)|

\---

## 3.4 Datenbanken

### Relationale Datenbanken (SQL)

**Amazon RDS (Relational Database Service)**

* Verwaltete Datenbank – AWS kümmert sich um Patching, Backups, Hochverfügbarkeit
* Unterstützt: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server
* **Multi-AZ** = Standby-Kopie in anderer AZ für Ausfallsicherheit
* **Read Replicas** = Lesekopien für bessere Performance

**Amazon Aurora**

* AWS-eigene Datenbank, kompatibel mit MySQL und PostgreSQL
* Bis zu **5x schneller** als Standard-MySQL
* Automatische Skalierung des Speichers (10 GB bis 128 TB)
* 6 Kopien deiner Daten über 3 AZs

### NoSQL-Datenbanken

**Amazon DynamoDB**

* Vollständig verwaltete **NoSQL Key-Value und Document DB**
* Serverless – skaliert automatisch
* Einstellige Millisekunden-Latenz
* DAX (DynamoDB Accelerator) = In-Memory Cache für noch schnellere Reads

**Beispiel-Frage:** "Welche Datenbank ist serverless, NoSQL und skaliert automatisch?"  
→ *DynamoDB*

### Weitere Datenbank-Services

|Service|Typ|Für was?|
|-|-|-|
|**ElastiCache**|In-Memory (Redis/Memcached)|Cache für schnellere Reads. Vor die DB schalten.|
|**Redshift**|Data Warehouse|Große Datenmengen analysieren (OLAP). Petabyte-Scale.|
|**Neptune**|Graph-Datenbank|Soziale Netzwerke, Beziehungen, Empfehlungen.|
|**DocumentDB**|Document DB (MongoDB-kompatibel)|Wenn du MongoDB brauchst, aber verwaltet.|
|**Timestream**|Zeitreihen-DB|IoT-Sensordaten, Metriken über Zeit.|
|**QLDB**|Ledger-DB|Unveränderliches Log (Finanztransaktionen).|

### Analytics-Services

|Service|Funktion|
|-|-|
|**Athena**|SQL-Abfragen direkt auf S3-Dateien. Serverless. Kein Laden in eine DB nötig.|
|**Glue**|ETL-Service (Extract, Transform, Load). Bereitet Daten für Analysen vor.|
|**QuickSight**|BI-Dashboards und Visualisierungen. Wie Tableau, aber AWS-nativ.|
|**EMR**|Managed Big Data (Hadoop, Spark). Für riesige Datenmengen.|
|**Kinesis**|Echtzeit-Datenstreaming. Verarbeitet Live-Daten (z.B. Klickstreams, IoT).|

\---

## 3.5 Netzwerk

### VPC (Virtual Private Cloud)

Dein **eigenes privates Netzwerk** in AWS. Hier kontrollierst du alles:

**Aufbau einer VPC:**

```
VPC (z.B. 10.0.0.0/16)
├── Public Subnet (10.0.1.0/24)
│   ├── Internet Gateway (Verbindung zum Internet)
│   ├── EC2 Web-Server (öffentliche IP)
│   └── NAT Gateway (für private Subnets)
├── Private Subnet (10.0.2.0/24)
│   ├── EC2 App-Server (keine öffentliche IP)
│   └── RDS Datenbank
```

**Kernkomponenten:**

|Komponente|Was?|Beispiel|
|-|-|-|
|**Subnet**|Teilnetzwerk in einer AZ|Public Subnet für Webserver, Private Subnet für DB|
|**Internet Gateway (IGW)**|Verbindet VPC mit dem Internet|Webserver brauchen Internet-Zugang|
|**NAT Gateway**|Erlaubt privaten Subnets ausgehenden Internetzugriff|App-Server braucht Updates, soll aber nicht erreichbar sein|
|**Route Table**|Definiert, wohin Traffic fließt|"Traffic zu 0.0.0.0/0 → Internet Gateway"|

### Security Groups vs. NACLs

Das ist ein **Prüfungsklassiker**! Lern den Unterschied:

|Feature|Security Group|NACL|
|-|-|-|
|Level|**Instanz** (z.B. eine EC2)|**Subnet** (alle Instanzen darin)|
|Typ|**Stateful** (Rückverkehr automatisch erlaubt)|**Stateless** (Regeln für rein UND raus nötig)|
|Regeln|Nur **Allow**|**Allow + Deny**|
|Default|Alles ausgehend erlaubt, alles eingehend blockiert|Alles erlaubt|
|Reihenfolge|Alle Regeln werden geprüft|Regeln werden in Nummernreihenfolge geprüft|

**Beispiel:** Du erlaubst in einer Security Group eingehenden Traffic auf Port 443 (HTTPS). Der Rückverkehr (Response) ist automatisch erlaubt, weil Security Groups stateful sind. Bei NACLs müsstest du eine extra Outbound-Regel definieren.

### VPC Flow Logs

* Zeichnet den **gesamten Netzwerk-Traffic** in deiner VPC auf (welche IP hat wann wohin kommuniziert)
* Kann auf VPC-, Subnet- oder Instanz-Ebene aktiviert werden
* Logs werden in CloudWatch Logs oder S3 gespeichert
* Wichtig für Troubleshooting ("Warum kommt mein Traffic nicht an?") und Security-Analyse
* GuardDuty analysiert VPC Flow Logs automatisch, um Bedrohungen zu erkennen

**Beispiel-Frage:** "Ein Sicherheitsteam will analysieren, welcher Traffic in ihrer VPC fließt."  
→ *VPC Flow Logs aktivieren*

### VPC Endpoints

Normalerweise geht Traffic von deiner VPC zu AWS-Services (z.B. S3, DynamoDB) über das **öffentliche Internet**. VPC Endpoints erlauben eine **private Verbindung** direkt innerhalb des AWS-Netzwerks – ohne Internet.

|Typ|Für was?|Beispiel|
|-|-|-|
|**Gateway Endpoint**|S3 und DynamoDB (kostenlos!)|EC2 in privatem Subnet greift auf S3 zu, ohne NAT Gateway|
|**Interface Endpoint**|Fast alle anderen AWS-Services|Privater Zugriff auf CloudWatch, KMS, SQS etc.|

**Warum wichtig?** Sicherer (kein Internet), schneller, und spart Kosten (kein NAT Gateway nötig für S3/DynamoDB-Traffic).

### Elastic IP (EIP)

* Eine **feste öffentliche IP-Adresse**, die du einer EC2-Instanz zuweisen kannst
* Normalerweise bekommt EC2 bei jedem Start eine neue öffentliche IP → mit EIP bleibt sie gleich
* Kostenlos, solange sie einer laufenden Instanz zugewiesen ist. Kostet Geld, wenn sie ungenutzt rumliegt!

### S3 Transfer Acceleration

* Beschleunigt **Uploads** zu S3 über CloudFront Edge Locations
* Nutzer lädt zu nächstgelegener Edge Location hoch → AWS transportiert über Backbone-Netzwerk zum Bucket
* Nützlich für globale Teams, die in einen zentralen Bucket hochladen

### Weitere Netzwerk-Services

**Amazon Route 53** – DNS-Service

* Übersetzt Domain-Namen in IP-Adressen (z.B. meine-app.de → 54.123.45.67)
* Name kommt von **Port 53** (DNS-Port)
* Health Checks – prüft, ob dein Endpunkt erreichbar ist
* Routing-Policies: Simple, Weighted, Latency-based, Failover, Geolocation

**Amazon CloudFront** – CDN (Content Delivery Network)

* Cached Inhalte an **Edge Locations** weltweit
* Nutzer bekommen Daten vom nächstgelegenen Edge-Standort → schneller
* Funktioniert mit S3, EC2, ALB als Origin
* Schützt auch vor DDoS (zusammen mit Shield)

**Beispiel:** Deine Website-Bilder liegen in S3 in Frankfurt. Ein Nutzer in Tokyo ruft die Seite auf → CloudFront liefert die Bilder von der Edge Location in Tokyo statt aus Frankfurt. Viel schneller!

**AWS Direct Connect**

* **Dedizierte physische Verbindung** von deinem Rechenzentrum zu AWS
* Geht NICHT über das öffentliche Internet
* Konsistente Bandbreite, niedrigere Latenz
* Teuer und braucht Wochen für Setup

**AWS VPN (Virtual Private Network)**

* Verschlüsselte Verbindung über das **öffentliche Internet**
* Schneller einzurichten als Direct Connect
* Günstiger, aber weniger konsistent

**Beispiel-Frage:** "Ein Unternehmen braucht eine private, konsistente 10-Gbit-Verbindung zu AWS."  
→ *Direct Connect (nicht VPN – VPN geht über das Internet und ist weniger konsistent)*

|Service|Verbindung|Internet?|Speed|
|-|-|-|-|
|**VPN**|Verschlüsselt, über Internet|Ja|Variabel|
|**Direct Connect**|Physische Leitung|Nein|Konsistent, bis 100 Gbps|

**AWS Global Accelerator**

* Leitet Traffic über das **AWS-Backbone-Netzwerk** statt über das öffentliche Internet
* Niedrigere Latenz, besonders für globale Apps
* Nicht zu verwechseln mit CloudFront! CloudFront cached Inhalte, Global Accelerator beschleunigt die Verbindung.

**AWS Transit Gateway**

* Zentraler Hub, der **mehrere VPCs und On-Premise-Netzwerke** verbindet
* Ohne Transit Gateway: VPC-Peering zwischen jeder VPC (wird bei vielen VPCs chaotisch)
* Mit Transit Gateway: Alle VPCs verbinden sich nur zum Hub

\---

## 3.6 Monitoring \& Management

### CloudWatch vs. CloudTrail vs. Config

Diese drei verwechselt man leicht. Hier der klare Unterschied:

|Service|Frage die er beantwortet|Beispiel|
|-|-|-|
|**CloudWatch**|"Wie **performt** mein System gerade?"|CPU bei 95%? → Alarm! → Auto Scaling triggern|
|**CloudTrail**|"**Wer** hat **was** **wann** gemacht?"|User "admin" hat um 14:32 die Security Group geändert|
|**Config**|"**Entsprechen** meine Ressourcen den **Regeln**?"|"S3-Bucket 'daten' ist öffentlich zugänglich – NON\_COMPLIANT!"|

**CloudWatch im Detail:**

* **Metriken** – CPU, Netzwerk, Disk, RAM (custom)
* **Alarme** – Benachrichtigung bei Schwellenwerten (z.B. CPU > 80% → E-Mail)
* **Logs** – Zentrale Log-Sammlung
* **Dashboards** – Visuelle Übersicht

**CloudTrail im Detail:**

* Zeichnet **jeden API-Call** auf (Console, CLI, SDK)
* Wer hat wann was gemacht?
* 90 Tage kostenlos gespeichert
* Essentiell für Audits und Forensik

**Eselsbrücke:**

* Cloud**Watch** = **beobachten** → Performance
* Cloud**Trail** = **Spur verfolgen** → Audit

### AWS Trusted Advisor

Automatische **Empfehlungen** in 5 Kategorien:

1. **Cost Optimization** – Ungenutzte Ressourcen, falsche Größe
2. **Performance** – Überlastete Instanzen, fehlende CDN
3. **Security** – Offene Ports, MFA nicht aktiv, öffentliche S3-Buckets
4. **Fault Tolerance** – Fehlende Multi-AZ, keine Backups
5. **Service Limits** – Fast erreichte Service-Grenzen

**Wichtig für die Prüfung:**

* **Basic \& Developer** = Nur 6 Core-Checks (z.B. "Root-MFA aktiv?")
* **Business \& Enterprise** = ALLE Checks + API-Zugriff

### Weitere Management-Services

|Service|Funktion|
|-|-|
|**AWS X-Ray**|Analysiert verteilte Anwendungen (Microservices). Findet Bottlenecks.|
|**AWS Health Dashboard**|Zeigt den Status von AWS-Services und Events, die dich betreffen.|
|**AWS Systems Manager (SSM)**|Zentrale Verwaltung von EC2-Instanzen (Patching, Commands, Session Manager).|

\---

## 3.7 Deployment \& Infrastructure as Code

### AWS CloudFormation

* **Infrastructure as Code** – beschreibe deine Infrastruktur in YAML oder JSON
* Ein Template → ein Stack (Sammlung von Ressourcen)
* Erstellt, aktualisiert und löscht Ressourcen automatisch
* Wiederholbar, versionierbar, kein manuelles Klicken

**Beispiel:** Ein CloudFormation-Template definiert: 1 VPC + 2 Subnets + 1 EC2 + 1 RDS. Du startest den Stack → alles wird automatisch erstellt. Du löschst den Stack → alles wird automatisch aufgeräumt.

### AWS CDK (Cloud Development Kit)

* Wie CloudFormation, aber du schreibst die Infrastruktur in **Programmiersprachen** (Python, TypeScript, Java)
* CDK generiert im Hintergrund CloudFormation-Templates

### CI/CD (Developer Tools)

|Service|Phase|Was?|
|-|-|-|
|**CodeCommit**|Source|Git-Repository (wie GitHub, aber in AWS)|
|**CodeBuild**|Build|Kompiliert Code, führt Tests aus|
|**CodeDeploy**|Deploy|Rollt neuen Code auf EC2, Lambda oder ECS aus|
|**CodePipeline**|Pipeline|Orchestriert den gesamten Workflow: Commit → Build → Test → Deploy|

### Elastic Beanstalk

* **PaaS** – du lädst deinen Code hoch, AWS regelt den Rest
* Erstellt automatisch: EC2, ELB, ASG, Security Groups, RDS (optional)
* Unterstützt: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker
* Du behältst volle Kontrolle über die Ressourcen, wenn du willst

\---

# Domain 4: Billing, Pricing \& Support (12%)

Der kleinste Bereich – aber **geschenkte Punkte**, wenn du ihn lernst!

\---

## 4.1 AWS Free Tier

Drei Arten:

|Art|Was?|Beispiele|
|-|-|-|
|**Immer kostenlos**|Kein Zeitlimit|Lambda (1 Mio. Requests/Monat), DynamoDB (25 GB), SNS, SQS, CloudWatch (10 Alarme)|
|**12 Monate kostenlos**|Ab Account-Erstellung|EC2 t2.micro (750h/Monat), S3 (5 GB), RDS t2.micro (750h/Monat)|
|**Testversionen**|Kurze Trials|Redshift (2 Monate), SageMaker, Lightsail|

**Achtung:** Wenn du das Free-Tier-Limit überschreitest, zahlst du normal! AWS warnt dich nicht immer automatisch → AWS Budgets einrichten!

\---

## 4.2 Preismodelle

### Grundprinzipien:

* **Pay-as-you-go** – Zahle nur, was du nutzt
* **Pay less when you reserve** – Langfristige Bindung = Rabatt
* **Pay less with more usage** – Mengenrabatte (z.B. S3: mehr GB = günstigerer Preis pro GB)

### EC2 Preismodelle (Zusammenfassung):

|Modell|Bindung|Rabatt|Unterbrechbar?|Use Case|
|-|-|-|-|-|
|On-Demand|Keine|0%|Nein|Kurze, flexible Workloads|
|Savings Plans|1-3 Jahre|\~72%|Nein|Stetige Nutzung, flexibel bei Typ|
|Reserved|1-3 Jahre|\~75%|Nein|Stetige Nutzung, fester Typ|
|Spot|Keine|\~90%|**JA!** (2 Min. Warnung)|Unterbrechbare Batch-Jobs|
|Dedicated|Variiert|Variiert|Nein|Compliance, BYOL|

### Weitere Preis-Regeln:

* **S3:** Kosten für Speicher + Requests + Datenübertragung OUT
* **EC2:** Kosten pro Stunde/Sekunde + Datenübertragung OUT
* **Datenübertragung:** IN ist kostenlos, **OUT** kostet Geld
* **Zwischen AZs:** Datenübertragung kostet auch

\---

## 4.3 Billing-Tools

|Tool|Wann nutzen?|Beispiel|
|-|-|-|
|**AWS Billing Dashboard**|Schneller Blick auf aktuelle Kosten|"Was habe ich diesen Monat ausgegeben?"|
|**AWS Cost Explorer**|Kosten analysieren, Trends erkennen, Prognosen|"Wofür gebe ich am meisten aus? Wie sieht der Trend aus?"|
|**AWS Budgets**|Budget setzen, Warnungen bei Überschreitung|"Warne mich per E-Mail, wenn ich über 100$ komme"|
|**AWS Pricing Calculator**|Kosten im Voraus schätzen|"Was würde mein Setup kosten, BEVOR ich es aufsetze?"|
|**Cost \& Usage Report**|Detailliertester Report (CSV)|Für die Buchhaltung oder detaillierte Analyse|

**Beispiel-Frage:** "Welches Tool warnt dich per E-Mail, wenn die Kosten ein bestimmtes Limit überschreiten?"  
→ *AWS Budgets (nicht Cost Explorer – der zeigt nur Vergangenheit und Prognosen)*

\---

## 4.4 AWS Organizations \& Consolidated Billing

* **AWS Organizations** = Mehrere AWS-Accounts zentral verwalten
* **Consolidated Billing** = Eine Rechnung für alle Accounts
* **Volume Discounts** = Die Nutzung ALLER Accounts wird zusammengerechnet → Mengenrabatte!
* **SCPs** = Service Control Policies – limitieren, was einzelne Accounts dürfen

**Beispiel:** Firma hat 5 AWS-Accounts. Jeder nutzt 100 TB S3. Mit Consolidated Billing wird das als 500 TB berechnet → günstigerer Preis pro GB durch Mengenrabatt.

\---

## 4.5 Support-Pläne

|Feature|Basic|Developer|Business|Enterprise|
|-|-|-|-|-|
|**Preis**|Kostenlos|Ab 29$/Monat|Ab 100$/Monat|Ab 15.000$/Monat|
|**Support**|Doku \& Foren|E-Mail (Geschäftszeiten)|24/7 Telefon/Chat|24/7 + 15 Min. Response|
|**Reaktionszeit**|–|12h (System impaired)|1h (Production down)|15 Min. (Business-critical)|
|**Trusted Advisor**|6 Core-Checks|6 Core-Checks|**ALLE Checks**|**ALLE Checks**|
|**TAM**|❌|❌|❌|✅|
|**Concierge**|❌|❌|❌|✅|
|**Support API**|❌|❌|✅|✅|

**Die 3 Prüfungsklassiker:**

1. "Welcher Plan hat einen **TAM**?" → Nur **Enterprise**
2. "Welcher Plan hat **vollen Trusted Advisor**?" → **Business** und höher
3. "Welcher Plan hat **24/7 Telefon**?" → **Business** und höher

\---

## 4.6 Weitere Billing-Konzepte

**AWS Compute Optimizer** – Analysiert deine EC2, Lambda, EBS-Nutzung und empfiehlt die richtige Größe → Kosten senken.

**AWS Cost Anomaly Detection** – Nutzt Machine Learning, um ungewöhnliche Kostenspitzen zu erkennen und dich zu warnen.

**Savings Plans vs. Reserved Instances:**

* Savings Plans = Flexibel (du versprichst einen $/Stunde Betrag, AWS gibt Rabatt, egal welchen Instanztyp)
* Reserved Instances = Starr (du reservierst einen bestimmten Instanztyp in einer bestimmten Region)

\---

# Bonus-Kapitel: Weitere prüfungsrelevante Services

Diese Services tauchen regelmäßig in CLF-C02-Fragen auf, werden aber leicht übersehen.

\---

## B.1 Messaging \& Integration

### Die 4 Messaging-Services (Verwechslungsgefahr!)

|Service|Typ|Wann nutzen?|Beispiel|
|-|-|-|-|
|**Amazon SQS**|Message Queue|Nachrichten zwischen Services entkoppeln. Serverless, AWS-nativ.|Service A schickt Bestellung in Queue → Service B verarbeitet sie, wenn er Zeit hat|
|**Amazon SNS**|Pub/Sub (Fan-out)|Eine Nachricht an viele Empfänger gleichzeitig|Bestellung eingetroffen → E-Mail an Kunden + SMS an Lager + Nachricht an Dashboard|
|**Amazon MQ**|Managed Message Broker|Migration bestehender ActiveMQ/RabbitMQ-Broker|Firma nutzt on-premise ActiveMQ → 1:1 Umzug zu Amazon MQ|
|**Amazon Kinesis**|Echtzeit-Streaming|Millionen Events/Sekunde in Echtzeit verarbeiten|Klickstream-Analyse, IoT-Sensoren, Live-Log-Verarbeitung|

**Prüfungsregel:**

* Frage sagt "ActiveMQ" oder "RabbitMQ" → **Amazon MQ** (immer!)
* Frage sagt "entkoppeln" oder "asynchron" → **SQS**
* Frage sagt "Fan-out" oder "viele Empfänger" → **SNS**
* Frage sagt "Echtzeit" oder "Streaming" → **Kinesis**

**SQS im Detail:**

* **Standard Queue** = Sehr hoher Durchsatz, Nachrichten können in anderer Reihenfolge ankommen
* **FIFO Queue** = Garantierte Reihenfolge (First-In-First-Out), aber niedrigerer Durchsatz
* Nachrichten werden bis zu 14 Tage gespeichert
* Consumer muss Nachrichten aktiv abholen ("Polling")

**SNS im Detail:**

* Push-basiert – SNS schickt aktiv Nachrichten raus
* Empfänger ("Subscribers") können sein: E-Mail, SMS, HTTP-Endpunkt, SQS-Queue, Lambda
* Ein Topic kann viele Subscriber haben

**Zusammenspiel SQS + SNS (Fan-out Pattern):**  
SNS schickt eine Nachricht → geht an 3 SQS-Queues gleichzeitig → 3 verschiedene Services verarbeiten sie unabhängig. Sehr beliebtes Architektur-Pattern in der Prüfung.

### Amazon EventBridge (ehem. CloudWatch Events)

* **Event Bus** – reagiert auf Events aus AWS-Services, eigenen Apps oder SaaS-Tools
* Regelbasiert: "Wenn Event X passiert → starte Lambda Y"
* Beispiel: "Wenn eine EC2-Instanz gestoppt wird → sende Slack-Nachricht"
* Serverless, kein Code zum Betreiben nötig

### AWS Step Functions

* **Orchestriert Workflows** – verknüpft mehrere Lambda-Funktionen (oder andere Services) zu einem Ablauf
* Visueller Workflow-Designer (State Machine)
* Beispiel: Bestellung eingetroffen → Zahlung prüfen → Lager prüfen → Versand beauftragen → Bestätigung senden
* Jeder Schritt kann Bedingungen, Fehlerbehandlung, Parallelverarbeitung haben

### Amazon API Gateway

* Erstellt, verwaltet und sichert **REST-APIs und WebSocket-APIs**
* Sitzt als "Eingangstür" vor Lambda, EC2 oder anderen Backends
* Handling von Authentifizierung, Rate Limiting, Caching
* Serverless – du zahlst pro API-Call

**Beispiel:** Nutzer ruft https://api.meine-app.de/bestellungen auf → API Gateway empfängt Request → leitet an Lambda weiter → Lambda holt Daten aus DynamoDB → Response zurück.

\---

## B.2 Migration \& Transfer

### AWS Snow Family (Physische Datenmigration)

Wenn du RIESIGE Datenmengen hast, die über das Internet zu lange dauern würden:

|Gerät|Kapazität|Use Case|
|-|-|-|
|**Snowcone**|8-14 TB|Kleine, tragbare Geräte. Edge Computing in rauen Umgebungen.|
|**Snowball Edge**|80 TB (Storage) oder mit Compute|Große Datenmigration. Hat auch Rechenleistung für lokale Verarbeitung.|
|**Snowmobile**|100 PB (Petabyte!)|Ein ganzer LKW-Container. Für Exabyte-Scale-Migration.|

**Ablauf:** AWS schickt dir das Gerät → du kopierst Daten drauf → schickst es zurück → AWS lädt die Daten in S3 hoch.

**Beispiel-Frage:** "Ein Unternehmen hat 50 TB Daten und eine 100-Mbit-Leitung. Upload würde 46 Tage dauern. Was tun?"  
→ *Snowball Edge bestellen*

### AWS Database Migration Service (DMS)

* Migriert Datenbanken in die Cloud (oder zwischen Datenbanken)
* Unterstützt **homogene** Migration (MySQL → RDS MySQL) und **heterogene** Migration (Oracle → Aurora PostgreSQL)
* Bei heterogener Migration brauchst du zusätzlich das **Schema Conversion Tool (SCT)**
* Die Quelldatenbank bleibt während der Migration online!

**Beispiel:** Firma will von Oracle on-premise zu Aurora PostgreSQL → DMS + SCT konvertiert Schema und kopiert die Daten, während die alte DB weiterläuft.

### AWS Migration Hub

* **Zentrales Dashboard** für den Fortschritt deiner Migration
* Trackt alle Migrationsprojekte über verschiedene Tools (DMS, Application Migration Service etc.)

### AWS Application Migration Service (MGN)

* **Lift \& Shift** für Server – migriert physische oder virtuelle Server zu EC2
* Ersetzt den älteren "Server Migration Service (SMS)"

### Weitere Transfer-Services

|Service|Funktion|
|-|-|
|**AWS DataSync**|Automatisierter Datentransfer zwischen On-Premise-Speicher und S3/EFS/FSx. Schnell, verschlüsselt.|
|**AWS Transfer Family**|Managed SFTP/FTPS/FTP-Server, der direkt in S3 oder EFS speichert. Für Firmen, die noch FTP nutzen.|
|**AWS Storage Gateway**|Hybrid-Storage – verbindet dein lokales Rechenzentrum mit AWS Cloud Storage (S3, Glacier). Daten lokal gecacht, in der Cloud gespeichert.|

\---

## B.3 Machine Learning \& KI

AWS liebt es, ML-Services in der Prüfung abzufragen. Du musst sie nicht im Detail verstehen, aber wissen, welcher Service was macht:

### Amazon SageMaker

* Die **Allzweck-Plattform** für Machine Learning
* Damit baust, trainierst und deployst du eigene ML-Modelle
* Für Data Scientists und ML-Engineers

### Vorgefertigte KI-Services (kein ML-Wissen nötig!)

Diese Services nutzt du einfach per API-Call – kein eigenes Modell bauen:

|Service|Was?|Beispiel|
|-|-|-|
|**Rekognition**|Bild- und Videoanalyse|Gesichter erkennen, Objekte in Bildern finden, unangemessene Inhalte filtern|
|**Transcribe**|Sprache → Text|Podcast automatisch transkribieren, Untertitel generieren|
|**Polly**|Text → Sprache|Texte vorlesen lassen, Sprachausgabe in Apps|
|**Translate**|Sprach-Übersetzung|Texte zwischen Sprachen übersetzen (wie DeepL)|
|**Comprehend**|Textanalyse (NLP)|Stimmung erkennen (positiv/negativ), Schlüsselbegriffe extrahieren|
|**Lex**|Chatbot-Engine|Baut Konversations-Chatbots (dieselbe Engine wie Alexa!)|
|**Textract**|Text aus Dokumenten extrahieren|Rechnungen, Formulare, Ausweise scannen und Daten rausholen|
|**Kendra**|Intelligente Suche|Unternehmenssuche über viele Datenquellen (wie Google, aber für interne Daten)|
|**Personalize**|Empfehlungen|"Kunden, die X kauften, kauften auch Y"|
|**Forecast**|Zeitreihen-Vorhersagen|Nachfrage-Prognosen, Ressourcen-Planung|

**Prüfungsregel – Merke die Paare:**

* Sprache zu Text = **Transcribe** ("transkribieren")
* Text zu Sprache = **Polly** (wie der Papagei Polly, der nachspricht)
* Bilder analysieren = **Rekognition** ("erkennen")
* Chatbot = **Lex** (wie Ale**x**a)
* Text aus Dokumenten = **Textract** ("Text extrahieren")

### Amazon Bedrock

* Zugang zu **Foundation Models** (Claude, Llama, etc.) über eine API
* Generative AI ohne eigene Infrastruktur
* Kann in der Prüfung bei Fragen zu "generative AI" oder "Foundation Models" drankommen

### Amazon Q

* KI-Assistent für **Unternehmen** (beantwortet Fragen basierend auf internen Datenquellen)
* Und für **Entwickler** (hilft beim Coden, wie ein Code-Assistent in der IDE)

\---

## B.4 Anwendungsintegration \& Serverless

### Amazon AppSync

* Managed **GraphQL-API** Service
* Synchronisiert Daten in Echtzeit zwischen Web/Mobile-Apps und Backend
* Offline-Fähigkeit für Mobile Apps

### AWS Amplify

* **Full-Stack-Plattform** für Web- und Mobile-Apps
* Frontend-Hosting + Backend-Services (Auth, API, Storage) in einem Paket
* Für Entwickler, die schnell eine App deployen wollen

### Amazon SES (Simple Email Service)

* **E-Mail-Versand** in großem Maßstab
* Transaktionale E-Mails (Bestätigungen, Passwort-Reset) und Marketing-E-Mails
* Pay-per-Email

\---

## B.5 Edge Computing \& Hybrid

### AWS Outposts

* AWS-Hardware **in deinem eigenen Rechenzentrum**
* Dieselben APIs und Services wie in der Cloud, aber lokal
* Für Unternehmen, die Daten aus regulatorischen Gründen lokal halten müssen

### AWS Wavelength

* AWS-Infrastruktur eingebettet in **5G-Mobilfunknetze**
* Ultra-niedrige Latenz für Mobile-Apps
* Für IoT, Gaming, AR/VR

### AWS Local Zones

* AWS-Infrastruktur **näher an Endnutzern** in Großstädten
* Für latenz-sensitive Anwendungen, die nicht in einer Standard-Region laufen können

\---

## B.6 End User Computing

|Service|Was?|Beispiel|
|-|-|-|
|**Amazon WorkSpaces**|Virtuelle Desktops (VDI)|Mitarbeiter arbeiten von überall auf einem Cloud-Desktop (Windows/Linux)|
|**Amazon AppStream 2.0**|Streaming von Desktop-Anwendungen|Nutzer streamt Photoshop oder AutoCAD im Browser – keine Installation nötig|
|**Amazon Connect**|Cloud-basiertes Contact Center|Callcenter aufsetzen – IVR, Routing, Agent-Desktop|
|**Amazon WorkDocs**|Dokument-Speicher und Zusammenarbeit|Wie Google Drive / SharePoint, aber AWS-nativ|

**Prüfungsregel:**

* "Virtuelle Desktops" / "Remote Desktop" → **WorkSpaces**
* "Anwendung im Browser streamen" → **AppStream 2.0**
* "Callcenter" / "Contact Center" → **Connect**

\---

## B.7 IoT (Internet of Things)

|Service|Was?|
|-|-|
|**AWS IoT Core**|Verbindet IoT-Geräte (Sensoren, Aktoren) mit der Cloud. MQTT-Protokoll. Milliarden Geräte skalierbar.|
|**AWS IoT Greengrass**|Führt AWS-Lambda und ML-Modelle direkt auf dem IoT-Gerät aus (Edge). Funktioniert auch offline.|

\---

## B.8 Sonstige Services die drankommen können

### AWS CloudShell

* **Browser-basierte Shell** in der AWS Console
* AWS CLI ist vorinstalliert, kostenlos
* Perfekt für schnelle CLI-Befehle ohne lokale Installation

### AWS Marketplace

* **Online-Shop** für Software von Drittanbietern, die auf AWS läuft
* AMIs, Container, SaaS-Lösungen, Daten
* Abrechnung über deine AWS-Rechnung

### AWS Well-Architected Tool

* Bewertet deine Workloads gegen die 6 Säulen des Well-Architected Frameworks
* Gibt konkrete Verbesserungsvorschläge
* Nicht verwechseln mit Trusted Advisor! (Trusted Advisor = automatisch, Well-Architected Tool = du beantwortest Fragen)

### AWS Service Catalog

* Erstellt einen **internen Katalog** genehmigter AWS-Produkte
* Admins definieren CloudFormation-Templates als "Produkte", Nutzer können sie deployen
* Governance: Nutzer können nur genehmigte Infrastruktur starten

### AWS Control Tower

* **Automatisiertes Setup** einer sicheren Multi-Account-Umgebung
* Setzt Best Practices automatisch um (Landing Zone, Guardrails)
* Nutzt im Hintergrund AWS Organizations, SCPs, Config

### AWS Elastic Disaster Recovery (DRS)

* **Disaster Recovery** für on-premise oder Cloud-Server
* Hält eine günstige Replik in AWS bereit
* Bei Ausfall: Minuten bis zum Failover statt Stunden

### AWS Backup

* **Zentraler Backup-Service** für AWS-Ressourcen (EC2, EBS, RDS, DynamoDB, EFS, S3)
* Backup-Pläne, Retention-Policies, Cross-Region-Backups
* Ein Ort für alle Backups statt pro Service konfigurieren

### Amazon GuardDuty vs. Detective

* **GuardDuty** = Findet Bedrohungen ("Hey, da stimmt was nicht!")
* **Detective** = Untersucht Vorfälle im Detail ("Was genau ist passiert und warum?")
* Detective nutzt Daten aus GuardDuty, CloudTrail und VPC Flow Logs

### AWS WAF vs. Firewall Manager vs. Shield

|Service|Level|Was?|
|-|-|-|
|**WAF**|Layer 7 (HTTP)|Regeln gegen SQL-Injection, XSS, Bots|
|**Shield**|Layer 3/4 (Netzwerk)|DDoS-Schutz|
|**Firewall Manager**|Management|Verwaltet WAF- und Shield-Regeln zentral über mehrere Accounts|

### AWS License Manager

* Verwaltet **Software-Lizenzen** (Microsoft, Oracle etc.) über AWS und on-premise
* Verhindert Lizenz-Verstöße

### Amazon Elastic Transcoder / MediaConvert

* **Konvertiert Mediendateien** (Video/Audio) in verschiedene Formate
* MediaConvert ist der neuere Service (empfohlen)
* Beispiel: MP4-Video in verschiedene Auflösungen für Streaming konvertieren

\---

# Schnell-Referenz: "Wenn die Frage nach X fragt..."

|Thema|→ Denke an...|
|-|-|
|||
|**SECURITY**||
|DDoS-Schutz|**Shield** (Standard = kostenlos, Advanced = kostenpflichtig)|
|Web-Firewall / SQL-Injection|**WAF**|
|Bedrohungserkennung / verdächtige Aktivitäten|**GuardDuty**|
|Sicherheitsvorfall untersuchen|**Detective**|
|Schwachstellen-Scan auf EC2|**Inspector**|
|Sensible Daten in S3 finden|**Macie**|
|Verschlüsselungsschlüssel verwalten|**KMS**|
|Passwörter/API-Keys speichern|**Secrets Manager**|
|SSL/TLS-Zertifikate|**Certificate Manager (ACM)**|
|Compliance-Berichte herunterladen|**Artifact**|
|App-User-Login (Webseite/App)|**Cognito**|
|AWS-Account-Zugriff|**IAM**|
|Accounts limitieren (Organisationsebene)|**SCPs**|
|Multi-Account-Setup automatisieren|**Control Tower**|
|||
|**MONITORING \& AUDIT**||
|Wer hat was getan? (Audit)|**CloudTrail**|
|CPU-Alarm, Metriken, Monitoring|**CloudWatch**|
|Events → Aktionen auslösen|**EventBridge**|
|Ressourcen-Compliance prüfen|**Config**|
|Kosten-/Security-Empfehlungen|**Trusted Advisor**|
|||
|**COMPUTE**||
|Virtuelle Server|**EC2**|
|Serverless Code ausführen|**Lambda**|
|Serverless Container|**Fargate**|
|Docker-Container orchestrieren|**ECS**|
|Kubernetes verwaltet|**EKS**|
|Code hochladen, Rest automatisch (PaaS)|**Elastic Beanstalk**|
|Einfacher VPS mit Festpreis|**Lightsail**|
|||
|**STORAGE**||
|Objektspeicher (Dateien, Bilder, Backups)|**S3**|
|Festplatte für EC2|**EBS**|
|Netzwerk-Dateisystem (NFS, Multi-AZ)|**EFS**|
|Archiv, günstigster Speicher|**Glacier Deep Archive**|
|Statische Website hosten|**S3 Static Website Hosting** (+ CloudFront für global)|
|Temporärer Zugriff auf S3-Objekt|**Pre-Signed URL**|
|Daten dürfen nicht gelöscht werden (WORM)|**S3 Object Lock**|
|Netzwerk-Traffic in VPC aufzeichnen|**VPC Flow Logs**|
|Privater Zugriff auf S3 ohne Internet|**VPC Gateway Endpoint**|
|Physische Datenmigration (Snowball etc.)|**Snow Family**|
|Hybrid-Storage (lokal + Cloud)|**Storage Gateway**|
|||
|**DATENBANKEN**||
|Relationale DB verwaltet|**RDS**|
|Hochperformante relationale DB (AWS-eigen)|**Aurora**|
|NoSQL, serverless, Key-Value|**DynamoDB**|
|In-Memory Cache|**ElastiCache**|
|Data Warehouse|**Redshift**|
|Graph-DB|**Neptune**|
|||
|**ANALYTICS**||
|SQL-Abfragen auf S3|**Athena**|
|ETL (Daten vorbereiten)|**Glue**|
|BI-Dashboards|**QuickSight**|
|Echtzeit-Streaming|**Kinesis**|
|||
|**MESSAGING \& INTEGRATION**||
|Message Queue (entkoppeln)|**SQS**|
|Pub/Sub, Fan-out, viele Empfänger|**SNS**|
|ActiveMQ / RabbitMQ Migration|**Amazon MQ**|
|Workflow-Orchestrierung|**Step Functions**|
|REST/WebSocket-API|**API Gateway**|
|||
|**NETZWERK**||
|DNS|**Route 53**|
|CDN / Caching weltweit|**CloudFront**|
|Private Leitung zu AWS|**Direct Connect**|
|Verschlüsselte Verbindung über Internet|**VPN**|
|Mehrere VPCs verbinden|**Transit Gateway**|
|||
|**MIGRATION**||
|Datenbank migrieren|**DMS**|
|Server migrieren (Lift \& Shift)|**Application Migration Service (MGN)**|
|Physisch riesige Datenmengen transportieren|**Snow Family**|
|Daten automatisiert übertragen|**DataSync**|
|FTP-Server in die Cloud|**Transfer Family**|
|||
|**MACHINE LEARNING**||
|Eigene ML-Modelle bauen|**SageMaker**|
|Bilder/Videos analysieren|**Rekognition**|
|Sprache → Text|**Transcribe**|
|Text → Sprache|**Polly**|
|Chatbot|**Lex**|
|Text aus Dokumenten|**Textract**|
|Übersetzung|**Translate**|
|Textanalyse/Stimmung|**Comprehend**|
|Generative AI / Foundation Models|**Bedrock**|
|||
|**END USER**||
|Virtuelle Desktops|**WorkSpaces**|
|App im Browser streamen|**AppStream 2.0**|
|Callcenter|**Connect**|
|E-Mail-Versand|**SES**|
|||
|**DEPLOYMENT \& IaC**||
|Infrastruktur als Code (YAML/JSON)|**CloudFormation**|
|IaC in Programmiersprachen|**CDK**|
|CI/CD-Pipeline|**CodePipeline**|
|||
|**BILLING**||
|Kosten analysieren / Trends|**Cost Explorer**|
|Budget-Warnungen|**Budgets**|
|Kosten vorab schätzen|**Pricing Calculator**|
|Mehrere Accounts verwalten|**Organizations**|
|Richtige Instanzgröße empfehlen|**Compute Optimizer**|
|TAM|**Enterprise Support**|

\---

# Prüfungstipps

1. **Zeitmanagement:** 90 Minuten ÷ 65 Fragen = \~1,4 Min./Frage. Nicht zu lange hängenbleiben – markieren und weitermachen.
2. **Ausschlussverfahren:** Eliminiere offensichtlich falsche Antworten. Oft bleiben 2 übrig – dann genau lesen.
3. **Schlüsselwörter erkennen:**

   * "kosteneffizient" / "cost" → Meist Spot, Reserved oder Savings Plans
   * "serverless" → Lambda, DynamoDB, Fargate, S3, API Gateway, SQS, SNS
   * "automatisch skalieren" → Auto Scaling, DynamoDB, Lambda
   * "Audit" / "wer hat" → CloudTrail
   * "Monitoring" / "Alarm" → CloudWatch
   * "Compliance" → Config, Artifact
   * "Hochverfügbarkeit" → Multi-AZ, ELB, ASG
   * "entkoppeln" / "lose Kopplung" → SQS, SNS, EventBridge
   * "ActiveMQ" / "RabbitMQ" → Amazon MQ
   * "Workflow" / "Orchestrierung" → Step Functions
   * "Datenbank migrieren" → DMS
   * "physisch Daten transportieren" / "Petabyte" → Snow Family
   * "Gesichtserkennung" / "Bilder analysieren" → Rekognition
   * "Chatbot" → Lex
   * "Sprache zu Text" → Transcribe
   * "Text zu Sprache" → Polly
   * "virtuelle Desktops" → WorkSpaces
   * "Callcenter" → Amazon Connect
   * "Generative AI" / "Foundation Models" → Bedrock
4. **Geteilte Verantwortung:** Wenn die Frage nach Verantwortung fragt – überlege: "Kann ICH das im AWS-Konto konfigurieren?" Ja → deine Verantwortung.
5. **15 ungewertete Fragen:** Von 65 Fragen zählen nur 50. Du weißt nicht welche – behandle alle gleich ernst.
6. **Deutsch vs. Englisch:** Die Prüfung gibt es auf Deutsch, aber viele Fachbegriffe bleiben englisch. Kenne beide Versionen (z.B. "Geteiltes Verantwortungsmodell" = "Shared Responsibility Model").

\---

# Troubleshooting-Cheat-Sheet

Diese "Problem → Lösung"-Szenarien kommen regelmäßig in der Prüfung vor:

|Problem|Wahrscheinliche Ursache|Lösung|
|-|-|-|
|EC2 nicht erreichbar|Security Group blockiert eingehenden Traffic|Port in Security Group öffnen (z.B. 22 für SSH, 443 für HTTPS)|
|S3-Website nicht erreichbar|Bucket Policy fehlt oder Block Public Access aktiv|Bucket Policy für öffentlichen Lesezugriff setzen + Block Public Access deaktivieren|
|EC2 kann keine Updates laden (privates Subnet)|Kein Internetzugang|NAT Gateway im öffentlichen Subnet einrichten|
|EC2 kann nicht auf S3 zugreifen|Keine Berechtigung|IAM Role mit S3-Zugriff an EC2 anhängen (keine Access Keys!)|
|Hohe Latenz für globale Nutzer|Inhalte kommen nur aus einer Region|CloudFront einrichten (CDN mit Edge Locations weltweit)|
|Website stürzt bei Traffic-Spitzen ab|Eine Instanz ist überlastet|Auto Scaling Group + Elastic Load Balancer einrichten|
|AWS-Rechnung unerwartet hoch|Ungenutzte oder falsch dimensionierte Ressourcen|Cost Explorer + Trusted Advisor + Compute Optimizer prüfen|
|Verdächtige Aktivität im Account|Mögliche Kompromittierung|GuardDuty-Findings prüfen, betroffene Credentials rotieren|
|Datenbank-Performance schlecht (viele Reads)|DB ist überlastet mit Leseanfragen|Read Replicas (RDS) oder ElastiCache davor schalten|
|Compliance: Wer hat Security Group geändert?|Audit nötig|CloudTrail-Logs prüfen|

\---

*Lok'tar ogar, Champion. Mit dieser Zusammenfassung und dem Quiz bist du bereit für den CLF-C02.* ⚔️

