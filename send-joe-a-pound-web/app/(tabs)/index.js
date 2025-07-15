import { ScrollView, View, Text, StyleSheet, Linking, Platform, TouchableOpacity } from "react-native";
import HeroSection from "../../components/HeroSection";
import Service from "../../components/ServicesSection";
import Stat from "../../components/StatsSection";
import PleaSection from "../../components/PleaSection";
import ContactLink from "../../components/ContactLink";

const openLink = (url) => {
  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    Linking.openURL(url);
  }
};

export default function Index() {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <HeroSection 
        subtitle="A broke software engineer enjoying summer holidays"
        description="I love going to the pub, seeing friends, playing tennis and golf. Sadly also enjoy coding and avoiding job hunting. Currently broke but having the time of my life!"
      />

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>What I Do For Fun</Text>
        <View style={styles.servicesGrid}>
          <Service icon="🍺" title="Drinks" description="Pints with friends = perfect evening" />
          <Service icon="⛳" title="Golf" description="The slice is the most consistent thing in my life." />
          <Service icon="🎾" title="Tennis" description="Decent backhand, terrible serve" />
          <Service icon="🏊‍♂️" title="Swimming" description="Rivers, pools, lakes." />
          <Service icon="💻" title="Coding" description="Nerdy I know. Working on it." />
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <View style={styles.statsContent}>
          <Text style={styles.statsTitle}>My Summer Stats</Text>
          <View style={styles.statsGrid}>
            <Stat number="£39.76" label="Current Bank Balance" />
            <Stat number="∞" label="Friends Seen" />
            <Stat number="Too Many" label="Hangovers" />
            <Stat number="-1" label="Girls Kissed" />
            <Stat number="0" label="Job Applications" />
          </View>
        </View>
      </View>

      <PleaSection 
        mainText="I'm a Computer Science & AI student taking a well-earned break from algorithms, Git conflicts, and caffeine dependency. This summer I just want to enjoy the sun, see my friends, and occasionally afford a pint (or two). I could get a job… But have you seen the weather? If you've ever been a broke student, or just fancy helping someone make it to the next round of beers — I'd love it if you sent me £1. No guilt. No catch. Just broke. ✌️"
        subText="If you enjoyed my story or just want to help a fellow human out..."
        gratitudeText="Every pound helps me buy a pint and avoid the job hunt!"
        
      />


      {/* Contact Section */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Get In Touch</Text>
        <Text style={styles.contactSubtitle}>Let&apos;s grab a drink 🍺</Text>
        
        <ContactLink 
          name="LinkedIn"
          imageSource={require("../../assets/images/LinkedIn.png")}
          url="https://linkedin.com/in/joseph-hill-017903255"
        />
        
        <ContactLink 
          name="Instagram"
          imageSource={require("../../assets/images/Instagram_icon.png")}
          url="https://instagram.com/joehill06"
        />
        
        <ContactLink 
          name="GitHub"
          imageSource={require("../../assets/images/git_hub.webp")}
          url="https://github.com/joehill06"
        />
        
      </View>

      
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  servicesSection: {
    backgroundColor: "#ffffff",
    padding: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 32,
    fontWeight: "800",
    color: "#212529",
    marginBottom: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40,
    textAlign: "center",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "space-between",
  },
  statsSection: {
    backgroundColor: "#212529",
    padding: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40,
    marginTop: 2,
  },
  statsContent: {
    alignItems: "center",
  },
  statsTitle: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 32,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "column" : "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    alignItems: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? "center" : "stretch",
  },
  contactSection: {
    backgroundColor: "#ffffff",
    padding: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 40,
    marginTop: 2,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: Platform.OS === 'web' && typeof window !== 'undefined' && window.innerWidth < 768 ? 24 : 32,
    fontWeight: "800",
    color: "#212529",
    marginBottom: 10,
    textAlign: "center",
  },
  contactSubtitle: {
    fontSize: 16,
    color: "#6c757d",
    textAlign: "center",
    marginBottom: 30,
  },
});