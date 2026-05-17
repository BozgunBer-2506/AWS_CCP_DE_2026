# AWS Certified Cloud Practitioner (CLF-C02)

---

## BÖLÜM 1 - AWS Küresel Altyapısı

AWS altyapısı coğrafi olarak hiyerarşik bir yapıda kurulmuştur.

### Regions (Bölgeler)

Dünyanın dört bir yanına yayılmış, birbirinden tamamen izole edilmiş coğrafi alanlardır.
Örnek: `us-east-1` (N. Virginia), `eu-central-1` (Frankfurt)

Her Region, AWS'in kendi özel yüksek hızlı fiber ağıyla birbirine bağlıdır.

**Region seçiminde dikkate alınan 4 kriter:**

| # | Kriter | Açıklama |
|---|--------|----------|
| 1 | Data Sovereignty / Compliance | Bazı ülke kanunları verilerin ülke dışına çıkmasını yasaklar (örn. Almanya) |
| 2 | Proximity / Latency | Sunucu, kullanıcılara en yakın Region'da konumlandırılmalıdır |
| 3 | Available Services | Yeni servisler her Region'da eş zamanlı sunulmayabilir |
| 4 | Pricing | Vergilendirme ve elektrik farkı nedeniyle fiyat Region'a göre değişir |

---

### Availability Zones (AZ)

Bir Region içinde, birbirine ultra düşük gecikmeli fiber ile bağlı, elektrik ve şebeke altyapısı tamamen **izole edilmiş** fiziksel veri merkezleridir.

- Her Region'da **en az 3 AZ** bulunur
- Uygulamalar farklı AZ'lere dağıtıldığında bir veri merkezi çökse bile diğerleri çalışmaya devam eder
- Bu kavramlar **High Availability** ve **Fault Tolerance** olarak adlandırılır

---

### Edge Locations ve Regional Edge Caches

**Edge Locations:** Dünya genelindeki büyük metropollerde bulunan, verileri **önbelleğe alarak (caching)** son kullanıcıya en hızlı şekilde ulaştıran küçük dağıtım noktalarıdır.

Kullanan servisler: **Amazon CloudFront** (CDN), **Amazon Route 53** (DNS)

**Regional Edge Caches:** Edge Location ile Origin sunucu arasında yer alan ara önbellek katmanıdır. Daha büyük ve daha uzun süreli önbellekleme yapar; Edge Location'larda önbellekten düşen içerikler burada tutulmaya devam eder.

---

### Local Zones

Ana Region'a **AWS'in özel fiber ağıyla** bağlı, büyük metropol alanlara çok daha yakın yerleştirilen küçük altyapı uzantılarıdır.

- Amaç: Oyun, canlı yayın, gerçek zamanlı render gibi **1 ms altı gecikme** gerektiren uygulamalar
- Ana Region'dan bağımsız değildir; doğrudan yerel bir fiber hat üzerinden anahtarlanır (internet bağlantısı kullanılmaz)

---

### AWS Outposts

AWS donanımının **müşterinin kendi veri merkezine** kurulmasını sağlayan yönetilen hizmettir. Yerel veri işleme zorunluluğu olan kurumlar için uygundur.

---

## BÖLÜM 2 - Paylaşılan Sorumluluk Modeli (Shared Responsibility Model)

AWS ile müşteri arasındaki güvenlik sorumluluklarının nasıl paylaşıldığını tanımlar.

| Taraf | Sorumluluk | Örnekler |
|-------|-----------|---------|
| **AWS** | Bulutun güvenliği *(Security OF the Cloud)* | Fiziksel veri merkezleri, donanım, ağ altyapısı, hypervisor |
| **Müşteri** | Bulut içindeki güvenlik *(Security IN the Cloud)* | İşletim sistemi yamaları, uygulama kodu, IAM yapılandırması, veri şifreleme |

> **Sınav notu:** "Fiziksel güvenlik" sorusu geldiğinde yanıt her zaman AWS'dir. "Veri şifreleme" veya "erişim yönetimi" sorusu geldiğinde yanıt müşteridir.

---

## BÖLÜM 3 - AWS Cloud Adoption Framework (CAF)

AWS CAF, kuruluşların buluta geçişini planlamak için 6 perspektif ve 4 aşamadan oluşan bir çerçeve sunar.

### 6 Perspektif

| Perspektif | Odak |
|-----------|------|
| **Business** | Bulutun iş hedeflerine katkısı, yatırım getirisi |
| **People** | Organizasyon kültürü, eğitim, yetenek dönüşümü |
| **Governance** | Risk yönetimi, uyumluluk, portföy izleme |
| **Platform** | Mimari ilkeler, veri merkezi modernizasyonu |
| **Security** | Veri bütünlüğü, kimlik yönetimi, olay müdahalesi |
| **Operations** | Hizmet yönetimi, operasyon otomasyonu |

### 4 Dönüşüm Aşaması

| Aşama | Açıklama |
|-------|---------|
| **Envision** | İş hedeflerini belirle, fırsatları tespit et |
| **Align** | 6 perspektifte eksiklik analizi yap, eylem planı oluştur |
| **Launch** | Pilot projeler başlat, değer kanıtla |
| **Scale** | Başarılı pilotları ölçeklendir, dönüşümü genişlet |

---

## BÖLÜM 4 - Bilgi İşlem Servisleri (Compute)

### Amazon EC2

Bulutta saniyeler içinde başlatılabilen sanal sunuculardır (IaaS). İşletim sistemi, disk ve RAM seçimi kullanıcıya aittir.

**EC2 Satın Alma Modelleri:**

| Model | Ne Zaman Kullanılır | Maliyet |
|-------|--------------------|---------| 
| **On-Demand** | Kısa vadeli, ani trafik, kesintiye tahammülü olmayan testler | Normal fiyat |
| **Savings Plans / Reserved** | Sürekli çalışan, trafiği öngörülebilir sunucular (1 veya 3 yıllık taahhüt) | %72'ye varan indirim |
| **Spot Instances** | Kesintiye uğradığında sorun olmayan işler (big data, video render, batch) | %90'a varan indirim |
| **Dedicated Hosts** | Per-core yazılım lisansları, katı düzenleyici gereksinimler | En pahalı seçenek |

> **Spot Instance:** AWS ihtiyaç duyduğu an 2 dakika önceden uyarı vererek sunucuyu geri alır. Kesintisiz çalışması gereken iş yükleri için uygun değildir.

---

### Elastic Load Balancing (ELB) ve Auto Scaling

**ELB** gelen trafiği birden fazla EC2 örneği arasında otomatik olarak dağıtır.

| Tür | Katman | Kullanım |
|-----|--------|---------|
| **Application LB (ALB)** | Layer 7 (HTTP/HTTPS) | Web uygulamaları, URL yönlendirme |
| **Network LB (NLB)** | Layer 4 (TCP/UDP) | Yüksek performans, düşük gecikme |
| **Gateway LB (GWLB)** | Layer 3 | Güvenlik cihazları (firewall, IDS) |

**EC2 Auto Scaling:** Trafik yoğunluğuna göre EC2 örneği sayısını otomatik olarak artırır veya azaltır. ELB ile birlikte kullanılır.

---

### Amazon ECS / EKS / Fargate

| Servis | Tanım |
|--------|-------|
| **ECS** | AWS'in kendi Docker konteyner yönetim servisi |
| **EKS** | Yönetilen (managed) Kubernetes servisi |
| **Fargate** | ECS/EKS için sunucusuz konteyner motoru - altta yatan EC2 yönetimi gerekmez |

---

### AWS Lambda

Sunucu kavramını ortadan kaldıran **olay güdümlü (event-driven)** kod çalıştırma servisidir.

- Olay tetiklendiğinde (örn. S3'e dosya yüklenmesi) kod çalışır, işini bitirir (maks. 15 dk) ve kapanır
- Yalnızca **milisaniye bazında** ödeme yapılır

---

### Elastic Beanstalk ve CloudFormation

| Servis | Kategori | Ne Yapar | Yönetim Zahmeti |
|--------|----------|----------|-----------------|
| **Elastic Beanstalk** | PaaS | Kod yüklenir, gerisini AWS halleder | Düşük |
| **CloudFormation** | IaC | Tüm altyapı JSON/YAML şablonuyla otomatik kurulur | Yüksek (tam kontrol) |

---

## BÖLÜM 5 - Depolama Servisleri (Storage)

### Amazon S3

Sınırsız kapasiteli **nesne tabanlı (Object Storage)** depolamadır. Veriler "Bucket" adı verilen kaplarda tutulur.

**S3 Depolama Sınıfları:**

| Sınıf | Kullanım | Erişim Hızı | Maliyet |
|-------|----------|-------------|---------|
| **Standard** | Sık erişilen veriler | Anında | Yüksek |
| **Standard-IA** | Ayda birkaç kez erişilen veriler | Anında | Depolama ucuz, erişim ücretli |
| **One Zone-IA** | Kritik olmayan, yedeklenebilir veriler | Anında | Daha ucuz (tek AZ riski) |
| **Intelligent-Tiering** | Erişim sıklığı belirsiz veriler | Anında | Otomatik optimize |
| **Glacier Instant** | Yılda birkaç kez erişilen arşiv | Milisaniye | Ucuz |
| **Glacier Flexible** | Arşiv | 3-5 saat | Çok ucuz |
| **Glacier Deep Archive** | Yasal arşiv (yılda 1-2 kez) | 12 saat | En ucuz |

**S3 Temel Özellikleri:**

| Özellik | Açıklama |
|---------|---------|
| **Versioning** | Bir nesnenin her sürümü saklanır; yanlışlıkla silme veya üzerine yazma kurtarılabilir |
| **MFA Delete** | Sürüm silme işlemi için MFA doğrulaması zorunlu kılınır |
| **Lifecycle Policies** | Nesneleri belirli süre sonra otomatik olarak daha ucuz bir depolama sınıfına taşır veya siler |
| **Static Website Hosting** | S3 bucket'ı doğrudan statik web sitesi olarak sunulabilir (sunucu gerektirmez) |
| **S3 Transfer Acceleration** | CloudFront Edge Location'larını kullanarak yükleme hızını artırır |
| **Cross-Region Replication (CRR)** | Nesneleri otomatik olarak başka bir Region'daki bucket'a kopyalar |

---

### EBS / EFS / Storage Gateway

| Servis | Tür | Kritik Fark |
|--------|-----|-------------|
| **EBS** | Block Storage | Tek bir EC2'ye bağlı sanal sabit disk |
| **EFS** | File Storage | Aynı anda yüzlerce EC2 tarafından ortaklaşa kullanılabilir (yalnızca Linux) |
| **Storage Gateway** | Hibrit | Şirket içi fiziksel sunucuyu AWS S3'e bağlayan köprü |

---

### AWS Snow Family

İnternet bağlantısı yetersiz ortamlarda büyük hacimli verileri fiziksel olarak AWS'e taşımak için kullanılır.

| Cihaz | Kapasite | Kullanım |
|-------|---------|---------|
| **Snowcone** | 8 TB | Taşınabilir, saha çalışmaları |
| **Snowball Edge** | 80 TB | Büyük veri migrasyonu + uçta hesaplama |
| **Snowmobile** | 100 PB | Veri merkezi göçü - kamyon boyutunda konteyner |

---

## BÖLÜM 6 - Veritabanı Servisleri

| Servis | Tür | Kullanım |
|--------|-----|----------|
| **RDS** | SQL (İlişkisel) | MySQL, PostgreSQL, MariaDB, Oracle, SQL Server |
| **Aurora** | SQL (AWS özel) | MySQL'den 5x hızlı, AWS'in kendi motoru, tam yönetilen |
| **DynamoDB** | NoSQL / Serverless | Oyun skorları, alışveriş sepeti - milisaniye gecikme |
| **Redshift** | Data Warehouse | Milyarlarca satır geçmiş veri analizi, BI raporları |
| **ElastiCache** | In-memory (Redis/Memcached) | Sık sorgulanan veriyi RAM'de önbellekleme |
| **DocumentDB** | NoSQL (MongoDB uyumlu) | Belge tabanlı veri (JSON) |
| **Neptune** | Graf veritabanı | Sosyal ağ, öneri sistemleri |

---

## BÖLÜM 7 - Ağ ve İçerik Dağıtımı (Networking)

### Amazon VPC

AWS bulutu içinde tamamen izole sanal ağ alanıdır.

| Bileşen | Görev |
|---------|-------|
| **Public Subnet** | İnternete açık sunucular için |
| **Private Subnet** | Dış dünyaya kapalı veritabanları için |
| **Internet Gateway (IGW)** | VPC'yi internete bağlayan dış kapı |
| **NAT Gateway** | Private Subnet'in internete tek yönlü çıkış yapmasını sağlar |
| **VPC Peering** | İki VPC'nin AWS iç ağı üzerinden güvenli iletişimi |
| **Transit Gateway** | Çok sayıda VPC ve şirket ağını merkezi olarak birbirine bağlar |

---

### Ağ Servisleri

| Servis | Görev |
|--------|-------|
| **CloudFront** | Edge Location'lar üzerinden küresel CDN |
| **Route 53** | Akıllı DNS - domain tescil, coğrafi yönlendirme, health check |
| **Global Accelerator** | AWS Anycast ağı üzerinden trafiği optimize eder - CDN değil, IP tabanlı |
| **Site-to-Site VPN** | Ofis ile AWS arası şifreli internet tüneli (hızlı kurulum, bant genişliği garantisi yok) |
| **Direct Connect** | Ofisten AWS'e fiziksel kiralık fiber hat (maksimum güvenlik ve sabit hız) |

> **CloudFront vs Global Accelerator:** CloudFront içerik önbellekler (CDN), Global Accelerator trafiği AWS ağı üzerinden yönlendirir (IP sabittir, TCP/UDP için).

---

## BÖLÜM 8 - Mesajlaşma ve Geliştirici Araçları

### Mesajlaşma ve Entegrasyon

| Servis | Tür | Kullanım |
|--------|-----|---------|
| **SQS (Simple Queue Service)** | Mesaj kuyruğu | Bileşenler arasında gevşek bağlantı (loose coupling); tüketici hazır olana kadar mesaj kuyrukta bekler |
| **SNS (Simple Notification Service)** | Pub/Sub | Bir mesajı aynı anda birden fazla alıcıya (e-posta, SMS, Lambda, SQS) gönderir |
| **EventBridge** | Olay veri yolu | AWS servisleri, SaaS uygulamaları veya kendi kodunuz arasında olayları yönlendiren sunucusuz event bus |

> **SQS vs SNS:** SQS bire bir kuyruk (bir mesajı tek tüketici okur), SNS bire çok yayın (bir mesajı tüm aboneler alır).

---

### CI/CD ve Geliştirici Araçları

| Servis | Görev |
|--------|-------|
| **CodeCommit** | AWS üzerinde barındırılan özel Git deposu |
| **CodeBuild** | Kaynak kodunu derleyen ve test eden yönetilen CI servisi |
| **CodeDeploy** | EC2, Lambda veya şirket içi sunuculara otomatik dağıtım yapar |
| **CodePipeline** | CodeCommit → CodeBuild → CodeDeploy adımlarını uçtan uca orkestra eden CI/CD boru hattı |
| **Cloud9** | Tarayıcı tabanlı bulut IDE; AWS servislerine hazır entegrasyon |
| **X-Ray** | Dağıtık uygulamalarda istekleri uçtan uca izleyen hata ayıklama ve performans analiz aracı |

---

## BÖLÜM 9 - Analitik ve Büyük Veri

| Servis | Kullanım |
|--------|---------|
| **Athena** | S3 üzerindeki veri dosyalarını (CSV, JSON, Parquet) SQL ile sorgulayan sunucusuz analitik servisi; altyapı kurulmaz |
| **OpenSearch Service** | Log analizi ve tam metin araması için yönetilen Elasticsearch/OpenSearch kümesi |
| **EMR (Elastic MapReduce)** | Apache Hadoop, Spark ve diğer büyük veri çerçevelerini yönetilen kümede çalıştırır |
| **Kinesis** | Gerçek zamanlı veri akışı (streaming) toplama, işleme ve analizi; IoT, log ve klikstream verileri için |
| **QuickSight** | İş zekası (BI) servisi; görsel panolar ve raporlar oluşturur, ML tabanlı içgörüler sunar |

> **Athena vs Redshift:** Athena S3 üzerinde geçici/anlık sorgular için (sunucusuz), Redshift büyük ölçekli ambar sorguları için (küme tabanlı).

---

## BÖLÜM 10 - Güvenlik ve Kimlik (Security & Identity)

### AWS IAM

AWS hesabına kimlerin, hangi yetkilerle erişeceğini belirleyen **küresel** güvenlik servisidir.

| Kavram | Açıklama |
|--------|---------|
| **User** | Bireysel kişi veya uygulama hesabı |
| **Group** | Ortak politika uygulanan kullanıcı koleksiyonu |
| **Role** | EC2, Lambda gibi servislere veya çapraz hesap erişimlere atanan geçici yetki |
| **Policy** | JSON formatında yetki tanımlayan belge |

- **Least Privilege:** Her kullanıcı yalnızca görevi için gereken minimum yetkiyi alır
- **MFA:** Şifreye ek olarak ikinci doğrulama faktörü zorunlu tutulmalıdır
- **Root User:** Günlük operasyonlarda kullanılmamalıdır; yerine IAM Admin hesabı açılmalıdır

---

### Güvenlik Servisleri

| Servis | Görev |
|--------|-------|
| **Cognito** | Uygulamanın son kullanıcıları için Sign-in/Sign-up (Google, Facebook federation dahil) |
| **Organizations** | Yüzlerce AWS hesabını tek çatı altında yönetir (Consolidated Billing, SCP) |
| **SCP (Service Control Policy)** | Organizations kapsamında hesaplara uygulanabilen maksimum yetki sınırı |
| **Shield** | DDoS koruması (Standard: ücretsiz, Advanced: ücretli + koruma garantisi) |
| **WAF** | Web Application Firewall - SQL Injection gibi Layer 7 saldırıları engeller |
| **GuardDuty** | VPC/S3/CloudTrail loglarını AI ile izleyen tehdit algılama |
| **Inspector** | EC2 ve konteyner görüntülerindeki yazılım güvenlik açıklarını tarayan zafiyet tarayıcısı |
| **Macie** | S3 içindeki hassas verileri (PII, kredi kartı) otomatik olarak tespit eder |
| **KMS** | Şifreleme anahtarlarının oluşturulması ve yönetilmesi (Key Management Service) |
| **CloudHSM** | Donanım tabanlı özel şifreleme modülü (dedicated HSM) |
| **Artifact** | AWS'in ISO, PCI DSS, SOC sertifikaları ve denetim raporlarını içeren portal |
| **Secrets Manager** | DB şifrelerini ve API anahtarlarını şifreli saklar, otomatik döndürür (Rotation) |
| **ACM** | AWS Certificate Manager - SSL/TLS sertifikası sağlar ve yönetir |

---

## BÖLÜM 11 - Yönetim ve İzleme (Management & Governance)

| Servis | Soru | Ne Yapar |
|--------|------|----------|
| **CloudWatch** | Performans nasıl? | CPU, RAM, ağ metrikleri - alarm ve Auto Scaling tetikler |
| **CloudTrail** | Kim ne yaptı? | Tüm kullanıcı aktivitelerini ve API çağrılarını kaydeder (Audit log) |
| **Config** | Konfigürasyon değişti mi? | Kaynak ayar geçmişini kaydeder, uyumluluk kontrolü yapar |
| **Trusted Advisor** | Hesap optimize mi? | Maliyet, Güvenlik, Hata Toleransı, Performans, Servis Limitleri için tavsiye verir |
| **Systems Manager** | Sunucu yönetimi | EC2 filolarını merkezi olarak yönetir, patch uygular, komut çalıştırır |
| **Control Tower** | Çoklu hesap kurulumu | Organizations üzerinde en iyi uygulama kurallarıyla ortam hazırlar |

---

## BÖLÜM 12 - Yapay Zeka ve Makine Öğrenmesi

| Servis | Görev |
|--------|-------|
| **Transcribe** | Ses → Yazı (Speech-to-Text) |
| **Polly** | Yazı → Ses (Text-to-Speech) |
| **Translate** | Metin çevirisi |
| **Rekognition** | Resim/videoda yüz, nesne ve zararlı içerik tanıma |
| **Lex** | Sesli ve yazılı Chatbot motoru (Alexa'nın altyapısı) |
| **Comprehend** | Metin üzerinde doğal dil işleme (NLP) - duygu analizi, anahtar kelime |
| **SageMaker** | ML modeli tasarlama, eğitme ve canlıya alma platformu |
| **Kendra** | Kurumsal belgeler için akıllı arama motoru |
| **Personalize** | Gerçek zamanlı kişiselleştirilmiş öneri sistemi |

---

## BÖLÜM 13 - Migrasyon Servisleri

| Servis | Ne Yapar |
|--------|---------|
| **Database Migration Service (DMS)** | Veritabanlarını AWS'e minimum kesinti ile taşır (Oracle → RDS gibi) |
| **Application Migration Service (MGN)** | Fiziksel/sanal sunucuları EC2'ye kaldırır |
| **AWS Transfer Family** | SFTP/FTP üzerinden S3'e dosya transferi |
| **DataSync** | Şirket içi depolama ile AWS arasında otomatik veri eşitleme |

---

## BÖLÜM 14 - Bulut Ekonomisi ve Maliyet Araçları

### CapEx vs OpEx

| | CapEx | OpEx |
|-|-------|------|
| **Ne?** | Sunucu satın alma, büyük başlangıç yatırımı | Kullandıkça öde (AWS modeli) |
| **Esneklik** | Düşük | Yüksek |
| **Ön yatırım** | Yüksek | Yok |

### Maliyet Araçları

| Araç | Ne Zaman Kullanılır |
|------|---------------------|
| **Pricing Calculator** | Mimariyi kurmadan önce aylık maliyeti tahmin etmek için |
| **Budgets** | Harcama sınırı koymak, tahmin veya gerçek aşımda bildirim almak için |
| **Cost Explorer** | Mevcut faturayı geçmişe dönük grafiklerle analiz etmek için |
| **Cost and Usage Report (CUR)** | Kaynak bazında en ayrıntılı fatura verisi; S3'e CSV/Parquet olarak aktarılır, BI araçlarıyla analiz edilir |
| **Cost Anomaly Detection** | Beklenmeyen maliyet artışlarını otomatik olarak tespit etmek için |
| **Savings Plans** | Compute/EC2 için esnek taahhüt bazlı indirim |

### Consolidated Billing

AWS Organizations altındaki tüm hesapların faturaları tek hesapta birleştirilir. Bu sayede toplu kullanım indirimi (volume discount) elde edilir. Reserved Instance tasarrufu da hesaplar arasında paylaşılabilir.

---

## BÖLÜM 15 - AWS Support Planları

| Plan | Fiyat | Yanıt Süresi (Kritik) | Özellikler |
|------|-------|----------------------|-----------|
| **Basic** | Ücretsiz | - | Dokümantasyon, forumlar, 6 Trusted Advisor kontrolü |
| **Developer** | $29/ay~ | İş saatleri | E-posta desteği, 1 kişi |
| **Business** | $100/ay~ | < 1 saat | 7/24 telefon + chat, tüm Trusted Advisor |
| **Enterprise** | $15.000/ay~ | < 15 dakika | TAM (Technical Account Manager), Concierge |

---

## BÖLÜM 16 - Well-Architected Framework

AWS'in iyi tasarlanmış mimari için 6 temel sütunu:

| Sütun | Odak |
|-------|------|
| **Operational Excellence** | Süreçleri otomatikleştir, sürekli iyileştir |
| **Security** | Kimlik yönetimi, veri koruma, izleme |
| **Reliability** | Arıza kurtarma, yatay ölçeklendirme |
| **Performance Efficiency** | Doğru kaynak seçimi, performans izleme |
| **Cost Optimization** | Gereksiz harcamayı önle, kullandıkça öde |
| **Sustainability** | Enerji verimliliği, karbon ayak izi azaltma |

---

## Sınav Formülleri - Anahtar Kelime Eşleştirme

Soruda şu ifadeler görüldüğünde doğru servis:

| Soru ifadesi | Servis |
|--------------|--------|
| Infrastructure as Code / YAML / JSON Template | **CloudFormation** |
| Minimum management overhead / Just upload code | **Elastic Beanstalk** |
| Audit user activity / Who deleted the resource | **CloudTrail** |
| DDoS attack mitigation / Layer 3 and Layer 4 | **Shield** |
| Compliance reports / ISO certificates download | **Artifact** |
| Serverless container / No server management | **Fargate** |
| Sensitive data in S3 / PII detection | **Macie** |
| Encryption key management | **KMS** |
| Dedicated hardware HSM / bring your own key | **CloudHSM** |
| Global low latency / Static IP / TCP routing | **Global Accelerator** |
| Content caching / CDN / Edge delivery | **CloudFront** |
| Multiple accounts / single bill | **Organizations + Consolidated Billing** |
| Physical data transfer / no internet | **Snow Family** |
| Real-time threat detection / anomaly in logs | **GuardDuty** |
| Software vulnerability scanning / CVE | **Inspector** |
| Decouple components / message queue | **SQS** |
| Fan-out notification / one-to-many messaging | **SNS** |
| Serverless event routing / event bus | **EventBridge** |
| Managed CI/CD pipeline / automate deployments | **CodePipeline** |
| Distributed tracing / debug microservices | **X-Ray** |
| Query S3 data with SQL / no infrastructure | **Athena** |
| Real-time streaming / IoT data ingestion | **Kinesis** |
| BI dashboards / business intelligence | **QuickSight** |
| Managed Hadoop / Spark / big data cluster | **EMR** |
| Most detailed billing / resource-level cost | **Cost and Usage Report (CUR)** |
| Set spending alert / budget threshold | **Budgets** |
| Analyze past spending / cost trends | **Cost Explorer** |
| Cloud adoption strategy / 6 perspectives | **AWS CAF** |
| Ultra-low latency in city / gaming / live stream | **Local Zones** |
| AWS hardware in on-premises datacenter | **Outposts** |
| User sign-up/sign-in for app / social login | **Cognito** |
| Rotate database credentials automatically | **Secrets Manager** |
| SSL/TLS certificate provisioning | **ACM** |
| Patch fleet of EC2 / run commands at scale | **Systems Manager** |
| Multi-account guardrails / landing zone | **Control Tower** |
