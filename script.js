// Official MTR Line Colors & Complete Network Data
const MTR_LINES = {
    "ISL": { name: "Island Line", color: "#0071ce", stations: ["Kennedy Town", "HKU", "Sai Ying Pun", "Sheung Wan", "Central", "Admiralty", "Wan Chai", "Causeway Bay", "Tin Hau", "Fortress Hill", "North Point", "Quarry Bay", "Tai Koo", "Sai Wan Ho", "Shau Kei Wan", "Heng Fa Chuen", "Chai Wan"] },
    "TWL": { name: "Tsuen Wan Line", color: "#e60012", stations: ["Tsuen Wan", "Tai Wo Hau", "Kwai Hing", "Kwai Fong", "Lai King", "Mei Foo", "Lai Chi Kok", "Cheung Sha Wan", "Sham Shui Po", "Prince Edward", "Mong Kok", "Yau Ma Tei", "Jordan", "Tsim Sha Tsui", "Admiralty", "Central"] },
    "KTL": { name: "Kwun Tong Line", color: "#009b3a", stations: ["Whampoa", "Ho Man Tin", "Yau Ma Tei", "Mong Kok", "Prince Edward", "Shek Kip Mei", "Kowloon Tong", "Lok Fu", "Wong Tai Sin", "Diamond Hill", "Choi Hung", "Kowloon Bay", "Ngau Tau Kok", "Kwun Tong", "Lam Tin", "Yau Tong", "Tiu Keng Leng"] },
    "EAL": { name: "East Rail Line", color: "#5cba2c", stations: ["Admiralty", "Exhibition Centre", "Hung Hom", "Mong Kok East", "Kowloon Tong", "Tai Wai", "Sha Tin", "Fo Tan", "University", "Tai Po Market", "Tai Wo", "Fanling", "Sheung Shui", "Lo Wu"] },
    "TML": { name: "Tuen Ma Line", color: "#920783", stations: ["Tuen Mun", "Siu Hong", "Tin Shui Wai", "Long Ping", "Yuen Long", "Kam Sheung Road", "Tsuen Wan West", "Mei Foo", "Nam Cheong", "Austin", "East Tsim Sha Tsui", "Hung Hom", "Ho Man Tin", "To Kwa Wan", "Sung Wong Toi", "Kai Tak", "Diamond Hill", "Hin Keng", "Tai Wai", "Sha Tin Wai", "City One", "Shek Mun", "Tai Shui Hang", "Heng On", "Ma On Shan", "Wu Kai Sha"] },
    "TKL": { name: "Tseung Kwan O Line", color: "#8d3f98", stations: ["North Point", "Quarry Bay", "Yau Tong", "Tiu Keng Leng", "Tseung Kwan O", "Hang Hau", "Po Lam"] },
    "TCL": { name: "Tung Chung Line", color: "#fe7f00", stations: ["Hong Kong", "Kowloon", "Olympic", "Nam Cheong", "Lai King", "Tsing Yi", "Sunny Bay", "Tung Chung"] },
    "AEL": { name: "Airport Express", color: "#008080", stations: ["Hong Kong", "Kowloon", "Tsing Yi", "Airport", "AsiaWorld-Expo"] },
    "SIL": { name: "South Island Line", color: "#b6bd00", stations: ["Admiralty", "Ocean Park", "Wong Chuk Hang", "Lei Tung", "South Horizons"] }
};

// Coordinate map for all stations (normalized x, y)
const POS = {
    // Island Line
    "Kennedy Town": [0.52, 0.81], "HKU": [0.55, 0.81], "Sai Ying Pun": [0.58, 0.81], "Sheung Wan": [0.61, 0.81], "Central": [0.64, 0.81], "Admiralty": [0.68, 0.81], "Wan Chai": [0.72, 0.81], "Causeway Bay": [0.76, 0.81], "Tin Hau": [0.79, 0.81], "Fortress Hill": [0.81, 0.81], "North Point": [0.83, 0.78], "Quarry Bay": [0.86, 0.78], "Tai Koo": [0.88, 0.81], "Sai Wan Ho": [0.90, 0.81], "Shau Kei Wan": [0.92, 0.83], "Heng Fa Chuen": [0.94, 0.86], "Chai Wan": [0.95, 0.90],
    // Tsuen Wan Line
    "Tsuen Wan": [0.48, 0.42], "Tai Wo Hau": [0.51, 0.45], "Kwai Hing": [0.53, 0.48], "Kwai Fong": [0.55, 0.51], "Lai King": [0.56, 0.55], "Mei Foo": [0.58, 0.59], "Lai Chi Kok": [0.60, 0.61], "Cheung Sha Wan": [0.62, 0.63], "Sham Shui Po": [0.64, 0.65], "Prince Edward": [0.66, 0.67], "Mong Kok": [0.66, 0.70], "Yau Ma Tei": [0.66, 0.73], "Jordan": [0.66, 0.76], "Tsim Sha Tsui": [0.66, 0.78],
    // Kwun Tong Line
    "Whampoa": [0.74, 0.76], "Ho Man Tin": [0.71, 0.73], "Shek Kip Mei": [0.68, 0.64], "Kowloon Tong": [0.71, 0.61], "Lok Fu": [0.74, 0.61], "Wong Tai Sin": [0.77, 0.61], "Diamond Hill": [0.80, 0.61], "Choi Hung": [0.83, 0.63], "Kowloon Bay": [0.85, 0.66], "Ngau Tau Kok": [0.87, 0.68], "Kwun Tong": [0.89, 0.70], "Lam Tin": [0.91, 0.72], "Yau Tong": [0.91, 0.75], "Tiu Keng Leng": [0.93, 0.75],
    // East Rail Line
    "Exhibition Centre": [0.70, 0.81], "Hung Hom": [0.70, 0.76], "Mong Kok East": [0.70, 0.68], "Tai Wai": [0.71, 0.53], "Sha Tin": [0.72, 0.47], "Fo Tan": [0.73, 0.42], "University": [0.74, 0.36], "Tai Po Market": [0.73, 0.28], "Tai Wo": [0.71, 0.24], "Fanling": [0.67, 0.17], "Sheung Shui": [0.63, 0.13], "Lo Wu": [0.58, 0.07],
    // Tuen Ma Line
    "Tuen Mun": [0.15, 0.48], "Siu Hong": [0.15, 0.42], "Tin Shui Wai": [0.20, 0.30], "Long Ping": [0.25, 0.30], "Yuen Long": [0.30, 0.32], "Kam Sheung Road": [0.36, 0.36], "Tsuen Wan West": [0.46, 0.52], "Nam Cheong": [0.60, 0.66], "Austin": [0.64, 0.76], "East Tsim Sha Tsui": [0.68, 0.78], "To Kwa Wan": [0.75, 0.70], "Sung Wong Toi": [0.77, 0.67], "Kai Tak": [0.79, 0.65], "Hin Keng": [0.70, 0.56], "Sha Tin Wai": [0.74, 0.53], "City One": [0.77, 0.51], "Shek Mun": [0.80, 0.49], "Tai Shui Hang": [0.82, 0.44], "Heng On": [0.83, 0.40], "Ma On Shan": [0.84, 0.37], "Wu Kai Sha": [0.87, 0.35],
    // Tseung Kwan O Line
    "Tseung Kwan O": [0.95, 0.73], "Hang Hau": [0.96, 0.69], "Po Lam": [0.96, 0.65],
    // Tung Chung Line & Airport Express
    "Hong Kong": [0.63, 0.81], "Kowloon": [0.62, 0.75], "Olympic": [0.61, 0.70], "Tsing Yi": [0.48, 0.56], "Sunny Bay": [0.32, 0.65], "Tung Chung": [0.12, 0.81], "Airport": [0.18, 0.75], "AsiaWorld-Expo": [0.14, 0.72],
    // South Island Line
    "Ocean Park": [0.70, 0.89], "Wong Chuk Hang": [0.67, 0.91], "Lei Tung": [0.66, 0.95], "South Horizons": [0.62, 0.95]
};

// Demographic Weights (Major Residential Origins vs Commercial Destinations)
const DEMOGRAPHICS = {
    // High Density Residential Hubs (Origins)
    origins: [
        { station: "Tuen Mun", weight: 0.15 },
        { station: "Sha Tin", weight: 0.14 },
        { station: "Tseung Kwan O", weight: 0.12 },
        { station: "Tai Wai", weight: 0.10 },
        { station: "Tsuen Wan", weight: 0.09 },
        { station: "Yuen Long", weight: 0.09 },
        { station: "Po Lam", weight: 0.08 },
        { station: "South Horizons", weight: 0.06 }
    ],
    // Major Employment & Commercial Hubs (Destinations)
    destinations: [
        { station: "Central", weight: 0.22 },
        { station: "Admiralty", weight: 0.20 },
        { station: "Wan Chai", weight: 0.14 },
        { station: "Causeway Bay", weight: 0.12 },
        { station: "Kowloon Bay", weight: 0.10 },
        { station: "Kwun Tong", weight: 0.10 },
        { station: "Tsim Sha Tsui", weight: 0.08 },
        { station: "Quarry Bay", weight: 0.04 }
    ]
};

let canvas, ctx, tooltip;
let graph = {}, stationQueues = {}, edgeLoads = {}, trains = [];
let camera = { x: 0, y: 0, zoom: 1, isDragging: false, dragStart: { x: 0, y: 0 } };

function initGraph() {
    Object.keys(POS).forEach(st => stationQueues[st] = []);

    Object.entries(MTR_LINES).forEach(([line, data]) => {
        let st = data.stations;
        for (let i = 0; i < st.length; i++) {
            let c = `${st[i]}|${line}`;
            graph[c] = graph[c] || [];
            if (i < st.length - 1) {
                let n = `${st[i+1]}|${line}`;
                graph[c].push({ n, w: 2 });
                graph[n] = graph[n] || [];
                graph[n].push({ n: c, w: 2 });
            }
        }

        // Spawn Trains
        for (let i = 0; i < st.length - 1; i += 3) {
            trains.push({
                line,
                currIdx: i,
                targetIdx: i + 1,
                dir: 1,
                prog: Math.random(),
                spd: 0.003,
                dwellTimer: 0,
                passengers: [], // Passengers aboard this train
                capacity: 500
            });
        }
        for (let i = st.length - 1; i > 0; i -= 3) {
            trains.push({
                line,
                currIdx: i,
                targetIdx: i - 1,
                dir: -1,
                prog: Math.random(),
                spd: 0.003,
                dwellTimer: 0,
                passengers: [],
                capacity: 500
            });
        }
    });

    let stMap = {};
    Object.keys(graph).forEach(k => {
        let [s, l] = k.split('|');
        stMap[s] = stMap[s] || [];
        stMap[s].push(l);
    });

    Object.entries(stMap).forEach(([s, lines]) => {
        lines.forEach(l1 => lines.forEach(l2 => {
            if (l1 !== l2) graph[`${s}|${l1}`].push({ n: `${s}|${l2}`, w: 3 });
        }));
    });

    // Central ↔ Hong Kong transfer passage
    (stMap["Central"] || []).forEach(l1 => (stMap["Hong Kong"] || []).forEach(l2 => {
        graph[`Central|${l1}`].push({ n: `Hong Kong|${l2}`, w: 4 });
        graph[`Hong Kong|${l2}`].push({ n: `Central|${l1}`, w: 4 });
    }));
}

function findRoute(start, end) {
    let dist = {}, prev = {}, q = [];
    Object.keys(graph).forEach(k => {
        if (k.startsWith(start + '|')) { dist[k] = 0; q.push(k); }
        else dist[k] = Infinity;
    });

    while (q.length > 0) {
        q.sort((a, b) => dist[a] - dist[b]);
        let curr = q.shift();
        let [st] = curr.split('|');
        if (st === end) {
            let path = [];
            while (curr) { path.unshift(curr); curr = prev[curr]; }
            let cleanPath = [];
            path.forEach(n => {
                let [s] = n.split('|');
                if (cleanPath[cleanPath.length - 1] !== s) cleanPath.push(s);
            });
            return cleanPath;
        }
        (graph[curr] || []).forEach(edge => {
            let alt = dist[curr] + edge.w;
            if (alt < dist[edge.n]) {
                dist[edge.n] = alt;
                prev[edge.n] = curr;
                q.push(edge.n);
            }
        });
    }
    return null;
}

function injectPassengers(start, end, count) {
    let path = findRoute(start, end);
    if (!path || path.length < 2) return;

    for (let i = 0; i < count; i++) {
        stationQueues[start].push({
            origin: start,
            destination: end,
            path: path,
            pathIdx: 0
        });
    }
    log(`+${count} waiting at ${start} ➔ ${end}`);
}

function processBoardingAndAlighting(train, currentStationName) {
    // 1. Alight Passengers
    for (let i = train.passengers.length - 1; i >= 0; i--) {
        let pax = train.passengers[i];
        let nextTarget = pax.path[pax.pathIdx + 1];
        
        // If passenger reached destination or needs transfer at this station
        if (nextTarget === currentStationName || pax.destination === currentStationName) {
            pax.pathIdx++;
            train.passengers.splice(i, 1);
            if (pax.destination !== currentStationName) {
                // Transfer: Add to current station queue for next line
                stationQueues[currentStationName].push(pax);
            }
        }
    }

    // 2. Board Passengers from Station Queue
    let queue = stationQueues[currentStationName] || [];
    let lineStations = MTR_LINES[train.line].stations;
    let nextStationInLine = lineStations[train.targetIdx];

    for (let i = queue.length - 1; i >= 0; i--) {
        if (train.passengers.length >= train.capacity) break; // Train full

        let pax = queue[i];
        let desiredNextStation = pax.path[pax.pathIdx + 1];

        // Board if train is heading towards passenger's next target station
        if (desiredNextStation === nextStationInLine) {
            train.passengers.push(pax);
            queue.splice(i, 1);
        }
    }
}

function triggerDemographicPeakCommute() {
    DEMOGRAPHICS.origins.forEach(orig => {
        DEMOGRAPHICS.destinations.forEach(dest => {
            if (orig.station !== dest.station) {
                let paxCount = Math.round(orig.weight * dest.weight * 3500);
                injectPassengers(orig.station, dest.station, paxCount);
            }
        });
    });
    log("Morning Rush Peak Commute Injected!");
}

function setupAnalyticsUI() {
    let container = document.getElementById('utilization-bars');
    container.innerHTML = '';
    Object.entries(MTR_LINES).forEach(([key, line]) => {
        container.innerHTML += `
            <div class="util-row">
                <span style="width:70px; color:${line.color}; font-weight:bold">${line.name.split(' ')[0]}</span>
                <div class="util-bar-bg">
                    <div id="bar-${key}" class="util-bar-fill" style="background:${line.color}"></div>
                </div>
                <span id="val-${key}" style="width:30px; text-align:right">0%</span>
            </div>
        `;
    });
}

function updateAnalytics() {
    Object.entries(MTR_LINES).forEach(([lineKey, lineData]) => {
        let lineTrains = trains.filter(t => t.line === lineKey);
        let totalPax = lineTrains.reduce((sum, t) => sum + t.passengers.length, 0);
        let totalCapacity = lineTrains.length * 500;
        let loadPct = totalCapacity > 0 ? Math.min(Math.round((totalPax / totalCapacity) * 100), 100) : 0;

        let bar = document.getElementById(`bar-${lineKey}`);
        let val = document.getElementById(`val-${lineKey}`);
        if (bar && val) {
            bar.style.width = `${loadPct}%`;
            val.innerText = `${loadPct}%`;
        }
    });
}

function setupCameraPanZoom() {
    canvas.addEventListener('mousedown', (e) => {
        camera.isDragging = true;
        camera.dragStart = { x: e.clientX - camera.x, y: e.clientY - camera.y };
    });

    window.addEventListener('mousemove', (e) => {
        if (camera.isDragging) {
            camera.x = e.clientX - camera.dragStart.x;
            camera.y = e.clientY - camera.dragStart.y;
        }

        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left - camera.x) / camera.zoom;
        const my = (e.clientY - rect.top - camera.y) / camera.zoom;

        let found = null;
        Object.entries(POS).forEach(([name, p]) => {
            let sx = p[0] * canvas.width;
            let sy = p[1] * canvas.height;
            if (Math.hypot(mx - sx, my - sy) < 8 / camera.zoom) {
                found = name;
            }
        });

        if (found) {
            let qCount = (stationQueues[found] || []).length;
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.clientX + 12}px`;
            tooltip.style.top = `${e.clientY + 12}px`;
            tooltip.innerText = `Station: ${found}\nWaiting Passengers: ${qCount}`;
        } else {
            tooltip.style.display = 'none';
        }
    });

    window.addEventListener('mouseup', () => camera.isDragging = false);

    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        let zoomFactor = e.deltaY < 0 ? 1.15 : 0.85;
        camera.zoom = Math.min(Math.max(0.6, camera.zoom * zoomFactor), 4.0);
    });

    document.getElementById('btn-zoom-in').onclick = () => camera.zoom = Math.min(camera.zoom * 1.2, 4.0);
    document.getElementById('btn-zoom-out').onclick = () => camera.zoom = Math.max(camera.zoom * 0.8, 0.6);
    document.getElementById('btn-zoom-reset').onclick = () => { camera.zoom = 1; camera.x = 0; camera.y = 0; };
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(camera.x, camera.y);
    ctx.scale(camera.zoom, camera.zoom);

    // 1. Draw MTR Lines
    Object.values(MTR_LINES).forEach(line => {
        ctx.beginPath();
        for (let i = 0; i < line.stations.length - 1; i++) {
            let a = POS[line.stations[i]], b = POS[line.stations[i+1]];
            if (a && b) {
                ctx.moveTo(a[0] * canvas.width, a[1] * canvas.height);
                ctx.lineTo(b[0] * canvas.width, b[1] * canvas.height);
            }
        }
        ctx.strokeStyle = line.color;
        ctx.lineWidth = 4 / camera.zoom;
        ctx.stroke();
    });

    // 2. Draw Stations & Station Waiting Queues
    Object.entries(POS).forEach(([name, p]) => {
        let sx = p[0] * canvas.width, sy = p[1] * canvas.height;
        let qLen = (stationQueues[name] || []).length;

        // Station Circle Base
        ctx.beginPath();
        ctx.arc(sx, sy, 3.5 / camera.zoom, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Platform Queue Ring Indicator (Grows with crowdedness)
        if (qLen > 0) {
            let ringRadius = (5 + Math.min(qLen / 20, 15)) / camera.zoom;
            ctx.beginPath();
            ctx.arc(sx, sy, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = qLen > 300 ? "rgba(239, 68, 68, 0.8)" : "rgba(245, 158, 11, 0.7)";
            ctx.lineWidth = 2 / camera.zoom;
            ctx.stroke();
        }
    });

    // 3. Render Active Trains & Passengers Inside
    trains.forEach(tr => {
        let stList = MTR_LINES[tr.line].stations;
        
        // Handle Station Platform Dwell Pause
        if (tr.dwellTimer > 0) {
            tr.dwellTimer -= 1;
            
            // Process Boarding / Alighting once when train arrives at platform
            if (tr.dwellTimer === 38) {
                processBoardingAndAlighting(tr, stList[tr.currIdx]);
                updateAnalytics();
            }

            let p = POS[stList[tr.currIdx]];
            if (p) {
                let offset = tr.dir * (3 / camera.zoom);
                let x = p[0] * canvas.width + offset;
                let y = p[1] * canvas.height + offset;

                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(x, y, 4 / camera.zoom, 0, Math.PI * 2);
                ctx.fill();
            }
            return;
        }

        // Advance Train Position
        tr.prog += tr.spd;
        if (tr.prog >= 1) {
            tr.prog = 0;
            tr.currIdx = tr.targetIdx;
            tr.targetIdx += tr.dir;
            tr.dwellTimer = 40; // Platform stop dwell timer

            // Terminal turnaround
            if (tr.targetIdx >= stList.length || tr.targetIdx < 0) {
                tr.dir *= -1;
                tr.targetIdx = tr.currIdx + tr.dir;
                tr.dwellTimer = 90;
            }
        }

        let p1 = POS[stList[tr.currIdx]], p2 = POS[stList[tr.targetIdx]];
        if (p1 && p2) {
            let x1 = p1[0] * canvas.width, y1 = p1[1] * canvas.height;
            let x2 = p2[0] * canvas.width, y2 = p2[1] * canvas.height;

            let dx = x2 - x1;
            let dy = y2 - y1;
            let len = Math.hypot(dx, dy) || 1;
            
            let nx = -dy / len * (3.5 / camera.zoom) * tr.dir;
            let ny = dx / len * (3.5 / camera.zoom) * tr.dir;

            let cx = (x1 + dx * tr.prog) + nx;
            let cy = (y1 + dy * tr.prog) + ny;

            let angle = Math.atan2(dy, dx);

            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle);

            // Train Capsule Body
            ctx.fillStyle = MTR_LINES[tr.line].color;
            ctx.beginPath();
            ctx.roundRect(-7 / camera.zoom, -3 / camera.zoom, 14 / camera.zoom, 6 / camera.zoom, 3 / camera.zoom);
            ctx.fill();

            // Train Headlight
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(5 / camera.zoom, 0, 1.5 / camera.zoom, 0, Math.PI * 2);
            ctx.fill();

            // Passenger Capacity Indicator Bar (On top of train carriage)
            let fullness = tr.passengers.length / tr.capacity;
            if (fullness > 0) {
                ctx.fillStyle = fullness > 0.8 ? "#ef4444" : "#38bdf8";
                ctx.fillRect(-6 / camera.zoom, -4.5 / camera.zoom, (12 * fullness) / camera.zoom, 1.2 / camera.zoom);
            }

            ctx.restore();
        }
    });

    ctx.restore();
    requestAnimationFrame(draw);
}

function log(msg) {
    let l = document.getElementById('log');
    l.innerHTML += `<div>${msg}</div>`;
    l.scrollTop = l.scrollHeight;
}

function resize() {
    let p = document.getElementById('viewport');
    canvas.width = p.clientWidth;
    canvas.height = p.clientHeight;
}

window.onload = () => {
    canvas = document.getElementById('cvs');
    ctx = canvas.getContext('2d');
    tooltip = document.getElementById('tooltip');

    initGraph();
    setupAnalyticsUI();
    resize();
    setupCameraPanZoom();
    window.onresize = resize;

    let keys = Object.keys(POS).sort();
    let s1 = document.getElementById('start'), s2 = document.getElementById('end');
    keys.forEach(k => { s1.add(new Option(k, k)); s2.add(new Option(k, k)); });
    s1.value = "Tuen Mun"; s2.value = "Central";

    document.getElementById('btn-go').onclick = () => {
        injectPassengers(s1.value, s2.value, parseInt(document.getElementById('pax').value) || 500);
    };

    document.getElementById('btn-rush').onclick = () => {
        triggerDemographicPeakCommute();
    };

    document.getElementById('btn-cross').onclick = () => {
        injectPassengers("Hung Hom", "Exhibition Centre", 800);
        injectPassengers("Tsim Sha Tsui", "Admiralty", 1000);
    };

    document.getElementById('btn-clear').onclick = () => {
        Object.keys(stationQueues).forEach(k => stationQueues[k] = []);
        trains.forEach(t => t.passengers = []);
        updateAnalytics();
        log("Cleared all waiting station queues and onboard passengers.");
    };

    const slider = document.getElementById('time-slider');
    const clockDisplay = document.getElementById('clock-display');
    slider.oninput = (e) => {
        let mins = parseInt(e.target.value);
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        let ampm = h >= 12 ? 'PM' : 'AM';
        let displayH = h % 12 === 0 ? 12 : h % 12;
        clockDisplay.innerText = `${String(displayH).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
    };

    draw();
};
