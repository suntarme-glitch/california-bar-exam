const SUBJECTS = [
  {
    id: 'history',
    name: 'История и система',
    icon: '🏛️',
    color: 'var(--gold)',
    desc: 'Откуда взялось американское право и как оно устроено',
    lessons: [
      {
        title: 'Английские корни: от феодального права к common law',
        content: `
<div class="l-section">
  <div class="l-section-label">Историческая основа</div>
  <p class="l-text">Американское право родилось в Англии. Когда первые колонисты прибыли в Новый Свет, они привезли с собой не только скарб, но и правовую систему — <span class="l-en">English common law</span>. Понять американское право невозможно без понимания того, где оно возникло.</p>
  <p class="l-text">В средневековой Англии не было единого кодекса законов. Право складывалось из решений королевских судей, которые ездили по стране и разбирали споры. Постепенно их решения стали записываться, накапливаться и цитироваться. Так возник <span class="l-term">common law</span> — буквально «общее право», единое для всей страны.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Ключевые события</div>
  <div class="timeline">
    <div class="tl-item highlight">
      <div class="tl-year">1066</div>
      <div class="tl-text"><strong>Нормандское завоевание.</strong> Вильгельм Завоеватель централизовал власть, создал систему королевских судов. Именно тогда начала формироваться единая судебная система Англии.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1215</div>
      <div class="tl-text"><strong>Magna Carta.</strong> Великая хартия вольностей — первый документ, ограничивающий власть короля. Провозгласила принцип <span class="l-en">due process</span>: никто не может быть лишён свободы или собственности иначе как по закону. Этот принцип живёт в 5-й и 14-й поправках Конституции США.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1607–1733</div>
      <div class="tl-text"><strong>Колонизация Америки.</strong> 13 колоний принесли с собой английское право. После независимости (1776) каждый штат в основном сохранил английское common law как основу своей правовой системы.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1787</div>
      <div class="tl-text"><strong>Конституция США.</strong> Принята на Конституционном конвенте в Филадельфии. Создала федеральную систему с разделением властей. Стала высшей нормой страны — <span class="l-en">supreme law of the land</span>.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1803</div>
      <div class="tl-text"><strong>Marbury v. Madison.</strong> Верховный суд установил доктрину <span class="l-en">judicial review</span> — право судов признавать законы неконституционными. Это дело изменило американское право навсегда.</div>
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Сравнение с российским правом</div>
  <table class="comp-table">
    <tr><th>Критерий</th><th class="ru">Россия (Civil Law)</th><th>США (Common Law)</th></tr>
    <tr><td>Происхождение</td><td class="ru">Рецепция римского права, германская традиция</td><td>Английское феодальное право, прецеденты</td></tr>
    <tr><td>Главный источник</td><td class="ru">Кодексы (ГК РФ, УК РФ)</td><td>Судебные решения + статуты</td></tr>
    <tr><td>Роль судьи</td><td class="ru">Применяет норму закона</td><td>Создаёт право через решения</td></tr>
    <tr><td>Аналогия</td><td class="ru">Допускается при пробелах</td><td>Прецедент заполняет пробелы</td></tr>
  </table>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam · История и система</div>
  <div class="bar-example-body">
    <div class="bar-question">Which of the following best describes the principle established in Marbury v. Madison (1803)?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','B')"><span class="bar-option-letter">A</span> Congress has the exclusive power to interpret the Constitution</div>
      <div class="bar-option" onclick="selectOption(this,'B','B')"><span class="bar-option-letter">B</span> Federal courts have the authority to strike down legislation that conflicts with the Constitution</div>
      <div class="bar-option" onclick="selectOption(this,'C','B')"><span class="bar-option-letter">C</span> The President may veto any Supreme Court decision</div>
      <div class="bar-option" onclick="selectOption(this,'D','B')"><span class="bar-option-letter">D</span> State courts have supremacy over federal courts in constitutional matters</div>
    </div>
    <div class="bar-answer" id="ans-0-0">
      <strong>Правильный ответ: B.</strong> Marbury v. Madison установило доктрину <em>judicial review</em> — право федеральных судов (и прежде всего Верховного суда) проверять конституционность законов Конгресса и признавать их недействительными при противоречии Конституции. Это право не прописано в Конституции явно — Верховный суд вывел его самостоятельно через толкование статьи III.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Три забытых звена между Вильгельмом и Америкой</div>
  <p class="l-text">Между 1066 и 1776 произошли три события, без которых не понять логику common law. На Bar Exam они всплывают косвенно — через доктрины, которые на них опираются.</p>
  <div class="concept-card">
    <div class="concept-card-title">Генрих II и writ system (1154–1189)</div>
    <div class="concept-card-body">Король создал систему стандартных приказов (<span class="l-en">writs</span>), с которыми истец шёл в королевский суд. Если твой спор не попадал ни в один writ — королевский суд не мог тебя слушать. Отсюда принцип <em>ubi jus, ibi remedium</em> («где право, там и средство защиты») и его обратная сторона: <strong>«no writ, no right»</strong>. Так возникла знаменитая процессуальная жёсткость common law, которая впоследствии породила equity.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Разделение law и equity (XIV век)</div>
    <div class="concept-card-body">К XIV веку common law окостенело. Истцы, не нашедшие подходящий writ, шли напрямую к королю через Lord Chancellor. Так возник <strong>Court of Chancery</strong> и параллельная система <span class="l-term">equity</span>. Два суда существовали независимо до Judicature Acts 1873–1875 в Англии. В США слияние произошло в 1938 году с принятием Federal Rules of Civil Procedure. Именно отсюда живёт деление на legal и equitable remedies.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Reception statutes после независимости</div>
    <div class="concept-card-body">После 1776 года каждый штат принял закон, «принимающий» английское common law по состоянию на конкретную дату (как правило, 1776 или дата основания колонии), за исключением того, что противоречит американским институтам. <strong>Калифорния приняла reception statute в 1850 году</strong> (Cal. Civ. Code § 22.2). Формально калифорнийское common law до сих пор отсылает к английскому праву 1850 года как к исходной точке.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Louisiana — исключение из всех правил</div>
  <div class="hbox blue">
    <div class="hbox-label">Единственный civil law штат</div>
    <div class="hbox-text">Правовая система Луизианы построена не на common law, а на civil law (наследие французского права и Кодекса Наполеона). Когда говорят «49 штатов следуют common law» — имеется в виду именно это. На Bar Exam Калифорнии не тестируется, но знать полезно.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Дополнение к timeline: ключевые кейсы, формирующие фундамент</div>
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-year">1772</div>
      <div class="tl-text"><strong>Somerset v. Stewart.</strong> Английское решение, установившее, что рабство несовместимо с common law Англии. Повлияло на американское аболиционистское движение.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1819</div>
      <div class="tl-text"><strong>McCulloch v. Maryland.</strong> Маршалл расширил полномочия Конгресса через Necessary and Proper Clause. Пара к Marbury по формированию федеральной власти.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1824</div>
      <div class="tl-text"><strong>Gibbons v. Ogden.</strong> Закрепил широкое толкование Commerce Clause — основу 90% современного федерального регулирования экономики.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1938</div>
      <div class="tl-text"><strong>Erie Railroad v. Tompkins.</strong> Отменил Swift v. Tyson (1842) и установил: федерального general common law не существует. Федеральные суды в diversity cases применяют substantive law штата. Фундаментальное решение для Civil Procedure.</div>
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California Constitution 1879 — живой документ</div>
  <div class="hbox gold">
    <div class="hbox-label">Почему это критично для Cal Bar</div>
    <div class="hbox-text">Калифорния имеет собственную конституцию 1879 года (многократно изменённую), которая в ряде случаев даёт <strong>больше прав</strong>, чем федеральная. <strong>Cal. Const. Art. I, § 1 прямо упоминает privacy как fundamental right</strong> — федеральная Конституция такого текста не содержит. На Cal Bar это регулярно проверяется: штат не может ссылаться на то, что federal Constitution не защищает privacy, потому что state Constitution защищает.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps на этой теме</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Federal general common law</div>
    <div class="hbox-text">Не путай Common Law of England и Common Law of the United States. <strong>Федерального general common law нет с 1938 года (Erie).</strong> Но есть federal common law в узких областях: admiralty, interstate disputes, federal officer liability, вопросы прав и обязанностей США как юридического лица.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Откуда взялся judicial review</div>
    <div class="hbox-text">Вопрос: «Where does the power of judicial review come from?». Правильный ответ: <strong>implied from Article III</strong>, not expressly stated. Конституция не даёт это право явно — Маршалл вывел его через толкование в Marbury v. Madison.</div>
  </div>
</div>`
      },
      {
        title: 'Stare Decisis: почему прошлое управляет настоящим',
        content: `
<div class="l-section">
  <div class="l-section-label">Ключевая доктрина common law</div>
  <p class="l-text"><span class="l-term">Stare decisis</span> (лат. «стоять на решённом») — доктрина, обязывающая суды следовать ранее вынесенным решениям при рассмотрении аналогичных дел. Это фундамент предсказуемости американского права.</p>
  <p class="l-text">Когда суд выносит решение, он не просто разрешает конкретный спор — он создаёт <span class="l-term">precedent</span> (прецедент), которому обязаны следовать нижестоящие суды той же юрисдикции. Именно поэтому американские адвокаты тратят огромное время на поиск и анализ прецедентов.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Иерархия прецедентов</div>
  <div class="concept-card">
    <div class="concept-card-title">Обязательный прецедент <span class="concept-card-en">Binding Precedent</span></div>
    <div class="concept-card-body">Решения вышестоящего суда <strong>той же юрисдикции</strong> обязательны для нижестоящих. Суд не может «не согласиться» с таким прецедентом — он обязан его применить, даже если считает его неправильным.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Убедительный прецедент <span class="concept-card-en">Persuasive Precedent</span></div>
    <div class="concept-card-body">Решения других юрисдикций (например, другого штата) или те же суд, но другая юрисдикция. Суд может принять во внимание, но не обязан следовать. Часто используется, когда нет собственного прецедента по вопросу.</div>
  </div>
  <div class="hbox gold">
    <div class="hbox-label">Иерархия в Калифорнии</div>
    <div class="hbox-text">
      <strong>US Supreme Court</strong> → обязателен для всей страны по федеральным вопросам<br>
      <strong>9th Circuit Court of Appeals</strong> → обязателен для федеральных судов Калифорнии<br>
      <strong>California Supreme Court</strong> → обязателен для всех судов штата<br>
      <strong>California Courts of Appeal</strong> → обязателен для Superior Courts своего округа
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Holding vs. Dicta — важнейшее различие</div>
  <table class="comp-table">
    <tr><th>Понятие</th><th class="ru">Что это</th><th>Прецедентная сила</th></tr>
    <tr><td>Holding</td><td class="ru">Правовая позиция суда, непосредственно решающая спор</td><td>Обязательная — это и есть прецедент</td></tr>
    <tr><td>Obiter Dicta</td><td class="ru">Рассуждения суда «по ходу», не влияющие на исход</td><td>Только убедительная, не обязательная</td></tr>
  </table>
  <div class="hbox blue">
    <div class="hbox-label">Пример</div>
    <div class="hbox-text">Суд рассматривает дело об ответственности водителя. <strong>Holding:</strong> «Водитель был negligent, потому что проехал на красный свет». <strong>Dicta:</strong> «Мы также считаем, что пешеходы должны всегда смотреть по сторонам». Второе — не прецедент.</div>
  </div>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">A state trial court is deciding a contract dispute. The state supreme court issued a ruling on the same legal issue ten years ago. Which of the following correctly states the trial court's obligation?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','A')"><span class="bar-option-letter">A</span> The trial court must follow the state supreme court's ruling under the doctrine of stare decisis</div>
      <div class="bar-option" onclick="selectOption(this,'B','A')"><span class="bar-option-letter">B</span> The trial court may follow the ruling if it finds it persuasive, but is not bound by it</div>
      <div class="bar-option" onclick="selectOption(this,'C','A')"><span class="bar-option-letter">C</span> The trial court must follow the ruling only if the facts are identical</div>
      <div class="bar-option" onclick="selectOption(this,'D','A')"><span class="bar-option-letter">D</span> The ruling has no precedential value after five years</div>
    </div>
    <div class="bar-answer" id="ans-0-1">
      <strong>Правильный ответ: A.</strong> Stare decisis обязывает нижестоящие суды следовать решениям вышестоящих судов той же юрисдикции. Суд штата обязан применить решение верховного суда штата. Факты не должны быть идентичными — достаточно, что правовой вопрос аналогичен. Прецеденты не имеют срока давности.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Vertical vs. Horizontal stare decisis</div>
  <p class="l-text">Твой урок разбирает vertical stare decisis (решения вышестоящих судов). Но есть второе измерение: связан ли суд своими собственными прежними решениями? Это <span class="l-term">horizontal stare decisis</span>, и здесь правила мягче.</p>
  <div class="concept-card">
    <div class="concept-card-title">US Supreme Court и его собственные прецеденты</div>
    <div class="concept-card-body">Может отменить свои прежние решения, но делает это с осторожностью. Факторы пересмотра из <strong>Planned Parenthood v. Casey (1992)</strong>: workability правила, reliance interests, changes in related law, changes in facts. Пример громкой отмены: <strong>Dobbs v. Jackson (2022)</strong> отменил Roe v. Wade (1973) и Casey по вопросу конституционного права на аборт.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California Supreme Court</div>
    <div class="concept-card-body">Также связан своими решениями через horizontal stare decisis, но может их пересматривать. Высшая инстанция штата по вопросам California law — выше никого нет.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Три техники работы с прецедентом</div>
  <table class="comp-table">
    <tr><th>Техника</th><th class="ru">Что делает суд</th><th>Кто может использовать</th></tr>
    <tr><td>Distinguishing</td><td class="ru">«Прецедент к нам не применяется, факты принципиально отличаются»</td><td>Любой суд, включая нижестоящий</td></tr>
    <tr><td>Narrowing</td><td class="ru">Ограничительное толкование holding прежнего решения</td><td>Любой суд</td></tr>
    <tr><td>Overruling</td><td class="ru">Прямая отмена прецедента</td><td>Только тот же суд или вышестоящий</td></tr>
  </table>
  <div class="hbox blue">
    <div class="hbox-label">Зачем это знать</div>
    <div class="hbox-text">Нижестоящий суд не может overrule прецедент вышестоящего, но может distinguish — показать, что факты настолько различны, что правило не применяется. Это основной приём калифорнийских судов, когда они хотят обойти неудобный прецедент, не нарушая иерархию.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">En banc review в апелляционных судах</div>
  <p class="l-text">Апелляционный суд (например, 9th Circuit) обычно рассматривает дело в составе <strong>panel из 3 судей</strong>. Их решение — прецедент для всего circuit. Другая panel формально связана им только через горизонтальный stare decisis.</p>
  <div class="hbox gold">
    <div class="hbox-label">Когда собирается en banc</div>
    <div class="hbox-text">Если решение panel требует пересмотра всем составом — назначается <span class="l-term">en banc review</span> (все активные судьи circuit). 9th Circuit — крупнейший в стране; из-за размера он использует «limited en banc» из 11 судей, а не из всех 29. Только en banc может отменить прежнее решение panel того же circuit.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Уникальная специфика California Courts of Appeal</div>
  <div class="hbox red">
    <div class="hbox-label">Auto Equity Sales v. Superior Court (1962)</div>
    <div class="hbox-text">Критическая калифорнийская особенность: <strong>решение одного District формально не связывает другой District</strong>. Superior Court обязан следовать <em>любому</em> Court of Appeal, пока решение по вопросу одно. Если разные Districts вынесли <strong>противоречивые решения</strong> — Superior Court сам выбирает, какое применить. Это уникально для Калифорнии среди крупных штатов. На Cal Bar это любимый подвох.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Independent State Grounds — механизм защиты от federal review</div>
  <div class="hbox purple">
    <div class="hbox-label">People v. Disbrow (1976)</div>
    <div class="hbox-text">Калифорнийский Supreme Court может толковать California Constitution <strong>более широко</strong>, чем US Supreme Court толкует federal Constitution. Если решение основано на «adequate and independent state grounds» — US Supreme Court <strong>не может его пересмотреть</strong>. Это важнейший механизм: Калифорния даёт больше прав, чем федеральный минимум, и федеральные суды бессильны это отменить.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: 9th Circuit и California courts</div>
    <div class="hbox-text">Обязателен ли 9th Circuit для California state courts? <strong>Нет.</strong> Классическая ловушка. Решения 9th Circuit обязательны только для federal courts в его округе. Для судов штата они только persuasive. California state courts в вопросах федерального права связаны только US Supreme Court.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: California Supreme Court и US Supreme Court</div>
    <div class="hbox-text">По federal constitutional questions California Supreme Court обязан следовать US Supreme Court. <strong>Но</strong> может дать более широкую защиту по California Constitution через independent state grounds.</div>
  </div>
</div>`
      },
      {
        title: 'Федерализм: два уровня права одновременно',
        content: `
<div class="l-section">
  <div class="l-section-label">Двойная система</div>
  <p class="l-text">США — федерация из 50 штатов. Каждый штат имеет собственную конституцию, законодательство, суды и даже отдельную правовую систему. Параллельно существует федеральное право. Для российского юриста это непривычно: в России единая правовая система, региональные различия минимальны.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Supremacy Clause — когда федеральное побеждает</div>
  <div class="hbox gold">
    <div class="hbox-label">Статья VI, пункт 2 Конституции</div>
    <div class="hbox-text">«Настоящая Конституция и законы Соединённых Штатов, принятые во исполнение её... являются высшим законом страны». Если закон штата противоречит федеральному — применяется федеральный. Это называется <strong>preemption</strong> (вытеснение).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Express Preemption <span class="concept-card-en">Явное вытеснение</span></div>
    <div class="concept-card-body">Конгресс прямо написал в законе, что штаты не могут регулировать эту область. Пример: федеральный закон об авиации прямо запрещает штатам устанавливать свои требования к безопасности полётов.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Implied Preemption <span class="concept-card-en">Подразумеваемое вытеснение</span></div>
    <div class="concept-card-body">Конгресс не написал прямо, но федеральная схема регулирования настолько полна, что штатам не осталось места. Или закон штата мешает достижению федеральных целей.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">На практике: что регулирует кто</div>
  <table class="comp-table">
    <tr><th>Область</th><th class="ru">Федеральное</th><th>Штатное</th></tr>
    <tr><td>Иммиграция</td><td class="ru">Полностью федеральное (INA)</td><td>Минимальное участие</td></tr>
    <tr><td>Банкротство</td><td class="ru">Полностью федеральное (Bankruptcy Code)</td><td>Отдельные нормы об освобождении имущества</td></tr>
    <tr><td>Contracts</td><td class="ru">В основном штатное</td><td>Основной регулятор</td></tr>
    <tr><td>Torts</td><td class="ru">В основном штатное</td><td>Основной регулятор</td></tr>
    <tr><td>Criminal Law</td><td class="ru">Федеральные преступления (FBI)</td><td>80%+ уголовных дел</td></tr>
    <tr><td>Family Law</td><td class="ru">Почти нет федерального регулирования</td><td>Полностью штатное</td></tr>
  </table>
</div>

<div class="hbox blue">
  <div class="hbox-label">Важно для Bar Exam</div>
  <div class="hbox-text">На California Bar Exam некоторые предметы тестируются по федеральным правилам, другие — по калифорнийским. Civil Procedure может быть как Federal Rules (FRCP), так и California Code of Civil Procedure. Всегда определяй, какое право применяется, прежде чем отвечать.</div>
</div><div class="l-section">
  <div class="l-section-label">Enumerated Powers Конгресса (Article I, Section 8)</div>
  <p class="l-text">Конгресс имеет только те полномочия, что ему <strong>явно переданы</strong>. Это фундаментальное отличие от штатов, которые обладают остаточной police power. Главные полномочия Конгресса:</p>
  <div class="concept-card">
    <div class="concept-card-title">Commerce Clause</div>
    <div class="concept-card-body">Регулирование торговли между штатами. Основа 90% федерального регулирования экономики. Расширено до «activities substantially affecting interstate commerce» через <em>Wickard v. Filburn (1942)</em>. Сужено обратно через <em>US v. Lopez (1995)</em> и <em>US v. Morrison (2000)</em>: чисто некоммерческая, non-economic деятельность (владение оружием у школ, gender-motivated violence) находится вне Commerce Clause.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Taxing and Spending Power</div>
    <div class="concept-card-body">Обложение налогами и расходы «для общего блага». Через этот механизм Конгресс обходит прямые ограничения: не может заставить штат принять закон, но может <strong>обусловить федеральное финансирование</strong>. Пределы установлены в <em>South Dakota v. Dole (1987)</em> и <em>NFIB v. Sebelius (2012)</em> на примере Medicaid expansion.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Necessary and Proper Clause</div>
    <div class="concept-card-body">«Принимать все законы, необходимые и правильные для осуществления» других полномочий. Маршалл в <em>McCulloch v. Maryland (1819)</em> дал широкое толкование. Не самостоятельное полномочие, а способ реализации других.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">10-я поправка и anti-commandeering</div>
  <div class="hbox gold">
    <div class="hbox-label">Что осталось штатам</div>
    <div class="hbox-text">«Полномочия, не делегированные Соединённым Штатам Конституцией и не запрещённые ею штатам, сохраняются за штатами или народом». Конгресс <strong>не может «скомандовать»</strong> штатам принять закон или заставить штатных чиновников исполнять федеральные программы.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Ключевые кейсы anti-commandeering</div>
    <div class="concept-card-body"><strong>New York v. United States (1992)</strong> — нельзя заставить штат принять закон о утилизации радиоактивных отходов. <strong>Printz v. United States (1997)</strong> — нельзя заставить шерифов штата проводить federal background checks. <strong>Murphy v. NCAA (2018)</strong> — нельзя заставить штат сохранять запрет на спортивные ставки.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Четыре категории preemption</div>
  <p class="l-text">Твой урок описывает две категории. На экзамене проверяются все четыре.</p>
  <table class="comp-table">
    <tr><th>Тип</th><th class="ru">Что это</th><th>Пример</th></tr>
    <tr><td>Express</td><td class="ru">Конгресс прямо написал, что штаты не могут регулировать</td><td>Federal Aviation Act</td></tr>
    <tr><td>Field</td><td class="ru">Конгресс настолько полно урегулировал область, что места штатам не осталось</td><td>Атомная энергетика, иммиграция</td></tr>
    <tr><td>Conflict (impossibility)</td><td class="ru">Физически невозможно соблюсти одновременно федеральный и штатный закон</td><td>Labeling requirements</td></tr>
    <tr><td>Obstacle</td><td class="ru">Штатный закон препятствует достижению целей федерального</td><td>Иммиграционные ограничения штатов</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">Dormant Commerce Clause</div>
  <div class="hbox blue">
    <div class="hbox-label">Обратная сторона Commerce Clause</div>
    <div class="hbox-text">Даже если Конгресс не действует, штаты не могут принимать законы, которые <strong>дискриминируют межштатную торговлю</strong> или <strong>чрезмерно её обременяют</strong>. Это implied limitation, выведенная судами из Commerce Clause. Классическая тема Con Law для Bar Exam. Pike balancing test для non-discriminatory regulations с local benefits и interstate burdens.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Full Faith and Credit Clause (Article IV, § 1)</div>
  <p class="l-text">Каждый штат обязан признавать публичные акты, записи и судебные решения других штатов. На Bar Exam всплывает в контексте: развод в другом штате, foreign judgments, enforcement of sister-state судебных решений, child custody (через UCCJEA).</p>
</div>
<div class="l-section">
  <div class="l-section-label">California как самый активный «независимый» штат</div>
  <div class="hbox gold">
    <div class="hbox-label">Больше защит, чем federal minimum</div>
    <div class="hbox-text">Cal. Const. Art. I содержит больше защит, чем federal Bill of Rights:<br>• <strong>§ 1</strong> — explicit right of privacy (federal нет такого текста)<br>• <strong>§ 2</strong> — free speech (шире, чем 1st Amendment в ряде контекстов)<br>• <strong>§ 13</strong> — search and seizure (иногда толкуется строже, чем 4th Amendment)<br>• School searches — Калифорния даёт больше защит несовершеннолетним</div>
  </div>
  <div class="hbox purple">
    <div class="hbox-label">Sanctuary laws и anti-commandeering в действии</div>
    <div class="hbox-text">Калифорния приняла SB 54 (California Values Act, 2017), ограничивающий сотрудничество местных властей с иммиграционными. <strong>United States v. California (9th Cir. 2019)</strong> в значительной части оставил закон в силе — живой пример anti-commandeering doctrine в действии.</div>
  </div>
</div>`
      },
      {
        title: 'Источники американского права: от Constitution до Restatements',
        content: `
<div class="l-section">
  <div class="l-section-label">Иерархия источников</div>
  <p class="l-text">В американском праве несколько видов источников, и они имеют чёткую иерархию. При конфликте вышестоящий источник всегда побеждает нижестоящего.</p>
  <div class="hbox gold">
    <div class="hbox-label">Иерархия от высшего к низшему</div>
    <div class="hbox-text">
      <strong>1. U.S. Constitution</strong> — высшая норма страны<br>
      <strong>2. Federal Statutes</strong> — законы Конгресса (U.S. Code)<br>
      <strong>3. Federal Regulations</strong> — нормы исполнительных агентств (CFR)<br>
      <strong>4. Federal Case Law</strong> — прецеденты федеральных судов<br>
      <strong>5. State Constitution</strong> — высшая норма штата<br>
      <strong>6. State Statutes</strong> — законы легислатуры штата<br>
      <strong>7. State Regulations</strong> — нормы агентств штата<br>
      <strong>8. State Case Law</strong> — прецеденты судов штата
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Restatements — уникальный американский инструмент</div>
  <p class="l-text">В российском праве аналога нет. <span class="l-term">Restatements</span> — это систематизированные своды common law, написанные <span class="l-en">American Law Institute</span> (ALI) — организацией учёных-юристов и судей. Они не являются законом, но суды активно на них ссылаются.</p>
  <div class="concept-card">
    <div class="concept-card-title">Restatement (Second) of Contracts</div>
    <div class="concept-card-body">Самый важный для Bar Exam. Систематизирует правила формирования, исполнения и нарушения договоров. Когда суд не может найти прецедент, он часто обращается к Restatement.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Restatement (Second) of Torts</div>
    <div class="concept-card-body">Охватывает negligence, strict liability, intentional torts. Особенно важна секция 402A — ответственность производителя за дефектный продукт.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Restatement (Third) of Property</div>
    <div class="concept-card-body">Покрывает вещное право, включая servitudes (сервитуты) и mortgages (ипотека).</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Equity — второй слой права</div>
  <p class="l-text">Исторически в Англии параллельно работали два суда: <span class="l-en">courts of law</span> (присуждали деньги) и <span class="l-en">courts of equity</span> (суды справедливости, выносили иные решения — запреты, принудительное исполнение). В США они слились, но концепции equity сохранились и живут в трастах, инджанкшнах и других институтах.</p>
  <div class="hbox purple">
    <div class="hbox-label">Legal vs. Equitable Remedies</div>
    <div class="hbox-text">
      <strong>Legal remedy</strong> — денежная компенсация (damages). Присуждается судьёй с присяжными.<br>
      <strong>Equitable remedy</strong> — injunction (запрет), specific performance (принудительное исполнение договора), rescission (расторжение). Присуждается только судьёй, без присяжных. Доступно только когда legal remedy «inadequate» — недостаточно.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Statutory Interpretation — отдельный уровень мастерства</div>
  <p class="l-text">Это то, что экзаменаторы любят прятать в эссе. Суд толкует статут — и от метода толкования зависит результат.</p>
  <div class="concept-card">
    <div class="concept-card-title">Plain Meaning Rule</div>
    <div class="concept-card-body">Начинай с обычного значения слов. Если текст ясен — анализ заканчивается. Legislative history не нужен.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Textualism (школа Scalia)</div>
    <div class="concept-card-body">Толкование строго по тексту. То, что законодатели «имели в виду» — не имеет значения. Значение имеет только то, что они написали.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Purposivism (школа Breyer)</div>
    <div class="concept-card-body">Толкование по цели закона. Суд выясняет, какую проблему Конгресс хотел решить, и выбирает толкование, наилучшим образом достигающее этой цели.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Canons of Construction</div>
    <div class="concept-card-body">Латинские презумпции толкования:<br>• <strong>Ejusdem generis</strong> — «того же рода». Если после списка стоит общий термин, он ограничен предметами того же класса.<br>• <strong>Expressio unius est exclusio alterius</strong> — упоминание одного исключает другое.<br>• <strong>Noscitur a sociis</strong> — слово узнаётся по компании, в которой стоит.<br>• <strong>Rule of lenity</strong> — неоднозначные уголовные статуты толкуются в пользу обвиняемого.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Administrative Agencies и нормотворчество</div>
  <p class="l-text">Огромный слой американского права — это regulations, принятые исполнительными агентствами (EPA, SEC, FDA, NLRB, IRS). Без понимания этого уровня нельзя понять современное право.</p>
  <div class="hbox red">
    <div class="hbox-label">Важнейшее изменение 2024 года: Loper Bright v. Raimondo</div>
    <div class="hbox-text">Верховный суд <strong>отменил Chevron deference</strong> — доктрину 40-летней давности, по которой суды уступали толкованию агентством неоднозначного статута. Теперь <strong>суды сами толкуют</strong> неоднозначные статуты, не отступая перед агентствами. Это свежее изменение, критичное для Bar 2026. Знать формулировку: «Chevron was overruled; courts now interpret statutes de novo».</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Skidmore respect (сохранился)</div>
    <div class="concept-card-body">Более слабая форма уважения к позиции агентства. Суд учитывает экспертизу агентства, но не обязан следовать. Это дефолт после отмены Chevron.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">APA (Administrative Procedure Act, 1946)</div>
    <div class="concept-card-body">Регулирует процедуру принятия rules и adjudication агентствами. Notice-and-comment rulemaking, formal vs informal, judicial review standards (arbitrary and capricious, substantial evidence).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Источники California-specific</div>
  <table class="comp-table">
    <tr><th>Источник</th><th class="ru">Что регулирует</th><th>Важность для Bar</th></tr>
    <tr><td>California Constitution (1879)</td><td class="ru">Высшая норма штата</td><td>★★★★★</td></tr>
    <tr><td>California Codes (29 кодексов)</td><td class="ru">Civil Code, CCP, Penal Code, Evidence Code, Probate Code, Family Code, B&P Code</td><td>★★★★★</td></tr>
    <tr><td>California Code of Regulations</td><td class="ru">Подзаконные акты агентств штата</td><td>★★☆☆☆</td></tr>
    <tr><td>California Rules of Court</td><td class="ru">Процессуальные правила</td><td>★★★☆☆</td></tr>
    <tr><td>California case law</td><td class="ru">Прецеденты Supreme Court и Courts of Appeal</td><td>★★★★★</td></tr>
  </table>
  <div class="hbox gold">
    <div class="hbox-label">California Evidence Code — уникальная кодификация</div>
    <div class="hbox-text">California Evidence Code (1965) — <strong>кодифицированные правила доказательств</strong>, в отличие от Federal Rules of Evidence. По структуре и содержанию во многом совпадает, но есть десятки отличий, которые проверяются на Cal Bar. Особая тема — privileges: psychotherapist-patient (CEC § 1010), marital (§ 970), clergy (§ 1030) — формулировки отличаются от FRE.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California как лидер в products liability: Greenman v. Yuba (1963)</div>
  <div class="hbox purple">
    <div class="hbox-label">Когда Калифорния обогнала Restatement</div>
    <div class="hbox-text">Restatements — важная persuasive authority. California часто им следует, но иногда обгоняет. Классический пример: <strong>Greenman v. Yuba Power Products (1963)</strong>. Калифорния <strong>первой в США</strong> ввела strict products liability — на два года раньше, чем ALI приняла Restatement (Second) of Torts § 402A в 1965. Это пример, когда California case law сама стала источником для остальной страны.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: «Court must follow the Restatement»</div>
    <div class="hbox-text">Restatements не являются law. Они persuasive authority. Ответ <strong>«a court must follow the Restatement» на Bar — всегда неправильный</strong>. Правильный ответ: «court may consider» или «courts often adopt».</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Uniform Laws ≠ автоматическое право</div>
    <div class="hbox-text">UCC, UPA, Uniform Probate Code — это <strong>model laws</strong>. Становятся правом штата только когда штат их принимает. Калифорния приняла UCC, но <strong>со своими модификациями</strong> (Cal. Com. Code — в основе UCC, но с отличиями).</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: MPC и California Penal Code</div>
    <div class="hbox-text">Не путать Model Penal Code (академический проект ALI) с California Penal Code. Калифорния <strong>не приняла MPC целиком</strong>. California Penal Code существует с 1872 года, и в нём живы многие common law-конструкции. Когда вопрос спрашивает «under the Model Penal Code» — применяй MPC правила, не California.</div>
  </div>
</div>`
      },
      {
        title: 'Структура судебной системы США',
        content: `
<div class="l-section">
  <div class="l-section-label">Двойная судебная система</div>
  <p class="l-text">В США существуют параллельно две судебные системы: федеральная и системы каждого из 50 штатов. Они рассматривают разные категории дел, хотя иногда пересекаются.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Федеральные суды</div>
  <div class="concept-card">
    <div class="concept-card-title">U.S. District Courts <span class="concept-card-en">Районные суды</span></div>
    <div class="concept-card-body">Суды первой инстанции федеральной системы. В Калифорнии их четыре: Northern, Central, Eastern, Southern. Рассматривают дела с «federal question» (федеральный вопрос) и дела между гражданами разных штатов с ценой иска свыше $75,000 (diversity jurisdiction).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">U.S. Courts of Appeals <span class="concept-card-en">Апелляционные суды</span></div>
    <div class="concept-card-body">13 окружных апелляционных судов. Калифорния входит в <strong>9th Circuit</strong>. Рассматривают апелляции на решения District Courts. Не переслушивают факты — только проверяют правильность применения права.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">U.S. Supreme Court <span class="concept-card-en">Верховный суд</span></div>
    <div class="concept-card-body">9 судей (Justices), назначаются президентом пожизненно. Высшая инстанция. Принимает к рассмотрению около 80 дел в год из ~8,000 заявок. Выбирает дела по <strong>certiorari</strong> (дискреционное право взять дело). Его решения — обязательный прецедент для всей страны.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Суды Калифорнии</div>
  <table class="comp-table">
    <tr><th>Суд</th><th class="ru">Функция</th><th>Аналог в РФ</th></tr>
    <tr><td>Superior Court</td><td class="ru">Первая инстанция штата (criminal, civil, family, probate)</td><td>Районный суд</td></tr>
    <tr><td>Courts of Appeal</td><td class="ru">Апелляция (6 округов)</td><td>Апелляционный суд субъекта</td></tr>
    <tr><td>California Supreme Court</td><td class="ru">Высшая инстанция штата (7 судей)</td><td>Верховный суд РФ (частично)</td></tr>
  </table>
</div>

<div class="hbox green">
  <div class="hbox-label">Важное различие: Trial vs. Appellate</div>
  <div class="hbox-text">
    <strong>Trial court</strong> (суд первой инстанции) — устанавливает факты, слышит свидетелей, присяжные выносят вердикт.<br>
    <strong>Appellate court</strong> (апелляционный суд) — только проверяет, правильно ли суд первой инстанции применил право. Факты не пересматривает. Изучает только письменные материалы и доводы сторон.
  </div>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">A plaintiff, a citizen of California, sues a defendant, a citizen of Nevada, for breach of contract seeking $100,000 in damages. Which court has jurisdiction over this case?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','C')"><span class="bar-option-letter">A</span> Only California state courts have jurisdiction</div>
      <div class="bar-option" onclick="selectOption(this,'B','C')"><span class="bar-option-letter">B</span> Only federal courts have jurisdiction because a citizen of another state is involved</div>
      <div class="bar-option" onclick="selectOption(this,'C','C')"><span class="bar-option-letter">C</span> Both federal and California state courts have jurisdiction</div>
      <div class="bar-option" onclick="selectOption(this,'D','C')"><span class="bar-option-letter">D</span> Neither court has jurisdiction because contract disputes are arbitrated</div>
    </div>
    <div class="bar-answer" id="ans-0-4">
      <strong>Правильный ответ: C.</strong> Федеральный суд имеет <em>diversity jurisdiction</em> (разная гражданская принадлежность сторон + сумма свыше $75,000) — оба условия выполнены. Но это не исключает юрисдикцию суда штата: истец может подать иск в любой из судов. Diversity jurisdiction — дополнительная, а не исключительная юрисдикция федеральных судов.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Специализированные федеральные суды</div>
  <p class="l-text">Твой урок покрывает District Courts, Circuit Courts и Supreme Court. Но федеральная система шире. На Bar Exam могут всплыть специализированные суды.</p>
  <table class="comp-table">
    <tr><th>Суд</th><th class="ru">Что рассматривает</th><th>Куда апелляция</th></tr>
    <tr><td>US Tax Court</td><td class="ru">Налоговые споры с IRS</td><td>Circuit Courts of Appeals</td></tr>
    <tr><td>US Court of Federal Claims</td><td class="ru">Денежные иски против правительства США</td><td>Federal Circuit</td></tr>
    <tr><td>US Court of International Trade</td><td class="ru">Международная торговля, тарифы</td><td>Federal Circuit</td></tr>
    <tr><td>US Bankruptcy Courts</td><td class="ru">Банкротства (unit of District Court)</td><td>District Court, далее Circuit</td></tr>
    <tr><td>Federal Circuit (CAFC)</td><td class="ru">Патенты, claims против правительства</td><td>US Supreme Court</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">Article III vs Article I Courts — ключевое различие</div>
  <div class="concept-card">
    <div class="concept-card-title">Article III Courts</div>
    <div class="concept-card-body">Созданы на основании статьи III Конституции. Судьи — <strong>пожизненный срок</strong>, защищены от снижения зарплаты. Гарантия судебной независимости. Включают District Courts, Circuit Courts, US Supreme Court, Court of International Trade.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Article I Courts (Legislative Courts)</div>
    <div class="concept-card-body">Созданы Конгрессом на основании статьи I. Судьи — <strong>срочные назначения</strong>, нет пожизненного срока. Tax Court, Bankruptcy Courts, Magistrate Judges, US Court of Federal Claims. Это важно для constitutional law вопросов на Bar (separation of powers): Article I courts не могут рассматривать определённые категории дел, которые должны идти в Article III суды.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">US Supreme Court: детали процедуры</div>
  <div class="concept-card">
    <div class="concept-card-title">Original Jurisdiction (Article III, § 2)</div>
    <div class="concept-card-body">Supreme Court может быть судом первой инстанции только в узких категориях: <strong>споры между штатами</strong>, <strong>иски против послов и дипломатов</strong>. Все остальные дела — только через certiorari после нижестоящих инстанций.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Rule of Four</div>
    <div class="concept-card-body">Для выдачи certiorari нужно согласие <strong>4 из 9 justices</strong>. Это ниже большинства — защита права меньшинства на рассмотрение дела. Supreme Court принимает ~80 дел в год из ~8 000 petitions for certiorari (около 1%).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Типы opinions</div>
    <div class="concept-card-body"><strong>Majority opinion</strong> — основное решение, 5+ голосов, это holding.<br><strong>Concurring opinion</strong> — согласие с результатом, но другая мотивировка.<br><strong>Dissenting opinion</strong> — несогласие. Не binding, но часто становится основой для будущего overruling.<br><strong>Plurality opinion</strong> — opinion, набравший больше голосов, чем любой другой, но меньше большинства. Спорная прецедентная сила — применяется <strong>Marks rule</strong>: holding — то, что принято на «narrowest grounds».<br><strong>Per curiam</strong> — анонимное решение «от суда», обычно короткое и единогласное.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California courts: детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Superior Courts — 58 округов</div>
    <div class="concept-card-body">Один Superior Court в каждом из 58 counties Калифорнии. Рассматривают всё: civil, criminal, family, probate, juvenile. Это unified trial court system (реформа 1998 года объединила прежние Municipal и Superior Courts).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Courts of Appeal — 6 Districts</div>
    <div class="concept-card-body"><strong>1st District</strong> (Сан-Франциско) · <strong>2nd</strong> (Лос-Анджелес, самый загруженный) · <strong>3rd</strong> (Сакраменто) · <strong>4th</strong> (Сан-Диего, также Riverside и Santa Ana) · <strong>5th</strong> (Fresno) · <strong>6th</strong> (San Jose). У большинства Districts есть Divisions.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California Supreme Court</div>
    <div class="concept-card-body"><strong>7 судей</strong>, возглавляет Chief Justice of California. Назначение: Governor → Commission on Judicial Appointments (CJA) → ratification voters. Срок — <strong>12 лет</strong>, затем retention election. Discretionary review ~4% заявок.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Jurisdictional Amount — важный трюк</div>
  <div class="hbox red">
    <div class="hbox-label">Читай формулировку буквально</div>
    <div class="hbox-text">$75 000 — это <strong>больше</strong> $75 000. Ровно $75 000 — <strong>недостаточно</strong>. Точная формулировка 28 USC § 1332: «exceeds the sum or value of $75,000, exclusive of interest and costs». На Bar regular trap: «$75,000» vs «$75,000.01». Последнее удовлетворяет, первое — нет.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Removal Jurisdiction — перенос дела из штата в федеральный суд</div>
  <div class="concept-card">
    <div class="concept-card-title">Как работает</div>
    <div class="concept-card-body">Ответчик (не истец!) может «перенести» дело из state court в federal court, если оно могло быть изначально подано в federal. Срок: <strong>30 дней</strong> после получения complaint. Подача notice of removal в federal District Court.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Home Team Rule (28 USC § 1441(b)(2))</div>
    <div class="concept-card-body"><strong>Diversity cases нельзя remove, если ответчик — резидент forum state.</strong> Логика: федеральные суды в diversity существуют, чтобы защитить приезжего ответчика от предвзятости местных судов. Если ответчик уже «свой» для штата — он не нуждается в такой защите. Классический Bar Exam trap.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Concurrent vs Exclusive Jurisdiction</div>
    <div class="hbox-text">Diversity jurisdiction — <strong>не исключительная</strong>. Истец может выбрать state или federal court. Federal question — в основном concurrent, кроме нескольких эксклюзивных областей: <strong>патенты</strong>, <strong>банкротство</strong>, <strong>федеральные уголовные дела</strong>, <strong>admiralty</strong>, <strong>antitrust</strong>.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Standard of Review на апелляции</div>
    <div class="hbox-text">Апелляционный суд применяет разные стандарты в зависимости от того, что пересматривает:<br>• <strong>De novo</strong> — вопросы права<br>• <strong>Clearly erroneous</strong> — fact findings судьи (bench trial)<br>• <strong>Substantial evidence</strong> — verdict присяжных<br>• <strong>Abuse of discretion</strong> — дискреционные решения (discovery, admissibility evidence)</div>
  </div>
</div>`
      },
      {
        title: 'Как читать судебное решение: метод Case Brief',
        content: `
<div class="l-section">
  <div class="l-section-label">Базовый навык</div>
  <p class="l-text">Американские юристы читают сотни судебных решений в год. Для эффективного чтения используется стандартная схема — <span class="l-term">case brief</span>. Это не пересказ, а структурированный анализ. Тот же метод (IRAC) используется на Bar Exam для написания эссе.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Структура Case Brief</div>
  <div class="concept-card">
    <div class="concept-card-title">1. Facts <span class="concept-card-en">Факты</span></div>
    <div class="concept-card-body">Кто, что, когда, где. Только юридически значимые факты — те, что влияют на исход дела. Без лишнего. Стороны называй по их процессуальной роли: Plaintiff/Defendant или Appellant/Appellee.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Issue <span class="concept-card-en">Правовой вопрос</span></div>
    <div class="concept-card-body">Один чёткий вопрос, который суд должен решить. Формула: «Whether [правовая норма/доктрина] applies when [ключевые факты]?». Например: «Whether a dog owner is strictly liable when the dog bites a trespasser?»</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Rule <span class="concept-card-en">Правовая норма</span></div>
    <div class="concept-card-body">Какую норму, доктрину или прецедент суд применяет для ответа на вопрос. Это может быть статут, конституционное положение или более ранний прецедент.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">4. Analysis / Application <span class="concept-card-en">Анализ</span></div>
    <div class="concept-card-body">Как суд применяет норму к конкретным фактам дела. Самая важная часть — здесь раскрывается правовое мышление суда. На Bar Exam оценщики читают именно эту часть.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">5. Holding / Conclusion <span class="concept-card-en">Решение</span></div>
    <div class="concept-card-body">Итоговый ответ суда на правовой вопрос. Это и есть прецедент. Формула: «[Party] is/is not [liable/guilty/entitled] because [brief reason]».</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Пример: Палсграф против Long Island Railroad (1928)</div>
  <div class="hbox gold">
    <div class="hbox-label">Facts</div>
    <div class="hbox-text">Носильщик железной дороги помог пассажиру вскочить в уходящий поезд. Тот уронил пакет с фейерверком. Взрыв уронил весы на дальнем конце платформы. Весы упали на миссис Палсграф — она получила травму.</div>
  </div>
  <div class="hbox blue">
    <div class="hbox-label">Issue</div>
    <div class="hbox-text">Была ли железная дорога negligent по отношению к Палсграф, если вред был непредсказуемым следствием действий работника?</div>
  </div>
  <div class="hbox purple">
    <div class="hbox-label">Holding (Cardozo J.)</div>
    <div class="hbox-text">Нет. Duty of care существует только по отношению к <strong>foreseeable plaintiffs</strong> — тем, кому предсказуемо может быть причинён вред. Палсграф находилась слишком далеко, вред ей был непредсказуем. Нет duty — нет negligence.</div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Структура опубликованного решения</div>
  <p class="l-text">Прежде чем брифовать, нужно уметь читать само решение. Американское opinion имеет стандартную структуру.</p>
  <div class="concept-card">
    <div class="concept-card-title">Caption</div>
    <div class="concept-card-body">Название дела, номер, суд, дата. Первая строка страницы. Palsgraf v. Long Island R.R. Co., 248 N.Y. 339 (1928).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Syllabus / Headnotes</div>
    <div class="concept-card-body">Краткое резюме в начале. Часто написано <strong>не судом</strong>, а редактором репортёра (West, LexisNexis). <strong>Не имеет юридической силы</strong>, только для ориентации. Не цитируй из syllabus.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Opinion of the Court</div>
    <div class="concept-card-body">Собственно решение. Автор — один из судей («Delivered the opinion of the court»). Это holding.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Concurring и Dissenting Opinions</div>
    <div class="concept-card-body">Дополнительные мнения отдельных судей. Не имеют прецедентной силы, но часто влиятельны. Dissent Andrews в Palsgraf живёт до сих пор.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Bluebook Citation — как цитируется решение</div>
  <div class="hbox gold">
    <div class="hbox-label">Формат</div>
    <div class="hbox-text"><strong>Palsgraf v. Long Island R.R. Co., 248 N.Y. 339, 162 N.E. 99 (1928).</strong><br><br>Читается: том <strong>248</strong> New York Reports, страница <strong>339</strong>, параллельная цитата в North Eastern Reporter. Скобки — год решения. На Bar эссе цитировать можно короче: просто «Palsgraf» после первого полного упоминания.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Ratio decidendi vs Holding — не путаться</div>
  <div class="hbox blue">
    <div class="hbox-label">Это синонимы</div>
    <div class="hbox-text">Британская терминология «<strong>ratio decidendi</strong>» = американская «<strong>holding</strong>». Если на Bar попадётся ratio decidendi — это не подвох, это то же самое, что holding. Противоположность — <em>obiter dicta</em>.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Procedural Posture — ключевой элемент анализа</div>
  <p class="l-text">Критичный элемент, который часто забывают в case brief. Procedural posture = процессуальное положение дела. Кто апеллировал? От какого решения? Что нижестоящий суд решил?</p>
  <div class="hbox red">
    <div class="hbox-label">Почему это важно</div>
    <div class="hbox-text">Procedural posture определяет <strong>стандарт пересмотра</strong>:<br>• <strong>De novo</strong> — новый разбор (legal questions, motion to dismiss)<br>• <strong>Clearly erroneous</strong> — fact findings судьи (bench trial)<br>• <strong>Abuse of discretion</strong> — дискреционные решения судьи (evidentiary rulings)<br>• <strong>Substantial evidence</strong> — verdict присяжных</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Palsgraf: дописываем Andrews Dissent</div>
  <p class="l-text">Majority Cardozo дал holding. Но dissent Andrews стал не менее влиятельным и живёт в большинстве штатов в теме proximate cause.</p>
  <div class="hbox purple">
    <div class="hbox-label">Cardozo (majority)</div>
    <div class="hbox-text">Duty существует только по отношению к <strong>foreseeable plaintiffs</strong>. Если истец вне «zone of danger» — нет duty, нет negligence. Foreseeability — элемент duty.</div>
  </div>
  <div class="hbox green">
    <div class="hbox-label">Andrews (dissent)</div>
    <div class="hbox-text">Duty существует к <strong>миру в целом</strong>, а не только к foreseeable plaintiffs. Вопрос foreseeability — это вопрос <strong>proximate cause</strong>, а не duty. Палсграф должна была выиграть, потому что causation есть.</div>
  </div>
  <div class="hbox gold">
    <div class="hbox-label">Почему это важно для Bar</div>
    <div class="hbox-text">На Bar Exam обе теории могут быть релевантны. <strong>California скорее следует Cardozo view</strong>, но в разных штатах по-разному. MBE/MEE часто проверяет именно различие: куда вы «поместите» foreseeability — в duty или в proximate cause.</div>
  </div>
</div>`
      },
      {
        title: 'IRAC: метод юридического письма на Bar Exam',
        content: `
<div class="l-section">
  <div class="l-section-label">Единственная структура на экзамене</div>
  <p class="l-text">На California Bar Exam нужно писать эссе — ответы на правовые вопросы. У оценщиков сотни работ. Они ищут конкретную структуру. Эта структура называется <span class="l-term">IRAC</span>. Отступать от неё — терять баллы.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Четыре элемента</div>
  <div class="irac-block">
    <div class="irac-cell">
      <div class="irac-letter">I</div>
      <div class="irac-word">Issue</div>
      <div class="irac-desc">Сформулируй правовой вопрос. Одно предложение. «The issue is whether...»</div>
    </div>
    <div class="irac-cell">
      <div class="irac-letter">R</div>
      <div class="irac-word">Rule</div>
      <div class="irac-desc">Изложи норму или тест. «Under [rule], a party must show...»</div>
    </div>
    <div class="irac-cell">
      <div class="irac-letter">A</div>
      <div class="irac-word">Application</div>
      <div class="irac-desc">Применяй норму к фактам. Это главная часть — здесь баллы.</div>
    </div>
    <div class="irac-cell">
      <div class="irac-letter">C</div>
      <div class="irac-word">Conclusion</div>
      <div class="irac-desc">Чёткий вывод. «Therefore, plaintiff will likely prevail...»</div>
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Живой пример IRAC</div>
  <div class="hbox gold">
    <div class="hbox-label">Фабула</div>
    <div class="hbox-text">Аня предложила продать Борису машину за $5,000. Борис ответил: «Беру, но за $4,500». Аня не согласилась. Борис затем написал: «Хорошо, $5,000». Аня отказала. Есть ли договор?</div>
  </div>
  <div class="hbox blue">
    <div class="hbox-label">Issue</div>
    <div class="hbox-text">Вопрос в том, был ли заключён действительный contract между Аней и Борисом.</div>
  </div>
  <div class="hbox purple">
    <div class="hbox-label">Rule</div>
    <div class="hbox-text">Для действительного contract необходимы: offer, acceptance и consideration. По mirror image rule акцепт должен быть безусловным и точно соответствовать условиям оферты. Ответ, изменяющий условия offer, является counteroffer, которая прекращает действие первоначальной offer.</div>
  </div>
  <div class="hbox green">
    <div class="hbox-label">Application</div>
    <div class="hbox-text">Аня сделала действительную offer на $5,000. Ответ Бориса — $4,500 — не был acceptance: он изменил существенное условие (цену) и тем самым являлся counteroffer, которая прекратила первоначальную offer Ани. Когда Борис позднее согласился на $5,000, он пытался акцептовать offer, которой уже не существовало.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Conclusion</div>
    <div class="hbox-text">Contract не был заключён. Counteroffer Бориса прекратила первоначальную offer Ани, а его последующая попытка принять первоначальные условия поступила слишком поздно.</div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Вариации IRAC</div>
  <p class="l-text">IRAC — базовый формат. Существуют его варианты, полезные в разных контекстах.</p>
  <div class="concept-card">
    <div class="concept-card-title">CRAC (Conclusion first)</div>
    <div class="concept-card-body">Conclusion, Rule, Analysis, Conclusion. Начинаешь с вывода. Подходит для bench memos, brief writing, appellate briefs. <strong>Не подходит для Bar Exam essays</strong> — оценщики ждут IRAC.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">CREAC</div>
    <div class="concept-card-body">Conclusion, Rule, Explanation, Application, Conclusion. Explanation = объяснение правила через прецеденты. Используется в legal writing courses юридических факультетов.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">IRAC для Bar Exam (канон)</div>
    <div class="concept-card-body">Остаётся стандартом. Оценщики ищут эту структуру явно. Отступать — терять баллы. На Cal Bar эссе — <strong>всегда IRAC</strong>.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Sub-IRAC — главная техника продвинутого Bar эссе</div>
  <p class="l-text">Если вопрос составной («Discuss all claims»), каждая подпроблема получает свой IRAC. Оценщики Cal Bar обожают видеть структурированные под-IRAC с подзаголовками.</p>
  <div class="hbox gold">
    <div class="hbox-label">Схема составного эссе</div>
    <div class="hbox-text"><strong>Overall Issue:</strong> Can P recover from D?<br><br>&nbsp;&nbsp;<strong>Sub-issue 1: Negligence</strong> — IRAC<br>&nbsp;&nbsp;<strong>Sub-issue 2: Battery</strong> — IRAC<br>&nbsp;&nbsp;<strong>Sub-issue 3: Defenses</strong> — IRAC<br><br><strong>Overall Conclusion:</strong> ...</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Cal Bar Scoring: как оценивают эссе</div>
  <table class="comp-table">
    <tr><th>Score</th><th class="ru">Оценка</th><th>Что значит</th></tr>
    <tr><td>40–55</td><td class="ru">Ниже проходного</td><td>Поверхностно, основные проблемы пропущены</td></tr>
    <tr><td>60</td><td class="ru">Borderline</td><td>Половинчато</td></tr>
    <tr><td>65</td><td class="ru">Passing</td><td>Проходной балл</td></tr>
    <tr><td>70</td><td class="ru">Clear pass</td><td>Сильный ответ</td></tr>
    <tr><td>75–85</td><td class="ru">Excellent</td><td>Превосходно</td></tr>
  </table>
  <div class="hbox blue">
    <div class="hbox-label">На что смотрят оценщики</div>
    <div class="hbox-text"><strong>Issue spotting</strong> — увидел ли все проблемы в фабуле<br><strong>Rule statement</strong> — знает ли правильные правила<br><strong>Application</strong> — применяет ли правила к <em>конкретным фактам</em> из фабулы<br><strong>Conclusion</strong> — даёт ли чёткий ответ</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Главная ошибка — голые Rules без Application</div>
  <div class="hbox red">
    <div class="hbox-label">Application — это где баллы</div>
    <div class="hbox-text">Плохо: «The defendant breached the duty of care.» (просто вывод)<br><br>Хорошо: «<strong>Because the defendant drove at 60 mph in a 30 mph zone, as stated in the facts</strong>, the defendant breached the duty of reasonable care. A reasonable person would not exceed the posted speed limit by double, particularly in a residential area where pedestrians are foreseeable.»<br><br>Правило одно, а баллы за <strong>использование конкретных фактов</strong>. Application = факт + объяснение, почему он удовлетворяет элемент правила.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California Hybrid Bar Exam (с июля 2025) — новый формат</div>
  <div class="hbox gold">
    <div class="hbox-label">Структура экзамена</div>
    <div class="hbox-text">С июля 2025 Cal Bar отказался от MBE (NCBE) и перешёл на собственный формат:<br><br>• <strong>2 дня</strong> вместо 2.5<br>• <strong>200 multiple choice</strong> (создано California Bar) — 50% веса<br>• <strong>5 эссе по 60 минут</strong> — 35% веса<br>• <strong>1 Performance Test (PT), 90 минут</strong> — 15% веса</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Performance Test — отдельный навык</div>
    <div class="concept-card-body">Тебе дают <strong>«file»</strong> (документы дела: письма, depositions, contracts) и <strong>«library»</strong> (выдержки из статутов и прецедентов). Задача — написать memo, brief, client letter или другой рабочий документ. IRAC там тоже работает, но встроенный в формат задания. Проверяет не знание права (оно дано в library), а навык применения.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">IRAC для Multiple Choice</div>
  <div class="hbox purple">
    <div class="hbox-label">Ментальный прогон</div>
    <div class="hbox-text">На multiple choice писать не нужно, но <strong>мысленно прогоняй IRAC</strong>:<br>1. Какой правовой вопрос?<br>2. Какое правило применяется?<br>3. Как применяется к этим фактам?<br>4. Какой ответ?<br><br>Это устраняет ловушки. Неправильные варианты (distractors) обычно устраивают только если пропустить один из шагов.</div>
  </div>
</div>`
      },
      {
        title: 'Legal English: язык американского права',
        content: `
<div class="l-section">
  <div class="l-section-label">Почему это отдельная дисциплина</div>
  <p class="l-text">Legal English — не просто английский с юридическими словами. Это особый регистр с собственной грамматикой, структурой аргумента и терминологией. Даже носители языка без юридического образования с трудом читают судебные решения.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Ключевые латинские термины</div>
  <table class="comp-table">
    <tr><th>Термин</th><th class="ru">Перевод</th><th>Значение</th></tr>
    <tr><td>Mens rea</td><td class="ru">«Виновный ум»</td><td>Субъективная сторона преступления — намерение, умысел</td></tr>
    <tr><td>Actus reus</td><td class="ru">«Виновное действие»</td><td>Объективная сторона — само преступное деяние</td></tr>
    <tr><td>Prima facie</td><td class="ru">«На первый взгляд»</td><td>Доказательства, достаточные для вывода при отсутствии опровержения</td></tr>
    <tr><td>Inter alia</td><td class="ru">«Среди прочего»</td><td>В числе других вещей/доводов</td></tr>
    <tr><td>In re</td><td class="ru">«В деле о»</td><td>Дело, не имеющее противоположной стороны (банкротство, опека)</td></tr>
    <tr><td>Pro se</td><td class="ru">«За себя»</td><td>Сторона, представляющая себя без адвоката</td></tr>
    <tr><td>Ab initio</td><td class="ru">«С самого начала»</td><td>Недействительность договора с момента заключения</td></tr>
  </table>
</div>

<div class="l-section">
  <div class="l-section-label">Shall vs. May — юридически критичное различие</div>
  <div class="hbox red">
    <div class="hbox-label">Не вежливость — это норма права</div>
    <div class="hbox-text">
      <strong>Shall</strong> — обязанность, требование. «The defendant shall appear...» = обязан явиться.<br>
      <strong>May</strong> — право, возможность. «The court may award damages...» = вправе, но не обязан.<br>
      <strong>Must</strong> — абсолютное требование. Всё чаще используется вместо shall в современных документах.
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Процессуальные роли сторон</div>
  <table class="comp-table">
    <tr><th>В суде первой инстанции</th><th class="ru">В апелляции</th><th>В уголовном деле</th></tr>
    <tr><td>Plaintiff — истец</td><td class="ru">Appellant — подавший апелляцию</td><td>Prosecutor / Government</td></tr>
    <tr><td>Defendant — ответчик</td><td class="ru">Appellee / Respondent</td><td>Defendant — обвиняемый</td></tr>
    <tr><td>Claimant — заявитель</td><td class="ru">Petitioner — подавший ходатайство</td><td>Victim — потерпевший</td></tr>
  </table>
</div><div class="l-section">
  <div class="l-section-label">Дополнительные критичные латинские термины</div>
  <table class="comp-table">
    <tr><th>Термин</th><th class="ru">Значение</th><th>Где встретится</th></tr>
    <tr><td>habeas corpus</td><td class="ru">«доставь тело» — приказ о доставке задержанного в суд</td><td>Criminal Procedure, Constitutional Law</td></tr>
    <tr><td>res judicata</td><td class="ru">claim preclusion — дело уже решено</td><td>Civil Procedure</td></tr>
    <tr><td>collateral estoppel</td><td class="ru">issue preclusion — факт установлен</td><td>Civil Procedure, Evidence</td></tr>
    <tr><td>de novo</td><td class="ru">«заново» — стандарт пересмотра без связанности</td><td>Appellate Procedure</td></tr>
    <tr><td>sua sponte</td><td class="ru">«по своей инициативе» — суд действует сам</td><td>Civil Procedure</td></tr>
    <tr><td>voir dire</td><td class="ru">допрос потенциальных присяжных</td><td>Criminal Procedure, Civil Procedure</td></tr>
    <tr><td>amicus curiae</td><td class="ru">«друг суда» — третье лицо, подающее brief</td><td>Appellate Procedure</td></tr>
    <tr><td>ex parte</td><td class="ru">процесс с одной стороной (TRO)</td><td>Remedies, Civil Procedure</td></tr>
    <tr><td>pro bono</td><td class="ru">бесплатно, в интересах общества</td><td>Professional Responsibility</td></tr>
    <tr><td>nunc pro tunc</td><td class="ru">решение с обратной силой</td><td>Civil Procedure</td></tr>
    <tr><td>subpoena duces tecum</td><td class="ru">повестка с требованием принести документы</td><td>Discovery</td></tr>
    <tr><td>in camera</td><td class="ru">закрытое рассмотрение у судьи</td><td>Evidence (privileges)</td></tr>
    <tr><td>de facto / de jure</td><td class="ru">фактически / юридически</td><td>Constitutional Law, Property</td></tr>
    <tr><td>quantum meruit</td><td class="ru">«сколько заслужил» — equitable restitution</td><td>Contracts, Remedies</td></tr>
    <tr><td>caveat emptor</td><td class="ru">«пусть покупатель остерегается» (в основном отменено)</td><td>Contracts, Real Property</td></tr>
    <tr><td>mandamus</td><td class="ru">приказ должностному лицу совершить обязательное действие</td><td>Administrative Law, Remedies</td></tr>
    <tr><td>certiorari</td><td class="ru">приказ о направлении дела на пересмотр</td><td>Appellate Procedure</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">Процессуальные глаголы — язык судебных действий</div>
  <table class="comp-table">
    <tr><th>Глагол</th><th class="ru">Значение</th></tr>
    <tr><td>to file</td><td class="ru">подать документ в суд</td></tr>
    <tr><td>to serve</td><td class="ru">вручить процессуальный документ стороне</td></tr>
    <tr><td>to plead</td><td class="ru">заявлять в процессуальном документе</td></tr>
    <tr><td>to move</td><td class="ru">ходатайствовать («to move for summary judgment»)</td></tr>
    <tr><td>to enjoin</td><td class="ru">запрещать (выносить injunction)</td></tr>
    <tr><td>to remand</td><td class="ru">направить обратно в нижестоящий суд</td></tr>
    <tr><td>to reverse</td><td class="ru">отменить решение нижестоящего суда</td></tr>
    <tr><td>to affirm</td><td class="ru">оставить решение в силе</td></tr>
    <tr><td>to vacate</td><td class="ru">аннулировать решение</td></tr>
    <tr><td>to stay</td><td class="ru">приостановить исполнение</td></tr>
    <tr><td>to quash</td><td class="ru">отменить (повестку, обвинение)</td></tr>
    <tr><td>to dismiss</td><td class="ru">прекратить дело</td></tr>
    <tr><td>to impeach</td><td class="ru">ставить под сомнение (свидетеля, показания)</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">Специфические формулировки Bar Exam</div>
  <div class="concept-card">
    <div class="concept-card-title">«Discuss.»</div>
    <div class="concept-card-body">В конце вопроса значит: <strong>применяй все релевантные доктрины</strong>, обсуди все защиты, структурируй по IRAC. Самая широкая инструкция.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">«What are the rights of X?»</div>
    <div class="concept-card-body">Сосредоточься на конкретном лице, <strong>не на всех сторонах</strong>. Другие стороны — только если их действия релевантны для прав X.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">«What result?»</div>
    <div class="concept-card-body">Требуется <strong>конкретный вывод</strong>. Кто выигрывает, какие remedies.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">«What are the defenses?»</div>
    <div class="concept-card-body">Фокус на <strong>защитах</strong>, а не на основаниях иска. Не трать время на элементы иска, если не требуется.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">«Will likely» vs «must» — вероятностный язык</div>
  <div class="hbox gold">
    <div class="hbox-label">Всегда пиши вероятностно</div>
    <div class="hbox-text"><strong>Хорошо:</strong> «The plaintiff will likely prevail on the negligence claim.»<br><strong>Плохо:</strong> «The plaintiff wins.»<br><br>Причина: американское право часто зависит от fact finder. Категоричные утверждения звучат непрофессионально. Используй: <em>will likely, should, probably, arguably, may</em>.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Register — регистр языка</div>
  <div class="concept-card">
    <div class="concept-card-title">Plain English movement</div>
    <div class="concept-card-body">Современное движение за упрощение юридического языка. <strong>California Rules of Court местами требуют plain English</strong>. SEC требует plain English в prospectuses.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Legalese</div>
    <div class="concept-card-body">Архаичные конструкции: <em>hereinafter, whereof, aforementioned, witnesseth, heretofore</em>. Ещё встречается в contracts, но всё меньше. На Bar пиши без них.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Bar Exam style</div>
    <div class="concept-card-body">Пиши ясно. Избегай legalese, где возможно. Оценщики измотаны — простой язык читается быстрее и получает больше баллов. Короткие предложения, явная структура, ясные переходы.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка: Plaintiff vs Petitioner</div>
    <div class="hbox-text"><strong>Plaintiff</strong> — истец в общегражданском деле.<br><strong>Petitioner</strong> — заявитель в специальных производствах (habeas, cert, probate, family). Не синонимы. В апелляции plaintiff становится appellant (если проиграл) или appellee (если выиграл).</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка: Motion vs Petition</div>
    <div class="hbox-text"><strong>Motion</strong> — ходатайство в рамках существующего дела. <strong>Petition</strong> — самостоятельный документ, инициирующий производство. Не взаимозаменяемы.</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'contracts',
    name: 'Contracts',
    icon: '📝',
    color: 'var(--blue)',
    desc: 'Договорное право — offer, acceptance, consideration и нарушение',
    lessons: [
      {
        title: 'Введение в Contracts: что такое договор по американскому праву',
        content: `
<div class="l-section">
  <div class="l-section-label">Определение и три элемента</div>
  <p class="l-text">Договор по американскому праву — это юридически обязывающее соглашение. Для его существования необходимы три элемента: <span class="l-term">offer</span> (оферта), <span class="l-term">acceptance</span> (акцепт) и <span class="l-term">consideration</span> (встречное предоставление). Без любого из трёх — нет договора, есть просто обещание.</p>
</div>
<div class="l-section">
  <div class="l-section-label">UCC vs. Common Law — первый вопрос всегда</div>
  <div class="hbox gold">
    <div class="hbox-label">Правило выбора применимого права</div>
    <div class="hbox-text">
      <strong>UCC Article 2</strong> применяется к продаже товаров (<em>goods</em>) — движимых вещей. Недвижимость, услуги, интеллектуальная собственность — не товары.<br>
      <strong>Common Law</strong> применяется ко всему остальному: услуги, аренда, недвижимость, трудовые договоры.<br>
      Смешанные договоры (товары + услуги): применяй право, регулирующее <strong>predominant purpose</strong> — главную цель.
    </div>
  </div>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">Maria contracts with a company to install a new heating system in her house for $8,000. The price includes $5,000 for equipment and $3,000 for labor. A dispute arises. Which body of law governs this contract?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','A')"><span class="bar-option-letter">A</span> UCC Article 2, because the goods (equipment) predominate in value</div>
      <div class="bar-option" onclick="selectOption(this,'B','A')"><span class="bar-option-letter">B</span> Common law, because the contract involves services</div>
      <div class="bar-option" onclick="selectOption(this,'C','A')"><span class="bar-option-letter">C</span> Both UCC and common law apply equally</div>
      <div class="bar-option" onclick="selectOption(this,'D','A')"><span class="bar-option-letter">D</span> Neither, because home improvement contracts are governed by special statutes</div>
    </div>
    <div class="bar-answer" id="ans-1-0">
      <strong>Правильный ответ: A.</strong> По тесту predominant purpose суд смотрит на главную цель договора. Здесь $5,000 из $8,000 — оборудование (goods). Цель договора — получить товар с установкой, а не просто нанять специалиста. Поэтому применяется UCC Article 2. Если бы цена труда преобладала — применялось бы common law.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Историческая основа договорного права</div>
  <p class="l-text">Современное американское договорное право выросло из трёх слоёв, каждый из которых оставил свой след в доктринах, которые тестируются на Bar Exam.</p>
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-year">XIII–XIV вв.</div>
      <div class="tl-text"><strong>Writ of covenant и writ of debt.</strong> Ранние формы исков о нарушении обязательств. Требовали письменной формы за печатью. Отсюда растёт современный Statute of Frauds.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">XVI в.</div>
      <div class="tl-text"><strong>Assumpsit (обещание).</strong> Новый иск, позволивший судить за нарушение устных обещаний. Фундамент современного общего договорного права.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1677</div>
      <div class="tl-text"><strong>Statute of Frauds.</strong> Английский парламент принял закон о требовании письменной формы для определённых договоров. Американские штаты (включая Калифорнию) приняли свои версии. До сих пор — краеугольный камень.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1932</div>
      <div class="tl-text"><strong>Restatement (First) of Contracts.</strong> Первая систематизация American Law Institute.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1952</div>
      <div class="tl-text"><strong>Uniform Commercial Code (UCC).</strong> Создан ALI и Uniform Law Commission. Цель — единообразие коммерческого права. Принят в том или ином виде всеми штатами. <strong>Калифорния приняла UCC в 1963 году</strong> (Cal. Com. Code).</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1981</div>
      <div class="tl-text"><strong>Restatement (Second) of Contracts.</strong> Обновлённая систематизация. Главный источник для Bar Exam по common law вопросам.</div>
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Классификация договоров — знать обязательно</div>
  <div class="concept-card">
    <div class="concept-card-title">Bilateral vs Unilateral</div>
    <div class="concept-card-body"><strong>Bilateral contract</strong> — обмен обещаниями («обещаю продать» vs «обещаю заплатить»). Большинство договоров. <strong>Unilateral contract</strong> — обещание в обмен на <em>действие</em>, а не на другое обещание. Классический пример: «кто найдёт мою собаку — получит $100». Акцепт — только через выполнение действия. На Bar Exam это важно для вопросов о моменте заключения договора и возможности отзыва.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Express vs Implied-in-fact vs Implied-in-law</div>
    <div class="concept-card-body"><strong>Express</strong> — условия выражены словами (устно или письменно). <strong>Implied-in-fact</strong> — договор, который стороны молчаливо заключили через поведение (пришёл к парикмахеру, сел, подстригся — должен заплатить). <strong>Implied-in-law (quasi-contract)</strong> — не договор вовсе; <strong>создан судом</strong> по справедливости, чтобы избежать unjust enrichment. Основа — <em>quantum meruit</em>.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Void vs Voidable vs Unenforceable</div>
    <div class="concept-card-body"><strong>Void</strong> — ничтожный с самого начала (договор об убийстве, под физическим принуждением). Не имеет силы ни для кого. <strong>Voidable</strong> — оспоримый одной из сторон (misrepresentation, mistake, несовершеннолетний). Одна сторона может подтвердить или расторгнуть. <strong>Unenforceable</strong> — действительный, но не подлежащий принудительному исполнению (нарушение Statute of Frauds, истечение statute of limitations).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Когда применять UCC vs Common Law — практический алгоритм</div>
  <div class="hbox gold">
    <div class="hbox-label">Шаг 1: определи предмет договора</div>
    <div class="hbox-text">Goods? → UCC Article 2.<br>Realty? → Common law.<br>Services? → Common law.<br>Intangibles (патенты, авторские права)? → Common law.<br>Employment? → Common law.</div>
  </div>
  <div class="hbox blue">
    <div class="hbox-label">Шаг 2: goods — это что такое</div>
    <div class="hbox-text">UCC § 2-105: movable things at the time of identification. <strong>Не goods:</strong> недвижимость, деньги как платёж, ценные бумаги, услуги, intellectual property.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Шаг 3: смешанные договоры — Predominant Purpose Test</div>
    <div class="hbox-text">Смотри на <strong>main thrust</strong> договора. Признаки: язык договора, сравнительная стоимость частей, бизнес продавца. Если товар — предоставляешь услугу по его установке → UCC. Если услуга — товар как побочный продукт → common law. <strong>Исключение:</strong> некоторые штаты применяют <em>gravamen test</em> — применяется UCC только к той части спора, которая касается товара.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Merchants — особая категория в UCC</div>
  <div class="concept-card">
    <div class="concept-card-title">Кто такой merchant (UCC § 2-104)</div>
    <div class="concept-card-body">Лицо, которое <strong>регулярно торгует товарами этого рода</strong> или держится как эксперт. Фермер, продающий яблоки на рынке — merchant. Профессор, продающий свою машину — не merchant по машинам. UCC применяет более строгие правила к merchants: firm offers, confirmation memos, implied warranty of merchantability, higher duty of good faith.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California-specifics в Contracts</div>
  <div class="hbox purple">
    <div class="hbox-label">Cal. Civ. Code и собственная терминология</div>
    <div class="hbox-text">Калифорния <strong>кодифицировала</strong> многое из общего договорного права в Cal. Civ. Code §§ 1549–1701. Это необычно для common law штата. Формулировки близки к Restatement, но отличия есть:<br>• Cal. Civ. Code § 1550 — перечисляет четыре элемента: capable parties, consent, lawful object, sufficient cause or consideration<br>• Cal. Civ. Code § 1605 — определение consideration<br>• Cal. Civ. Code § 1624 — California Statute of Frauds (отличается от общего)<br><br>Cal. Com. Code — калифорнийская версия UCC, в основе стандартная, но с модификациями.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: «quasi-contract» не контракт</div>
    <div class="hbox-text">Quasi-contract (implied-in-law) — это <strong>не договор</strong>. Это equitable remedy, созданное судом для предотвращения unjust enrichment. Не требует offer, acceptance, consideration. Не можно «нарушить» quasi-contract — можно только искать restitution.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: CISG — не забывай о международном</div>
    <div class="hbox-text">Convention on International Sale of Goods (CISG) применяется по умолчанию к международным договорам купли-продажи товаров между коммерсантами из стран-участниц. США — участник. Стороны могут <em>opt out</em>. Если фабула описывает международную сделку между компанией из Калифорнии и Японии — думай о CISG, не UCC.</div>
  </div>
</div>`
      },
      {
        title: 'Offer: что такое оферта и когда она действительна',
        content: `
<div class="l-section">
  <div class="l-section-label">Определение оферты</div>
  <p class="l-text"><span class="l-term">Offer</span> — это предложение, которое при принятии создаёт договор. Чтобы предложение было офертой, а не просто «разговором», оно должно соответствовать трём критериям.</p>
  <div class="concept-card">
    <div class="concept-card-title">1. Intent <span class="concept-card-en">Серьёзное намерение</span></div>
    <div class="concept-card-body">Оферент должен демонстрировать намерение заключить договор — оцениваемое объективно, а не субъективно. «Я продам тебе машину за $5,000» — оферта. «Я мог бы продать машину примерно за $5,000» — нет.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Definite Terms <span class="concept-card-en">Определённые условия</span></div>
    <div class="concept-card-body">По common law: должны быть определены parties (стороны), subject matter (предмет), price (цена), quantity (количество). По UCC: требования мягче — достаточно определить стороны и количество, цену суд может установить рыночную.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Communication <span class="concept-card-en">Сообщение адресату</span></div>
    <div class="concept-card-body">Оферта должна быть доведена до акцептанта. Нельзя принять оферту, о которой ты не знал.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Что НЕ является офертой</div>
  <table class="comp-table">
    <tr><th>Ситуация</th><th class="ru">Почему не оферта</th></tr>
    <tr><td>Реклама (advertisements)</td><td class="ru">Обычно лишь invitation to make an offer — приглашение делать оферты. Исключение: реклама с конкретным количеством и «first come, first served».</td></tr>
    <tr><td>Прайс-листы</td><td class="ru">Invitation to negotiate — предложение к переговорам, не договор.</td></tr>
    <tr><td>«Я мог бы продать...»</td><td class="ru">Нет серьёзного намерения (intent) — только предварительный разговор.</td></tr>
  </table>
</div><div class="l-section">
  <div class="l-section-label">Прекращение оферты — семь способов</div>
  <p class="l-text">Оферта не висит бесконечно. Есть семь способов её прекращения. Это база для половины вопросов по формированию договора.</p>
  <div class="concept-card">
    <div class="concept-card-title">1. Revocation (отзыв оферентом)</div>
    <div class="concept-card-body">Оферент может отозвать оферту в любой момент <strong>до акцепта</strong>. Отзыв вступает в силу при <strong>получении</strong> акцептантом. <strong>Indirect revocation</strong> — акцептант узнаёт о несовместимых действиях оферента от надёжного источника (продал машину другому). Этого достаточно для прекращения оферты.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Rejection (отклонение акцептантом)</div>
    <div class="concept-card-body">Акцептант прямо отклоняет оферту → оферта прекращается. Нельзя потом «передумать».</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Counteroffer</div>
    <div class="concept-card-body">По common law mirror image rule: любое изменение условий = counteroffer = автоматическое прекращение исходной оферты. <strong>Важное различие:</strong> <em>inquiry</em> («Would you consider $4,500?») не прекращает оферту — это только вопрос.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">4. Lapse of time</div>
    <div class="concept-card-body">Оферта истекает либо в указанный срок, либо через разумное время. Что «разумно» — зависит от предмета: оферта на покупку волатильных акций живёт минуты, оферта на покупку дома — недели.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">5. Death or incapacity of offeror</div>
    <div class="concept-card-body">Смерть или недееспособность оферента <strong>автоматически</strong> прекращает оферту — даже если акцептант не знал. <strong>Исключение:</strong> option contracts переживают смерть.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">6. Destruction of subject matter</div>
    <div class="concept-card-body">Если предмет оферты уничтожен без вины сторон — оферта прекращается.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">7. Supervening illegality</div>
    <div class="concept-card-body">Если после оферты изменился закон и предмет стал незаконным — оферта прекращается.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Irrevocable Offers — четыре способа сделать оферту неотзывной</div>
  <div class="concept-card">
    <div class="concept-card-title">Option Contract</div>
    <div class="concept-card-body">Акцептант платит consideration за право держать оферту открытой на согласованный срок. Оферент <strong>не может</strong> отозвать до истечения срока, даже если передумает. Consideration может быть символической ($1).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Firm Offer (UCC § 2-205)</div>
    <div class="concept-card-body">Три условия: <strong>(1) merchant</strong>, (2) <strong>письменная оферта на продажу товаров</strong>, (3) <strong>заверение об удержании открытой</strong>. Тогда неотзывна <strong>без consideration</strong> на указанный срок или <strong>разумное время, но не более 3 месяцев</strong>. Только merchants. Только goods. Важнейшее отличие от common law.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Detrimental Reliance (Promissory Estoppel)</div>
    <div class="concept-card-body">Если акцептант разумно и предвидимо положился на оферту и понёс ущерб — оферта может стать неотзывной. Классический пример: субподрядчик подаёт bid генподрядчику, генподрядчик использует его в своём bid владельцу. Если субподрядчик отзовёт bid, он будет estopped. Drennan v. Star Paving (1958, Cal.) — знаковое калифорнийское дело.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Unilateral Contract — начало исполнения</div>
    <div class="concept-card-body">В unilateral contract акцепт происходит через исполнение. Когда акцептант <strong>начал</strong> исполнение (а не только готовится), оферент теряет право отзыва. Restatement (Second) § 45. Акцептант не обязан заканчивать, но оферта защищена.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Advertisements и предложения неопределённому кругу</div>
  <div class="hbox blue">
    <div class="hbox-label">Lefkowitz v. Great Minneapolis Surplus Store (1957)</div>
    <div class="hbox-text">Классический кейс. Обычно реклама — лишь invitation to negotiate. <strong>Но</strong> если реклама настолько <strong>определённа</strong>, что не остаётся ничего для переговоров, — это оферта. Формулировка «1 fur coat, worth $139.50, for $1, first come first served» удовлетворяла: определены количество, цена, способ акцепта. Магазин не мог отказать первому пришедшему.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">UCC Gap-Filler Terms — что суд может восполнить</div>
  <p class="l-text">По common law оферта должна быть определённой по всем существенным условиям. UCC мягче — даже если не всё согласовано, суд может восполнить:</p>
  <table class="comp-table">
    <tr><th>Условие</th><th class="ru">Gap-filler</th></tr>
    <tr><td>Price (§ 2-305)</td><td class="ru">Reasonable price at time of delivery</td></tr>
    <tr><td>Place of delivery (§ 2-308)</td><td class="ru">Seller's place of business</td></tr>
    <tr><td>Time of delivery (§ 2-309)</td><td class="ru">Reasonable time</td></tr>
    <tr><td>Time of payment (§ 2-310)</td><td class="ru">At time and place of delivery</td></tr>
  </table>
  <div class="hbox red">
    <div class="hbox-label">Единственное условие, которое нельзя восполнить</div>
    <div class="hbox-text"><strong>Quantity.</strong> Без количества нет договора по UCC. Исключения: requirements contracts («всё, что нужно покупателю») и output contracts («всё, что произведёт продавец»). Они действительны — количество определяется через good faith.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Auctions</div>
    <div class="hbox-text"><strong>With reserve</strong> (по умолчанию): аукционист приглашает оферты, bids — это оферты, аукционист акцептует ударом молотка, может отозвать до удара. <strong>Without reserve</strong>: приглашение сделать bids — это уже оферта; высший bid автоматически акцептует, аукционист не может отозвать.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: «Subject to» formulations</div>
    <div class="hbox-text">«I offer $100,000 subject to financing» — это оферта или нет? По большинству подходов — да, оферта с условием. Но если «subject to my approval» — обычно не оферта, а только invitation.</div>
  </div>
</div>`
      },
      {
        title: 'Consideration: встречное предоставление',
        content: `
<div class="l-section">
  <div class="l-section-label">Концепция без аналога в российском праве</div>
  <p class="l-text"><span class="l-term">Consideration</span> — ключевое условие действительности американского договора. Каждая сторона должна что-то дать и что-то получить. Обещание сделать что-то даром юридической силы не имеет — это лишь gift promise (подарочное обещание).</p>
  <div class="hbox gold">
    <div class="hbox-label">Формула consideration</div>
    <div class="hbox-text">Это <strong>bargained-for exchange</strong> — то, что стороны осознанно обменивают. Consideration может быть: действие (act), воздержание от действия (forbearance), обещание сделать / не делать что-то (promise).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Важные правила</div>
  <div class="concept-card">
    <div class="concept-card-title">Adequacy не проверяется <span class="concept-card-en">Суд не оценивает размер</span></div>
    <div class="concept-card-body">Суд не смотрит, справедлива ли цена. $1 за $1,000,000-ный дом — действительное consideration, если стороны так договорились. Исключение: явная несправедливость может указывать на unconscionability или fraud, но это отдельный вопрос.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Pre-existing duty rule <span class="concept-card-en">Правило уже существующей обязанности</span></div>
    <div class="concept-card-body">Обещание сделать то, что ты уже обязан делать — не consideration. Пример: полицейский не может потребовать плату за исполнение своих служебных обязанностей. Модификация договора по UCC: не требует нового consideration (только добросовестность).</div>
  </div>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">Pavel promises to give his nephew $10,000 as a graduation gift. The nephew relies on this promise and turns down a job offer. Pavel later refuses to pay. Is Pavel's promise enforceable?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','C')"><span class="bar-option-letter">A</span> Yes, because the nephew's reliance makes the promise binding</div>
      <div class="bar-option" onclick="selectOption(this,'B','C')"><span class="bar-option-letter">B</span> Yes, because family promises are always enforceable</div>
      <div class="bar-option" onclick="selectOption(this,'C','C')"><span class="bar-option-letter">C</span> No under traditional contract law, but possibly yes under promissory estoppel</div>
      <div class="bar-option" onclick="selectOption(this,'D','C')"><span class="bar-option-letter">D</span> No, because oral promises are never enforceable</div>
    </div>
    <div class="bar-answer" id="ans-1-2">
      <strong>Правильный ответ: C.</strong> Обещание подарка не имеет consideration — племянник ничего не дал Павлу взамен, это gift promise. По традиционному contract law — не исполнимо. Однако доктрина <em>promissory estoppel</em> может прийти на помощь: если племянник разумно положился на обещание, Павел предвидел такое поведение, и несправедливость очевидна — суд может обязать Павла заплатить. Это exception to the consideration requirement.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Исторические корни и современное значение</div>
  <p class="l-text">Consideration появилось в английском common law в XVI веке как способ ограничить круг исполнимых обещаний. Без consideration — только «naked promise» без юридической силы. В современном праве доктрина смягчается, но остаётся базой.</p>
  <div class="hbox gold">
    <div class="hbox-label">Тест на consideration (Restatement § 71)</div>
    <div class="hbox-text"><strong>Bargained-for exchange.</strong> Два элемента:<br>1. <strong>Legal detriment</strong> — промиссор получает что-то, чего не был вправе требовать, или промиссии отказывается от того, что имел право делать.<br>2. <strong>Bargain</strong> — detriment был <em>индуцирован</em> обещанием и наоборот. Это ключевое: без «quid pro quo» — нет consideration.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Что НЕ является consideration</div>
  <div class="concept-card">
    <div class="concept-card-title">Past consideration</div>
    <div class="concept-card-body">Что-то, уже сделанное до обещания, не может быть consideration для этого обещания. «Ты спас мою жизнь вчера — я обещаю тебе $10 000» — не исполнимо. Исключение: moral obligation в узких случаях (промиссор ранее имел долг, который погашен по формальному основанию — банкротство, истечение срока давности).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Gift promises</div>
    <div class="concept-card-body">Обещание подарка — не договор. Даже если дарополучатель ожидает и планирует. Единственный путь — promissory estoppel, если есть разумная reliance.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Illusory promises</div>
    <div class="concept-card-body">Обещание, которое не обязывает. «Я куплю у тебя товары, если захочу» — нет обязательства, нет consideration. Суды часто спасают такие договоры через <strong>implied good faith</strong> или через конструкцию requirements/output.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Pre-existing legal duty</div>
    <div class="concept-card-body">Обещание сделать то, что уже обязан по закону или договору — не consideration. Полицейский не может получить награду за выполнение служебных обязанностей. Подрядчик не может потребовать больше за ту же работу (modification without consideration по common law).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Pre-existing Duty Rule и UCC</div>
  <div class="hbox red">
    <div class="hbox-label">Common Law vs UCC — важнейшее различие</div>
    <div class="hbox-text"><strong>Common law (services, real estate):</strong> модификация договора <strong>требует нового consideration</strong>. Подрядчик не может потребовать больше за ту же работу.<br><br><strong>UCC § 2-209 (goods):</strong> модификация <strong>НЕ требует нового consideration</strong>. Достаточно <strong>good faith</strong>. Это одно из самых тестируемых различий на Bar Exam.<br><br><strong>Модификация пошлинного правила (minority rule):</strong> по Restatement (Second) § 89, модификация common law договора может быть исполнима <strong>без нового consideration</strong>, если: (1) изменение обстоятельств не предвидено, (2) модификация справедлива и разумна. Калифорния этой позиции тяготеет.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Accord and Satisfaction</div>
  <div class="concept-card">
    <div class="concept-card-title">Как урегулировать спорный долг</div>
    <div class="concept-card-body"><strong>Accord</strong> — новое соглашение о замене исполнения. <strong>Satisfaction</strong> — фактическое исполнение по accord. Классический пример: должник шлёт чек «на $600 в полное удовлетворение долга в $1 000», кредитор обналичивает. Если долг был <strong>disputed</strong> (спорный) — accord and satisfaction исполнена, полный долг списан. Если долг был <strong>undisputed</strong> (бесспорный) — нет consideration, кредитор может требовать остаток.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Promissory Estoppel — главная замена consideration</div>
  <div class="hbox purple">
    <div class="hbox-label">Restatement (Second) § 90 — четыре элемента</div>
    <div class="hbox-text">1. <strong>Promise</strong> — обещание, рассчитанное побудить к действию или воздержанию<br>2. <strong>Foreseeability</strong> — промиссор предвидел reliance<br>3. <strong>Actual reliance</strong> — промиссии действительно положился и изменил своё положение<br>4. <strong>Injustice</strong> — возможна только через исполнение обещания<br><br>Remedy может быть ограничен <strong>reliance damages</strong>, а не expectation damages. Суд избегает давать полную выгоду, если этого требует справедливость.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California-specific: Drennan v. Star Paving (1958)</div>
    <div class="concept-card-body">Знаковое дело Traynor J. Субподрядчик подал bid генподрядчику, тот использовал его в своём bid. Субподрядчик попытался отозвать — суд применил promissory estoppel. California — лидер в применении PE к предконтрактным обещаниям в строительных тендерах. Общий принцип распространился на всю страну.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Mutuality of Obligation</div>
  <div class="hbox blue">
    <div class="hbox-label">«Both sides must be bound, or neither is»</div>
    <div class="hbox-text">Старая доктрина: если только одна сторона связана — нет договора. Современная тенденция — требовать только consideration, не формальной mutuality. Requirements и output contracts долгое время считались illusory, но теперь <strong>признаны действительными</strong>: UCC § 2-306 требует <em>good faith</em> при определении количества.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: «Adequate consideration»</div>
    <div class="hbox-text">Суд <strong>не проверяет размер</strong> consideration. $1 за Rolls-Royce — валидное consideration. Но: суд смотрит на <strong>sham consideration</strong> — если стороны написали «$1 paid», но ничего не было уплачено, многие суды отказывают в признании. Также явная непропорциональность — сигнал для unconscionability analysis.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: «Peppercorn theory»</div>
    <div class="hbox-text">Даже peppercorn (горошина перца) — валидное consideration, если действительно обменена. Но если стороны использовали peppercorn как маскировку подарка — суды не защищают.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Forbearance as consideration</div>
    <div class="hbox-text">Воздержание от предъявления иска — валидное consideration, если иск был <strong>добросовестно считался имеющим основание</strong> (good faith belief в valid claim), даже если в итоге иск не имел шансов. Это важно для settlement agreements.</div>
  </div>
</div>`
      },
      {
        title: 'Acceptance: акцепт и зеркальное правило',
        content: `
<div class="l-section">
  <div class="l-section-label">Что такое акцепт</div>
  <p class="l-text"><span class="l-term">Acceptance</span> — это согласие акцептанта на условия оферты, создающее договор. Акцепт должен быть безоговорочным и соответствовать условиям оферты.</p>
  <div class="concept-card">
    <div class="concept-card-title">Mirror Image Rule <span class="concept-card-en">Зеркальное правило</span></div>
    <div class="concept-card-body">По common law акцепт должен точно зеркалить условия оферты. Любое изменение — даже мелкое — превращает «акцепт» в контроферту, что автоматически отклоняет исходную оферту. UCC смягчает это правило для коммерческих сделок — дополнительные условия в акцепте могут стать частью договора при определённых условиях.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Mailbox Rule — когда считается акцепт полученным</div>
  <div class="hbox blue">
    <div class="hbox-label">Общее правило (common law)</div>
    <div class="hbox-text">Акцепт <strong>вступает в силу в момент отправки</strong>, а не получения (при использовании разумного средства связи). Отзыв оферты вступает в силу в момент <strong>получения</strong>. Поэтому: если оферент отзывает оферту, но акцептант уже отправил акцепт до получения отзыва — договор заключён.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Исключения</div>
    <div class="hbox-text">Mailbox rule не применяется: когда оферент прямо указал, что акцепт действует с момента получения; опционные договоры; электронные коммуникации (как правило).</div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">UCC § 2-207 — Battle of the Forms</div>
  <p class="l-text">Самое сложное и самое тестируемое правило в UCC. Реальные коммерческие сделки происходят через обмен формами: покупатель посылает purchase order, продавец — acknowledgment. Формы почти никогда не идентичны. Common law сказал бы «counteroffer, mirror image». UCC решил иначе.</p>
  <div class="hbox gold">
    <div class="hbox-label">UCC § 2-207(1) — акцепт, даже если условия отличаются</div>
    <div class="hbox-text">«A definite and seasonable expression of acceptance... operates as an acceptance even though it states terms additional to or different from those offered». Исключение: если акцепт <strong>expressly conditional</strong> на согласие с новыми условиями — тогда это counteroffer.</div>
  </div>
  <div class="hbox blue">
    <div class="hbox-label">UCC § 2-207(2) — судьба дополнительных условий</div>
    <div class="hbox-text"><strong>Между non-merchants:</strong> новые условия — лишь предложения, не становятся частью договора без отдельного акцепта.<br><br><strong>Между merchants:</strong> новые условия <strong>становятся частью договора</strong>, если:<br>(a) оферта не ограничивала акцепт её условиями, <strong>и</strong><br>(b) новые условия не <em>materially alter</em> договор, <strong>и</strong><br>(c) оферент не возражает в разумный срок.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">UCC § 2-207(3) — conduct establishing contract</div>
    <div class="hbox-text">Если стороны повели себя так, что признали договор (отправили / получили / оплатили товар) — договор существует. Условия: те, что <strong>совпадают</strong> в двух формах + UCC gap-fillers. Различия — «knocked out» (взаимно уничтожены).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Silence as Acceptance</div>
  <p class="l-text">По общему правилу молчание — не акцепт. Но есть исключения:</p>
  <div class="concept-card">
    <div class="concept-card-title">Prior dealings</div>
    <div class="concept-card-body">Если стороны ранее установили практику, что молчание означает акцепт.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Offeree retained benefit</div>
    <div class="concept-card-body">Акцептант воспользовался услугами/товарами, имея возможность отказаться.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Offer invited silence</div>
    <div class="concept-card-body">Оферент прямо сказал: «если не ответишь к пятнице — считаю акцептом», и акцептант молчал, <strong>имея намерение принять</strong>. Только если был такой интент.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Mailbox Rule — детали и исключения</div>
  <div class="hbox blue">
    <div class="hbox-label">Общее правило (Adams v. Lindsell, 1818)</div>
    <div class="hbox-text">Акцепт вступает в силу в момент <strong>отправки</strong>, если использовано разумное средство связи. Это защищает акцептанта, который иначе никогда не мог бы быть уверен, что договор заключён.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Rejection, then Acceptance — не применяется mailbox rule</div>
    <div class="concept-card-body">Если акцептант сначала отправил rejection, затем acceptance — тот из двух, кто пришёл первым, регулирует. Если оферент получил rejection первым и изменил позицию (продал другому) — нет договора, даже если acceptance был отправлен раньше (доктрина estoppel).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Acceptance, then Rejection</div>
    <div class="concept-card-body">Акцептант отправил acceptance, потом rejection. По mailbox rule договор заключён в момент отправки acceptance. Последующий rejection не расторгает, <strong>но</strong>: если оферент получил rejection и detrimentally изменил позицию — acceptant estopped enforcing.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Исключения из Mailbox Rule</div>
    <div class="concept-card-body">Не применяется когда: (1) оферта прямо требует acceptance upon receipt; (2) option contracts — acceptance effective at receipt; (3) электронные коммуникации обычно treat as received when received; (4) если acceptance lost in mail — разные суды, но большинство: договор всё равно заключён в момент отправки.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Mode and Manner of Acceptance</div>
  <div class="hbox gold">
    <div class="hbox-label">UCC § 2-206 и Restatement § 30</div>
    <div class="hbox-text">По общему правилу акцептант может принять <strong>любым разумным способом</strong>, если оферта не ограничивает. Оферта на покупку товаров (goods) может быть акцептована либо обещанием поставить, либо <strong>prompt shipment</strong>. <strong>Accommodation shipment</strong> (продавец отправляет non-conforming goods с уведомлением, что это accommodation) — не акцепт, а counteroffer. Без уведомления — акцепт и одновременное нарушение.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California-specific: Click-Wrap и Browse-Wrap</div>
  <div class="hbox purple">
    <div class="hbox-label">Nguyen v. Barnes & Noble (9th Cir., 2014)</div>
    <div class="hbox-text">Калифорния лидирует в интернет-контрактном праве. <strong>Click-wrap</strong> (пользователь явно кликает «I agree») — действительный акцепт. <strong>Browse-wrap</strong> (условия где-то в футере, пользователь «согласился» просто используя сайт) — обычно <strong>не акцепт</strong>, если нет conspicuous notice. Это важно для любого бизнеса, действующего через интернет в Калифорнии.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Unilateral vs Bilateral — как акцептуется</div>
    <div class="hbox-text">Unilateral contract — акцепт через <strong>исполнение</strong>. Промиссии не обязан сообщать, что начал. Но после начала исполнения должен уведомить, если промиссор не может легко узнать. Bilateral — акцепт через обещание.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: «Grumbling acceptance»</div>
    <div class="hbox-text">«OK, I accept, but I really think $5,000 is too much» — это акцепт. Недовольство не делает акцепт counterofferом, если условия не меняются. Но «I accept if you agree to...» — уже conditional, counteroffer.</div>
  </div>
</div>`
      },
      {
        title: 'Breach и Remedies: нарушение договора и средства защиты',
        content: `
<div class="l-section">
  <div class="l-section-label">Виды нарушения договора</div>
  <div class="concept-card">
    <div class="concept-card-title">Material Breach <span class="concept-card-en">Существенное нарушение</span></div>
    <div class="concept-card-body">Нарушение, лишающее другую сторону того, на что она рассчитывала при заключении договора. Последствие: пострадавшая сторона освобождается от своих обязательств и может взыскать damages.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Minor Breach <span class="concept-card-en">Незначительное нарушение</span></div>
    <div class="concept-card-body">Нарушение, не лишающее сторону сути договора. Пострадавшая сторона обязана продолжать исполнять договор, но может взыскать компенсацию за конкретный ущерб от нарушения.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Anticipatory Repudiation <span class="concept-card-en">Предвидимое нарушение</span></div>
    <div class="concept-card-body">Сторона заранее (до срока исполнения) заявляет, что не будет исполнять договор. Пострадавшая сторона может немедленно предъявить иск, не дожидаясь срока исполнения.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Damages — денежные средства защиты</div>
  <table class="comp-table">
    <tr><th>Вид</th><th class="ru">Что возмещается</th><th>Цель</th></tr>
    <tr><td>Expectation damages</td><td class="ru">Что получила бы сторона при исполнении договора</td><td>Поставить в положение «как если бы договор исполнен»</td></tr>
    <tr><td>Reliance damages</td><td class="ru">Расходы, понесённые в расчёте на договор</td><td>Вернуть в положение «до договора»</td></tr>
    <tr><td>Consequential damages</td><td class="ru">Убытки, ставшие следствием нарушения</td><td>Только если были foreseeable (предсказуемы)</td></tr>
    <tr><td>Liquidated damages</td><td class="ru">Заранее согласованная сумма</td><td>Действительна если разумна, не штраф</td></tr>
  </table>
</div><div class="l-section">
  <div class="l-section-label">UCC Perfect Tender Rule — уникальное правило для товаров</div>
  <div class="hbox gold">
    <div class="hbox-label">UCC § 2-601: goods tolerance</div>
    <div class="hbox-text">По common law нужно <strong>material breach</strong> для отказа от договора. По UCC для одноразовых поставок — <strong>perfect tender rule</strong>: если товар или поставка хоть в чём-то не соответствуют — покупатель может полностью отказаться. Это огромное отличие. Но есть ограничения.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Seller's Right to Cure (UCC § 2-508)</div>
    <div class="concept-card-body">Если срок поставки ещё не наступил — продавец может исправить несоответствие. Если срок прошёл — продавец имеет право исправить, только если разумно полагал, что товар будет приемлем.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Installment Contracts (UCC § 2-612)</div>
    <div class="concept-card-body">Для контрактов с поэтапной поставкой perfect tender НЕ применяется. Покупатель может отказаться от <strong>конкретной</strong> партии только если non-conformity <em>substantially impairs</em> её ценность. От <strong>всего</strong> договора — только если non-conformity substantially impairs весь договор.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Material Breach — тест из Restatement § 241</div>
  <p class="l-text">Пять факторов для определения материальности нарушения:</p>
  <div class="hbox blue">
    <div class="hbox-label">Критерии</div>
    <div class="hbox-text">1. <strong>Extent of benefit deprivation</strong> — насколько пострадавшая сторона лишена ожидаемой выгоды.<br>2. <strong>Adequacy of compensation</strong> — может ли компенсация покрыть ущерб.<br>3. <strong>Forfeiture by breaching party</strong> — риск лишения нарушителя значительного вложенного.<br>4. <strong>Likelihood of cure</strong> — вероятность исправления.<br>5. <strong>Good faith</strong> — действовал ли нарушитель добросовестно.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Substantial Performance</div>
  <div class="concept-card">
    <div class="concept-card-title">Jacob &amp; Youngs v. Kent (1921, Cardozo)</div>
    <div class="concept-card-body">Строитель дома использовал трубы другой марки, но идентичного качества. Суд: это minor breach, substantial performance имела место. Владелец должен заплатить за исключением разницы в стоимости (diminution in value, не стоимости замены). Это классика. На Bar: substantial performance = не material breach = неисполняющая сторона обязана продолжать, но может получить damages за конкретный дефект.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Damages — детальная классификация</div>
  <div class="concept-card">
    <div class="concept-card-title">Expectation Damages — базовая формула</div>
    <div class="concept-card-body"><strong>Loss in value + other losses − costs avoided − loss avoided</strong><br><br>Для продавца товаров (когда покупатель breaches): price − market price at time of tender (если удерживает товар), или price − resale price (если продал).<br>Для покупателя: market price − contract price (cover), или market price at time of breach − contract price.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Consequential Damages — Hadley v. Baxendale (1854)</div>
    <div class="concept-card-body">Возмещаются только <strong>foreseeable</strong> убытки. Тест — две категории: (1) arising naturally from breach, (2) специальные, если известны сторонам на момент заключения. Упущенная прибыль мельника из-за задержки поставки детали — не возмещалась, потому что доставщик не знал, что вся мельница стоит из-за этой детали.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Incidental Damages</div>
    <div class="concept-card-body">Расходы пострадавшей стороны в связи с нарушением: хранение отвергнутых товаров, поиск замещающего продавца, транспортировка. Почти всегда возмещаются.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Reliance Damages</div>
    <div class="concept-card-body">Альтернатива expectation, если expectation невозможно рассчитать (speculative profits). Возмещаются расходы, понесённые в расчёте на договор. Цель — восстановить положение до заключения договора.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Restitution</div>
    <div class="concept-card-body">Возвращение того, что нарушитель получил по договору. Применяется при расторжении (rescission), а также доступна stranger party (non-breaching) как альтернатива damages.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Duty to Mitigate — обязанность уменьшить убытки</div>
  <div class="hbox red">
    <div class="hbox-label">Не формально «обязанность», а ограничение</div>
    <div class="hbox-text">Пострадавшая сторона не может взыскать убытки, <strong>которые разумно могла избежать</strong>. Это не duty в техническом смысле — никто не может заставить её mitigate. Но если не mitigated — damages уменьшаются на сумму, которую можно было избежать. <strong>Разумные</strong> усилия — стандарт. Для работника: искать сравнимую работу в той же географии. Parker v. Twentieth Century-Fox (1970, Cal.) — Ширли Маклейн не обязана была принимать «Big Country, Big Man» вместо «Bloomer Girl».</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Equitable Remedies</div>
  <div class="concept-card">
    <div class="concept-card-title">Specific Performance</div>
    <div class="concept-card-body">Суд приказывает нарушителю исполнить договор. Доступно только когда <strong>legal remedy (damages) inadequate</strong>. Обычно присуждается для:<br>• <strong>Real estate</strong> — каждый участок уникален, SP by default<br>• <strong>Unique goods</strong> — антиквариат, предметы искусства<br>• <strong>Output/requirements contracts</strong> в UCC<br><strong>Не доступно</strong>: personal service contracts (13th Amendment, нельзя принуждать к работе). Вместо этого — injunction against working for competitor.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Injunction</div>
    <div class="concept-card-body">Приказ не делать что-то. Классический пример: employee non-compete. Lumley v. Wagner (1852) — певица обязалась петь в одном театре, подписала с другим; суд не мог заставить петь, но запретил петь в другом месте.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Reformation</div>
    <div class="concept-card-body">Исправление документа, если он не отражает истинного соглашения сторон (mutual mistake в written terms, scrivener's error).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Rescission</div>
    <div class="concept-card-body">Расторжение договора и возврат сторон в исходное положение. Доступно при misrepresentation, mistake, duress, undue influence.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Anticipatory Repudiation — детали</div>
  <div class="hbox purple">
    <div class="hbox-label">Hochster v. De La Tour (1853) и современное правило</div>
    <div class="hbox-text">Если одна сторона <strong>прямо и недвусмысленно</strong> заявляет, что не будет исполнять — пострадавшая сторона имеет четыре опции:<br>1. Сразу предъявить иск<br>2. Ждать performance date и тогда предъявить иск<br>3. Расторгнуть договор<br>4. Заставить repudiating party <strong>retract</strong> через уведомление<br><br><strong>Retraction</strong> возможна, если пострадавшая сторона ещё не положилась на repudiation и не уведомила о расторжении.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Prospective Inability (UCC § 2-609)</div>
    <div class="concept-card-body">Если одна сторона имеет обоснованные сомнения в способности другой исполнить — может потребовать <strong>adequate assurance of performance</strong> в письменной форме. Если assurance не получена в разумный срок (не более 30 дней по UCC) — это рассматривается как repudiation.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Liquidated Damages — когда действительны</div>
  <div class="hbox gold">
    <div class="hbox-label">Два условия действительности</div>
    <div class="hbox-text">1. На момент заключения договора <strong>фактические убытки было бы трудно оценить</strong>.<br>2. Согласованная сумма была <strong>разумной оценкой ожидаемого вреда</strong>.<br><br>Если сумма чрезмерна относительно ожидаемого вреда — это <strong>penalty</strong>, неисполнимо. Современная тенденция: смотреть и на expected, и на actual damages (ranging of reasonableness).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California-specific: Cal. Civ. Code § 1671</div>
    <div class="concept-card-body">Калифорния переворачивает презумпцию: LD clauses <strong>presumed valid</strong> в негражданских (commercial) договорах. Оспаривающая сторона должна доказать, что они unreasonable. В потребительских и жилищных договорах — обратная презумпция, более строгий подход.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Punitive damages в contracts</div>
    <div class="hbox-text"><strong>Не доступны</strong> за чистое нарушение контракта. Исключение: если нарушение также является tort (fraud, tortious interference). Это частая ловушка: истец пытается получить punitives через contract claim — не работает.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Mental distress damages</div>
    <div class="hbox-text">Как правило, не присуждаются за contract breach. Исключения: (1) контракты, где mental distress является natural consequence (контракт на похороны, доставка telegram о смерти), (2) если нарушение также torts (IIED).</div>
  </div>
</div>`
      },
      {
        title: 'Statute of Frauds: какие договоры нужно оформлять письменно',
        content: `
<div class="l-section">
  <div class="l-section-label">Что такое Statute of Frauds</div>
  <p class="l-text"><span class="l-term">Statute of Frauds</span> — требование письменной формы для определённых категорий договоров. Устный договор из этих категорий — не обязательно недействителен, но его невозможно принудительно исполнить без письменного подтверждения.</p>
  <div class="hbox gold">
    <div class="hbox-label">Мнемоника MY LEGS</div>
    <div class="hbox-text">
      <strong>M</strong>arriage — договоры в связи со вступлением в брак<br>
      <strong>Y</strong>ear — договоры, которые невозможно исполнить за год<br>
      <strong>L</strong>and — сделки с недвижимостью<br>
      <strong>E</strong>xecutor — обещание исполнителя завещания отвечать лично<br>
      <strong>G</strong>oods — продажа товаров на $500+ (UCC) или $1,000+ (новые версии)<br>
      <strong>S</strong>urety — поручительство (обещание отвечать за чужой долг)
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Исключения: когда устный договор всё же исполнимо</div>
  <div class="concept-card">
    <div class="concept-card-title">Part Performance <span class="concept-card-en">Частичное исполнение</span></div>
    <div class="concept-card-body">Для договоров на недвижимость: если покупатель уже въехал, провёл улучшения и платит — суд может обязать исполнить устный договор, даже без письменной формы.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Promissory Estoppel</div>
    <div class="concept-card-body">Если сторона разумно положилась на обещание, суд может отказаться применять Statute of Frauds во избежание несправедливости.</div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Происхождение и логика</div>
  <p class="l-text">Statute of Frauds — английский закон 1677 года «An Act for the Prevention of Frauds and Perjuries». Цель была предотвратить ложные иски о несуществующих устных договорах. В XVII веке стороны не могли давать показания в своём деле — легко было подделать показания свидетелей об устных обещаниях. Закон переживёт все эти процессуальные причины и будет жив до сих пор.</p>
</div>
<div class="l-section">
  <div class="l-section-label">California Statute of Frauds — Cal. Civ. Code § 1624</div>
  <div class="hbox gold">
    <div class="hbox-label">Калифорнийская версия — проверка обязательна</div>
    <div class="hbox-text">Cal. Civ. Code § 1624(a) требует письменной формы для:<br>(1) Контракты, не исполнимые в течение года<br>(2) Особые обещания отвечать за долг другого (suretyship)<br>(3) Соглашения в связи с браком (кроме mutual promises to marry)<br>(4) Leases на более 1 года<br>(5) Контракты о продаже недвижимости или на долю в недвижимости<br>(6) Некоторые агентские договоры — покупка/продажа недвижимости<br>(7) Контракты на услуги, не исполнимые в течение одной жизни (!)<br>(8) Контракты на loans свыше $100,000 для бизнеса, кроме loan от финансового учреждения<br><br><strong>В California нет обязательной письменной формы для договоров под $500</strong> — это UCC § 2-201 применяется независимо к продаже товаров.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Детали каждой категории MY LEGS</div>
  <div class="concept-card">
    <div class="concept-card-title">M — Marriage</div>
    <div class="concept-card-body">Контракты, заключаемые в обмен на обещание вступить в брак. <strong>Классический пример:</strong> prenuptial agreements, обещание подарка после брака. <strong>Не попадают:</strong> сами mutual promises to marry (обещание пожениться друг другу) — это не Statute of Frauds.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Y — One Year Clause — самая тестируемая</div>
    <div class="concept-card-body">Контракт, который <strong>не может быть исполнен в течение года</strong> с момента заключения. Тест: <em>impossibility of performance within a year</em>. Если есть хоть малейшая возможность исполнения в год — не попадает под SOF. Двухлетний employment contract — попадает. Employment «for life» — НЕ попадает (может закончиться смертью до года). «Employment until X dies» — НЕ попадает по той же логике.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">L — Land (contracts involving real estate)</div>
    <div class="concept-card-body">Продажа, ипотека, сервитуты, leases свыше 1 года. <strong>Не попадают:</strong> short-term leases (до года), license (не interest in land), contract to build on land (это services).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">E — Executor</div>
    <div class="concept-card-body">Обещание исполнителя завещания <strong>личной ответственностью</strong> за долги наследства. Если просто обещает заплатить из наследства — не SOF. Если обязуется своими деньгами — SOF.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">G — Goods $500+ (UCC § 2-201)</div>
    <div class="concept-card-body">Продажа товаров на <strong>$500 и более</strong> (в некоторых новых версиях UCC — $5,000, но большинство штатов сохранили $500, включая California). Письменная форма требуется от <strong>party to be charged</strong> (стороны, против которой предъявляют иск).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">S — Suretyship</div>
    <div class="concept-card-body">Обещание ответить за долг <strong>другого</strong>. Ключ — обещание должно быть <em>collateral</em> (в дополнение к основному долгу), а не <em>primary</em>. <strong>Main purpose rule:</strong> если обещание дано ради собственной экономической выгоды обещающего — НЕ требует письменной формы.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Что должно содержать «writing» под SOF</div>
  <div class="hbox blue">
    <div class="hbox-label">Minimum requirements</div>
    <div class="hbox-text">• Identity of parties<br>• Subject matter<br>• Material terms (quantity для UCC)<br>• <strong>Signature of party to be charged</strong> (подпись стороны, против которой предъявлен иск)<br><br>«Writing» может быть: email, text message, несколько соединённых документов, даже заметка на салфетке. «Signature» — любой знак, идентифицирующий подписавшего (инициалы, typed name в email). Electronic signatures — действительны (E-SIGN Act 2000, UETA).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">UCC § 2-201 — специальные правила для goods</div>
  <div class="concept-card">
    <div class="concept-card-title">Merchant's Confirmation Memo — § 2-201(2)</div>
    <div class="concept-card-body">Между merchants: если одна сторона шлёт <strong>письменное подтверждение</strong> устного соглашения, и другая merchant-сторона не возражает в <strong>10 дней</strong> — SOF удовлетворён <strong>даже против непринявшей стороны</strong>. Это уникальное исключение, отсутствующее в common law.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Specially Manufactured Goods — § 2-201(3)(a)</div>
    <div class="concept-card-body">Если товары изготовлены специально для покупателя и не могут быть перепроданы в ходе обычного бизнеса продавца, <strong>продавец начал их производство</strong> — SOF не применяется.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Admission in Court — § 2-201(3)(b)</div>
    <div class="concept-card-body">Если сторона в judicial proceedings (pleading, testimony) <strong>признаёт</strong> наличие договора — SOF неприменим. Признание заменяет письменную форму.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Part Performance — § 2-201(3)(c)</div>
    <div class="concept-card-body">Если товар <strong>уплачен и принят</strong> или <strong>получен и принят</strong> — договор исполним в той мере, в какой исполнен. Это узко: только to the extent performed.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Исключения для real estate — Part Performance Doctrine</div>
  <div class="hbox purple">
    <div class="hbox-label">Equitable exception для land sales</div>
    <div class="hbox-text">Устный контракт о продаже земли может быть исполнен в equity, если покупатель совершил комбинацию:<br>• <strong>Paid purchase price</strong> (частично или полностью)<br>• <strong>Took possession</strong> of the property<br>• <strong>Made substantial improvements</strong><br><br>Обычно требуются <strong>2 из 3</strong> действий. California применяет эту доктрину, но консервативно.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Promissory Estoppel как bypass</div>
  <div class="concept-card">
    <div class="concept-card-title">Когда суд игнорирует SOF</div>
    <div class="concept-card-body">Если non-enforcement устного договора создаст <strong>injustice</strong>, и сторона разумно положилась — суд может применить promissory estoppel и исполнить устный договор вопреки SOF. Monarco v. Lo Greco (1950, Cal.) — лидирующий California case в применении PE для обхода SOF. Но применяется с осторожностью.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Possibility of performance within a year</div>
    <div class="hbox-text">Тест — <strong>possibility</strong>, не вероятность. «Employment for 5 years» — SOF. «Employment for life» — НЕ SOF, потому что может закончиться смертью до года. «Employment for 2 years unless terminated earlier» — <strong>всё равно</strong> SOF по большинству juristictions, потому что by its terms требует 2 года полного исполнения.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Full performance</div>
    <div class="hbox-text">Если ОДНА сторона <strong>полностью</strong> исполнила — SOF не препятствует взысканию с другой. Если обе исполнили — SOF уже не важен. SOF защищает только от <strong>исполнения</strong> договора, не от взыскания реально отданного.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Modification</div>
    <div class="hbox-text">Модификация договора, который попадает под SOF, тоже должна быть в письменной форме, если модифицированный договор попадает под SOF. Например: письменный $400 goods contract модифицируется устно до $600 — модификация неисполнима. Но: устная модификация $600 → $400 goods contract — исполнима.</div>
  </div>
</div>`
      },
      {
        title: 'Defenses to Contract: когда договор можно оспорить',
        content: `
<div class="l-section">
  <div class="l-section-label">Основания недействительности</div>
  <div class="concept-card">
    <div class="concept-card-title">Misrepresentation <span class="concept-card-en">Введение в заблуждение</span></div>
    <div class="concept-card-body">Одна сторона сделала ложное заявление о существенном факте, вторая на него разумно положилась. Если умышленное — fraudulent misrepresentation, дающее право на расторжение и tort damages. Если неосторожное — только расторжение.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Duress <span class="concept-card-en">Принуждение</span></div>
    <div class="concept-card-body">Договор заключён под угрозой неправомерными действиями. Физическое принуждение делает договор void (ничтожным). Экономическое принуждение (economic duress) — voidable (оспоримым).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Unconscionability <span class="concept-card-en">Крайняя несправедливость</span></div>
    <div class="concept-card-body">Договор настолько несправедлив, что суд отказывается его исполнять. Два элемента: <strong>procedural</strong> (неравенство в переговорах, мелкий шрифт) + <strong>substantive</strong> (явно несправедливые условия). Нужны оба.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Mutual Mistake <span class="concept-card-en">Взаимное заблуждение</span></div>
    <div class="concept-card-body">Обе стороны заблуждались в существенном факте на момент заключения. Делает договор voidable. Если заблуждалась только одна сторона (unilateral mistake) — как правило, договор действителен, если только другая сторона не знала о заблуждении.</div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Capacity Defenses — кто не может заключать договор</div>
  <div class="concept-card">
    <div class="concept-card-title">Minors (Infants) — лица до 18</div>
    <div class="concept-card-body">Несовершеннолетний может <strong>disaffirm</strong> (отказаться от) большинства договоров до 18 лет или в разумный срок после. Договор не void, а <strong>voidable</strong> на выбор несовершеннолетнего. Исключения: <strong>necessaries</strong> (еда, одежда, медицинская помощь) — несовершеннолетний обязан заплатить reasonable value. California: Family Code § 6710 — до 18 disaffirmable, contracts for necessaries обязательны.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Mental Incapacity</div>
    <div class="concept-card-body">Два теста: (1) <strong>Cognitive test</strong> — неспособность понять природу и последствия сделки; (2) <strong>Volitional test</strong> (принят меньшинством штатов, включая California) — даже при понимании неспособность контролировать поведение из-за ментального состояния, и другая сторона знала об этом. Voidable, не void.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Intoxication</div>
    <div class="concept-card-body">Опьянение делает договор voidable, только если: (1) другая сторона знала об опьянении, (2) опьянение лишило способности понимать сделку. Добровольное опьянение без знания другой стороны обычно не спасает.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Misrepresentation — детально</div>
  <div class="concept-card">
    <div class="concept-card-title">Fraudulent Misrepresentation — элементы</div>
    <div class="concept-card-body">1. <strong>Material misrepresentation</strong> (существенное искажение) of fact<br>2. <strong>Scienter</strong> — знание о ложности или reckless disregard<br>3. <strong>Intent to induce reliance</strong><br>4. <strong>Justifiable reliance</strong> другой стороны<br>5. <strong>Damages</strong> — понесённый ущерб<br><br>Права пострадавшего: <strong>rescission</strong> (расторжение) + <strong>tort damages</strong> (включая punitive). Можно выбрать одно.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Negligent Misrepresentation</div>
    <div class="concept-card-body">Те же элементы, кроме scienter — достаточно negligence в проверке правдивости. California — один из самых строгих штатов по negligent misrepresentation (Bily v. Arthur Young, 1992). Remedy: только rescission, обычно не damages.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Innocent Misrepresentation</div>
    <div class="concept-card-body">Без знания и без negligence. Только equitable rescission, если ошибка material.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Concealment и Non-Disclosure</div>
    <div class="concept-card-body"><strong>Active concealment</strong> (активное сокрытие) — всегда actionable, как misrepresentation. <strong>Silence</strong> — обычно не actionable, кроме случаев:<br>• Fiduciary relationship<br>• Partial disclosure создаёт ложное впечатление<br>• Latent material defect, о котором продавец знает (особенно в real estate)<br>• Особый статутный дисклозер (California Civil Code § 1102 — Transfer Disclosure Statement for real estate)</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Duress — виды принуждения</div>
  <div class="concept-card">
    <div class="concept-card-title">Physical Duress</div>
    <div class="concept-card-body">Договор под физической угрозой или силой — <strong>void</strong> (ничтожен), не просто voidable. Это исключение: обычно defenses делают договор voidable.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Economic Duress</div>
    <div class="concept-card-body">Три элемента: (1) <strong>improper threat</strong> (неправомерная угроза — не обычная жёсткая переговорная позиция), (2) <strong>no reasonable alternative</strong>, (3) threat вызвала согласие. Делает voidable. Классический пример: contractor в середине проекта требует больше денег под угрозой остановить работу, а замена нереальна — economic duress.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Undue Influence</div>
    <div class="concept-card-body">«Мягкое» принуждение в контексте confidential relationship. Семь факторов из Odorizzi v. Bloomfield School District (1966, Cal.) — классический California case:<br>1. Discussion в unusual time<br>2. Unusual place<br>3. Insistent demand<br>4. Extreme emphasis on urgency<br>5. Multiple persuaders<br>6. Absence of third-party advisors<br>7. No time to consult<br><br>Если 2-3 из этих факторов присутствуют в контексте power disparity — undue influence.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Mistake — mutual vs unilateral</div>
  <div class="concept-card">
    <div class="concept-card-title">Mutual Mistake — Sherwood v. Walker (1887)</div>
    <div class="concept-card-body">Обе стороны ошибаются о <strong>basic assumption</strong> договора. Ошибка имеет material effect на exchange. Пострадавшая сторона не несла риск ошибки. Классический кейс: корова «Rose of Aberlone» продана как бесплодная (для мяса), оказалась беременной. Suit for rescission — удовлетворён.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Unilateral Mistake</div>
    <div class="concept-card-body">Традиционно не defense. Современно — три возможных ситуации:<br>1. Другая сторона <strong>знала или должна была знать</strong> об ошибке → voidable<br>2. Ошибка <strong>palpable</strong> (очевидна) → voidable<br>3. Ошибка такова, что исполнение будет <strong>unconscionable</strong> → voidable<br><br>Классика: clerical error in bid — contractor отправил заниженное предложение из-за арифметической ошибки. Владелец знал об ошибке — bid можно расторгнуть.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Unconscionability — дуалистический тест</div>
  <div class="hbox gold">
    <div class="hbox-label">UCC § 2-302 и Restatement § 208</div>
    <div class="hbox-text">Суд может отказаться исполнять <strong>unconscionable</strong> договор или clause. Нужны оба элемента (в sliding scale):<br><br><strong>Procedural unconscionability</strong> — дефекты процесса заключения:<br>• Oppression: неравенство переговорной силы, «take it or leave it»<br>• Surprise: скрытые условия, мелкий шрифт, непонятный язык<br><br><strong>Substantive unconscionability</strong> — несправедливые условия:<br>• Exorbitant price<br>• One-sided clauses (чрезмерные limitations of liability)<br>• Arbitration clauses, лишающие прав эффективно<br><br>California применяет sliding scale: чем больше procedural, тем меньше нужно substantive, и наоборот.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Armendariz v. Foundation Health (2000, Cal.)</div>
    <div class="concept-card-body">Знаковое California-дело. Employer's mandatory arbitration clause признана unconscionable: procedural (adhesion contract для сотрудника), substantive (лимитировала remedies, требовала confidentiality, не давала full discovery). California — один из самых активных штатов в применении unconscionability к arbitration agreements.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Illegality — договоры, противоречащие закону</div>
  <div class="concept-card">
    <div class="concept-card-title">Void vs Voidable</div>
    <div class="concept-card-body">Договоры о совершении преступления — void. Договоры, нарушающие регуляторные нормы — часто voidable. Договоры в restraint of trade (антиконкурентные) — по common law unenforceable; по modern law — тест reasonableness.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Public Policy</div>
    <div class="concept-card-body">Даже если не противоречит конкретному закону, договор может быть неисполним как против public policy. Примеры: exculpatory clauses (снятие с себя ответственности за intentional torts), covenants not to compete слишком широкие.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California-specific: Business &amp; Professions Code § 16600</div>
    <div class="concept-card-body"><strong>California принципиально отличается</strong>: запрещает почти все non-compete clauses в employment. «Every contract by which anyone is restrained from engaging in a lawful profession, trade, or business is to that extent void». Исключения: sale of business, dissolution of partnership. Это делает California уникальным — non-competes, валидные в Нью-Йорке или Техасе, в California неисполнимы.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Impossibility, Impracticability, Frustration</div>
  <div class="concept-card">
    <div class="concept-card-title">Impossibility of Performance</div>
    <div class="concept-card-body">Performance стало буквально невозможным после заключения. Три классические ситуации:<br>• Смерть или недееспособность для personal service contracts<br>• Уничтожение subject matter (Taylor v. Caldwell, 1863 — сгорел мюзик-холл)<br>• Изменение закона, делающее performance нелегальным</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Commercial Impracticability (UCC § 2-615)</div>
    <div class="concept-card-body">Смягчённый стандарт: performance стало <strong>extremely and unreasonably difficult</strong> или дорогостоящим из-за события, отсутствие которого было basic assumption. Классика: закрытие Суэцкого канала. Higher costs сами по себе — не impracticability, только extreme changes.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Frustration of Purpose — Krell v. Henry (1903)</div>
    <div class="concept-card-body">Performance возможно, но его <strong>цель</strong> уничтожена. Классический кейс: аренда комнаты для наблюдения за коронационной процессией короля Эдуарда VII; король заболел, процессию отменили. Комнату сдать можно, но смысла нет. Договор расторгается.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Void vs Voidable</div>
    <div class="hbox-text">Void contract — нет договора вообще, ни одна сторона не может его исполнить. Voidable — сторона, защищённая правилом, может выбрать: подтвердить или расторгнуть. Физическое duress, illegality — void. Misrepresentation, minor's contract, mutual mistake — voidable.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Fact vs Opinion в misrepresentation</div>
    <div class="hbox-text">Misrepresentation of <strong>opinion</strong> обычно не actionable — «best car on the market», «great investment». Исключение: опинион эксперта (fiduciary), или opinion, подразумевающий fact. Puffery (хвастовство продавца) — не misrepresentation.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Frustration vs Impossibility</div>
    <div class="hbox-text">Impossibility — не могу исполнить. Frustration — могу, но нет смысла. В Krell v. Henry помещение существовало, аренда возможна — но процессия отменена. Это frustration, не impossibility.</div>
  </div>
</div>`
      },
      {
        title: 'Third Party Rights: права третьих лиц в договоре',
        content: `
<div class="l-section">
  <div class="l-section-label">Третьи лица и договор</div>
  <p class="l-text">По общему правилу договор создаёт права и обязанности только для его сторон (<span class="l-en">privity of contract</span>). Но есть важные исключения.</p>
  <div class="concept-card">
    <div class="concept-card-title">Third Party Beneficiary <span class="concept-card-en">Третье лицо-выгодоприобретатель</span></div>
    <div class="concept-card-body">Лицо, не являющееся стороной договора, но имеющее право требовать исполнения. <strong>Intended beneficiary</strong> (предполагаемый): стороны намеревались предоставить ему выгоду — имеет право иска. <strong>Incidental beneficiary</strong> (случайный): просто получает пользу — права иска нет.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Assignment <span class="concept-card-en">Уступка прав</span></div>
    <div class="concept-card-body">Передача договорных прав третьему лицу (assignee). Как правило, допускается без согласия другой стороны, если договор не запрещает. После уступки assignor теряет права, которые перешли к assignee.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Delegation <span class="concept-card-en">Делегирование обязанностей</span></div>
    <div class="concept-card-body">Передача договорных обязанностей третьему лицу. Делегант (delegator) всё равно остаётся ответственным, если делегат не исполнит. Нельзя делегировать обязанности, требующие личных качеств (personal service contracts).</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'torts',
    name: 'Torts',
    icon: '⚡',
    color: 'var(--red)',
    desc: 'Деликтное право — negligence, strict liability, intentional torts',
    lessons: [
      {
        title: 'Введение в Torts: три категории деликтов',
        content: `
<div class="l-section">
  <div class="l-section-label">Что такое tort</div>
  <p class="l-text"><span class="l-term">Tort</span> — гражданско-правовое нарушение, причиняющее вред, за которое пострадавший может требовать компенсации. Отличие от contract: нарушение не договора, а общей правовой обязанности. Отличие от criminal law: цель — компенсация, а не наказание.</p>
  <div class="hbox gold">
    <div class="hbox-label">Три категории</div>
    <div class="hbox-text">
      <strong>Intentional Torts</strong> — умышленное причинение вреда (battery, assault, false imprisonment).<br>
      <strong>Negligence</strong> — причинение вреда по неосторожности (наиболее частая категория).<br>
      <strong>Strict Liability</strong> — ответственность без вины (опасные виды деятельности, дефектные продукты).
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Сравнение с российским правом</div>
  <table class="comp-table">
    <tr><th>Институт</th><th class="ru">РФ</th><th>США</th></tr>
    <tr><td>Деликт</td><td class="ru">Гл. 59 ГК РФ — обязательства из причинения вреда</td><td>Tort law (common law + статуты)</td></tr>
    <tr><td>Вина</td><td class="ru">Презумпция вины причинителя (ст. 1064)</td><td>Истец доказывает каждый элемент</td></tr>
    <tr><td>Без вины</td><td class="ru">Ст. 1079 — источник повышенной опасности</td><td>Strict liability — шире по охвату</td></tr>
  </table>
</div><div class="l-section">
  <div class="l-section-label">Historical context — privity of contract</div>
  <p class="l-text">По старому английскому правилу третьи лица не могли ни получать права, ни нести обязанности по чужому договору — <span class="l-term">privity of contract</span>. Современное американское право сохранило эту доктрину, но с важными исключениями, которые позволяют бенефициарам и правопреемникам действовать.</p>
</div>
<div class="l-section">
  <div class="l-section-label">Third Party Beneficiaries — детальная классификация</div>
  <div class="concept-card">
    <div class="concept-card-title">Intended Beneficiary — тест Restatement § 302</div>
    <div class="concept-card-body">Третье лицо является intended beneficiary, если:<br>(a) performance promise удовлетворит долг промиссии перед третьим лицом, ИЛИ<br>(b) обстоятельства показывают, что промиссии intended to give третьему лицу выгоду performance<br><br>Только intended beneficiaries имеют право на иск.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Creditor Beneficiary</div>
    <div class="concept-card-body">Подвид intended beneficiary. Промиссии уже имеет долг перед третьим лицом; договор с промиссором погасит этот долг. Пример: Иван должен Петру $1000. Иван заключает договор с Сергеем: Сергей заплатит Петру $1000 за что-то. Пётр — creditor beneficiary; может требовать с Сергея.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Donee Beneficiary</div>
    <div class="concept-card-body">Подвид intended beneficiary. Промиссии хочет <strong>одарить</strong> третье лицо через договор с промиссором. Классический пример: страхователь делает страховой полис с beneficiary своей женой. Жена — donee beneficiary полиса.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Incidental Beneficiary</div>
    <div class="concept-card-body">Случайно получает выгоду от договора, но стороны не намеревались. <strong>Нет прав иска.</strong> Пример: город строит парк рядом с моим домом, дом дорожает. Я incidental beneficiary, но прав на договор города со строителем у меня нет.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Vesting of Rights — когда beneficiary становится неприкосновенным</div>
  <div class="hbox gold">
    <div class="hbox-label">Три события vesting</div>
    <div class="hbox-text">Пока права не vested, стороны могут изменить или расторгнуть договор. После vesting — только с согласия beneficiary.<br><br>Права vestsят, когда beneficiary:<br>1. <strong>Узнаёт о договоре и согласился</strong> (manifestation of assent)<br>2. <strong>Положился</strong> на договор (detrimental reliance)<br>3. <strong>Предъявил иск</strong> по договору</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Life Insurance исключение</div>
    <div class="hbox-text">В страховых полисах по умолчанию beneficiary <strong>не vests</strong> — страхователь может изменить beneficiary без согласия текущего. Если не оговорено «irrevocable beneficiary».</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Defenses против beneficiary</div>
  <div class="hbox blue">
    <div class="hbox-label">Promisor может использовать все defenses</div>
    <div class="hbox-text">Когда beneficiary подаёт иск на промиссора, промиссор может использовать все <strong>defenses, которые имел бы против промиссии</strong>: lack of consideration, breach by promissee, statute of frauds, fraud и т.д. Beneficiary не имеет больше прав, чем промиссии.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Assignment — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Что можно assign</div>
    <div class="concept-card-body">По умолчанию большинство прав assignable. <strong>Нельзя assign:</strong><br>• Когда assignment <strong>substantially change</strong> duty obligor (personal services, unique goods)<br>• Когда закон запрещает (некоторые tort claims, government contracts)<br>• Когда договор прямо запрещает <em>assignment of rights</em> (но суды толкуют ограничительно — обычно читают как запрет delegation, не assignment)</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Requirements для валидной assignment</div>
    <div class="concept-card-body">• <strong>Present intent</strong> to transfer<br>• <strong>Identification</strong> of right being assigned<br>• Обычно <strong>no writing requirement</strong>, кроме прав попадающих под SOF<br>• <strong>Consideration</strong> <em>не обязательно</em> (gratuitous assignment валидна, но revocable)</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Notice to Obligor</div>
    <div class="concept-card-body">Assignment валидна с момента совершения. Но obligor, не знающий об assignment, может добросовестно заплатить assignor'у — это освободит его. После notice — должен платить assignee.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Multiple Assignments</div>
    <div class="concept-card-body">Если assignor assigns одно право двум assignees, кто получает?<br><strong>Majority (American rule):</strong> первый assignee in time (first to receive assignment wins).<br><strong>Minority (English rule):</strong> первый, кто уведомил obligor.<br>UCC Article 9 (secured transactions) имеет свои сложные priority rules.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Delegation — кто может делегировать обязанности</div>
  <div class="concept-card">
    <div class="concept-card-title">Когда delegation недопустима</div>
    <div class="concept-card-body">• <strong>Personal service contracts</strong> — ты нанял <em>именно этого художника</em>; он не может делегировать работу другому<br>• Когда делегация <strong>materially changes</strong> obligor's expectations<br>• Когда договор прямо запрещает</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Delegator остаётся ответственным</div>
    <div class="concept-card-body">Даже после delegation, original obligor (delegator) <strong>остаётся ответственным</strong> по договору. Если delegate не исполняет — delegator отвечает. Единственный способ освободиться — <strong>novation</strong>: новый трёхсторонний договор, где obligee соглашается заменить delegator на delegate.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Novation vs Assignment vs Delegation — не путать</div>
  <table class="comp-table">
    <tr><th>Концепция</th><th class="ru">Что передаётся</th><th>Освобождение оригинальной стороны</th></tr>
    <tr><td>Assignment</td><td class="ru">Rights</td><td>Да (assignor теряет rights)</td></tr>
    <tr><td>Delegation</td><td class="ru">Duties</td><td>Нет (delegator остаётся liable)</td></tr>
    <tr><td>Novation</td><td class="ru">Entire contract</td><td>Да, полное освобождение с согласия obligee</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">California-specific</div>
  <div class="hbox purple">
    <div class="hbox-label">Cal. Civ. Code § 1559 — third party beneficiaries</div>
    <div class="hbox-text">«A contract, made expressly for the benefit of a third person, may be enforced by him at any time before the parties thereto rescind it.» California имеет более широкое определение intended beneficiary, чем Restatement — любой третий, для чьей выгоды договор made. California суды применяют factors test в Goonewardene v. ADP (2019), определяя intent.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Assignment of rights vs Delegation of duties</div>
    <div class="hbox-text">Большинство договоров имеют и права, и обязанности. Просто сказать «I assign the contract» — обычно означает и assignment rights, и delegation duties. Важно: <strong>assignment rights</strong> + <strong>delegation duties</strong> = технически два отдельных действия.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: «Non-assignability» clause</div>
    <div class="hbox-text">Клаузула «no assignment» часто толкуется судами <strong>ограничительно</strong>: запрещает только delegation duties, не assignment of rights (особенно на payment). Чтобы реально запретить assignment rights, формулировка должна быть очень чёткой («any purported assignment shall be void»).</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Beneficiary не может изменить условия</div>
    <div class="hbox-text">Intended beneficiary имеет право enforce на условиях договора. Не может требовать больше, чем в договоре. Не может модифицировать договор. Он standing in the shoes of promisee.</div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Исторические корни деликтного права</div>
  <p class="l-text">Американское tort law происходит из английских writs — узких форм исков, каждая со своими элементами. Два главных дочерних writ'а дали начало современному разделению:</p>
  <div class="timeline">
    <div class="tl-item">
      <div class="tl-year">XIII в.</div>
      <div class="tl-text"><strong>Writ of Trespass.</strong> За прямое и применявшее силу нарушение. Фундамент современных intentional torts. Не требовал доказательства вины — достаточно было самого вторжения.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">XIV в.</div>
      <div class="tl-text"><strong>Trespass on the Case.</strong> За непрямой вред или вред без применения силы. Требовал доказательства actual damage. Отсюда вырос современный negligence.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1850</div>
      <div class="tl-text"><strong>Brown v. Kendall (Mass.).</strong> Шоу судья Lemuel Shaw сформулировал современный стандарт: для ответственности нужна fault (вина), либо intent, либо negligence. До этого — строгая ответственность за causation.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1928</div>
      <div class="tl-text"><strong>Palsgraf v. Long Island R.R.</strong> Cardozo формулирует foreseeability как границу duty.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1963</div>
      <div class="tl-text"><strong>Greenman v. Yuba Power Products (Cal.).</strong> Traynor вводит strict products liability — Калифорния лидирует, за два года опережая Restatement (Second) § 402A.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">1965</div>
      <div class="tl-text"><strong>Restatement (Second) of Torts § 402A.</strong> ALI кодифицирует strict products liability вслед за Greenman.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">1975</div>
      <div class="tl-text"><strong>Li v. Yellow Cab (Cal.).</strong> California переходит от contributory negligence (полный барьер) к pure comparative negligence. Лидирующий прецедент для всей страны.</div>
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Четвёртая категория, которую часто забывают: Nuisance</div>
  <p class="l-text">Твой урок даёт три категории (intentional / negligence / strict liability). Nuisance — четвёртая, и она не вписывается ни в одну, потому что может быть любой из трёх. На Bar Exam это регулярная тема.</p>
  <div class="concept-card">
    <div class="concept-card-title">Private Nuisance</div>
    <div class="concept-card-body">Существенное и неразумное вмешательство в использование и пользование владельцем своей землёй. Запах фермы, шум фабрики, дым. Remedy — damages + injunction. Тест balancing: gravity harm vs utility of conduct.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Public Nuisance</div>
    <div class="concept-card-body">Неразумное вмешательство в права, общие для public. Обычно иск подаёт правительство. Частное лицо может судиться только если понесло <strong>special harm</strong>, отличный от вреда обществу в целом.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Vicarious Liability — ответственность за чужие действия</div>
  <div class="hbox gold">
    <div class="hbox-label">Respondeat Superior</div>
    <div class="hbox-text">«Пусть вышестоящий отвечает». Работодатель отвечает за torts работника, совершённые <strong>в пределах service</strong> (scope of employment). Тест <em>frolic and detour</em>: незначительное отклонение (detour) — в пределах; существенное отклонение (frolic) — вне. Intentional torts работника обычно вне scope, кроме случаев, когда насилие присуще работе (bouncer, security).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Independent Contractors — исключения</div>
    <div class="concept-card-body">Наниматель <strong>не отвечает</strong> за torts independent contractor. Исключения:<br>• Inherently dangerous activity<br>• Non-delegable duties (безопасность premises для invitees)<br>• Apparent authority — contractor кажется сотрудником</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California-specific: Automobile Owner Liability</div>
    <div class="concept-card-body">Cal. Veh. Code § 17150: владелец машины отвечает за negligence любого, кому разрешил водить. Ограничение: $15 000 за телесные повреждения одного лица, $30 000 — нескольких, $5 000 имущественного вреда. Это уникально для Калифорнии — в большинстве штатов нужна отдельная theory (negligent entrustment).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Сравнение с российским деликтным правом</div>
  <table class="comp-table">
    <tr><th>Критерий</th><th class="ru">РФ (гл. 59 ГК)</th><th>США</th></tr>
    <tr><td>Структура</td><td class="ru">Общие условия деликта (ст. 1064) + специальные составы</td><td>Отдельные torts (battery, negligence, strict liability), каждый со своими элементами</td></tr>
    <tr><td>Вина</td><td class="ru">Презумпция вины причинителя — он опровергает</td><td>Истец доказывает каждый элемент (включая fault)</td></tr>
    <tr><td>Моральный вред</td><td class="ru">Ст. 151 ГК — широкая категория</td><td>Pain and suffering, emotional distress — отдельные доктрины с ограничениями</td></tr>
    <tr><td>Punitive damages</td><td class="ru">Отсутствуют</td><td>Доступны при malice/fraud/oppression</td></tr>
    <tr><td>Ст. 1079 vs strict liability</td><td class="ru">Источник повышенной опасности</td><td>Abnormally dangerous activities — шире по охвату</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Tort vs Contract claim</div>
    <div class="hbox-text">Один и тот же факт может породить оба иска. <strong>Economic loss rule</strong>: чисто экономические потери (без физического вреда или имущественного ущерба) обычно взыскиваются только через contract, не tort. California применяет этот принцип, но с исключениями (fraud, special relationship).</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Damages без вреда</div>
    <div class="hbox-text">Intentional torts — некоторые actionable <strong>без реального вреда</strong> (trespass, battery без physical harm): suit for <em>nominal damages</em>. Negligence — <strong>всегда требует</strong> actual damages. Это различие критично для issue spotting.</div>
  </div>
</div>`
      },
      {
        title: 'Negligence: четыре элемента, которые надо доказать',
        content: `
<div class="l-section">
  <div class="l-section-label">Формула negligence</div>
  <p class="l-text"><span class="l-term">Negligence</span> — причинение вреда по неосторожности. Истец должен доказать все четыре элемента. Если хотя бы один не доказан — нет negligence.</p>
  <div class="concept-card">
    <div class="concept-card-title">1. Duty <span class="concept-card-en">Обязанность</span></div>
    <div class="concept-card-body">Ответчик был обязан проявлять разумную осмотрительность по отношению к истцу. Стандарт: <strong>reasonable person</strong> — как повёл бы себя разумный человек в этих обстоятельствах. Для специалистов (врачи, адвокаты) — стандарт профессии.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Breach <span class="concept-card-en">Нарушение</span></div>
    <div class="concept-card-body">Ответчик не соответствовал стандарту разумного человека. <strong>Res ipsa loquitur</strong> («вещь говорит сама за себя»): в некоторых случаях сам факт происшествия свидетельствует о negligence — например, хирургический инструмент, оставленный внутри пациента.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Causation <span class="concept-card-en">Причинно-следственная связь</span></div>
    <div class="concept-card-body"><strong>Actual cause (but-for test)</strong>: вред не наступил бы, если бы не действия ответчика. <strong>Proximate cause (foreseeable)</strong>: вред был предсказуемым следствием действий. Дело Palsgraf: вред должен быть foreseeable для конкретного истца.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">4. Damages <span class="concept-card-en">Реальный вред</span></div>
    <div class="concept-card-body">В отличие от intentional torts, negligence требует реального вреда. Нет вреда — нет иска. Вред может быть физическим, имущественным или (в ограниченных случаях) психическим.</div>
  </div>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">A driver runs a red light and strikes another car. The other driver suffers whiplash. In a negligence suit, which element would be most directly established by proof that the defendant violated a traffic statute?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','B')"><span class="bar-option-letter">A</span> Duty</div>
      <div class="bar-option" onclick="selectOption(this,'B','B')"><span class="bar-option-letter">B</span> Breach</div>
      <div class="bar-option" onclick="selectOption(this,'C','B')"><span class="bar-option-letter">C</span> Causation</div>
      <div class="bar-option" onclick="selectOption(this,'D','B')"><span class="bar-option-letter">D</span> Damages</div>
    </div>
    <div class="bar-answer" id="ans-2-1">
      <strong>Правильный ответ: B.</strong> Нарушение статута (traffic statute) устанавливает breach через доктрину <em>negligence per se</em>: если ответчик нарушил закон, принятый для защиты именно таких истцов от именно таких видов вреда — breach доказан автоматически. Duty (обязанность не причинять вред другим участникам движения) существует по умолчанию для всех водителей.
    </div>
  </div>
</div><div class="l-section">
  <div class="l-section-label">Duty — детальный разбор</div>
  <p class="l-text">Duty — самый сложный элемент negligence. По умолчанию каждый имеет duty reasonable care к foreseeable plaintiffs. Но есть ситуации, где duty modified или отсутствует.</p>
  <div class="concept-card">
    <div class="concept-card-title">Cardozo view vs Andrews view</div>
    <div class="concept-card-body"><strong>Cardozo (majority в Palsgraf):</strong> duty существует только к foreseeable plaintiffs — тем, кто находится в «zone of danger». Если истец непредсказуем — нет duty.<br><strong>Andrews (dissent):</strong> duty существует ко всему миру. Вопрос foreseeability — это proximate cause, не duty.<br><br>Большинство штатов следует Cardozo. California применяет гибридный подход через Rowland factors.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California-specific: Rowland v. Christian (1968)</div>
    <div class="concept-card-body">California Supreme Court отменил traditional common law классификацию посетителей недвижимости (invitee/licensee/trespasser). Теперь duty определяется через <strong>семь Rowland factors</strong>:<br>1. Foreseeability of harm<br>2. Degree of certainty of harm<br>3. Close connection between conduct and injury<br>4. Moral blame<br>5. Policy of preventing future harm<br>6. Burden on defendant<br>7. Availability of insurance<br><br>Это принципиальное отличие California от большинства штатов и критическая тема на Cal Bar.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">No duty to rescue — общее правило</div>
    <div class="concept-card-body">По общему правилу <strong>нет duty</strong> приходить на помощь незнакомцу. Ребёнок тонет в мелком бассейне — прохожий юридически не обязан помогать, даже если это ничего не стоит. Исключения:<br>• <strong>Special relationships</strong>: родитель/ребёнок, работодатель/работник, школа/ученик, отель/гость, перевозчик/пассажир<br>• <strong>Собственное создание опасности</strong> — даже невиновное<br>• <strong>Voluntary undertaking</strong> — начал помогать, обязан продолжать разумно<br>• <strong>Contract</strong> — обязался помогать</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Good Samaritan Laws</div>
    <div class="concept-card-body">Защищают <strong>добровольных помощников</strong> от ответственности за negligence (но не за gross negligence). Цель — стимулировать помощь. California имеет широкую защиту (Cal. Health & Safety Code § 1799.102): защищает любого, оказывающего emergency medical care в good faith без компенсации. Включает и медицинских, и немедицинских помощников после изменения 2009 года.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Standard of Care — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Reasonable Person Standard</div>
    <div class="concept-card-body">Гипотетический среднестатистический взрослый с обычным здравым смыслом. Объективный стандарт — личные недостатки (лень, вспыльчивость) не учитываются. Ответчик обязан быть «reasonable», даже если по характеру не такой.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Модификации стандарта</div>
    <div class="concept-card-body"><strong>Дети:</strong> стандарт ребёнка того же возраста, опыта, интеллекта. Исключение: дети, занимающиеся <em>adult activities</em> (вождение машины, управление самолётом) — держатся adult standard.<br><strong>Physical disability:</strong> стандарт reasonable person с такой же инвалидностью.<br><strong>Mental disability:</strong> <em>не</em> учитывается — душевнобольной держится reasonable person standard. Логика: иначе слишком легко избегать ответственности.<br><strong>Emergency:</strong> стандарт reasonable person в emergency. Если emergency создана ответчиком — без модификации.<br><strong>Professionals:</strong> стандарт средней компетентности в их области, в том же community. Specialists — стандарт specialists.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Medical Malpractice — особенности</div>
    <div class="concept-card-body">Традиционно — <strong>local standard</strong> (такая же community). Современно — <strong>national standard</strong> для specialists. Требуется expert testimony о стандарте, кроме очевидных случаев (res ipsa). <strong>Informed consent</strong>: врач обязан раскрыть material risks; тест — что разумный пациент посчитал бы важным (California и большинство) или что разумный врач раскрыл бы (меньшинство).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Breach — как доказать</div>
  <div class="concept-card">
    <div class="concept-card-title">Learned Hand Formula — US v. Carroll Towing (1947)</div>
    <div class="concept-card-body">Формула судьи Hand для определения breach: <strong>B &lt; P × L</strong><br>• <strong>B</strong> — burden adequate precautions<br>• <strong>P</strong> — probability вреда<br>• <strong>L</strong> — likely severity of harm<br><br>Если burden меньше, чем вероятный вред, неразумно было не принимать меры. Неформальный, но влиятельный подход.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Negligence Per Se</div>
    <div class="concept-card-body">Нарушение <strong>статута</strong> автоматически устанавливает breach, если:<br>1. Статут защищает класс лиц, к которому принадлежит истец<br>2. Статут защищает от <em>типа вреда</em>, который произошёл<br>3. Нарушение causation вреда<br><br>Классика: водитель проехал на красный свет (нарушение traffic statute, защищающего пассажиров других машин от столкновений). Breach доказан автоматически. Все ещё можно защищаться через отсутствие других элементов.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Res Ipsa Loquitur — «вещь говорит за себя»</div>
    <div class="concept-card-body">Выводим negligence из самого факта происшествия. Три элемента:<br>1. Событие <strong>обычно не происходит</strong> без negligence<br>2. <strong>Исключительный контроль</strong> ответчика над instrumentality<br>3. <strong>Истец не способствовал</strong> happening<br><br>Классика: Byrne v. Boadle (1863) — бочка муки упала из окна склада. Бочки не падают сами. Склад контролирует окна. Истец просто шёл мимо. Res ipsa loquitur.<br><br>Эффект: presumption или permissible inference (зависит от jurisdiction). California — inference, не shifting burden.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Custom</div>
    <div class="concept-card-body">Соблюдение <strong>industry custom</strong> — доказательство отсутствия breach, но не абсолют. Суд может признать, что <em>весь отрасль</em> действовала небрежно. T.J. Hooper (1932): буксир без радио погиб в шторме; отсутствие радио было custom — но custom был negligent.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Causation — две части</div>
  <div class="concept-card">
    <div class="concept-card-title">Actual Cause (Cause in Fact)</div>
    <div class="concept-card-body"><strong>But-for test:</strong> но если бы не действия ответчика, вред не наступил бы.<br><strong>Альтернатива: Substantial Factor Test</strong> — когда несколько причин действовали одновременно (два пожара сошлись и сожгли дом). Каждая причина, являвшаяся substantial factor, считается actual cause.<br><strong>Summers v. Tice (1948, Cal.):</strong> два охотника одновременно выстрелили в истца, только один попал, не установить кто. Суд переложил bburden of proof на ответчиков — каждый должен был доказать, что не он. Это alternative liability.<br><strong>Sindell v. Abbott Labs (1980, Cal.):</strong> DES. Не установить, какой из производителей виновен. Market share liability — каждый платит пропорционально своей доле рынка.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Proximate Cause (Legal Cause)</div>
    <div class="concept-card-body">Тест <strong>foreseeability</strong>. Ответчик отвечает только за вред, который был предсказуемым следствием. <br><strong>Intervening causes:</strong> промежуточные события между actions defendant и harm. Foreseeable intervening — не разрывают цепь. Unforeseeable intervening (superseding) — разрывают.<br><strong>Eggshell skull rule:</strong> «бери истца таким, какой он есть». Неожиданная хрупкость истца не освобождает — отвечаешь за всю степень вреда, даже если обычный человек получил бы меньше. Принцип универсальный, применяется и к физическому, и к психическому вреду.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Damages в negligence</div>
  <div class="concept-card">
    <div class="concept-card-title">Compensatory Damages</div>
    <div class="concept-card-body"><strong>Special damages</strong> — экономические, подлежат точному расчёту: medical bills, lost wages, property damage.<br><strong>General damages</strong> — неэкономические, подлежат оценке jury: pain and suffering, loss of consortium, emotional distress.<br><strong>Future damages</strong> — можно взыскивать ожидаемые будущие потери, приведённые к present value.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Negligent Infliction of Emotional Distress (NIED)</div>
    <div class="concept-card-body">Три теории recovery:<br><strong>1. Zone of Danger:</strong> истец был в физической опасности, испытал emotional distress. Большинство штатов.<br><strong>2. Impact Rule:</strong> требуется физический контакт (даже минимальный). Меньшинство.<br><strong>3. Dillon/Thing Test (California):</strong> bystander recovery. Dillon v. Legg (1968, Cal.) и уточнённый Thing v. La Chusa (1989, Cal.):<br>&nbsp;&nbsp;• Истец закрыт <strong>close relationship</strong> с пострадавшим (родственник)<br>&nbsp;&nbsp;• <strong>Contemporaneous observation</strong> события (не узнал потом)<br>&nbsp;&nbsp;• <strong>Serious emotional distress</strong> за пределы обычного<br><br>California — самый развитый подход к bystander NIED.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Collateral Source Rule</div>
    <div class="concept-card-body">Compensation, полученная истцом от независимых источников (страховка, работодатель), <strong>не вычитается</strong> из damages. Логика: tortfeasor не должен извлекать выгоду из предусмотрительности истца. California частично модифицировала через MICRA (medical malpractice) и Prop 51.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: «Duty to act»</div>
    <div class="hbox-text">Нет duty помогать незнакомцу. Это одна из самых частых ловушек. Фабула описывает, как мимо шёл человек и не помог утопающему — <strong>нет negligence</strong>, если нет specific relationship, собственного создания опасности или voluntary undertaking.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Negligence per se не абсолютна</div>
    <div class="hbox-text">Даже если доказан negligence per se — ответчик может победить, если нет causation или damages. Нарушение статута устанавливает breach, но не остальные элементы.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Proximate cause and superseding intervening</div>
    <div class="hbox-text">Foreseeable criminal acts third parties (ограбление в плохо освещённом паркинге) <strong>не разрывают</strong> цепь. Unforeseeable (внезапный ураган, удар молнии) — superseding.</div>
  </div>
</div>`
      },
      {
        title: 'Strict Liability: ответственность без вины',
        content: `
<div class="l-section">
  <div class="l-section-label">Когда вина не нужна</div>
  <p class="l-text"><span class="l-term">Strict liability</span> — ответственность наступает независимо от наличия умысла или negligence. Достаточно доказать, что деятельность ответчика причинила вред.</p>
  <div class="concept-card">
    <div class="concept-card-title">Abnormally Dangerous Activities <span class="concept-card-en">Сверхопасная деятельность</span></div>
    <div class="concept-card-body">Хранение взрывчатки, использование динамита, разведение диких животных. Restatement перечисляет факторы: высокая вероятность вреда, невозможность устранить риск при разумной осмотрительности, необычность деятельности для данной местности.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Products Liability <span class="concept-card-en">Ответственность за дефектный продукт</span></div>
    <div class="concept-card-body">Производитель или продавец несёт strict liability за дефектный продукт, причинивший вред. Три вида дефектов: <strong>manufacturing defect</strong> (конкретный экземпляр отличается от дизайна), <strong>design defect</strong> (весь продукт опасен по конструкции), <strong>warning defect</strong> (недостаточные предупреждения).</div>
  </div>
</div>
<div class="hbox blue">
  <div class="hbox-label">Сравнение: California vs. other states</div>
  <div class="hbox-text">Калифорния применяет <strong>consumer expectation test</strong> для design defects: продукт дефектен, если опаснее, чем ожидает обычный потребитель. Альтернативный тест — <strong>risk-utility test</strong>: риски продукта перевешивают его пользу.</div>
</div><div class="l-section">
  <div class="l-section-label">Три категории strict liability</div>
  <p class="l-text">Твой урок покрывает две: abnormally dangerous activities и products liability. Традиционно выделяют три категории:</p>
  <div class="concept-card">
    <div class="concept-card-title">1. Animals</div>
    <div class="concept-card-body"><strong>Wild animals</strong> — владелец отвечает strictly за вред, причинённый dangerous propensities. Лев, тигр, медведь — всегда strict.<br><strong>Domestic animals</strong> — <em>one-bite rule</em>: владелец отвечает strictly, только если знал или должен был знать о dangerous propensity. Первая укус «бесплатный», если нет признаков агрессивности.<br><strong>Trespassing cattle</strong> — strict liability за вред, если скот забрёл на чужую землю. Исключение: fencing districts.<br><strong>California-specific:</strong> Cal. Civ. Code § 3342 устанавливает strict liability за dog bites — без one-bite rule. Владелец отвечает за первый укус, если жертва законно на property. Это отличие от большинства штатов.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Abnormally Dangerous Activities</div>
    <div class="concept-card-body">Restatement (Second) § 520 — шесть факторов:<br>1. Высокий риск вреда<br>2. Серьёзность вреда<br>3. Невозможность устранить риск reasonable care<br>4. Не common usage<br>5. Inappropriate to location<br>6. Ценность для community не превышает риск<br><br>Restatement (Third) упростил до двух: creates foreseeable и highly significant risk, not common usage.<br><br>Классические примеры: blasting, keeping wild animals, storing dangerous chemicals, fumigation, crop dusting.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Products Liability</div>
    <div class="concept-card-body">Purely American doctrine, возникла в California с Greenman (1963). Detail in next section.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Products Liability — четыре теории recovery</div>
  <div class="hbox gold">
    <div class="hbox-label">Истец может выбрать любую (или все)</div>
    <div class="hbox-text"><strong>1. Negligence</strong> — стандартные 4 элемента. Против manufacturer, retailer, supplier. Retailer обычно not liable, если просто продавал без reason to know defect.<br><br><strong>2. Strict Products Liability (Restatement § 402A / Greenman)</strong> — без необходимости доказывать fault.<br><br><strong>3. Breach of Warranty</strong> — UCC § 2-314 (merchantability), § 2-315 (fitness particular purpose), § 2-313 (express). Privity requirements relaxed.<br><br><strong>4. Misrepresentation</strong> — fraud или innocent misrepresentation о material fact.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Strict Products Liability — элементы</div>
  <div class="concept-card">
    <div class="concept-card-title">Prima facie case</div>
    <div class="concept-card-body">1. <strong>Defendant — commercial seller</strong> of products. Включает manufacturer, distributor, retailer. Не одноразовый private seller.<br>2. <strong>Product was defective</strong> when left defendant's hands.<br>3. <strong>Defect was actual and proximate cause</strong> of injury.<br>4. <strong>Damages</strong> — physical harm to person or property.<br><br>Не требуется privity of contract. Bystander тоже может судиться.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Три вида дефектов</div>
    <div class="concept-card-body"><strong>Manufacturing defect</strong> — единичный экземпляр отличается от дизайна. Один из тысячи автомобилей с бракованным тормозом. Тест прост: отличается ли от intended design.<br><br><strong>Design defect</strong> — сам дизайн опасен. Все экземпляры дефектны. Два теста:<br>• <strong>Consumer Expectation Test (California preferred):</strong> продукт более опасен, чем ожидал бы ordinary consumer. Barker v. Lull (1978, Cal.).<br>• <strong>Risk-Utility Test (Restatement Third):</strong> был ли reasonable alternative design, который уменьшил бы риск. California применяет оба теста в зависимости от сложности (Soule v. GM, 1994).<br><br><strong>Warning defect (failure to warn)</strong> — недостаточные инструкции или предупреждения. Тест: foreseeable risks, known or knowable на момент marketing. Learned intermediary doctrine в медицине: warning врачу, не пациенту.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Defenses к Strict Liability</div>
  <div class="concept-card">
    <div class="concept-card-title">Misuse / Alteration</div>
    <div class="concept-card-body">Если продукт использовался <strong>не по назначению и непредсказуемым образом</strong> — manufacturer не отвечает. Но <strong>foreseeable misuse</strong> должен быть предусмотрен. Если все используют табурет как лестницу — manufacturer должен это учесть.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Assumption of Risk</div>
    <div class="concept-card-body">Истец знал о defect и сознательно воспользовался. Полный барьер в некоторых jurisdictions, фактор comparative в других. California — фактор comparative.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Comparative Fault</div>
    <div class="concept-card-body">California применяет comparative fault даже к strict products liability (Daly v. General Motors, 1978). Большинство штатов следуют.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">State of the Art</div>
    <div class="concept-card-body">Защита, что на момент выпуска продукт соответствовал lowest scientific knowledge. Доступна для design defects и failure to warn — обычно не для manufacturing. Анализ отражает момент выпуска, не времени травмы.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Warranty — параллельная теория</div>
  <table class="comp-table">
    <tr><th>Warranty</th><th class="ru">UCC</th><th>Содержание</th></tr>
    <tr><td>Express</td><td class="ru">§ 2-313</td><td>Явное обещание, описание, образец</td></tr>
    <tr><td>Implied Merchantability</td><td class="ru">§ 2-314</td><td>Fit for ordinary purposes. Только если продавец — merchant</td></tr>
    <tr><td>Implied Fitness for Particular Purpose</td><td class="ru">§ 2-315</td><td>Продавец знает о particular purpose покупателя, покупатель полагается на экспертизу продавца</td></tr>
  </table>
  <div class="hbox blue">
    <div class="hbox-label">Disclaimer возможен, но ограничен</div>
    <div class="hbox-text">UCC разрешает disclaim implied warranties конкретными формулировками («as is», «with all faults»). НО California (через Magnuson-Moss и Song-Beverly Act) сильно ограничивает disclaimer в consumer transactions. В бизнес-между-бизнесом — свобода шире.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">California Song-Beverly Consumer Warranty Act</div>
  <div class="hbox purple">
    <div class="hbox-label">Cal. Civ. Code §§ 1790 et seq. — «California Lemon Law»</div>
    <div class="hbox-text">Одно из самых про-потребительских законодательств в США. Применяется к consumer goods (включая cars):<br>• Implied warranty merchantability не может быть отменена в consumer sales<br>• «Lemon law» для автомобилей: manufacturer обязан repair или replace после reasonable number of attempts<br>• Attorney's fees — consumer может взыскать с manufacturer<br>• Civil penalty up to 2× actual damages при willful violation<br><br>Критическая тема на Cal Bar для consumer torts/contracts issues.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Scope of strict liability</div>
    <div class="hbox-text">Strict liability применяется только к вреду, который <strong>рискованность вида деятельности</strong> делает вероятной. Если химзавод взорвался из-за негодного водопровода, но вред — моральное расстройство соседа из-за шума — strict не применяется. Рикошетный вред вне scope.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Retailer в negligence vs strict</div>
    <div class="hbox-text">Retailer обычно <strong>не liable в negligence</strong> (просто продавал упакованный товар, не знал о дефекте). <strong>Но liable в strict</strong> — любой commercial seller в цепи. Это важное различие.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Services не products</div>
    <div class="hbox-text">Strict products liability <strong>не применяется к services</strong>. Оказание медицинской услуги — negligence standard. Продажа крови — services (по статуту California). Гибриды: hair dye applied by stylist — в California суды делят (Newmark v. Gimbel's).</div>
  </div>
</div>`
      },
      {
        title: 'Intentional Torts: умышленное причинение вреда',
        content: `
<div class="l-section">
  <div class="l-section-label">Основные intentional torts</div>
  <table class="comp-table">
    <tr><th>Tort</th><th class="ru">Элементы</th><th>Аналог в РФ</th></tr>
    <tr><td>Battery</td><td class="ru">Умышленный вредоносный/оскорбительный контакт с телом без согласия</td><td>Ст. 12 ГК + уголовная</td></tr>
    <tr><td>Assault</td><td class="ru">Умышленное создание у другого разумного страха battery (без физического контакта)</td><td>Угроза</td></tr>
    <tr><td>False Imprisonment</td><td class="ru">Умышленное незаконное ограничение свободы передвижения</td><td>Ст. 1070 ГК РФ</td></tr>
    <tr><td>Defamation</td><td class="ru">Ложное порочащее утверждение о факте, опубликованное третьим лицам</td><td>Ст. 152 ГК РФ</td></tr>
    <tr><td>Trespass to Land</td><td class="ru">Умышленное физическое вторжение на чужую землю</td><td>Нарушение владения</td></tr>
    <tr><td>IIED</td><td class="ru">Умышленное причинение эмоционального вреда крайне возмутительным поведением</td><td>Нет прямого аналога</td></tr>
  </table>
</div>
<div class="hbox gold">
  <div class="hbox-label">Intent — специфика умысла в tort law</div>
  <div class="hbox-text">Умысел в tort law — это намерение совершить <strong>действие</strong>, а не причинить вред. При battery: достаточно намерения совершить контакт. Не нужно намеревалось причинить вред. Доктрина <strong>transferred intent</strong>: если хотел ударить А, но случайно ударил Б — умысел «переходит» к Б.</div>
</div><div class="l-section">
  <div class="l-section-label">Intent — ключевая концепция</div>
  <div class="hbox gold">
    <div class="hbox-label">Два пути установить intent</div>
    <div class="hbox-text"><strong>1. Purpose</strong> — ответчик желал результата.<br><strong>2. Knowledge with substantial certainty</strong> — ответчик знал, что результат <em>практически наверняка</em> произойдёт.<br><br>Не нужно злого умысла. Не нужно желать вреда — достаточно желать <em>contact</em> или <em>apprehension</em>.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Transferred Intent — пять классических intentional torts</div>
    <div class="concept-card-body">Если ответчик хотел совершить один из <strong>пяти</strong> intentional torts, но результат другой — intent переносится. Пять торов:<br>• Battery<br>• Assault<br>• False Imprisonment<br>• Trespass to Land<br>• Trespass to Chattels<br><br>Два вида переноса:<br><strong>Tort-to-tort:</strong> хотел напугать (assault), но ударил (battery) — intent переносится.<br><strong>Victim-to-victim:</strong> хотел ударить А, попал в Б — intent переносится.<br><br>Не применяется к: IIED, conversion, defamation.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Battery — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Элементы</div>
    <div class="concept-card-body">1. <strong>Intent</strong> cause contact or apprehension<br>2. <strong>Harmful or offensive contact</strong><br>3. <strong>With plaintiff's person</strong> (включает то, что к ней близко: одежда, предмет в руке, лошадь)<br>4. <strong>Causation</strong><br><br>Вред не обязателен — достаточно offensive contact. Плевок в лицо — battery. Тест offensiveness: оскорбил бы ordinary reasonable person. Не требуется actual consciousness of contact в момент (спящий человек может быть жертвой).</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Assault — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Элементы</div>
    <div class="concept-card-body">1. <strong>Intent</strong> cause apprehension immediate harmful/offensive contact<br>2. <strong>Reasonable apprehension</strong> by plaintiff<br>3. <strong>Of imminent</strong> contact<br>4. <strong>Causation</strong><br><br><strong>Imminent</strong> — критично. Угроза «я тебя ударю завтра» — не assault. Нужна немедленность.<br><strong>Apprehension ≠ fear.</strong> Даже боец MMA может быть «apprehensive» о contact, хотя не боится.<br><strong>Words alone</strong> обычно недостаточно. Нужен overt act или threatening gesture. Исключение: words + circumstances, делающие immediate threat.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">False Imprisonment — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Элементы</div>
    <div class="concept-card-body">1. <strong>Intent</strong> confine plaintiff<br>2. <strong>Actual confinement</strong> в bounded area<br>3. <strong>Plaintiff aware</strong> или harmed (если ребёнок / бессознательный)<br><br><strong>Методы confinement:</strong> physical barriers, physical force, threats, invalid assertion authority, keeping property (заложник чемодана). <strong>Не confinement:</strong> моральное давление, если есть reasonable means escape.<br><br><strong>Shopkeeper's Privilege (Merchant's Privilege):</strong> продавец может задержать подозреваемого в краже на <em>reasonable time</em> с <em>reasonable force</em> на premises по <em>reasonable suspicion</em>. California Penal Code § 490.5.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Intentional Infliction of Emotional Distress (IIED) — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Элементы (Restatement § 46)</div>
    <div class="concept-card-body">1. <strong>Extreme and outrageous conduct</strong> — «beyond all bounds of decency»<br>2. <strong>Intent or recklessness</strong><br>3. <strong>Causation</strong><br>4. <strong>Severe emotional distress</strong><br><br>Очень высокий порог: оскорбления, insults, грубость — обычно недостаточно. Типичные примеры IIED: false accusations of crime/prostitution, фальшивое сообщение о смерти родственника, длительная систематическая травля.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Vulnerable Plaintiffs</div>
    <div class="concept-card-body">Если ответчик знает об особой уязвимости истца (беременность, известное психическое состояние) — порог outrageous может быть ниже. Особо защищаемые: children, elderly, pregnant women.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Third Party Recovery</div>
    <div class="concept-card-body">IIED требует, чтобы outrageous conduct был direct at plaintiff. НО bystander может recover, если:<br>• Present at scene<br>• Close family member victim<br>• Defendant knew bystander present<br>Например: зверское убийство прямо на глазах ребёнка жертвы.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Property Torts</div>
  <div class="concept-card">
    <div class="concept-card-title">Trespass to Land</div>
    <div class="concept-card-body">Intent <strong>совершить физическое вторжение</strong> на чужую землю. Не требуется знания, что земля чужая. Не требуется actual harm. Intrusion может быть: личное присутствие, бросание объекта, запуск проекта (чужая собака, чужой beam). Даже минимальное вторжение actionable — nominal damages.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Trespass to Chattels</div>
    <div class="concept-card-body">Intentional interference с чужим personal property, causing dispossession or damage. Менее серьёзное, чем conversion. Remedy — actual damages (цена ремонта, стоимость loss of use).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Conversion</div>
    <div class="concept-card-body">Существенное interference с чужим personal property, достаточное, чтобы заставить ответчика заплатить полную стоимость. Тест: серьёзность extent ответчика's dominion. Factor analysis — длительность, namerений, fraud, изменения состояния. Remedy: full value при time of conversion (forced sale), или return + damages.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Defamation — детально</div>
  <div class="concept-card">
    <div class="concept-card-title">Элементы (common law)</div>
    <div class="concept-card-body">1. <strong>Defamatory statement</strong> — unto harm reputation<br>2. <strong>Of and concerning plaintiff</strong><br>3. <strong>Published</strong> to third party<br>4. <strong>Damages</strong> (presumed в libel, required в slander)<br><br>Public figures must also prove:<br>5. <strong>Falsity</strong><br>6. <strong>Fault</strong> — actual malice for public figures, negligence for private plaintiffs on matters of public concern</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Libel vs Slander</div>
    <div class="concept-card-body"><strong>Libel</strong> — written, broadcast, permanent form. Damages presumed.<br><strong>Slander</strong> — spoken, ephemeral. Damages must be proven, кроме slander per se:<br>• Crime of moral turpitude<br>• Loathsome disease (historically venereal)<br>• Business / profession incompetence<br>• Unchastity of a woman (anachronistic, но в books ещё)<br><br>Для slander per se damages presumed.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Constitutional Limitations — First Amendment</div>
    <div class="concept-card-body"><strong>NY Times v. Sullivan (1964):</strong> public official must prove <em>actual malice</em> — знание о falsity или reckless disregard. <strong>Curtis Publishing v. Butts (1967):</strong> расширено на public figures. <strong>Gertz v. Welch (1974):</strong> private individual на matter of public concern — штат может устанавливать любой fault standard, но не strict liability; presumed/punitive damages требуют actual malice.<br><br>California имеет широкий <strong>anti-SLAPP statute</strong> (CCP § 425.16) — защита от frivolous defamation suits, направленных против public speech.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Privileges (defenses)</div>
    <div class="concept-card-body"><strong>Absolute privilege</strong> — полная immunity:<br>• Judicial proceedings (witnesses, attorneys, judges)<br>• Legislative proceedings<br>• Executive officials в their duties<br>• Husband/wife communications<br><br><strong>Qualified privilege</strong> — может быть lost при malice:<br>• Communications between people with common interest (employers giving references)<br>• Fair reporting of public proceedings<br>• Fair comment on matters of public interest</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Invasion of Privacy — четыре torts</div>
  <div class="concept-card">
    <div class="concept-card-title">1. Appropriation of Name or Likeness</div>
    <div class="concept-card-body">Commercial use чужого имени или image без permission. California: Cal. Civ. Code § 3344 (for living persons) + Cal. Civ. Code § 3344.1 (for deceased, Astaire Act) — одни из самых сильных в США. Включает «right of publicity».</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Intrusion upon Seclusion</div>
    <div class="concept-card-body">Intentional intrusion в personal affairs в manner highly offensive. Включает wiretapping, peeping, hacking. Не требуется publication. California Constitution Art. I § 1 усиливает это.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Public Disclosure of Private Facts</div>
    <div class="concept-card-body">Publication of private facts, highly offensive to reasonable person, not of legitimate public concern. Даже true facts. Напряжение с First Amendment — newsworthiness usually protects media.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">4. False Light</div>
    <div class="concept-card-body">Publication ставит истца в ложное public light, highly offensive. Похоже на defamation, но не требуется reputation damage — только offensiveness. Некоторые штаты не признают (включают в defamation). California признаёт.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Intent в intentional torts — intent to act, not to harm</div>
    <div class="hbox-text">Врач делает операцию без informed consent — намеренно сделал contact, даже если хотел помочь. Battery. Intent — к акту, не к вреду.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Practical joke defense не работает</div>
    <div class="hbox-text">«Я только пошутил» — не защита. Если intended contact, knew or should have known он offensive — battery.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: Conditional threats в assault</div>
    <div class="hbox-text">«Если ты не уйдёшь, я тебя ударю» — обычно не assault (ты можешь избежать, уйдя). НО если ответчик не имеет права ставить условие («отдай кошелёк или ударю») — assault имеет место.</div>
  </div>
</div>`
      },
      {
        title: 'Defenses to Torts: защита от деликтных исков',
        content: `
<div class="l-section">
  <div class="l-section-label">Основные защитные доктрины</div>
  <div class="concept-card">
    <div class="concept-card-title">Consent <span class="concept-card-en">Согласие</span></div>
    <div class="concept-card-body">Пострадавший дал согласие на действие, которое иначе было бы torts. Участие в контактном спорте — согласие на обычные контакты игры. Согласие должно быть добровольным, информированным и в пределах допустимого.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Self-Defense <span class="concept-card-en">Самооборона</span></div>
    <div class="concept-card-body">Разумная сила для защиты от угрозы физического вреда. Сила должна быть пропорциональна угрозе. Deadly force допустима только против угрозы смерти или тяжкого вреда здоровью.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Comparative Negligence <span class="concept-card-en">Сравнительная небрежность</span></div>
    <div class="concept-card-body">Калифорния использует <strong>pure comparative negligence</strong>: даже если истец на 99% виновен сам, он всё равно может получить 1% от damages. Большинство штатов — modified (если больше 50% вины истца — иск отклоняется).</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'constitutional',
    name: 'Constitutional Law',
    icon: '🏛️',
    color: 'var(--purple)',
    desc: 'Конституция, поправки, судебный контроль и права граждан',
    lessons: [
      {
        title: 'Конституция США: структура и принципы',
        content: `
<div class="l-section">
  <div class="l-section-label">Документ, которому 237 лет</div>
  <p class="l-text">Конституция США принята в 1787 году, ратифицирована в 1788-м, вступила в силу в 1789-м. 4 543 слова в оригинале — один из кратчайших конституционных документов в мире. Но через 200+ лет прецедентов она означает несравнимо больше, чем написано на бумаге.</p>
  <div class="hbox gold">
    <div class="hbox-label">Структура</div>
    <div class="hbox-text">
      <strong>Preamble</strong> — преамбула («We the People...»)<br>
      <strong>Article I</strong> — законодательная власть (Конгресс)<br>
      <strong>Article II</strong> — исполнительная власть (Президент)<br>
      <strong>Article III</strong> — судебная власть (суды)<br>
      <strong>Articles IV-VII</strong> — федерализм, поправки, ратификация<br>
      <strong>27 Amendments</strong> — первые 10 (Bill of Rights, 1791) + последующие
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Bill of Rights — первые 10 поправок</div>
  <table class="comp-table">
    <tr><th>Поправка</th><th class="ru">Защищает</th><th>Важность для Bar</th></tr>
    <tr><td>1st</td><td class="ru">Свобода слова, религии, прессы, собраний</td><td>★★★★★</td></tr>
    <tr><td>4th</td><td class="ru">Защита от необоснованных обысков и арестов</td><td>★★★★★</td></tr>
    <tr><td>5th</td><td class="ru">Право не свидетельствовать против себя, due process, double jeopardy</td><td>★★★★★</td></tr>
    <tr><td>6th</td><td class="ru">Право на скорый суд, присяжных, адвоката</td><td>★★★★☆</td></tr>
    <tr><td>8th</td><td class="ru">Запрет жестоких и необычных наказаний</td><td>★★★☆☆</td></tr>
    <tr><td>14th</td><td class="ru">Due process + equal protection (применяет BOR к штатам)</td><td>★★★★★</td></tr>
  </table>
</div><div class="l-section">
  <div class="l-section-label">Consent — детальный разбор</div>
  <div class="concept-card">
    <div class="concept-card-title">Express vs Implied Consent</div>
    <div class="concept-card-body"><strong>Express consent</strong> — словами или письменно.<br><strong>Implied-in-fact consent</strong> — поведение. Пассажир в метро consents to нормальные толчки. Пациент, подставляющий руку под укол — consents.<br><strong>Implied-in-law consent</strong> — emergency doctrine. Пациент без сознания — surgeon может действовать; consent подразумевается.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Когда consent недействительна</div>
    <div class="concept-card-body"><strong>1. Duress / fraud</strong> — consent под принуждением или обманом не действительна.<br><strong>2. Mistake, known to defendant</strong> — врач знает, что пациент не понимает риски.<br><strong>3. Capacity</strong> — minors, intoxicated, mentally incapacitated могут не иметь capacity.<br><strong>4. Exceeding scope</strong> — consented к одной операции, хирург сделал другую — no consent к extra. Kennedy v. Parrott (1956) — surgeon нашёл проблему во время операции и починил. Court: implied consent в emergency.<br><strong>5. Illegal acts</strong> — majority: consent to illegal act not valid (вы не можете consent к prizefight в штате, где fighting illegal). Minority: consent valid.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Self-Defense — детали</div>
  <div class="concept-card">
    <div class="concept-card-title">Требования для валидной самообороны</div>
    <div class="concept-card-body">1. <strong>Reasonable belief</strong> of imminent threat — объективный тест. Даже если belief ошибочен, если reasonable — защита валидна.<br>2. <strong>Proportional force</strong> — сила должна соответствовать угрозе. Нельзя стрелять из дробовика за толчок.<br>3. <strong>Not aggressor</strong> — инициатор конфликта не может воспользоваться, пока не withdraw и сообщит об этом.<br><br><strong>Deadly force</strong> допустим только против угрозы death или serious bodily harm. Защита собственности — обычно не deadly force.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Duty to Retreat</div>
    <div class="concept-card-body"><strong>Retreat rule (minority):</strong> duty retreat before using deadly force, если safe retreat возможен. Исключение: в своём доме (castle doctrine).<br><br><strong>Stand your ground (majority, includes California with nuances):</strong> нет duty retreat, если законно находишься. California — по common law не требует retreat (People v. Collins, 1961), Penal Code § 197 и presumption «castle doctrine» для дома.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Defense of Others</div>
    <div class="concept-card-body">Можно защищать других на тех же условиях, что и себя. <strong>Majority:</strong> защитник «стоит в ботинках» защищаемого — если тот не имел права на self-defense, защитник тоже не защищён. <strong>Minority (Restatement view):</strong> reasonable mistake защитника — OK.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Defense of Property</div>
    <div class="concept-card-body">Reasonable force — да. <strong>Deadly force — почти никогда.</strong> Classic case: Katko v. Briney (1971) — spring gun в заброшенном доме ранил trespasser. Court: нельзя использовать deadly force, которое не имел бы права использовать лично.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Necessity</div>
  <div class="concept-card">
    <div class="concept-card-title">Public Necessity</div>
    <div class="concept-card-body">Действия для защиты <strong>public interest</strong> от угрозы. Полная защита — никакой компенсации. Пример: разрушение здания, чтобы остановить распространение пожара. Surocco v. Geary (1853, Cal.) — mayor разрушил дом, чтобы сдержать пожар Сан-Франциско. No liability.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Private Necessity</div>
    <div class="concept-card-body">Действия для защиты <strong>собственных или чужих частных интересов</strong>. <strong>Частичная защита:</strong> privilege to act, но должен компенсировать actual damages. Vincent v. Lake Erie (1910) — судно в шторм пришвартовалось к чужому пирсу. No trespass, но оплата за урон пирсу.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Contributory vs Comparative Negligence</div>
  <div class="hbox red">
    <div class="hbox-label">Contributory Negligence — traditional rule</div>
    <div class="hbox-text">Любая negligence истца — <strong>полный барьер</strong> recovery. Даже 1% вины — нет взыскания. Сохранилось только в 4 штатах + D.C. (Alabama, Maryland, North Carolina, Virginia, D.C.). <strong>Last Clear Chance doctrine</strong> смягчает: если ответчик имел последний шанс избежать, barrier снимается.</div>
  </div>
  <div class="hbox blue">
    <div class="hbox-label">Pure Comparative Negligence — California</div>
    <div class="hbox-text">Li v. Yellow Cab (1975). Истец recovers, <strong>даже если на 99% виновен</strong>. Damages уменьшаются пропорционально. California — pure. Другие штаты: Alaska, Arizona, Florida, Louisiana, Mississippi, Missouri, NM, NY, Rhode Island, South Dakota, Washington.</div>
  </div>
  <div class="hbox gold">
    <div class="hbox-label">Modified Comparative Negligence</div>
    <div class="hbox-text">Истец recovers, <strong>только если его fault ≤ 50% (12 штатов) или &lt; 50% (21 штат)</strong>. Threshold states: 50% rule (Colorado, Georgia) — должна быть less than defendant; 51% rule (большинство) — can be equal but not more.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Assumption of Risk</div>
  <div class="concept-card">
    <div class="concept-card-title">Express Assumption</div>
    <div class="concept-card-body">Письменная или устная waiver. Типичный пример: liability waiver at ski resort, gym. Валидна, если: ясна, conspicuous, не противоречит public policy. California жёстко ограничивает: Tunkl v. Regents (1963) — шесть факторов для признания exculpatory agreement против public policy. Med care, public utilities — обычно нельзя exculpate.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Implied Assumption — primary vs secondary</div>
    <div class="concept-card-body"><strong>Primary:</strong> defendant owed no duty, потому что истец добровольно участвовал в деятельности с inherent risk. Complete defense. Пример: удар пакая в бейсбольном матче. Knight v. Jewett (1992, Cal.) — в California primary assumption of risk выжил как отдельная доктрина, особенно для sports.<br><br><strong>Secondary:</strong> истец добровольно столкнулся с risk, создал by defendant's negligence. В California это <strong>слилось с comparative negligence</strong>. Уже не complete defense.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Statutes of Limitations и Immunities</div>
  <div class="concept-card">
    <div class="concept-card-title">SOL для torts в California</div>
    <div class="concept-card-body">• <strong>Personal injury:</strong> 2 года (CCP § 335.1)<br>• <strong>Property damage:</strong> 3 года (CCP § 338)<br>• <strong>Defamation:</strong> 1 год (CCP § 340(c))<br>• <strong>Medical malpractice:</strong> 3 года от injury or 1 год от discovery (whichever earlier) (CCP § 340.5)<br>• <strong>Fraud:</strong> 3 года от discovery (CCP § 338(d))<br><br><strong>Discovery Rule:</strong> SOL runs с момента, когда истец знал или должен был знать about injury и cause.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Government Immunity — Tort Claims Act</div>
    <div class="concept-card-body">Sovereign immunity волевая по умолчанию. <strong>California Tort Claims Act</strong> (Cal. Gov. Code § 810 et seq.) — waiver с ограничениями. Key: должен подать <em>administrative claim</em> within <strong>6 months</strong> of injury (personal injury, death) или 1 year (property). Если пропустили — claim barred. Это критично для любого иска против government entity в California.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Federal Tort Claims Act</div>
    <div class="concept-card-body">FTCA waives federal immunity для negligent acts federal employees в scope of employment. Исключения: intentional torts (кроме law enforcement), discretionary functions. Administrative claim в agency within 2 years, suit within 6 months after denial.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Joint and Several Liability</div>
  <div class="concept-card">
    <div class="concept-card-title">Classic rule</div>
    <div class="concept-card-body">Если двое или более ответчиков responsible — каждый liable for 100% damages. Истец может recover от любого. Defendants then share damages among themselves через contribution.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">California Proposition 51 (1986) — Fair Responsibility Act</div>
    <div class="concept-card-body">Критически важно для Cal Bar. Cal. Civ. Code § 1431.2:<br>• <strong>Economic damages:</strong> joint and several сохраняется<br>• <strong>Non-economic damages</strong> (pain and suffering): <strong>several only</strong> — каждый отвечает только за свою долю вины<br><br>Это модифицированный joint and several, уникальный для California. На эссе по Torts в California это постоянная тема.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Exam Traps</div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 1: Consent по сфере применения</div>
    <div class="hbox-text">Боксёр consents to punches в голову. Не consents к нападению ножом. Scope of consent — по конкретной деятельности.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 2: Self-defense — aggressor rule</div>
    <div class="hbox-text">Initial aggressor не может использовать self-defense, пока не withdraw и communicated withdrawal. Есть исключение: если victim escalated — от punch к deadly force — первоначальный aggressor снова может защищаться против deadly force.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 3: California comparative для strict liability</div>
    <div class="hbox-text">California применяет comparative fault даже к strict products liability (Daly v. GM, 1978). Не intuitive — «strict liability» звучит как «no fault», но California всё равно distributes fault между parties.</div>
  </div>
  <div class="hbox red">
    <div class="hbox-label">Ловушка 4: Prop 51 в California</div>
    <div class="hbox-text">На California Bar эссе по Torts: если есть multiple defendants и non-economic damages (pain and suffering) — обязательно упомянуть Prop 51 и several liability только на non-economic. Забыть = потерять баллы.</div>
  </div>
</div>`
      },
      {
        title: 'Equal Protection: три уровня проверки законов',
        content: `
<div class="l-section">
  <div class="l-section-label">14-я поправка и равная защита</div>
  <p class="l-text">Equal Protection Clause запрещает штатам (и через 5-ю поправку — федеральному правительству) без достаточного основания относиться к разным группам людей по-разному. Суд применяет три различных стандарта проверки в зависимости от того, какая группа затронута.</p>
  <div class="concept-card">
    <div class="concept-card-title">Rational Basis <span class="concept-card-en">Разумное основание</span></div>
    <div class="concept-card-body">Применяется по умолчанию. Закон выдерживает проверку, если есть <strong>любое разумное основание</strong> для дифференциации, связанное с законной государственной целью. Бремя — на истце. Суд почти всегда поддерживает закон. Применяется: экономические различия, возраст, инвалидность.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Intermediate Scrutiny <span class="concept-card-en">Промежуточная проверка</span></div>
    <div class="concept-card-body">Закон должен <strong>существенно продвигать важную государственную цель</strong>. Бремя — на государстве. Применяется: пол (gender), незаконнорождённость. Примерно 50/50 — суд иногда отменяет, иногда поддерживает.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Strict Scrutiny <span class="concept-card-en">Строгая проверка</span></div>
    <div class="concept-card-body">Закон должен быть <strong>необходим для достижения насущной государственной цели</strong>. Бремя — на государстве. Применяется: раса, национальное происхождение, гражданство (federal), право голоса, свобода передвижения. Закон почти всегда признаётся неконституционным.</div>
  </div>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">A state law requires that all judges must retire at age 70. A 68-year-old judge challenges the law under the Equal Protection Clause. What standard of review applies?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','A')"><span class="bar-option-letter">A</span> Rational basis, because age is not a suspect or quasi-suspect classification</div>
      <div class="bar-option" onclick="selectOption(this,'B','A')"><span class="bar-option-letter">B</span> Intermediate scrutiny, because age discrimination affects employment</div>
      <div class="bar-option" onclick="selectOption(this,'C','A')"><span class="bar-option-letter">C</span> Strict scrutiny, because the right to work is fundamental</div>
      <div class="bar-option" onclick="selectOption(this,'D','A')"><span class="bar-option-letter">D</span> Strict scrutiny, because judges are a protected class</div>
    </div>
    <div class="bar-answer" id="ans-3-1">
      <strong>Правильный ответ: A.</strong> Возраст — не suspect class и не quasi-suspect class. Право работать после 70 лет — не fundamental right. Поэтому применяется рациональный базис. Государству достаточно показать любое разумное основание: обновление состава судей, продвижение молодых юристов, физическая/умственная нагрузка работы. Закон, скорее всего, выдержит проверку.
    </div>
  </div>
</div>`
      },
      {
        title: 'Freedom of Speech: пределы свободы слова',
        content: `
<div class="l-section">
  <div class="l-section-label">1-я поправка и её пределы</div>
  <p class="l-text">1-я поправка запрещает Конгрессу (и через 14-ю — штатам) ограничивать свободу слова. Но это не абсолют — существуют категории речи, не защищённые Конституцией, и допустимые <span class="l-en">time, place, manner restrictions</span>.</p>
  <div class="concept-card">
    <div class="concept-card-title">Незащищённая речь</div>
    <div class="concept-card-body">Государство может полностью запрещать: <strong>incitement</strong> (подстрекательство к неминуемому незаконному действию), <strong>fighting words</strong>, <strong>true threats</strong>, <strong>obscenity</strong>, <strong>defamation</strong>, <strong>fraud</strong>, <strong>child pornography</strong>.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Content-based vs. Content-neutral restrictions</div>
    <div class="concept-card-body"><strong>Content-based</strong>: ограничение из-за содержания речи → strict scrutiny. <strong>Content-neutral</strong>: ограничение независимо от содержания (время, место, форма) → intermediate scrutiny, если оставляет открытыми достаточные альтернативные каналы.</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'criminal',
    name: 'Criminal Law',
    icon: '🔒',
    color: 'var(--red)',
    desc: 'Уголовное право — mens rea, actus reus, преступления и защита',
    lessons: [
      {
        title: 'Основы уголовного права: mens rea и actus reus',
        content: `
<div class="l-section">
  <div class="l-section-label">Два элемента любого преступления</div>
  <p class="l-text">Уголовное право США требует доказательства двух элементов для большинства преступлений: <span class="l-term">actus reus</span> (виновное действие) и <span class="l-term">mens rea</span> (виновный умысел). Это похоже на российское деление на объективную и субъективную стороны, но американская классификация mens rea значительно детальнее.</p>
  <div class="hbox gold">
    <div class="hbox-label">Четыре уровня mens rea (Model Penal Code)</div>
    <div class="hbox-text">
      <strong>Purpose (purposely)</strong> — осознанное стремление к результату. Самая тяжёлая форма вины.<br>
      <strong>Knowledge (knowingly)</strong> — осознание того, что действие практически наверняка приведёт к результату.<br>
      <strong>Recklessness (recklessly)</strong> — осознанное игнорирование существенного и неоправданного риска.<br>
      <strong>Negligence (negligently)</strong> — должен был осознавать риск, но не осознавал.
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Strict Liability Crimes</div>
  <div class="hbox red">
    <div class="hbox-label">Преступления без mens rea</div>
    <div class="hbox-text">Некоторые преступления не требуют доказательства умысла — достаточно самого действия. Как правило, это regulatory offenses: продажа алкоголя несовершеннолетним, нарушение правил дорожного движения, экологические нарушения. Строго ограниченная категория.</div>
  </div>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">Dan fires a gun into a crowded theater, thinking it unloaded, and kills Victor. Under the Model Penal Code, what is Dan's most likely culpable mental state with respect to Victor's death?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','C')"><span class="bar-option-letter">A</span> Purposely, because he pulled the trigger</div>
      <div class="bar-option" onclick="selectOption(this,'B','C')"><span class="bar-option-letter">B</span> Knowingly, because he knew someone could be hit</div>
      <div class="bar-option" onclick="selectOption(this,'C','C')"><span class="bar-option-letter">C</span> Recklessly or negligently, depending on what Dan knew</div>
      <div class="bar-option" onclick="selectOption(this,'D','C')"><span class="bar-option-letter">D</span> No culpability, because he lacked intent to kill</div>
    </div>
    <div class="bar-answer" id="ans-4-0">
      <strong>Правильный ответ: C.</strong> Дан не хотел убить (не purposely) и, возможно, не знал о заряженности (не knowingly в отношении смерти). Но стрелять в толпу даже «незаряженным» оружием — это осознанное игнорирование риска (recklessness). Если же обычный человек должен был проверить патроны — negligence. В зависимости от юрисдикции это может быть manslaughter (reckless) или criminally negligent homicide.
    </div>
  </div>
</div>`
      },
      {
        title: 'Homicide: классификация убийств в американском праве',
        content: `
<div class="l-section">
  <div class="l-section-label">Сложная иерархия</div>
  <p class="l-text">Американское уголовное право детально классифицирует убийства. Правила различаются между штатами и MPC, но базовая структура схожа.</p>
  <table class="comp-table">
    <tr><th>Преступление</th><th class="ru">Mens rea</th><th>Пример</th></tr>
    <tr><td>First Degree Murder</td><td class="ru">Premeditation + deliberation (умысел + обдуманность)</td><td>Запланированное убийство</td></tr>
    <tr><td>Second Degree Murder</td><td class="ru">Intent to kill или depraved heart (крайнее безразличие)</td><td>Убийство в порыве страсти без охлаждения</td></tr>
    <tr><td>Voluntary Manslaughter</td><td class="ru">Intent to kill, но при provocation (провокации)</td><td>Убийство при обнаружении измены</td></tr>
    <tr><td>Involuntary Manslaughter</td><td class="ru">Recklessness или criminal negligence</td><td>Вождение в нетрезвом состоянии</td></tr>
  </table>
  <div class="hbox blue">
    <div class="hbox-label">Felony Murder Rule</div>
    <div class="hbox-text">Если смерть наступает в ходе совершения определённых тяжких преступлений (felonies) — robbery, rape, arson, kidnapping — виновный в felony несёт ответственность за murder независимо от умысла на убийство. Даже если убил соучастник или полицейский.</div>
  </div>
</div>`
      },
      {
        title: 'Defenses в уголовном праве: самооборона, необходимость, невменяемость',
        content: `
<div class="l-section">
  <div class="l-section-label">Аффирмативные защиты</div>
  <div class="concept-card">
    <div class="concept-card-title">Self-Defense <span class="concept-card-en">Самооборона</span></div>
    <div class="concept-card-body">Лицо вправе применить разумную силу для защиты от неминуемого неправомерного нападения. Deadly force допустима только против угрозы смертью или тяжким вредом. <strong>Duty to retreat</strong>: в некоторых штатах нужно отступить, если возможно. Калифорния — «Stand Your Ground» принцип: не обязан отступать в своём жилище.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Insanity <span class="concept-card-en">Невменяемость</span></div>
    <div class="concept-card-body">Четыре теста в разных штатах. <strong>M'Naghten</strong> (наиболее распространён): обвиняемый не знал, что делает, или не понимал, что это неправильно. <strong>MPC test</strong>: обвиняемый был неспособен оценить криминальность своего поведения или подчинить его требованиям закона. California: M'Naghten.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Necessity <span class="concept-card-en">Крайняя необходимость</span></div>
    <div class="concept-card-body">Обвиняемый нарушил закон, чтобы предотвратить больший вред. Аналог российской крайней необходимости (ст. 39 УК РФ). Недоступна при убийстве в большинстве юрисдикций.</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'property',
    name: 'Real Property',
    icon: '🏠',
    color: 'var(--green)',
    desc: 'Право собственности на недвижимость — estates, easements, mortgages',
    lessons: [
      {
        title: 'Estates in Land: типы права собственности на землю',
        content: `
<div class="l-section">
  <div class="l-section-label">Феодальные корни</div>
  <p class="l-text">Американское имущественное право выросло из английского феодального права 11 века. Многие его концепции архаичны, но живы и проверяются на Bar Exam. Главная идея: «право на землю» — не одна вещь, а набор различных прав (estate) разной полноты и продолжительности.</p>
  <div class="concept-card">
    <div class="concept-card-title">Fee Simple Absolute <span class="concept-card-en">Полная собственность</span></div>
    <div class="concept-card-body">Наиболее полное и постоянное право. Можно продать, заложить, передать по наследству, уничтожить. Формула в документе: «to A and his heirs». В современных документах — просто «to A». Ближайший аналог — ст. 209 ГК РФ.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Fee Simple Defeasible <span class="concept-card-en">Собственность с условием</span></div>
    <div class="concept-card-body">Полная собственность, которая может прекратиться при определённом условии. <strong>Fee Simple Determinable</strong>: «to A so long as used for school purposes» — автоматически возвращается к дарителю. <strong>Fee Simple Subject to Condition Subsequent</strong>: «to A, but if not used as school, grantor may re-enter» — не автоматически, нужно действие.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Life Estate <span class="concept-card-en">Пожизненное право</span></div>
    <div class="concept-card-body">Право пользования имуществом на время жизни держателя (или другого лица). После смерти имущество переходит к remainder (следующему по цепочке). Держатель жизненного estate не может отчуждать больше, чем имеет: не может продать fee simple.</div>
  </div>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">Owner conveys land "to School District so long as the premises are used for educational purposes." The school district later converts the property to a parking lot. What happens to title?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','A')"><span class="bar-option-letter">A</span> Title automatically reverts to Owner or Owner's heirs</div>
      <div class="bar-option" onclick="selectOption(this,'B','A')"><span class="bar-option-letter">B</span> School District retains title but must pay damages</div>
      <div class="bar-option" onclick="selectOption(this,'C','A')"><span class="bar-option-letter">C</span> Owner must file a lawsuit to reclaim the property</div>
      <div class="bar-option" onclick="selectOption(this,'D','A')"><span class="bar-option-letter">D</span> The condition is void and School District has fee simple absolute</div>
    </div>
    <div class="bar-answer" id="ans-5-0">
      <strong>Правильный ответ: A.</strong> Формулировка «so long as» создаёт Fee Simple Determinable. Слова «so long as», «while», «during», «until» — маркеры этого estate. При нарушении условия право <strong>автоматически</strong> возвращается к дарителю (или его наследникам) — это называется possibility of reverter. Не нужно судебного решения или каких-либо действий со стороны дарителя.
    </div>
  </div>
</div>`
      },
      {
        title: 'Landlord-Tenant Law: аренда недвижимости',
        content: `
<div class="l-section">
  <div class="l-section-label">Четыре вида аренды</div>
  <table class="comp-table">
    <tr><th>Вид</th><th class="ru">Характеристика</th><th>Прекращение</th></tr>
    <tr><td>Tenancy for Years</td><td class="ru">Фиксированный срок (1 год, 5 лет)</td><td>Автоматически в конце срока</td></tr>
    <tr><td>Periodic Tenancy</td><td class="ru">Автоматически возобновляется (месяц к месяцу)</td><td>Уведомление: срок = период (max 6 мес.)</td></tr>
    <tr><td>Tenancy at Will</td><td class="ru">Без срока, по воле обеих сторон</td><td>Любая сторона в любое время</td></tr>
    <tr><td>Tenancy at Sufferance</td><td class="ru">Арендатор остался после окончания срока</td><td>Арендодатель выбирает: eviction или новая аренда</td></tr>
  </table>
</div>
<div class="l-section">
  <div class="l-section-label">Права и обязанности в Калифорнии</div>
  <div class="hbox blue">
    <div class="hbox-label">Implied Warranty of Habitability</div>
    <div class="hbox-text">Арендодатель обязан поддерживать жильё в пригодном для проживания состоянии. В Калифорнии — одна из самых сильных защит арендаторов в США. Если нарушено: арендатор может удержать аренду, расторгнуть договор или потребовать компенсацию.</div>
  </div>
</div>`
      },
      {
        title: 'Mortgages: ипотека в американском праве',
        content: `
<div class="l-section">
  <div class="l-section-label">Основы</div>
  <p class="l-text"><span class="l-term">Mortgage</span> — обеспечительный интерес в недвижимости. Заёмщик (<span class="l-en">mortgagor</span>) передаёт кредитору (<span class="l-en">mortgagee</span>) обеспечительный интерес в своей недвижимости. При непогашении долга кредитор может обратить взыскание.</p>
  <div class="concept-card">
    <div class="concept-card-title">Foreclosure <span class="concept-card-en">Обращение взыскания</span></div>
    <div class="concept-card-body">При дефолте кредитор запускает foreclosure — процедуру продажи недвижимости для погашения долга. Калифорния допускает внесудебное (<em>non-judicial</em>) взыскание через доверенное лицо (deed of trust). Должник имеет <strong>equity of redemption</strong> — право выкупить до продажи.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Deficiency Judgment <span class="concept-card-en">Взыскание недостачи</span></div>
    <div class="concept-card-body">Если продажная цена меньше долга — кредитор может потребовать разницу с должника лично. Калифорния ограничивает этот инструмент: по некоторым ипотекам на жильё deficiency judgment запрещён.</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'evidence',
    name: 'Evidence',
    icon: '🔍',
    color: 'var(--cyan)',
    desc: 'Правила доказательств — допустимость, hearsay, privileges',
    lessons: [
      {
        title: 'Federal Rules of Evidence: основы допустимости',
        content: `
<div class="l-section">
  <div class="l-section-label">Фундамент</div>
  <p class="l-text">Американская система допустимости доказательств принципиально отличается от российской. В РФ суд сам определяет, что относимо и допустимо. В США существует детальный свод правил — <span class="l-term">Federal Rules of Evidence</span> (FRE) — принятый в 1975 году.</p>
  <div class="hbox gold">
    <div class="hbox-label">Три условия допустимости</div>
    <div class="hbox-text">
      <strong>Relevance</strong> — доказательство должно делать спорный факт более или менее вероятным.<br>
      <strong>No exclusionary rule</strong> — не должно попадать под правило исключения (hearsay, privilege и др.).<br>
      <strong>Probative value не перевешивается unfair prejudice</strong> — FRE 403: суд может исключить даже допустимое доказательство, если вред от него перевешивает пользу.
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Виды свидетельских показаний</div>
  <div class="concept-card">
    <div class="concept-card-title">Lay Witness <span class="concept-card-en">Обычный свидетель</span></div>
    <div class="concept-card-body">Может давать показания только о том, что сам наблюдал. Мнение допустимо лишь если основано на личном наблюдении и помогает понять показания или установить факт.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Expert Witness <span class="concept-card-en">Эксперт</span></div>
    <div class="concept-card-body">Может давать мнения в своей области. Стандарт допустимости (Daubert test): теория должна быть проверяемой, иметь известный уровень ошибки, прошедшей peer review, принятой в научном сообществе.</div>
  </div>
</div>`
      },
      {
        title: 'Hearsay: показания с чужих слов',
        content: `
<div class="l-section">
  <div class="l-section-label">Правило и его логика</div>
  <p class="l-text"><span class="l-term">Hearsay</span> — внесудебное заявление, представленное в качестве доказательства правдивости его содержания. По умолчанию — недопустимо. Логика: суд не может проверить достоверность, заявитель не под присягой, нет перекрёстного допроса.</p>
  <div class="hbox red">
    <div class="hbox-label">Формула</div>
    <div class="hbox-text">Hearsay = внесудебное заявление + предлагается для доказательства правдивости его содержания. Если заявление предлагается для иной цели (напр., доказать, что слова были произнесены, или что слушатель узнал об опасности) — это НЕ hearsay.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Важнейшие исключения</div>
  <table class="comp-table">
    <tr><th>Исключение</th><th class="ru">Условия</th></tr>
    <tr><td>Present Sense Impression</td><td class="ru">Заявление сделано во время или сразу после события, которое оно описывает</td></tr>
    <tr><td>Excited Utterance</td><td class="ru">Заявление сделано под влиянием возбуждения от события</td></tr>
    <tr><td>Dying Declaration</td><td class="ru">Заявление о причине смерти, сделанное перед смертью при убеждении в её неизбежности</td></tr>
    <tr><td>Business Records</td><td class="ru">Регулярные записи, сделанные в ходе обычной деятельности в близкое к событию время</td></tr>
    <tr><td>Prior Inconsistent Statement</td><td class="ru">Прежние показания свидетеля под присягой, противоречащие нынешним</td></tr>
  </table>
</div>`
      }
    ]
  },
  {
    id: 'civpro',
    name: 'Civil Procedure',
    icon: '⚖️',
    color: 'var(--orange)',
    desc: 'Гражданский процесс — jurisdiction, pleading, discovery, trial',
    lessons: [
      {
        title: 'Subject Matter Jurisdiction: когда федеральный суд вправе рассматривать дело',
        content: `
<div class="l-section">
  <div class="l-section-label">Два основания юрисдикции</div>
  <p class="l-text">Федеральные суды — суды ограниченной юрисдикции. Они могут рассматривать дело только при наличии одного из двух оснований.</p>
  <div class="concept-card">
    <div class="concept-card-title">Federal Question Jurisdiction <span class="concept-card-en">Федеральный вопрос</span></div>
    <div class="concept-card-body">Дело возникает из Конституции, федерального закона или международного договора США. Нет минимальной суммы иска. Примеры: иммиграционные дела, патентные споры, нарушение гражданских прав по 42 USC §1983.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Diversity Jurisdiction <span class="concept-card-en">Различная гражданская принадлежность</span></div>
    <div class="concept-card-body">Стороны — граждане разных штатов (или иностранный гражданин против гражданина США) + сумма иска свыше $75,000. Полная диверсити: ни один из истцов не может быть гражданином того же штата, что и любой из ответчиков.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Personal Jurisdiction: юрисдикция над ответчиком</div>
  <div class="hbox blue">
    <div class="hbox-label">Minimum Contacts (International Shoe, 1945)</div>
    <div class="hbox-text">Суд штата может осуществлять юрисдикцию над внешним ответчиком, если у него есть «минимальные контакты» со штатом, и осуществление юрисдикции не противоречит «традиционным представлениям о справедливости». Ключевые вопросы: намеренно ли ответчик использовал преимущества штата? Был ли иск связан с этими контактами?</div>
  </div>
</div>`
      },
      {
        title: 'Pleading и Discovery: подача иска и раскрытие доказательств',
        content: `
<div class="l-section">
  <div class="l-section-label">Pleading Standards</div>
  <div class="concept-card">
    <div class="concept-card-title">Notice Pleading vs. Plausibility Pleading</div>
    <div class="concept-card-body">Исторически достаточно было «уведомления» о претензии. После Twombly (2007) и Iqbal (2009) — Верховный суд ввёл <strong>plausibility standard</strong>: факты должны давать «разумно обоснованное» основание полагать, что нарушение имело место. «Голые» утверждения без фактов отклоняются.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Discovery — раскрытие доказательств</div>
  <p class="l-text">Один из главных инструментов американского процесса. До суда стороны обязаны раскрыть друг другу доказательства и информацию. Это снижает неожиданности на суде и стимулирует мировое соглашение.</p>
  <table class="comp-table">
    <tr><th>Инструмент</th><th class="ru">Что это</th></tr>
    <tr><td>Interrogatories</td><td class="ru">Письменные вопросы, на которые другая сторона отвечает под присягой</td></tr>
    <tr><td>Depositions</td><td class="ru">Устные показания свидетеля под присягой вне суда, с протоколом</td></tr>
    <tr><td>Request for Production</td><td class="ru">Требование предоставить документы, электронные данные, вещественные доказательства</td></tr>
    <tr><td>Request for Admission</td><td class="ru">Требование признать или отрицать конкретные факты</td></tr>
  </table>
  <div class="hbox red">
    <div class="hbox-label">Attorney-Client Privilege в discovery</div>
    <div class="hbox-text">Конфиденциальная коммуникация адвоката и клиента защищена от раскрытия в discovery. Работа по делу (work product doctrine) также защищена. Исключение: crime-fraud exception.</div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'wills',
    name: 'Wills & Trusts',
    icon: '📜',
    color: 'var(--purple)',
    desc: 'Наследственное право, завещания и трасты',
    lessons: [
      {
        title: 'Wills: требования к действительному завещанию',
        content: `
<div class="l-section">
  <div class="l-section-label">Виды завещаний</div>
  <div class="concept-card">
    <div class="concept-card-title">Attested Will <span class="concept-card-en">Удостоверенное завещание</span></div>
    <div class="concept-card-body">Стандартное завещание. Требования: завещатель должен быть совершеннолетним и в здравом уме, завещание подписано, подписано двумя свидетелями в присутствии завещателя и друг друга. Свидетели не должны быть бенефициарами (иначе их доля аннулируется).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Holographic Will <span class="concept-card-en">Собственноручное завещание</span></div>
    <div class="concept-card-body">Написано и подписано полностью рукой завещателя. Не требует свидетелей. Калифорния признаёт holographic wills. На Bar Exam: если часть напечатана — могут быть проблемы.</div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Intestate Succession: смерть без завещания</div>
  <div class="hbox blue">
    <div class="hbox-label">Очерёдность наследников в Калифорнии</div>
    <div class="hbox-text">
      1. Супруг(а) и дети<br>
      2. Родители<br>
      3. Братья и сёстры<br>
      4. Дальние родственники<br>
      Если нет никого — имущество переходит штату (escheat).
    </div>
  </div>
</div>`
      },
      {
        title: 'Trusts: структура и виды',
        content: `
<div class="l-section">
  <div class="l-section-label">Три участника трастовых отношений</div>
  <p class="l-text">Траст — правовая конструкция, при которой одно лицо (trustee) держит имущество для пользы другого (beneficiary). Это разделение legal title и equitable title — концепция, полностью отсутствующая в российском праве.</p>
  <div class="hbox gold">
    <div class="hbox-label">Элементы действительного траста</div>
    <div class="hbox-text">
      <strong>Settlor</strong> — учредитель, имеющий дееспособность и намерение создать траст<br>
      <strong>Trustee</strong> — управляющий (может быть лицом или организацией)<br>
      <strong>Beneficiary</strong> — выгодоприобретатель, идентифицируемый или определимый<br>
      <strong>Trust property (res)</strong> — имущество, переданное в траст<br>
      <strong>Valid trust purpose</strong> — законная цель
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Виды трастов</div>
  <table class="comp-table">
    <tr><th>Вид</th><th class="ru">Особенности</th></tr>
    <tr><td>Revocable Living Trust</td><td class="ru">Учредитель может изменить или отменить при жизни. Позволяет избежать probate.</td></tr>
    <tr><td>Irrevocable Trust</td><td class="ru">Нельзя изменить. Налоговые преимущества. Защита от кредиторов.</td></tr>
    <tr><td>Testamentary Trust</td><td class="ru">Создаётся завещанием, вступает в силу после смерти.</td></tr>
    <tr><td>Charitable Trust</td><td class="ru">Для благотворительных целей. Не требует конкретных бенефициаров.</td></tr>
  </table>
</div>`
      }
    ]
  },
  {
    id: 'professional',
    name: 'Professional Responsibility',
    icon: '🎓',
    color: 'var(--gold)',
    desc: 'Профессиональная этика — ABA Model Rules и MPRE',
    lessons: [
      {
        title: 'ABA Model Rules: базовые обязанности адвоката',
        content: `
<div class="l-section">
  <div class="l-section-label">Источник правил</div>
  <p class="l-text">Professional Responsibility регулируется <span class="l-term">ABA Model Rules of Professional Conduct</span> — модельными правилами Американской ассоциации адвокатов. Большинство штатов приняли их с модификациями. Это отдельный экзамен — MPRE (Multistate Professional Responsibility Examination).</p>
</div>
<div class="l-section">
  <div class="l-section-label">Четыре ключевые обязанности</div>
  <div class="concept-card">
    <div class="concept-card-title">Competence <span class="concept-card-en">Компетентность (Rule 1.1)</span></div>
    <div class="concept-card-body">Адвокат обязан представлять клиента компетентно: с необходимыми знаниями, навыками, тщательностью и подготовкой. Можно стать компетентным в новой области через обучение при конкретном деле — если это возможно без ущерба для клиента.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Confidentiality <span class="concept-card-en">Конфиденциальность (Rule 1.6)</span></div>
    <div class="concept-card-body">Адвокат не может раскрывать информацию, связанную с представлением клиента, без его согласия. Шире, чем attorney-client privilege: охватывает всё, что адвокат узнал в связи с делом, независимо от источника. Исключения: предотвращение смерти, исправление ошибки суда, самозащита адвоката.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Loyalty / Conflicts of Interest <span class="concept-card-en">Лояльность (Rule 1.7)</span></div>
    <div class="concept-card-body">Адвокат не может представлять двух клиентов с конфликтующими интересами без информированного согласия обоих и убеждённости в возможности надлежащего представления. Конфликт может возникнуть даже с бывшим клиентом (Rule 1.9).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Candor to the Tribunal <span class="concept-card-en">Честность перед судом (Rule 3.3)</span></div>
    <div class="concept-card-body">Адвокат не должен делать ложных заявлений суду, скрывать известные неблагоприятные прецеденты, представлять ложные доказательства. Обязанность честности перед судом — выше обязанности лояльности клиенту.</div>
  </div>
</div>`
      },
      {
        title: 'Attorney-Client Privilege vs. Duty of Confidentiality',
        content: `
<div class="l-section">
  <div class="l-section-label">Два разных института — часто путают</div>
  <table class="comp-table">
    <tr><th>Критерий</th><th class="ru">Attorney-Client Privilege</th><th>Duty of Confidentiality</th></tr>
    <tr><td>Источник</td><td class="ru">Доказательственное право</td><td>Правила профессиональной этики</td></tr>
    <tr><td>Охват</td><td class="ru">Конфиденциальная коммуникация адвоката и клиента</td><td>Всё, что адвокат узнал в связи с делом</td></tr>
    <tr><td>Держатель</td><td class="ru">Клиент (только он может отказаться)</td><td>Адвокат обязан соблюдать</td></tr>
    <tr><td>Когда применяется</td><td class="ru">В судебных процессах (discovery)</td><td>В любое время и в любом контексте</td></tr>
    <tr><td>Исключения</td><td class="ru">Crime-fraud exception</td><td>Предотвращение смерти, исправление суда</td></tr>
  </table>
</div>
<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam</div>
  <div class="bar-example-body">
    <div class="bar-question">Attorney represents Client in a civil matter. Client confides that he plans to commit perjury at trial. What must Attorney do?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','D')"><span class="bar-option-letter">A</span> Maintain confidentiality and allow Client to testify as planned</div>
      <div class="bar-option" onclick="selectOption(this,'B','D')"><span class="bar-option-letter">B</span> Immediately disclose the plan to the court</div>
      <div class="bar-option" onclick="selectOption(this,'C','D')"><span class="bar-option-letter">C</span> Withdraw from representation without explanation</div>
      <div class="bar-option" onclick="selectOption(this,'D','D')"><span class="bar-option-letter">D</span> Counsel Client against perjury, and if refused, consider withdrawal or disclosure to the tribunal</div>
    </div>
    <div class="bar-answer" id="ans-8-1">
      <strong>Правильный ответ: D.</strong> По Rule 3.3, адвокат не должен помогать клиенту давать ложные показания. Порядок действий: (1) убедить клиента не давать ложные показания; (2) если клиент настаивает — рассмотреть возможность отвода (withdrawal); (3) если отвод невозможен или уже дал ложные показания — раскрыть суду. Candor to tribunal превалирует над confidentiality. Просто уйти «без объяснений» (вариант C) — неполный ответ, не отражающий последовательности обязательств.
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'community',
    name: 'Community Property',
    icon: '👥',
    color: 'var(--green)',
    desc: 'Имущественный режим супругов — только Калифорния',
    lessons: [
      {
        title: 'Community Property: режим супружеского имущества в Калифорнии',
        content: `
<div class="l-section">
  <div class="l-section-label">California only</div>
  <p class="l-text">Community Property — это режим совместной собственности супругов, принятый в Калифорнии и ещё 8 штатах (Аризона, Техас, Невада и др.). Большинство штатов используют <span class="l-en">common law property</span> — каждый супруг владеет тем, что заработал. В Калифорнии всё иначе.</p>
  <div class="hbox gold">
    <div class="hbox-label">Главное правило</div>
    <div class="hbox-text">Всё имущество, приобретённое в браке за счёт труда супругов — <strong>community property</strong>, принадлежащее обоим поровну (50/50). Каждый супруг вправе распорядиться своей половиной.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Три категории имущества</div>
  <table class="comp-table">
    <tr><th>Категория</th><th class="ru">Что входит</th><th>Кому принадлежит</th></tr>
    <tr><td>Community Property (CP)</td><td class="ru">Доходы от труда в браке, купленное на эти доходы, долги в браке</td><td>Обоим супругам 50/50</td></tr>
    <tr><td>Separate Property (SP)</td><td class="ru">Имущество до брака, дары, наследство, компенсация за личный вред</td><td>Только тому супругу</td></tr>
    <tr><td>Quasi-Community Property</td><td class="ru">Приобретённое в другом штате, что было бы CP в CA</td><td>При разводе делится как CP</td></tr>
  </table>
</div>

<div class="l-section">
  <div class="l-section-label">Ключевые доктрины</div>
  <div class="concept-card">
    <div class="concept-card-title">Commingling <span class="concept-card-en">Смешение имущества</span></div>
    <div class="concept-card-body">Если SP смешивается с CP так, что разделить невозможно — всё становится CP. Бремя доказывания раздельного характера — на стороне, претендующей на SP. Инструмент защиты: <strong>tracing</strong> — пошаговое документальное отслеживание источника каждого доллара через банковские выписки.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Transmutation <span class="concept-card-en">Изменение режима</span></div>
    <div class="concept-card-body">Изменение характера имущества с CP на SP или наоборот. После 1985 года — только письменно, с явным указанием на изменение режима и согласием отдающей стороны (Cal. Fam. Code §852). Устная договорённость — недействительна.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Reimbursement <span class="concept-card-en">Возмещение вклада</span></div>
    <div class="concept-card-body">Если SP использовалась для приобретения или улучшения CP (напр., первоначальный взнос из наследства) — супруг вправе потребовать возврата суммы вклада без учёта удорожания. Cal. Fam. Code §2640: только сумма вклада, не его прирост.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Fiduciary Duty <span class="concept-card-en">Доверительная обязанность</span></div>
    <div class="concept-card-body">Супруги обязаны действовать добросовестно в отношении CP друг друга. Если один супруг тайно распорядился CP в свою пользу — суд вправе взыскать до 100% стоимости актива в пользу другого супруга плюс возмещение расходов на адвоката.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">10 типичных спорных ситуаций с разбором</div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 1 — Дом куплен до брака, ипотека платилась в браке</div>
    <div class="concept-card-body"><strong>Факты:</strong> Муж купил дом до свадьбы, первоначальный взнос — его SP. В браке платил ипотеку из общих доходов (CP).<br><strong>Результат (In re Marriage of Moore, 1980):</strong> Дом остаётся SP мужа, но жена получает <strong>reimbursement</strong> на долю CP, пошедшую на погашение основного долга. Прирост стоимости дома распределяется пропорционально вкладам SP и CP (формула Moore/Marsden).</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 2 — Наследство внесено на совместный счёт</div>
    <div class="concept-card-body"><strong>Факты:</strong> Жена получила наследство $50,000 и внесла на общий с мужем банковский счёт, с которого оба тратили деньги.<br><strong>Результат:</strong> Если не сохранились выписки и нельзя отследить $50,000 — всё смешалось и стало CP. Трейсинг невозможен. Урок: SP-средства нужно держать на отдельном счёте.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 3 — Бизнес, начатый до брака, работающий в браке</div>
    <div class="concept-card-body"><strong>Факты:</strong> Муж основал компанию до брака (SP). В браке лично управлял ею, компания выросла в 5 раз.<br><strong>Результат (Pereira / Van Camp подходы):</strong> Суд выбирает один из двух методов. <strong>Pereira</strong>: CP получает доход, превышающий «разумный доход» от вложенного SP-капитала. <strong>Van Camp</strong>: CP получает справедливую рыночную зарплату за труд супруга, остальное — SP. Выбор метода определяет сотни тысяч долларов.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 4 — Подарок одному супругу от третьего лица</div>
    <div class="concept-card-body"><strong>Факты:</strong> Родители жены подарили паре $100,000 «на обустройство». Дарственная оформлена на обоих.<br><strong>Результат:</strong> Если дарение адресовано обоим — CP. Если только жене — SP жены. При разводе муж будет настаивать на CP, жена — на SP. Ключевой вопрос: кому предназначался дар по намерению дарителя? Нужны письменные документы о намерении.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 5 — Пенсионный план, взносы до и в браке</div>
    <div class="concept-card-body"><strong>Факты:</strong> Муж работает в одной компании 20 лет: 8 лет до брака, 12 лет в браке. Пенсионный план накоплен за всё время.<br><strong>Результат:</strong> Применяется <strong>time rule</strong>: CP-доля = (годы в браке / общие годы) × общая стоимость плана. Здесь 12/20 = 60% — CP. Жена при разводе вправе претендовать на 30% (её половина CP-доли). Распределяется через QDRO (Qualified Domestic Relations Order).</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 6 — Личная травма: компенсация CP или SP?</div>
    <div class="concept-card-body"><strong>Факты:</strong> Жена получила $500,000 по иску о телесном вреде в период брака.<br><strong>Результат (Cal. Fam. Code §780):</strong> Компенсация за <strong>личный вред</strong> — SP того супруга, кто пострадал. Но компенсация за потерю заработка в браке и медицинские расходы, оплаченные из CP — CP. Суд разбивает присуждённую сумму на составляющие.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 7 — Образование за счёт общих денег</div>
    <div class="concept-card-body"><strong>Факты:</strong> Муж получил степень MBA в браке, оплачивал обучение из общих доходов.<br><strong>Результат (Cal. Fam. Code §2641):</strong> Общее имущество вправе требовать <strong>reimbursement</strong> за расходы на обучение (tuition, fees, books) с процентами. Но жена не получает долю в повышенной зарплате мужа — только возврат потраченных CP-денег. Повышенный заработок учитывается только при определении размера алиментов (spousal support).</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 8 — Трансмутация через совместный титул</div>
    <div class="concept-card-body"><strong>Факты:</strong> Жена добавила мужа в качестве сособственника в свой дом (SP), оформив новый deed. Спустя 5 лет развод.<br><strong>Результат:</strong> До 1985 года — автоматическая трансмутация. После 1985 года — нужен письменный документ с <strong>явным указанием</strong> на изменение режима. Простого deed недостаточно — нужна фраза типа «I intend to transmute this to community property». Без этого — суд анализирует намерение сторон.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 9 — Долги одного супруга: кто платит</div>
    <div class="concept-card-body"><strong>Факты:</strong> Муж взял кредит на свой бизнес до брака. В браке бизнес обанкротился. Кредиторы требуют взыскания с CP.<br><strong>Результат:</strong> Долги до брака — SP должника. Кредиторы могут обратить взыскание только на SP мужа и на его долю в CP (50%). Доля жены в CP защищена. Но: если кредит потрачен на нужды семьи в браке — другой анализ.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Ситуация 10 — Смерть без завещания: quasi-community property</div>
    <div class="concept-card-body"><strong>Факты:</strong> Супруги жили в Нью-Йорке 15 лет (common law state), накопили активы, переехали в Калифорнию. Муж умер без завещания через 2 года.<br><strong>Результат:</strong> Активы, накопленные в НЙ — <strong>quasi-community property</strong>: при смерти в Калифорнии они делятся как CP. Жена наследует 50% quasi-CP. Если бы развод — аналогично. Это особенность калифорнийского права, защищающая супруга, переехавшего из common law штата.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">10 реальных спорных решений судов Калифорнии</div>

  <div class="hbox gold">
    <div class="hbox-label">In re Marriage of Moore (1980) — формула Moore/Marsden</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Муж купил дом до брака, платил ипотеку из совместных доходов. При разводе — чей дом?<br><strong>Решение:</strong> Апелляционный суд Калифорнии установил пропорциональный расчёт: CP получает долю, соответствующую доле выплаченного в браке основного долга. Это базовая формула для всех споров о недвижимости, приобретённой до брака.</div>
  </div>

  <div class="hbox blue">
    <div class="hbox-label">In re Marriage of Pereira (1959) — бизнес-активы и труд супруга</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Муж развивал SP-бизнес в браке лично. Жена требовала долю в приросте.<br><strong>Решение:</strong> Суд создал тест: если прирост бизнеса объясняется прежде всего трудом супруга (а не SP-капиталом) — избыток над «разумной доходностью» SP идёт в CP. Этот тест используется на каждом Bar Exam по Community Property.</div>
  </div>

  <div class="hbox purple">
    <div class="hbox-label">In re Marriage of Lucas (1980) — совместный титул не трансмутирует</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Жена внесла SP в совместный дом. Оба вписаны в deed. При разводе муж требует 50%.<br><strong>Решение:</strong> Верховный суд CA: внесение SP в совместный titl — трансмутация. Жена теряет SP-статус вклада. Это решение шокировало юристов и в 1984 году было частично скорректировано законодательно: §2640 дал право на reimbursement.</div>
  </div>

  <div class="hbox green">
    <div class="hbox-label">In re Marriage of Buol (1985) — запрет ретроактивного применения §2640</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Можно ли применять §2640 (reimbursement right) к бракам, заключённым до 1985 года?<br><strong>Решение:</strong> Верховный суд CA: нет, новые правила трансмутации и reimbursement применяются только к имуществу, приобретённому после 1 января 1985 года. Для более ранних сделок действует прежняя презумпция.</div>
  </div>

  <div class="hbox red">
    <div class="hbox-label">In re Marriage of Simonis (2023) — commingling в современном суде</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Жена утверждала, что её SP (наследство) сохранилось отдельно. Но средства смешались на общем счёте на 12 лет.<br><strong>Решение:</strong> Апелляционный суд CA (95 Cal.App.5th 1129): без точного tracing, доллар за доллар, наследство становится CP. Семейная презумпция CP преодолевает любые устные заверения. Это решение часто цитируется на Bar Exam.</div>
  </div>

  <div class="hbox gold">
    <div class="hbox-label">In re Marriage of Frick (1986) — трансмутация через дарственное письмо</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Муж написал жене письмо «дарю тебе мою долю в доме». Письмо было личным, не юридическим.<br><strong>Решение:</strong> Суд признал письмо действительной трансмутацией — оно содержало явное выражение согласия на изменение режима и было подписано стороной, теряющей права. Это обучающий пример того, что трансмутация не требует нотариуса — нужна лишь письменная форма и явное намерение.</div>
  </div>

  <div class="hbox blue">
    <div class="hbox-label">In re Marriage of Haines (1995) — undue influence при трансмутации</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Муж убедил жену подписать документы, трансмутировав её SP в CP, не объяснив последствий.<br><strong>Решение:</strong> Апелляционный суд CA: между супругами действует презумпция <strong>undue influence</strong> при сделках, выгодных одному из них. Муж должен доказать, что жена дала <strong>informed consent</strong>. Поскольку не доказал — трансмутация недействительна.</div>
  </div>

  <div class="hbox purple">
    <div class="hbox-label">In re Marriage of Bonds (2000) — добрачное соглашение и informed consent</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Бейсболист Барри Бондс заключил prenuptial agreement в день свадьбы. Жена — иностранка, без американского адвоката.<br><strong>Решение:</strong> Верховный суд CA: prenup может быть недействительным при отсутствии независимого юридического представления и времени на ознакомление. Это дело изменило практику prenuptial agreements в Калифорнии и привело к принятию Uniform Premarital Agreement Act в штате.</div>
  </div>

  <div class="hbox green">
    <div class="hbox-label">In re Marriage of Brandes (2015) — дата разлучения (date of separation)</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Супруги жили раздельно годами, но под одной крышей. Муж продолжал зарабатывать — чья зарплата?<br><strong>Решение:</strong> Апелляционный суд CA: имущество остаётся CP до <strong>даты фактического разлучения</strong> (date of separation) — момента, когда обе стороны понимают, что брак завершён. Жизнь под одной крышей сама по себе не продлевает CP-период. Это решение было затем уточнено в законе SB 1255 (2016).</div>
  </div>

  <div class="hbox red">
    <div class="hbox-label">In re Marriage of Davis (2015) / SB 1255 (2016) — «раздельное проживание» переопределено</div>
    <div class="hbox-text"><strong>Суть спора:</strong> Верховный суд CA в деле Davis постановил: «раздельное проживание» означает физически разные адреса. Это ужесточило требования и вызвало волну критики — не у всех есть средства на второе жильё.<br><strong>Законодательный ответ:</strong> Калифорния приняла SB 1255, отменившего Davis: разлучение возможно и под одной крышей, если одна из сторон выражает намерение завершить брак и ведёт себя соответственно. Это редкий случай, когда законодатель прямо отменил решение Верховного суда штата.</div>
  </div>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле Bar Exam · Community Property</div>
  <div class="bar-example-body">
    <div class="bar-question">Before marriage, Wife owned a house worth $200,000, with a $150,000 mortgage. During the 10-year marriage, the couple paid down $60,000 of principal using community earnings. At divorce, the house is worth $500,000. How should the court characterize the house?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','D')"><span class="bar-option-letter">A</span> The entire house is Wife's separate property because she owned it before marriage</div>
      <div class="bar-option" onclick="selectOption(this,'B','D')"><span class="bar-option-letter">B</span> The entire house is community property because mortgage payments were made during marriage</div>
      <div class="bar-option" onclick="selectOption(this,'C','D')"><span class="bar-option-letter">C</span> The house is community property, but Wife gets reimbursement for the original down payment</div>
      <div class="bar-option" onclick="selectOption(this,'D','D')"><span class="bar-option-letter">D</span> The house is separate property, but the community has a proportional interest based on principal paid down during marriage (Moore/Marsden formula)</div>
    </div>
    <div class="bar-answer" id="ans-cp-1">
      <strong>Правильный ответ: D — формула Moore/Marsden.</strong><br><br>
      Дом остаётся SP жены, поскольку приобретён до брака. Но CP вправе требовать пропорциональную долю в equity, отражающую её вклад в погашение основного долга.<br><br>
      <strong>Расчёт по Moore/Marsden:</strong><br>
      SP-вклад при покупке: $50,000 (первоначальный взнос = $200,000 − $150,000).<br>
      CP-вклад в браке: $60,000 (погашенный основной долг).<br>
      Итоговая equity при разводе: $500,000 − $90,000 (остаток долга) = $410,000.<br>
      CP-доля: $60,000 / ($50,000 + $60,000) × $410,000 ≈ $223,636 → делится пополам (по $111,818 каждому).<br>
      SP-доля жены: остаток equity.
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'immigration',
    name: 'Immigration: Asylum & Refugees',
    icon: '🌍',
    color: 'var(--cyan)',
    desc: 'Право беженцев и убежища — INA, 5 оснований, процедура, реальные кейсы',
    lessons: [
      {
        title: 'Введение: беженец vs. лицо, ищущее убежище — два разных пути',
        content: `
<div class="l-section">
  <div class="l-section-label">Базовое разграничение</div>
  <p class="l-text">Американское право различает два института: <span class="l-term">refugee status</span> (статус беженца) и <span class="l-term">asylum</span> (убежище). Оба предоставляют защиту преследуемым лицам, но различаются по месту подачи заявления и процедуре.</p>
  <table class="comp-table">
    <tr><th>Критерий</th><th class="ru">Refugee (§207 INA)</th><th>Asylee (§208 INA)</th></tr>
    <tr><td>Где подаётся</td><td class="ru">За пределами США, через UNHCR или посольство</td><td>Внутри США или на границе</td></tr>
    <tr><td>Квота</td><td class="ru">President sets annual cap (FY2025: 125,000)</td><td>Без числового ограничения</td></tr>
    <tr><td>Кто решает</td><td class="ru">USCIS Refugee Affairs Division</td><td>USCIS Asylum Officer или Immigration Judge</td></tr>
    <tr><td>Путь к Green Card</td><td class="ru">Через 1 год — обязательный adjust status (§209(a))</td><td>Через 1 год — по заявлению (§209(b))</td></tr>
    <tr><td>Занятость</td><td class="ru">Сразу при въезде</td><td>Через 180 дней после подачи заявления</td></tr>
  </table>
  <div class="hbox gold">
    <div class="hbox-label">Единое определение «беженца» (INA §101(a)(42))</div>
    <div class="hbox-text">Лицо, находящееся вне страны своего гражданства и неспособное или не желающее вернуться туда вследствие <strong>преследования или обоснованного страха преследования</strong> по признаку расы, религии, национальности, принадлежности к определённой социальной группе или политических убеждений. Это определение взято из Конвенции 1951 года о статусе беженцев.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Два вида процедуры убежища</div>
  <div class="concept-card">
    <div class="concept-card-title">Affirmative Asylum <span class="concept-card-en">Проактивная подача</span></div>
    <div class="concept-card-body">Лицо, находящееся в США (с визой или без), добровольно обращается в USCIS с заявлением Form I-589. Подаётся в течение <strong>1 года с момента последнего въезда</strong> — пропуск срока фатален. Собеседование у asylum officer; при отказе — передача в removal proceedings.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Defensive Asylum <span class="concept-card-en">Защитная подача</span></div>
    <div class="concept-card-body">Лицо уже находится в removal proceedings (депортационном процессе) и заявляет asylum как защиту от депортации. Дело рассматривает Immigration Judge (IJ). Апелляция — в BIA (Board of Immigration Appeals), затем в федеральный Circuit Court.</div>
  </div>
</div>`
      },
      {
        title: '5 защищённых оснований: по какому признаку должно быть преследование',
        content: `
<div class="l-section">
  <div class="l-section-label">Закрытый перечень — нельзя расширить</div>
  <p class="l-text">Преследование должно быть <strong>on account of</strong> одного из пяти оснований. Экономические трудности, общая преступность, природные катастрофы — не основания для убежища. Это главное, что отличает asylum от обычной иммиграции.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Пять оснований подробно</div>
  <div class="concept-card">
    <div class="concept-card-title">1. Race <span class="concept-card-en">Раса</span></div>
    <div class="concept-card-body">Преследование по расовому признаку. Исторически применялось к апартеиду в ЮАР, этническим чисткам на Балканах. В современных делах часто сопровождает другие основания (раса + политика).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Religion <span class="concept-card-en">Религия</span></div>
    <div class="concept-card-body">Преследование за религиозные убеждения или практику. Применяется к христианам в ряде мусульманских стран, религиозным меньшинствам (Свидетели Иеговы в РФ, Фалуньгун в КНР). Атеизм и отказ от религии тоже могут быть основанием.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Nationality <span class="concept-card-en">Национальность</span></div>
    <div class="concept-card-body">Этническое преследование в рамках государства. Отличается от расы тем, что фокусируется на принадлежности к национальной группе. Применяется в делах об этнических конфликтах (хуту vs. тутси, курды в Турции).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">4. Particular Social Group (PSG) <span class="concept-card-en">Конкретная социальная группа</span></div>
    <div class="concept-card-body">Самое спорное и динамично развивающееся основание. Трёхчастный тест BIA: <strong>immutable characteristic</strong> (неизменяемый признак) + <strong>social distinction</strong> (общество воспринимает группу как отдельную) + <strong>particularity</strong> (чёткие границы группы). Применяется к ЛГБТК+, жертвам бытового насилия, бывшим военным и т.д.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">5. Political Opinion <span class="concept-card-en">Политические убеждения</span></div>
    <div class="concept-card-body">Фактические или приписываемые (<em>imputed</em>) политические убеждения. Если правительство считает, что у лица есть определённые политические взгляды — даже ошибочно — это может быть основанием. Применяется к журналистам, активистам, диссидентам.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Nexus — связь преследования и основания</div>
  <div class="hbox red">
    <div class="hbox-label">Причинно-следственная связь обязательна</div>
    <div class="hbox-text">Преследование должно быть «on account of» защищённого признака — то есть признак должен быть <strong>central reason</strong> (основной причиной) преследования. Если тебя грабят случайно — не asylum. Если тебя грабят, потому что ты журналист — possible asylum. Если тебя грабят, потому что ты богатый — не asylum (экономический мотив).</div>
  </div>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Типичный вопрос по asylum law</div>
  <div class="bar-example-body">
    <div class="bar-question">Maria fled El Salvador after gang members threatened her because she refused to allow them to use her property for drug storage. She claims asylum based on political opinion. Which analysis is MOST accurate?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','C')"><span class="bar-option-letter">A</span> She qualifies because gangs are a form of political group in El Salvador</div>
      <div class="bar-option" onclick="selectOption(this,'B','C')"><span class="bar-option-letter">B</span> She qualifies because refusal to cooperate constitutes political opinion</div>
      <div class="bar-option" onclick="selectOption(this,'C','C')"><span class="bar-option-letter">C</span> She likely does not qualify because the gang's motive was economic, not persecution on account of political opinion — though a PSG claim based on "property owners who resist extortion" could be explored</div>
      <div class="bar-option" onclick="selectOption(this,'D','C')"><span class="bar-option-letter">D</span> She qualifies automatically because she faced threats to her life</div>
    </div>
    <div class="bar-answer" id="ans-imm-1">
      <strong>Правильный ответ: C.</strong> Ключевой вопрос — nexus. Gangs threatened Maria for economic reasons (using her property) — not because of her political beliefs. Threat to life alone is not sufficient. Political opinion must be the central reason. However, practitioners would also analyze PSG: «property owners who resist gang extortion» or «Salvadoran business owners targeted by gangs» — these PSG claims have had mixed success in circuit courts. Nexus analysis is fact-specific and must be argued carefully.
    </div>
  </div>
</div>`
      },
      {
        title: 'Well-Founded Fear: стандарт доказывания',
        content: `
<div class="l-section">
  <div class="l-section-label">Субъективный + объективный элемент</div>
  <p class="l-text"><span class="l-term">Well-founded fear of persecution</span> — стандарт для будущего преследования. Он требует одновременно двух элементов: субъективного страха заявителя и объективного обоснования этого страха.</p>
  <div class="hbox gold">
    <div class="hbox-label">INS v. Cardoza-Fonseca (1987) — ключевое дело Верховного суда</div>
    <div class="hbox-text">Верховный суд установил: «well-founded fear» означает, что вероятность преследования не обязана превышать 50%. Достаточно <strong>«one in ten» chance</strong> — если каждый десятый представитель группы преследуется, это достаточно для well-founded fear. Это значительно ниже стандарта «more likely than not», который применяется к withholding of removal.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Past Persecution — презумпция будущей угрозы</div>
  <div class="concept-card">
    <div class="concept-card-title">Если прошлое преследование доказано</div>
    <div class="concept-card-body">Создаётся <strong>rebuttable presumption</strong> (опровержимая презумпция) будущего преследования. Государство может опровергнуть её двумя способами: (1) <strong>fundamental change in circumstances</strong> — ситуация в стране принципиально изменилась; (2) <strong>internal relocation</strong> — заявитель может безопасно переехать в другую часть своей страны.</div>
  </div>
  <div class="hbox blue">
    <div class="hbox-label">Internal Relocation — часто недооценивается</div>
    <div class="hbox-text">Если преследование ведётся негосударственным актором (бандой, экс-партнёром), а государство в целом способно защитить — IJ может отказать, указав, что заявитель мог переехать в другой район страны. Ключевой вопрос: «Would it be reasonable to relocate?» С учётом личных обстоятельств, доступности защиты, наличия родственников.</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Credibility — достоверность показаний</div>
  <p class="l-text">Asylum officer и IJ оценивают credibility по совокупности: последовательность показаний (oral vs. written), правдоподобность, соответствие country conditions reports, демeanor (поведение, уверенность). <span class="l-term">REAL ID Act (2005)</span>: несоответствие даже в деталях, не относящихся к сути дела, может быть основанием для adverse credibility finding.</p>
</div>`
      },
      {
        title: 'Bars to Asylum: когда убежище не даётся даже при наличии оснований',
        content: `
<div class="l-section">
  <div class="l-section-label">Абсолютные основания для отказа</div>
  <div class="concept-card">
    <div class="concept-card-title">Persecution of Others <span class="concept-card-en">Преследование других</span></div>
    <div class="concept-card-body">Заявитель сам участвовал в преследовании других по защищённым признакам. Применяется к бывшим чиновникам репрессивных режимов, тюремщикам, сотрудникам тайной полиции.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Particularly Serious Crime <span class="concept-card-en">Тяжкое уголовное преступление</span></div>
    <div class="concept-card-body">Осуждение за «особо тяжкое преступление» — автоматически: aggravated felony (при любом сроке) делает лицо «per se» опасным. Для других преступлений — IJ взвешивает природу преступления, приговор, обстоятельства.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Security Ground <span class="concept-card-en">Угроза безопасности</span></div>
    <div class="concept-card-body">Лицо, представляющее угрозу национальной безопасности США. Включает поддержку террористических организаций — даже «материальную поддержку» без насилия (например, приготовление еды для вооружённой группы).</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Firm Resettlement <span class="concept-card-en">Прочное устройство в третьей стране</span></div>
    <div class="concept-card-body">Если заявитель был официально принят в третью страну и получил там постоянный статус — он не может подать на asylum в США. Исключение: условия в третьей стране нарушают его права.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">One-Year Filing Bar <span class="concept-card-en">Пропуск годового срока</span></div>
    <div class="concept-card-body">Заявление на affirmative asylum должно быть подано в течение 1 года после последнего въезда. Пропуск — bar. Исключения: changed circumstances (изменение ситуации) или extraordinary circumstances (исключительные обстоятельства, напр. болезнь, недееспособность).</div>
  </div>
</div>

<div class="hbox red">
  <div class="hbox-label">Material Support Bar — неожиданный капкан</div>
  <div class="hbox-text">Один из самых жёстких bars: даже <strong>принудительная</strong> материальная поддержка вооружённой группы (под угрозой смерти) исторически считалась основанием для отказа. В последние годы появились исключения для «duress», но применяются непоследовательно. Практикующие адвокаты должны тщательно изучать историю клиента на этот предмет.</div>
</div>`
      },
      {
        title: 'Withholding of Removal и CAT: альтернативная защита',
        content: `
<div class="l-section">
  <div class="l-section-label">Три уровня защиты</div>
  <p class="l-text">Даже если asylum недоступен (пропуск срока, criminal bar), существуют две альтернативные формы защиты от депортации.</p>

  <table class="comp-table">
    <tr><th>Форма защиты</th><th class="ru">Стандарт</th><th>Что даёт</th></tr>
    <tr><td>Asylum</td><td class="ru">Well-founded fear (~10%+ risk)</td><td>Asylee status → Green Card через год</td></tr>
    <tr><td>Withholding of Removal</td><td class="ru">«More likely than not» (>50%) persecution</td><td>Нельзя депортировать в страну — но нет пути к Green Card</td></tr>
    <tr><td>CAT Protection</td><td class="ru">«More likely than not» torture by/with state consent</td><td>Нельзя депортировать — даже при aggravated felony bar</td></tr>
  </table>

  <div class="concept-card">
    <div class="concept-card-title">Withholding of Removal (§241(b)(3) INA)</div>
    <div class="concept-card-body">Более высокий стандарт, чем asylum: преследование «more likely than not». Те же 5 оснований. Нет годового срока подачи. Нет пути к Green Card — лицо остаётся в США неопределённо долго с правом на работу, но без перспективы натурализации. Criminal bars применяются иначе — «particularly serious crime» bar шире.</div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">CAT — Convention Against Torture (8 CFR §1208.16)</div>
    <div class="concept-card-body">Защита на основании Конвенции ООН против пыток. Не требует связи с 5 основаниями — только доказать, что правительство страны причинит или молчаливо допустит пытки. <strong>Абсолютная защита</strong>: действует даже при наличии terrorism bars, aggravated felony, security grounds. Лицо, осуждённое за убийство, не может быть депортировано, если его там будут пытать.</div>
  </div>
</div>

<div class="hbox gold">
  <div class="hbox-label">Стратегически: всегда заявлять все три</div>
  <div class="hbox-text">Практикующие адвокаты по immigration law всегда заявляют asylum + withholding + CAT одновременно — это три отдельных claim, и ни один не блокирует другой. Если asylum denied → withholding может быть granted. Если withholding denied → CAT может быть granted. Это защита «по слоям».</div>
</div>`
      },
      {
        title: 'Particular Social Group (PSG): самое спорное основание',
        content: `
<div class="l-section">
  <div class="l-section-label">Трёхчастный тест BIA</div>
  <p class="l-text">С 2014 года BIA применяет трёхчастный тест для определения cognizable PSG (признаваемой социальной группы). Все три элемента обязательны.</p>

  <div class="concept-card">
    <div class="concept-card-title">1. Immutable or Fundamental Characteristic</div>
    <div class="concept-card-body">Признак, который нельзя изменить или нельзя обоснованно требовать изменить. Пол, сексуальная ориентация, родство, этническое происхождение — immutable. Прошлый опыт (напр. «бывший государственный информатор») — immutable, потому что прошлое нельзя изменить.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">2. Social Distinction</div>
    <div class="concept-card-body">Общество в стране происхождения <strong>воспринимает</strong> группу как отдельную и отличную. Не требует, чтобы группа была видима физически — достаточно, чтобы её воспринимали как единицу. Доказывается через country conditions reports, академические исследования, показания экспертов.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">3. Particularity</div>
    <div class="concept-card-body">Группа должна иметь чёткие и определённые границы. «Молодые люди» — слишком широко. «Молодые гондурасские мужчины, отказавшиеся вступить в банду MS-13 после трёх угроз» — возможно, достаточно конкретно. Группа не может быть amorphous («расплывчатой»).</div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Признанные PSG — что работало в судах</div>
  <table class="comp-table">
    <tr><th>PSG</th><th class="ru">Признан?</th><th>Юрисдикция</th></tr>
    <tr><td>ЛГБТК+ лица из стран с криминализацией</td><td class="ru">Да</td><td>Большинство circuits</td></tr>
    <tr><td>Жертвы FGM (женское обрезание)</td><td class="ru">Да</td><td>Широко признан</td></tr>
    <tr><td>Семья конкретного человека</td><td class="ru">Ограниченно (после Matter of L-E-A-)</td><td>Circuit-specific</td></tr>
    <tr><td>Женщины из страны X, не способные покинуть отношения</td><td class="ru">Ограниченно (после K-E-S-G- 2025)</td><td>Спорно</td></tr>
    <tr><td>Бывшие сотрудники государственных органов</td><td class="ru">Зависит от страны</td><td>Case-by-case</td></tr>
    <tr><td>Жертвы принудительного труда/торговли людьми</td><td class="ru">Частично</td><td>Развивается</td></tr>
  </table>
</div>

<div class="hbox red">
  <div class="hbox-label">Matter of K-E-S-G- (BIA 2025) — новый удар по gender-based claims</div>
  <div class="hbox-text">В июле 2025 года BIA постановил, что люди, преследуемые исключительно по признаку пола, вряд ли могут претендовать на убежище, поскольку пол сам по себе не отвечает определению «конкретной социальной группы». Решение вызвало волну критики: практикующие адвокаты указывают, что после <em>Loper Bright</em> (2024), отменившего Chevron deference, федеральные суды вправе отвергнуть толкование BIA и защитить более широкий круг заявителей.</div>
</div>`
      },
      {
        title: 'Процедура: от подачи до решения',
        content: `
<div class="l-section">
  <div class="l-section-label">Affirmative Asylum — шаг за шагом</div>
  <div class="timeline">
    <div class="tl-item highlight">
      <div class="tl-year">День 1 — подача</div>
      <div class="tl-text"><strong>Form I-589</strong> (Application for Asylum and Withholding of Removal) подаётся в USCIS. Бесплатно. С момента подачи начинается 180-дневный отсчёт до права на Employment Authorization (EAD).</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">~45 дней — biometrics</div>
      <div class="tl-text">Сбор отпечатков пальцев и фотографии. Проверка по базам данных ФБР, Государственного департамента, INTERPOL.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">~6 мес.–5 лет — собеседование</div>
      <div class="tl-text">Asylum Interview у Asylum Officer USCIS. Non-adversarial: officer задаёт вопросы, адвокат присутствует, но не аргументирует. Оценивается: достоверность показаний, наличие оснований, credibility. Ожидание выросло катастрофически — backlog превышает 3 млн дел.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">Решение USCIS</div>
      <div class="tl-text">Grant: сразу asylee status. Referral to Immigration Court: передача в IJ (начинается defensive). Notice of Intent to Deny: заявителю дают 16 дней на ответ.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">Appeal path</div>
      <div class="tl-text">IJ decision → BIA (Board of Immigration Appeals) → Circuit Court of Appeals → US Supreme Court (cert). На каждом этапе — строгие сроки. BIA: 30 дней. Circuit: 30 дней с момента BIA решения.</div>
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Credible Fear vs. Reasonable Fear</div>
  <table class="comp-table">
    <tr><th>Стандарт</th><th class="ru">Когда применяется</th><th>Порог</th></tr>
    <tr><td>Credible Fear</td><td class="ru">Expedited removal на границе — первичный фильтр</td><td>«Significant possibility» asylum would be granted</td></tr>
    <tr><td>Reasonable Fear</td><td class="ru">Лица с prior removal orders или aggravated felony</td><td>«More likely than not» — withholding/CAT</td></tr>
  </table>
  <div class="hbox blue">
    <div class="hbox-label">Expedited Removal — ускоренная процедура</div>
    <div class="hbox-text">Лица, задержанные в течение 14 дней после въезда и в 100 милях от границы, могут быть депортированы без слушания Immigration Judge. Единственная защита — credible fear screening. Если asylum officer находит credible fear — дело передаётся на полное рассмотрение. Если нет — deportation.</div>
  </div>
</div>`
      },
      {
        title: '10 реальных дел по asylum law: как суды решали спорные вопросы',
        content: `
<div class="l-section">
  <div class="l-section-label">Знаковые решения — от азов до сегодняшнего дня</div>

  <div class="hbox gold">
    <div class="hbox-label">1. INS v. Cardoza-Fonseca (1987) — US Supreme Court</div>
    <div class="hbox-text"><strong>Факты:</strong> Гражданка Никарагуа утверждала, что сандинисты убьют её брата если она вернётся.<br><strong>Вопрос:</strong> Достаточно ли «1 к 10» вероятности преследования для «well-founded fear»?<br><strong>Решение:</strong> Верховный суд: да. «Well-founded fear» — более либеральный стандарт, чем «more likely than not». Это разграничило asylum (ниже порог) и withholding (выше). Определяющее дело для всей системы.</div>
  </div>

  <div class="hbox blue">
    <div class="hbox-label">2. INS v. Elias-Zacarias (1992) — US Supreme Court</div>
    <div class="hbox-text"><strong>Факты:</strong> Гватемальский юноша бежал, потому что партизаны хотели насильственно завербовать его.<br><strong>Вопрос:</strong> Является ли сопротивление принудительной вербовке политическим мнением?<br><strong>Решение:</strong> Верховный суд: нет. Сопротивление вербовке не равнозначно политическому убеждению. Нужно доказать, что партизаны преследовали именно за политические взгляды, а не для пополнения рядов. Nexus — определяющий вопрос.</div>
  </div>

  <div class="hbox purple">
    <div class="hbox-label">3. Matter of Acosta (BIA 1985) — фундамент PSG</div>
    <div class="hbox-text"><strong>Факты:</strong> Сальвадорский водитель такси отказался участвовать в забастовке, организованной вооружённой группой.<br><strong>Вопрос:</strong> Является ли «водитель такси, отказавшийся от участия в забастовке» PSG?<br><strong>Решение:</strong> BIA: нет, но установил базовое определение PSG: группа лиц с <strong>common immutable characteristic</strong>. Это решение — отправная точка для всей PSG-доктрины следующих 40 лет.</div>
  </div>

  <div class="hbox green">
    <div class="hbox-label">4. Matter of A-R-C-G- (BIA 2014) — бытовое насилие как PSG</div>
    <div class="hbox-text"><strong>Факты:</strong> Гватемальская женщина подвергалась систематическому насилию со стороны мужа. Полиция отказывала в помощи.<br><strong>Решение:</strong> BIA признал PSG «married women in Guatemala who are unable to leave their relationship» — конкретным, социально различимым, основанным на immutable характеристиках. Исторический прецедент, открывший путь для бытового насилия как основания asylum.</div>
  </div>

  <div class="hbox red">
    <div class="hbox-label">5. Matter of A-B- I (AG Sessions, 2018) — закрытие двери</div>
    <div class="hbox-text"><strong>Решение:</strong> AG Sessions отменил A-R-C-G- и постановил: «жертвы частного насилия», как правило, не входят в cognizable PSG. Преследование со стороны партнёра, бандитов — «personal matters», а не persecution по защищённому признаку. Это решение де-факто закрыло asylum для сотен тысяч жертв бытового насилия из Центральной Америки.</div>
  </div>

  <div class="hbox gold">
    <div class="hbox-label">6. Matter of A-B- III (AG Garland, 2021) — возврат</div>
    <div class="hbox-text"><strong>Решение:</strong> AG Garland полностью отменил решение Сессионса. A-R-C-G- восстановлен как прецедент. Смена администрации — смена прецедента. Это демонстрирует, насколько политизировано иммиграционное право: Attorney General может единолично переписывать правила для всей страны.</div>
  </div>

  <div class="hbox blue">
    <div class="hbox-label">7. Matter of L-E-A- II (AG Barr, 2019) — семья не PSG</div>
    <div class="hbox-text"><strong>Факты:</strong> Мексиканец утверждал, что cartel преследует его за принадлежность к семье его отца (отец отказал в сотрудничестве).<br><strong>Решение:</strong> AG Barr: «ближайшие родственники конкретного человека» как PSG слишком широки и не имеют social distinction. Большинство семей не воспринимаются обществом как отдельная группа. Это резко ограничило family-based PSG claims.</div>
  </div>

  <div class="hbox purple">
    <div class="hbox-label">8. Matter of K-E-S-G- (BIA, июль 2025) — пол не PSG сам по себе</div>
    <div class="hbox-text">BIA отказал сальвадорской женщине, преследуемой бандами, признав, что «сальвадорские женщины» и «сальвадорские женщины, рассматриваемые как собственность» не являются cognizable PSG из-за недостаточной particularity. Критики указывают: BIA не привлёк amicus briefs, что беспрецедентно для дела такого масштаба. После Loper Bright (2024) суды вправе оспорить это толкование.</div>
  </div>

  <div class="hbox green">
    <div class="hbox-label">9. Urias-Orellana v. Bondi (US Supreme Court, 2026)</div>
    <div class="hbox-text">Верховный суд рассмотрел дело о стандарте пересмотра решений BIA по persecution determinations: должны ли федеральные апелляционные суды применять «substantial evidence» (дефференциальный) стандарт или de novo (независимый) стандарт к смешанным fact/law вопросам. Решение влияет на то, насколько активно суды могут пересматривать отказы в asylum и защищать заявителей.</div>
  </div>

  <div class="hbox red">
    <div class="hbox-label">10. Matter of M-E-V-G- (BIA 2014) — трёхчастный тест</div>
    <div class="hbox-text"><strong>Факты:</strong> Дело о банде MS-13 и «молодых гондурасских мужчинах, отказавшихся от вербовки».<br><strong>Решение:</strong> BIA закрепил современный трёхчастный PSG тест: immutable characteristic + social distinction + particularity. «Молодые гондурасские мужчины, которым угрожает MS-13» — недостаточно particular. Это решение по-прежнему определяет большинство отказов по gang-based claims.</div>
  </div>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Комплексный вопрос по asylum law</div>
  <div class="bar-example-body">
    <div class="bar-question">Ali, a journalist from Country X, was imprisoned and tortured by government agents for two years for writing articles critical of the ruling party. He escaped and entered the US without authorization 13 months ago. He now seeks asylum. Which of the following is MOST accurate?</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','D')"><span class="bar-option-letter">A</span> Ali qualifies for asylum based on political opinion and his claim is timely</div>
      <div class="bar-option" onclick="selectOption(this,'B','D')"><span class="bar-option-letter">B</span> Ali is barred because he entered without authorization</div>
      <div class="bar-option" onclick="selectOption(this,'C','D')"><span class="bar-option-letter">C</span> Ali qualifies but is barred by the one-year filing deadline</div>
      <div class="bar-option" onclick="selectOption(this,'D','D')"><span class="bar-option-letter">D</span> Ali is barred by the one-year filing deadline for asylum, but may qualify for withholding of removal and CAT protection based on past torture by the government</div>
    </div>
    <div class="bar-answer" id="ans-imm-final">
      <strong>Правильный ответ: D.</strong><br><br>
      <strong>Asylum — barred:</strong> Ali entered 13 months ago, and the one-year filing deadline has passed. Unless he can show changed or extraordinary circumstances, affirmative asylum is unavailable. Unauthorized entry alone does NOT bar asylum — INA §1158(a)(1) explicitly states anyone «physically present... irrespective of... status» may apply.<br><br>
      <strong>Political opinion — strong basis:</strong> Government imprisonment and torture of a journalist for political writing = past persecution on account of political opinion. This is a textbook case with a clear nexus.<br><br>
      <strong>Withholding of Removal:</strong> No one-year bar. Past torture creates a presumption of future persecution. The government, as the persecutor, cannot offer «internal relocation» as a rebuttal. «More likely than not» standard likely met.<br><br>
      <strong>CAT:</strong> Government torture = state actor directly responsible. CAT applies regardless of criminal history or any other bars. This is Ali's strongest protection and cannot be denied even if withholding is denied on other grounds.
    </div>
  </div>
</div>`
      }
    ]
  },
  {
    id: 'barprep',
    name: 'Bar Exam Prep',
    icon: '🎯',
    color: 'var(--gold)',
    desc: 'Стратегия сдачи, MBE, эссе, Performance Test',
    lessons: [
      {
        title: 'Структура California Bar Exam: три компонента',
        content: `
<div class="l-section">
  <div class="l-section-label">Общий обзор</div>
  <p class="l-text">California Bar Exam проводится два раза в год — в феврале и июле. Длится два дня. Один из сложнейших bar exams в США: процент сдавших — около 40-45% в обычный год.</p>
  <div class="hbox gold">
    <div class="hbox-label">Расписание экзамена</div>
    <div class="hbox-text">
      <strong>День 1, утро:</strong> 3 эссе (по одному часу каждое)<br>
      <strong>День 1, после обеда:</strong> 1 Performance Test (90 минут)<br>
      <strong>День 2, утро:</strong> 100 вопросов MBE<br>
      <strong>День 2, после обеда:</strong> 100 вопросов MBE<br>
      Итого: 200 вопросов MBE + 3 эссе + 1 PT
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Три компонента подробно</div>
  <div class="concept-card">
    <div class="concept-card-title">MBE — Multistate Bar Examination</div>
    <div class="concept-card-body">200 вопросов с 4 вариантами ответа. 7 предметов: Civil Procedure, Constitutional Law, Contracts, Criminal Law & Procedure, Evidence, Real Property, Torts. Общий для 46 штатов. Составляет 50% итоговой оценки California Bar.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Essays — 5 эссе</div>
    <div class="concept-card-body">Тестируют все предметы California Bar, включая California-специфику. Пишутся по методу IRAC. Оцениваются по шкале от 40 до 100. Нужно набрать 75+. Эссе составляют 40% итоговой оценки. 3 эссе — в утреннюю сессию, 2 эссе + PT — в послеполуденную.</div>
  </div>
  <div class="concept-card">
    <div class="concept-card-title">Performance Test — PT</div>
    <div class="concept-card-body">90 минут. Даётся пакет материалов: File (факты дела) и Library (нормы и прецеденты). Нужно написать конкретный документ: меморандум, письмо клиенту, сравнительный анализ. Все нормы даны в задании — проверяет навык, а не память. Составляет 25% оценки.</div>
  </div>
</div>`
      },
      {
        title: 'Реальные эссе 2025-2026: темы, тезисы, что требовалось написать',
        content: `
<div class="l-section">
  <div class="l-section-label">Зачем изучать прошлые эссе</div>
  <p class="l-text">Реальные эссе California Bar — лучший источник понимания того, как экзаменаторы формулируют вопросы, какие issues они ищут и какой глубины анализ требуют. Ниже — подробные тезисы по эссе февраля и июля 2025 года с указанием ключевых issues, которые нужно было раскрыть.</p>
</div>

<div class="l-section">
  <div class="l-section-label">Февраль 2025 — 5 эссе</div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 1 · Февраль 2025 — Real Property + Contracts</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Allison продала дом Barry, Barry перепродал Carlos. Lender имел mortgage на дом, зарегистрированный после продажи Barry. В доме был установлен кондиционер, классифицированный как fixture.<br><br>
      <strong>Вопросы:</strong><br>
      1. Взял ли Carlos title с обременением mortgage Lender'а?<br>
      2. Какие иски Carlos может предъявить Barry по general warranty deed?<br><br>
      <strong>Ключевые issues для раскрытия:</strong><br>
      — Race-notice recording statute: Barry — BFP (bona fide purchaser), зарегистрировал первым, mortgage Lender не имеет силы против него → Carlos не обременён<br>
      — Fixture analysis: кондиционер прикреплён болтами к стене = fixture, переходит с домом<br>
      — General warranty deed: covenants of seisin, quiet enjoyment, warranty, further assurances<br>
      — Breach of warranty: если дефекты были до передачи — Barry отвечает<br><br>
      <strong>Уровень сложности:</strong> средний. Многие кандидаты упустили анализ fixture и сосредоточились только на recording act.
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 2 · Февраль 2025 — Evidence + Criminal Procedure</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Уголовное дело. Обыск автомобиля обвиняемого. Вещественные доказательства получены в ходе traffic stop. Свидетель ранее давал иные показания.<br><br>
      <strong>Вопросы:</strong><br>
      1. Допустимо ли доказательство, полученное при обыске?<br>
      2. Допустимы ли прежние показания свидетеля?<br><br>
      <strong>Ключевые issues:</strong><br>
      — 4th Amendment: обоснованность traffic stop, scope of search incident to arrest<br>
      — Automobile exception: probable cause → поиск без ордера допустим<br>
      — Exclusionary rule и good faith exception (United States v. Leon)<br>
      — Prior inconsistent statement: FRE 801(d)(1)(A) — если под присягой + перекрёстный допрос = не hearsay<br>
      — California Evidence Code §1235: более широкое исключение, чем FRE — нужно указать оба
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 3 · Февраль 2025 — Constitutional Law</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Государственная школа запретила ученику носить одежду с политическим слоганом. Дело о свободе слова в публичной школе.<br><br>
      <strong>Вопросы:</strong><br>
      1. Нарушает ли запрет 1-ю поправку?<br>
      2. Есть ли у школы достаточное основание?<br><br>
      <strong>Ключевые issues:</strong><br>
      — Public school = государственный актор → 1-я поправка применяется<br>
      — Tinker v. Des Moines (1969): ученики не теряют права при входе в школу. Запрет допустим только если speech «materially disrupts» работу школы<br>
      — Content-based restriction → strict scrutiny<br>
      — Viewpoint discrimination — абсолютно запрещена<br>
      — Оverbreadth doctrine: закон слишком широк, захватывает защищённую речь<br>
      — Many candidates missed: различие между content-based и content-neutral, и соответствующие стандарты проверки
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 4 · Февраль 2025 — Contracts + Remedies</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Стороны заключили договор на услуги. Одна сторона нарушила, другая требует возмещения. Спорные вопросы о formation и damages.<br><br>
      <strong>Вопросы:</strong><br>
      1. Был ли заключён действительный договор?<br>
      2. Какие damages доступны?<br><br>
      <strong>Ключевые issues:</strong><br>
      — Common law (услуги, не товары) → mirror image rule, consideration<br>
      — Promissory estoppel как альтернатива при отсутствии consideration<br>
      — Expectation damages: поставить в положение «как если бы исполнено»<br>
      — Consequential damages: foreseeable at time of contracting (Hadley v. Baxendale rule)<br>
      — Duty to mitigate: пострадавшая сторона обязана минимизировать убытки<br>
      — Specific performance: доступно только если money damages inadequate (уникальный объект)
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 5 · Февраль 2025 — Wills + Trusts (California law)</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Tammy умерла, оставив завещание и позднейшую записку. Charitable trust на лечение болезни — болезнь вылечена после её смерти. NTC (банк-доверительный управляющий) просит изменить цель траста.<br><br>
      <strong>Вопросы:</strong><br>
      1. Действительно ли завещание? Отозвано ли оно запиской?<br>
      2. Можно ли изменить цель charitable trust?<br><br>
      <strong>Ключевые issues (California law):</strong><br>
      — Attested will: подпись + 2 свидетеля (Cal. Prob. Code §6110)<br>
      — Holographic will: материальные условия рукописно + подпись (§6111)<br>
      — Revocation by physical act vs. new will<br>
      — Testamentary trust: создаётся завещанием, вступает после смерти<br>
      — Charitable trust + cy pres doctrine: если цель траста невозможна/нецелесообразна — суд может изменить на «как можно более близкую» (as nearly as possible)<br>
      — Здесь болезнь вылечена → цель достигнута → суд применяет cy pres для перенаправления фондов
    </div>
  </div>
</div>

<div class="l-section">
  <div class="l-section-label">Июль 2025 — 5 эссе</div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 1 · Июль 2025 — Trusts (Charitable Trust + Testamentary Trust)</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Grandma умерла в 2020, оставив две трасты: Farm Trust (ферма городу для общего блага, управляет Bank) и Ancestry Trust. Ферма потеряла органическую сертификацию в 2024. Betty (внучка) хочет расторгнуть Farm Trust.<br><br>
      <strong>Вопросы:</strong><br>
      1. Действителен ли Farm Trust?<br>
      2. Может ли Bank применять пестициды?<br>
      3. Имеет ли Betty standing для расторжения?<br><br>
      <strong>Ключевые issues:</strong><br>
      — Testamentary charitable trust: все элементы (settlor, trustee, beneficiary/charitable purpose, res)<br>
      — Charitable trust не подпадает под Rule Against Perpetuities → «in perpetuity» допустимо<br>
      — Trustee's fiduciary duties: duty of loyalty, prudent investor rule<br>
      — Preference («preferred that farm be used as organic») vs. mandatory term: preference не обязательна<br>
      — Standing: обычно только AG штата. Здесь Betty имеет contingent interest (если траст провалится — ей) → вероятно, имеет standing<br>
      — Cy pres: суд может изменить purpose charitable trust при невозможности буквального исполнения
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 2 · Июль 2025 — Torts (Battery + Self-Defense + Joint Liability)</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Игра в футбол. Kate ударила Yvonne, Yvonne оттолкнула Kate. Позже — падение на осколки стекла рядом с баром (Ollie уронил стакан, Barry не убрал осколки). Множественные ответчики.<br><br>
      <strong>Вопросы:</strong><br>
      1. Иски Yvonne против Kate (battery/self-defense)?<br>
      2. Иски против Ollie и Barry (negligence)?<br>
      3. Распределение ответственности?<br><br>
      <strong>Ключевые issues:</strong><br>
      — Battery: intent + harmful/offensive contact (Kate виновна)<br>
      — Self-defense: reasonable belief of imminent harm, proportionate force (Yvonne, вероятно, защищалась)<br>
      — Consent: участие в спорте = consent к обычным контактам игры, но не к сверхагрессивным<br>
      — Negligence: Ollie (уронил стакан) + Barry (не убрал) — duty, breach, causation, damages<br>
      — Joint and several liability в Калифорнии: ограничена Prop. 51 (1986). Каждый ответчик отвечает пропорционально своей вине за экономический ущерб; non-economic — только своя доля<br>
      — Severable injuries: сломанная рука и порез — разные events → раздельная ответственность
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 3 · Июль 2025 — Professional Responsibility (California + ABA)</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Адвокат Linda представляла клиента в уголовном деле. Ходатайство о продлении срока для экспертизы дороги отклонено. Linda попросила об отводе — суд разрешил. Pat (другой адвокат) был назначен, без проверки его квалификации.<br><br>
      <strong>Вопросы:</strong><br>
      1. Какие этические нарушения совершила Linda?<br>
      2. Какие нарушения совершил Pat?<br>
      (Ответ по California и ABA rules)<br><br>
      <strong>Ключевые issues:</strong><br>
      — Linda: duty of competence (Rule 1.1) — имела ли право уйти? Обязана была обеспечить клиенту защиту<br>
      — Withdrawal: должна была убедиться, что клиент не пострадает (Rule 1.16)<br>
      — California distinction: Cal. Rules of Professional Conduct §1.16 — более строгие требования к withdrawal в уголовном деле<br>
      — Pat: duty of competence без достаточного времени на подготовку — нарушение Rule 1.1<br>
      — Duty to the court: обязан был сообщить суду о недостаточной подготовке<br>
      — Ineffective assistance of counsel (6th Amendment) — конституционный аспект
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 4 · Июль 2025 — Wills + Community Property (California)</div>
    <div class="concept-card-body">
      <strong>Фабула:</strong> Пара в браке. Муж умер. Завещание оспорено. Спор о характере имущества (CP vs SP). Crossover-вопрос.<br><br>
      <strong>Типичные issues в такой комбинации (по частоте на экзамене):</strong><br>
      — Validity of will: capacity (sound mind), formalities (Cal. Prob. Code §6110)<br>
      — Undue influence: пожилой завещатель + новый бенефициар = презумпция<br>
      — CP presumption: всё нажитое в браке = CP, если не доказано иное<br>
      — Spouse's testamentary power: каждый супруг может завещать лишь свои 50% CP<br>
      — Intestate succession: если завещание недействительно — порядок по Cal. Prob. Code §6400<br>
      — Omitted spouse/child: если супруг не упомянут — может претендовать на intestate share
    </div>
  </div>

  <div class="concept-card">
    <div class="concept-card-title">Эссе 5 · Июль 2025 — PT: Real Property (Partition Action)</div>
    <div class="concept-card-body">
      <strong>Фабула (Performance Test):</strong> Joan Tate — совладелец дома вместе с двумя кузенами (Frank и Crystal). Получили от деда. Crystal платила все расходы. Joan хочет выкупить долю кузенов принудительно.<br><br>
      <strong>Задание:</strong> Написать письмо клиентке (Joan) с разъяснением её прав по partition statute штата Columbia (вымышленный, но на основе CA law).<br><br>
      <strong>Ключевые issues PT:</strong><br>
      — Partition in kind vs. partition by sale: суд предпочитает продажу, если раздел в натуре неосуществим или причинит несоразмерный вред<br>
      — Cotenant's right: любой co-tenant вправе требовать partition<br>
      — Crystal's contribution: вправе требовать reimbursement за payments, превышающие её долю<br>
      — Письмо клиентке: юридические термины объяснять простым языком, не использовать жаргон без расшифровки<br>
      — Формат PT: ответ на конкретные вопросы клиента, с указанием сильных и слабых сторон позиции
    </div>
  </div>
</div>

<div class="hbox gold">
  <div class="hbox-label">Паттерны: что экзаменаторы любят больше всего</div>
  <div class="hbox-text">
    <strong>Professional Responsibility</strong> — тестируется почти на каждом экзамене, часто совмещается с другим предметом.<br>
    <strong>Community Property + Wills</strong> — классический crossover, появляется регулярно.<br>
    <strong>Charitable Trust + Cy Pres</strong> — появляется раз в 2-3 экзамена.<br>
    <strong>Recording Acts (Real Property)</strong> — race, notice, race-notice — стабильный issue.<br>
    <strong>Remedies</strong> — почти всегда присутствует как дополнительный call в другом предмете.<br>
    <strong>California distinctions</strong> — особенно в Evidence (Prop. 8, Cal. hearsay exceptions) и PR (Cal. Rules vs ABA).
  </div>
</div>

<div class="bar-example">
  <div class="bar-example-header">⚖ Вопрос в стиле реального эссе — Charitable Trust + Cy Pres</div>
  <div class="bar-example-body">
    <div class="bar-question">Testator's will created a charitable trust "to fund research to cure Disease X." After Testator's death, Disease X is completely cured. The trustee petitions the court to redirect the funds to cancer research. Should the court grant the petition? Discuss under California law.</div>
    <div class="bar-options">
      <div class="bar-option" onclick="selectOption(this,'A','B')"><span class="bar-option-letter">A</span> No. The trust purpose has been achieved; the trust must terminate and assets pass to the residuary estate</div>
      <div class="bar-option" onclick="selectOption(this,'B','B')"><span class="bar-option-letter">B</span> Yes, the court may apply cy pres to redirect funds to a charitable purpose as close as possible to the original</div>
      <div class="bar-option" onclick="selectOption(this,'C','B')"><span class="bar-option-letter">C</span> No. Only the settlor can change the trust purpose</div>
      <div class="bar-option" onclick="selectOption(this,'D','B')"><span class="bar-option-letter">D</span> Yes, but only if the trustee can prove the new purpose would have been approved by the testator</div>
    </div>
    <div class="bar-answer" id="ans-essay-1">
      <strong>Правильный ответ: B — cy pres doctrine.</strong><br><br>
      <strong>Issue:</strong> Can the court modify the purpose of a charitable trust when the original purpose becomes impossible or impracticable?<br><br>
      <strong>Rule:</strong> Under the cy pres doctrine (Cal. Prob. Code §15409), when a charitable trust purpose becomes impossible, impracticable, or illegal, the court may modify the trust to carry out a purpose as nearly as possible to the original intent, rather than terminating the trust.<br><br>
      <strong>Application:</strong> The trust purpose (curing Disease X) has been fulfilled — arguably making it impossible to continue literally. The testator's general intent was charitable: funding medical research. Redirecting to cancer research is as close as possible (cy pres) to that intent. The court should not simply terminate the trust and pass assets intestate when a closer charitable purpose is available.<br><br>
      <strong>Conclusion:</strong> The court will likely grant the petition under cy pres, modifying the trust purpose to cancer research, which best approximates the testator's general charitable intent.
    </div>
  </div>
</div>`
      },
      {
        title: 'Стратегия подготовки: последние 12 недель',
        content: `
<div class="l-section">
  <div class="l-section-label">Финальный спурт</div>
  <p class="l-text">Последние 10-12 недель перед экзаменом — период интенсивного Bar Prep. Это принципиально иной режим: 8-10 часов в день, 6-7 дней в неделю. Цель — не изучить право с нуля, а закрепить и довести до автоматизма.</p>
  <div class="timeline">
    <div class="tl-item highlight">
      <div class="tl-year">Недели 1-3</div>
      <div class="tl-text"><strong>Пассивная фаза.</strong> Лекции по всем предметам (Barbri/Themis). Не пытайся запомнить всё — цель: обзор и активация того, что уже знаешь. Параллельно: 25-50 MBE вопросов в день.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">Недели 4-7</div>
      <div class="tl-text"><strong>Активная фаза.</strong> Пиши эссе каждый день. Разбирай ошибки. 50-75 MBE вопросов. Выявляй слабые предметы — уделяй им дополнительное время.</div>
    </div>
    <div class="tl-item highlight">
      <div class="tl-year">Недели 8-10</div>
      <div class="tl-text"><strong>Симуляция.</strong> Полные симуляции экзамена в условиях реального времени. Разборы ошибок. MBE вопросы — только из незнакомых банков, не повторяй уже виденные.</div>
    </div>
    <div class="tl-item">
      <div class="tl-year">Недели 11-12</div>
      <div class="tl-text"><strong>Финальное закрепление.</strong> Повтори outline каждого предмета. Не учи ничего нового. Сон, питание, режим — это тоже часть подготовки.</div>
    </div>
  </div>
</div>
<div class="hbox green">
  <div class="hbox-label">Приоритеты по предметам (высокочастотные)</div>
  <div class="hbox-text">MBE: Contracts, Torts, Evidence — дают больше всего вопросов и баллов. Essays: Criminal Law, Real Property, Community Property — типичные «тяжёлые» темы. PT: практикуй формат, не содержание — структура важнее знания права.</div>
</div>`
      },
      {
        title: 'Как писать Bar Exam Essay: тактика и ошибки',
        content: `
<div class="l-section">
  <div class="l-section-label">60 минут на эссе — как распределить</div>
  <div class="hbox gold">
    <div class="hbox-label">Тактика времени</div>
    <div class="hbox-text">
      <strong>5 минут</strong> — читай задание, выдели все юридические вопросы (issues). Не начинай писать.<br>
      <strong>5 минут</strong> — составь план: какие IRAC-блоки нужны, в каком порядке.<br>
      <strong>45 минут</strong> — пиши по плану. Не останавливайся на одном вопросе — лучше покрыть все поверхностно, чем один глубоко.<br>
      <strong>5 минут</strong> — проверь, все ли issues затронуты.
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">Типичные ошибки</div>
  <table class="comp-table">
    <tr><th>Ошибка</th><th class="ru">Как избежать</th></tr>
    <tr><td>Пропустить issue</td><td class="ru">Читать медленно, подчёркивать каждый юридически значимый факт</td></tr>
    <tr><td>Слишком длинное Rule</td><td class="ru">1-2 предложения — достаточно. Главное — Application</td></tr>
    <tr><td>Слабый Application</td><td class="ru">Каждый факт задания должен быть упомянут и связан с нормой</td></tr>
    <tr><td>Нет Conclusion</td><td class="ru">Всегда заканчивай чётким «therefore...» — даже если неуверен</td></tr>
    <tr><td>Незнакомый предмет</td><td class="ru">Пиши что знаешь, применяй IRAC — частичный credit лучше пустого листа</td></tr>
  </table>
</div>`
      },
      {
        title: 'После экзамена: что делать при сдаче и при не-сдаче',
        content: `
<div class="l-section">
  <div class="l-section-label">При успешной сдаче</div>
  <p class="l-text">После успешной сдачи California Bar Exam нужно пройти процедуру <span class="l-en">character and fitness review</span> — проверку репутации. State Bar изучает историю судимостей, финансовых нарушений, дисциплинарных взысканий. Для иностранных граждан — проверка иммиграционного статуса.</p>
  <div class="hbox green">
    <div class="hbox-label">Путь к лицензии</div>
    <div class="hbox-text">
      1. Сдать California Bar Exam (прохождной балл: 1440 из 2000)<br>
      2. Сдать MPRE (минимум 86 в Калифорнии)<br>
      3. Пройти character & fitness review<br>
      4. Принести присягу (Oath) и быть sworn in<br>
      5. Получить номер лицензии California State Bar
    </div>
  </div>
</div>
<div class="l-section">
  <div class="l-section-label">При не-сдаче</div>
  <div class="hbox blue">
    <div class="hbox-label">Это нормально — статистика</div>
    <div class="hbox-text">California Bar исторически сдают с 1-го раза около 40-55% кандидатов. Для иностранных юристов процент ниже из-за языка и системных различий. Пересдавать можно неограниченное число раз. После каждого провала State Bar выдаёт breakdown по секциям — анализируй и целенаправленно улучшай слабые места.</div>
  </div>
</div>`
      }
    ]
  }
];