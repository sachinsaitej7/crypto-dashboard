import { COLORS } from '@/constants/colors'

class ColorService {
    currentIndex: number = 0;
    colorMap: Map<string, string> = new Map();

    getColor(id: string): string {
        if (this.colorMap.has(id)) {
            return this.colorMap.get(id) as string;
        }
        const color = COLORS[this.currentIndex];
        this.colorMap.set(id, color);
        this.currentIndex = (this.currentIndex + 1) % COLORS.length;
        return color;
    }

    reset() {
        this.currentIndex = 0;
        this.colorMap = new Map();
    }
}

export default ColorService;