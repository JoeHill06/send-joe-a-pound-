import { ScrollView, View, Text, StyleSheet, Alert, Linking, Platform, TouchableOpacity } from "react-native";
import { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Service from "../../components/ServicesSection";
import Stat from "../../components/StatsSection";
import PleaSection from "../../components/PleaSection";
import Contact from "../../components/ContactSection";

const openLink = (url) => {
  if (Platform.OS === 'web') {
    window.open(url, '_blank');
  } else {
    Linking.openURL(url);
  }
};

const DonateButton = () => {
  return (
    <View style={{ marginTop: 20, alignItems: 'center' }}>
      {Platform.OS === 'web' ? (
        <a
          href="https://buy.stripe.com/cNi3cubpN7CH4J60BjaIM00"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: '#1e90ff',
              color: 'white',
              fontSize: '18px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Donate £1
          </button>
        </a>
      ) : (
        <TouchableOpacity
          onPress={() => Linking.openURL('https://buy.stripe.com/cNi3cubpN7CH4J60BjaIM00')}
          style={{
            backgroundColor: '#1e90ff',
            padding: 12,
            borderRadius: 8
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
            Donate £1
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default function Index() {
  const handleDonatePress = () => {
    // Unused now but kept in case it's passed to components
    openLink("https://buy.stripe.com/cNi3cubpN7CH4J60BjaIM00");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection 
        subtitle="A broke software engineer enjoying summer holidays"
        description="I love going to the pub, seeing friends, playing tennis and golf. Sadly also enjoy coding and avoiding job hunting. Currently broke but having the time of my life!"
        onButtonPress={handleDonatePress}
      />

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
        onButtonPress={handleDonatePress}
      />

      <DonateButton />

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Get In Touch</Text>
        <Text style={styles.contactSubtitle}>Let's grab a drink 🍺</Text>

        <TouchableOpacity onPress={() => openLink("https://linkedin.com/in/joseph-hill-017903255")}>
          <Text style={{ fontSize: 18, color: "#1e90ff", marginBottom: 10 }}>LinkedIn: joseph-hill-017903255</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://instagram.com/joehill06")}>
          <Text style={{ fontSize: 18, color: "#1e90ff", marginBottom: 10 }}>Instagram: @joehill06</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://github.com/joehill06")}>
          <Text style={{ fontSize: 18, color: "#1e90ff", marginBottom: 10 }}>GitHub: @joehill06</Text>
        </TouchableOpacity>
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
    padding: 40,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#212529",
    marginBottom: 40,
    textAlign: "center",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  statsSection: {
    backgroundColor: "#212529",
    padding: 40,
    marginTop: 2,
  },
  statsContent: {
    alignItems: "center",
  },
  statsTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 40,
    textAlign: "center",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
  contactSection: {
    backgroundColor: "#ffffff",
    padding: 40,
    marginTop: 2,
    alignItems: "center",
  },
  contactTitle: {
    fontSize: 32,
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