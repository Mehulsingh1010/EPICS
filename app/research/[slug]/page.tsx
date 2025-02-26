import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Post = {
  title: string;
  content: string;
};

const posts: { [key: string]: Post } = {
  "post-1": {
    title: "Psycho-physiological Training Approach for Amputee Rehabilitation",
    content: `
      <h2 class='text-2xl font-semibold mb-4'>Introduction</h2>
      <p class='mb-4'>Electromyography (EMG) signals are like the electrical whispers of your muscles. When your muscles contract, they generate these signals, which can be captured and analyzed to understand muscle function. These signals are especially important for controlling prosthetic limbs. However, EMG signals are often noisy, like trying to hear a whisper in a crowded room, making them difficult to capture accurately. Traditional methods use analog circuits for amplification and filtering, but these can be unstable and unreliable.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Frequency Range of EMG Signals</h2>
      <p class='mb-4'>Surface EMG signals cover a wide frequency range from 6Hz to 600Hz, with the most important signals falling between 20Hz and 150Hz. Imagine trying to tune into a radio station; you need to filter out all the static and other stations to hear your favorite song clearly. Similarly, processing EMG signals requires precise amplification and filtering to isolate the useful data from the noise.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Project Aim</h2>
      <p class='mb-4'>The goal of this project was to develop a reliable and easy-to-use method for analyzing EMG signals across their entire frequency range. Instead of using traditional analog techniques, we designed a digital signal processing approach. This method involves converting the time-domain signals (how the signal changes over time) into the frequency domain (breaking the signal down into its component frequencies), which provides a clearer picture of the data.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Methodology</h2>
      <h3 class='text-xl font-medium mt-4 mb-2'>Signal Processing Technique</h3>
      <p class='mb-4'>We implemented our signal processing technique on an Arduino Uno board. This digital approach eliminates the need for analog amplifiers and filters, which can be unstable. By performing all tasks such as amplification, filtering, and thresholding digitally on the Arduino board, we created a more stable and reliable system.</p>
      
      <pre class='bg-gray-900 text-white p-4 rounded-lg overflow-auto'><code>
      import numpy as np
      import matplotlib.pyplot as plt
      
      fs = 1000  # Sampling frequency
      t = np.linspace(0, 1.0, fs)
      signal = np.sin(2 * np.pi * 50 * t) + 0.5 * np.random.randn(t.size)
      
      fft_signal = np.fft.fft(signal)
      frequencies = np.fft.fftfreq(len(fft_signal), 1/fs)
      
      plt.plot(frequencies, np.abs(fft_signal))
      plt.title('Frequency Spectrum')
      plt.xlabel('Frequency (Hz)')
      plt.ylabel('Amplitude')
      plt.show()
      </code></pre>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Psychophysiological Approach to Rehabilitation</h2>
      <p class='mb-4'>The detailed data obtained from spectrum analysis can be used for a new rehabilitation method, especially for controlling prosthetic limbs. This psychophysiological approach can reduce the cost of myoelectric arms and increase their efficiency. By allowing users to control their muscles in a less stressful environment, this method enhances the overall rehabilitation process.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Practical Application</h2>
      <p class='mb-4'>To demonstrate the effectiveness of this approach, we used DSP-processed EMG signals to play an online game. This practical application shows how the technique can be used in real-world rehabilitation scenarios, providing a fun and engaging way for users to train and improve their muscle control.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Conclusion</h2>
      <p class='mb-4'>This innovative signal processing technique offers a stable and reliable solution for analyzing EMG signals. By leveraging spectrum analysis and digital processing on an Arduino Uno board, we developed a cost-effective and efficient method for prosthesis control. This psychophysiological approach to rehabilitation has the potential to significantly benefit amputees by providing a less stressful and more effective training environment.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Authors</h2>
      <ul class='list-disc pl-6'>
        <li>Chandan Dhal</li>
        <li>Akshat Wahi</li>
      </ul>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>References</h2>
      <ul class='list-disc pl-6'>
        <li>PMID: 25793347</li>
        <li>DOI: 10.2345/0899-8205-49.2.138</li>
      </ul>
    `,
  },
  "post-2": {
    title: "Analysis of Digital Filtering Design Based on Surface EMG Signals",
    content: `
      <h2 class='text-2xl font-semibold mb-4'>Abstract</h2>
      <p class='mb-4'>In this project, we designed a Butterworth Infinite Impulse Response (IIR) digital filter to clean up surface Electromyography (sEMG) signals. Think of sEMG signals as the electrical activity produced by your muscles when they contract. These signals can get noisy, much like trying to hear a conversation in a crowded room. Our digital filter helps to clear out the noise, making the muscle signals easier to understand. We specifically target noise from industrial electrical interference (at 50 Hz) and slow fluctuations in the signal (baseline drift). The results show that our filter can significantly reduce noise and make the sEMG signals much cleaner, which is great for developing smaller, more practical EMG devices.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Introduction</h2>
      <p class='mb-4'>Surface electromyography (sEMG) is a technique used to measure the electrical activity produced by skeletal muscles. Imagine trying to listen to a friend talking in a noisy room; the background noise makes it hard to hear them clearly. Similarly, sEMG signals are often contaminated with noise, making it essential to design effective filtering techniques to obtain clean and usable data. This paper discusses the development of a Butterworth IIR digital filter to replace high-cost analog filters, aiming to achieve desirable sEMG signals by addressing noise from industrial frequency interference (typically at 50 Hz) and baseline drift.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Methodology</h2>
      <h3 class='text-xl font-medium mt-4 mb-2'>Digital Filtering Design</h3>
      <p class='mb-4'>The digital filtering design includes the following components:</p>
      <ol class='list-decimal pl-6 mb-4'>
        <li class='mb-2'><strong>50 Hz Interference Trap</strong>: This component is designed to specifically target and attenuate the 50 Hz frequency, which is a common source of noise due to industrial electrical interference. Think of it as a bouncer at a club who only lets in people who aren't causing trouble. The trap achieves a -60 dB attenuation at 50 Hz, effectively reducing this noise.</li>
        <li class='mb-2'><strong>High-Pass Digital Filter</strong>: This filter is used to remove low-frequency noise, including baseline drift, which can obscure the sEMG signal. Baseline drift is like a slow-moving wave that can make it hard to see the real signal. The high-pass filter acts like a sieve, letting through only the higher frequency signals and blocking the slow-moving waves.</li>
        <li class='mb-2'><strong>Low-Pass Digital Filter</strong>: This filter is used to remove high-frequency noise, which can be caused by electrical interference or other sources. Imagine trying to hear a conversation while someone is playing a high-pitched whistle in the background. The low-pass filter helps to remove these high-pitched noises, making the conversation (or in this case, the sEMG signal) clearer.</li>
      </ol>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>Butterworth IIR Filter</h3>
      <p class='mb-4'>The Butterworth filter is chosen for its smooth frequency response in the passband, meaning it does not have ripples and provides a smooth response. The Infinite Impulse Response (IIR) design allows for efficient implementation with fewer coefficients compared to Finite Impulse Response (FIR) filters, making it suitable for real-time applications.</p>
      
      <p class='mb-4'>Here's a simple Python code snippet to design a Butterworth IIR filter:</p>
      
      <pre class='bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4'><code>
from scipy.signal import butter, lfilter

# Design a Butterworth IIR filter
def butterworth_filter(data, cutoff, fs, order=5, filter_type='low'):
    nyquist = 0.5 * fs
    normal_cutoff = cutoff / nyquist
    b, a = butter(order, normal_cutoff, btype=filter_type, analog=False)
    filtered_data = lfilter(b, a, data)
    return filtered_data

# Example usage
import numpy as np

# Generate a sample signal with noise
fs = 500  # Sampling frequency
t = np.linspace(0, 1.0, fs)
signal = np.sin(2 * np.pi * 5 * t) + 0.5 * np.random.randn(t.size)

# Apply the Butterworth filter
cutoff = 50  # Cutoff frequency
filtered_signal = butterworth_filter(signal, cutoff, fs, order=4, filter_type='low')
      </code></pre>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Results</h2>
      <p class='mb-4'>Experimental results demonstrate that the filtering process achieves:</p>
      <ul class='list-disc pl-6 mb-4'>
        <li class='mb-2'><strong>-60 dB Trap Attenuation at 50 Hz</strong>: This significant reduction in the 50 Hz noise component ensures that industrial frequency interference is effectively mitigated.</li>
        <li class='mb-2'><strong>Effective Filtering of Both High-and Low-Frequency Signals</strong>: The combination of high-pass and low-pass filters ensures that the sEMG signal is free from both low-frequency baseline drift and high-frequency noise.</li>
      </ul>
      
      <p class='mb-4'>These results support the subsequent miniaturization of EMG bio-devices, making them more practical for wearable applications and extensive use in various fields such as rehabilitation, sports science, and human-computer interaction.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Conclusion</h2>
      <p class='mb-4'>The designed Butterworth IIR digital filter effectively replaces high-cost analog filters, providing a cost-effective solution for obtaining desirable sEMG signals. This innovation supports the miniaturization of EMG bio-devices, making them more accessible for various applications. The successful implementation of this digital filter design demonstrates its potential for improving the quality and usability of sEMG signals in practical applications.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>References</h2>
      <ol class='list-decimal pl-6'>
        <li>Zeyu Xiao, Jiaxiang Ye, +3 authors Han Xiao. "Analysis of Digital Filtering Design Based on Surface EMG Signals." 2023 IEEE 3rd International Conference on Electronic Communications, Internet of Things and Big Data (ICEIB), 14 April 2023. DOI: 10.1109/ICEIB57887.2023.10170168.</li>
        <li>Latif Rozaqi, Asep Nugroho, Kadek Heri Sanjaya, Artha Ivonita Simbolon. "Design of Analog and Digital Filter of Electromyography." 2019 International Conference on Sustainable Energy Engineering and Application (ICSEEA), 2019.</li>
        <li>Lei Shi, Kunpeng Wang, Z. Liu. "Design, Development and Testing of a Wearable sEMG Acquisition System." 2019 IEEE Intl Conf on Dependable, Autonomic and Secure Computing, 2019.</li>
        <li>Jiajia Wu, Xiaoou Li, Wanyang Liu, Z. Jane Wang. "sEMG Signal Processing Methods: A Review." Journal of Physics: Conference Series, 2019.</li>
        <li>Sangsoo Park, Hojun Yeom. "Design and Implementation of Real-time Electrical Stimulation Artifact Suppression based on STM32." Turkish Journal of Computer and Mathematics Education, 2021.</li>
      </ol>
    `,
  },
  "post-3": {
    title: "Fundamental Concepts in EMG Signal Acquisition for Prosthetic Arm Development",
    content: `
      <h2 class='text-2xl font-semibold mb-4'>Introduction</h2>
      <p class='mb-4'>Electromyography (EMG) signal acquisition is a critical component in the development of advanced prosthetic arms. This guide provides a detailed interpretation of the fundamental concepts necessary for capturing and processing EMG signals, ensuring high-quality data for controlling prosthetic devices. The information is based on the research paper by Gianluca De Luca, "Fundamental Concepts in EMG Signal Acquisition," and is tailored for beginners and intermediate users.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Table of Contents</h2>
      <ol class='list-decimal pl-6 mb-4'>
        <li class='mb-2'>What is Digital Sampling?
          <ul class='list-disc pl-6 mt-1'>
            <li>The Sampling Frequency</li>
            <li>How High Should the Sampling Frequency Be?</li>
            <li>Undersampling</li>
            <li>The Nyquist Frequency</li>
          </ul>
        </li>
        <li class='mb-2'>Sinusoids and the Fourier Transform
          <ul class='list-disc pl-6 mt-1'>
            <li>Decomposing Signals into Sinusoids</li>
            <li>The Frequency Domain</li>
            <li>Aliasing</li>
            <li>The Anti-Aliasing Filter</li>
          </ul>
        </li>
        <li class='mb-2'>Filters
          <ul class='list-disc pl-6 mt-1'>
            <li>The Ideal Filter Types</li>
            <li>Ideal Phase Response</li>
            <li>The Practical Filter</li>
            <li>Filter Order</li>
            <li>Filter Types</li>
          </ul>
        </li>
        <li class='mb-2'>Considerations for Analog-to-Digital Converters
          <ul class='list-disc pl-6 mt-1'>
            <li>Quantization</li>
            <li>Dynamic Range</li>
            <li>EMG Signal Quantization</li>
            <li>Determining the ADC Specifications</li>
          </ul>
        </li>
      </ol>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>What is Digital Sampling?</h2>
      <p class='mb-4'>Digital sampling is the process of converting an analog signal into a digital signal that can be processed by a computer. Think of it like taking snapshots of a moving object at regular intervals. Each snapshot captures a moment in time, and when you put them together, you get a digital representation of the movement.</p>
      <div class='flex justify-center my-6'>
        <img class='rounded-lg shadow-md' src="https://www.tutorialspoint.com/digital_communication/images/continuous_time_and_sampled_signal.jpg" alt="Digital sampling illustration">
      </div>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>The Sampling Frequency</h3>
      <p class='mb-4'>The sampling frequency is the rate at which the analog signal is sampled. It is measured in Hertz (Hz). For accurate EMG signal acquisition, the sampling frequency must be high enough to capture all the relevant information. Imagine you are filming a fast-moving car. If you take too few pictures per second, you will miss important details of the car's movement.</p>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>How High Should the Sampling Frequency Be?</h3>
      <p class='mb-4'>To avoid losing information, the sampling frequency should be at least twice the highest frequency present in the signal. This is known as the Nyquist Theorem. For example, if the highest frequency in your EMG signal is 500 Hz, you should sample at least at 1000 Hz to capture all the details.</p>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>Undersampling</h3>
      <p class='mb-4'>Undersampling occurs when the sampling frequency is too low, leading to aliasing, where high-frequency components are incorrectly represented as lower frequencies. It's like trying to capture the details of a fast-moving car with a slow camera; the car will appear blurry and distorted.</p>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>The Nyquist Frequency</h3>
      <div class='flex justify-center my-6'>
        <img class='rounded-lg shadow-md' src="https://miro.medium.com/v2/1*BnZAWV4OIwyJhX1gNrojPw.png" alt="Nyquist frequency illustration">
      </div>
      <p class='mb-4'>The Nyquist Frequency is half the sampling rate of a discrete signal processing system. It is the highest frequency that can be accurately represented. If you sample at 1000 Hz, your Nyquist Frequency is 500 Hz.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Implementing Filters in Python</h2>
      <p class='mb-4'>You can use the <code>scipy</code> library in Python to implement these filters. Here's an example of a low-pass filter:</p>
      
      <pre class='bg-gray-900 text-white p-4 rounded-lg overflow-auto mb-4'><code>
import numpy as np
from scipy.signal import butter, lfilter

# Create a Butterworth low-pass filter
def butter_lowpass(cutoff, fs, order=5):
    nyquist = 0.5 * fs
    normal_cutoff = cutoff / nyquist
    b, a = butter(order, normal_cutoff, btype='low', analog=False)
    return b, a

# Apply the filter to a signal
def lowpass_filter(data, cutoff, fs, order=5):
    b, a = butter_lowpass(cutoff, fs, order=order)
    y = lfilter(b, a, data)
    return y

# Example usage
fs = 1000  # Sampling frequency
cutoff = 100  # Desired cutoff frequency of the filter, Hz
order = 6  # Filter order
t = np.linspace(0, 1.0, fs)
data = np.sin(1.2*2*np.pi*t) + 1.5*np.cos(9*2*np.pi*t) + 0.5*np.sin(12.0*2*np.pi*t)

filtered_data = lowpass_filter(data, cutoff, fs, order)
      </code></pre>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Conclusion</h2>
      <p class='mb-4'>Understanding and applying these fundamental concepts in EMG signal acquisition is crucial for developing advanced prosthetic arms. Proper sampling, filtering, and quantization ensure high-quality data, enabling precise control of prosthetic devices. By following these guidelines, you can ensure that your EMG signal acquisition system is optimized for accuracy and reliability.</p>
      
      <p class='mb-4'>For more detailed information, refer to the original research paper by Gianluca De Luca and the suggested reading list.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>References</h2>
      <ul class='list-disc pl-6'>
        <li>De Luca, G. (2003). Fundamental Concepts in EMG Signal Acquisition. DelSys Inc.</li>
        <li>Additional resources and textbooks on signal processing and EMG signal acquisition.</li>
      </ul>
    `,
  },
  "post-4": {
    title: "Electromyography (EMG) Signal Acquisition and Processing: A Comprehensive Review",
    content: `
      <h2 class='text-2xl font-semibold mb-4'>Abstract</h2>
      <p class='mb-4'>Electromyography (EMG) is a technique for recording biomedical electrical signals obtained from neuromuscular activities. These signals are used to monitor medical abnormalities and activation levels, and also to analyze the biomechanics of any animal movements. In this article, we provide a short review of EMG signal acquisition and processing techniques. The average efficiency of capture of EMG signals with current technologies is around 70%. Once the signal is captured, signal processing algorithms then determine the recognition accuracy, with which signals are decoded for their corresponding purpose (e.g., moving robotic arm, speech recognition, gait analysis). The recognition accuracy can go as high as 99.8%. The accuracy with which the EMG signal is decoded has already crossed 99%, and with improvements in deep learning technology, there is a large scope for improvement in the design hardware that can efficiently capture EMG signals.</p>
      
      <p class='mb-4'><strong>Keywords:</strong> EMG, Electromyogram, sEMG</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Introduction</h2>
      <p class='mb-4'>The electrical activities generated by skeletal muscles represent the core EMG signal. EMG is used to read myoelectric signals via electrical measurements. These myoelectric signals are generated from motor neurons which are a part of the central nervous system (CNS). As EMG signals are due to neuromuscular activity, they can be used to diagnose muscle injury, nerve damage, and muscle dysfunction that happens due to neurological and muscular disorder. EMG signals are used to gather simple statistics or can be even used with advanced deep learning to control complex robotic applications.</p>
      
      <p class='mb-4'>Furthermore, in some cases, EMG signals can be used for gait analysis and capturing muscle movements. The basic temporal characteristics of the EMG signal include amplitude, phase, rise time, and duration. A satellite is a small signal followed by the main EMG signal.</p>
      
      <div class='flex justify-center my-6'>
        <img class='rounded-lg shadow-md' src="https://cdn.ncbi.nlm.nih.gov/pmc/blobs/247a/7755956/2ed14432fd65/12551_2020_770_Fig1_HTML.jpg" alt="EMG signal visualization">
      </div>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Types of Electrodes</h2>
      <p class='mb-4'>There are two major types of electrodes used to measure EMG signals:</p>
      
      <ol class='list-decimal pl-6 mb-4'>
        <li class='mb-2'><strong>Needle Electrodes</strong>:
          <ul class='list-disc pl-6 mt-1'>
            <li>Mono-polar single electrodes</li>
            <li>Single-fiber EMG electrodes</li>
            <li>Concentric-EMG electrodes</li>
          </ul>
        </li>
        <li class='mb-2'><strong>Surface Electrodes</strong>:
          <ul class='list-disc pl-6 mt-1'>
            <li>Gelled EMG electrodes</li>
            <li>Dry EMG electrodes</li>
          </ul>
        </li>
      </ol>
      
      <p class='mb-4'>Surface electrodes are non-invasive and work on the principle of chemical equilibrium detecting the change between the muscle surface and body skin through electrolytic conduction.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Comparison with Other Electrograms</h2>
      <p class='mb-4'>There are three main types of electrograms:</p>
      <ul class='list-disc pl-6 mb-4'>
        <li>Electroencephalogram (EEG)</li>
        <li>Electrocardiogram (ECG)</li>
        <li>Electromyogram (EMG)</li>
      </ul>
      
      <p class='mb-4'>The advantage of using EMG over ECG and EEG is that ECG and EEG signals are below 100 Hz whereas EMG signals cover the range from 5 Hz to 2 kHz.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Applications</h2>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>Speech Recognition</h3>
      <p class='mb-4'>Many researchers have used EMG for speech recognition. Achieved recognition rates lie between 68 and 97% with an average success rate of 85.4%. Recently, innovative methods of speech recognition using EMG signals from the face have achieved 92.1% accuracy.</p>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>Robotic Applications</h3>
      <p class='mb-4'>EMG signals are often used as input in a lot of robotic applications. For example, a portable EMG circuit for a prosthetic arm has achieved high fidelity and excellent signal to noise ratio.</p>
      
      <h3 class='text-xl font-medium mt-4 mb-2'>Diagnostic Applications</h3>
      <p class='mb-4'>Different techniques for EMG signal processing have been used for the functional evaluation of patients with conditions like spastic diplegia. EMG signals have also been used to analyze finger movements and classify them into different types.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>EMG Signal Acquisition and Processing</h2>
      <p class='mb-4'>A low-cost EMG system for the acquisition of Arm Activities Recognition (AAR) found that about 80% of the EMG signals were captured efficiently with an overall accuracy for AAR of about 79%. Various obstacles like noise can interrupt EMG signal acquisition, and methods for their detection and classification have been developed.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Analysis and Discussion</h2>
      <p class='mb-4'>For the purposes of this review, the capture efficiency, error rate, classification accuracy, type of electrode, and recognition accuracy of multiple published papers were recorded. Recognition accuracy ranges from 68 to 99.8%, with the majority of recorded literature showing more than 90% accuracy. However, the capture efficiency for EMG signals is considerably lower, lying in the range of 50 to 80%. Hence, there is a large scope for improvement in designing proper EMG signal acquisition hardware with minimal noise.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>Conclusion</h2>
      <p class='mb-4'>EMG signal acquisition and processing have vast applications in medical diagnostics, speech recognition, and robotic control. While recognition accuracy has reached impressive levels, there is still significant room for improvement in capture efficiency. Future advancements in deep learning and hardware design are expected to enhance the effectiveness of EMG signal acquisition and processing.</p>
      
      <h2 class='text-2xl font-semibold mt-6 mb-4'>References</h2>
      <ul class='list-disc pl-6'>
        <li>De Luca et al. (2006)</li>
        <li>Merlo et al. (2003)</li>
        <li>Jorgensen et al. (2003)</li>
        <li>Meltzner et al. (2011)</li>
        <li>Khushaba et al. (2012)</li>
        <li>Chan et al. (2001)</li>
        <li>Jou et al. (2006)</li>
        <li>Lee (2008)</li>
        <li>Osu and Gomi (1999)</li>
        <li>Wang and Buchanan (2002)</li>
        <li>Khan et al. (2012)</li>
        <li>Kiguchi et al. (2004)</li>
        <li>Samarawickrama et al. (2018)</li>
        <li>Jamal (2012)</li>
        <li>Nawab et al. (2010)</li>
        <li>Zecca et al. (2002)</li>
        <li>Wang et al. (2013)</li>
        <li>Pauk (2008)</li>
        <li>Witman et al. (2019)</li>
        <li>Di Nardo et al. (2014)</li>
        <li>Pancholi and Agarwal (2016)</li>
        <li>Reaz et al. (2006)</li>
        <li>Shiavi and Negin (1973)</li>
        <li>Pizzolato et al. (2017)</li>
        <li>Mambrito and De Luca (1984, 1983)</li>
        <li>Khushaba et al. (2013)</li>
        <li>Myers et al. (2003)</li>
        <li>Gijsberts et al. (2014)</li>
        <li>Milosevic et al. (2017)</li>
        <li>Mukhopadhyay and Samui (2020)</li>
        <li>Phinyomark et al. (2020)</li>
        <li>Fang et al. (2020)</li>
        <li>Lin and Robinson (2020)</li>
        <li>Khezri and Jahed (2007)</li>
        <li>Güler and Koçer (2005)</li>
  const post: Post | undefined = posts[params.slug];
    `,
  },
};
export default function Page({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-4xl mt-16 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">{post.title}</h1>
      <div className="prose max-w-none leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-8 flex justify-center">
        <Button asChild className="px-6 py-3 text-lg font-semibold">
          <Link href="/research">Back to Page</Link>
        </Button>
      </div>
    </article>
  );
}