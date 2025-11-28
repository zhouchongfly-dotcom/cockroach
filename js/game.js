// 游戏配置
const CONFIG = {
    canvas: {
        width: 900,
        height: 700
    },
    cockroach: {
        baseSize: 35,
        baseSpeed: 2,
        speedIncrement: 0.4, // 每关速度增加
        spawnRate: 2000, // 生成间隔（毫秒）
        spawnRateDecrement: 100 // 每关减少的生成间隔
    },
    game: {
        initialLives: 3,
        levelTime: 60, // 每关时间（秒）
        pointsPerKill: 10,
        levelPointsBonus: 50, // 过关奖励
        coinsPerKill: 5, // 击杀获得金币
        coinsPerLevel: 50, // 通关获得金币
        coinsPerfectBonus: 20 // 无伤通关额外金币
    },
    // 蟑螂藏身点（墙缝、橱柜等）
    hideSpots: [
        // 左上角墙缝
        { x: 30, y: 30, width: 80, height: 15, type: 'crack' },
        // 右上角墙缝
        { x: 790, y: 30, width: 80, height: 15, type: 'crack' },
        // 左侧橱柜缝隙
        { x: 30, y: 150, width: 15, height: 100, type: 'cabinet' },
        // 右侧冰箱后面
        { x: 855, y: 200, width: 15, height: 120, type: 'fridge' },
        // 下方橱柜缝隙
        { x: 200, y: 655, width: 150, height: 15, type: 'cabinet' },
        { x: 550, y: 655, width: 150, height: 15, type: 'cabinet' }
    ]
};

// 商店物品配置
const SHOP_ITEMS = {
    slippers: [
        // 普通拖鞋 (60%概率)
        { id: 'default', name: '默认拖鞋', icon: '👟', rarity: 'common', color: '#d4663f', pattern: 'solid', shape: 'slipper' },
        { id: 'blue', name: '蓝色拖鞋', icon: '👟', rarity: 'common', color: '#4a90e2', pattern: 'solid', shape: 'slipper' },
        { id: 'green', name: '绿色拖鞋', icon: '👟', rarity: 'common', color: '#4caf50', pattern: 'solid', shape: 'slipper' },
        { id: 'red', name: '红色拖鞋', icon: '👟', rarity: 'common', color: '#e74c3c', pattern: 'solid', shape: 'slipper' },
        { id: 'yellow', name: '黄色拖鞋', icon: '👟', rarity: 'common', color: '#f1c40f', pattern: 'solid', shape: 'slipper' },
        { id: 'purple', name: '紫色拖鞋', icon: '👟', rarity: 'common', color: '#9b59b6', pattern: 'solid', shape: 'slipper' },
        { id: 'pink', name: '粉色拖鞋', icon: '👟', rarity: 'common', color: '#ff69b4', pattern: 'solid', shape: 'slipper' },
        { id: 'orange', name: '橙色拖鞋', icon: '👟', rarity: 'common', color: '#ff9800', pattern: 'solid', shape: 'slipper' },

        // 稀有拖鞋 (30%概率)
        { id: 'sport', name: '运动鞋', icon: '👟', rarity: 'rare', color: '#e74c3c', pattern: 'stripe', shape: 'sneaker' },
        { id: 'heel', name: '高跟鞋', icon: '👠', rarity: 'rare', color: '#c2185b', pattern: 'solid', shape: 'heel' },
        { id: 'sandal', name: '凉鞋', icon: '🩴', rarity: 'rare', color: '#795548', pattern: 'strap', shape: 'sandal' },
        { id: 'canvas', name: '帆布鞋', icon: '👟', rarity: 'rare', color: '#ecf0f1', pattern: 'solid', shape: 'sneaker' },
        { id: 'leopard', name: '豹纹拖鞋', icon: '👟', rarity: 'rare', color: '#d4a373', pattern: 'leopard', shape: 'slipper' },
        { id: 'camo', name: '迷彩拖鞋', icon: '👟', rarity: 'rare', color: '#556b2f', pattern: 'camo', shape: 'slipper' },
        { id: 'striped', name: '条纹拖鞋', icon: '👟', rarity: 'rare', color: '#3498db', pattern: 'hstripe', shape: 'slipper' },
        { id: 'denim', name: '牛仔拖鞋', icon: '👟', rarity: 'rare', color: '#5b7c99', pattern: 'denim', shape: 'slipper' },

        // 史诗拖鞋 (10%概率)
        { id: 'golden', name: '黄金拖鞋', icon: '👑', rarity: 'epic', color: '#ffd700', pattern: 'solid', shape: 'slipper', glow: true, glowColor: '#ffd700' },
        { id: 'neon', name: '霓虹拖鞋', icon: '✨', rarity: 'epic', color: '#00ffff', pattern: 'solid', shape: 'slipper', glow: true, glowColor: 'rainbow' },
        { id: 'diamond', name: '钻石拖鞋', icon: '💎', rarity: 'epic', color: '#e8e8e8', pattern: 'sparkle', shape: 'slipper', glow: true, glowColor: '#ffffff' },
        { id: 'fire', name: '火焰拖鞋', icon: '🔥', rarity: 'epic', color: '#ff4500', pattern: 'flame', shape: 'slipper', glow: true, glowColor: '#ff6347' },
        { id: 'ice', name: '冰霜拖鞋', icon: '❄️', rarity: 'epic', color: '#87ceeb', pattern: 'frost', shape: 'slipper', glow: true, glowColor: '#b0e0e6' },
        { id: 'rainbow', name: '彩虹拖鞋', icon: '🌈', rarity: 'epic', color: 'rainbow', pattern: 'rainbow', shape: 'slipper', glow: false },
        { id: 'laser', name: '激光拖鞋', icon: '⚡', rarity: 'epic', color: '#00ffaa', pattern: 'circuit', shape: 'sneaker', glow: true, glowColor: '#00ffaa' },
        { id: 'starry', name: '星空拖鞋', icon: '⭐', rarity: 'epic', color: '#1a1a3e', pattern: 'stars', shape: 'slipper', glow: false }
    ],
    themes: [
        { id: 'default', name: '经典厨房', icon: '🏠', rarity: 'common', price: 0 },
        { id: 'modern', name: '现代厨房', icon: '🏢', rarity: 'common', price: 100 },
        { id: 'vintage', name: '复古厨房', icon: '🕰️', rarity: 'rare', price: 250 },
        { id: 'japanese', name: '日式厨房', icon: '🎌', rarity: 'rare', price: 280 },
        { id: 'scifi', name: '科幻厨房', icon: '🚀', rarity: 'epic', price: 700 },
        { id: 'candy', name: '糖果厨房', icon: '🍭', rarity: 'epic', price: 800 }
    ],
    effects: [
        { id: 'default', name: '普通拍打', icon: '💨', rarity: 'common', price: 0 },
        { id: 'stars', name: '星星特效', icon: '⭐', rarity: 'common', price: 80 },
        { id: 'fire', name: '火焰特效', icon: '🔥', rarity: 'rare', price: 200 },
        { id: 'lightning', name: '闪电特效', icon: '⚡', rarity: 'rare', price: 220 },
        { id: 'explosion', name: '爆炸特效', icon: '💥', rarity: 'epic', price: 450 },
        { id: 'freeze', name: '冰冻特效', icon: '❄️', rarity: 'epic', price: 500 },
        { id: 'rainbow', name: '彩虹特效', icon: '🌈', rarity: 'epic', price: 550 }
    ]
};

// 粒子类（用于击杀特效）
class Particle {
    constructor(x, y, effect) {
        this.x = x;
        this.y = y;
        this.effect = effect;
        this.life = 1; // 生命值 1->0
        this.alpha = 1;

        // 根据特效类型设置粒子属性
        switch(effect) {
            case 'stars':
                this.size = 10 + Math.random() * 10;
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = (Math.random() - 0.5) * 4 - 2;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.2;
                this.color = '#ffd700';
                break;

            case 'fire':
                this.size = 8 + Math.random() * 12;
                this.vx = (Math.random() - 0.5) * 3;
                this.vy = -Math.random() * 4 - 2;
                this.rotation = 0;
                this.rotationSpeed = 0;
                this.color = ['#ff4500', '#ff6347', '#ffa500', '#ffff00'][Math.floor(Math.random() * 4)];
                break;

            case 'lightning':
                this.size = 15 + Math.random() * 15;
                this.vx = (Math.random() - 0.5) * 6;
                this.vy = (Math.random() - 0.5) * 6;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = 0;
                this.color = ['#00ffff', '#ffffff', '#ffff00'][Math.floor(Math.random() * 3)];
                this.flash = true;
                break;

            case 'explosion':
                this.size = 5 + Math.random() * 8;
                this.angle = Math.random() * Math.PI * 2;
                this.speed = 3 + Math.random() * 5;
                this.vx = Math.cos(this.angle) * this.speed;
                this.vy = Math.sin(this.angle) * this.speed;
                this.rotation = 0;
                this.rotationSpeed = 0;
                this.color = ['#ff0000', '#ff4500', '#ff8c00', '#ffa500'][Math.floor(Math.random() * 4)];
                break;

            case 'freeze':
                this.size = 8 + Math.random() * 10;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = Math.random() * 3 + 1;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.15;
                this.color = ['#00ffff', '#87ceeb', '#b0e0e6', '#ffffff'][Math.floor(Math.random() * 4)];
                break;

            case 'rainbow':
                this.size = 10 + Math.random() * 12;
                this.vx = (Math.random() - 0.5) * 5;
                this.vy = (Math.random() - 0.5) * 5;
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.3;
                this.hue = Math.random() * 360;
                this.color = `hsl(${this.hue}, 100%, 50%)`;
                break;

            default: // 'default' - 简单烟雾效果
                this.size = 12 + Math.random() * 8;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = (Math.random() - 0.5) * 2 - 1;
                this.rotation = 0;
                this.rotationSpeed = 0;
                this.color = '#888888';
        }
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        // 重力效果（除了闪电）
        if (this.effect !== 'lightning') {
            this.vy += 0.15;
        }

        // 生命值衰减
        this.life -= 0.02;
        this.alpha = this.life;

        // 特殊效果更新
        if (this.effect === 'rainbow') {
            this.hue = (this.hue + 5) % 360;
            this.color = `hsl(${this.hue}, 100%, 50%)`;
        }

        return this.life > 0;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        switch(this.effect) {
            case 'stars':
                // 绘制星星
                ctx.fillStyle = this.color;
                ctx.beginPath();
                for (let i = 0; i < 5; i++) {
                    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                    const radius = i % 2 === 0 ? this.size : this.size / 2;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    if (i === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.fill();
                break;

            case 'fire':
                // 绘制火焰粒子
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                break;

            case 'lightning':
                // 绘制闪电
                if (this.flash && Math.random() > 0.5) {
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(-this.size, 0);
                    ctx.lineTo(this.size, 0);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(0, this.size);
                    ctx.stroke();
                }
                break;

            case 'explosion':
                // 绘制爆炸粒子
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                // 外圈光晕
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(0, 0, this.size * 1.5, 0, Math.PI * 2);
                ctx.stroke();
                break;

            case 'freeze':
                // 绘制冰晶
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = (i * Math.PI) / 3;
                    ctx.moveTo(0, 0);
                    ctx.lineTo(Math.cos(angle) * this.size, Math.sin(angle) * this.size);
                }
                ctx.stroke();
                break;

            case 'rainbow':
                // 绘制彩虹圆点
                ctx.fillStyle = this.color;
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 10;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                break;

            default:
                // 默认烟雾
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
        }

        ctx.restore();
    }
}

// 蟑螂类
class Cockroach {
    constructor(level, canvasWidth, canvasHeight) {
        this.size = CONFIG.cockroach.baseSize;
        this.speed = CONFIG.cockroach.baseSpeed + (level - 1) * CONFIG.cockroach.speedIncrement;
        this.alive = true;
        this.dying = false;
        this.dyingTime = 0;

        // 保存canvas尺寸，用于边界检测
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        // 在厨房中央区域随机生成（避免橱柜区域）
        const margin = 120;
        this.x = margin + Math.random() * (canvasWidth - margin * 2);
        this.y = margin + Math.random() * (canvasHeight - margin * 2);

        // 随机选择一个藏身点作为目标
        const hideSpot = CONFIG.hideSpots[Math.floor(Math.random() * CONFIG.hideSpots.length)];
        this.targetX = hideSpot.x + hideSpot.width / 2;
        this.targetY = hideSpot.y + hideSpot.height / 2;

        // 计算朝向目标的角度
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        this.angle = Math.atan2(dy, dx);

        // 添加一点随机偏移，让路径不那么直接
        this.angle += (Math.random() - 0.5) * 0.5;

        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;

        // 腿部动画
        this.legPhase = Math.random() * Math.PI * 2;

        // 记录目标藏身点（用于检测是否到达）
        this.hideSpot = hideSpot;
    }

    update() {
        if (this.dying) {
            this.dyingTime++;
            if (this.dyingTime > 20) {
                this.alive = false;
            }
            return;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.legPhase += 0.3;

        // 检查是否到达藏身点
        const hs = this.hideSpot;
        if (this.x >= hs.x && this.x <= hs.x + hs.width &&
            this.y >= hs.y && this.y <= hs.y + hs.height) {
            this.alive = false;
            return false; // 返回false表示逃进藏身点了
        }

        // 边界检查（防止bug导致蟑螂跑出画面）
        if (this.x < -50 || this.x > this.canvasWidth + 50 ||
            this.y < -50 || this.y > this.canvasHeight + 50) {
            this.alive = false;
            return false;
        }

        return true;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        if (this.dying) {
            // 死亡动画：缩小并变透明（被拍死）
            const scale = 1 - this.dyingTime / 30;
            ctx.scale(scale, scale);
            ctx.globalAlpha = 0.6;
        }

        // 卡通化蟑螂绘制 - 三段式圆润身体
        const bodyColor = '#5c4033'; // 亮棕色
        const darkColor = '#3d2817'; // 深色（阴影和分段线）
        const legColor = '#3d2817';

        // 1. 绘制底部阴影（增加深度感）
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(2, 4, this.size / 2.5, this.size / 3.5, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. 绘制腿部（在身体下方，6条腿，每侧3条）
        ctx.strokeStyle = legColor;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';

        const legPositions = [
            // 左侧3条腿（从前到后）
            { bodyOffset: -0.3, angle: -75, side: -1 },
            { bodyOffset: 0, angle: -90, side: -1 },
            { bodyOffset: 0.3, angle: -105, side: -1 },
            // 右侧3条腿
            { bodyOffset: -0.3, angle: 75, side: 1 },
            { bodyOffset: 0, angle: 90, side: 1 },
            { bodyOffset: 0.3, angle: 105, side: 1 }
        ];

        legPositions.forEach((leg, i) => {
            const legWave = Math.sin(this.legPhase + i * 0.8) * 0.15; // 简化的摆动
            const startX = leg.bodyOffset * this.size * 0.5;
            const startY = leg.side * this.size / 5;

            const legAngle = (leg.angle + legWave * 30) * Math.PI / 180;
            const legLen1 = this.size * 0.45; // 第一段腿长度
            const legLen2 = this.size * 0.35; // 第二段腿长度

            // 第一段（从身体到关节）
            const jointX = startX + Math.cos(legAngle) * legLen1;
            const jointY = startY + Math.sin(legAngle) * legLen1;

            // 第二段（从关节到脚）
            const footAngle = legAngle + 0.6; // 第二段向下弯曲
            const footX = jointX + Math.cos(footAngle) * legLen2;
            const footY = jointY + Math.sin(footAngle) * legLen2;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(jointX, jointY);
            ctx.lineTo(footX, footY);
            ctx.stroke();
        });

        // 3. 绘制三段式身体
        // 腹部（最大，后方）
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.arc(-this.size * 0.15, 0, this.size / 2.8, 0, Math.PI * 2);
        ctx.fill();

        // 胸部（中等，中间）
        ctx.beginPath();
        ctx.arc(this.size * 0.05, 0, this.size / 3.5, 0, Math.PI * 2);
        ctx.fill();

        // 头部（最小，前方）
        ctx.beginPath();
        ctx.arc(this.size * 0.28, 0, this.size / 5, 0, Math.PI * 2);
        ctx.fill();

        // 4. 绘制身体分段线（增强立体感）
        ctx.strokeStyle = darkColor;
        ctx.lineWidth = 1.5;

        // 腹部和胸部之间的分段线
        ctx.beginPath();
        ctx.moveTo(-this.size * 0.05, -this.size / 4);
        ctx.lineTo(-this.size * 0.05, this.size / 4);
        ctx.stroke();

        // 胸部和头部之间的分段线
        ctx.beginPath();
        ctx.moveTo(this.size * 0.18, -this.size / 5);
        ctx.lineTo(this.size * 0.18, this.size / 5);
        ctx.stroke();

        // 5. 绘制触角（更圆润的设计）
        ctx.strokeStyle = legColor;
        ctx.lineWidth = 2;

        // 左触角
        ctx.beginPath();
        ctx.moveTo(this.size * 0.28, -this.size / 8);
        ctx.quadraticCurveTo(this.size * 0.4, -this.size / 3, this.size * 0.45, -this.size / 2.5);
        ctx.stroke();
        // 触角尖端小球
        ctx.fillStyle = legColor;
        ctx.beginPath();
        ctx.arc(this.size * 0.45, -this.size / 2.5, 2, 0, Math.PI * 2);
        ctx.fill();

        // 右触角
        ctx.strokeStyle = legColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.size * 0.28, this.size / 8);
        ctx.quadraticCurveTo(this.size * 0.4, this.size / 3, this.size * 0.45, this.size / 2.5);
        ctx.stroke();
        // 触角尖端小球
        ctx.fillStyle = legColor;
        ctx.beginPath();
        ctx.arc(this.size * 0.45, this.size / 2.5, 2, 0, Math.PI * 2);
        ctx.fill();

        // 6. 绘制卡通眼睛
        ctx.fillStyle = '#000000';
        // 左眼
        ctx.beginPath();
        ctx.arc(this.size * 0.32, -this.size / 12, 2.5, 0, Math.PI * 2);
        ctx.fill();
        // 右眼
        ctx.beginPath();
        ctx.arc(this.size * 0.32, this.size / 12, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // 眼睛高光（让眼睛更有神）
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.size * 0.33, -this.size / 12 - 1, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(this.size * 0.33, this.size / 12 - 1, 1, 0, Math.PI * 2);
        ctx.fill();

        // 7. 绘制身体高光（增加光泽感）
        const gradient = ctx.createRadialGradient(
            -this.size * 0.1, -this.size * 0.15, 0,
            -this.size * 0.1, -this.size * 0.15, this.size / 3
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(-this.size * 0.1, -this.size * 0.15, this.size / 4, this.size / 6, -0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    isClicked(x, y) {
        // 使用椭圆碰撞检测（蟑螂是椭圆形）
        // 并且放宽碰撞范围，让玩家更容易点击
        const dx = x - this.x;
        const dy = y - this.y;

        // 椭圆半径（比实际绘制的略大，方便玩家点击）
        const radiusX = this.size / 1.8; // 横向半径（更宽）
        const radiusY = this.size / 2.3; // 纵向半径

        // 椭圆碰撞检测公式
        const normalized = (dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY);
        return normalized <= 1;
    }

    kill() {
        this.dying = true;
    }
}

// 游戏主类
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();

        // 游戏状态
        this.state = 'start'; // start, playing, paused, gameover
        this.score = 0;
        this.level = 1;
        this.lives = CONFIG.game.initialLives;
        this.timeLeft = CONFIG.game.levelTime;
        this.cockroaches = [];
        this.particles = []; // 粒子特效数组
        this.soundEnabled = true;

        // 拖鞋状态
        this.slipperX = 0;
        this.slipperY = 0;
        this.slipperVisible = false;
        this.slipperHitting = false;
        this.slipperHitProgress = 0;

        // 金币和装备系统
        this.coins = 0;
        this.ownedItems = [];
        this.equippedSlipper = 'default';
        this.equippedTheme = 'default';
        this.equippedEffect = 'default';
        this.initialLivesForLevel = CONFIG.game.initialLives; // 记录本关开始时的生命值

        // 定时器
        this.gameTimer = null;
        this.spawnTimer = null;
        this.lastTime = 0;

        // 加载存档数据
        this.loadGameData();

        this.setupEventListeners();
    }

    setupCanvas() {
        // 设置canvas实际尺寸
        this.canvas.width = CONFIG.canvas.width;
        this.canvas.height = CONFIG.canvas.height;
    }

    setupEventListeners() {
        // 开始按钮
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startGame();
        });

        // 继续按钮
        document.getElementById('resumeBtn').addEventListener('click', () => {
            this.resumeGame();
        });

        // 重新开始按钮
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.resetGame();
            this.startGame();
        });

        // 再玩一次按钮
        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.resetGame();
            this.startGame();
        });

        // 暂停按钮
        document.getElementById('pauseBtn').addEventListener('click', () => {
            this.pauseGame();
        });

        // 音效按钮
        document.getElementById('soundBtn').addEventListener('click', () => {
            this.toggleSound();
        });

        // Canvas鼠标移动事件（跟踪拖鞋位置）
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.slipperX = (e.clientX - rect.left) * (this.canvas.width / rect.width);
            this.slipperY = (e.clientY - rect.top) * (this.canvas.height / rect.height);
            this.slipperVisible = true;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.slipperVisible = false;
        });

        // Canvas点击事件
        this.canvas.addEventListener('click', (e) => {
            if (this.state === 'playing') {
                this.handleClick(e);
            }
        });

        // 移动端触摸事件支持
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault(); // 防止默认行为（如页面滚动）
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.slipperX = (touch.clientX - rect.left) * (this.canvas.width / rect.width);
            this.slipperY = (touch.clientY - rect.top) * (this.canvas.height / rect.height);
            this.slipperVisible = true;
        }, { passive: false });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.slipperX = (touch.clientX - rect.left) * (this.canvas.width / rect.width);
            this.slipperY = (touch.clientY - rect.top) * (this.canvas.height / rect.height);
            this.slipperVisible = true;
        }, { passive: false });

        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (this.state === 'playing') {
                // 使用最后记录的拖鞋位置来处理点击
                this.handleTouch();
            }
        }, { passive: false });

        this.canvas.addEventListener('touchcancel', () => {
            this.slipperVisible = false;
        });

        // 键盘事件
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.state === 'playing') {
                this.pauseGame();
            }
        });

        // 商店按钮
        document.getElementById('shopBtn').addEventListener('click', () => {
            this.openShop();
        });

        // 商店关闭按钮
        document.getElementById('shopCloseBtn').addEventListener('click', () => {
            this.closeShop();
        });

        // 商店标签页切换
        document.querySelectorAll('.shop-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.switchShopTab(e.target.dataset.tab);
            });
        });
    }

    startGame() {
        console.log('🎮 游戏开始！');
        this.state = 'playing';
        this.hideAllOverlays();

        // 开始游戏循环
        this.lastTime = performance.now();
        this.gameLoop(this.lastTime);

        // 开始计时器
        this.startTimer();

        // 开始生成蟑螂
        this.startSpawning();
        console.log('✅ 游戏初始化完成，蟑螂数量:', this.cockroaches.length);
    }

    pauseGame() {
        if (this.state !== 'playing') return;

        this.state = 'paused';
        this.showOverlay('pauseScreen');
        this.stopTimer();
        this.stopSpawning();
    }

    resumeGame() {
        this.state = 'playing';
        this.hideAllOverlays();
        this.lastTime = performance.now();
        this.gameLoop(this.lastTime);
        this.startTimer();
        this.startSpawning();
    }

    resetGame() {
        this.score = 0;
        this.level = 1;
        this.lives = CONFIG.game.initialLives;
        this.timeLeft = CONFIG.game.levelTime;
        this.cockroaches = [];
        this.updateUI();
        this.stopTimer();
        this.stopSpawning();
    }

    gameOver(won = false) {
        this.state = 'gameover';
        this.stopTimer();
        this.stopSpawning();

        const title = document.getElementById('gameOverTitle');
        const message = document.getElementById('gameOverMessage');

        if (won) {
            title.textContent = '🎉 恭喜通关！';
            message.textContent = '你成功消灭了所有蟑螂！';
        } else {
            title.textContent = '💀 游戏结束';
            if (this.lives <= 0) {
                message.textContent = '太多蟑螂逃跑了...';
            } else {
                message.textContent = '时间到！';
            }
        }

        document.getElementById('finalLevel').textContent = this.level;
        document.getElementById('finalCoins').textContent = this.coins;
        this.showOverlay('gameOverScreen');
    }

    nextLevel() {
        this.level++;
        this.timeLeft = CONFIG.game.levelTime;
        this.score += CONFIG.game.levelPointsBonus;

        // 通关金币奖励
        let coinsEarned = CONFIG.game.coinsPerLevel;

        // 检查是否无伤通关
        if (this.lives === this.initialLivesForLevel) {
            coinsEarned += CONFIG.game.coinsPerfectBonus;
            console.log('🎉 无伤通关！额外奖励+' + CONFIG.game.coinsPerfectBonus + '金币');
        }

        this.addCoins(coinsEarned);

        // 重置本关初始生命值记录
        this.initialLivesForLevel = this.lives;

        this.cockroaches = [];
        this.updateUI();

        // 显示关卡提示
        this.showLevelTransition();
    }

    showLevelTransition() {
        // 简单的关卡过渡效果
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 48px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`第 ${this.level} 关`, this.canvas.width / 2, this.canvas.height / 2);

        setTimeout(() => {
            if (this.state === 'playing') {
                this.gameLoop(performance.now());
            }
        }, 1500);
    }

    startTimer() {
        this.gameTimer = setInterval(() => {
            this.timeLeft--;
            this.updateUI();

            if (this.timeLeft <= 0) {
                this.gameOver(false);
            }
        }, 1000);
    }

    stopTimer() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }
    }

    startSpawning() {
        // 立即生成初始蟑螂，让玩家马上看到
        for (let i = 0; i < 3; i++) {
            this.spawnCockroach();
        }

        const spawnInterval = Math.max(
            500,
            CONFIG.cockroach.spawnRate - (this.level - 1) * CONFIG.cockroach.spawnRateDecrement
        );

        this.spawnTimer = setInterval(() => {
            if (this.state === 'playing') {
                this.spawnCockroach();
            }
        }, spawnInterval);
    }

    stopSpawning() {
        if (this.spawnTimer) {
            clearInterval(this.spawnTimer);
            this.spawnTimer = null;
        }
    }

    spawnCockroach() {
        const roach = new Cockroach(this.level, this.canvas.width, this.canvas.height);
        this.cockroaches.push(roach);
        console.log('🪳 生成蟑螂，位置:', Math.round(roach.x), Math.round(roach.y), '总数:', this.cockroaches.length);
    }

    createHitEffect(x, y) {
        // 根据装备的特效生成粒子数量
        const particleCount = this.equippedEffect === 'default' ? 8 : 15;

        for (let i = 0; i < particleCount; i++) {
            const particle = new Particle(x, y, this.equippedEffect);
            this.particles.push(particle);
        }
    }

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);

        // 触发拖鞋拍打动画
        this.slipperHitting = true;
        this.slipperHitProgress = 0;

        // 检查是否点击到蟑螂
        let hit = false;
        for (let i = this.cockroaches.length - 1; i >= 0; i--) {
            const roach = this.cockroaches[i];
            if (!roach.dying && roach.isClicked(x, y)) {
                roach.kill();
                this.score += CONFIG.game.pointsPerKill;
                this.addCoins(CONFIG.game.coinsPerKill); // 获得金币
                this.updateUI();
                this.playSound('hit');

                // 生成击杀特效粒子
                this.createHitEffect(roach.x, roach.y);

                hit = true;
                break; // 只击杀一只
            }
        }

        if (!hit) {
            this.playSound('miss');
        }
    }

    handleTouch() {
        // 使用已保存的拖鞋位置（触摸事件中已更新）
        const x = this.slipperX;
        const y = this.slipperY;

        // 触发拖鞋拍打动画
        this.slipperHitting = true;
        this.slipperHitProgress = 0;

        // 检查是否点击到蟑螂
        let hit = false;
        for (let i = this.cockroaches.length - 1; i >= 0; i--) {
            const roach = this.cockroaches[i];
            if (!roach.dying && roach.isClicked(x, y)) {
                roach.kill();
                this.score += CONFIG.game.pointsPerKill;
                this.addCoins(CONFIG.game.coinsPerKill); // 获得金币
                this.updateUI();
                this.playSound('hit');

                // 生成击杀特效粒子
                this.createHitEffect(roach.x, roach.y);

                hit = true;
                break; // 只击杀一只
            }
        }

        if (!hit) {
            this.playSound('miss');
        }
    }

    gameLoop(currentTime) {
        if (this.state !== 'playing') return;

        // 清空画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 绘制背景网格
        this.drawBackground();

        // 更新和绘制所有蟑螂
        for (let i = this.cockroaches.length - 1; i >= 0; i--) {
            const roach = this.cockroaches[i];
            const escaped = roach.update();

            if (!roach.alive) {
                this.cockroaches.splice(i, 1);

                // 如果是逃跑的（不是被打死的）
                if (escaped === false && !roach.dying) {
                    this.lives--;
                    this.updateUI();
                    this.playSound('escape');

                    // 震动效果
                    document.querySelector('.game-header').classList.add('shake');
                    setTimeout(() => {
                        document.querySelector('.game-header').classList.remove('shake');
                    }, 300);

                    if (this.lives <= 0) {
                        this.gameOver(false);
                        return;
                    }
                }
            } else {
                roach.draw(this.ctx);
            }
        }

        // 更新和绘制粒子特效
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            const alive = particle.update();

            if (!alive) {
                this.particles.splice(i, 1);
            } else {
                particle.draw(this.ctx);
            }
        }

        // 更新拍打动画
        if (this.slipperHitting) {
            this.slipperHitProgress += 0.15;
            if (this.slipperHitProgress >= 1) {
                this.slipperHitting = false;
            }
        }

        // 绘制拖鞋
        if (this.slipperVisible && this.state === 'playing') {
            this.drawSlipper(this.ctx);
        }

        // 继续游戏循环
        requestAnimationFrame((time) => this.gameLoop(time));
    }

    drawSlipper(ctx) {
        ctx.save();

        // 拍打动画：拖鞋从斜上方拍下
        let offsetY = 0;
        let rotation = -0.3;
        let scale = 1;

        if (this.slipperHitting) {
            const progress = this.slipperHitProgress;
            const eased = 1 - Math.pow(1 - progress, 3);
            offsetY = -50 * (1 - eased);
            rotation = -0.3 + 0.4 * eased;
            scale = 1 + 0.2 * Math.sin(progress * Math.PI);
        }

        ctx.translate(this.slipperX, this.slipperY + offsetY);
        ctx.rotate(rotation);
        ctx.scale(scale, scale);

        // 获取拖鞋配置
        const slipperData = SHOP_ITEMS.slippers.find(s => s.id === this.equippedSlipper) || SHOP_ITEMS.slippers[0];
        let slipperColor = slipperData.color || '#d4663f';
        const pattern = slipperData.pattern || 'solid';
        const shape = slipperData.shape || 'slipper';

        // 处理彩虹色
        if (slipperColor === 'rainbow') {
            const hue = (Date.now() / 20) % 360;
            slipperColor = `hsl(${hue}, 100%, 50%)`;
        }

        // 发光效果
        if (slipperData.glow) {
            if (slipperData.glowColor === 'rainbow') {
                const hue = (Date.now() / 10) % 360;
                ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
                ctx.shadowBlur = 20;
            } else {
                ctx.shadowColor = slipperData.glowColor;
                ctx.shadowBlur = 15;
            }
        }

        const slipperWidth = 70;
        const slipperHeight = 40;

        // 绘制鞋底
        ctx.fillStyle = this.adjustColor(slipperColor, -50);
        ctx.beginPath();
        if (shape === 'heel') {
            // 高跟鞋鞋底（前窄后高）
            ctx.ellipse(-10, 0, slipperWidth / 3, slipperHeight / 2, 0, 0, Math.PI * 2);
        } else {
            ctx.ellipse(0, 0, slipperWidth / 2, slipperHeight / 2, 0, 0, Math.PI * 2);
        }
        ctx.fill();

        // 绘制鞋面
        ctx.fillStyle = slipperColor;
        ctx.beginPath();
        if (shape === 'sneaker') {
            // 运动鞋（更方形）
            ctx.roundRect(-slipperWidth / 3, -slipperHeight / 3, slipperWidth * 0.7, slipperHeight * 0.7, 8);
        } else if (shape === 'heel') {
            // 高跟鞋（前窄）
            ctx.ellipse(-15, 0, slipperWidth / 3.5, slipperHeight / 2.5, 0, 0, Math.PI * 2);
        } else if (shape === 'sandal') {
            // 凉鞋（带子结构）
            ctx.roundRect(-slipperWidth / 3, -slipperHeight / 4, slipperWidth * 0.6, slipperHeight / 2, 5);
        } else {
            // 标准拖鞋
            ctx.ellipse(-slipperWidth / 6, 0, slipperWidth / 2.5, slipperHeight / 2.3, 0, 0, Math.PI * 2);
        }
        ctx.fill();

        // 重置阴影
        ctx.shadowBlur = 0;

        // 绘制图案
        this.drawSlipperPattern(ctx, pattern, slipperColor, slipperWidth, slipperHeight, shape);

        // 高跟鞋的鞋跟
        if (shape === 'heel') {
            ctx.fillStyle = this.adjustColor(slipperColor, -40);
            ctx.fillRect(slipperWidth / 4, -5, 8, 25);
        }

        // 凉鞋的带子
        if (shape === 'sandal') {
            ctx.strokeStyle = this.adjustColor(slipperColor, -30);
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(-slipperWidth / 4, -slipperHeight / 4);
            ctx.lineTo(slipperWidth / 6, 0);
            ctx.moveTo(-slipperWidth / 4, slipperHeight / 4);
            ctx.lineTo(slipperWidth / 6, 0);
            ctx.stroke();
        }

        // 边缘高光
        ctx.strokeStyle = this.adjustColor(slipperColor, 40);
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(-slipperWidth / 6, -slipperHeight / 4, slipperWidth / 4, -Math.PI, -Math.PI / 2);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // 拍打冲击波
        if (this.slipperHitting && this.slipperHitProgress < 0.3) {
            ctx.strokeStyle = `rgba(255, 100, 50, ${0.5 - this.slipperHitProgress * 1.5})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(0, 0, 50 + this.slipperHitProgress * 30, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawSlipperPattern(ctx, pattern, baseColor, width, height, shape) {
        ctx.save();

        switch(pattern) {
            case 'stripe': // 运动鞋斜条纹
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 3;
                for (let i = -3; i <= 3; i++) {
                    ctx.beginPath();
                    ctx.moveTo(-width / 4 + i * 8, -height / 3);
                    ctx.lineTo(-width / 4 + i * 8 + 15, height / 3);
                    ctx.stroke();
                }
                break;

            case 'hstripe': // 横条纹
                ctx.strokeStyle = this.adjustColor(baseColor, -40);
                ctx.lineWidth = 2;
                for (let i = -2; i <= 2; i++) {
                    ctx.beginPath();
                    ctx.moveTo(-width / 3, i * 6);
                    ctx.lineTo(width / 6, i * 6);
                    ctx.stroke();
                }
                break;

            case 'leopard': // 豹纹
                ctx.fillStyle = this.adjustColor(baseColor, -50);
                for (let i = 0; i < 8; i++) {
                    const x = -width / 4 + Math.random() * width / 2;
                    const y = -height / 4 + Math.random() * height / 2;
                    const size = 3 + Math.random() * 4;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'camo': // 迷彩
                const camoColors = [
                    this.adjustColor(baseColor, -30),
                    this.adjustColor(baseColor, -15),
                    this.adjustColor(baseColor, 10)
                ];
                for (let i = 0; i < 6; i++) {
                    ctx.fillStyle = camoColors[Math.floor(Math.random() * camoColors.length)];
                    const x = -width / 4 + Math.random() * width / 2;
                    const y = -height / 4 + Math.random() * height / 2;
                    ctx.beginPath();
                    ctx.arc(x, y, 5 + Math.random() * 8, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'sparkle': // 钻石闪光
                ctx.fillStyle = '#ffffff';
                for (let i = 0; i < 10; i++) {
                    const x = -width / 4 + Math.random() * width / 2;
                    const y = -height / 4 + Math.random() * height / 2;
                    const size = 2 + Math.random() * 3;
                    ctx.save();
                    ctx.translate(x, y);
                    ctx.rotate(Math.random() * Math.PI);
                    ctx.beginPath();
                    ctx.moveTo(0, -size);
                    ctx.lineTo(size / 2, 0);
                    ctx.lineTo(0, size);
                    ctx.lineTo(-size / 2, 0);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
                break;

            case 'flame': // 火焰图案
                const flameGrad = ctx.createLinearGradient(-width / 3, 0, width / 6, 0);
                flameGrad.addColorStop(0, '#ff0000');
                flameGrad.addColorStop(0.5, '#ff6600');
                flameGrad.addColorStop(1, '#ffaa00');
                ctx.fillStyle = flameGrad;
                for (let i = 0; i < 5; i++) {
                    const x = -width / 4 + i * 12;
                    ctx.beginPath();
                    ctx.moveTo(x, height / 4);
                    ctx.quadraticCurveTo(x - 3, 0, x, -height / 4);
                    ctx.quadraticCurveTo(x + 3, 0, x, height / 4);
                    ctx.fill();
                }
                break;

            case 'frost': // 冰霜图案
                ctx.strokeStyle = '#ffffff';
                ctx.lineWidth = 1.5;
                for (let i = 0; i < 6; i++) {
                    const x = -width / 4 + Math.random() * width / 2;
                    const y = -height / 4 + Math.random() * height / 2;
                    ctx.save();
                    ctx.translate(x, y);
                    for (let j = 0; j < 6; j++) {
                        const angle = (j * Math.PI) / 3;
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(Math.cos(angle) * 5, Math.sin(angle) * 5);
                        ctx.stroke();
                    }
                    ctx.restore();
                }
                break;

            case 'stars': // 星空图案
                ctx.fillStyle = '#ffff00';
                for (let i = 0; i < 8; i++) {
                    const x = -width / 4 + Math.random() * width / 2;
                    const y = -height / 4 + Math.random() * height / 2;
                    const size = 2 + Math.random() * 2;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;

            case 'circuit': // 电路图案
                ctx.strokeStyle = this.adjustColor(baseColor, 60);
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(-width / 3, -height / 4);
                ctx.lineTo(-width / 6, -height / 4);
                ctx.lineTo(-width / 6, 0);
                ctx.lineTo(0, 0);
                ctx.lineTo(0, height / 4);
                ctx.lineTo(width / 6, height / 4);
                ctx.stroke();
                // 电路节点
                ctx.fillStyle = ctx.strokeStyle;
                [-width / 6, 0, width / 6].forEach(x => {
                    ctx.beginPath();
                    ctx.arc(x, 0, 2, 0, Math.PI * 2);
                    ctx.fill();
                });
                break;

            case 'denim': // 牛仔纹理
                ctx.strokeStyle = this.adjustColor(baseColor, -20);
                ctx.lineWidth = 1;
                for (let i = -height / 3; i < height / 3; i += 2) {
                    ctx.beginPath();
                    ctx.moveTo(-width / 3, i);
                    ctx.lineTo(width / 6, i);
                    ctx.stroke();
                }
                ctx.strokeStyle = this.adjustColor(baseColor, 20);
                for (let i = -width / 3; i < width / 6; i += 2) {
                    ctx.beginPath();
                    ctx.moveTo(i, -height / 3);
                    ctx.lineTo(i, height / 3);
                    ctx.stroke();
                }
                break;
        }

        ctx.restore();
    }

    // 颜色调整辅助方法（调亮/调暗）
    adjustColor(hex, amount) {
        // 将十六进制颜色转换为RGB
        const rgb = parseInt(hex.slice(1), 16);
        const r = Math.max(0, Math.min(255, (rgb >> 16) + amount));
        const g = Math.max(0, Math.min(255, ((rgb >> 8) & 0x00FF) + amount));
        const b = Math.max(0, Math.min(255, (rgb & 0x0000FF) + amount));
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
    }

    drawBackground() {
        // 绘制厨房场景（俯视角）
        const ctx = this.ctx;
        const width = this.canvas.width;
        const height = this.canvas.height;

        // 主题配色方案
        const themeColors = {
            default: { // 经典厨房
                floor1: '#f5f0e8',
                floor2: '#ede7dc',
                floorLine: '#d4cfc4',
                wall: '#c9b9a1',
                cabinet: '#8b7355',
                cabinetDark: '#5c4a3a',
                countertop: '#a89584',
                appliance: '#e0e0e0'
            },
            modern: { // 现代厨房（黑白灰冷色调）
                floor1: '#e8e8e8',
                floor2: '#d0d0d0',
                floorLine: '#b0b0b0',
                wall: '#7a7a7a',
                cabinet: '#2c3e50',
                cabinetDark: '#1a252f',
                countertop: '#34495e',
                appliance: '#ecf0f1'
            },
            vintage: { // 复古厨房（暖黄棕色调）
                floor1: '#f4e8d0',
                floor2: '#e8d4b0',
                floorLine: '#d4bc98',
                wall: '#b89968',
                cabinet: '#a0724f',
                cabinetDark: '#7a5835',
                countertop: '#c8a882',
                appliance: '#f5deb3'
            },
            japanese: { // 日式厨房（米色木色）
                floor1: '#f0e6d2',
                floor2: '#e8dcc8',
                floorLine: '#d4c4a8',
                wall: '#c8b69a',
                cabinet: '#8b7355',
                cabinetDark: '#6b5845',
                countertop: '#9d8568',
                appliance: '#e8e8d8'
            },
            scifi: { // 科幻厨房（蓝紫金属）
                floor1: '#1a1a2e',
                floor2: '#16213e',
                floorLine: '#0f3460',
                wall: '#0a2342',
                cabinet: '#16213e',
                cabinetDark: '#0f1419',
                countertop: '#1f4068',
                appliance: '#00ffff'
            },
            candy: { // 糖果厨房（粉色糖果）
                floor1: '#ffe5f1',
                floor2: '#ffd1e8',
                floorLine: '#ffb3d9',
                wall: '#ff9ed4',
                cabinet: '#ff6fb5',
                cabinetDark: '#e95ba5',
                countertop: '#ff85c1',
                appliance: '#ffe5f8'
            }
        };

        const theme = themeColors[this.equippedTheme] || themeColors.default;

        // 1. 绘制地板瓷砖
        const tileSize = 60;
        for (let x = 0; x < width; x += tileSize) {
            for (let y = 0; y < height; y += tileSize) {
                const isEven = (Math.floor(x / tileSize) + Math.floor(y / tileSize)) % 2 === 0;
                ctx.fillStyle = isEven ? theme.floor1 : theme.floor2;
                ctx.fillRect(x, y, tileSize, tileSize);

                ctx.strokeStyle = theme.floorLine;
                ctx.lineWidth = 1;
                ctx.strokeRect(x, y, tileSize, tileSize);
            }
        }

        // 科幻主题：添加网格发光效果
        if (this.equippedTheme === 'scifi') {
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.lineWidth = 2;
            for (let x = 0; x < width; x += tileSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            for (let y = 0; y < height; y += tileSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        }

        // 糖果主题：添加彩色圆点
        if (this.equippedTheme === 'candy') {
            const candyColors = ['#ff69b4', '#ffb3d9', '#fff0f8', '#ffe5f1'];
            for (let i = 0; i < 15; i++) {
                ctx.fillStyle = candyColors[Math.floor(Math.random() * candyColors.length)];
                const cx = Math.random() * width;
                const cy = Math.random() * height;
                ctx.beginPath();
                ctx.arc(cx, cy, 3 + Math.random() * 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 2. 绘制墙壁（四周边框）
        const wallThickness = 25;
        ctx.fillStyle = theme.wall;
        ctx.fillRect(0, 0, width, wallThickness); // 上墙
        ctx.fillRect(0, height - wallThickness, width, wallThickness); // 下墙
        ctx.fillRect(0, 0, wallThickness, height); // 左墙
        ctx.fillRect(width - wallThickness, 0, wallThickness, height); // 右墙

        // 3. 绘制左侧橱柜台（俯视图）
        const cabinet1 = { x: 30, y: 80, w: 180, h: 250 };
        ctx.fillStyle = theme.cabinet;
        ctx.fillRect(cabinet1.x, cabinet1.y, cabinet1.w, cabinet1.h);
        ctx.strokeStyle = theme.cabinetDark;
        ctx.lineWidth = 3;
        ctx.strokeRect(cabinet1.x, cabinet1.y, cabinet1.w, cabinet1.h);

        // 橱柜台面
        ctx.fillStyle = theme.countertop;
        ctx.fillRect(cabinet1.x, cabinet1.y, cabinet1.w, 30);

        // 水槽
        ctx.fillStyle = '#bbb';
        ctx.fillRect(cabinet1.x + 30, cabinet1.y + 5, 60, 50);
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 2;
        ctx.strokeRect(cabinet1.x + 30, cabinet1.y + 5, 60, 50);

        // 橱柜门
        for (let i = 0; i < 2; i++) {
            const doorY = cabinet1.y + 80 + i * 85;
            ctx.strokeStyle = theme.cabinetDark;
            ctx.lineWidth = 2;
            ctx.strokeRect(cabinet1.x + 10, doorY, cabinet1.w - 20, 75);

            // 门把手
            ctx.fillStyle = '#c0c0c0';
            ctx.beginPath();
            ctx.arc(cabinet1.x + cabinet1.w - 25, doorY + 37, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // 4. 绘制下方橱柜（俯视图）
        const cabinet2 = { x: 200, y: height - 90, w: 500, h: 65 };
        ctx.fillStyle = theme.cabinet;
        ctx.fillRect(cabinet2.x, cabinet2.y, cabinet2.w, cabinet2.h);
        ctx.strokeStyle = theme.cabinetDark;
        ctx.lineWidth = 3;
        ctx.strokeRect(cabinet2.x, cabinet2.y, cabinet2.w, cabinet2.h);

        // 灶台（在橱柜台面上）
        const stove = { x: cabinet2.x + 50, y: cabinet2.y + 5, w: 140, h: 55 };
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(stove.x, stove.y, stove.w, stove.h);
        ctx.strokeStyle = '#1a252f';
        ctx.lineWidth = 2;
        ctx.strokeRect(stove.x, stove.y, stove.w, stove.h);

        // 炉灶圈（俯视图：2个）
        const burners = [
            { x: stove.x + 30, y: stove.y + 27 },
            { x: stove.x + 95, y: stove.y + 27 }
        ];
        burners.forEach(b => {
            ctx.strokeStyle = '#555';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(b.x, b.y, 18, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(b.x, b.y, 12, 0, Math.PI * 2);
            ctx.stroke();
        });

        // 烤箱门
        ctx.strokeStyle = '#5c4a3a';
        ctx.lineWidth = 2;
        ctx.strokeRect(cabinet2.x + 220, cabinet2.y + 8, 120, 50);
        ctx.fillStyle = '#3a3a3a';
        ctx.fillRect(cabinet2.x + 225, cabinet2.y + 13, 110, 40);

        // 5. 绘制右侧冰箱（俯视图）
        const fridge = { x: width - 140, y: 180, w: 110, h: 160 };
        const fridgeGrad = ctx.createLinearGradient(fridge.x, 0, fridge.x + fridge.w, 0);
        const appColor = theme.appliance;
        fridgeGrad.addColorStop(0, appColor);
        fridgeGrad.addColorStop(0.5, this.adjustColor(appColor, 15));
        fridgeGrad.addColorStop(1, appColor);
        ctx.fillStyle = fridgeGrad;
        ctx.fillRect(fridge.x, fridge.y, fridge.w, fridge.h);
        ctx.strokeStyle = this.adjustColor(appColor, -30);
        ctx.lineWidth = 3;
        ctx.strokeRect(fridge.x, fridge.y, fridge.w, fridge.h);

        // 冰箱门分隔线
        ctx.strokeStyle = '#b0b0b0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(fridge.x + fridge.w / 2, fridge.y + 10);
        ctx.lineTo(fridge.x + fridge.w / 2, fridge.y + fridge.h - 10);
        ctx.stroke();

        // 门把手
        ctx.fillStyle = '#808080';
        ctx.fillRect(fridge.x + 15, fridge.y + 70, 6, 25);
        ctx.fillRect(fridge.x + fridge.w / 2 + 10, fridge.y + 70, 6, 25);

        // 6. 绘制墙缝（藏身点）- 暗色裂缝
        CONFIG.hideSpots.forEach(spot => {
            if (spot.type === 'crack') {
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(spot.x, spot.y, spot.width, spot.height);

                // 添加阴影效果
                ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
                ctx.fillRect(spot.x, spot.y + spot.height, spot.width, 3);
            } else if (spot.type === 'cabinet') {
                // 橱柜缝隙
                ctx.fillStyle = '#2a2a2a';
                ctx.fillRect(spot.x, spot.y, spot.width, spot.height);
            } else if (spot.type === 'fridge') {
                // 冰箱后面
                ctx.fillStyle = '#2a2a2a';
                ctx.fillRect(spot.x, spot.y, spot.width, spot.height);
            }
        });

        // 7. 绘制餐桌（中央）
        const table = { x: width / 2 - 100, y: height / 2 - 80, w: 200, h: 140 };
        const tableColor = this.equippedTheme === 'scifi' ? '#1f4068' :
                          this.equippedTheme === 'candy' ? '#ffb3e6' :
                          this.adjustColor(theme.cabinet, 20);
        ctx.fillStyle = tableColor;
        ctx.fillRect(table.x, table.y, table.w, table.h);
        ctx.strokeStyle = this.adjustColor(tableColor, -30);
        ctx.lineWidth = 4;
        ctx.strokeRect(table.x, table.y, table.w, table.h);

        // 桌子边缘装饰
        ctx.strokeStyle = this.adjustColor(tableColor, -15);
        ctx.lineWidth = 2;
        ctx.strokeRect(table.x + 8, table.y + 8, table.w - 16, table.h - 16);

        // 8. 绘制椅子（2把）
        const chairs = [
            { x: table.x - 45, y: table.y + 40, w: 40, h: 60 },
            { x: table.x + table.w + 5, y: table.y + 40, w: 40, h: 60 }
        ];

        // 日式主题：榻榻米座垫代替椅子
        if (this.equippedTheme === 'japanese') {
            chairs.forEach(cushion => {
                // 榻榻米座垫
                ctx.fillStyle = '#d4c4a8';
                ctx.beginPath();
                ctx.ellipse(cushion.x + 20, cushion.y + 30, 25, 20, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#a89584';
                ctx.lineWidth = 2;
                ctx.stroke();

                // 榻榻米纹理
                ctx.strokeStyle = '#b8a890';
                ctx.lineWidth = 1;
                for (let i = -15; i <= 15; i += 8) {
                    ctx.beginPath();
                    ctx.moveTo(cushion.x + 20 - 15, cushion.y + 30 + i);
                    ctx.lineTo(cushion.x + 20 + 15, cushion.y + 30 + i);
                    ctx.stroke();
                }
            });
        } else {
            // 普通椅子
            chairs.forEach(chair => {
                ctx.fillStyle = this.adjustColor(tableColor, -10);
                ctx.fillRect(chair.x, chair.y, chair.w, chair.h);
                ctx.strokeStyle = this.adjustColor(tableColor, -35);
                ctx.lineWidth = 2;
                ctx.strokeRect(chair.x, chair.y, chair.w, chair.h);

                // 椅背
                ctx.fillRect(chair.x + 5, chair.y - 8, chair.w - 10, 10);
            });
        }

        // 9. 主题特色元素
        this.drawThemeSpecificElements(ctx, theme, width, height);
    }

    // 绘制主题特色元素
    drawThemeSpecificElements(ctx, theme, width, height) {
        switch(this.equippedTheme) {
            case 'modern':
                // 现代厨房：内嵌烤箱 + 洗碗机
                // 烤箱（在右侧墙边）
                const oven = { x: width - 190, y: 400, w: 80, h: 100 };
                ctx.fillStyle = '#34495e';
                ctx.fillRect(oven.x, oven.y, oven.w, oven.h);
                ctx.strokeStyle = '#2c3e50';
                ctx.lineWidth = 3;
                ctx.strokeRect(oven.x, oven.y, oven.w, oven.h);

                // 烤箱玻璃门
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(oven.x + 8, oven.y + 8, oven.w - 16, oven.h - 50);
                // 玻璃反光
                ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.fillRect(oven.x + 10, oven.y + 10, 20, 30);

                // 烤箱控制面板
                ctx.fillStyle = '#2c3e50';
                ctx.fillRect(oven.x + 8, oven.y + oven.h - 35, oven.w - 16, 25);
                // 按钮
                const btnColors = ['#e74c3c', '#3498db', '#2ecc71'];
                for (let i = 0; i < 3; i++) {
                    ctx.fillStyle = btnColors[i];
                    ctx.beginPath();
                    ctx.arc(oven.x + 20 + i * 20, oven.y + oven.h - 22, 5, 0, Math.PI * 2);
                    ctx.fill();
                }

                // 洗碗机（左下角橱柜里）
                const dishwasher = { x: 50, y: height - 110, w: 140, h: 80 };
                ctx.fillStyle = theme.appliance;
                ctx.fillRect(dishwasher.x, dishwasher.y, dishwasher.w, dishwasher.h);
                ctx.strokeStyle = this.adjustColor(theme.appliance, -30);
                ctx.lineWidth = 2;
                ctx.strokeRect(dishwasher.x, dishwasher.y, dishwasher.w, dishwasher.h);
                // 洗碗机显示屏
                ctx.fillStyle = '#00ff88';
                ctx.fillRect(dishwasher.x + 10, dishwasher.y + 10, 30, 15);
                break;

            case 'japanese':
                // 日式厨房：和风装饰
                // 竹帘（上方墙壁装饰）
                const blinds = { x: width / 2 - 80, y: 35, w: 160, h: 8 };
                ctx.fillStyle = '#d4bc98';
                ctx.fillRect(blinds.x, blinds.y, blinds.w, blinds.h);
                // 竹条纹理
                ctx.strokeStyle = '#a89584';
                ctx.lineWidth = 1;
                for (let i = 0; i < blinds.w; i += 8) {
                    ctx.beginPath();
                    ctx.moveTo(blinds.x + i, blinds.y);
                    ctx.lineTo(blinds.x + i, blinds.y + blinds.h);
                    ctx.stroke();
                }

                // 挂画/书法（墙上装饰）
                const painting = { x: 680, y: 80, w: 60, h: 80 };
                ctx.fillStyle = '#f0e6d2';
                ctx.fillRect(painting.x, painting.y, painting.w, painting.h);
                ctx.strokeStyle = '#8b7355';
                ctx.lineWidth = 3;
                ctx.strokeRect(painting.x, painting.y, painting.w, painting.h);
                // 书法笔触
                ctx.strokeStyle = '#2a1a0f';
                ctx.lineWidth = 4;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(painting.x + 20, painting.y + 20);
                ctx.lineTo(painting.x + 20, painting.y + 60);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(painting.x + 40, painting.y + 25);
                ctx.quadraticCurveTo(painting.x + 35, painting.y + 40, painting.x + 40, painting.y + 55);
                ctx.stroke();

                // 茶具（桌上装饰）
                const teapot = { x: width / 2 - 20, y: height / 2 - 15 };
                ctx.fillStyle = '#8b7355';
                // 茶壶身
                ctx.beginPath();
                ctx.arc(teapot.x, teapot.y, 12, 0, Math.PI * 2);
                ctx.fill();
                // 茶壶盖
                ctx.fillStyle = '#a89584';
                ctx.beginPath();
                ctx.arc(teapot.x, teapot.y - 5, 6, 0, Math.PI * 2);
                ctx.fill();
                // 茶壶嘴
                ctx.strokeStyle = '#8b7355';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(teapot.x, teapot.y, 12, -0.3, 0.3);
                ctx.stroke();
                break;

            case 'vintage':
                // 复古厨房：老式物件
                // 挂钟（墙上）
                const clock = { x: width - 100, y: 80, r: 25 };
                ctx.fillStyle = '#c8a882';
                ctx.beginPath();
                ctx.arc(clock.x, clock.y, clock.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#7a5835';
                ctx.lineWidth = 3;
                ctx.stroke();
                // 时钟刻度
                ctx.strokeStyle = '#2a1a0f';
                ctx.lineWidth = 2;
                for (let i = 0; i < 12; i++) {
                    const angle = (i * Math.PI) / 6 - Math.PI / 2;
                    const x1 = clock.x + Math.cos(angle) * (clock.r - 5);
                    const y1 = clock.y + Math.sin(angle) * (clock.r - 5);
                    const x2 = clock.x + Math.cos(angle) * (clock.r - 10);
                    const y2 = clock.y + Math.sin(angle) * (clock.r - 10);
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
                // 时针分针
                ctx.strokeStyle = '#2a1a0f';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(clock.x, clock.y);
                ctx.lineTo(clock.x + 8, clock.y - 10);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(clock.x, clock.y);
                ctx.lineTo(clock.x + 12, clock.y);
                ctx.stroke();

                // 挂饰/锅具（墙上）
                const pan = { x: 250, y: 100, r: 20 };
                ctx.fillStyle = '#5c4a3a';
                ctx.beginPath();
                ctx.arc(pan.x, pan.y, pan.r, 0, Math.PI * 2);
                ctx.fill();
                // 手柄
                ctx.strokeStyle = '#5c4a3a';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(pan.x + pan.r, pan.y);
                ctx.lineTo(pan.x + pan.r + 15, pan.y - 5);
                ctx.stroke();
                break;

            case 'scifi':
                // 科幻厨房：全息屏幕 + 发光元素
                // 全息控制面板（墙上）
                const hologram = { x: 680, y: 90, w: 100, h: 70 };
                ctx.fillStyle = 'rgba(0, 255, 255, 0.15)';
                ctx.fillRect(hologram.x, hologram.y, hologram.w, hologram.h);
                ctx.strokeStyle = '#00ffff';
                ctx.lineWidth = 2;
                ctx.strokeRect(hologram.x, hologram.y, hologram.w, hologram.h);

                // 全息文字/图标
                ctx.fillStyle = '#00ffff';
                ctx.font = 'bold 14px monospace';
                ctx.fillText('SYS OK', hologram.x + 10, hologram.y + 25);
                ctx.fillText('TEMP 22°C', hologram.x + 10, hologram.y + 45);

                // 发光圆点（分布在各处）
                const glowPoints = [
                    { x: 100, y: 100 }, { x: width - 150, y: 300 },
                    { x: 300, y: height - 100 }, { x: width - 250, y: 500 }
                ];
                glowPoints.forEach(point => {
                    ctx.fillStyle = '#00ffff';
                    ctx.shadowColor = '#00ffff';
                    ctx.shadowBlur = 15;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                });

                // 能量指示灯
                for (let i = 0; i < 3; i++) {
                    const ledX = width - 50;
                    const ledY = 250 + i * 30;
                    ctx.fillStyle = i === 0 ? '#00ff00' : i === 1 ? '#ffff00' : '#00ffff';
                    ctx.shadowColor = ctx.fillStyle;
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.arc(ledX, ledY, 5, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
                break;

            case 'candy':
                // 糖果厨房：棒棒糖 + 糖果装饰
                // 大棒棒糖（墙边装饰）
                const lollipop = { x: 720, y: 150, r: 30 };
                // 棒棒糖头（螺旋纹）
                const candyGrad = ctx.createRadialGradient(lollipop.x, lollipop.y, 0, lollipop.x, lollipop.y, lollipop.r);
                candyGrad.addColorStop(0, '#ff69b4');
                candyGrad.addColorStop(0.5, '#ffb3d9');
                candyGrad.addColorStop(1, '#ff69b4');
                ctx.fillStyle = candyGrad;
                ctx.beginPath();
                ctx.arc(lollipop.x, lollipop.y, lollipop.r, 0, Math.PI * 2);
                ctx.fill();
                // 螺旋纹
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 3;
                for (let i = 0; i < 3; i++) {
                    ctx.beginPath();
                    ctx.arc(lollipop.x, lollipop.y, lollipop.r - i * 8, 0, Math.PI * 2);
                    ctx.stroke();
                }
                // 棒子
                ctx.strokeStyle = '#ffe5f1';
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.moveTo(lollipop.x, lollipop.y + lollipop.r);
                ctx.lineTo(lollipop.x, lollipop.y + lollipop.r + 40);
                ctx.stroke();

                // 糖果罐（桌上）
                const jar = { x: width / 2 + 60, y: height / 2 - 30, w: 35, h: 45 };
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.fillRect(jar.x, jar.y, jar.w, jar.h);
                ctx.strokeStyle = '#ffb3d9';
                ctx.lineWidth = 2;
                ctx.strokeRect(jar.x, jar.y, jar.w, jar.h);
                // 罐盖
                ctx.fillStyle = '#ff85c1';
                ctx.fillRect(jar.x - 2, jar.y - 8, jar.w + 4, 8);
                // 糖果（罐内）
                const candyColors = ['#ff69b4', '#ffeb3b', '#4caf50', '#2196f3'];
                for (let i = 0; i < 6; i++) {
                    ctx.fillStyle = candyColors[Math.floor(Math.random() * candyColors.length)];
                    const cx = jar.x + 5 + Math.random() * (jar.w - 10);
                    const cy = jar.y + 5 + Math.random() * (jar.h - 10);
                    ctx.beginPath();
                    ctx.arc(cx, cy, 3 + Math.random() * 3, 0, Math.PI * 2);
                    ctx.fill();
                }

                // 纸杯蛋糕装饰（各处）
                const cupcakes = [
                    { x: 100, y: 550 }, { x: width - 120, y: 100 }
                ];
                cupcakes.forEach(cup => {
                    // 蛋糕底
                    ctx.fillStyle = '#ffe5f1';
                    ctx.fillRect(cup.x - 10, cup.y, 20, 15);
                    // 奶油
                    ctx.fillStyle = '#ffb3e6';
                    ctx.beginPath();
                    ctx.arc(cup.x, cup.y - 5, 12, 0, Math.PI * 2);
                    ctx.fill();
                    // 樱桃
                    ctx.fillStyle = '#e74c3c';
                    ctx.beginPath();
                    ctx.arc(cup.x, cup.y - 12, 4, 0, Math.PI * 2);
                    ctx.fill();
                });
                break;

            default:
                // 经典厨房：植物盆栽
                const plant = { x: width - 100, y: height - 140, w: 50, h: 60 };
                // 花盆
                ctx.fillStyle = '#a0724f';
                ctx.beginPath();
                ctx.moveTo(plant.x, plant.y + plant.h);
                ctx.lineTo(plant.x + plant.w * 0.2, plant.y + plant.h * 0.6);
                ctx.lineTo(plant.x + plant.w * 0.8, plant.y + plant.h * 0.6);
                ctx.lineTo(plant.x + plant.w, plant.y + plant.h);
                ctx.closePath();
                ctx.fill();
                // 叶子
                ctx.fillStyle = '#4caf50';
                for (let i = 0; i < 5; i++) {
                    const leafX = plant.x + plant.w / 2 + (Math.random() - 0.5) * 20;
                    const leafY = plant.y + plant.h * 0.4 - i * 8;
                    ctx.beginPath();
                    ctx.ellipse(leafX, leafY, 8, 12, Math.random() * 0.5 - 0.25, 0, Math.PI * 2);
                    ctx.fill();
                }
                break;
        }
    }

    updateUI() {
        document.getElementById('level').textContent = this.level;
        document.getElementById('timer').textContent = this.timeLeft;
        document.getElementById('coins').textContent = '🪙 ' + this.coins;

        // 更新生命显示
        const heartsDisplay = '❤️'.repeat(Math.max(0, this.lives));
        document.getElementById('lives').textContent = heartsDisplay || '💀';
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        const btn = document.getElementById('soundBtn');
        btn.textContent = this.soundEnabled ? '🔊 音效' : '🔇 音效';
    }

    playSound(type) {
        if (!this.soundEnabled) return;

        // 使用Web Audio API创建简单音效
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (type === 'hit') {
            // 击中音效：啪！
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
        } else if (type === 'escape') {
            // 逃跑音效：低沉的警告音
            oscillator.frequency.value = 100;
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
        } else if (type === 'miss') {
            // 未击中音效：轻微的拍打声
            oscillator.frequency.value = 150;
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.08);
        }
    }

    showOverlay(id) {
        document.getElementById(id).classList.remove('hidden');
    }

    hideAllOverlays() {
        document.querySelectorAll('.game-overlay').forEach(overlay => {
            overlay.classList.add('hidden');
        });
    }

    // 加载游戏数据
    loadGameData() {
        try {
            const savedData = localStorage.getItem('roachSlayerData');
            if (savedData) {
                const data = JSON.parse(savedData);
                this.coins = data.coins || 0;
                this.ownedItems = data.ownedItems || ['default'];
                this.equippedSlipper = data.equippedSlipper || 'default';
                this.equippedTheme = data.equippedTheme || 'default';
                this.equippedEffect = data.equippedEffect || 'default';
                console.log('✅ 加载存档成功，金币:', this.coins);
            } else {
                // 首次游戏，给予默认物品
                this.ownedItems = ['default'];
                console.log('📦 首次游戏，初始化数据');
            }

            // 确保默认物品在拥有列表中
            if (!this.ownedItems.includes('default')) {
                this.ownedItems.push('default');
            }
        } catch (e) {
            console.error('❌ 加载存档失败:', e);
            this.ownedItems = ['default'];
        }
    }

    // 保存游戏数据
    saveGameData() {
        try {
            const data = {
                coins: this.coins,
                ownedItems: this.ownedItems,
                equippedSlipper: this.equippedSlipper,
                equippedTheme: this.equippedTheme,
                equippedEffect: this.equippedEffect
            };
            localStorage.setItem('roachSlayerData', JSON.stringify(data));
            console.log('💾 存档成功，金币:', this.coins);
        } catch (e) {
            console.error('❌ 保存存档失败:', e);
        }
    }

    // 增加金币
    addCoins(amount) {
        this.coins += amount;
        this.saveGameData();
        this.updateUI();
        console.log('🪙 获得金币+' + amount, '总金币:', this.coins);
    }

    // 打开商店
    openShop() {
        document.getElementById('shopOverlay').classList.remove('hidden');
        this.renderShop();
    }

    // 关闭商店
    closeShop() {
        document.getElementById('shopOverlay').classList.add('hidden');
    }

    // 切换商店标签页
    switchShopTab(tabName) {
        // 切换标签按钮样式
        document.querySelectorAll('.shop-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // 切换内容区域
        document.querySelectorAll('.shop-tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`tab-${tabName}`).classList.add('active');
    }

    // 渲染商店
    renderShop() {
        this.renderShopCategory('slippers', 'slipper');
        this.renderShopCategory('themes', 'theme');
        this.renderShopCategory('effects', 'effect');
    }

    // 渲染某个类别的商店物品
    renderShopCategory(category, equipType) {
        const container = document.getElementById(`tab-${category}`);
        const items = SHOP_ITEMS[category];

        const rarityText = {
            'common': '普通',
            'rare': '稀有',
            'epic': '史诗'
        };

        // 统计拥有情况
        const ownedItems = items.filter(i => this.ownedItems.includes(i.id));
        const totalItems = items.length;
        const ownedCount = ownedItems.length;

        // 按稀有度分类统计
        const rarityStats = {
            common: { total: items.filter(i => i.rarity === 'common').length, owned: 0 },
            rare: { total: items.filter(i => i.rarity === 'rare').length, owned: 0 },
            epic: { total: items.filter(i => i.rarity === 'epic').length, owned: 0 }
        };

        ownedItems.forEach(item => {
            rarityStats[item.rarity].owned++;
        });

        let html = `
            <div class="gacha-section">
                <div class="gacha-banner">
                    <h3>🎰 抽奖池</h3>
                    <p>每次抽奖消耗 <span style="color: #f39c12; font-weight: bold;">50金币</span></p>
                    <div class="gacha-rates">
                        <div class="rate-item">
                            <span class="rarity-common">普通</span> 60%
                        </div>
                        <div class="rate-item">
                            <span class="rarity-rare">稀有</span> 30%
                        </div>
                        <div class="rate-item">
                            <span class="rarity-epic">史诗</span> 10%
                        </div>
                    </div>
                    <button class="btn-gacha" onclick="game.gacha('${category}')">
                        🎲 抽一次 (50金币)
                    </button>
                    <p class="gacha-note">💡 重复物品会返还金币</p>
                </div>

                <div class="collection-stats">
                    <h4>📦 收集进度: ${ownedCount}/${totalItems}</h4>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(ownedCount / totalItems * 100).toFixed(1)}%"></div>
                    </div>
                    <div class="rarity-breakdown">
                        <div>普通: ${rarityStats.common.owned}/${rarityStats.common.total}</div>
                        <div>稀有: ${rarityStats.rare.owned}/${rarityStats.rare.total}</div>
                        <div>史诗: ${rarityStats.epic.owned}/${rarityStats.epic.total}</div>
                    </div>
                </div>

                <h4 style="margin: 20px 0 10px 0;">已拥有的物品</h4>
                <div class="shop-grid">
        `;

        // 显示已拥有的物品
        ownedItems.forEach(item => {
            const isEquipped = this[`equipped${equipType.charAt(0).toUpperCase() + equipType.slice(1)}`] === item.id;

            // 为主题类别生成配色预览
            let previewContent = item.icon;
            if (category === 'themes') {
                previewContent = this.generateThemePreview(item.id);
            }

            html += `
                <div class="shop-item owned ${isEquipped ? 'equipped' : ''}">
                    <div class="shop-item-preview ${category === 'themes' ? 'theme-preview' : ''}">${previewContent}</div>
                    <div class="shop-item-name">${item.name}</div>
                    <div class="shop-item-rarity rarity-${item.rarity}">${rarityText[item.rarity]}</div>
                    ${isEquipped
                        ? '<button class="shop-item-btn btn-equipped">已装备</button>'
                        : `<button class="shop-item-btn btn-equip" onclick="game.equipItem('${category}', '${item.id}')">装备</button>`
                    }
                </div>
            `;
        });

        // 如果还有未获得的物品，显示问号卡片
        const unownedCount = totalItems - ownedCount;
        if (unownedCount > 0) {
            html += `
                <div class="shop-item locked">
                    <div class="shop-item-preview">❓</div>
                    <div class="shop-item-name">未解锁</div>
                    <div class="shop-item-rarity">还有 ${unownedCount} 个</div>
                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    // 生成主题配色预览
    generateThemePreview(themeId) {
        const themeColors = {
            default: {
                bg1: '#f5f0e8',
                bg2: '#ede7dc',
                wall: '#c9b9a1',
                cabinet: '#8b7355',
                desc: '温暖米黄'
            },
            modern: {
                bg1: '#e8e8e8',
                bg2: '#d0d0d0',
                wall: '#7a7a7a',
                cabinet: '#2c3e50',
                desc: '冷色现代'
            },
            vintage: {
                bg1: '#f4e8d0',
                bg2: '#e8d4b0',
                wall: '#b89968',
                cabinet: '#a0724f',
                desc: '复古暖调'
            },
            japanese: {
                bg1: '#f0e6d2',
                bg2: '#e8dcc8',
                wall: '#c8b69a',
                cabinet: '#8b7355',
                desc: '原木自然'
            },
            scifi: {
                bg1: '#1a1a2e',
                bg2: '#16213e',
                wall: '#0a2342',
                cabinet: '#00ffff',
                desc: '科幻发光'
            },
            candy: {
                bg1: '#ffe5f1',
                bg2: '#ffd1e8',
                wall: '#ff9ed4',
                cabinet: '#ff6fb5',
                desc: '甜美粉红'
            }
        };

        const colors = themeColors[themeId] || themeColors.default;

        // 创建一个简化的厨房配色示意图
        return `
            <div style="width: 100%; height: 100%; position: relative; overflow: hidden; border-radius: 8px;">
                <!-- 地板 -->
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;
                            background: repeating-linear-gradient(45deg, ${colors.bg1}, ${colors.bg1} 10px, ${colors.bg2} 10px, ${colors.bg2} 20px);"></div>

                <!-- 墙壁条 -->
                <div style="position: absolute; top: 5%; left: 5%; right: 5%; height: 10%; background: ${colors.wall};"></div>

                <!-- 橱柜1 -->
                <div style="position: absolute; top: 25%; left: 10%; width: 25%; height: 35%; background: ${colors.cabinet}; border: 2px solid rgba(0,0,0,0.2);"></div>

                <!-- 橱柜2 -->
                <div style="position: absolute; bottom: 10%; left: 30%; right: 30%; height: 20%; background: ${colors.cabinet}; border: 2px solid rgba(0,0,0,0.2);"></div>

                <!-- 冰箱 -->
                <div style="position: absolute; top: 25%; right: 10%; width: 20%; height: 40%; background: linear-gradient(to right, ${colors.bg2}, ${this.adjustColor(colors.bg2, 20)}); border: 2px solid rgba(0,0,0,0.3);"></div>

                ${themeId === 'scifi' ? `<div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,255,255,0.1) 100%);"></div>` : ''}

                ${themeId === 'candy' ? `<div style="position: absolute; top: 20%; left: 20%; width: 8px; height: 8px; border-radius: 50%; background: #ff69b4;"></div>
                <div style="position: absolute; top: 40%; left: 60%; width: 6px; height: 6px; border-radius: 50%; background: #ffb3d9;"></div>
                <div style="position: absolute; top: 60%; left: 30%; width: 7px; height: 7px; border-radius: 50%; background: #fff0f8;"></div>` : ''}

                <!-- 主题标签 -->
                <div style="position: absolute; bottom: 5px; left: 50%; transform: translateX(-50%);
                            background: rgba(0,0,0,0.6); color: white; padding: 2px 8px;
                            border-radius: 10px; font-size: 10px; white-space: nowrap;">${colors.desc}</div>
            </div>
        `;
    }

    // 抽奖系统
    gacha(category) {
        const gachaCost = 50;

        if (this.coins < gachaCost) {
            alert('金币不足！抽一次需要50金币');
            return;
        }

        // 扣除金币
        this.coins -= gachaCost;

        // 根据概率抽取物品
        const item = this.rollGacha(category);

        // 检查是否已拥有
        const isNew = !this.ownedItems.includes(item.id);

        if (isNew) {
            // 添加到已拥有列表
            this.ownedItems.push(item.id);

            // 自动装备新物品
            if (category === 'slippers') {
                this.equippedSlipper = item.id;
            } else if (category === 'themes') {
                this.equippedTheme = item.id;
            } else if (category === 'effects') {
                this.equippedEffect = item.id;
            }

            // 显示抽奖结果
            this.showGachaResult(item, true, 0, category);
        } else {
            // 重复物品，返还部分金币
            const refund = item.rarity === 'epic' ? 30 : (item.rarity === 'rare' ? 20 : 10);
            this.coins += refund;
            this.showGachaResult(item, false, refund, category);
        }

        // 保存数据
        this.saveGameData();
        this.updateUI();

        // 刷新商店显示
        setTimeout(() => {
            this.renderShop();
        }, 2000);

        console.log('🎰 抽奖结果:', item.name, isNew ? '(新)' : '(重复)');
    }

    // 抽奖概率计算
    rollGacha(category) {
        const items = SHOP_ITEMS[category];

        // 分离不同稀有度的物品
        const commonItems = items.filter(i => i.rarity === 'common');
        const rareItems = items.filter(i => i.rarity === 'rare');
        const epicItems = items.filter(i => i.rarity === 'epic');

        // 概率：common 60%, rare 30%, epic 10%
        const rand = Math.random() * 100;

        let selectedRarity;
        let pool;

        if (rand < 60) {
            // 60% 概率抽到普通
            selectedRarity = 'common';
            pool = commonItems;
        } else if (rand < 90) {
            // 30% 概率抽到稀有
            selectedRarity = 'rare';
            pool = rareItems;
        } else {
            // 10% 概率抽到史诗
            selectedRarity = 'epic';
            pool = epicItems;
        }

        // 从对应池子中随机选择一个
        const item = pool[Math.floor(Math.random() * pool.length)];

        console.log(`🎲 抽奖概率roll: ${rand.toFixed(1)}%, 稀有度: ${selectedRarity}, 结果: ${item.name}`);

        return item;
    }

    // 显示抽奖结果
    showGachaResult(item, isNew, refund = 0, category = 'slippers') {
        const rarityColors = {
            'common': '#95a5a6',
            'rare': '#3498db',
            'epic': '#9b59b6'
        };

        const rarityNames = {
            'common': '普通',
            'rare': '稀有',
            'epic': '史诗'
        };

        // 为主题生成预览图
        let previewHTML = `<div style="font-size: 4em; margin-bottom: 10px;">${item.icon}</div>`;
        if (category === 'themes') {
            previewHTML = `
                <div style="width: 200px; height: 150px; margin: 0 auto 20px; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                    ${this.generateThemePreview(item.id)}
                </div>
            `;
        }

        const resultDiv = document.createElement('div');
        resultDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            text-align: center;
            min-width: 350px;
            animation: fadeIn 0.3s;
            border: 4px solid ${rarityColors[item.rarity]};
        `;

        resultDiv.innerHTML = `
            ${previewHTML}
            <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 10px; color: ${rarityColors[item.rarity]};">
                ${rarityNames[item.rarity]}
            </div>
            <div style="font-size: 1.8em; font-weight: bold; margin-bottom: 15px;">
                ${item.name}
            </div>
            <div style="font-size: 1.1em; color: ${isNew ? '#27ae60' : '#e67e22'};">
                ${isNew ? '✨ 新获得！已自动装备' : `🔄 重复物品<br>返还 ${refund} 金币`}
            </div>
        `;

        document.body.appendChild(resultDiv);

        // 2秒后自动关闭
        setTimeout(() => {
            resultDiv.style.opacity = '0';
            resultDiv.style.transition = 'opacity 0.3s';
            setTimeout(() => {
                document.body.removeChild(resultDiv);
            }, 300);
        }, 1700);
    }

    // 装备物品
    equipItem(category, itemId) {
        if (category === 'slippers') {
            this.equippedSlipper = itemId;
        } else if (category === 'themes') {
            this.equippedTheme = itemId;
        } else if (category === 'effects') {
            this.equippedEffect = itemId;
        }

        this.saveGameData();
        this.renderShop();

        console.log('✅ 装备成功:', itemId);
    }
}


// 初始化游戏
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new Game();
});
