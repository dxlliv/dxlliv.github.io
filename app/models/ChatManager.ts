export class ChatManager {
    chat: {
        author: string
        text: string
    }[] = []
    listElement: any
    agentBaseURL: string
    userId: string
    roomId: string

    constructor(listElement: any, agentBaseURL: string) {
        this.listElement = listElement
        this.agentBaseURL = agentBaseURL

        this.userId = ChatManager.generateID('xxxxxxx')
        this.roomId = `room-${ChatManager.generateID('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')}`
    }

    static generateID(template: string): string {
        return template.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0
            const v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
    }

    scrollToBottom(): void {
        this.listElement.$el.scrollTop = this.listElement.$el.scrollHeight
    }

    addNewMessage(author: string, text: string): void {
        this.chat.push({
            author,
            text,
        })

        setTimeout(() => {
            this.scrollToBottom()
        }, 25)
    }

    async sendMessage(text: string): Promise<void> {
        const data = {
            text,
            userId: this.userId,
            roomId: this.roomId,
        }

        const url = `${this.agentBaseURL}/message`

        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`)
                }

                return response.json()
            })
            .then((messages) => {
                if (messages.length > 0) {
                    this.addNewMessage('bot', messages[0].text)
                }
            })
            .catch(async () => {
                return new Promise(resolve => setTimeout(() => {
                    this.addNewMessage('bot', "I'm not available right now")
                    resolve(true)
                }, 3000))
            })
    }
}