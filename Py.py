from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.image import Image
from kivy.uix.label import Label
from kivy.uix.button import Button
import webbrowser
from kivy.uix.scrollview import ScrollView
from kivy.core.window import Window

class PortfolioApp(App):

    def build(self):
        self.theme = "light"
        Window.clearcolor = (1, 1, 1, 1)  # fond blanc

        layout = BoxLayout(orientation='vertical', padding=10, spacing=10, size_hint_y=None)
        layout.bind(minimum_height=layout.setter('height'))

        # Photo
        img = Image(source='assets/img/photo.jpg', size_hint=(1, 0.4))
        layout.add_widget(img)

        # Bio
        bio = Label(
            text="Salut, je suis Dyce Nekomonji.\nCréatif digital et développeur.\n\"Créer c'est exister deux fois.\"",
            font_size=20,
            size_hint_y=None,
            height=100
        )
        layout.add_widget(bio)

        # Services
        services = Label(
            text="Services :\n- Développement Web\n- Design Graphique\n- Illustration Manga",
            font_size=16,
            size_hint_y=None,
            height=100
        )
        layout.add_widget(services)

        # Bouton WhatsApp
        btn_whatsapp = Button(text="📞 Contact WhatsApp", size_hint=(1, None), height=40)
        btn_whatsapp.bind(on_press=self.open_whatsapp)
        layout.add_widget(btn_whatsapp)

        # Bouton Mode sombre / clair
        btn_theme = Button(text="🌙 Basculer thème", size_hint=(1, None), height=40)
        btn_theme.bind(on_press=self.toggle_theme)
        layout.add_widget(btn_theme)

        # Bouton formulaire de contact
        btn_contact = Button(text="📬 Envoyer un mail", size_hint=(1, None), height=40)
        btn_contact.bind(on_press=self.send_email)
        layout.add_widget(btn_contact)

        scroll = ScrollView(size_hint=(1, 1), do_scroll_y=True)
        scroll.add_widget(layout)

        return scroll

    def open_whatsapp(self, instance):
        webbrowser.open("https://wa.me/33600000000")

    def send_email(self, instance):
        webbrowser.open("mailto:tonemail@mail.com?subject=Contact%20depuis%20l'appli")

    def toggle_theme(self, instance):
        if self.theme == "light":
            Window.clearcolor = (0.1, 0.1, 0.1, 1)  # fond sombre
            self.theme = "dark"
        else:
            Window.clearcolor = (1, 1, 1, 1)
            self.theme = "light"

if __name__ == '__main__':
    PortfolioApp().run()
